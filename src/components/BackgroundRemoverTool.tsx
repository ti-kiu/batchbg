"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import JSZip from "jszip";

export interface ProcessedImage {
  id: string;
  file: File;
  originalUrl: string;
  resultUrls: Record<string, string>;
  previewMode: string;
  status: "queued" | "processing" | "done" | "error";
  progress: number;
  error?: string;
  auditResult?: AuditResult;
}

export interface AuditResult {
  pass: boolean;
  cornerWhite: boolean;
  cornerColor: string;
  fillRate: number;
  width: number;
  height: number;
}

export type BgMode = "transparent" | "white" | "custom";
export type ToolMode = "batch" | "showcase" | "audit" | "quick";

const ALL_MODES: BgMode[] = ["transparent", "white", "custom"];
const MODE_LABELS: Record<BgMode, string> = { transparent: "Transparent", white: "White", custom: "Custom" };

/** Showcase variant definitions */
const SHOWCASE_VARIANTS = [
  { key: "white", label: "Pure white", color: "#ffffff" },
  { key: "black", label: "Black", color: "#111111" },
  { key: "studio", label: "Warm studio", color: "#ece7df" },
  { key: "brand", label: "Brand blue", color: "#2563eb" },
];

let session: any = null;
let ort: any = null;
const maskStore = new Map<string, ImageData>();

async function loadModel() {
  if (session) return session;
  ort = await import("onnxruntime-web");
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.30.0/dist/";
  const canMultiThread = typeof SharedArrayBuffer !== "undefined";
  ort.env.wasm.numThreads = canMultiThread ? Math.min(navigator.hardwareConcurrency - 1, 4) : 1;
  const SESSION_TIMEOUT = 120000;
  session = await Promise.race([
    ort.InferenceSession.create("/models/u2netp.onnx", { executionProviders: ["wasm"] }),
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Model load timed out")), SESSION_TIMEOUT)),
  ]);
  return session;
}

/**
 * Mask post-processing v5 — fixes dark clothing / low-confidence region fog
 * Ported from mask-postprocess.js + worker.js (verified 2026-09-19)
 */
