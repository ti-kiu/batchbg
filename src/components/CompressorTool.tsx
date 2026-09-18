"use client";

import { useState, useCallback, useRef } from "react";

export default function CompressorTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState(2000);
  const [results, setResults] = useState<
    { name: string; original: number; compressed: number; url: string }[]
  >([]);
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected) return;
    setFiles(Array.from(selected).filter((f) => f.type.startsWith("image/")));
    setResults([]);
  }, []);

  const compressAll = useCallback(async () => {
    if (files.length === 0) return;
    setProcessing(true);
    setResults([]);

    const out: { name: string; original: number; compressed: number; url: string }[] = [];

    for (const file of files) {
      const img = new Image();
      const url = URL.createObjectURL(file);
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.src = url;
      });
      URL.revokeObjectURL(url);

      let w = img.width;
      let h = img.height;
      if (w > maxWidth) {
        h = Math.round((h * maxWidth) / w);
        w = maxWidth;
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, w, h);

      const blob: Blob = await new Promise((resolve) =>
        canvas.toBlob((b) => resolve(b!), "image/jpeg", quality / 100)
      );

      out.push({
        name: file.name,
        original: file.size,
        compressed: blob.size,
        url: URL.createObjectURL(blob),
      });
    }

    setResults(out);
    setProcessing(false);
  }, [files, quality, maxWidth]);

  const downloadAll = useCallback(() => {
    results.forEach((r) => {
      const a = document.createElement("a");
      a.href = r.url;
      a.download = r.name.replace(/\.[^.]+$/, "") + "_compressed.jpg";
      a.click();
    });
  }, [results]);

  const fmt = (b: number) =>
    b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(1) + " KB" : (b / 1048576).toFixed(2) + " MB";

  return (
    <div className="bg-white rounded-xl border border-line p-6 not-prose">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-ink mb-1">
            Upload images
          </label>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFiles}
            className="block w-full text-sm text-sub file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:font-medium file:cursor-pointer hover:file:opacity-90"
          />
        </div>
        <div className="w-32">
          <label className="block text-sm font-medium text-ink mb-1">
            Quality ({quality}%)
          </label>
          <input
            type="range"
            min={10}
            max={100}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full accent-[#0e8a5f]"
          />
        </div>
        <div className="w-36">
          <label className="block text-sm font-medium text-ink mb-1">
            Max width (px)
          </label>
          <input
            type="number"
            min={100}
            max={8000}
            step={100}
            value={maxWidth}
            onChange={(e) => setMaxWidth(Number(e.target.value))}
            className="w-full border border-line rounded-lg px-3 py-2 text-sm text-ink"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={compressAll}
          disabled={files.length === 0 || processing}
          className="bg-[#0e8a5f] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 disabled:opacity-40 transition"
        >
          {processing ? "Compressing…" : `Compress ${files.length} image${files.length !== 1 ? "s" : ""}`}
        </button>
        {results.length > 0 && (
          <button
            onClick={downloadAll}
            className="border border-[#0e8a5f] text-[#0e8a5f] px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#0e8a5f]/5 transition"
          >
            Download all
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-3 font-semibold text-ink">File</th>
                <th className="text-right py-2 px-3 font-semibold text-ink">Original</th>
                <th className="text-right py-2 px-3 font-semibold text-ink">Compressed</th>
                <th className="text-right py-2 pl-3 font-semibold text-ink">Saved</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} className="border-b border-line/50">
                  <td className="py-2 pr-3 text-sub truncate max-w-[200px]">{r.name}</td>
                  <td className="py-2 px-3 text-right text-sub">{fmt(r.original)}</td>
                  <td className="py-2 px-3 text-right text-ink font-medium">
                    {fmt(r.compressed)}
                  </td>
                  <td className="py-2 pl-3 text-right text-[#0e8a5f] font-medium">
                    {Math.round(((r.original - r.compressed) / r.original) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
