import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "What size should Shopify product images be?",
    a: "Shopify accepts product images up to 5000 x 5000 pixels or 25 megapixels, with a 20 MB per-file cap. For square product photos, 2048 x 2048 px is the size Shopify itself says displays best — large enough for the zoom viewer, small enough that compression stays predictable. A batch resizer should cap the long edge at 2048 px and keep aspect ratio locked so nothing distorts.",
  },
  {
    q: "How do I resize hundreds of Shopify product images at once for free?",
    a: "Use a browser-based bulk resizer: drop the whole folder in, set the maximum dimension (2048 px for Shopify), pick a JPEG quality around 80, and export all files in one pass. BatchBG's compressor runs the resize locally on your machine with no upload, no account, and no per-image limit, so a 500-photo supplier folder finishes in minutes instead of 500 manual exports in Preview or Photoshop.",
  },
  {
    q: "Can I bulk resize images inside the Shopify admin?",
    a: "No. Shopify's admin has no native bulk resize. The Apps Store options (Bulk Image Edit, Photo Resize, and similar) work on images already inside Shopify, and most charge monthly from roughly $5-20 depending on SKU count. Resizing before upload — on your own files — is faster, free, and avoids paying to process images you may re-upload anyway.",
  },
  {
    q: "Do I need to crop my images to a perfect square for Shopify?",
    a: "Only if you want a uniform gallery grid. Shopify fits non-square images into a crop region chosen by your theme, which is why mixed orientations look ragged. The safest approach: pick one aspect ratio (1:1 is standard) and apply it consistently. When using a fit-mode resizer, add white padding to make short files square, or run a bulk background remover first if your product shots have busy backgrounds.",
  },
  {
    q: "Why do my resized Shopify images look soft or blurry?",
    a: "Two common causes: upscaling (resizing a 1200 px original up to 2048 px invents detail that was never there) and over-compression (quality below ~70 on dense textures). Always start from the largest original you have, cap rather than force dimensions, and preview at 100% zoom before uploading. Shopify's CDN serves smaller variants to phones, but it can never add back resolution your source file lacked.",
  },
];

