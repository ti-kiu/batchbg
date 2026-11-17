import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "How do I resize an image to exactly 2000×2000 pixels?",
    a: "Drop the files into BatchBG's resizer above with Exact mode locked to 2000 × 2000, or use fit-inside at 2000 × 2000 if you want no cropping and no padding. Exact mode forces every output to 2000 × 2000 regardless of the source ratio; fit-inside scales each image to the largest size that still fits the 2000 × 2000 box, so portrait and landscape files come out as 1667 × 2000 or 2000 × 1667 instead. Both run in your browser — nothing uploads, and the whole set downloads as one ZIP.",
  },
  {
    q: "Is 2000×2000 the right size for Amazon product images?",
    a: "It is the practical standard. Amazon's hard rule is a 1000 px long edge for zoom eligibility (1300 px unlocks zoom on some categories), and 2000 × 2000 JPEG is what Amazon's own style guide recommends because it is high enough for lossless resizing up to 1000 px on both the zoom and thumbnail paths. Above 2000 px you pay in file weight with no display gain; below 1000 px the listing loses pinch-zoom. Amazon still requires the product on pure white RGB 255 and filling at least 85% of the frame — resizing does not fix either if the original fails.",
  },
  {
    q: "What happens to a rectangular photo when I force it to 2000×2000?",
    a: "Depends on the method. Stretching to a square squashes the product — a 3:2 photo becomes visibly distorted and marketplaces can flag it. Center-cropping to a square keeps pixels intact but silently deletes the top and bottom, which is dangerous when the product touches those edges. The third option, padding, keeps the entire image and fills the leftover with white — Amazon and eBay both accept (and their bulk presets expect) white-padded squares. A correct 2000 × 2000 pipeline chooses per source: square sources exact-resize, rectangular ones pad or fit.",
  },
  {
    q: "Do Etsy, eBay, and Walmart also want 2000×2000?",
    a: "Etsy recommends a minimum of 2000 px on the longest side, so 2000 × 2000 clears it, and its first photo becomes the square search thumbnail anyway. eBay recommends at least 1600 px and maxes useful display around that, so 2000 × 2000 is more than enough (cap file weight instead). Walmart's published recommendation is 2200 × 2200 — a 2000 px square still passes the minimum-size rules but misses Walmart's stated ideal, so if Walmart is your main channel output 2200 rather than downgrading to 2000. Shopify is size-agnostic; its CDN re-serves renditions from anything up to 5000 × 5000.",
  },
  {
    q: "Does resizing to 2000×2000 reduce quality?",
    a: "Downscaling from a bigger original (typical camera output is 4000–6000 px) discards pixels, but 2000 px is well above any marketplace display size, so no shopper sees the difference — the quality risks are procedural, not dimensional: one-jump naive downscaling introduces aliasing (BatchBG halves in steps instead), re-encoding JPEG on top of an already-compressed file adds generational loss (export at quality 85–90 once), and upscaling a 700 px photo to 2000 px invents detail that never existed and looks soft at 100%.",
  },
  {
    q: "Can I resize many photos to 2000×2000 at once for free?",
    a: "Yes — the tool above has no file cap, no account, and no watermark because the Canvas math runs on your own machine. A folder of 200–500 typical product photos is routine on any laptop from the last decade; outputs keep original filenames inside the ZIP, so image names referenced in your listing CSVs survive the round trip.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 2000×2000 — Amazon/Etsy Size, Batch Free | BatchBG",
  description:
    "Resize one photo or a whole catalog to exactly 2000×2000 px. The Amazon zoom math, Etsy minimums, crop-vs-pad decisions, and a free in-browser batch tool with ZIP export. No upload, no sign-up.",
  keywords:
    "resize image to 2000x2000, resize to 2000x2000 pixels, 2000x2000 image resizer, batch resize 2000x2000, amazon product image size 2000, etsy image 2000x2000",
  alternates: { canonical: "https://batchbg.com/resize-to-2000x2000/" },
  openGraph: {
    title: "Resize Image to 2000×2000 — The Amazon/Etsy Standard, In Batch",
    description:
      "Exact or fit-inside 2000×2000, crop-vs-pad guidance, ZIP export. Runs in your browser — no upload, no account, no watermark.",
    url: "https://batchbg.com/resize-to-2000x2000/",
  },
};