async function removeBackground(imageBitmap: ImageBitmap): Promise<ImageData> {
  const s = await loadModel();
  const SIZE = 320;
  const N = SIZE * SIZE;

  // Prepare 320×320 input
  const pc = new OffscreenCanvas(SIZE, SIZE);
  const pctx = pc.getContext("2d", { willReadFrequently: true })!;
  pctx.drawImage(imageBitmap, 0, 0, SIZE, SIZE);
  const px = pctx.getImageData(0, 0, SIZE, SIZE).data;

  // CHW layout with ImageNet normalization (u2netp training distribution)
  const MEAN = [0.485, 0.456, 0.406];
  const STD = [0.229, 0.224, 0.225];
  const data = new Float32Array(3 * N);
  for (let i = 0; i < N; i++) {
    data[i] = (px[i * 4] / 255 - MEAN[0]) / STD[0];
    data[N + i] = (px[i * 4 + 1] / 255 - MEAN[1]) / STD[1];
    data[2 * N + i] = (px[i * 4 + 2] / 255 - MEAN[2]) / STD[2];
  }

  const tensor = new ort.Tensor("float32", data, [1, 3, SIZE, SIZE]);
  const feeds: Record<string, any> = {};
  feeds[s.inputNames[0]] = tensor;
  const results = await s.run(feeds);
  const pred = results[s.outputNames[0]].data as Float32Array;

  // === Post-processing v5 ===
  // Step 0: min-max normalize
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < N; i++) { const v = pred[i]; if (v < lo) lo = v; if (v > hi) hi = v; }
  const span = (hi - lo) || 1e-8;
  const a32 = new Float32Array(N);
  for (let i = 0; i < N; i++) a32[i] = (pred[i] - lo) / span;

  const TH = 0.5, SOFT = 0.14, CDIST = 55;

  // Hard binary mask
  const hard = new Uint8Array(N);
  for (let i = 0; i < N; i++) hard[i] = a32[i] >= TH ? 1 : 0;

  // Step 1: Flood fill from edges — low-confidence connected to edge = background
  const bg = new Uint8Array(N);
  const st: number[] = [];
  for (let x = 0; x < SIZE; x++) st.push(x, (SIZE - 1) * SIZE + x);
  for (let y = 0; y < SIZE; y++) st.push(y * SIZE, y * SIZE + SIZE - 1);
  while (st.length) {
    const i = st.pop()!;
    if (i < 0 || i >= N || bg[i] || hard[i]) continue;
    bg[i] = 1;
    const x = i % SIZE, y = (i - x) / SIZE;
    if (x > 0) st.push(i - 1); if (x < SIZE - 1) st.push(i + 1);
    if (y > 0) st.push(i - SIZE); if (y < SIZE - 1) st.push(i + SIZE);
  }

  // Step 2: Background reference color = median of bg low-confidence pixels
  const rs: number[] = [], gs: number[] = [], bs: number[] = [];
  for (let i = 0; i < N; i++) {
    if (bg[i] && a32[i] < 0.3) { rs.push(px[i * 4]); gs.push(px[i * 4 + 1]); bs.push(px[i * 4 + 2]); }
  }
  const median = (a: number[]) => { a.sort((x, y) => x - y); return a[a.length >> 1] || 0; };
  const BR = median(rs), BGc = median(gs), BB = median(bs);

  // Step 3: Subject edge band = 8-connected neighbors of bg that are hard foreground
  const edge = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    if (!bg[i]) continue;
    const x = i % SIZE, y = (i - x) / SIZE;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < SIZE && ny >= 0 && ny < SIZE) {
        const j = ny * SIZE + nx;
        if (hard[j]) edge[j] = 1;
      }
    }
  }

  const sstep = (e0: number, e1: number, x: number) => {
    const k = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
    return k * k * (3 - 2 * k);
  };

  // Step 4: Compose final alpha
  const fix = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const dr = px[i * 4] - BR, dg = px[i * 4 + 1] - BGc, db = px[i * 4 + 2] - BB;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    if (bg[i]) fix[i] = dist < CDIST ? 0 : (a32[i] > TH ? sstep(TH + 0.05, TH + 0.3, a32[i]) : 0);
    else if (a32[i] < TH) fix[i] = dist < 48 ? sstep(TH - SOFT, TH, a32[i]) : 1;
    else if (edge[i] && dist < CDIST) fix[i] = 0;
    else fix[i] = 0.5 + 0.5 * sstep(TH - SOFT, 1, a32[i]);
  }

  // Step 5: Write alpha to 320×320 canvas, upscale to full resolution
  const mc = new OffscreenCanvas(SIZE, SIZE);
  const mctx = mc.getContext("2d", { willReadFrequently: true })!;
  const mimg = mctx.createImageData(SIZE, SIZE);
  for (let i = 0; i < N; i++) mimg.data[i * 4 + 3] = Math.round(fix[i] * 255);
  mctx.putImageData(mimg, 0, 0);

  const W = imageBitmap.width, H = imageBitmap.height;
  const rc = new OffscreenCanvas(W, H);
  const rctx = rc.getContext("2d", { willReadFrequently: true })!;
  rctx.drawImage(imageBitmap, 0, 0, W, H);
  const rdata = rctx.getImageData(0, 0, W, H);

  const sc = new OffscreenCanvas(W, H);
  const sctx = sc.getContext("2d", { willReadFrequently: true })!;
  sctx.imageSmoothingEnabled = true;
  sctx.drawImage(mc, 0, 0, W, H);
  const sdata = sctx.getImageData(0, 0, W, H);

  for (let i = 0; i < W * H; i++) {
    rdata.data[i * 4 + 3] = sdata.data[i * 4 + 3];
  }

  return rdata;
}

async function applyBackground(imageData: ImageData, mode: BgMode, customColor?: string): Promise<Blob> {
  const canvas = new OffscreenCanvas(imageData.width, imageData.height);
  const ctx = canvas.getContext("2d")!;
  if (mode === "transparent") {
    ctx.putImageData(imageData, 0, 0);
  } else {
    ctx.fillStyle = mode === "custom" && customColor ? customColor : "#FFFFFF";
    ctx.fillRect(0, 0, imageData.width, imageData.height);
    const tmp = new OffscreenCanvas(imageData.width, imageData.height);
    tmp.getContext("2d")!.putImageData(imageData, 0, 0);
    ctx.drawImage(tmp, 0, 0);
  }
  return canvas.convertToBlob({ type: "image/png" });
}

