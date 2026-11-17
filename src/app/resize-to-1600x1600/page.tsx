import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "Does eBay zoom really require 1600×1600?",
    a: "No — this is the most common error on resize pages, and competitor tools contradict each other on it. eBay's zoom feature activates at 800 px on the longest side (640 px unlocks the supersize popup, 800 px adds mouseover zoom). What 1,600 px does is end the optimization window: eBay's own photo-tips guidance says to aim for 800–1,600 pixels on the long side, with 1,600 as the top of that range. At 800 × 800 zoom works but looks soft on high-DPI screens; at 1,600 × 1,600 the zoomed view has 4× more pixels to crop into and stays sharp. So 1,600 is not the zoom threshold — it is the smallest size with zero sharpness compromise on eBay.",
  },
  {
    q: "Should I upload images larger than 1600 px to eBay?",
    a: "For eBay-only listings, no. eBay stores a 1,600 px master of each photo — anything longer than 1,600 px on the longest side is downscaled to a 1,600 px master before display, and zoom crops into that master. The extra pixels are discarded, while the extra bytes still cost you upload time: a 2,400 × 2,400 JPEG is roughly 2.25× the file weight of a 1,600 × 1,600 with no display benefit on eBay. The exception is a cross-platform master: if the same file feeds Amazon (2,000 recommended) or Walmart (2,200 required), keep the larger file for those platforms and export a separate 1,600 × 1,600 set for eBay — a two-pass batch job takes under a minute for a few hundred images.",
  },
  {
    q: "Is 1600×1600 enough for Amazon product images?",
    a: "For Amazon's zoom feature, yes — Amazon's threshold is 1,000 px on the longest side, so 1,600 × 1,600 activates zoom with 60% headroom. For Amazon's recommendation, no: Seller Central advises 2,000 × 2,000 or larger for the best zoom experience, and Amazon's own guidance treats higher resolution as a conversion driver. Practically: a 1,600 × 1,600 listing will zoom and will not be rejected (the hard floor is 500 px), but if you are optimizing Amazon listings specifically, export at 2,000 × 2,000 — see the resize-to-2000x2000 page. 1,600 × 1,600 is the eBay-optimal size, not the Amazon-optimal one.",
  },
  {
    q: "1600×1600 or 1500×1500 for Google Shopping?",
    a: "Both pass; 1,600 is slightly safer. Google Merchant Center's image_link documentation recommends 'around 1,500 × 1,500 pixels or above' — 1,600 × 1,600 clears that recommendation with 13.8% more pixels, and both sizes are far above the 500 × 500 hard floor (enforced January 31, 2027). The reason to prefer 1,600 over 1,500 is platform overlap: 1,600 sits at the top of eBay's optimization window, so a single 1,600 × 1,600 export is simultaneously eBay-optimal and Google Shopping-compliant, while a 1,500 × 1,500 export is Google-optimal but leaves 12% of eBay's zoom headroom unused. If eBay is in your channel mix, 1,600 is the better shared size.",
  },
  {
    q: "Can I batch-resize to 1600×1600 with a transparent background for eBay?",
    a: "No — export eBay images as white-background JPEG. eBay converts PNG transparency to black in listing display, which reads as a broken image to buyers. If your source photos have transparent backgrounds (for example from batch background removal), flatten them onto white before or during the resize: the tool on this page pads with a solid color you choose in fit-inside mode, so set the fill to white (RGB 255,255,255). eBay's photo rules also prohibit borders, watermarks, and added text on the main image, and the study eBay cites (6.8 million listings) tied 'better photo quality' — defined as 500+ px uploaded to eBay's picture service — to a 4.5% sales increase.",
  },
  {
    q: "What's the file size of a 1600×1600 image?",
    a: "A JPEG at quality 85 is typically 300–600 KB; the same image at 800 × 800 is 80–150 KB and at 2,000 × 2,000 roughly 500–900 KB. Against eBay's 12 MB per-image cap, all three pass easily — the real cost is bulk upload throughput: 200 images at 1,600 × 1,600 is roughly a 60–120 MB batch versus 16–30 MB at 800 × 800. That trade is the whole decision: 800 wins when upload speed matters more than zoom sharpness (commodity listings, mobile hotspots), 1,600 wins when buyers inspect condition detail (used goods, collectibles, electronics). Both unlock zoom; only 1,600 keeps the zoomed view sharp.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 1600×1600 — eBay's Optimal Size, Batch Free | BatchBG",
  description:
    "Resize one image or a whole folder to exactly 1600×1600 px. The ceiling of eBay's 800–1600 optimization window — beyond it eBay downscales to a 1600 master and the bytes are wasted. Includes the zoom-threshold fact-check competitor pages get wrong, a six-platform fit table, and a correct batch pipeline. Free in-browser tool, ZIP export, no upload.",
  keywords:
    "resize image to 1600x1600, 1600x1600 image resizer, resize to 1600x1600 pixels, ebay image size 1600, best ebay photo size, ebay zoom 1600, batch resize 1600x1600, 1600x1600 product photo",
  alternates: { canonical: "https://batchbg.com/resize-to-1600x1600/" },
  openGraph: {
    title: "Resize Image to 1600×1600 — The Top of eBay's Window, In Batch",
    description:
      "Exact 1600×1600 for eBay's optimal zoom sharpness, Google Shopping compliance, and the fact-check of the 'zoom requires 1600' myth. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-1600x1600/",
  },
};

