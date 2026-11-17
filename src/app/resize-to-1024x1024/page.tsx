import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "How do I resize an image to exactly 1024×1024?",
    a: "Drop the files into the batch tool above — it is locked to exact 1024 × 1024. Square sources pass through untouched dimension-wise; rectangular ones need a decision first: pad to a square (nothing lost, bands of fill on two sides), crop-to-square (nothing added, parts of the frame lost), or stretch (always visibly wrong on photos). Export as JPEG at quality 85–90 for photos, PNG if the transparency has to survive, and take the whole set as one ZIP. Everything runs in your browser — no upload, no account, no watermark.",
  },
  {
    q: "Why does Apple reject a 1024×1024 app icon that has transparency?",
    a: "Because the App Store icon is one of the few 1024 sizes where the alpha channel is a hard build error, not a style choice. App Store Connect requires 1024 × 1024 with no transparency and no alpha channel — the submission rejects with ITMS-90717 if it finds one — because iOS applies its own corner masking to the square and expects to composite it over any wallpaper. The fix is mechanical: flatten onto an opaque background, export PNG (the format) with alpha removed (the channel), verify with the preview. Icons that look square-rounded in your design file usually carry alpha; icons exported from this resizer to JPEG never do.",
  },
  {
    q: "Is 1024×1024 a real specification or just an AI-default artifact?",
    a: "Both, and that is why the query exists. It is a real, published spec in a handful of places — Apple's master app icon (iOS, iPadOS, macOS, and visionOS all key off 1024×1024), the largest favicon/master icon size many toolchains generate down from, and one of DALL·E 3's three fixed output sizes. It is also the canvas diffusion models trained on: SDXL's native square resolution is 1024×1024 (deviating far from it produces compositional artifacts), and Midjourney's square default lands there too. The number is 2^10 — 1,048,576 pixels, 1.05 MP — which is convenient for memory layout, so engines keep choosing it. It is not an e-commerce size: if you are asking for marketplace listings, you almost certainly want 2000×2000 instead, or the 1000×1000 zoom-floor size if file weight is your constraint.",
  },
  {
    q: "Should I upscale a small image to 1024×1024?",
    a: "Only if the destination demands the pixels, and then expect softness. Upscaling cannot invent detail — a 512 px logo stretched to 1024 doubles every compression artifact. Two cases are legitimate: a flat vector-style graphic (logo, icon, UI shape) survives 2× upscaling cleanly because the edges are simple, and AI reference images are the exception where the destination model reinterprets detail anyway. For photos below roughly 700 px on the short side, a 1024 output looks blurry at 100% — better to fit-inside and keep the honest size, or regenerate from source. This tool warns rather than silently upscaling.",
  },
  {
    q: "Can I convert many images to 1024×1024 at once for free?",
    a: "Yes — the batch tool above accepts any number of files, has no quota and adds no watermark because the Canvas resize runs on your machine. The common bulk jobs at this size: normalizing a folder of AI generations to a uniform 1024 square before feeding them as style references, exporting an icon set, or flattening a batch of screenshots to a uniform tile size. Output format (JPEG/PNG/WebP) and quality are chosen once and applied to every file; original filenames are preserved inside the ZIP.",
  },
  {
    q: "What is the difference between 1024×1024 and 1080×1080?",
    a: "One is a power of two, the other is a display-number copy. 1024×1024 (2^10) is what the machine side standardizes on: diffusion-model canvases, Apple's icon master, memory-friendly textures. 1080×1080 is what social schedulers popularized because it echoes 1080p video. Most platforms that appear to want 1080 square actually accept anything above a ~720 min and resize server-side, so pick based on your pipeline: if images feed an AI model or an app-icon build, use 1024; if they feed a social calendar, either works, and 1024 is slightly cheaper to encode. Do not round-trip between them repeatedly — each re-encode is a JPEG generation.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 1024×1024 — AI, App Icon, Batch Free | BatchBG",
  description:
    "Resize one image or a whole folder to exactly 1024×1024 px. The app-icon alpha rule that fails builds, why diffusion models keep landing on 2^10, and a free in-browser batch tool with ZIP export. No upload, no sign-up.",
  keywords:
    "resize image to 1024x1024, 1024x1024 image resizer, resize to 1024x1024 pixels, batch resize 1024x1024, app icon 1024x1024 no alpha, AI image 1024x1024",
  alternates: { canonical: "https://batchbg.com/resize-to-1024x1024/" },
  openGraph: {
    title: "Resize Image to 1024×1024 — The AI and App-Icon Size, In Batch",
    description:
      "Exact or fit 1024×1024 for app icons, AI reference sets and tiles — including the alpha-channel rule Apple enforces at build time. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-1024x1024/",
  },
};

