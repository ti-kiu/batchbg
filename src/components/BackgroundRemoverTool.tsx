"use client";

import { useState, useCallback, useRef } from "react";
import JSZip from "jszip";

export interface ProcessedImage {
  id: string;
  file: File;
  originalUrl: string;
  resultUrl: string | null;
  status: "queued" | "processing" | "done" | "error";
  progress: number;
  error?: string;
}

export type BgMode = "transparent" | "white" | "custom";

let session: any = null;
let ort: any = null;

async function loadModel() {
  if (session) return session;
  ort = await import("onnxruntime-web");

  // CRITICAL: set wasmPaths BEFORE creating session
  ort.env.wasm.wasmPaths = "/wasm/";
  ort.env.wasm.numThreads = Math.min(navigator.hardwareConcurrency - 1, 4);

  // WASM-only (JSEP needs 28MB file which exceeds CF 25MB limit)
  session = await ort.InferenceSession.create("/models/u2netp.onnx", {
    executionProviders: ["wasm"],
  });
  return session;
}

async function removeBackground(imageBitmap: ImageBitmap): Promise<ImageData> {
  const s = await loadModel();
  const size = 320;
  const canvas = new OffscreenCanvas(size, size);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(imageBitmap, 0, 0, size, size);
  const imageData = ctx.getImageData(0, 0, size, size);

  const float32Data = new Float32Array(3 * size * size);
  for (let i = 0; i < size * size; i++) {
    float32Data[i] = imageData.data[i * 4] / 255.0;
    float32Data[size * size + i] = imageData.data[i * 4 + 1] / 255.0;
    float32Data[2 * size * size + i] = imageData.data[i * 4 + 2] / 255.0;
  }

  const inputTensor = new ort.Tensor("float32", float32Data, [1, 3, size, size]);
  const feeds: Record<string, any> = {};
  feeds[s.inputNames[0]] = inputTensor;
  const results = await s.run(feeds);
  const output = results[s.outputNames[0]];
  const maskData = output.data as Float32Array;

  const maskImageData = new ImageData(imageBitmap.width, imageBitmap.height);
  const origCanvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
  const origCtx = origCanvas.getContext("2d")!;
  origCtx.drawImage(imageBitmap, 0, 0);
  const origData = origCtx.getImageData(0, 0, imageBitmap.width, imageBitmap.height);

  for (let y = 0; y < imageBitmap.height; y++) {
    for (let x = 0; x < imageBitmap.width; x++) {
      const srcX = (x / imageBitmap.width) * size;
      const srcY = (y / imageBitmap.height) * size;
      const x0 = Math.floor(srcX);
      const y0 = Math.floor(srcY);
      const x1 = Math.min(x0 + 1, size - 1);
      const y1 = Math.min(y0 + 1, size - 1);
      const fx = srcX - x0;
      const fy = srcY - y0;
      const v00 = maskData[y0 * size + x0];
      const v10 = maskData[y0 * size + x1];
      const v01 = maskData[y1 * size + x0];
      const v11 = maskData[y1 * size + x1];
      const val = v00 * (1 - fx) * (1 - fy) + v10 * fx * (1 - fy) + v01 * (1 - fx) * fy + v11 * fx * fy;
      const alpha = Math.round(Math.max(0, Math.min(1, val)) * 255);
      const idx = (y * imageBitmap.width + x) * 4;
      maskImageData.data[idx] = origData.data[idx];
      maskImageData.data[idx + 1] = origData.data[idx + 1];
      maskImageData.data[idx + 2] = origData.data[idx + 2];
      maskImageData.data[idx + 3] = alpha;
    }
  }
  return maskImageData;
}

async function applyBackground(imageData: ImageData, mode: BgMode, customColor?: string): Promise<Blob> {
  const canvas = new OffscreenCanvas(imageData.width, imageData.height);
  const ctx = canvas.getContext("2d")!;
  if (mode === "white") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, imageData.width, imageData.height);
  } else if (mode === "custom" && customColor) {
    ctx.fillStyle = customColor;
    ctx.fillRect(0, 0, imageData.width, imageData.height);
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.convertToBlob({ type: "image/png" });
}

