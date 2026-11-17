import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Shopify Product Image Size Guide (2026) — Upload Rules, Bulk Resize | BatchBG",
  description:
    "Shopify allows 20MB per image and 250MB total, but the real constraints are loading speed and variant limits. The complete spec guide with a free batch workflow.",
  keywords:
    "shopify product image size guide, shopify image requirements, shopify max image size, batch resize shopify photos, shopify product photo upload",
  alternates: { canonical: "https://batchbg.com/blog/shopify-product-image-size-guide/" },
  openGraph: {
    title: "Shopify Product Image Size Guide (2026) — Requirements & Bulk Workflow",
    description: "Every Shopify image limit, speed rule, and variant quirk, with a free batch prep workflow for whole catalogs.",
    url: "https://batchbg.com/blog/shopify-product-image-size-guide/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function ShopifyProductImageSizeGuide() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "https://batchbg.com/blog/shopify-product-image-size-guide/" }]} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Shopify Product Image Size Guide (2026): Upload Rules, Speed Limits, and Batch Workflows",
            description: "Every Shopify image constraint - storage limits, CDN behavior, variant quirks - and how to prep a catalog in one batch.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-13",
            dateModified: "2026-10-13",
            url: "https://batchbg.com/blog/shopify-product-image-size-guide/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What is the maximum image size for Shopify products?", acceptedAnswer: { "@type": "Answer", text: "Shopify allows up to 20 megabytes per image file and 250 megabytes of total media storage per product. In practice, almost no store hits those ceilings because Shopify's CDN auto-serves scaled versions and image-heavy products load slowly when files exceed 500KB-1MB." } },
              { "@type": "Question", name: "How many product images can I upload per listing on Shopify?", acceptedAnswer: { "@type": "Answer", text: "Up to 10 images and 1 video per product. However, there is a subtle limit: each variant can have a maximum of 250 images/videos attached across all variants in that product. If you sell t-shirts in 10 sizes and 5 colors (50 variants total), that works fine. But a product with hundreds of SKUs may hit the cap faster than expected." } },
              { "@type": "Question", name: "Does Shopify compress product images automatically?", acceptedAnswer: { "@type": "Answer", text: "Yes, but in a specific way. Shopify serves images through a CDN that resizes them on-demand using a URL parameter. Original uploads are kept as-is up to the 20MB limit. Shopify also converts WebP images served via the CDN, but your uploaded JPEGs remain as JPEGs in the file manager." } },
              { "@type": "Question", name: "Should I put a white background on Shopify product photos?", acceptedAnswer: { "@type": "Answer", text: "Shopify does not require any specific background - the platform only enforces technical constraints (file size, dimensions). Most successful stores use clean white or neutral backgrounds for the first image (which appears in search results and price comparison tools), then switch to lifestyle contexts for slots 3+. The key difference from Amazon is that Shopify buyers expect aesthetic presentation, not sterile documentation shots." } },
            ],
          }),
        }}
      />
      <div className="mb-8">
        <p className="text-sub text-sm mb-2">October 13, 2026 · 6 min read</p>
        <div className="mb-6 rounded-xl overflow-hidden">
          <img src="/demo/product-after.jpg" alt="Clean Shopify product photo with white background ready for upload" className="w-full h-48 object-cover" loading="lazy" />
        </div>
      </div>

      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
        Shopify Product Image Size Guide (2026)
      </h1>
      <p className="text-sub text-lg leading-relaxed mb-8">
        Shopify lets you upload big images - up to 20MB per file, 250MB per product - but the real bottleneck isn't storage. It's how Shopify's CDN resizes images on-the-fly, the variant attachment limits, and the fact that most sellers upload supplier photos wholesale without fixing backgrounds, resolutions, or aspect ratios before hitting upload. Here is every hard constraint and a batch workflow that fixes all of them at once.
      </p>

      <div className="prose prose-gray max-w-none">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Hard Upload Limits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
          <div className="bg-card rounded-xl border border-line p-5">
            <div className="text-xs text-sub uppercase tracking-wide mb-1">Per-file limit</div>
            <div className="font-heading text-xl font-bold text-ink mb-2">20 MB</div>
            <p className="text-sub text-sm">Practical ceiling: around 2MB for a 2000px JPEG at quality 80. Anything above that rarely improves visual quality on mobile viewports.</p>
          </div>
          <div className="bg-card rounded-xl border border-line p-5">
            <div className="text-xs text-sub uppercase tracking-wide mb-1">Per-product media</div>
            <div className="font-heading text-xl font-bold text-ink mb-2">250 MB + 10 images</div>
            <p className="text-sub text-sm">Combined limit across all images and videos for one product. Each variant shares this pool - 10 sizes times 5 colors does not multiply the count.</p>
          </div>
          <div className="bg-card rounded-xl border border-line p-5">
            <div className="text-xs text-sub uppercase tracking-wide mb-1">Total images per product</div>
            <div className="font-heading text-xl font-bold text-ink mb-2">10 slots</div>
            <p className="text-sub text-sm">10 images + 1 video per product. Slot 1 shows in search thumbnails; slot 2 on the product page. Slots 3+ are scrolled.</p>
          </div>
          <div className="bg-card rounded-xl border border-line p-5">
            <div className="text-xs text-sub uppercase tracking-wide mb-1">Variant attachment limit</div>
            <div className="font-heading text-xl font-bold text-ink mb-2">250 media items</div>
            <p className="text-sub text-sm">Across all variants of a product, you can attach up to 250 images/videos total. Large SKU counts drain this fast.</p>
          </div>
        </div>

        <h2 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">The Variant Trap Nobody Warns About</h2>
        <p className="text-sub leading-relaxed mb-4">
          Here is a Shopify quirk that catches many dropshippers off guard. When you assign images to variants, each variant can carry its own set of images - but the total number of assigned images across <em>all</em> variants in a single product cannot exceed 250. If you source from AliExpress or CJ Dropshipping, each supplier often sends 3-5 photos per variation. Multiply that by 30 colorways and 10 sizes, and you've used up your 250-slot cap before you've even added lifestyle shots.
        </p>
        <p className="text-sub leading-relaxed mb-6">
          The workaround: pick 2-3 hero images per product, assign those universally, and let the rest fall back to the default. Don't waste variant slots on near-identical angle shots - those consume capacity without improving conversion.
        </p>

        <h2 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">CDN Behavior: What Happens After You Upload</h2>
        <p className="text-sub leading-relaxed mb-4">
          Shopify runs on Fastly. When you upload a 3000x3000px JPEG at 4MB, Shopify stores the original file unchanged. But the storefront never loads the original - it requests resized versions via URL parameters like <code className="text-accent text-xs bg-black/5 px-1 py-0.5 rounded">?width=480&height=480&scale=left&crop=center</code>. Fastly generates each requested size on first access, caches it, and serves it from edge nodes.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          Two consequences matter: first, uploading oversized files wastes bandwidth on upload and takes longer in the admin interface. Second, if you have a product with 10 variants displayed on collection pages, Fastly generates 10 separate cache entries - one for each unique crop coordinate. That's 10 CDN requests per product just for the collection tile.
        </p>

        <h2 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Recommended Sizes by Use Case</h2>
        <div className="bg-card rounded-xl border border-line overflow-hidden mb-8 not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-white">
                <th className="text-left p-3 font-semibold">Use case</th>
                <th className="text-left p-3 font-semibold">Width x Height</th>
                <th className="text-left p-3 font-semibold">Format</th>
                <th className="text-left p-3 font-semibold">Target file size</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Collection page tile", "440x440 (min)", "WebP or JPEG", "Under 150KB"],
                ["Product page hero", "1440x1440 or 2000x2000", "JPEG or WebP", "Under 1MB"],
                ["Zoom/detail view", "2000x2000+", "JPEG at quality 85", "Under 2MB"],
                ["Video thumbnail", "1280x720", "PNG or JPEG", "Under 500KB"],
                ["Instagram/social prep", "1080x1080", "JPEG", "Under 300KB"],
              ].map(([use, dims, fmt, size], i) => (
                <tr key={i} className="border-t border-line">
                  <td className="p-3 font-medium text-ink">{use}</td>
                  <td className="p-3 text-sub">{dims}</td>
                  <td className="p-3 text-sub">{fmt}</td>
                  <td className="p-3 text-sub">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Background Consistency: Why It Matters More Than Size</h2>
        <p className="text-sub leading-relaxed mb-4">
          Unlike Amazon, Shopify doesn't enforce white backgrounds. Your theme controls how images display - and most themes show the first image as a large hero shot with subsequent ones scrolling below. The problem: when sellers source from wholesale suppliers, each product arrives with inconsistently cropped, variably lit photos. Sometimes the background is studio white, sometimes it's gray, sometimes there's a shadow beneath the product. Uploading these raw files to Shopify creates a jarring shopping experience that kills conversion within three product views.
        </p>
        <p className="text-sub leading-relaxed mb-6">
          The fix is straightforward: run every supplier photo through a <a href="/bulk-background-remover/" className="text-accent hover:underline">background removal tool</a>, set output to pure RGB(255,255,255), then batch-resize to 2000x2000. This gives uniform lighting, consistent aspect ratio, and a professional look across your entire catalog - in one pass. BatchBG processes hundreds of images locally with no signup and no per-image cost. For sellers needing transparent backgrounds for social overlays, check our <a href="/transparent-background/" className="text-accent hover:underline">transparent background guide</a>, and see the dedicated <a href="/bulk-image-resizer-shopify/" className="text-accent hover:underline">bulk image resizer for Shopify</a> page for exact resize-to-2048px settings, plus the <a href="/shopify-product-image-size/" className="text-accent hover:underline">product image size spec sheet</a> for the zoom floor and weight targets. Note these rules apply to product photos only - homepage banners and slideshow images follow a different logic entirely (no official spec, theme-driven crop), covered in the <a href="/shopify-banner-size/" className="text-accent hover:underline">Shopify banner size breakdown</a>.
        </p>

        <h2 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Batch Workflow: From Supplier Photos to Shopify-Ready</h2>
        <p className="text-sub leading-relaxed mb-4">
          Here's the process that stores doing 50+ products monthly follow:
        </p>
        <ol className="space-y-3 text-sub mb-8 pl-6">
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 1 - Collect</span><span>Download all supplier images into folders named by product ID. One folder per variant set.</span></li>
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 2 - Remove backgrounds</span><span>Drag each folder into BatchBG, select White output, click process. All backgrounds flatten to pure white (RGB 255,255,255).</span></li>
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 3 - Export</span><span>Download everything as JPEG at original resolution. Rename to match Shopify's product handle format (product-name-1.jpg, product-name-2.jpg).</span></li>
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 4 - Upload</span><span>Upload via Shopify admin bulk uploader or CSV import. Drag order matters - first image is the hero shown in search.</span></li>
        </ol>

        <h2 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Common Mistakes</h2>
        <ul className="space-y-2 text-sub mb-8">
          <li><strong className="text-ink">Uploading supplier JPEGs as-is:</strong> They're often 1500px wide, badly compressed, with inconsistent color balance. Resize to 2000px+ for zoom eligibility.</li>
          <li><strong className="text-ink">Ignoring file count limits:</strong> A product with 50 variants times 5 images each equals 250 slots. One extra image blocks uploads. Plan hero/default vs. variant-assigned carefully.</li>
          <li><strong className="text-ink">Mixing aspect ratios:</strong> If some images are 1:1 and others 4:3, collection pages will display uneven tiles. Standardize to square (1:1) for consistency.</li>
          <li><strong className="text-ink">Forgetting to optimize for mobile:</strong> 70%+ of Shopify traffic comes from mobile. Test product pages at 375px width - small details get lost, backgrounds must be clean enough that the product stands out without relying on decorative elements.</li>
        </ul>
      </div>

      <div className="mt-12 pt-8 border-t border-line">
        <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What is the maximum image size for Shopify products?", a: "Shopify allows up to 20 megabytes per image file and 250 megabytes of total media per product. In practice, images above 2MB offer negligible visual improvement while slowing page load. Aim for 1-2MB JPEGs at 2000x2000px." },
            { q: "How many product images can I upload per listing on Shopify?", a: "Up to 10 images and 1 video per product. Across all variants of that product, the combined media count cannot exceed 250 items. Plan carefully for products with many SKUs." },
            { q: "Does Shopify compress images automatically?", a: "Shopify stores your uploads at their original size and uses Fastly's CDN to serve resized versions on demand. It does not compress your uploaded files, but it does serve lower-resolution copies to visitors based on their viewport and requested dimensions." },
            { q: "Should I use a white background for Shopify product photos?", a: "No requirement exists. Shopify allows any background style. Most successful stores use white or neutral backgrounds for the primary image and switch to lifestyle contexts for secondary slots. The goal is visual consistency." },
          ].map((faq, i) => (
            <details key={i} className="bg-card rounded-xl border border-line p-5 group">
              <summary className="font-heading font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                {faq.q} <span className="text-sub group-open:rotate-180 transition-transform">{"\u25BC"}</span>
              </summary>
              <p className="text-sub text-sm mt-3 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is the maximum image size for Shopify products?", acceptedAnswer: { "@type": "Answer", text: "Shopify allows up to 20 megabytes per image file and 250 megabytes of total media per product. In practice, images above 2MB offer negligible visual improvement while slowing page load. Aim for 1-2MB JPEGs at 2000x2000px." } },
            { "@type": "Question", name: "How many product images can I upload per listing on Shopify?", acceptedAnswer: { "@type": "Answer", text: "Up to 10 images and 1 video per product. Across all variants of that product, the combined media count cannot exceed 250 items. Plan carefully for products with many SKUs." } },
            { "@type": "Question", name: "Does Shopify compress images automatically?", acceptedAnswer: { "@type": "Answer", text: "Shopify stores your uploads at their original size and uses Fastly's CDN to serve resized versions on demand. It does not compress your uploaded files, but it does serve lower-resolution copies to visitors based on their viewport and requested dimensions." } },
            { "@type": "Question", name: "Should I use a white background for Shopify product photos?", acceptedAnswer: { "@type": "Answer", text: "No requirement exists. Shopify allows any background style. Most successful stores use white or neutral backgrounds for the primary image and switch to lifestyle contexts for secondary slots. The goal is visual consistency." } },
          ],
        }),
      }} />
      </article>
    </>
  );
}
