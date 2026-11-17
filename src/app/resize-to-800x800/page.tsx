import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "What does 800×800 actually unlock?",
    a: "Two things, both on eBay: mouseover zoom and supersize popup. eBay's photo system reads the longest side of your uploaded image and switches features on at two thresholds — 640 px (supersize popup only) and 800 px (both supersize and mouseover zoom). Below 640, neither is available. At 800 × 800, you clear both thresholds with a square that also fits eBay's 1:1 grid display without cropping. Google Shopping's documentation also names 800 × 800 as the recommended minimum for image_link display quality, though Google's hard floor is 500 × 500 (enforced January 31, 2027). Amazon, Etsy, Walmart and Shopify all want larger — see the pass/fail table below.",
  },
  {
    q: "Is 800×800 enough for Amazon product images?",
    a: "No. Amazon requires at least 1,000 pixels on the longest side to activate the zoom feature, and recommends 2,000 × 2,000 for the best zoom experience. An 800 × 800 image will upload (the hard minimum is 500 px) but will not trigger zoom, which Amazon's own documentation identifies as a driver of conversion. If you sell on both eBay and Amazon, export at 2,000 × 2,000 for Amazon and a separate 800 × 800 (or 1,600 × 1,600) for eBay — the batch tool handles both in one pass. See the resize-to-1000x1000 page for Amazon's zoom floor and the resize-to-2000x2000 page for the recommended target.",
  },
  {
    q: "Why does eBay say 800 but everyone recommends 1,600?",
    a: "Because 800 is the floor where zoom turns on, not the ceiling where it looks good. eBay's own photo-tips page says to aim for 800–1,600 pixels on the long side. At 800, zoom works but the enlarged view is soft on high-DPI phone screens — you are zooming into 640,000 pixels spread across a 6-inch display. At 1,600, the zoomed view stays sharp because there are 4× more pixels to crop into. Practical advice: if file size and upload time allow, export at 1,600 × 1,600 for eBay (it is still under the 12 MB cap by a wide margin — see the resize-to-1600x1600 page for the ceiling mechanism). Use 800 × 800 when you need the smallest file that still unlocks zoom — for example, when bulk-listing hundreds of items and upload throughput matters more than zoom sharpness.",
  },
  {
    q: "Can I use 800×800 for Google Shopping feeds?",
    a: "Yes, but it is the floor of the recommendation, not the target. Google Merchant Center's image_link documentation says images must be at least 500 × 500 (enforced January 31, 2027) and recommends 'around 1,500 × 1,500 pixels or above' for best performance across all listing formats. Multiple Google Shopping feed guides cite 800 × 800 as the practical minimum that avoids the 'image too small' diagnostic. An 800 × 800 image will pass the feed validation and display in Shopping ads, but Google's surfaces auto-crop and enlarge thumbnails — a 1,500 × 1,600 source gives the cropping algorithm more headroom. If you are feeding the same image to Google Shopping and eBay, 800 × 800 satisfies both minimums simultaneously, which is the one real reason to choose this size over a larger one.",
  },
  {
    q: "Should I upscale a smaller photo to 800×800?",
    a: "Almost never. If your source photo is 600 × 600 or smaller, stretching it to 800 × 800 adds no real detail — the extra pixels are interpolated, and eBay's zoom feature will enlarge an already-soft image, making the softness more visible, not less. Amazon's Seller Central documentation explicitly states 'Do not artificially enlarge small images.' Google Merchant Center has a separate 'Low image quality' diagnostic that flags upscaled images. The only case where upscaling to 800 is harmless is flat vector graphics (logos, icons, simple illustrations) — their edges are geometric and survive 1.3× enlargement invisibly. For photographs, reshoot or find the original at higher resolution instead of upscaling.",
  },
  {
    q: "What's the difference between 800×800 and 1000×1000?",
    a: "200,000 pixels and one zoom ecosystem. 800 × 800 (640,000 px) unlocks eBay zoom and satisfies Google Shopping's minimum recommendation. 1,000 × 1,000 (1,000,000 px) unlocks Amazon zoom — Amazon's threshold is 1,000 px on the longest side, not 800. If you sell only on eBay and Google Shopping, 800 is sufficient; if you sell on Amazon, you need 1,000 minimum. The two numbers are not interchangeable: an 800 × 800 image on Amazon will upload but will not zoom, and a 1,000 × 1,000 image on eBay works but is overkill if upload speed is a constraint. For a multi-platform catalog, export at the largest size your smallest platform requires — see the resize-to-1000x1000 page for the Amazon-specific workflow.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 800×800 — eBay Zoom Threshold, Batch Free | BatchBG",
  description:
    "Resize one image or a whole folder to exactly 800×800 px. The number that unlocks eBay mouseover zoom and meets Google Shopping's minimum — with a six-platform pass/fail matrix, the 800-vs-1600 sharpness argument, and a correct batch pipeline. Free in-browser tool, ZIP export, no upload.",
  keywords:
    "resize image to 800x800, 800x800 image resizer, resize to 800x800 pixels, ebay zoom threshold 800, google shopping image size 800x800, tiktok shop image size, batch resize 800x800, 800x800 product photo",
  alternates: { canonical: "https://batchbg.com/resize-to-800x800/" },
  openGraph: {
    title: "Resize Image to 800×800 — The eBay Zoom Threshold, In Batch",
    description:
      "Exact 800×800 for eBay zoom activation, Google Shopping minimum, and TikTok Shop — including the six-platform pass/fail matrix and the 800-vs-1600 sharpness argument. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-800x800/",
  },
};