export const metadata: Metadata = {
  title: "Bulk Image Resizer for Shopify — Free 2048px Batch Resize | BatchBG",
  description:
    "Resize hundreds of Shopify product photos to 2048x2048 in one pass, free and locally in your browser. The real upload limits, why Shopify can't batch-resize natively, and a CSV-ready prep workflow.",
  keywords:
    "bulk image resizer shopify, bulk resize images shopify, resize shopify product images in bulk, shopify image resizer free, batch resize 2048x2048 shopify",
  alternates: { canonical: "https://batchbg.com/bulk-image-resizer-shopify/" },
  openGraph: {
    title: "Bulk Image Resizer for Shopify — Free Batch Resize to 2048px",
    description:
      "Shopify's real limits (5000x5000 / 25MP / 20MB, 2048 recommended) and a free local workflow that resizes a whole catalog folder in one pass.",
    url: "https://batchbg.com/bulk-image-resizer-shopify/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function BulkImageResizerShopify() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Bulk Image Resizer for Shopify", url: "https://batchbg.com/bulk-image-resizer-shopify/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bulk Image Resizer for Shopify: Resize Hundreds of Product Photos to 2048px in One Pass",
            description:
              "Shopify's published upload limits, why there is no native bulk resize, and a free browser-based workflow that turns a raw supplier folder into CSV-ready, zoom-enabled product images.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-27",
            dateModified: "2026-10-27",
            url: "https://batchbg.com/bulk-image-resizer-shopify/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sub text-sm mb-2">October 27, 2026 · 6 min read</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
          Bulk Image Resizer for Shopify
        </h1>
        <p className="text-sub text-lg leading-relaxed mb-6">
          Resize an entire product folder to Shopify's recommended 2048&nbsp;×&nbsp;2048&nbsp;px in one pass, free, without uploading anything: drag every photo into BatchBG's browser-based batch resizer, set the long edge to 2048, keep quality at 80, and export the whole catalog in minutes. The resize and compression run on your own machine via the Canvas API — there is no per-image fee, no sign-up wall, and no file ever leaves your laptop.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">The Shopify numbers that actually matter</h2>
        <p className="text-sub leading-relaxed mb-4">
          Three numbers govern every Shopify image, and most "image size guide" posts blur them together. From Shopify's own product-media documentation:
        </p>
        <ul className="list-disc pl-6 text-sub space-y-2 mb-4">
          <li><strong className="text-ink">Hard ceiling:</strong> 5000&nbsp;×&nbsp;5000&nbsp;px or 25 megapixels, file under 20&nbsp;MB. Past this the upload simply fails — the admin error even says "The pixel limit is 20 megapixels" in some flows, which is the legacy phrasing for the same rejection.</li>
          <li><strong className="text-ink">Sweet spot:</strong> 2048&nbsp;×&nbsp;2048&nbsp;px for square product photos — Shopify's own wording is that this "usually displays best." It carries enough detail for the zoom viewer while keeping compressed size in the 150–300&nbsp;KB band.</li>
          <li><strong className="text-ink">Zoom floor:</strong> images under roughly 800&nbsp;×&nbsp;800&nbsp;px lose the zoom feature on most themes. A supplier who sent you 750&nbsp;px thumbnails cannot be upscaled back into real zoom detail — no resizer invents pixels that were never captured.</li>
        </ul>
        <p className="text-sub leading-relaxed mb-4">
          The trap is the gap between the ceiling and the sweet spot. Raw camera files land at 4000&nbsp;×&nbsp;6000&nbsp;px and 8–15&nbsp;MB — inside the limit, so nothing errors, but Shopify's imagery service then does the downscaling on its schedule, and 20&nbsp;MB uploads eat your Files storage and bandwidth allowances. Preparing files to 2048&nbsp;px before upload puts the outcome under your control instead.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Shopify has no native bulk resize — here's the honest comparison</h2>
        <p className="text-sub leading-relaxed mb-4">
          There is no "select all → resize" action anywhere in the Shopify admin. Your real options:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="bg-card text-left">
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Method</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Cost</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Works on</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Catch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b">Browser bulk resizer (local, e.g. BatchBG)</td>
                <td className="px-3 py-2 border-b">Free</td>
                <td className="px-3 py-2 border-b">Your source files, before upload</td>
                <td className="px-3 py-2 border-b">Must re-attach replaced images after the fact</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b">App Store bulk-image apps</td>
                <td className="px-3 py-2 border-b">~$5–20/mo</td>
                <td className="px-3 py-2 border-b">Images already in Shopify</td>
                <td className="px-3 py-2 border-b">Recurring cost scales with SKUs; processes files on their servers</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b">Preview (Mac) / IrfanView (Win)</td>
                <td className="px-3 py-2 border-b">Free</td>
                <td className="px-3 py-2 border-b">Local folders</td>
                <td className="px-3 py-2 border-b">No aspect-safe square padding, no compression preview, clunky at 500+ files</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b">Photoshop Image Processor</td>
                <td className="px-3 py-2 border-b">Subscription</td>
                <td className="px-3 py-2 border-b">Local folders</td>
                <td className="px-3 py-2 border-b">Overkill for resize-only pipelines; desktop app round-trips</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub leading-relaxed mb-4">
          App Store tools earn their keep when images are already live in the store and you want to shrink them in place. But if you are preparing a new catalog — supplier downloads, a phone-full of product shots, renders from a manufacturer — the work belongs before upload, on files you control, where it costs nothing. Pre-sizing to 2048&nbsp;px is also the only durable way to stay under your plan's <a href="/shopify-file-storage-limit/" className="text-accent underline">Shopify file storage cap</a>: resized files occupy a fraction of the GB quota that raw masters do.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The batch workflow: raw folder to CSV-ready in five steps</h2>
        <ol className="list-decimal pl-6 text-sub space-y-3 mb-6">
          <li>
            <strong className="text-ink">Sort originals into one folder.</strong> One file per SKU angle. Filenames matter: Shopify's own guidance and most SEO checklists prefer descriptive slugs (`matte-lipstick-red-350.jpg`) over `IMG_4832.jpg` — Google Image surfaces filenames as a relevance signal, and renaming 500 files afterwards is its own batch job.
          </li>
          <li>
            <strong className="text-ink">Run the whole folder through the bulk resizer.</strong> Drop everything in at once, set maximum dimension to 2048&nbsp;px, lock aspect ratio. The tool scales proportionally — landscape and portrait files both end up with a 2048&nbsp;px long edge, nothing stretched.
          </li>
          <li>
            <strong className="text-ink">Compress at quality 80.</strong> Preview the result before committing. Quality 80–85 is visually indistinguishable from the original on product photos while cutting 60–80% of the bytes; below ~70 you start seeing banding on gradients and softness on dense texture. Target band for a 2048&nbsp;px product JPEG: 150–300&nbsp;KB.
          </li>
          <li>
            <strong className="text-ink">Normalize backgrounds if the catalog is mixed.</strong> Ragged backgrounds look worse than ragged sizes. Run the folder through the <a href="/bulk-background-remover/" className="text-accent underline">bulk background remover</a> and composite onto pure white before (or after) resizing — 2048&nbsp;px white-backed JPEGs give every row of your gallery the same frame.
          </li>
          <li>
            <strong className="text-ink">Feed the CSV.</strong> Upload the finished files to Shopify Admin → Settings → Files, copy the generated CDN URLs into the <em>Image Src</em> column of your product export (see the <a href="/blog/shopify-product-image-size-guide/" className="text-accent underline">full Shopify image guide</a> for the exact CSV mechanics, including the Variant Image column trap), then import. Shopify fetches and attaches everything in one pass.
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Square vs fit: what a resizer will not do for you</h2>
        <p className="text-sub leading-relaxed mb-4">
          A resizer caps the long edge; it does not crop. If some photos are 4:3 landscape and others 1:1, they all become ≤2048&nbsp;px but the gallery still shows mixed ratios — themes crop to a fixed region, so part of your product gets sliced off at the edges on collection pages. Two fixes: pick one aspect ratio for the entire catalog and re-shoot/re-export to it, or pad non-square files onto a white (or transparent PNG) square canvas. If the mixed files are cutouts, <a href="/transparent-background/" className="text-accent underline">transparent-background output</a> lets any theme's colored card sit behind them cleanly — but check the <a href="/blog/what-file-format-keeps-transparent-background/" className="text-accent underline">format rules</a> first: Shopify accepts PNG, but JPEG marketplaces downstream of your catalog do not.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">What happens after upload (so you don't over-engineer)</h2>
        <p className="text-sub leading-relaxed mb-4">
          Shopify's imagery service already creates resized variants of every uploaded image and negotiates the best format (including WebP and AVIF) for each visitor's browser. You cannot and should not try to beat the CDN — the goal of pre-sizing is simply to (a) guarantee zoom-capable resolution, (b) keep one predictable aspect ratio, and (c) stop paying storage for 12&nbsp;MB originals you'll never serve at full size. Done once per batch, locally, with no app subscription: that is the entire job of a bulk resizer for Shopify.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{faq.q}</h3>
              <p className="text-sub leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <p className="text-sub text-sm leading-relaxed mt-10 border-t pt-6">
          Ready to process your catalog? Try the <a href="/bulk-image-resizer/" className="text-accent underline">bulk image resizer</a> for pure batch resizing with a Shopify 2048 preset, the <a href="/batch-image-compressor/" className="text-accent underline">batch image compressor</a> for combined resize&nbsp;+&nbsp;compression, the <a href="/bulk-background-remover-free/" className="text-accent underline">free bulk background remover</a> to normalize backdrops, or read <a href="/blog/remove-backgrounds-100-images-at-once-free/" className="text-accent underline">how many images you can actually process at once</a> before a 500-photo pass.
        </p>
      </article>
    </>
  );
}
