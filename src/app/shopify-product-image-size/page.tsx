import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "What is the best Shopify product image size in 2026?",
    a: "2048 &times; 2048 px, square, JPEG or PNG, roughly 150&ndash;300 KB after compression. That is the size Shopify's own help center says &ldquo;usually displays best&rdquo; for square product photos: it clears the ~800 px zoom threshold on virtually every theme, lands inside the 5000 &times; 5000 px / 25 MP hard ceiling, and compresses predictably. Uploading 4000 px raw camera files doesn't error — it just means Shopify's CDN does the downscaling on its schedule, on its quality defaults, and you pay for the bytes twice: once in your Files storage quota and once in bandwidth every time a visitor loads the master.",
  },
  {
    q: "Why are my Shopify product images blurry or pixelated?",
    a: "Three causes, in order of how often sellers hit them. (1) Zoom never engaged: files under ~800 &times; 800 px fall back to the browser's native image scaling on product pages, which on a retina phone means a 750 px file is displayed at half logical size and looks soft. (2) You resized in the admin editor or an app re-exported at a smaller step than your theme's srcset requests, so Shopify upscales the stored file. (3) Over-compression below ~70 quality on dense textures — banding on gradients, mush on fabric weaves. The fix is always upstream: export the master at 2048 px, compress once at quality 80&ndash;85, upload as-is.",
  },
  {
    q: "Does Shopify crop images differently on collection pages vs product pages?",
    a: "Yes, and this is where mismatched aspect ratios hurt. Your theme defines a crop region per template: Dawn's default is a square crop on collection cards, so a 4:3 landscape file loses its left and right edges in the grid while the full image shows on the product page — the gallery tiles look uneven because different products get sliced in different places. Shopify's imagery service auto-generates size variants, but a crop can't invent context it sliced away. The durable fix is one aspect ratio for every main image: standardize to 1:1 in the source files, either by cropping deliberately or padding onto a square canvas.",
  },
  {
    q: "Can I resize or replace hundreds of Shopify images in bulk?",
    a: "Not inside Shopify — the admin has no select-all-resize, and the media editor only handles one file at a time. Bulk changes mean working on the source files before upload: a local batch tool that caps the long edge at 2048 px and compresses to quality 80 across the whole folder in one pass. For images already live in the store, the realistic options are re-uploading replacements (Shopify keeps the old file until you delete it, so check your storage after), or an App Store image app at roughly $5&ndash;20/month. Our bulk resizer page covers the exact settings.",
  },
  {
    q: "What image formats does Shopify accept, and which should I use?",
    a: "Accepted: JPEG, PNG, TIFF, BMP, GIF (animated included), SVG, HEIC, and WebP. For actual product photos use JPEG at quality 80&ndash;85 — smallest bytes, universal browser support, and Shopify's CDN serves WebP/AVIF variants to supporting browsers regardless of what you uploaded. PNG only when you genuinely need transparency (which shows as a checkerboard or theme-color behind it on most product templates). HEIC from iPhones should be converted to JPEG before upload — Safari renders it, Chrome on desktop historically has not. SVG is for logos and icons, never photos.",
  },
  {
    q: "Does a white background make product images faster to load or rank better?",
    a: "Faster to load: marginally, yes — a pure RGB(255,255,255) background compresses far better than a busy scene because huge flat regions cost almost nothing in JPEG terms, often 30&ndash;50% smaller files at equal quality. Google product rankings care about page speed and structured data, not background hue, so no, a white background is not an SEO ranking factor by itself. What it buys is compliance: Google Shopping and most marketplaces expect clean backgrounds on main images, and uniform white gallery photos measurably lift click-through from shopping ads.",
  },
];