export default function Resize1600() {
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
    name: "BatchBG — Resize to 1600×1600",
    url: "https://batchbg.com/resize-to-1600x1600/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 1600×1600 px",
      "Fit-inside mode with white padding for marketplace rules",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Resize Images to 1600×1600: The Ceiling of eBay's Optimization Window, Not the Zoom Threshold",
    description:
      "Where 1600×1600 actually comes from — the top of eBay's 800–1,600 photo window, the 1,600 px master downscale mechanism, and the fact-check of competitor pages that claim zoom requires 1,600 px — plus the six-platform fit table and file-weight math.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-13",
    dateModified: "2026-11-13",
    url: "https://batchbg.com/resize-to-1600x1600/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 1600×1600", url: "https://batchbg.com/resize-to-1600x1600/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 1600 × 1600 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 1600 × 1600 is the top of eBay's photo optimization window — eBay's own guidance says
            800–1,600 on the long side, and anything beyond 1,600 is downscaled to a 1,600 px master anyway, so larger
            uploads waste bytes for nothing on eBay. It also clears Google Shopping's 1,500 recommendation and Amazon's
            1,000 zoom floor, but misses Etsy's 2,000 and Walmart's 2,200 targets. Drop a folder, pick exact or
            fit-inside, take the ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 1600, h: 1600 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            The 1,600 px Master: Why Bigger Is Wasted on eBay
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            eBay's photo pipeline has a hard ceiling at 1,600 px. Upload an image longer than 1,600 px on its longest
            side — 2,000, 2,400, 4,000, anything — and eBay downscales it to a <span className="font-semibold text-ink">1,600 px master</span>{" "}
            before storing and displaying it. Zoom, supersize, and every gallery view crop into that master. This
            mechanism is documented in eBay's own <span className="font-semibold text-ink">export.ebay.com photo-tips guidance</span>,
            which frames 800–1,600 px as the range to aim for and community-documented upload behavior confirms the
            downscale. It has a direct consequence every seller can act on:
          </p>
          <p className="text-sub leading-relaxed mb-4">
            <span className="font-semibold text-ink">1,600 × 1,600 is the largest eBay upload that maps 1:1 to what buyers actually see.</span>{" "}
            Below 1,600, eBay stores what you gave it and zoom sharpness scales with your pixel count. At exactly
            1,600, every pixel you upload is a pixel in the master. Above 1,600, you pay upload time and storage for
            pixels eBay discards — a 2,400 × 2,400 JPEG weighs roughly 2.25× its 1,600 × 1,600 downscale with zero
            display benefit. For an eBay-only catalog, exporting beyond 1,600 is pure waste; for a cross-platform
            catalog, keep the large master for Amazon and Walmart and export a separate 1,600 set for eBay (pipeline
            below). No competitor resize page explains the master mechanism — they list 1,600 as a recommendation and
            stop.
          </p>

          <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">
            Fact-Check: Zoom Does Not Require 1600 — Competitor Pages Disagree With Each Other
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Search results for this size are full of contradictory claims, and the contradiction is measurable. One
            popular resizer states eBay's zoom feature <em>"requires images at least 1,600 px on the longest side — if
            you upload images smaller than 1,600 px, buyers cannot zoom in."</em> Another eBay-focused tool states zoom
            activates <em>"at least 800 pixels on its longest side."</em> Both cannot be right, and eBay's documented
            threshold ladder resolves it:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Longest side</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Supersize popup</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Mouseover zoom</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Verdict</th>
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
                  <td className="p-3">Passes upload, no zoom features</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">640–799 px</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Popup only</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="p-3 font-semibold text-ink">800–1,600 px</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3 font-semibold text-accent">Yes</td>
                  <td className="p-3">Zoom on — sharpness scales up to 1,600</td>
                </tr>
                <tr className="bg-bg-alt">
                  <td className="p-3 font-semibold text-ink">Over 1,600 px</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Yes</td>
                  <td className="p-3">Downscaled to 1,600 px master — extra pixels discarded</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            The correct statement: <span className="font-semibold text-ink">zoom switches on at 800 px; 1,600 px is where the optimization window closes.</span>{" "}
            The "1,600 required for zoom" claim confuses eBay's recommendation for sharp zoom with the activation
            threshold — and the pages making it sell you a 1,600 × 1,600 resize either way, so the error costs nothing
            except your understanding of what the number does. It matters in one practical direction: if you believed
            zoom requires 1,600, you might also believe 800 "does nothing," and skip the smaller export when bulk
            upload throughput is your constraint. eBay's own study of 6.8 million listings ties 500+ px photos on its
            picture service to a 4.5% sales increase — resolution above the floor is an optimization, not a gate.
          </p>

          <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">
            Six-Platform Fit: 1600×1600 as a Shared Export Size
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            1,600 × 1,600 is eBay-optimal by construction. The interesting question is what it does on the other five
            marketplaces — and the answer splits the platform set three ways:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
              <thead className="bg-bg-alt">
                <tr>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Platform</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">1600×1600 result</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Platform's own target</th>
                  <th className="text-left p-3 border-b border-line font-heading text-ink">Source</th>
                </tr>
              </thead>
              <tbody className="text-sub">
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">eBay</td>
                  <td className="p-3 font-semibold text-green-700">OPTIMAL — top of 800–1,600 window, 1:1 master</td>
                  <td className="p-3">1,600 px recommended</td>
                  <td className="p-3">eBay photo-tips</td>
                </tr>
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">Google Shopping</td>
                  <td className="p-3 font-semibold text-green-700">PASS — above 1,500 recommendation</td>
                  <td className="p-3">"around 1,500×1,500 or above"; 500² floor (Jan 31, 2027)</td>
                  <td className="p-3">Merchant Center Help 6324350</td>
                </tr>
                <tr className="border-b border-line bg-green-50">
                  <td className="p-3 font-semibold text-ink">TikTok Shop</td>
                  <td className="p-3 font-semibold text-green-700">PASS — 2.7× the 600² floor</td>
                  <td className="p-3">600 × 600 minimum</td>
                  <td className="p-3">TikTok Seller Center</td>
                </tr>
                <tr className="border-b border-line bg-amber-50">
                  <td className="p-3 font-semibold text-ink">Amazon</td>
                  <td className="p-3 font-semibold text-amber-700">PARTIAL — zoom active (1,000 floor), below 2,000 recommendation</td>
                  <td className="p-3">2,000 × 2,000 recommended</td>
                  <td className="p-3">Seller Central G1881</td>
                </tr>
                <tr className="border-b border-line bg-amber-50">
                  <td className="p-3 font-semibold text-ink">Etsy</td>
                  <td className="p-3 font-semibold text-amber-700">PARTIAL — above 635 search floor, below 2,000 recommendation</td>
                  <td className="p-3">2,000 px shortest side</td>
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
            Read the split by platform philosophy: eBay treats resolution as a <span className="font-semibold text-ink">bounded feature window</span>{" "}
            (800 opens it, 1,600 closes it, more is discarded). Amazon and Etsy treat it as an{" "}
            <span className="font-semibold text-ink">open-ended quality signal</span> — 1,600 × 1,600 works but their
            recommendations sit at 2,000, and their guidance explicitly links higher resolution to conversion and
            search placement. Walmart treats it as a <span className="font-semibold text-ink">hard requirement</span>{" "}
            at 2,200². So 1,600 × 1,600 is the right single export for an eBay + Google Shopping + TikTok Shop channel
            mix, and the wrong single export the moment Amazon, Etsy, or Walmart carries meaningful volume. In that
            case export a <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2,000 × 2,000</a> or{" "}
            <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2,048 × 2,048</a> master set for
            the demanding platforms and this 1,600 set for eBay — two passes, one source folder.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            1600 vs 800 vs 1000: The Window in One Paragraph
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            The three eBay-relevant squares map to three positions in the same window.{" "}
            <a href="/resize-to-800x800/" className="text-accent hover:underline">800 × 800</a> is the floor — the
            smallest file that flips zoom on, correct for commodity listings where upload throughput beats sharpness.{" "}
            <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1,000 × 1,000</a> is the Amazon
            compromise — it clears Amazon's zoom floor while staying inside eBay's window with 56% more pixels than
            800. 1,600 × 1,600 is the ceiling — maximum sharpness eBay will keep, and the point beyond which eBay
            discards pixels. Choose by constraint, not by habit: bandwidth-limited bulk listing → 800; eBay + Amazon
            dual-channel → 1,000; eBay-first catalog where buyers inspect condition → 1,600.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            File Weight Math at 1600×1600
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            A 1,600 × 1,600 JPEG at quality 85 is typically 300–600 KB depending on subject detail — four times the
            pixels and roughly four times the bytes of the same image at{" "}
            <a href="/resize-to-800x800/" className="text-accent hover:underline">800 × 800</a> (80–150 KB), and about
            half of a 2,048 × 2,048 export (500–900 KB). Against eBay's 12 MB per-image cap none of these are close to
            rejection; the cost that matters is bulk throughput. 200 listings at 1,600 × 1,600 is a 60–120 MB upload
            batch — fine on a wired connection, painful on a mobile hotspot. If weight becomes the constraint, the{" "}
            <a href="/batch-image-compressor/" className="text-accent hover:underline">batch compressor</a> can pull
            JPEGs down 20–40% at visually identical quality after resize. Use PNG at this size only for lossless
            archival masters; PNG at 1,600² routinely weighs 2–4 MB and buys nothing on eBay's display pipeline.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Crop, Pad, or Fit: Rectangles Into a 1600 Square
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            eBay displays listing photos in a 1:1 grid slot with letterboxing, and its guidance recommends the product
            filling 80–90% of the frame. Three options for non-square sources:
          </p>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Center-crop (Cover):</span> scales to fill the 1,600 square and trims overflow. Best when the subject fills the frame; loses up to 25% of a 4:3 source.</li>
            <li><span className="font-semibold text-ink">Pad to fit (Contain):</span> keeps the whole image inside 1,600 × 1,600 with fill bands. Pad with white — <span className="font-semibold text-ink">eBay converts PNG transparency to black</span>, which reads as a broken image. The tool's fit-inside mode lets you set the fill color explicitly.</li>
            <li><span className="font-semibold text-ink">Stretch:</span> distorts proportions to force the square. Never for product photos — an ellipse where a circle was reads as damage, not style.</li>
          </ul>
          <p className="text-sub leading-relaxed mb-4">
            If your sources still have backgrounds, strip them before resizing —{" "}
            <a href="/bulk-background-remover/" className="text-accent hover:underline">batch background removal</a> at
            original resolution produces cleaner edges than removal after downscaling, and the{" "}
            <a href="/blog/batch-edit-ebay-photos-white-background/" className="text-accent hover:underline">eBay white-background batch workflow</a>{" "}
            covers the flatten-to-white step this platform requires. For the Amazon-specific rules (RGB 255
            enforcement, 85% fill), see the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon white background page</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 1600×1600 Batch Pipeline (eBay + Google Shopping Catalog)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Remove backgrounds first if needed — at original resolution, before any downscaling.</li>
            <li>Resize the folder here: exact 1,600 × 1,600, pad-to-fit with white for rectangles. The tool locks to 1,600 × 1,600 and applies the same mode to every file.</li>
            <li>Export JPEG quality 85 — typical 300–600 KB per image, well under eBay's 12 MB cap. No PNG unless you are archiving lossless masters.</li>
            <li>Download the ZIP and spot-check zoom on a phone: the zoomed view should read sharp at 1,600 — if it does not, your source was under 1,600 px to begin with, and no resize can add detail back.</li>
            <li>If Amazon, Etsy, or Walmart carries volume in the same catalog, run a second pass at <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2,000 × 2,000</a> (or <a href="/resize-to-2048x2048/" className="text-accent hover:underline">2,048 for Shopify</a>) from the same source folder — do not upscale this 1,600 set for them.</li>
          </ol>
          <p className="text-sub leading-relaxed mb-4">
            One anti-pattern to close on: do not upscale. If a source photo is 900 × 900, stretching it to 1,600 ×
            1,600 adds interpolated pixels, not detail — eBay stores the soft master and zoom makes the softness more
            visible, not less. Amazon's Seller Central states it directly ("do not artificially enlarge small images")
            and Google Merchant Center flags upscaled images with its "Low image quality" diagnostic. The ceiling
            argument cuts both ways: eBay discards pixels above 1,600, and it cannot manufacture pixels below it. The{" "}
            <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk resizer</a> handles both passes
            — and every size in this series, from <a href="/resize-to-512x512/" className="text-accent hover:underline">512 × 512</a> to{" "}
            <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2,000 × 2,000</a>, lives on the
            same tool.
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
