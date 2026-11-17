import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "How do I resize an image to exactly 512×512?",
    a: "Drop the files into the batch tool above — it is locked to exact 512 × 512. Square sources pass through with only resampling; rectangular ones need a decision first: pad to a square (nothing lost, bands of fill on two sides), center-crop to a square (nothing added, frame edges trimmed), or stretch (always visibly wrong on photos and icons alike). Export PNG for Google Play icons and PWA manifests, WebP for WhatsApp stickers, JPEG for photographic thumbnails. Take the whole set as one ZIP. Everything runs in your browser — no upload, no account, no watermark.",
  },
  {
    q: "Why do Google Play and WhatsApp both want 512×512 but different formats?",
    a: "Because they use the pixel count for different reasons. Google Play needs a 512 × 512 PNG with an alpha channel (32-bit, max 1024 KB) because Android masks the corners itself at roughly 30% of icon size — the alpha channel defines what shows through the mask, so a flat opaque icon loses its rounded look. WhatsApp needs 512 × 512 WebP because stickers composite over arbitrary chat backgrounds, and WebP carries transparency plus animation at a fraction of PNG's byte cost — a static sticker must be 100 KB or less, which is hard to hit with PNG at 512 square but easy with WebP. Same pixels, different format, different transparency mechanism, different file-size ceiling. Export PNG for Play, WebP for WhatsApp, and never send the same file to both.",
  },
  {
    q: "Is 512×512 a power of two, and why does that matter?",
    a: "Yes — 512 is 2^9, which puts it in a chain: 256 (2^8) → 512 (2^9) → 1024 (2^10) → 2048 (2^11). Each step doubles the pixel count. This matters because GPU texture pipelines, VAE latent spaces, and diffusion-model training all use power-of-two dimensions for memory alignment. Stable Diffusion 1.5 was trained at 512 × 512 — generating at other sizes produces composition drift and repeated subjects. SDXL-Turbo is optimized for 512 × 512 as its fastest mode. The same chain links our 1024 × 1024 page (Apple's icon master, SDXL native) and 2048 × 2048 page (Shopify's display-best), so if you are building an icon ladder or an AI reference pipeline, these three sizes are designed to interoperate.",
  },
  {
    q: "Does my PWA really need a 512×512 icon to be installable?",
    a: "Yes — Chromium-based browsers (Chrome, Edge, Samsung Internet) require a web app manifest with at least a 192 × 192 and a 512 × 512 icon before the install prompt fires. Without both, the site is not installable as a PWA regardless of service worker or HTTPS. The 512 icon is what Chrome uses on the Android home screen and the Windows taskbar; the 192 is the fallback for smaller display slots. The manifest also accepts a 512 × 512 maskable icon (purpose: \"maskable\") for adaptive shapes — Android will crop up to 20% of the safe area, so keep your logo inside the inner 80% of the canvas. If you already have a 1024 × 1024 master from the Apple icon pipeline, downscale to 512 here rather than exporting separately.",
  },
  {
    q: "Can I make a WhatsApp sticker pack from photos at 512×512?",
    a: "Yes, but two constraints apply simultaneously and they are independent. First, every sticker must be exactly 512 × 512 pixels in WebP format — not 500, not 1024, exactly 512. Second, each static sticker must be 100 KB or less (animated: 500 KB, 10 seconds max). A 512 × 512 WebP of a flat illustration compresses to 20–40 KB easily; a photographic sticker with fine detail can exceed 100 KB at quality 85. If the file is too large after resizing, lower the WebP quality to 70–75 or simplify the content — do not reduce the pixel dimensions, because WhatsApp rejects anything other than 512 × 512. Each sticker must have a transparent background, a pack needs 3–30 stickers, and the tray icon is a separate 96 × 96 asset under 50 KB.",
  },
  {
    q: "Should I upscale a small image to 512×512?",
    a: "Only for flat graphics (logos, vector-style icons, simple UI shapes) — they survive 1.5–2× upscaling almost invisibly because their edges are geometric. Photographs do not: a 256 px photo stretched to 512 doubles every compression artifact and looks soft at 100% zoom, which is the exact zoom level Discord and Google Play display at on high-DPI screens. For Google Play icons, start from a 1024 × 1024 or larger master and downscale — the extra detail survives the shrink and produces a crisper 512 than a native 512 export. For WhatsApp stickers, remove the background at full resolution first (background removal at 2000 px beats 512 px), then resize to 512 — see the batch background removal page for the correct order. This tool warns when the source is smaller than the target rather than silently upscaling.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 512×512 — Play Icon, WhatsApp Sticker, SD 1.5 | BatchBG",
  description:
    "Resize one image or a whole folder to exactly 512×512 px. Six destinations at one pixel size with conflicting format and transparency rules, the WhatsApp 100 KB file-weight trap, and the power-of-two chain from 256 to 2048. Free in-browser batch tool, ZIP export, no upload.",
  keywords:
    "resize image to 512x512, 512x512 image resizer, resize to 512x512 pixels, google play icon 512x512, whatsapp sticker 512x512, pwa icon 512x512, stable diffusion 512x512, batch resize 512x512",
  alternates: { canonical: "https://batchbg.com/resize-to-512x512/" },
  openGraph: {
    title: "Resize Image to 512×512 — The Icon, Sticker and AI Size, In Batch",
    description:
      "Exact 512×512 for Google Play icons, WhatsApp stickers, PWA manifests and SD 1.5 — including the format conflict, the 100 KB trap and the power-of-two chain. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-512x512/",
  },
};

