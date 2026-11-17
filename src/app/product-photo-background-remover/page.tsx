import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "What background does a product photo need for Amazon?",
    a: "Pure white — RGB 255, 255, 255 across the whole background, with the product filling at least 85% of the frame and no text, watermark, logo, or inset graphic on the main image. Amazon's checker samples the image corners; an off-white studio wall that looks white on screen usually measures 245–252 and fails. Minimum 1000 px longest side for upload, 1600 px+ to enable zoom. Rather than eyeballing a catalog against these numbers, run a bulk background screening pass first (batchbg.com/bulk-background-screening/) — it samples every file's corners and fill rate mechanically.",
  },
  {
    q: "What size should exported product photos be?",
    a: "Square 2000 x 2000 px JPEG at sRGB covers almost every major marketplace at once: it clears Amazon's zoom threshold, exceeds Walmart's 1500 px zoom minimum (Walmart's recommended hero size is 2200 x 2200), passes eBay's 500 px minimum with room to spare, and sits inside Shopify's and Etsy's limits. Export one compliant master set and reuse it everywhere instead of maintaining five per-platform folders.",
  },
  {
    q: "Does a product photo background remover reduce image quality?",
    a: "The cutout itself does not — quality drops come from what happens after: upscaling a small original to 2000 px, re-compressing a JPEG multiple times, or resampling with a lossy filter. Run the matting at the original resolution, export once to the final size, and the output is pixel-for-pixel your original product with a new background. The mechanics are in our piece on whether removing a background reduces quality.",
  },
  {
    q: "Can I remove backgrounds from a whole product folder at once?",
    a: "Yes — BatchBG is built for that: drop an entire folder (or 20-40 at a time on a modest machine), and the u2netp/BiRefNet model runs in your browser on your own CPU/GPU, so there is no upload queue, no per-image credit, and no file ever leaves your device. Filenames are preserved inside the ZIP, which matters when your SKU codes are the filenames.",
  },
  {
    q: "What file format should I deliver to a marketplace — PNG or JPEG?",
    a: "Marketplace hero images are almost always JPEG (Walmart, Amazon, and eBay all expect flat photos with no transparency). PNG belongs to your master archive: keep the transparent cutout as a PNG with alpha, and flatten onto pure white at export time. That single master can later feed a white Amazon JPEG, a light-gray Shopify tile, or a styled Etsy lifestyle composite without re-cutting.",
  },
  {
    q: "Why do my white-background photos still get rejected?",
    a: "The four reasons that cover most rejections: background below 255 in at least one channel, product filling under 85% of the frame, a visible cast or reflected shadow outside the product silhouette, or text/logo/watermark on the main image. All four are fixable in the export step — fill white explicitly, crop tight around the bounding box, drop the shadow layer, and strip overlays. Amazon's exact rejection mechanics are broken down in our guide.",
  },
];

