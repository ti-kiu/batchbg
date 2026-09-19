import type { Metadata } from "next";
import CompressorTool from "@/components/CompressorTool";

const faqData = [
  {
    q: "What is a batch image compressor?",
    a: "A batch image compressor reduces the file size of multiple images at once. Instead of opening each photo in an editor and exporting one by one, you drop all your images into a single tool and compress them in one pass. BatchBG's compressor runs entirely in your browser — no upload, no account, no per-image limits.",
  },
  {
    q: "What file size limits do e-commerce platforms enforce?",
    a: "Shopify accepts images up to 20 MB but recommends staying under 5 MB for fast page loads. Amazon caps product images at 10 MB. Etsy recommends keeping images under 1 MB for quick-loading listings. eBay allows up to 7 MB. If your product photos are 8–15 MB straight from the camera, compressing them to 200–500 KB saves significant upload time and improves storefront speed.",
  },
  {
    q: "Does compressing images reduce quality?",
    a: "It depends on the compression level. JPEG quality 80–85 is visually indistinguishable from the original for most product photos while cutting file size by 60–80%. Quality 60–70 saves even more space with minor artifacts that are hard to notice on screen. BatchBG lets you preview the result at your chosen quality before downloading, so you can find the sweet spot for your catalog.",
  },
  {
    q: "What is the difference between JPEG and WebP compression?",
    a: "JPEG is universally supported by every browser and marketplace. WebP produces 25–35% smaller files at equivalent quality but is not accepted by all e-commerce platforms (Amazon and Etsy require JPEG or PNG). For marketplace listings, compress to JPEG. For your own website or Shopify storefront, WebP is the better choice.",
  },
  {
    q: "Can I resize images during compression?",
    a: "Yes. BatchBG's compressor lets you set a maximum width and height. Common e-commerce sizes are 2000×2000 px for Amazon zoom, 2048×2048 px for Shopify, and 1000×1000 px for Etsy thumbnails. The tool scales proportionally so your product photos are never stretched or distorted.",
  },
  {
    q: "Is this tool free? Are there upload limits?",
    a: "BatchBG's image compressor is 100% free with no image limit. Everything runs locally in your browser using the Canvas API — your photos never leave your device. There are no watermarks, no sign-up walls, and no daily caps.",
  },
];

export const metadata: Metadata = {
  title: "Batch Image Compressor — Free Bulk Image Resize & Optimize | BatchBG",
  description:
    "Compress and resize hundreds of product photos at once. Free browser-based batch image compressor — no upload, no sign-up. Optimized for Shopify, Amazon, Etsy.",
  keywords:
    "batch image compressor, bulk image resize, compress product photos, batch compress images, bulk image optimizer, e-commerce image compression",
  alternates: { canonical: "https://batchbg.com/batch-image-compressor/" },
  openGraph: {
    title: "Batch Image Compressor — Free Bulk Image Resize & Optimize",
    description: "Compress and resize hundreds of product photos at once. Free, local, unlimited.",
    url: "https://batchbg.com/batch-image-compressor/",
  },
};