export default function Resize512() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BatchBG — Resize to 512×512",
    url: "https://batchbg.com/resize-to-512x512/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 512×512 px",
      "Fit-inside mode for mixed-orientation folders",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 512×512: Six Destinations, Three Formats, One Pixel Size",
    description:
      "Where 512×512 actually comes from — Google Play icons, WhatsApp stickers, PWA manifests, Stable Diffusion 1.5, Discord and Telegram — plus the format and transparency conflicts no single resize page explains, and a correct batch pipeline that never uploads.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-11",
    dateModified: "2026-11-11",
    url: "https://batchbg.com/resize-to-512x512/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 512×512", url: "https://batchbg.com/resize-to-512x512/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 512 × 512 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 512 × 512 is the pixel count that Google Play, WhatsApp stickers, installable web apps, Stable Diffusion 1.5, Discord server icons and Telegram stickers all standardized on — but each demands a different format, and two of them demand opposite transparency rules. Drop a folder above, pick exact or fit-inside, choose your export format, and take the ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 512, h: 512 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            Six Destinations, Three Formats, One Pixel Size
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            512 × 512 is unusual among resize targets: it is not a marketplace size, not a print size, and not a social-media tile — it is the number where <span className="font-semibold text-ink">app stores, chat platforms, web standards and AI models</span> all happened to land. Each destination reuses the same 262,144 pixels but applies a different format, transparency and file-size rule, which means the same 512 × 512 file is almost never valid for two destinations at once. The table below is the compliance matrix no single competitor page publishes:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Destination</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Format</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Transparency</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Max file</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Source</th>
                </tr>
              </thead>
              <tbody className="text-sub">
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Google Play icon</td>
                  <td className="p-3">PNG (32-bit)</td>
                  <td className="p-3">Required (alpha for adaptive mask)</td>
                  <td className="p-3">1,024 KB</td>
                  <td className="p-3">Play Console Help</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">WhatsApp sticker</td>
                  <td className="p-3">WebP</td>
                  <td className="p-3">Required (floats on chat bg)</td>
                  <td className="p-3">100 KB static / 500 KB animated</td>
                  <td className="p-3">WhatsApp FAQ 1056840314992666</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">PWA manifest icon</td>
                  <td className="p-3">PNG</td>
                  <td className="p-3">Optional (maskable needs safe area)</td>
                  <td className="p-3">No hard limit (keep under 512 KB)</td>
                  <td className="p-3">MDN / web.dev</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Stable Diffusion 1.5</td>
                  <td className="p-3">Any (PNG/JPG/WebP)</td>
                  <td className="p-3">N/A (model input)</td>
                  <td className="p-3">N/A (decoded to latent)</td>
                  <td className="p-3">SD1.5 training resolution</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Discord server icon</td>
                  <td className="p-3">PNG / JPG / GIF</td>
                  <td className="p-3">Optional</td>
                  <td className="p-3">10 MB</td>
                  <td className="p-3">Discord support</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-ink">Telegram sticker</td>
                  <td className="p-3">PNG (static) / WebP/TGS (animated)</td>
                  <td className="p-3">Required</td>
                  <td className="p-3">512 KB static / 64 KB animated</td>
                  <td className="p-3">Telegram sticker docs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            The conflict is visible in the table: Google Play wants <span className="font-semibold text-ink">PNG with alpha</span>, WhatsApp wants <span className="font-semibold text-ink">WebP with alpha</span>, PWA wants <span className="font-semibold text-ink">PNG</span>, and if you are also shipping an Apple App Store icon at <a href="/resize-to-1024x1024/" className="text-accent hover:underline">1024 × 1024</a> the alpha rule flips entirely — Apple forbids transparency and rejects the build with ITMS-90717. The same designer working across Android and iOS at adjacent power-of-two sizes must export twice: once with alpha (512 for Play) and once without (1024 for Apple). No competitor page connects these two rules because they live in separate documentation trees.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            The WhatsApp 100 KB Trap: Pixels and Bytes Are Independent Constraints
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Most 512 × 512 resize pages handle the pixels and stop there. WhatsApp enforces <span className="font-semibold text-ink">two simultaneous constraints</span>: the image must be exactly 512 × 512 pixels AND each static sticker must be 100 KB or less. These are independent — a 512 × 512 WebP of a flat vector illustration compresses to 20–30 KB easily, while a photographic sticker with fine gradient detail can hit 120 KB at quality 80. The pixel dimension is non-negotiable (WhatsApp rejects anything other than 512 × 512 at import), so the only lever is quality and content simplification. Practical sequence: resize to 512 × 512 as WebP, check the file size, and if over 100 KB lower quality to 70–75 or remove background detail at full resolution before resizing — <a href="/remove-background-from-multiple-images/" className="text-accent hover:underline">batch background removal</a> at the original resolution produces cleaner cutouts that compress better than 512-px-first removal. For animated stickers the ceiling is 500 KB and 10 seconds, which is a separate budget entirely. The tray icon is a third asset: 96 × 96, under 50 KB, PNG — most sticker pack rejections come from forgetting the tray icon, not the stickers themselves.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            The Power-of-Two Chain: 256 → 512 → 1024 → 2048
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            512 is 2^9, which places it in a binary chain where each step doubles: 256 (2^8, web icons and Discord emoji display) → 512 (2^9, this page) → 1024 (2^10, <a href="/resize-to-1024x1024/" className="text-accent hover:underline">Apple icon master and SDXL native</a>) → 2048 (2^11, <a href="/resize-to-2048x2048/" className="text-accent hover:underline">Shopify display-best</a>). This is not numerology — GPU texture pipelines, VAE latent compression (factor 8, so 512 px → 64 × 64 latent) and diffusion-model training all use power-of-two dimensions for memory alignment. Stable Diffusion 1.5 was trained at exactly 512 × 512 for its full training run; SDXL-Turbo is optimized for 512 × 512 as its fastest inference mode (1–4 steps, 0.5–2 seconds on an RTX 3090). If you are building an AI reference pipeline, normalizing inputs to 512 for SD 1.5 or 1024 for SDXL produces the cleanest compositions — deviating far from the training resolution causes repeated subjects, composition drift and attention bleed. The same chain matters for icon ladders: a 1024 master downscaled to 512 here and to 256 downstream gives you three sizes from one export, and the <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk image resizer</a> processes all three in one pass.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Crop, Pad, or Fit: Feeding Rectangles Into a 512 Square
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Most 512 × 512 inputs are not born square. Phone photos arrive 4:3 or 3:2, screenshots come in landscape, and sticker art is often drawn at non-square ratios. Three options, each correct for a different destination:
          </p>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Center-crop (Cover):</span> scales the image to fill the 512 square and trims overflow from the center. Best for Google Play icons (the subject should fill the frame) and AI model inputs (blank borders shift diffusion attention). Loses up to 33% of a 3:2 frame.</li>
            <li><span className="font-semibold text-ink">Pad to fit (Contain):</span> fits the whole image inside 512 × 512 with bands of fill on two sides. Best for WhatsApp and Telegram stickers (the art floats, padding is transparent), PWA maskable icons (safe area inside the inner 80%), and logos that must not be cropped. PNG and WebP padding is transparent; JPEG padding is white.</li>
            <li><span className="font-semibold text-ink">Stretch:</span> forces the image to 512 × 512 by distorting proportions. Never correct for photos or icons; only viable for near-square abstract textures where the distortion is invisible.</li>
          </ul>
          <p className="text-sub leading-relaxed mb-4">
            For sticker workflows, always remove the background <span className="font-semibold text-ink">before</span> resizing, not after — edge detail computed at 6000 px beats edge detail computed at 512, and the <a href="/product-photo-background-remover/" className="text-accent hover:underline">background removal page</a> explains why the order is non-negotiable. For PWA icons, keep critical content inside the inner 80% of the canvas (the maskable safe zone) so Android's adaptive cropping does not clip your logo — the <a href="/bulk-background-screening/" className="text-accent hover:underline">bulk screening tool</a> can audit a folder against this rule before export.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 512 Batch Pipeline (Icon Set, Sticker Pack, or AI Reference Folder)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Decide the destination first: Google Play icon (PNG with alpha, opaque corners), WhatsApp sticker (WebP with transparency, 100 KB cap), PWA manifest (PNG, maskable safe area), or AI reference (PNG/JPG, center-crop preferred).</li>
            <li>Clean backgrounds before sizing if needed — <a href="/remove-background-from-multiple-images/" className="text-accent hover:underline">batch background removal</a> at original resolution, especially for stickers and transparent icons.</li>
            <li>Resize the whole folder here: exact 512 × 512 for squares, pad or crop for rectangles. The tool locks to 512 × 512 and applies the same mode to every file.</li>
            <li>Export in the destination's format: PNG at quality 100 for Google Play (truecolor 32-bit), WebP at quality 80 for WhatsApp stickers (check file size, drop to 70 if over 100 KB), PNG for PWA, JPEG q85 for AI references.</li>
            <li>Download the ZIP. For a sticker pack, also export a 96 × 96 tray icon separately. For an icon ladder, repeat at 1024 and 256 — filenames preserved across runs.</li>
          </ol>
          <p className="text-sub leading-relaxed mb-4">
            For final file-weight tuning — especially the WhatsApp 100 KB ceiling — run the ZIP through the <a href="/batch-image-compressor/" className="text-accent hover:underline">batch compressor</a> in one deliberate pass rather than re-encoding repeatedly, since each JPEG or WebP generation costs quality. If your 512 × 512 images are destined for a marketplace listing instead of an icon or sticker, you are on the wrong page: marketplace sizes start at <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1000 × 1000</a> (Amazon zoom floor) and go up to <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000 × 2000</a> and <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2048 × 2048</a>.
          </p>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-line p-5 group">
                <summary className="font-heading font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                  {faq.q}{" "}
                  <span className="text-sub group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-sub text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
