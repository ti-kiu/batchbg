import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "What is a bulk image resizer?",
    a: "A bulk image resizer changes the pixel dimensions of many images in one pass instead of one at a time. You select every product photo, set a target size — a percentage, a bounding box, or exact pixels — and all files are resized and handed back together, usually as a ZIP. BatchBG's resizer runs entirely in your browser: no upload, no account, no file cap.",
  },
  {
    q: "What image size should I resize product photos to?",
    a: "Match the platform you sell on: Amazon needs a long edge of at least 1000 px for zoom and 2000×2000 px is the practical sweet spot; Shopify recommends 2048×2048 px; Etsy and Walmart want roughly 2000 px; eBay caps at 1600×1600 px. If one catalog ships to several marketplaces, resize everything to 2048×2048 first — every platform above accepts files at or under that size.",
  },
  {
    q: "Does resizing reduce image quality?",
    a: "Downscaling removes pixels, so a 6000 px photo resized to 2048 px has less raw detail — but on a listing page nobody can tell, because screens rarely display more than 2000 px of product image. BatchBG resizes in steps (halving toward the target) rather than one jump, which avoids the aliasing and softness a single naive downscale produces. Upscaling is the risky direction: a 500 px image stretched to 2000 px will always look blurry.",
  },
  {
    q: "What is the difference between fit, percentage, and exact resize?",
    a: "Fit-inside scales each image down until it fits within a width × height box while keeping its aspect ratio — nothing gets cropped or stretched. Percentage multiplies every image by the same factor (50% halves all dimensions). Exact forces every output to the same pixels; use it only when your sources already share one aspect ratio, otherwise images distort.",
  },
  {
    q: "Can I resize hundreds of images at once for free?",
    a: "Yes. Because BatchBG processes locally with the browser's Canvas API, there is no server queue to meter — 10 files or 1,000 files behave the same, with no watermark, sign-up wall, or daily credit. The practical limit is your device's memory; batches of 200–500 typical product photos work fine on any laptop from the last decade.",
  },
  {
    q: "Is it safe to process product photos in a browser tool?",
    a: "It is safer than an uploader. The files never leave your device — resize math happens in a Web Worker and Canvas inside your own browser tab, so pre-release product shots, supplier catalogs, and client photos cannot be intercepted, stored, or mined by the service. Close the tab and everything is gone.",
  },
];

export const metadata: Metadata = {
  title: "Bulk Image Resizer — Resize Multiple Images at Once, Free | BatchBG",
  description:
    "Free bulk image resizer: resize hundreds of product photos to Shopify, Amazon, Etsy or custom sizes in one pass. 100% in-browser — no upload, no sign-up, ZIP download.",
  keywords:
    "bulk image resizer, resize multiple images, batch image resizer, bulk resize images, image resizer online free, resize product photos",
  alternates: { canonical: "https://batchbg.com/bulk-image-resizer/" },
  openGraph: {
    title: "Bulk Image Resizer — Resize Multiple Images at Once, Free",
    description:
      "Resize hundreds of product photos in one pass. E-commerce presets, custom sizes, ZIP download. Runs in your browser, nothing uploaded.",
    url: "https://batchbg.com/bulk-image-resizer/",
  },
};