/** Apply a solid color background with soft ground shadow (showcase mode) */
async function applyShowcaseBackground(imageData: ImageData, bgColor: string): Promise<Blob> {
  const W = imageData.width, H = imageData.height;
  const canvas = new OffscreenCanvas(W, H);
  const ctx = canvas.getContext("2d")!;

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, W, H);

  // Compute alpha bounding box for shadow placement
  const alpha = imageData.data;
  let minX = W, minY = H, maxX = 0, maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (alpha[(y * W + x) * 4 + 3] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Draw soft elliptical shadow under the product
  const shadowCenterX = (minX + maxX) / 2;
  const shadowCenterY = maxY + (maxY - minY) * 0.03;
  const shadowRadiusX = (maxX - minX) * 0.45;
  const shadowRadiusY = (maxY - minY) * 0.06;

  if (shadowRadiusX > 0 && shadowRadiusY > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(shadowCenterX, shadowCenterY, shadowRadiusX, shadowRadiusY, 0, 0, Math.PI * 2);
    const grad = ctx.createRadialGradient(shadowCenterX, shadowCenterY, 0, shadowCenterX, shadowCenterY, shadowRadiusX);
    grad.addColorStop(0, "rgba(0,0,0,0.18)");
    grad.addColorStop(0.6, "rgba(0,0,0,0.07)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  }

  // Composite the cutout on top
  const tmp = new OffscreenCanvas(W, H);
  tmp.getContext("2d")!.putImageData(imageData, 0, 0);
  ctx.drawImage(tmp, 0, 0);

  return canvas.convertToBlob({ type: "image/png" });
}

async function generateVariants(mask: ImageData, modes: BgMode[], customColor?: string): Promise<Record<string, string>> {
  const urls: Record<string, string> = {};
  for (const mode of modes) {
    const blob = await applyBackground(mask, mode, customColor);
    urls[mode] = URL.createObjectURL(blob);
  }
  return urls;
}

/** Generate 4 showcase variants with soft shadow */
async function generateShowcaseVariants(mask: ImageData): Promise<Record<string, string>> {
  const urls: Record<string, string> = {};
  for (const v of SHOWCASE_VARIANTS) {
    const blob = await applyShowcaseBackground(mask, v.color);
    urls[v.key] = URL.createObjectURL(blob);
  }
  return urls;
}

/** Audit a processed image: check corner pixels and fill rate */
function auditImage(imageData: ImageData, spec: { width: number; height: number; fill: number; format: string }): AuditResult {
  const W = imageData.width, H = imageData.height;
  const d = imageData.data;

  // Check 4 corners — sample a 3×3 area around each corner for robustness
  const corners = [
    [0, 0], [W - 1, 0], [0, H - 1], [W - 1, H - 1],
  ];
  let allWhite = true;
  let offColor = "";

  for (const [cx, cy] of corners) {
    // Sample center pixel of corner
    const idx = (cy * W + cx) * 4;
    const r = d[idx], g = d[idx + 1], b = d[idx + 2];
    if (r !== 255 || g !== 255 || b !== 255) {
      allWhite = false;
      offColor = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();
    }
  }

  // Calculate fill rate using alpha bounding box
  let minX = W, minY = H, maxX = 0, maxY = 0;
  let hasContent = false;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const a = d[(y * W + x) * 4 + 3];
      if (a > 10) {
        hasContent = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const bboxW = hasContent ? maxX - minX + 1 : 0;
  const bboxH = hasContent ? maxY - minY + 1 : 0;
  const fillRate = hasContent ? Math.round((bboxW * bboxH) / (W * H) * 100) : 0;

  const pass = allWhite && fillRate >= spec.fill;

  return {
    pass,
    cornerWhite: allWhite,
    cornerColor: allWhite ? "white 255" : `off-white ${offColor}`,
    fillRate,
    width: W,
    height: H,
  };
}

/* ── Config types ── */

export type ToolConfig = {
  mode?: ToolMode;
  defaultBg?: BgMode;
  showSwatches?: boolean;
  showPreset?: boolean;         // future use
  lockedSpec?: { width: number; height: number; fill: number; format: string } | null;
  showBatchStats?: boolean;
  folderButton?: boolean;
  label?: string;
};

const DEFAULT_CONFIG: Required<Omit<ToolConfig, "lockedSpec" | "label" | "mode">> & { lockedSpec: null; label: undefined; mode: undefined } = {
  mode: undefined,
  defaultBg: "transparent",
  showSwatches: true,
  showPreset: true,
  lockedSpec: null,
  showBatchStats: false,
  folderButton: false,
  label: undefined,
};

/* ── Component ── */

export default function BackgroundRemoverTool({ config }: { config?: ToolConfig }) {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const mode = cfg.mode;

  // Derive effective settings from mode
  const isShowcase = mode === "showcase";
  const isAudit = mode === "audit";
  const isQuick = mode === "quick";
  const isBatch = mode === "batch";

  const effectiveBg: BgMode = cfg.lockedSpec ? "white" : cfg.defaultBg;
  const hideSwatches = cfg.lockedSpec ? true : !cfg.showSwatches;
  const showFolderBtn = isBatch ? true : (isQuick ? false : !!cfg.folderButton);
  const showBatchStats = isBatch ? true : !!cfg.showBatchStats;
  const showZipDownload = !isQuick; // quick mode has no ZIP
  const showFolderInDropZone = !isQuick; // quick mode hides folder button in drop zone

  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [selectedModes, setSelectedModes] = useState<Set<BgMode>>(new Set([effectiveBg]));
  const [customColor, setCustomColor] = useState("#0e8a5f");
  const [isProcessing, setIsProcessing] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const completed = images.filter((i) => i.status === "done").length;
  const failed = images.filter((i) => i.status === "error").length;
  const processing = images.filter((i) => i.status === "processing").length;
  const queued = images.filter((i) => i.status === "queued").length;
  const total = images.length;
  const modeCount = selectedModes.size;

  const toggleMode = useCallback((mode: BgMode) => {
    if (cfg.lockedSpec) return; // locked — no toggling
    setSelectedModes((prev) => {
      const next = new Set(prev);
      if (next.has(mode)) {
        if (next.size === 1) return prev;
        next.delete(mode);
      } else {
        next.add(mode);
      }
      return next;
    });
  }, [cfg.lockedSpec]);

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (fileArray.length === 0) return;
    const firstMode = [...selectedModes][0];
    const newImages: ProcessedImage[] = fileArray.map((file) => ({
      id: crypto.randomUUID(),
      file,
      originalUrl: URL.createObjectURL(file),
      resultUrls: {},
      previewMode: isShowcase ? "white" : firstMode,
      status: "queued",
      progress: 0,
    }));
    setImages((prev) => [...prev, ...newImages]);
  }, [selectedModes, isShowcase]);

  useEffect(() => {
    if (isShowcase) return; // showcase has its own variant generation in processQueue
    const doneImages = images.filter((i) => i.status === "done");
    if (doneImages.length === 0) return;
    let cancelled = false;
    (async () => {
      for (const img of doneImages) {
        const mask = maskStore.get(img.id);
        if (!mask) continue;
        const newUrls = await generateVariants(mask, [...selectedModes], customColor);
        if (cancelled) return;
        Object.values(img.resultUrls).forEach((u) => URL.revokeObjectURL(u));
        const newPreview = selectedModes.has(img.previewMode as BgMode) ? img.previewMode : [...selectedModes][0];
        setImages((prev) => prev.map((i) => (i.id === img.id ? { ...i, resultUrls: newUrls, previewMode: newPreview } : i)));
      }
    })();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModes, customColor, isShowcase]);

  const processQueue = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setModelLoading(true);
    try { await loadModel(); setModelLoading(false); } catch (e) { setIsProcessing(false); setModelLoading(false); return; }

    const pending = images.filter((i) => i.status === "queued" || i.status === "error");
    const concurrency = Math.min(navigator.hardwareConcurrency - 1, 4);
    const queue = [...pending];
    const modes = [...selectedModes];
    const workers: Promise<void>[] = [];

    for (let i = 0; i < concurrency; i++) {
      workers.push(
        (async () => {
          while (queue.length > 0) {
            const item = queue.shift();
            if (!item) break;
            setImages((prev) => prev.map((img) => (img.id === item.id ? { ...img, status: "processing" as const, progress: 0 } : img)));
            try {
              const bitmap = await createImageBitmap(item.file);
              setImages((prev) => prev.map((img) => (img.id === item.id ? { ...img, progress: 50 } : img)));
              const mask = await removeBackground(bitmap);
              bitmap.close();
              maskStore.set(item.id, mask);

              let urls: Record<string, string>;
              let auditResult: AuditResult | undefined;

              if (isShowcase) {
                // Generate 4 showcase variants with shadow
                urls = await generateShowcaseVariants(mask);
              } else if (isAudit) {
                // Generate white background, then audit
                const blob = await applyBackground(mask, "white");
                urls = { white: URL.createObjectURL(blob) };
                // Run audit on the composited result
                const auditBitmap = await createImageBitmap(blob);
                const ac = new OffscreenCanvas(auditBitmap.width, auditBitmap.height);
                const actx = ac.getContext("2d")!;
                actx.drawImage(auditBitmap, 0, 0);
                const auditData = actx.getImageData(0, 0, auditBitmap.width, auditBitmap.height);
                auditBitmap.close();
                auditResult = auditImage(auditData, cfg.lockedSpec!);
              } else {
                urls = await generateVariants(mask, modes, customColor);
              }

              const previewMode = isShowcase ? "white" : modes[0];
              setImages((prev) => prev.map((img) => (img.id === item.id ? { ...img, status: "done" as const, progress: 100, resultUrls: urls, previewMode, auditResult } : img)));
            } catch (e) {
              setImages((prev) => prev.map((img) => (img.id === item.id ? { ...img, status: "error" as const, error: e instanceof Error ? e.message : "Failed" } : img)));
            }
          }
        })()
      );
    }
    await Promise.all(workers);
    setIsProcessing(false);
  }, [images, isProcessing, selectedModes, customColor, isShowcase, isAudit, cfg.lockedSpec]);

  const downloadZip = useCallback(async () => {
    const zip = new JSZip();
    const doneImages = images.filter((i) => i.status === "done");
    for (const img of doneImages) {
      const baseName = img.file.name.replace(/\.[^.]+$/, "");
      for (const [key, url] of Object.entries(img.resultUrls)) {
        const resp = await fetch(url);
        const blob = await resp.blob();
        if (isShowcase) {
          // showcase: sku-white.png, sku-black.png, sku-studio.png, sku-brand.png
          zip.file(`${baseName}-${key}.png`, blob);
        } else {
          const folder = modeCount > 1 ? `${key}/` : "";
          zip.file(`${folder}${baseName}_nobg.png`, blob);
        }
      }
    }
    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = isShowcase ? "batchbg_showcase_variants.zip" : modeCount > 1 ? "batchbg_all_variants.zip" : "batchbg_results.zip";
    a.click();
  }, [images, modeCount, isShowcase]);

  const downloadSingle = useCallback((img: ProcessedImage) => {
    const url = img.resultUrls[img.previewMode];
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    const baseName = img.file.name.replace(/\.[^.]+$/, "");
    a.download = isShowcase ? `${baseName}-${img.previewMode}.png` : `${baseName}_${img.previewMode}.png`;
    a.click();
  }, [isShowcase]);

  const retrySingle = useCallback((img: ProcessedImage) => {
    setImages((prev) => prev.map((i) => (i.id === img.id ? { ...i, status: "queued" as const, error: undefined, auditResult: undefined } : i)));
  }, []);

  const clearAll = useCallback(() => {
    images.forEach((img) => {
      URL.revokeObjectURL(img.originalUrl);
      Object.values(img.resultUrls).forEach((u) => URL.revokeObjectURL(u));
      maskStore.delete(img.id);
    });
    setImages([]);
  }, [images]);

  const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); }, []);
  const handleDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files); }, [handleFiles]);

  const sortedImages = [...images].sort((a, b) => ({ done: 0, processing: 1, queued: 2, error: 3 }[a.status] - { done: 0, processing: 1, queued: 2, error: 3 }[b.status]));
  const savedMinutes = completed > 0 ? Math.round((completed * 30 * modeCount) / 60) : 0;
  const variantCount = completed * (isShowcase ? 4 : modeCount);

  /* CTA label */
  const ctaLabel = cfg.label || "Remove Backgrounds";

  return (
    <div>
      {images.length === 0 && (
        <div className="border-2 border-dashed border-blue rounded-xl bg-blue-bg/30 hover:bg-blue-bg/50 transition-colors cursor-pointer min-h-[40vh] flex flex-col items-center justify-center p-8 text-center" onDragOver={handleDragOver} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()}>
          <svg className="w-16 h-16 text-sub mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
          <p className="font-semibold text-lg mb-1">Drop images{showFolderInDropZone ? " or a folder" : ""} here</p>
          <p className="text-sub text-sm mb-2">JPG · PNG · WebP · No upload · Processing on your device</p>
          <p className="text-xs text-sub mb-5">or click to select</p>
          <div className="flex justify-center gap-3">
            <button className="bg-green text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>Select Images</button>
            {showFolderInDropZone && (
              <button className="bg-white text-ink border border-line px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm" onClick={(e) => { e.stopPropagation(); folderInputRef.current?.click(); }}>Select Folder</button>
            )}
          </div>
          {showFolderBtn && !isBatch && (
            <button className="mt-4 bg-[#0F70E6] text-white px-7 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity text-base shadow-md" onClick={(e) => { e.stopPropagation(); folderInputRef.current?.click(); }}>
              📂 Choose Folder
            </button>
          )}
        </div>
      )}

      <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => { if (e.target.files) handleFiles(e.target.files); }} />
      {/* @ts-ignore */}
      <input ref={folderInputRef} type="file" webkitdirectory="" className="hidden" onChange={(e) => { if (e.target.files) handleFiles(e.target.files); }} />

      {/* Showcase variant info */}
      {isShowcase && images.length > 0 && (
        <div className="text-sm text-sub text-center py-2 font-medium">
          Variant 1: Pure white · Variant 2: Black · Variant 3: Warm studio · Variant 4: Brand blue
        </div>
      )}

      {/* Batch stats */}
      {showBatchStats && images.length > 0 && (
        <div className="text-sm text-sub text-center py-2 font-medium">
          Batch: {completed} done · {failed} failed · {queued + processing} in queue
        </div>
      )}

      {images.length > 0 && (
        <div className="bg-ink text-white rounded-xl p-4 mb-5 flex flex-wrap items-center gap-3">
          {/* Mode swatches — hidden when locked, showSwatches=false, or showcase/audit/quick */}
          {!hideSwatches && !isShowcase && !isAudit && !isQuick && (
            <>
              <span className="text-sm text-gray-300 font-semibold">Replace BG:</span>
              {ALL_MODES.map((m) => (
                <button key={m} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize border-2 ${selectedModes.has(m) ? "bg-white text-ink border-white" : "bg-transparent text-gray-400 border-gray-600 hover:border-gray-400"}`} onClick={() => toggleMode(m)}>
                  {selectedModes.has(m) && <span className="mr-1">✓</span>}
                  {MODE_LABELS[m]}
                </button>
              ))}
              {selectedModes.has("custom") && <input type="color" value={customColor} onChange={(e) => setCustomColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer" />}
            </>
          )}
          <div className="flex-1" />
          {completed > 0 && <span className="text-sm text-green-400 font-semibold">✓ Saved ~{savedMinutes} min ({variantCount} files)</span>}
          <span className="text-sm text-gray-300">{completed}/{total}{failed > 0 && <span className="text-red-400 ml-1">· {failed} fail</span>}</span>
          <button className="text-sm text-gray-400 hover:text-white transition-colors" onClick={() => fileInputRef.current?.click()}>+ Add</button>
          {completed === 0 && !isProcessing ? (
            <button className="bg-green text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm" onClick={processQueue}>
              {ctaLabel}{!isShowcase && !isAudit && !isQuick && modeCount > 1 ? ` (${modeCount} modes)` : ""}
            </button>
          ) : isProcessing ? (
            <button className="bg-gray-600 text-gray-300 px-5 py-2 rounded-lg font-semibold cursor-not-allowed text-sm" disabled>
              {modelLoading ? "Loading model…" : `Processing ${completed}/${total}…`}
            </button>
          ) : (
            <div className="flex gap-2 items-center">
              {showZipDownload && (
                <button className="bg-green text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm" onClick={downloadZip}>⬇ ZIP ({variantCount})</button>
              )}
              <button className="text-sm text-gray-400 hover:text-white px-2" onClick={clearAll}>Clear</button>
            </div>
          )}
        </div>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {sortedImages.map((img) => {
            const displayUrl = img.resultUrls[img.previewMode] || img.resultUrls[[...selectedModes][0]] || img.originalUrl;
            const hasVariants = Object.keys(img.resultUrls).length > 1;
            return (
              <div key={img.id} className={`rounded-lg border-2 overflow-hidden bg-white transition-all ${img.status === "done" ? "border-green" : img.status === "processing" ? "border-blue" : img.status === "error" ? "border-red bg-red-bg" : "border-line"}`}>
                <div className="aspect-square relative checkerboard">
                  <img src={displayUrl} alt={img.file.name} className="w-full h-full object-contain" />
                  {img.status === "processing" && <div className="absolute inset-0 bg-black/20 flex items-center justify-center"><div className="w-10 h-10 border-3 border-white border-t-transparent rounded-full animate-spin" /></div>}
                  {img.status === "queued" && <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-sub text-xs font-medium">Queued</div>}
                </div>
                {img.status === "done" && hasVariants && (
                  <div className="flex border-t border-line">
                    {Object.keys(img.resultUrls).map((vMode) => (
                      <button key={vMode} className={`flex-1 text-[10px] py-1 font-medium capitalize transition-colors ${img.previewMode === vMode ? "bg-green-bg text-green" : "text-sub hover:bg-gray-50"}`} onClick={() => setImages((prev) => prev.map((i) => (i.id === img.id ? { ...i, previewMode: vMode } : i)))}>
                        {isShowcase ? (vMode === "white" ? "W" : vMode === "black" ? "B" : vMode === "studio" ? "S" : "Br") : vMode === "transparent" ? "T" : vMode === "white" ? "W" : "C"}
                      </button>
                    ))}
                  </div>
                )}
                <div className="p-2">
                  <p className="text-xs text-sub truncate" title={img.file.name}>{img.file.name}</p>
                  {/* Audit result */}
                  {isAudit && img.auditResult && (
                    <div className={`text-xs font-semibold mt-1 ${img.auditResult.pass ? "text-green" : "text-red"}`}>
                      {img.auditResult.pass ? "✓ AUDIT PASS" : "✗ AUDIT FAIL"} · {img.auditResult.cornerColor} · fill {img.auditResult.fillRate}% · {img.auditResult.width}px
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-1">
                    <span className={`text-xs font-semibold ${img.status === "done" ? "text-green" : img.status === "processing" ? "text-blue" : img.status === "error" ? "text-red" : "text-sub"}`}>
                      {!isAudit && (img.status === "done" ? "✓ Done" : img.status === "processing" ? "Processing…" : img.status === "error" ? "✕ Failed" : "Queued")}
                      {isAudit && (img.status === "processing" ? "Processing…" : img.status === "error" ? "✕ Failed" : img.status === "queued" ? "Queued" : "")}
                    </span>
                    {img.status === "done" && <button className="text-xs text-green hover:underline font-medium" onClick={() => downloadSingle(img)}>↓ Save</button>}
                    {img.status === "error" && <button className="text-xs text-blue hover:underline" onClick={() => retrySingle(img)}>↻ Retry</button>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* lockedSpec compliance checklist */}
      {cfg.lockedSpec && (
        <div className="mt-4 border-2 border-green rounded-lg p-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold text-green">
          <span>✓ RGB(255,255,255)</span>
          <span>✓ {cfg.lockedSpec.width}×{cfg.lockedSpec.height}</span>
          <span>✓ {cfg.lockedSpec.fill}% fill</span>
          <span>✓ {cfg.lockedSpec.format}</span>
        </div>
      )}
    </div>
  );
}
