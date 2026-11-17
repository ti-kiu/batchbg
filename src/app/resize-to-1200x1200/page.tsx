import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "Why is 1200×1200 the right size for TikTok Shop?",
    a: "Because TikTok Shop's own batch-upload documentation sets the picture pixel range for main product images at 100×100 to 1200×1200 px, with the note 'the higher, the clearer.' That makes 1200×1200 the ceiling of the accepted range — the sharpest image TikTok's batch pipeline accepts without risking a dimension-exceeded rejection. The US Product Listing Policy separately requires at least 600×600 px, so 1200×1200 doubles that floor in each dimension and carries four times the pixels.",
  },
  {
    q: "Will TikTok Shop reject an image larger than 1200×1200?",
    a: "The batch upload documentation states the pixel range as 100×100 to 1200×1200, and TikTok Shop's product-upload API documents a hard error (12038014 — 'image dimensions exceed the allowed limits') when an image falls outside the permitted range. Manual uploads through Seller Center are often more forgiving and will accept and recompress larger files, but if you list through the Batch Tool or CSV spreadsheets, staying at or below 1200×1200 is the safe compliance line. Every other marketplace in this size series rewards bigger files — TikTok is the one platform where oversized can fail.",
  },
  {
    q: "Does TikTok Shop require a white background at 1200×1200?",
    a: "Yes, on the main image. TikTok Shop's Product Listing Policy (US) requires the main image to have a pure white background — RGB 255, 255, 255 — and be a straightforward representation of the product, with no added logos, text, borders, or watermarks. Up to 9 square images per listing are allowed. Removing the background first and compositing onto white is the reliable way to hit exact RGB 255: see the batch background remover and the Amazon white background workflow, which uses the same compositing step.",
  },
  {
    q: "Is 1200×1200 enough for Amazon, eBay, or Walmart?",
    a: "eBay: yes — 1200 sits inside eBay's 800–1,600 optimization window, so mouseover zoom and supersize both work. Amazon: no — Amazon's zoom activates at 1,000 px on the longest side and the recommended target is 2,000×2,000, so a 1200×1200 image zooms but is below the recommended ceiling for detail. Etsy: no — Etsy wants 2,000 px on the shortest side for search. Walmart: no — 2,200×2,200 is required. See the pass/fail matrix below for all six platforms.",
  },
  {
    q: "What's the difference between 1200×1200 and 800×800?",
    a: "800,000 pixels and a different role. 800×800 is eBay's zoom activation floor — the minimum that switches the feature on. 1200×1200 is TikTok Shop's batch-upload ceiling — the maximum before the range tops out. One is a threshold you must reach; the other is a limit you must not exceed. An 800×800 image passes TikTok's 600×600 policy floor but wastes 56% of the headroom TikTok allows; a 1200×1200 image is overkill if your only goal is eBay zoom, and costs roughly 2.25× the file weight of the 800 square.",
  },
  {
    q: "Should I crop or pad a rectangular photo to 1200×1200?",
    a: "TikTok's batch documentation accepts main-image aspect ratios between 3:4 and 4:3, so mild rectangles survive — but the Product Listing Policy says sellers may upload square images, and non-square files get letterboxed or auto-cropped in the product grid. For main images, crop to fill (center-crop) is the default that keeps the frame full and undistorted; pad to fit with white bands suits wide or tall products where cropping loses information. Never stretch — distorted proportions are a listing-quality failure on every marketplace.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 1200×1200 — TikTok Shop Ceiling, Batch Free | BatchBG",
  description:
    "Resize one image or a whole folder to exactly 1200×1200 px. The number that tops out TikTok Shop's batch-upload pixel range — with the six-platform pass/fail matrix, the only ceiling in the marketplace size ladder, and a correct white-background batch pipeline. Free in-browser tool, ZIP export, no upload.",
  keywords:
    "resize image to 1200x1200, 1200x1200 image resizer, resize to 1200x1200 pixels, tiktok shop image size 1200x1200, tiktok shop product photo size, 1200x1200 product photo, batch resize 1200x1200",
  alternates: { canonical: "https://batchbg.com/resize-to-1200x1200/" },
  openGraph: {
    title: "Resize Image to 1200×1200 — The TikTok Shop Ceiling, In Batch",
    description:
      "Exact 1200×1200 for TikTok Shop's batch-upload pixel ceiling, plus the six-platform pass/fail matrix and the white-background pipeline. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-1200x1200/",
  },
};