export const metadata: Metadata = {
  title: "Shopify Product Image Size: 2048×2048, Zoom Rules & Bulk Fix | BatchBG",
  description:
    "The exact Shopify product image specs that keep zoom and thumbnails sharp in 2026: 2048×2048 sweet spot, 800px zoom floor, 5000×5000/20MB ceiling, aspect-ratio crop rules — plus a free local batch workflow to fix a whole catalog.",
  keywords:
    "shopify product image size, product image size shopify, shopify image size, shopify product images size, shopify image requirements 2026, best size for shopify product photos",
  alternates: { canonical: "https://batchbg.com/shopify-product-image-size/" },
  openGraph: {
    title: "Shopify Product Image Size — the Numbers That Keep Zoom and Grids Sharp",
    description:
      "2048×2048 sweet spot, 800 px zoom floor, 25 MP / 20 MB ceiling, one aspect ratio. With a free no-upload batch workflow for the whole catalog.",
    url: "https://batchbg.com/shopify-product-image-size/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function ShopifyProductImageSize() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q.replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&times;/g, "×").replace(/&ndash;/g, "–"),
      acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"').replace(/&times;/g, "×").replace(/&ndash;/g, "–").replace(/&lsquo;/g, "'").replace(/&rsquo;/g, "'") },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Shopify Product Image Size", url: "https://batchbg.com/shopify-product-image-size/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Shopify Product Image Size: The 2048 px Sweet Spot, the 800 px Zoom Floor, and How to Fix a Whole Catalog",
            description:
              "Verified 2026 Shopify product image specifications — upload ceilings, display sweet spot, zoom threshold, aspect-ratio crop behaviour, format choices — with a local batch workflow that sizes and compresses hundreds of photos before upload.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-11-03",
            dateModified: "2026-11-03",
            url: "https://batchbg.com/shopify-product-image-size/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Shopify Product Image Size
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The short answer: <strong className="text-ink">2048&nbsp;&times;&nbsp;2048&nbsp;px, square, JPEG at quality 80&ndash;85, 150&ndash;300&nbsp;KB</strong>. Shopify's hard ceiling is 5000&nbsp;&times;&nbsp;5000&nbsp;px / 25&nbsp;MP / 20&nbsp;MB per file, and the zoom feature silently switches off below roughly 800&nbsp;&times;&nbsp;800&nbsp;px on most themes. Everything below is what those three numbers mean for a real catalog.
          </p>
        </div>
        <BackgroundRemoverTool config={{ mode: "batch", defaultBg: "white", showBatchStats: true, folderButton: true, label: "Shopify prep — cut out and white-fill the whole catalog" }} />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The four numbers, in one table</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="bg-card text-left">
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Constraint</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Value</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">What actually happens if you miss it</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-success-bg"><td className="px-3 py-2 border-b font-semibold text-ink">Display sweet spot</td><td className="px-3 py-2 border-b">2048 &times; 2048 px, 1:1</td><td className="px-3 py-2 border-b">Nothing breaks — this is the size Shopify says &ldquo;usually displays best&rdquo;. Enough pixels for retina zoom, small enough that compression is predictable.</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Hard ceiling</td><td className="px-3 py-2 border-b">5000 &times; 5000 px or 25 MP; 20 MB/file</td><td className="px-3 py-2 border-b">Upload fails outright. Some admin flows report &ldquo;pixel limit is 20 megapixels&rdquo; — legacy wording for the same rejection.</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Zoom floor</td><td className="px-3 py-2 border-b">~800 &times; 800 px</td><td className="px-3 py-2 border-b">No error, no warning — the zoom viewer just never engages and shoppers see a soft image on product pages.</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Weight target</td><td className="px-3 py-2 border-b">150&ndash;300 KB per 2048 px JPEG</td><td className="px-3 py-2 border-b">Bigger files cost you twice: Files storage quota (raw masters burn it fast) and bandwidth on every CDN origin pull.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Why 2048 and not 5000: the CDN does the resizing on its schedule, not yours</h2>
        <p className="text-sub leading-relaxed mb-4">
          A common piece of advice is &ldquo;upload the biggest file you have, Shopify will serve the right size.&rdquo; Technically true, practically sloppy. Shopify's imagery service generates cropped/scaled variants via URL parameters, but the master stays in your Files storage at full weight, and if you're on a plan with a file-size or bandwidth cap, 6000&nbsp;&times;&nbsp;4000 raw JPEGs chew through it — the exact problem quantified on our <a href="/shopify-file-storage-limit/" className="text-accent underline">Shopify storage limits page</a>. Pre-sizing to 2048&nbsp;px keeps the same visual outcome with a fraction of the bytes and puts the compression decision (quality 80&ndash;85, once, by you) ahead of any app's defaults. If your files are already live and bloated, the <a href="/bulk-image-resizer-shopify/" className="text-accent underline">bulk image resizer for Shopify</a> walks through the replace-and-re-attach workflow.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The crop behaviour nobody explains: same file, two different images</h2>
        <p className="text-sub leading-relaxed mb-4">
          Themes request different crops per template — collection cards, product gallery, social share all pull different regions of the same master. That's fine while every main image shares one aspect ratio; it's visible chaos when they don't. A 4:3 landscape shot on a square-crop grid loses both edges, and neighbouring products get sliced at different heights, so the gallery reads as uneven even though every file uploaded cleanly. Fix at the source: choose 1:1 for the entire catalog and enforce it — crop deliberately, or pad shorter files onto a square canvas. For mixed supplier files, our <a href="/bulk-background-changer/" className="text-accent underline">bulk background changer</a> composites cutouts onto pure white at a uniform frame in one batch pass, which normalises size, ratio, and background in the same workflow.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Formats: what to upload, what Shopify does anyway</h2>
        <p className="text-sub leading-relaxed mb-4">
          Shopify accepts JPEG, PNG, TIFF, BMP, GIF, SVG, HEIC, and WebP. That's a compatibility list, not a recommendation. Product photos: JPEG, quality 80&ndash;85 — Shopify's CDN negotiates WebP/AVIF to supporting browsers on its own, so uploading WebP yourself buys nothing and locks you out of easy replacement workflows. PNG only for genuinely transparent cutouts (many themes show them on a gray card or checkerboard, so test on your own product template before committing a catalog). HEIC files from iPhones convert to JPEG before upload — desktop Chrome rendering has historically been the failure point. SVG is for logos and icons, never photographs. The transparency-format tradeoffs in detail: <a href="/blog/what-file-format-keeps-transparent-background/" className="text-accent underline">what file format keeps a transparent background</a>.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The 30-minute catalog prep, start to finish</h2>
        <ol className="list-decimal pl-6 text-sub space-y-3 mb-6">
          <li><strong className="text-ink">Standardize backgrounds first.</strong> Drop the supplier folder into the batch tool above: remove background, composite onto pure white. Uniform frames look more professional than uniform resolution does, and white backgrounds compress 30&ndash;50% smaller than busy scenes at equal quality.</li>
          <li><strong className="text-ink">Cap the long edge at 2048 px, lock aspect ratio.</strong> Run the <a href="/batch-image-compressor/" className="text-accent underline">batch compressor</a> (or the resizer pass) at maximum dimension 2048, quality 80. Landscape and portrait files both land at a 2048 px long edge, nothing stretched.</li>
          <li><strong className="text-ink">Audit the stragglers.</strong> Anything that started under 800 px will never gain zoom — sorting those to re-shoot or re-source beats uploading a soft file. No tool invents detail that was never captured; see <a href="/blog/does-removing-background-reduce-image-quality/" className="text-accent underline">does background removal reduce quality</a> for what resampling actually does to pixels.</li>
          <li><strong className="text-ink">Upload, then check one product page on a phone.</strong> Pinch-zoom on the live product page — if zoom engages and the image holds at 2&times;, the catalog is spec-compliant. Spot-check a collection page for crop slicing while you're there.</li>
        </ol>

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
          Sizes for banners and slideshows follow different, theme-driven rules — see the <a href="/shopify-banner-size/" className="text-accent underline">Shopify banner size breakdown</a>. For the full written spec discussion including variant image sizes, the <a href="/blog/shopify-product-image-size-guide/" className="text-accent underline">Shopify image size guide</a> covers the upload rules around the numbers on this page.
        </p>
      </article>
    </>
  );
}