export default function Resize2000() {
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
    name: "BatchBG — Resize to 2000×2000",
    url: "https://batchbg.com/resize-to-2000x2000/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many photos to exactly 2000×2000 px",
      "Fit-inside mode for mixed landscape/portrait catalogs",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 2000×2000: Where That Number Comes From and How to Batch It Correctly",
    description:
      "Why 2000×2000 became the marketplace standard, what Amazon's zoom tiers actually require, the crop-versus-pad decision for rectangular sources, and a free in-browser batch workflow.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
    url: "https://batchbg.com/resize-to-2000x2000/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 2000×2000", url: "https://batchbg.com/resize-to-2000x2000/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 2000 × 2000 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: a 2000 × 2000 JPEG clears Amazon&rsquo;s zoom tiers, Etsy&rsquo;s 2000 px minimum, eBay&rsquo;s 1600 px recommendation and Shopify&rsquo;s display needs in one file. Drop your folder above, pick exact or fit-inside, and take the ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 2000, h: 2000 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            Where the Number 2000 Comes From
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Almost no marketplace demands literally 2000 × 2000 — the number won because it is the smallest square that survives every rule at once. Amazon&rsquo;s binding constraint is zoom eligibility: 1000 px on the long edge minimums to activate zoom (higher for some categories), and its own style guide recommends 2000 px because a 2000 px master can be losslessly resized down to every display slot, thumbnail and zoom tile, the platform uses. Etsy states a 2000 px minimum on the longest side. eBay recommends 1600 px and displays no more. Shopify serves CDN renditions from anything up to 5000 px and recommends 2048. Walmart is the one outlier that asks for more — a 2200 × 2200 recommendation — so sellers centered on Walmart should generate that size instead. The full decision logic lives in the <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk image resizer</a> and the per-platform <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon spec page</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Exact, Fit, or Pad: the Square-Canvas Decision
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Real catalogs are a mix of square, landscape, and portrait shots, and forcing a rectangle into a 2000 × 2000 square has three honest outcomes. <span className="font-semibold text-ink">Exact</span> stretches — fine only when sources are already square; on a 3:2 photo the product visibly distorts. <span className="font-semibold text-ink">Crop-to-fill</span> keeps pixels and kills composition: center-cropping a tall bottle photo can clip the cap, and a product touching the frame edge startles Amazon&rsquo;s white-margin checks. <span className="font-semibold text-ink">Padding</span> keeps everything and fills the remainder with pure white — the option marketplace bulk presets default to, because white padding is legal on both Amazon and eBay. If none of those appeals, <span className="font-semibold text-ink">fit-inside</span> at 2000 gives you the largest compliant square-constrained file with the ratio intact. The tool above locks exact at 2000 × 2000; switch to fit-inside for mixed catalogs. Backgrounds, borders, and 85% fill are separate rules resizing cannot rescue — see <a href="/bulk-background-screening/" className="text-accent hover:underline">bulk background screening</a> to audit a folder against those rules before exporting.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Two Things Batch Resizers Get Wrong at 2000 px
          </h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">One-jump downscaling.</span> Dropping 6000 px straight to 2000 in a single interpolation pass produces aliasing — shimmer on fine grids, moiré on fabrics. Correct tools halve toward the target (6000→3000→2000). This one does; the difference is visible at 100% on textured products.</li>
            <li><span className="font-semibold text-ink">Re-encoding tax.</span> Every JPEG save throws another generation away. Resize once from the original, export once at quality 85–90, and stop; chaining resizer → compressor → marketplace re-compression is how a compliant file ends up looking mushy. If file weight is the goal, <a href="/batch-image-compressor/" className="text-accent hover:underline">compress to a KB target</a> in one deliberate pass instead of saving repeatedly.</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 2000 × 2000 Catalog Pipeline
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Start from originals — never resize a file you already resized down.</li>
            <li>If listings need white: <a href="/product-photo-background-remover/" className="text-accent hover:underline">remove backgrounds</a> before sizing, so edge detail is computed on full resolution.</li>
            <li>Resize the folder: exact 2000 × 2000 for square sources, fit-inside or padding for rectangles.</li>
            <li>Screen the output against platform rules (corner pixels at 255, 85% fill, long edge ≥1000) with the audit mode.</li>
            <li>Export the ZIP with filenames preserved so listing CSVs still match. (Not a marketplace job? If the folder feeds app-icon builds or AI reference sets, the sibling <a href="/resize-to-1024x1024/" className="text-accent hover:underline">1024 × 1024 page</a> locks that size instead; if you need Amazon's zoom floor at minimum file weight, take the <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1000 × 1000 page</a>; if the destination is a Google Shopping feed, <a href="/resize-to-1500x1500/" className="text-accent hover:underline">1500 × 1500</a> is Google&rsquo;s own recommended size, and a 2000² master downsizes into it losslessly; if the folder feeds Shopify, the sibling <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2048 × 2048 page</a> locks Shopify&rsquo;s display-best square that maps 1:1 onto its grande variant.)</li>
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
