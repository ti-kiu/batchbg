import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "How much file storage does Shopify include?",
    a: "100 GB on Starter, Pause and Build, Retail, and Basic (plus partner development stores); 300 GB on Grow; 500 GB on Advanced; 1 TB on Plus and partner Plus sandbox stores; 10 TB on Enterprise. The limit applies to the total size of files in your admin's Content > Files area, not to a count of images.",
  },
  {
    q: "Do Shopify product images count toward the storage limit?",
    a: "Yes — this is the most misunderstood rule on the platform. Answers in Shopify's own community forums have flip-flopped on this, but files added through the product Media section do consume store storage and can appear in Content > Files with a product reference. The claim that product galleries are 'unlimited regardless of plan' is wrong; merchants on Advanced (500 GB) hit the wall for the same reason as Basic stores: oversized master images. Offloading to S3 or Cloudflare R2 only helps media you embed manually via metafields, themes, or HTML — product gallery images are copied into Shopify's filesystem the moment you upload them.",
  },
  {
    q: "How do I free up storage space on Shopify without deleting products?",
    a: "Work Content > Files in this order: filter by file type Images, sort by Size descending, and check the 'Used in' column. Old campaign assets, theme background JPGs you replaced, supplier files uploaded twice, and unattached exports are usually half the footprint. For live product photos you cannot delete, the durable fix is smaller replacements: resize to 2048 px long edge and recompress at quality 80 before re-uploading, then delete the original 8–15 MB masters. A typical 500-SKU catalog drops from 6+ GB of originals to under 1.5 GB of Shopify-sized files.",
  },
  {
    q: "Can I buy more file storage on Shopify?",
    a: "Only on Plus or Enterprise, and only through support: Plus adds 1 TB for $100 USD/month, Enterprise adds 10 TB for $1,000 USD/month. Basic, Grow, and Advanced stores have no self-serve storage add-on — your options are deleting unused files, replacing oversized product images with resized versions, or upgrading the plan itself (Grow is 300 GB, Advanced 500 GB).",
  },
  {
    q: "Why can't I upload more than 200 files at a time, and what happens when an upload gets stuck?",
    a: "Shopify's Files page takes a maximum of 200 files per upload selection — batch folders larger than that and repeat. If an 'Uploading 1 remaining' banner hangs, the file may still be processing: stuck uploads are removed automatically after up to 2 hours, so check Content > Files and the product's Media section before re-uploading. Videos over the plan count (250 on Basic/Grow, 5,000 on Advanced) fail separately from the GB limit — the two quotas are independent.",
  },
];