export default function BulkImageResizer() {
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
    name: "BatchBG Bulk Image Resizer",
    url: "https://batchbg.com/bulk-image-resizer/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize up to hundreds of images in one batch",
      "E-commerce presets for Amazon, Shopify, Etsy, eBay, Walmart",
      "Fit-inside, percentage and exact-dimension modes",
      "Convert to JPEG, PNG or WebP while resizing",
      "All processing local — no upload, no account",
    ],
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Bulk Image Resizer', url: 'https://batchbg.com/bulk-image-resizer/' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Bulk Image Resizer — Resize Multiple Images at Once
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Drop hundreds of photos, pick a size — Shopify 2048, Amazon 2000, a percentage, or your own — and download everything as one ZIP. Runs in your browser. No upload, no sign-up, no limit.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium">
            📐 E-commerce presets
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-green-bg text-green px-3 py-1.5 rounded-full font-medium">
            🔒 Nothing leaves your device
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-green-bg text-green px-3 py-1.5 rounded-full font-medium">
            🗜️ One ZIP download
          </span>
        </div>
        <ResizerTool />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            The Sizes That Actually Matter
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            &ldquo;Bulk image resizer&rdquo; is only useful if it spares you the lookup table. These are the numbers the major platforms publish or reward as of 2026 — the presets above encode them so one click does the math:
          </p>
          <div className="bg-white rounded-xl border border-line overflow-hidden mb-6 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Platform</th>
                  <th className="text-left p-3 font-semibold">Min for zoom</th>
                  <th className="text-left p-3 font-semibold">Recommended</th>
                  <th className="text-left p-3 font-semibold">Gotcha</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Amazon", "1000 px long edge", "2000 × 2000 px", "Below 1000 px: no pinch-zoom, listing looks broken"],
                  ["Shopify", "None hard", "2048 × 2048 px", "Storefronts serve CDN renditions — 2048 covers retina grids"],
                  ["Etsy", "500 px", "2000 px long edge", "First photo becomes the thumbnail on search"],
                  ["eBay", "500 px (or flagged)", "1600 × 1600 px", "Images below the minimum are demoted in results"],
                  ["Walmart", "500 px", "2200 × 2200 px", "Promo text, watermarks or borders = rejection"],
                ].map(([p, min, rec, gotcha], i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="p-3 font-medium text-ink">{p}</td>
                    <td className="p-3 text-sub">{min}</td>
                    <td className="p-3 text-ink font-medium">{rec}</td>
                    <td className="p-3 text-sub">{gotcha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Why &ldquo;Fit Inside&rdquo; Beats Forced Dimensions
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Most desktop batch tools offer one number: width × height, applied to every file. Camera catalogs are a mix of landscape and portrait shots, so a forced 2000 × 2000 on a rectangular photo either squashes the product or — in better tools — center-crops it. Cropping is silent data loss: your product touches the frame edge and Amazon-style white-margin checks get nervous. The fit-inside box scales each image to the largest size that still fits inside 2000 × 2000 without touching the aspect ratio, which is why every preset here uses it. If your catalog really is one shared ratio, exact mode is still there.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Resizing Without the Upload Risk
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Online bulk resizers normally mean shipping your unreleased catalog to someone&rsquo;s server, queueing it, and hoping the &ldquo;files auto-delete in 24 hours&rdquo; promise is true. BatchBG does the pixel math with the same Canvas API the browser uses to render this page: the file is decoded, scaled, re-encoded and zipped inside your own tab. Nothing traverses a network, so nothing can leak, be retained, or train anything. The same no-upload design runs through the rest of the toolkit — the <a href="/bulk-background-remover/" className="text-accent hover:underline">bulk background remover</a>, the <a href="/batch-image-compressor/" className="text-accent hover:underline">batch image compressor</a>, and the <a href="/offline-background-remover/" className="text-accent hover:underline">offline editor</a> — so a resize → trim-edges → compress pipeline never puts one file online.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            A Full Catalog Workflow
          </h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Start from originals.</span> Resize copies, not your archival files — downscaling throws pixels away permanently.</li>
            <li><span className="font-semibold text-ink">One pipeline, three steps.</span> <a href="/remove-background-from-product-photos/" className="text-accent hover:underline">Remove backgrounds</a> first if you need white, then resize to platform dimensions, then <a href="/batch-image-compressor/" className="text-accent hover:underline">compress</a> to the file-size ceiling. Order matters: background removal on 6000 px originals keeps edge detail.</li>
            <li><span className="font-semibold text-ink">Keep zoom eligibility.</span> If a marketplace promises zoom, never let the long edge fall under 1000 px — <a href="/resize-to-1000x1000/" className="text-accent hover:underline">this 1000 × 1000 batch page</a> locks exactly that floor, or see the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon image spec</a> and <a href="/shopify-product-image-size/" className="text-accent hover:underline">Shopify size guide</a> for the full rules, or jump straight to <a href="/resize-to-2000x2000/" className="text-accent hover:underline">resizing a folder to 2000 × 2000</a>, the size that satisfies most of them at once, or to <a href="/resize-to-1024x1024/" className="text-accent hover:underline">1024 × 1024</a> for app-icon masters and AI reference folders, or to <a href="/resize-to-1500x1500/" className="text-accent hover:underline">1500 × 1500</a>, the size Google Merchant Center itself recommends for product feeds, or to <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2048 × 2048</a>, Shopify's stated display-best square that maps 1:1 onto the grande variant, or to <a href="/resize-to-512x512/" className="text-accent hover:underline">512 × 512</a> for Google Play icons, WhatsApp stickers, PWA manifests and Stable Diffusion 1.5 inputs, or to <a href="/resize-to-800x800/" className="text-accent hover:underline">800 × 800</a> for eBay zoom activation and Google Shopping's minimum — the power-of-two chain from 512 to 2048 covers both icon and marketplace sizes.</li>
            <li><span className="font-semibold text-ink">Batch by marketplace, not by product.</span> Resizing your whole catalog to one platform&rsquo;s size and then again for the next doubles work; run one fit-inside 2048 master batch, then derive platform copies.</li>
            <li><span className="font-semibold text-ink">Name stays intact.</span> Outputs keep original filenames inside the ZIP, so listing CSVs that reference image names survive the round-trip — one reason sellers keep this tab over <a href="/remove-bg-alternative/" className="text-accent hover:underline">remove.bg-style alternatives</a>.</li>
          </ul>
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