export default function BatchImageCompressor() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Batch Image Compressor — Free Bulk Image Resize &amp; Optimize
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Compress and resize hundreds of product photos at once. Runs in your browser — no upload, no sign-up, no limits. Optimized for Shopify, Amazon, and Etsy image requirements.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-accent-bg text-accent px-3 py-1.5 rounded-full font-medium">
            🗜️ Batch Compress
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">
            📐 Bulk Resize
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">
            🔒 100% Local
          </span>
        </div>
        <CompressorTool />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            Why Batch Image Compression Matters for E-Commerce
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Large product images are the number-one cause of slow storefront pages. A single uncompressed photo from a modern camera or phone can be 5–15 MB. Multiply that across a catalog of 200 listings and you are forcing every visitor to download gigabytes of data they never needed. Page speed directly affects conversion rates — Google found that a one-second delay in mobile load time can reduce conversions by up to 20%.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            Every major marketplace enforces upload limits, and every one of them rewards smaller files with faster listings and better search placement. Batch image compression solves both problems in a single step: shrink every photo to the optimal size and quality for your platform, all at once.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            E-Commerce Image Size Limits (2026)
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Each marketplace has its own rules, and exceeding the limit means your listing may fail to upload or load slowly for buyers. The table below shows current limits and the sizes that top sellers actually target. Compressing to the recommended range ensures fast uploads, quick listing approvals, and snappy page loads for shoppers on mobile connections.
          </p>
          <div className="bg-white rounded-xl border border-line overflow-hidden mb-6 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Platform</th>
                  <th className="text-left p-3 font-semibold">Max Upload Size</th>
                  <th className="text-left p-3 font-semibold">Recommended Size</th>
                  <th className="text-left p-3 font-semibold">Ideal Dimensions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Shopify", "20 MB", "< 5 MB", "2048 × 2048 px"],
                  ["Amazon", "10 MB", "< 2 MB", "2000 × 2000 px"],
                  ["Etsy", "No hard limit", "< 1 MB", "2000 × 2000 px"],
                  ["eBay", "7 MB", "< 1 MB", "1600 × 1600 px"],
                  ["WooCommerce", "Server-dependent", "< 2 MB", "1200 × 1200 px"],
                ].map(([platform, maxRec, rec, dims], i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="p-3 font-medium text-ink">{platform}</td>
                    <td className="p-3 text-sub">{maxRec}</td>
                    <td className="p-3 text-sub">{rec}</td>
                    <td className="p-3 text-sub">{dims}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Compression Results at a Glance
          </h3>
          <div className="space-y-3 mb-6 not-prose">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-ink">Original</span>
                <span className="text-sm font-mono text-sub">2.4 MB</span>
              </div>
              <div className="w-full h-6 rounded-lg bg-gray-300" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-ink">Compressed</span>
                <span className="text-sm font-mono text-sub">19 KB</span>
              </div>
              <div className="h-6 rounded-lg bg-green" style={{ width: "3%" }} />
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            How Batch Compression Works
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            The browser&apos;s Canvas API can draw any image onto an invisible canvas and re-export it as JPEG or WebP with a configurable quality setting. A quality value of 80 removes invisible detail — metadata, duplicate color data, and pixel-level noise that the human eye cannot detect — while keeping product edges, text labels, and color accuracy intact. Resizing to a maximum width of 2000 px ensures images meet Amazon and Etsy zoom requirements without wasting bandwidth on extra pixels that no screen can display.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            BatchBG runs this entire process locally in your browser. Your images are never uploaded to any server. Drop 10 or 10,000 photos, pick your quality and max width, and download the compressed versions. A typical 4 MB product photo compresses to 300–600 KB at quality 80 with no visible difference on any marketplace listing page.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Best Practices for Compressing Product Photos
          </h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Use JPEG for listings.</span> Every marketplace accepts JPEG. WebP is smaller but not universally supported for uploads.</li>
            <li><span className="font-semibold text-ink">Quality 80 is the sweet spot.</span> Below 75, artifacts become visible on zoom. Above 90, file savings drop sharply.</li>
            <li><span className="font-semibold text-ink">Resize before uploading.</span> A 6000 × 4000 px photo downscaled to 2000 × 1333 px loads 3× faster with identical listing appearance.</li>
            <li><span className="font-semibold text-ink">Keep originals offline.</span> Compress copies for listings, but store full-resolution files for print catalogs or returns.</li>
            <li><span className="font-semibold text-ink">Batch process on import.</span> When adding new inventory, compress all photos at once instead of one at a time during listing creation.</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">
            Compression vs. Background Removal: When to Use Each
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Compression and <a href="/" className="text-accent hover:underline">background remover</a> tools solve different problems. Compression shrinks file size while keeping the original photo intact — use it when your images are already well-lit, properly framed, and on the right background. Background removal replaces the original backdrop with white or transparent — use it when your product photos were taken on a colored, cluttered, or non-compliant background. For many sellers, the workflow is: <a href="/batch-background-remover/" className="text-accent hover:underline">batch background removal</a> first, then compress the result before uploading to the marketplace. BatchBG handles both steps.
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