export default function Resize1200() {
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
    name: "BatchBG — Resize to 1200×1200",
    url: "https://batchbg.com/resize-to-1200x1200/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 1200×1200 px",
      "Fit-inside mode for mixed-orientation folders",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 1200×1200: The TikTok Shop Ceiling and the Only Maximum in the Marketplace Ladder",
    description:
      "Where 1200×1200 actually comes from — TikTok Shop's batch-upload pixel ceiling, the white-background requirement, and the six-platform pass/fail matrix — plus why this is the one size that is a maximum, not a minimum.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    url: "https://batchbg.com/resize-to-1200x1200/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 1200×1200", url: "https://batchbg.com/resize-to-1200x1200/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 1200 × 1200 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 1200 × 1200 is the top of TikTok Shop's batch-upload pixel range (100×100 to
            1200×1200, "the higher, the clearer") — the one marketplace size that is a ceiling, not a floor. It
            also sits inside eBay's 800–1,600 zoom window. It fails Amazon (needs 1,000+ for zoom to look good),
            Etsy (needs 2,000) and Walmart (needs 2,200). Drop a folder, pick exact or fit-inside, take the ZIP.
            Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 1200, h: 1200 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            The Only Ceiling in the Ladder: TikTok Shop's Batch-Upload Pixel Range
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Every other size in this series is a threshold you must <em>reach</em>: 800 for eBay zoom, 1,000 for
            Amazon zoom, 1,500 for Google Shopping's recommendation, 2,000 for Etsy search, 2,200 for Walmart.
            1200 × 1200 is the opposite — it is the number you must <em>not exceed</em>. TikTok Shop's own
            batch-upload documentation ("Add Multiple Products" via the Batch Tool) states the main product image
            spec as:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Property</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">TikTok Shop Batch Tool spec</th>
                </tr>
              </thead>
              <tbody className="text-sub">
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Aspect ratio</td>
                  <td className="p-3">Between 3:4 and 4:3</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Pixel range</td>
                  <td className="p-3 font-semibold text-accent">100×100 px to 1200×1200 px — "the higher, the clearer"</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Policy minimum (US)</td>
                  <td className="p-3">600 × 600 px (Product Listing Policy)</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Main image background</td>
                  <td className="p-3">Pure white, RGB 255, 255, 255</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-ink">Images per listing</td>
                  <td className="p-3">Up to 9 square images</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            Inside that range, bigger is strictly better — TikTok's own wording. So the correct reading of
            "1200 × 1200" for a TikTok seller is not "a nice square" but <span className="font-semibold text-ink">the
            maximum-resolution square that is guaranteed to pass the batch pipeline</span>. Upload 1400 × 1400
            through Seller Center's manual form and it will usually be accepted and recompressed. Upload the same
            file through the Batch Tool or a CSV catalog feed and it can hit the dimension-exceeded rejection —
            TikTok Shop's product-upload API documents this as a hard error (12038014: "image dimensions exceed the
            allowed limits"). For a catalog of hundreds of SKUs, the safe compliance line is the ceiling, not the
            exception. No competitor 1200 × 1200 resize page explains this mechanism — they state the number
            without connecting it to the upload pipeline that enforces it.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            Two honest caveats. First, TikTok's own pages are not fully consistent: the US Product Listing Policy
            states only a minimum ("at least 600 × 600 pixels"), while the Batch Tool documentation gives the full
            100–1200 range, and third-party guides variously report 800 minimum or 2000 maximum. When sources
            disagree, the batch-pipeline spec is the binding one for bulk sellers, because that is the path a
            catalog actually travels. Second, the range tops out at 1200 — it does not mean TikTok displays at
            1200. TikTok re-compresses uploads on its CDN, so the detail you ship is the detail buyers get only up
            to the platform's own recompression, which is one more reason not to waste headroom on padding or
            borders.
          </p>

          <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">
            Six-Platform Pass/Fail: 1200×1200 Is a TikTok Optimal, Not a Universal
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            1200 × 1200 clears two platforms cleanly, lands mid-window on a third, and fails three. It is the
            correct export for TikTok-first catalogs, not a master size for cross-listing:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Platform</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">1200×1200 result</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">What you need instead</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Source</th>
                </tr>
              </thead>
              <tbody className="text-sub">
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">TikTok Shop</td>
                  <td className="p-3 font-semibold text-green-700">PASS — top of accepted range</td>
                  <td className="p-3">This is the ceiling; do not exceed it in batch feeds</td>
                  <td className="p-3">TikTok Shop Batch Tool docs</td>
                </tr>
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">eBay</td>
                  <td className="p-3 font-semibold text-green-700">PASS — inside 800–1,600 window</td>
                  <td className="p-3">Zoom + supersize both active; 1,600 is sharper at full zoom</td>
                  <td className="p-3">eBay photo-tips</td>
                </tr>
                <tr className="border-b border-line bg-yellow-50">
                  <td className="p-3 font-semibold text-ink">Google Shopping</td>
                  <td className="p-3 font-semibold text-yellow-700">PARTIAL — above 500 min, below 1,500 rec</td>
                  <td className="p-3">1,500 × 1,500+ recommended for best performance</td>
                  <td className="p-3">Merchant Center Help 6324350</td>
                </tr>
                <tr className="border-b border-line bg-red-50">
                  <td className="p-3 font-semibold text-ink">Amazon</td>
                  <td className="p-3 font-semibold text-red-700">WEAK — zoom on, below 2,000 rec</td>
                  <td className="p-3">1,000 px zoom floor met; 2,000 × 2,000 recommended</td>
                  <td className="p-3">Seller Central G1881</td>
                </tr>
                <tr className="border-b border-line bg-red-50">
                  <td className="p-3 font-semibold text-ink">Etsy</td>
                  <td className="p-3 font-semibold text-red-700">FAIL — below search min</td>
                  <td className="p-3">2,000 px shortest side; 635 px hard floor for search</td>
                  <td className="p-3">Etsy Help 115015663347</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="p-3 font-semibold text-ink">Walmart</td>
                  <td className="p-3 font-semibold text-red-700">FAIL — below requirement</td>
                  <td className="p-3">2,200 × 2,200 required</td>
                  <td className="p-3">Walmart Marketplace</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            The pattern mirrors the rest of the ladder but with the polarity reversed. 800 × 800 is the
            <span className="font-semibold text-ink"> floor</span> you must reach for eBay zoom; 1200 × 1200 is the
            <span className="font-semibold text-ink"> ceiling</span> you must respect for TikTok batch feeds. If
            TikTok Shop is your primary marketplace, export at 1200 × 1200 and you are done — one size, fully
            compliant, with the white-background rule handled before resize. If you cross-list to Amazon or Etsy
            from the same catalog, treat 1200 × 1200 as the <span className="font-semibold text-ink">TikTok-specific
            derivative</span>: keep a 2,000 × 2,000 master for Amazon/Etsy/Walmart and produce the TikTok set as a
            second pass. The <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk image
            resizer</a> handles both passes from one source folder.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            White Background First, Resize Second: The TikTok RGB 255 Rule
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            TikTok Shop's Product Listing Policy requires the main image to have a <span className="font-semibold text-ink">pure
            white background — RGB 255, 255, 255</span> — with no added text, borders, watermarks, or logos, and
            the product shown objectively. This is the same hard number Amazon enforces, and "near-white" is the
            most common rejection cause on both platforms: a photo shot on white paper usually measures 240–250,
            not 255. The reliable pipeline is:
          </p>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Cut the subject out at original resolution — <a href="/bulk-background-remover/" className="text-accent hover:underline">batch background removal</a> before downscaling keeps edges cleaner.</li>
            <li>Composite onto a pure RGB 255, 255, 255 canvas — the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon white background workflow</a> produces exactly this file, and it is TikTok-compliant unchanged.</li>
            <li>Resize the whole folder to exact 1200 × 1200 here — center-crop (cover) for products that fill the frame, pad to fit with white bands for wide or tall items.</li>
            <li>Export as JPEG quality 85 — a typical 1200 × 1200 product shot lands around 150–350 KB, fast to push through Seller Center or a CSV feed.</li>
            <li>Spot-check the exported corner pixels with a color picker: 255/255/255 on all four corners confirms compliance before upload.</li>
          </ol>
          <p className="text-sub leading-relaxed mb-4">
            One caution on padding: fill the bands with pure white, not transparency. TikTok Shop accepts JPEG and
            PNG, but an alpha channel in a main image renders inconsistently across surfaces — flatten to white
            JPEG for the main image, and keep transparent PNGs for secondary shots if needed. This mirrors the
            eBay lesson from the <a href="/resize-to-800x800/" className="text-accent hover:underline">800 × 800
            page</a>: eBay converts PNG transparency to black, so white-padding is the cross-platform default.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            1200 vs 800 vs 2000: Three Sizes, Three Roles
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            The three squares most sellers juggle are 800, 1200 and 2000 — and they are not interchangeable
            quality tiers, they are three different mechanisms. <span className="font-semibold text-ink">800 × 800</span>
            {" "}is eBay's zoom activation switch (640,000 px). <span className="font-semibold text-ink">1200 × 1200</span>
            {" "}is TikTok's batch ceiling (1,440,000 px — 2.25× the 800 square). <span className="font-semibold text-ink">2,000 × 2,000</span>
            {" "}is Amazon's zoom recommendation and Etsy's search minimum (4,000,000 px — 2.78× the 1200 square).
            File weight scales the same way: a quality-85 JPEG runs roughly 80–150 KB at 800, 150–350 KB at 1200,
            and 400–900 KB at 2000. For a 500-SKU TikTok catalog, 1200 × 1200 means roughly 75–175 MB of uploads —
            comfortably under every per-image cap, and 2.25× the data of an 800 batch you would only choose if
            eBay were the sole destination.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            If you are upsizing from a small source, do not stretch: a 600 × 600 source blown up to 1200 × 1200
            adds interpolated pixels, not detail, and TikTok's CDN recompression will exaggerate the softness. The
            same anti-upscale logic applies as on the <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1,000 × 1,000
            page</a> — reshoot or source the original at higher resolution instead.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 1200×1200 Batch Pipeline (TikTok Shop Catalog)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Batch-remove backgrounds at original resolution; composite main images onto RGB 255 white.</li>
            <li>Resize the folder here — exact 1200 × 1200, cover mode for square-ready product shots, fit-inside for odd rectangles.</li>
            <li>Export JPEG quality 85, filenames preserved; download the ZIP.</li>
            <li>Verify four corner pixels read 255/255/255 and confirm each file is exactly 1200 × 1200 before the CSV feed goes live.</li>
            <li>Keep the 2,000 × 2,000 master set in a second export for Amazon/Etsy/Walmart channels — never feed the 1200 set to platforms whose floor is higher.</li>
          </ol>
          <p className="text-sub leading-relaxed mb-4">
            For the wider marketplace ladder: Amazon's zoom floor is <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1,000 × 1,000</a>,
            Google Shopping's recommendation is <a href="/resize-to-1500x1500/" className="text-accent hover:underline">1,500 × 1,500</a>,
            Etsy's target is <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2,000 × 2,000</a>,
            Shopify's display-best is <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2,048 × 2,048</a>,
            and eBay's ceiling is <a href="/resize-to-1600x1600/" className="text-accent hover:underline">1,600 × 1,600</a>.
            Choose 1200 × 1200 when TikTok Shop batch compliance is the specific goal — it is the only size in the
            series where exceeding the number is the failure mode.
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