export default function Resize1024() {
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
    name: "BatchBG — Resize to 1024×1024",
    url: "https://batchbg.com/resize-to-1024x1024/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 1024×1024 px",
      "Fit-inside mode for mixed-orientation folders",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 1024×1024: The Power-of-Two Standard for AI Outputs and App Icons",
    description:
      "Where 1024×1024 actually comes from — diffusion-model canvases, Apple's icon master and the alpha-channel build error — plus a correct batch pipeline that never uploads.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-07",
    dateModified: "2026-11-07",
    url: "https://batchbg.com/resize-to-1024x1024/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 1024×1024", url: "https://batchbg.com/resize-to-1024x1024/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 1024 × 1024 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 1024 × 1024 is the square that machines standardized on — Apple&rsquo;s app-icon master size, the native canvas of SDXL-class diffusion models, one of DALL·E 3&rsquo;s three fixed outputs. Drop a folder above, pick exact or fit-inside, and take the ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 1024, h: 1024 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            Who Actually Requires 1024 × 1024
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Four real destinations, and knowing which one you are serving changes the export settings. <span className="font-semibold text-ink">App Store icons:</span> Apple&rsquo;s Human Interface Guidelines list 1024 × 1024 as the layout size for the iOS/iPadOS/macOS icon master — and, crucially, it must contain no alpha channel, or submission fails with error ITMS-90717. <span className="font-semibold text-ink">Favicon/app masters:</span> the 1024 PNG is the root art most icon generators downscale from for every device slot. <span className="font-semibold text-ink">Diffusion models:</span> SDXL was trained at 1024×1024 and produces degraded compositions far from its ~1-megapixel sweet spot; DALL·E 3 offers exactly three sizes and 1024×1024 is the square one. Reference images you feed those models normalize cleanly to this canvas. <span className="font-semibold text-ink">Everything else</span> — social tiles, thumbnails — accepts anything; 1024 is just the cheapest power-of-two square (1,048,576 px = 2^20). If you landed here from a marketplace listing instead, you want the <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000×2000 page</a>, not this one. The underlying engine is the same <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk image resizer</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            The Alpha Trap: Why a Perfect 1024 Icon Gets Rejected
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Design tools export icons as PNG, and PNG quietly carries transparency — even when the artwork looks fully opaque, the file often has an alpha channel. App Store Connect does not warn you politely; the build is rejected: <em>ITMS-90717 &ldquo;Invalid App Store Icon. The App Store Icon&hellip; can&rsquo;t be transparent nor contain an alpha channel.&rdquo;</em> The reason is structural: iOS masks the square&rsquo;s corners itself and composites the icon over user wallpapers, so a self-transparent edge would double-apply. The fix is an exact 1024 × 1024 export flattened onto opaque pixels — the resizer above strips the problem by re-encoding through Canvas: export as JPEG and alpha cannot exist; export as PNG and the canvas composite is opaque wherever you filled it. visionOS uses the same 1024 master but masks to a circle — same no-alpha rule applies. This is one of the few image rules that is a hard build failure rather than a style preference, and most 1024 resize pages never mention it.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Crop, Pad, or Fit: Feeding Rectangles Into a Square Model
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Photos arrive 3:2 or 4:3; the target is 1:1. Center-crop keeps the canvas pure but silently discards up to a third of a 3:2 frame — fine for a subject you positioned, dangerous for a catalog. Padding keeps everything but paints bands: for <em>model inputs</em> the bands hurt, because diffusion models attend to the full frame and blank borders shift composition — crop is usually the better start. For <em>app-icon masters</em> the opposite holds: never crop art Apple will mask, pad or exact-fit and let the system do the rounding. For <em>marketplace</em> images white padding is the accepted answer (see the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon spec page</a>). If the source has a busy or wrong-color background in any of these lanes, remove it first at full resolution — <a href="/product-photo-background-remover/" className="text-accent hover:underline">background removal before resize</a> is always the right order, since edge detail computed at 6000 px beats edge detail computed at 1024. To audit a folder against size and background rules in bulk before exporting, use <a href="/bulk-background-screening/" className="text-accent hover:underline">bulk background screening</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Upscaling to 1024: When It Helps and When It Lies
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            A 640 px photo forced to 1024 gains pixels, not information — it will look soft at 100% and Apple&rsquo;s validator will accept it happily, which is exactly the trap: passing the build check and passing human eyes are different tests. Flat graphics (logos, iconography, screenshots of UI) upscale 1.5–2× almost invisibly because their edges are simple; photographs do not. If your only source is small, regenerate or re-shoot rather than upscale — and if the file is large and the job is shrinking many at once, the two classic batch mistakes (one-jump downscale aliasing, repeated JPEG re-encoding) are covered on the <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000×2000 page</a>; this tool uses the same step-down halving and exports once at the quality you pick. For final file weight tuning, <a href="/batch-image-compressor/" className="text-accent hover:underline">compress to a KB target</a> in one deliberate pass.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 1024 Batch Pipeline (Icon Set or Reference Folder)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Decide the destination first: icon master (crop art yourself, never pre-round, opaque), AI references (crop-to-fill beats padding), tiles (either).</li>
            <li>Clean backgrounds before sizing if needed — <a href="/remove-background-from-multiple-images/" className="text-accent hover:underline">batch background removal</a> at original resolution.</li>
            <li>Resize the whole folder here: exact 1024 × 1024 for squares, pad or crop for rectangles.</li>
            <li>Export PNG for icon masters with alpha removed, JPEG q85–90 for photographs and references.</li>
            <li>Download the ZIP, drop the icon into Xcode&rsquo;s Asset Catalog / normalize the references into your prompt folder — filenames preserved either way.</li>
          </ol>
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