export default function BackgroundRemoverTool() {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [bgMode, setBgMode] = useState<BgMode>("transparent");
  const [customColor, setCustomColor] = useState("#0e8a5f");
  const [isProcessing, setIsProcessing] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const completed = images.filter((i) => i.status === "done").length;
  const failed = images.filter((i) => i.status === "error").length;
  const total = images.length;

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (fileArray.length === 0) return;
    const newImages: ProcessedImage[] = fileArray.map((file) => ({
      id: crypto.randomUUID(),
      file,
      originalUrl: URL.createObjectURL(file),
      resultUrl: null,
      status: "queued",
      progress: 0,
    }));
    setImages((prev) => [...prev, ...newImages]);
  }, []);

  const processQueue = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setModelLoading(true);
    try {
      await loadModel();
      setModelLoading(false);
    } catch (e) {
      console.error("Model load failed:", e);
      setIsProcessing(false);
      setModelLoading(false);
      return;
    }

    const pending = images.filter((i) => i.status === "queued" || i.status === "error");
    const concurrency = Math.min(navigator.hardwareConcurrency - 1, 4);
    const queue = [...pending];
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
              const maskData = await removeBackground(bitmap);
              bitmap.close();
              const blob = await applyBackground(maskData, bgMode, customColor);
              const resultUrl = URL.createObjectURL(blob);
              setImages((prev) => prev.map((img) => (img.id === item.id ? { ...img, status: "done" as const, progress: 100, resultUrl } : img)));
            } catch (e) {
              console.error("Process failed:", e);
              setImages((prev) =>
                prev.map((img) =>
                  img.id === item.id ? { ...img, status: "error" as const, error: e instanceof Error ? e.message : "Processing failed" } : img
                )
              );
            }
          }
        })()
      );
    }
    await Promise.all(workers);
    setIsProcessing(false);
  }, [images, isProcessing, bgMode, customColor]);

  const downloadZip = useCallback(async () => {
    const zip = new JSZip();
    const doneImages = images.filter((i) => i.status === "done" && i.resultUrl);
    for (const img of doneImages) {
      const response = await fetch(img.resultUrl!);
      const blob = await response.blob();
      const name = img.file.name.replace(/\.[^.]+$/, "") + "_nobg.png";
      zip.file(name, blob);
    }
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = "batchbg_results.zip";
    a.click();
    URL.revokeObjectURL(url);
  }, [images]);

  const downloadSingle = useCallback(async (img: ProcessedImage) => {
    if (!img.resultUrl) return;
    const a = document.createElement("a");
    a.href = img.resultUrl;
    a.download = img.file.name.replace(/\.[^.]+$/, "") + "_nobg.png";
    a.click();
  }, []);

  const retrySingle = useCallback(async (img: ProcessedImage) => {
    setImages((prev) => prev.map((i) => (i.id === img.id ? { ...i, status: "queued" as const, error: undefined } : i)));
  }, []);

  const clearAll = useCallback(() => {
    images.forEach((img) => {
      URL.revokeObjectURL(img.originalUrl);
      if (img.resultUrl) URL.revokeObjectURL(img.resultUrl);
    });
    setImages([]);
  }, [images]);

  const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); }, []);
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const sortedImages = [...images].sort((a, b) => {
    const order = { done: 0, processing: 1, queued: 2, error: 3 };
    return order[a.status] - order[b.status];
  });

  // Savings counter: 30s per image manual removal
  const savedMinutes = completed > 0 ? Math.round((completed * 30) / 60) : 0;

  return (
    <div>
      {/* Dropzone */}
      {images.length === 0 && (
        <div
          className="border-2 border-dashed border-blue rounded-xl bg-blue-bg/30 hover:bg-blue-bg/50 transition-colors cursor-pointer min-h-[40vh] flex flex-col items-center justify-center p-8 text-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <svg className="w-16 h-16 text-sub mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <p className="font-semibold text-lg mb-1">Drop images or a folder here</p>
          <p className="text-sub text-sm mb-2">JPG · PNG · WebP · No upload · Processing on your device</p>
          <p className="text-xs text-sub mb-5">or click to select</p>
          <div className="flex justify-center gap-3">
            <button
              className="bg-green text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
            >
              Select Images
            </button>
            <button
              className="bg-white text-ink border border-line px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
              onClick={(e) => { e.stopPropagation(); folderInputRef.current?.click(); }}
            >
              Select Folder
            </button>
          </div>
        </div>
      )}

      <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => { if (e.target.files) handleFiles(e.target.files); }} />
      {/* @ts-ignore */}
      <input ref={folderInputRef} type="file" webkitdirectory="" className="hidden" onChange={(e) => { if (e.target.files) handleFiles(e.target.files); }} />

      {/* Action Bar */}
      {images.length > 0 && (
        <div className="bg-ink text-white rounded-xl p-4 mb-5 flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-300 font-semibold">Replace BG:</span>
          {(["transparent", "white", "custom"] as BgMode[]).map((m) => (
            <button
              key={m}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${bgMode === m ? "bg-white text-ink" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
              onClick={() => setBgMode(m)}
            >
              {m === "transparent" ? "Transparent" : m === "white" ? "White" : "Custom"}
            </button>
          ))}
          {bgMode === "custom" && <input type="color" value={customColor} onChange={(e) => setCustomColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer" />}

          <div className="flex-1" />

          {/* Savings counter */}
          {completed > 0 && (
            <span className="text-sm text-green-400 font-semibold">
              ✓ Saved ~{savedMinutes} min ({completed} images)
            </span>
          )}

          <span className="text-sm text-gray-300">
            {completed}/{total}{failed > 0 && <span className="text-red-400 ml-1">· {failed} fail</span>}
          </span>

          <button className="text-sm text-gray-400 hover:text-white transition-colors" onClick={() => fileInputRef.current?.click()}>+ Add</button>

          {completed === 0 && !isProcessing ? (
            <button className="bg-green text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm" onClick={processQueue}>
              Remove Backgrounds
            </button>
          ) : isProcessing ? (
            <button className="bg-gray-600 text-gray-300 px-5 py-2 rounded-lg font-semibold cursor-not-allowed text-sm" disabled>
              {modelLoading ? "Loading model…" : `Processing ${completed}/${total}…`}
            </button>
          ) : (
            <div className="flex gap-2">
              <button className="bg-green text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm" onClick={downloadZip}>
                ⬇ ZIP ({completed})
              </button>
              <button className="text-sm text-gray-400 hover:text-white px-2" onClick={clearAll}>Clear</button>
            </div>
          )}
        </div>
      )}

      {/* Results Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {sortedImages.map((img) => (
            <div
              key={img.id}
              className={`rounded-lg border-2 overflow-hidden bg-white transition-all ${
                img.status === "done" ? "border-green" : img.status === "processing" ? "border-blue" : img.status === "error" ? "border-red bg-red-bg" : "border-line"
              }`}
            >
              <div className="aspect-square relative checkerboard">
                <img src={img.resultUrl || img.originalUrl} alt={img.file.name} className="w-full h-full object-contain" />
                {img.status === "processing" && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {img.status === "queued" && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-sub text-xs font-medium">Queued</div>
                )}
              </div>
              <div className="p-2">
                <p className="text-xs text-sub truncate" title={img.file.name}>{img.file.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-xs font-semibold ${img.status === "done" ? "text-green" : img.status === "processing" ? "text-blue" : img.status === "error" ? "text-red" : "text-sub"}`}>
                    {img.status === "done" ? "✓ Done" : img.status === "processing" ? "Processing…" : img.status === "error" ? "✕ Failed" : "Queued"}
                  </span>
                  {img.status === "done" && <button className="text-xs text-green hover:underline font-medium" onClick={() => downloadSingle(img)}>↓ Save</button>}
                  {img.status === "error" && <button className="text-xs text-blue hover:underline" onClick={() => retrySingle(img)}>↻ Retry</button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}