export const metadata: Metadata = {
  title: "Product Photo Background Remover — White, Marketplace-Ready | BatchBG",
  description:
    "A product photo background remover that outputs files the marketplaces actually accept: RGB 255,255,255 fill, 85% frame coverage, square 2000px export. Bulk, free, fully local — no per-image credits.",
  keywords:
    "product photo background remover, product photo background removal, remove background product photography, product background remover, ecommerce product photo background",
  alternates: { canonical: "https://batchbg.com/product-photo-background-remover/" },
  openGraph: {
    title: "Product Photo Background Remover — White, Marketplace-Ready",
    description:
      "Bulk-remove product photo backgrounds and export Amazon/Walmart/eBay-compliant files in one pass. Pure white RGB 255, 85% fill, square 2000px, filenames preserved. 100% local, free, no credits.",
    url: "https://batchbg.com/product-photo-background-remover/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function ProductPhotoBackgroundRemover() {
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
      <BreadcrumbSchema items={[{ name: "Product Photo Background Remover", url: "https://batchbg.com/product-photo-background-remover/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Product Photo Background Remover: White, Marketplace-Ready, in Bulk",
            description:
              "A background remover for product photos whose export settings are the marketplace rules themselves: pure RGB 255,255,255 fill, 85% frame coverage, square 2000x2000 sRGB JPEG, original filenames preserved. Includes a cross-platform spec table verified against Amazon, Walmart, eBay, Etsy, Shopify and Google Shopping requirements, the transparent-master/flattened-copy delivery structure, and the four causes of white-background rejections.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-11-01",
            dateModified: "2026-11-13",
            url: "https://batchbg.com/product-photo-background-remover/",
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Product Photo Background Remover
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Drop your product folder, get back JPEGs the marketplaces accept without argument: pure white RGB 255,255,255,
            product filling 85%+ of the frame, square 2000&nbsp;px, original filenames kept. Runs in your browser — no
            credits, no upload queue, nothing leaves your machine.
          </p>
        </div>
        <BackgroundRemoverTool config={{ mode: "studio", defaultBg: "white" }} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            The Export Settings <em>Are</em> the Requirements
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Most &ldquo;product photo background remover&rdquo; tools stop at the cutout and leave you to find out — usually
            via a suppressed listing — that their &ldquo;white&rdquo; is a soft 245-gray, their canvas keeps the original
            4:3 ratio, or their ZIP renames everything to <code>image-1.png</code>. A remover built for ecommerce treats the
            platform rules as export settings instead: explicit RGB(255,255,255) compositing (not &ldquo;leave the pixels
            near-white&rdquo;), square-crop-to-product-bounding-box so the subject hits the 85% fill bar, sRGB JPEG at your
            target size, and filename passthrough so SKU-named files stay SKU-named. One pass, one ZIP, no re-touch in
            Photoshop afterwards.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Cross-Platform Spec Table (verified 2026)</h3>
          <div className="bg-card rounded-xl border border-line overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Platform</th>
                  <th className="text-left p-3 font-semibold">Background</th>
                  <th className="text-left p-3 font-semibold">Size / ratio</th>
                  <th className="text-left p-3 font-semibold">The catch</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Amazon (main image)", "Pure white RGB 255,255,255", "1000 px min, 1600+ for zoom, 1:1 preferred", "Corner sampling; text/logos/insets cause suppression"],
                  ["Walmart Marketplace", "Seamless white 255,255,255", "2200×2200 recommended, 1500 minimum, 1:1 required", "Non-square is auto-unpublished, not padded — stricter than Amazon"],
                  ["eBay", "White or light neutral, no official RGB", "500 px min, 1600 for zoom", "No published spec — quality-score ranking rewards consistency"],
                  ["Etsy", "No rule; white or contextual both fine", "2700×2025 recommended (4:3), 1 MB cap", "First image becomes the search thumbnail — square gets letterboxed"],
                  ["Shopify", "Anything your theme allows", "2048×2048 sweet spot, 20 MB / 25 MP ceiling", "Theme crops to square in most galleries — see our banner-size guide"],
                  ["Google Shopping", "White allowed, non-white OK for many categories", "250×250 to 5000×5000", "image_link must be directly fetchable; redirects get dropped"],
                ].map(([platform, bg, size, catchLine], i) => (
                  <tr key={i} className="border-t border-line align-top">
                    <td className="p-3 font-medium text-ink">{platform}</td>
                    <td className="p-3 text-sub">{bg}</td>
                    <td className="p-3 text-sub">{size}</td>
                    <td className="p-3 text-sub">{catchLine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            Read across the table and one export wins everywhere: a transparent PNG master flattened onto exact white,
            squared at 2000–2200&nbsp;px. It clears Amazon and Walmart simultaneously (the only two platforms with hard
            white rules — see the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon white-background breakdown</a>
            and the <a href="/blog/walmart-marketplace-image-requirements/" className="text-accent hover:underline">Walmart requirements guide</a> for each one&apos;s failure modes),
            and every looser platform accepts it without cropping surprises.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">One Master, Many Deliverables</h3>
          <p className="text-sub leading-relaxed mb-4">
            The delivery structure that keeps a catalog maintainable is asymmetric: the <em>master</em> keeps the alpha
            channel (transparent PNG — the format that guarantees the cutout survives, explained in our{" "}
            <a href="/blog/what-file-format-keeps-transparent-background/" className="text-accent hover:underline">transparent format guide</a>),
            and everything the platforms see is a flattened copy exported from it. White JPEG for Amazon and Walmart, light-gray
            for a branded Shopify grid, composited scene for Etsy — all from the same mask, zero re-cutting. When a platform
            changes its mind, you re-export; you do not re-shoot. The <a href="/bulk-background-changer/" className="text-accent hover:underline">bulk background changer</a>{" "}
            page covers the per-platform color values in detail.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            Two QC habits make the whole pipeline safe. First, the fake-transparency test: paste any delivered PNG onto a black
            canvas — if the &ldquo;background&rdquo; shows up as a white box or gray fringe, the file was flattened by an
            earlier tool and is not a master. Second, the corner-pixel test for white deliverables: sample all four corners in
            any viewer that shows RGB values; all four must read 255,255,255, not 254. BatchBG&apos;s white mode composites
            explicit 255 values rather than relying on the source looking white, which is the step between{" "}
            <a href="/blog/amazon-image-rejected/" className="text-accent hover:underline">&ldquo;why was this listing rejected&rdquo;</a>{" "}
            and a passing upload.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Shoot for the Cutout, Not Just the Photo</h3>
          <p className="text-sub leading-relaxed mb-4">
            Background removal quality is mostly decided before upload. Four shooting rules pay for themselves on a 300-SKU
            catalog: leave 10%+ margin around the product (the matting model needs context pixels), avoid a white product on
            a white surface (low-contrast edges are where every model eats detail — shoot on gray and replace), diffuse the
            lighting so no hard shadow anchor survives under the product, and shoot above 2000&nbsp;px so the 85% fill crop
            still lands on the 1600&nbsp;px zoom threshold. If you get these wrong, no background remover — local or
            server-side, free or $2/image — can invent separation that was never in the photo. The step-by-step version of
            this workflow, from shoot to upload, lives on the{" "}
            <a href="/remove-background-from-product-photos/" className="text-accent hover:underline">product photos page</a>; for whole-folder throughput see the{" "}
            <a href="/bulk-background-remover/" className="text-accent hover:underline">bulk background remover</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Honest Limits</h3>
          <ul className="text-sub text-sm space-y-2 mb-4 pl-6">
            <li><span className="font-semibold text-ink">The hardest 5% of edges.</span> Flyaway hair on a model shot, thin gold chains, and multi-faceted glass can still need per-image touch-up anywhere at this price. HD mode (BiRefNet) narrows that set; it does not empty it.</li>
            <li><span className="font-semibold text-ink">Giant folders need RAM.</span> Everything runs on your machine, so a 500-file drop of camera-native RAW-sized JPEGs will thrash a 4&nbsp;GB laptop. Batch 20–40 files or resize first with the <a href="/batch-image-compressor/" className="text-accent hover:underline">batch compressor</a>.</li>
            <li><span className="font-semibold text-ink">No AI scene generation.</span> This outputs a clean cutout or a flat color — if you need a photorealistic lifestyle scene generated for you, that is a different (and much more expensive) tool, and we will say so instead of pretending.</li>
          </ul>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-card rounded-xl border border-line p-5 group">
                <summary className="font-heading font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                  {faq.q} <span className="text-sub group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sub text-sm mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