export default function Resize800() {
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
    name: "BatchBG — Resize to 800×800",
    url: "https://batchbg.com/resize-to-800x800/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 800×800 px",
      "Fit-inside mode for mixed-orientation folders",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 800×800: The eBay Zoom Threshold and the Minimum-Viable Marketplace Square",
    description:
      "Where 800×800 actually comes from — eBay's zoom activation threshold, Google Shopping's recommended minimum, TikTok Shop's practical target — plus the six-platform pass/fail matrix and why 800 is a floor, not a target.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-12",
    dateModified: "2026-11-12",
    url: "https://batchbg.com/resize-to-800x800/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 800×800", url: "https://batchbg.com/resize-to-800x800/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 800 × 800 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 800 × 800 is the pixel count where eBay's mouseover zoom switches on and Google Shopping's display-quality recommendation is met — but it is a floor, not a target. It fails Amazon (needs 1,000), Etsy (needs 2,000) and Walmart (needs 2,200). Drop a folder above, pick exact or fit-inside, and take the ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 800, h: 800 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            The eBay Zoom Mechanism: Why 800 Is a Switch, Not a Suggestion
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            eBay's photo system reads the longest side of each uploaded image and flips features on at hard pixel thresholds. The community-documented ladder, confirmed against eBay's own <span className="font-semibold text-ink">export.ebay.com photo-tips page</span>, works like this:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Longest side</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Supersize popup</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Mouseover zoom</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">What eBay does</th>
                </tr>
              </thead>
              <tbody className="text-sub">
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">Under 500 px</td>
                  <td className="p-3">No</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Rejected at upload</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">500–639 px</td>
                  <td className="p-3">No</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Displayed as small as 300 px</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">640–799 px</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Popup works, no hover zoom</td>
                </tr>
                <tr className="border-b border-line bg-bg-alt">
                  <td className="p-3 font-semibold text-ink">800–1,600 px</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3 font-semibold text-accent">Yes</td>
                  <td className="p-3">Both features active</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-ink">Over 1,600 px</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Shrunk to 1,600 master, then above applies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            800 is not a recommended size — it is the <span className="font-semibold text-ink">binary threshold</span> where eBay's zoom engine changes state. Below it, buyers cannot hover-zoom into your product. Above it, they can. This is why every eBay guide says "at least 800" — they are not making a quality recommendation, they are reporting a switch position. eBay's own photo-tips page frames 800–1,600 as the optimization window, not a single target, and notes that "better photo quality" (defined as 500+ px, no added text, uploaded to eBay's picture service) correlated with a 4.5% sales increase in a study of 6.8 million listings. No competitor resize page explains this mechanism — they state the number without connecting it to the zoom engine that creates it.
          </p>

          <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">
            Six-Platform Pass/Fail: 800×800 Is the Minimum Viable Square
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            800 × 800 is the smallest square that clears <span className="font-semibold text-ink">any</span> platform's zoom or recommendation threshold. It unlocks eBay zoom and meets Google Shopping's display-quality minimum. It fails three major marketplaces outright and is below the recommendation on a fourth:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Platform</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">800×800 result</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">What you need instead</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Source</th>
                </tr>
              </thead>
              <tbody className="text-sub">
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">eBay</td>
                  <td className="p-3 font-semibold text-green-700">PASS — zoom active</td>
                  <td className="p-3">1,600 px recommended for sharp zoom</td>
                  <td className="p-3">eBay photo-tips</td>
                </tr>
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">Google Shopping</td>
                  <td className="p-3 font-semibold text-green-700">PASS — meets recommended min</td>
                  <td className="p-3">1,500 × 1,500+ recommended for best performance</td>
                  <td className="p-3">Merchant Center Help 6324350</td>
                </tr>
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">TikTok Shop</td>
                  <td className="p-3 font-semibold text-green-700">PASS — above 600×600 min</td>
                  <td className="p-3">600 × 600 is the hard floor; 800 is comfortable headroom</td>
                  <td className="p-3">TikTok Seller Center</td>
                </tr>
                <tr className="border-b border-line bg-red-50">
                  <td className="p-3 font-semibold text-ink">Amazon</td>
                  <td className="p-3 font-semibold text-red-700">FAIL — no zoom</td>
                  <td className="p-3">1,000 px min for zoom; 2,000 × 2,000 recommended</td>
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
            The pattern: 800 × 800 works for platforms that treat it as a <span className="font-semibold text-ink">zoom activation threshold</span> (eBay) or a <span className="font-semibold text-ink">display-quality floor</span> (Google Shopping, TikTok Shop). It fails platforms that treat the pixel count as a <span className="font-semibold text-ink">listing quality signal</span> (Etsy explicitly links resolution to search placement) or a <span className="font-semibold text-ink">hard requirement</span> (Walmart's 2,200², Amazon's 1,000-px zoom floor). If you sell across all six, 800 × 800 is not your export size — it is your <span className="font-semibold text-ink">minimum preview size</span>. Export at 2,000 × 2,000 or 2,200 × 2,200 for the master, then downscale to 800 for eBay-specific listings. The <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk resizer</a> can produce both sizes from one source folder in two passes.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            800 vs 1,600: The Sharpness Argument
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            eBay says 800–1,600 on the long side. Why not always pick 1,600? Because <span className="font-semibold text-ink">file weight and upload throughput</span> scale with pixel count. A JPEG at 800 × 800, quality 85, is typically 80–150 KB. The same image at 1,600 × 1,600 is 300–600 KB — four times the pixels, roughly four times the bytes. When you are bulk-listing 200 items, that is the difference between a 30 MB upload batch and a 120 MB one. eBay's per-image cap is 12 MB, so neither will be rejected, but the upload time and mobile data cost are real.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            The sharpness difference is also real. Zoom enlarges the image on screen — at 800 × 800, zooming into a product detail spreads 640,000 pixels across a high-DPI phone display that has 2–3 million physical pixels. The zoomed view looks soft. At 1,600 × 1,600, the same zoom crops into 2,560,000 pixels — four times the detail. If your buyers inspect condition (used goods, collectibles, electronics), 1,600 is the correct choice. If you are listing commodity items where zoom is a checkbox, not a selling tool, 800 saves bandwidth without losing the feature. <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1,000 × 1,000</a> is the compromise if you also sell on Amazon — it clears Amazon's zoom floor and gives eBay 56% more pixels than 800 to crop into.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            The TikTok Shop Edge Case: 600 Floor, 800 Comfort
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            TikTok Shop's Seller Center requires a minimum of 600 × 600 pixels for product images, with a solid-color background (white recommended), product filling at least 60% of the frame, and up to 9 square images per listing. An 800 × 800 image clears this floor with 78% more pixels than the minimum — comfortable headroom that avoids the <span className="font-semibold text-ink">MAIN_IMG_FIRST_IMG_LOW_QUALITY</span> diagnostic (resolution must be at least 600 × 600). TikTok Shop is the only major platform where 800 × 800 is meaningfully above the floor rather than at it, which makes 800 a safe single-export size if TikTok Shop is your only marketplace. If you cross-list to Amazon or Etsy from the same catalog, use the larger size for those platforms and downscale here for TikTok.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Crop, Pad, or Fit: Rectangles Into an 800 Square
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            eBay accepts non-square images but displays them in a 1:1 grid slot with letterboxing. Amazon, Google Shopping and TikTok Shop all expect square main images. Three options for non-square sources:
          </p>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Center-crop (Cover):</span> scales to fill the 800 square and trims overflow. Best for product photos where the subject fills the frame — matches Amazon's 85% fill rule and eBay's 80–90% recommendation. Loses up to 25% of a 4:3 frame.</li>
            <li><span className="font-semibold text-ink">Pad to fit (Contain):</span> fits the whole image inside 800 × 800 with fill bands. Best for logos, wide product shots, or anything where cropping loses information. White padding matches marketplace white-background rules; transparent padding (PNG/WebP) only works for platforms that support alpha — eBay converts PNG transparency to black, so use white JPEG padding for eBay.</li>
            <li><span className="font-semibold text-ink">Stretch:</span> forces to 800 × 800 by distorting proportions. Never correct for product photos — buyers notice a circle that is now an ellipse. Only viable for near-square abstract textures.</li>
          </ul>
          <p className="text-sub leading-relaxed mb-4">
            For eBay-specific listings, <a href="/blog/batch-edit-ebay-photos-white-background/" className="text-accent hover:underline">white background batch processing</a> before resize ensures the padding color matches eBay's light-gray-to-white preference. For Amazon listings, the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon white background page</a> covers the RGB 255 enforcement and 85% fill rule — but remember, Amazon needs at least <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1,000 × 1,000</a>, not 800.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 800×800 Batch Pipeline (eBay + Google Shopping Catalog)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Remove backgrounds first if needed — <a href="/bulk-background-remover/" className="text-accent hover:underline">batch background removal</a> at original resolution produces cleaner edges than removal after downscaling.</li>
            <li>Resize the whole folder here: exact 800 × 800 for squares, pad or crop for rectangles. The tool locks to 800 × 800 and applies the same mode to every file.</li>
            <li>Export as JPEG quality 85 — typical file size 80–150 KB, well under eBay's 12 MB cap and fast to upload. Use PNG only if you need lossless quality for detailed items.</li>
            <li>Download the ZIP. Verify a few images at 100% zoom on a phone — if the zoomed view is too soft for your product category, re-export at 1,600 × 1,600 instead.</li>
            <li>For cross-platform catalogs: export a 2,000 × 2,000 master set for Amazon/Etsy/Walmart in a separate pass, and use the <a href="/batch-image-compressor/" className="text-accent hover:underline">batch compressor</a> if file weight needs tuning after resize.</li>
          </ol>
          <p className="text-sub leading-relaxed mb-4">
            If your catalog is heading to Amazon or Etsy rather than eBay, you are on the wrong page: Amazon's zoom floor is <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1,000 × 1,000</a>, Etsy's search minimum is <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2,000 × 2,000</a>, Shopify's display-best is <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2,048 × 2,048</a>, and Google Shopping's recommended target is <a href="/resize-to-1500x1500/" className="text-accent hover:underline">1,500 × 1,500</a>. Use 800 × 800 only when eBay zoom activation or Google Shopping minimum compliance is the specific goal.
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
