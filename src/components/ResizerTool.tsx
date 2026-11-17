"use client";

import { useState, useCallback, useRef } from "react";
import JSZip from "jszip";

type Mode = "fit" | "percent" | "exact";
type OutFormat = "same" | "image/jpeg" | "image/png" | "image/webp";

interface Preset {
  label: string;
  w: number;
  h: number;
  note: string;
}

const PRESETS: Preset[] = [
  { label: "Amazon main", w: 2000, h: 2000, note: "zoom threshold ≥1000px" },
  { label: "Shopify", w: 2048, h: 2048, note: "platform sweet spot" },
  { label: "Etsy", w: 2000, h: 2000, note: "recommended long edge" },
  { label: "eBay", w: 1600, h: 1600, note: "max recommendation" },
  { label: "Walmart", w: 2000, h: 2000, note: "min 500, no text overlay" },
];

interface Row {
  name: string;
  ow: number;
  oh: number;
  nw: number;
  nh: number;
  original: number;
  resized: number;
  url: string;
  ext: string;
}

interface ResizerToolProps {
  initialMode?: Mode;
  initialExact?: { w: number; h: number };
  initialPreset?: number;
}

export default function ResizerTool({ initialMode, initialExact, initialPreset }: ResizerToolProps = {}) {
  const [files, setFiles] = useState<File[]>([]);
  const [mode, setMode] = useState<Mode>(initialMode ?? "fit");
  const [preset, setPreset] = useState<number>(initialPreset ?? 1);
  const [maxW, setMaxW] = useState(2048);
  const [maxH, setMaxH] = useState(2048);
  const [pct, setPct] = useState(50);
  const [exactW, setExactW] = useState(initialExact?.w ?? 1000);
  const [exactH, setExactH] = useState(initialExact?.h ?? 1000);
  const [format, setFormat] = useState<OutFormat>("same");
  const [quality, setQuality] = useState(90);
  const [rows, setRows] = useState<Row[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected) return;
    setFiles(Array.from(selected).filter((f) => f.type.startsWith("image/")));
    setRows([]);
  }, []);

  const dims = useCallback((): { w: number; h: number } => {
    if (mode === "percent") return { w: pct, h: pct };
    if (mode === "exact") return { w: exactW, h: exactH };
    if (mode === "fit" && preset >= 0)
      return { w: PRESETS[preset].w, h: PRESETS[preset].h };
    return { w: maxW, h: maxH };
  }, [mode, preset, maxW, maxH, pct, exactW, exactH]);

  const extFor = (mime: string, fallback: string) => {
    if (mime === "image/jpeg") return "jpg";
    if (mime === "image/png") return "png";
    if (mime === "image/webp") return "webp";
    return fallback;
  };

  const resizeAll = useCallback(async () => {
    if (files.length === 0) return;
    setProcessing(true);
    setRows([]);
    setProgress(0);
    const { w: tw, h: th } = dims();
    const out: Row[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const img = new Image();
      const url = URL.createObjectURL(file);
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
      });
      URL.revokeObjectURL(url);
      if (!img.width) continue;

      let nw: number, nh: number;
      if (mode === "percent") {
        nw = Math.max(1, Math.round((img.width * tw) / 100));
        nh = Math.max(1, Math.round((img.height * tw) / 100));
      } else if (mode === "exact") {
        nw = tw;
        nh = th;
      } else {
        const scale = Math.min(tw / img.width, th / img.height, 1);
        nw = Math.max(1, Math.round(img.width * scale));
        nh = Math.max(1, Math.round(img.height * scale));
      }

      const canvas = document.createElement("canvas");
      canvas.width = nw;
      canvas.height = nh;
      const ctx = canvas.getContext("2d")!;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      if (mode !== "exact" && (nw < img.width || nh < img.height)) {
        // step-down in halves for better downscale quality
        let sw = img.width, sh = img.height, src: HTMLImageElement | HTMLCanvasElement = img;
        while (sw / 2 > nw && sh / 2 > nh) {
          const half = document.createElement("canvas");
          half.width = Math.round(sw / 2);
          half.height = Math.round(sh / 2);
          half.getContext("2d")!.drawImage(src, 0, 0, half.width, half.height);
          src = half; sw = half.width; sh = half.height;
        }
        ctx.drawImage(src, 0, 0, nw, nh);
      } else {
        ctx.drawImage(img, 0, 0, nw, nh);
      }

      const mime = format === "same" ? (file.type === "image/png" || file.type === "image/webp" || file.type === "image/jpeg" ? file.type : "image/jpeg") : format;
      const blob: Blob = await new Promise((resolve) =>
        canvas.toBlob(
          (b) => resolve(b ?? new Blob()),
          mime,
          mime === "image/png" ? undefined : quality / 100
        )
      );

      const origExt = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
      out.push({
        name: file.name,
        ow: img.width,
        oh: img.height,
        nw, nh,
        original: file.size,
        resized: blob.size,
        url: URL.createObjectURL(blob),
        ext: extFor(mime, origExt),
      });
      setProgress(Math.round(((i + 1) / files.length) * 100));
    }

    setRows(out);
    setProcessing(false);
  }, [files, dims, mode, format, quality]);

  const downloadZip = useCallback(async () => {
    const zip = new JSZip();
    for (const r of rows) {
      const resp = await fetch(r.url);
      const blob = await resp.blob();
      zip.file(r.name.replace(/\.[^.]+$/, "") + `.${r.ext}`, blob);
    }
    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "batchbg_resized.zip";
    a.click();
  }, [rows]);

  const fmt = (b: number) =>
    b < 1024 ? b + " B" : b < 1048576 ? (b / 1024).toFixed(1) + " KB" : (b / 1048576).toFixed(2) + " MB";

  const inputCls =
    "w-full border border-line rounded-lg px-3 py-2 text-sm text-ink bg-white";
  const chip = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-sm font-medium border transition ${
      active
        ? "bg-accent text-white border-accent"
        : "bg-white text-body border-line hover:border-accent"
    }`;

  return (
    <div className="bg-white rounded-2xl border border-line shadow-card p-6 not-prose">
      <div className="flex flex-col sm:flex-row gap-4 mb-5">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-ink mb-1">
            Images to resize
          </label>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFiles}
            className="block w-full text-sm text-sub file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:font-medium file:cursor-pointer hover:file:opacity-90"
          />
          <p className="text-xs text-sub mt-1">
            {files.length > 0
              ? `${files.length} image${files.length !== 1 ? "s" : ""} selected — everything stays on your device`
              : "JPG, PNG, WebP, BMP — drop 10 or 500 files"}
          </p>
        </div>
        <div className="w-full sm:w-40">
          <label className="block text-sm font-semibold text-ink mb-1">Output</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as OutFormat)}
            className={inputCls}
          >
            <option value="same">Keep original format</option>
            <option value="image/jpeg">Convert to JPEG</option>
            <option value="image/png">Convert to PNG</option>
            <option value="image/webp">Convert to WebP</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-ink mb-2">Resize mode</label>
        <div className="flex flex-wrap gap-2 mb-3">
          <button type="button" className={chip(mode === "fit")} onClick={() => setMode("fit")}>
            Fit inside (no crop)
          </button>
          <button type="button" className={chip(mode === "percent")} onClick={() => setMode("percent")}>
            Percentage
          </button>
          <button type="button" className={chip(mode === "exact")} onClick={() => setMode("exact")}>
            Exact size
          </button>
        </div>

        {mode === "fit" && (
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {PRESETS.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  className={chip(preset === i)}
                  onClick={() => setPreset(i)}
                  title={p.note}
                >
                  {p.label} {p.w}×{p.h}
                </button>
              ))}
              <button
                type="button"
                className={chip(preset === -1)}
                onClick={() => setPreset(-1)}
              >
                Custom
              </button>
            </div>
            {preset >= 0 && (
              <p className="text-xs text-sub mb-2">{PRESETS[preset].note} — images larger than the box are scaled down, smaller ones stay untouched.</p>
            )}
            {preset === -1 && (
              <div className="flex items-end gap-3">
                <div className="w-28">
                  <label className="block text-xs font-medium text-sub mb-1">Max width (px)</label>
                  <input type="number" min={16} max={16384} value={maxW}
                    onChange={(e) => setMaxW(Number(e.target.value))} className={inputCls} />
                </div>
                <span className="text-sub pb-2">×</span>
                <div className="w-28">
                  <label className="block text-xs font-medium text-sub mb-1">Max height (px)</label>
                  <input type="number" min={16} max={16384} value={maxH}
                    onChange={(e) => setMaxH(Number(e.target.value))} className={inputCls} />
                </div>
              </div>
            )}
          </div>
        )}

        {mode === "percent" && (
          <div className="flex items-center gap-4">
            <input
              type="range" min={5} max={200} value={pct}
              onChange={(e) => setPct(Number(e.target.value))}
              className="w-64 accent-[#0F70E6]"
            />
            <span className="text-sm font-mono text-ink w-14">{pct}%</span>
            <span className="text-xs text-sub">scales every image proportionally</span>
          </div>
        )}

        {mode === "exact" && (
          <div className="flex items-end gap-3">
            <div className="w-28">
              <label className="block text-xs font-medium text-sub mb-1">Width (px)</label>
              <input type="number" min={16} max={16384} value={exactW}
                onChange={(e) => setExactW(Number(e.target.value))} className={inputCls} />
            </div>
            <span className="text-sub pb-2">×</span>
            <div className="w-28">
              <label className="block text-xs font-medium text-sub mb-1">Height (px)</label>
              <input type="number" min={16} max={16384} value={exactH}
                onChange={(e) => setExactH(Number(e.target.value))} className={inputCls} />
            </div>
            <p className="text-xs text-sub pb-2 max-w-[16rem]">stretches to the exact box — use only when sources already share one aspect ratio.</p>
          </div>
        )}
      </div>

      {(format === "image/jpeg" || format === "image/webp" || (format === "same")) && (
        <div className="flex items-center gap-4 mb-5">
          <label className="text-sm font-semibold text-ink">JPEG/WebP quality</label>
          <input
            type="range" min={40} max={100} value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-48 accent-[#0F70E6]"
          />
          <span className="text-sm font-mono text-ink w-10">{quality}</span>
        </div>
      )}

      <div className="flex gap-3 items-center flex-wrap">
        <button
          onClick={resizeAll}
          disabled={files.length === 0 || processing}
          className="bg-accent text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-hover disabled:opacity-40 transition"
        >
          {processing ? `Resizing… ${progress}%` : `Resize ${files.length || ""} image${files.length !== 1 ? "s" : ""}`}
        </button>
        {rows.length > 0 && (
          <button
            onClick={downloadZip}
            className="border border-accent text-accent px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent/5 transition"
          >
            Download all (.zip)
          </button>
        )}
        {rows.length > 0 && (
          <span className="text-xs text-sub">
            {rows.length} done — {fmt(rows.reduce((s, r) => s + r.resized, 0))} total
          </span>
        )}
      </div>

      {rows.length > 0 && (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-3 font-semibold text-ink">File</th>
                <th className="text-left py-2 px-3 font-semibold text-ink">Original</th>
                <th className="text-left py-2 px-3 font-semibold text-ink">Resized</th>
                <th className="text-right py-2 px-3 font-semibold text-ink">Size</th>
                <th className="text-right py-2 pl-3 font-semibold text-ink"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-line/50">
                  <td className="py-2 pr-3 text-sub truncate max-w-[180px]">{r.name}</td>
                  <td className="py-2 px-3 text-sub font-mono text-xs">{r.ow}×{r.oh}</td>
                  <td className="py-2 px-3 text-ink font-mono text-xs font-semibold">{r.nw}×{r.nh}</td>
                  <td className="py-2 px-3 text-right text-sub">{fmt(r.original)} → <span className="text-ink font-medium">{fmt(r.resized)}</span></td>
                  <td className="py-2 pl-3 text-right">
                    <a href={r.url} download={`${r.name.replace(/\.[^.]+$/, "")}.${r.ext}`} className="text-accent hover:underline text-xs font-medium">
                      Save
                    </a>
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