export const metadata: Metadata = {
  title: "Shopify Storage Space: Real Limits, What Counts, How to Free It | BatchBG",
  description:
    "Shopify's file storage by plan (100 GB–10 TB), the myth that product images don't count, what the $100/TB add-on actually covers, and a step-by-step way to free gigabytes by resizing images before upload.",
  keywords:
    "shopify storage space, shopify file storage limit, shopify storage full, free up shopify storage, do product images count toward shopify storage, shopify 100 gb limit",
  alternates: { canonical: "https://batchbg.com/shopify-file-storage-limit/" },
  openGraph: {
    title: "Shopify Storage Space: What Actually Counts and How to Free It",
    description:
      "Per-plan storage limits, the product-image counting myth, paid increase rules (Plus/Enterprise only), and a batch resize workflow that reclaims gigabytes.",
    url: "https://batchbg.com/shopify-file-storage-limit/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function ShopifyFileStorageLimit() {
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
      <BreadcrumbSchema items={[{ name: "Shopify File Storage Limit", url: "https://batchbg.com/shopify-file-storage-limit/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Shopify Storage Space: Real Limits, What Counts, and How to Free Gigabytes",
            description:
              "Every Shopify file-storage rule that matters — per-plan GB limits, video and 3D model counts, the truth about product images consuming storage, paid increase rules — plus a batch workflow that shrinks a catalog enough to get under the cap.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-28",
            dateModified: "2026-10-28",
            url: "https://batchbg.com/shopify-file-storage-limit/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sub text-sm mb-2">October 28, 2026 · 6 min read</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
          Shopify Storage Space: What the Limit Really Counts
        </h1>
        <p className="text-sub text-lg leading-relaxed mb-6">
          Shopify gives every store a hard GB cap — <strong className="text-ink">100&nbsp;GB on Basic, 300&nbsp;GB on Grow, 500&nbsp;GB on Advanced, 1&nbsp;TB on Plus, 10&nbsp;TB on Enterprise</strong> — and nearly all of it is eaten by images that were never resized. Product photos <em>do</em> count against the limit, the $100/month extra terabyte is reserved for Plus and Enterprise only, and the fix for a &ldquo;You&rsquo;ve reached the file storage limit for your plan&rdquo; error is almost never deletion — it is running the catalog through a <a href="/bulk-image-resizer-shopify/" className="text-accent underline">bulk resizer</a> to 2048&nbsp;px and quality&nbsp;80 before re-upload.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">The storage table, straight from Shopify</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="bg-card text-left">
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Plan</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">File storage</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Video + 3D model count</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Video GB</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">Starter / Pause and Build / Retail / Basic</td><td className="px-3 py-2 border-b">100 GB</td><td className="px-3 py-2 border-b">250</td><td className="px-3 py-2 border-b">50 GB</td></tr>
              <tr><td className="px-3 py-2 border-b">Grow</td><td className="px-3 py-2 border-b">300 GB</td><td className="px-3 py-2 border-b">1,000</td><td className="px-3 py-2 border-b">500 GB</td></tr>
              <tr><td className="px-3 py-2 border-b">Advanced</td><td className="px-3 py-2 border-b">500 GB</td><td className="px-3 py-2 border-b">5,000</td><td className="px-3 py-2 border-b">500 GB</td></tr>
              <tr><td className="px-3 py-2 border-b">Plus / Plus sandbox</td><td className="px-3 py-2 border-b">1 TB</td><td className="px-3 py-2 border-b">50,000</td><td className="px-3 py-2 border-b">2 TB</td></tr>
              <tr><td className="px-3 py-2 border-b">Enterprise</td><td className="px-3 py-2 border-b">10 TB</td><td className="px-3 py-2 border-b">100,000</td><td className="px-3 py-2 border-b">10 TB</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub leading-relaxed mb-4">
          Two quotas run in parallel and merchants confuse them constantly: the total GB pool and the per-plan count of videos and 3D models. A store with 4&nbsp;GB used on Basic can still be blocked from uploading a fourth product video because the 250-item count is full. Images and generic files (PDFs, CSVs) only hit the GB pool; videos hit both.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The myth that fills stores: &ldquo;product photos don&rsquo;t count&rdquo;</h2>
        <p className="text-sub leading-relaxed mb-4">
          A widely-upvoted community answer claims product media added through <em>Products&nbsp;→&nbsp;Media</em> is unlimited and that only <em>Settings&nbsp;→&nbsp;Files</em> consumes quota. It was corrected in the same thread: product gallery files are copied into the store&rsquo;s file system, show up in Content&nbsp;→&nbsp;Files with a product reference, and count against the plan cap. That is how an Advanced store on 500&nbsp;GB reports being full with only ~800 SKUs — the seller uploaded 12&nbsp;MB camera masters, and Shopify kept every one.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          The corollary matters for anyone planning an S3/R2 workaround: external hosting only relieves storage for media referenced through metafields, theme assets, or hand-written HTML. Product gallery images cannot be external — Shopify re-hosts them by design. And CSV exports preserve image <em>URLs</em>, not the files; before deleting media for one-of-a-kind items, download originals externally.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Freeing space without deleting products: the audit order</h2>
        <ol className="list-decimal pl-6 text-sub space-y-3 mb-6">
          <li><strong className="text-ink">Open Content → Files, filter File type = Images, sort by Size descending.</strong> The top 50 files are usually 60–80% of your footprint. Theme-era hero JPGs, replaced logos, and duplicate supplier uploads dominate.</li>
          <li><strong className="text-ink">Use the &ldquo;Used in&rdquo; column before deleting anything.</strong> A file referenced by a draft product, a metafield, or a theme section will 404 the storefront if removed. Shopify supports multi-select bulk delete once you have filtered to genuinely unused rows.</li>
          <li><strong className="text-ink">Hunt duplicates with dimension discipline.</strong> The classic pattern: a catalog re-shot at 2000&nbsp;px while 1000&nbsp;px versions stay attached to old products. Duplicate-image apps find these (per-image credit pricing, roughly $10 per thousand deletions), but if you control the source files there is a cheaper structural fix — see below.</li>
          <li><strong className="text-ink">Check videos separately.</strong> A 1&nbsp;GB UHD product loop on Basic burns 1% of your entire pool in one file. Embed YouTube/Vimeo for gallery-adjacent video and keep only the loop you actually need hosted.</li>
          <li><strong className="text-ink">Stop the regrowth at upload time.</strong> Space freed at 12&nbsp;MB per master refills in one season. Space prevented at 250&nbsp;KB per file stays free.</li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The structural fix: shrink the masters, keep the zoom</h2>
        <p className="text-sub leading-relaxed mb-4">
          Shopify serves downscaled CDN variants regardless of what you upload, so a 5000&nbsp;px, 14&nbsp;MB master buys your storefront nothing — the zoom viewer is already satisfied at 2048&nbsp;px, and Shopify&rsquo;s own guidance says images that size &ldquo;display best.&rdquo; The batch replacement workflow, which runs entirely on your own machine:
        </p>
        <ul className="list-disc pl-6 text-sub space-y-2 mb-4">
          <li>Export the affected product images (or work from the supplier folder you still have locally).</li>
          <li>Run the folder through the <a href="/batch-image-compressor/" className="text-accent underline">batch image compressor</a>: long edge capped at 2048&nbsp;px, aspect ratio locked, JPEG quality 80. A 500-file folder finishes in minutes with no upload and no per-image fee — the same tool handles <a href="/bulk-background-remover/" className="text-accent underline">background removal in bulk</a> if you are normalizing backdrops in the same pass.</li>
          <li>Re-attach the smaller files (product CSV with the <em>Image Src</em> column, or manual replace), verify each product renders, then delete the original masters in Content&nbsp;→&nbsp;Files.</li>
          <li>Keep the untouched masters outside Shopify — external drive or R2 — as your archival copy, since the platform gives you no version history once a file is deleted.</li>
        </ul>
        <p className="text-sub leading-relaxed mb-4">
          Math check on a 500-SKU store with 4 images each: 2,000 masters × 10&nbsp;MB ≈ 20&nbsp;GB, versus 2,000 resized files × 250&nbsp;KB ≈ 0.5&nbsp;GB. That single conversion is 40× less footprint and still keeps every image above the 800&nbsp;px zoom threshold. Full dimension rules (square vs. fit, the 250-file upload cap, filename slugs) are covered in the <a href="/blog/shopify-product-image-size-guide/" className="text-accent underline">Shopify image size guide</a> and the <a href="/bulk-image-resizer-shopify/" className="text-accent underline">bulk resizer walkthrough</a>.
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
          Drowning in 12 MB masters? Prep the replacement batch locally with the <a href="/bulk-image-resizer-shopify/" className="text-accent underline">Shopify-sized bulk resizer</a>, compress in the same pass with the <a href="/batch-image-compressor/" className="text-accent underline">batch compressor</a>, or revisit <a href="/blog/how-to-make-a-png-transparent-without-photoshop/" className="text-accent underline">transparent cutouts without Photoshop</a> if you are reformatting the catalog anyway.
        </p>
      </article>
    </>
  );
}
