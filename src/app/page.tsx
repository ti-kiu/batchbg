"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import JSZip from "jszip";

// Types
interface ProcessedImage {
  id: string;
  file: File;
  originalUrl: string;
  resultUrl: string | null;
  status: "queued" | "processing" | "done" | "error";
  progress: number;
  error?: string;
}

type BgMode = "transparent" | "white" | "custom";

// Inference engine (lazy loaded)
let session: any = null;
let ort: any = null;

async function loadModel() {
  if (session) return session;
  ort = await import("onnxruntime-web");
  ort.env.wasm.numThreads = Math.min(
    navigator.hardwareConcurrency - 1,
    4
  );
  ort.env.wasm.simd = true;

  // Try WebGPU first, fall back to WASM
  const ep = ["wasm"];
  try {
    if (navigator.gpu) ep.unshift("webgpu");
  } catch {}

  session = await ort.InferenceSession.create(
    "/models/u2netp.onnx",
    { executionProviders: ep }
  );
  return session;
}

async function removeBackground(
  imageBitmap: ImageBitmap
): Promise<ImageData> {
  const s = await loadModel();

  // Resize to 320x320 for u2netp
  const size = 320;
  const canvas = new OffscreenCanvas(size, size);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(imageBitmap, 0, 0, size, size);
  const imageData = ctx.getImageData(0, 0, size, size);

  // Prepare input tensor: NCHW [1, 3, 320, 320], normalized to [0, 1]
  const float32Data = new Float32Array(3 * size * size);
  for (let i = 0; i < size * size; i++) {
    float32Data[i] = imageData.data[i * 4] / 255.0;
    float32Data[size * size + i] = imageData.data[i * 4 + 1] / 255.0;
    float32Data[2 * size * size + i] = imageData.data[i * 4 + 2] / 255.0;
  }

  const inputTensor = new ort.Tensor("float32", float32Data, [
    1, 3, size, size,
  ]);
  const feeds: Record<string, any> = {};
  feeds[s.inputNames[0]] = inputTensor;

  const results = await s.run(feeds);
  const output = results[s.outputNames[0]];
  const maskData = output.data as Float32Array;

  // Create full-resolution mask
  const maskCanvas = new OffscreenCanvas(
    imageBitmap.width,
    imageBitmap.height
  );
  const maskCtx = maskCanvas.getContext("2d")!;
  const maskImageData = maskCtx.createImageData(
    imageBitmap.width,
    imageBitmap.height
  );

  // Draw original image
  const origCanvas = new OffscreenCanvas(
    imageBitmap.width,
    imageBitmap.height
  );
  const origCtx = origCanvas.getContext("2d")!;
  origCtx.drawImage(imageBitmap, 0, 0);
  const origData = origCtx.getImageData(
    0,
    0,
    imageBitmap.width,
    imageBitmap.height
  );

  // Upscale mask with bilinear interpolation
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

      const val =
        v00 * (1 - fx) * (1 - fy) +
        v10 * fx * (1 - fy) +
        v01 * (1 - fx) * fy +
        v11 * fx * fy;

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

async function applyBackground(
  imageData: ImageData,
  mode: BgMode,
  customColor?: string
): Promise<Blob> {
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

  // For transparent mode, just return the alpha image
  return canvas.convertToBlob({ type: "image/png" });
}

// Main Component
export default function Home() {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [bgMode, setBgMode] = useState<BgMode>("transparent");
  const [customColor, setCustomColor] = useState("#2563eb");
  const [isProcessing, setIsProcessing] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelLoading, setModelLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  // Stats
  const completed = images.filter((i) => i.status === "done").length;
  const failed = images.filter((i) => i.status === "error").length;
  const total = images.length;

  const handleFiles = useCallback(
    (files: FileList | File[]) => {
      const fileArray = Array.from(files).filter((f) =>
        f.type.startsWith("image/")
      );
      const newImages: ProcessedImage[] = fileArray.map((file) => ({
        id: crypto.randomUUID(),
        file,
        originalUrl: URL.createObjectURL(file),
        resultUrl: null,
        status: "queued",
        progress: 0,
      }));
      setImages((prev) => [...prev, ...newImages]);
    },
    []
  );

  const processQueue = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setModelLoading(true);

    try {
      await loadModel();
      setModelLoaded(true);
      setModelLoading(false);
    } catch (e) {
      console.error("Model load failed:", e);
      setIsProcessing(false);
      setModelLoading(false);
      return;
    }

    const pending = images.filter(
      (i) => i.status === "queued" || i.status === "error"
    );

    const concurrency = Math.min(
      navigator.hardwareConcurrency - 1,
      4
    );

    // Process in parallel with concurrency limit
    const queue = [...pending];
    const workers: Promise<void>[] = [];

    for (let i = 0; i < concurrency; i++) {
      workers.push(
        (async () => {
          while (queue.length > 0) {
            const item = queue.shift();
            if (!item) break;

            setImages((prev) =>
              prev.map((img) =>
                img.id === item.id
                  ? { ...img, status: "processing", progress: 0 }
                  : img
              )
            );

            try {
              const bitmap = await createImageBitmap(item.file);
              setImages((prev) =>
                prev.map((img) =>
                  img.id === item.id
                    ? { ...img, progress: 50 }
                    : img
                )
              );

              const maskData = await removeBackground(bitmap);
              bitmap.close();

              const blob = await applyBackground(
                maskData,
                bgMode,
                customColor
              );
              const resultUrl = URL.createObjectURL(blob);

              setImages((prev) =>
                prev.map((img) =>
                  img.id === item.id
                    ? {
                        ...img,
                        status: "done",
                        progress: 100,
                        resultUrl,
                      }
                    : img
                )
              );
            } catch (e) {
              console.error("Process failed:", e);
              setImages((prev) =>
                prev.map((img) =>
                  img.id === item.id
                    ? {
                        ...img,
                        status: "error",
                        error:
                          e instanceof Error
                            ? e.message
                            : "Processing failed",
                      }
                    : img
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
    const doneImages = images.filter(
      (i) => i.status === "done" && i.resultUrl
    );

    for (const img of doneImages) {
      const response = await fetch(img.resultUrl!);
      const blob = await response.blob();
      const ext = bgMode === "transparent" ? "png" : "png";
      const name = img.file.name.replace(/\.[^.]+$/, "") + "_nobg." + ext;
      zip.file(name, blob);
    }

    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = "batchbg_results.zip";
    a.click();
    URL.revokeObjectURL(url);
  }, [images, bgMode]);

  const downloadSingle = useCallback(
    async (img: ProcessedImage) => {
      if (!img.resultUrl) return;
      const a = document.createElement("a");
      a.href = img.resultUrl;
      a.download =
        img.file.name.replace(/\.[^.]+$/, "") + "_nobg.png";
      a.click();
    },
    []
  );

  const retrySingle = useCallback(
    async (img: ProcessedImage) => {
      setImages((prev) =>
        prev.map((i) =>
          i.id === img.id
            ? { ...i, status: "queued", error: undefined }
            : i
        )
      );
    },
    []
  );

  const clearAll = useCallback(() => {
    images.forEach((img) => {
      URL.revokeObjectURL(img.originalUrl);
      if (img.resultUrl) URL.revokeObjectURL(img.resultUrl);
    });
    setImages([]);
  }, [images]);

  // Drag and drop handlers
  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  // Sort images: done first, then processing, then queued, then error
  const sortedImages = [...images].sort((a, b) => {
    const order = { done: 0, processing: 1, queued: 2, error: 3 };
    return order[a.status] - order[b.status];
  });

  return (
    <>
      {/* Hero: Tool Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Bulk Background Remover
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Free, unlimited, no signup. Remove backgrounds from hundreds of
            images at once — 100% on your device.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">
            🔒 Local Processing
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">
            ♾ Unlimited Free
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">
            🚫 No Signup
          </span>
        </div>

        {/* Dropzone */}
        {images.length === 0 && (
          <div
            className="border-2 border-dashed border-accent rounded-2xl bg-accent-bg/30 hover:bg-accent-bg/50 transition-colors cursor-pointer p-12 sm:p-16 text-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="text-5xl mb-4">📁</div>
            <p className="text-ink font-semibold text-lg mb-2">
              Drop images or a folder here
            </p>
            <p className="text-sub text-sm mb-4">
              JPG · PNG · WebP — unlimited files, no size limit
            </p>
            <div className="flex justify-center gap-3">
              <button
                className="bg-accent text-white px-5 py-2.5 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Select Images
              </button>
              <button
                className="bg-white text-ink border border-line px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  folderInputRef.current?.click();
                }}
              >
                Select Folder
              </button>
            </div>
          </div>
        )}

        {/* Hidden file inputs */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files);
          }}
        />
        <input
          ref={folderInputRef}
          type="file"
          // @ts-ignore
          webkitdirectory=""
          className="hidden"
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files);
          }}
        />
      </section>

      {/* Action Bar (shown when images are loaded) */}
      {images.length > 0 && (
        <section className="sticky top-14 z-40 bg-ink text-white py-3 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-4">
            {/* Background mode selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-300">Background:</span>
              <button
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  bgMode === "transparent"
                    ? "bg-white text-ink"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setBgMode("transparent")}
              >
                Transparent
              </button>
              <button
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  bgMode === "white"
                    ? "bg-white text-ink"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setBgMode("white")}
              >
                White
              </button>
              <div className="flex items-center gap-1">
                <button
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    bgMode === "custom"
                      ? "bg-white text-ink"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                  onClick={() => setBgMode("custom")}
                >
                  Custom
                </button>
                {bgMode === "custom" && (
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex-1" />

            {/* Status */}
            <span className="text-sm text-gray-300">
              {completed}/{total} done
              {failed > 0 && (
                <span className="text-red-400 ml-2">
                  · {failed} failed
                </span>
              )}
            </span>

            {/* Add more */}
            <button
              className="text-sm text-gray-300 hover:text-white transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              + Add More
            </button>

            {/* Process / Download */}
            {completed === 0 && !isProcessing ? (
              <button
                className="bg-success text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-success/90 transition-colors"
                onClick={processQueue}
              >
                Remove Backgrounds
              </button>
            ) : isProcessing ? (
              <button
                className="bg-gray-600 text-gray-300 px-6 py-2.5 rounded-lg font-semibold cursor-not-allowed"
                disabled
              >
                {modelLoading
                  ? "Loading model..."
                  : `Processing ${completed}/${total}...`}
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  className="bg-success text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-success/90 transition-colors"
                  onClick={downloadZip}
                >
                  ⬇ Download ZIP ({completed})
                </button>
                <button
                  className="text-sm text-gray-400 hover:text-white transition-colors px-3"
                  onClick={clearAll}
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Results Grid */}
      {images.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedImages.map((img) => (
              <div
                key={img.id}
                className={`rounded-xl border-2 overflow-hidden bg-white transition-all ${
                  img.status === "done"
                    ? "border-success"
                    : img.status === "processing"
                    ? "border-accent"
                    : img.status === "error"
                    ? "border-error bg-error-bg"
                    : "border-line"
                }`}
              >
                {/* Image preview */}
                <div className="aspect-square relative checkerboard">
                  <img
                    src={img.resultUrl || img.originalUrl}
                    alt={img.file.name}
                    className="w-full h-full object-contain"
                  />
                  {img.status === "processing" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  {img.status === "queued" && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="text-2xl">⏸</span>
                    </div>
                  )}
                </div>

                {/* File info + actions */}
                <div className="p-2">
                  <p
                    className="text-xs text-sub truncate"
                    title={img.file.name}
                  >
                    {img.file.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span
                      className={`text-xs font-medium ${
                        img.status === "done"
                          ? "text-success"
                          : img.status === "processing"
                          ? "text-accent"
                          : img.status === "error"
                          ? "text-error"
                          : "text-sub"
                      }`}
                    >
                      {img.status === "done"
                        ? "✓ Done"
                        : img.status === "processing"
                        ? "Processing..."
                        : img.status === "error"
                        ? "✕ Failed"
                        : "Queued"}
                    </span>
                    {img.status === "done" && (
                      <button
                        className="text-xs text-accent hover:underline"
                        onClick={() => downloadSingle(img)}
                      >
                        ↓ Save
                      </button>
                    )}
                    {img.status === "error" && (
                      <button
                        className="text-xs text-accent hover:underline"
                        onClick={() => retrySingle(img)}
                      >
                        ↻ Retry
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            Why Use a Bulk Background Remover?
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            If you sell online, you know the drill: photograph 50 products,
            then spend hours removing backgrounds one by one. BatchBG lets
            you drag an entire folder into your browser and get clean
            cutouts in minutes — not hours. Every image stays on your
            device. Nothing is uploaded to any server.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-8 not-prose">
            {[
              {
                step: "1",
                title: "Drop Your Images",
                desc: "Drag a folder or select multiple files. JPG, PNG, and WebP are supported — no file size limit.",
              },
              {
                step: "2",
                title: "Click Remove BG",
                desc: "Our AI model runs directly in your browser using WebGPU or WASM. No uploads, no waiting for servers.",
              },
              {
                step: "3",
                title: "Download ZIP",
                desc: "Get all cutouts in one ZIP file with original filenames preserved. Perfect for batch catalog updates.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-line p-5"
              >
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mb-3">
                  {item.step}
                </div>
                <h4 className="font-heading font-semibold text-ink mb-2">
                  {item.title}
                </h4>
                <p className="text-sub text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Built for E-Commerce Sellers
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Amazon requires pure white backgrounds (RGB 255,255,255) with
            the product filling 85% of the frame. Etsy and Shopify have
            their own guidelines. BatchBG&apos;s white background mode
            outputs marketplace-compliant images automatically — no manual
            editing needed.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Your Images Stay Private
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Unlike cloud-based tools, BatchBG processes every image
            directly in your browser using ONNX Runtime Web. Your product
            photos — which are valuable business assets — never leave your
            device. There are no servers collecting your images, no AI
            training on your data, and no privacy policies to worry about.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Looking for a remove.bg Alternative?
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            With{" "}
            <a
              href="/remove-bg-alternative/"
              className="text-accent hover:underline"
            >
              remove.bg shutting down on December 1, 2026
            </a>
            , millions of users need a new solution. BatchBG offers
            unlimited free background removal with no per-image charges,
            no credit packs, and no monthly subscriptions. The AI runs
            entirely in your browser — and it&apos;s free forever.
          </p>
        </article>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How many images can I process at once?",
                a: "There is no limit. You can process 10, 100, or 1,000 images in a single session. The only constraint is your device's memory.",
              },
              {
                q: "Are my images uploaded to a server?",
                a: "No. All processing happens locally in your browser using ONNX Runtime Web. Your images never leave your device.",
              },
              {
                q: "Is it really free? No watermarks?",
                a: "Yes, completely free with no watermarks, no sign-up, and no per-image charges. We plan to add optional Pro features later, but batch background removal will always be free.",
              },
              {
                q: "What image formats are supported?",
                a: "JPG, PNG, and WebP. Output is always PNG (for transparent backgrounds) or PNG with your chosen background color.",
              },
              {
                q: "Can I use the results for commercial purposes?",
                a: "Yes. All processed images are yours to use however you like, including commercial use on Amazon, Etsy, Shopify, and other platforms.",
              },
              {
                q: "How does this compare to remove.bg?",
                a: "BatchBG is free and unlimited, while remove.bg charges per image and is shutting down December 1, 2026. We process everything locally — no uploads needed. See our detailed comparison.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-line p-5 group"
              >
                <summary className="font-heading font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-sub group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-sub text-sm mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How many images can I process at once?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There is no limit. You can process 10, 100, or 1,000 images in a single session. The only constraint is your device's memory.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are my images uploaded to a server?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. All processing happens locally in your browser using ONNX Runtime Web. Your images never leave your device.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it really free? No watermarks?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, completely free with no watermarks, no sign-up, and no per-image charges.",
                  },
                },
              ],
            }),
          }}
        />
      </section>
    </>
  );
}
