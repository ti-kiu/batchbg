import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Walmart Marketplace Image Requirements (2026) — Real Specs & Bulk Workflow | BatchBG",
  description:
    "Walmart's actual image rules: 5MB cap, 2200x2200 target, 1500px zoom minimum, seamless white RGB 255,255,255. Plus the wrong numbers floating in third-party guides and a batch workflow to prep a whole catalog.",
  keywords:
    "walmart marketplace image requirements, walmart product image specs, walmart image size 2200, walmart white background product photo, walmart listing image guidelines",
  alternates: { canonical: "https://batchbg.com/blog/walmart-marketplace-image-requirements/" },
  openGraph: {
    title: "Walmart Marketplace Image Requirements (2026) — Verified Specs",
    description: "Every Walmart image constraint straight from Marketplace Learn, the myths third-party guides got wrong, and a free batch workflow.",
    url: "https://batchbg.com/blog/walmart-marketplace-image-requirements/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function WalmartMarketplaceImageRequirements() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "https://batchbg.com/blog/walmart-marketplace-image-requirements/" }]} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Walmart Marketplace Image Requirements (2026): The Real Specs, the Wrong Numbers, and a Bulk Workflow",
            description: "Walmart's published image constraints verified against Marketplace Learn, the third-party myths that cause failed uploads, and a batch prep workflow for whole catalogs.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-14",
            dateModified: "2026-10-14",
            url: "https://batchbg.com/blog/walmart-marketplace-image-requirements/",
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
              { "@type": "Question", name: "What size should Walmart marketplace product images be?", acceptedAnswer: { "@type": "Answer", text: "Walmart's target is 2200 x 2200 pixels, square 1:1, with 1500 x 1500 as the minimum for zoom to work. Files must stay under 5MB. Anything below the zoom threshold renders without the hover-zoom feature, which hurts conversion on detail-heavy products." } },
              { "@type": "Question", name: "Does Walmart require a white background on product images?", acceptedAnswer: { "@type": "Answer", text: "Yes, for the main image: a seamless white background at exactly RGB 255, 255, 255. Off-white, gray shadows, and visible background edges all count as noncompliant. Secondary images can show the product in context, but stock photos are prohibited outright on Walmart." } },
              { "@type": "Question", name: "What file formats does Walmart accept for product images?", acceptedAnswer: { "@type": "Answer", text: "JPEG, JPG, PNG, and BMP in RGB color at 8 bits per pixel. GIF is not permitted. Walmart also recommends naming each file with its 14-digit GTIN, which matters when you bulk-upload hundreds of SKUs and need images to map to the right items automatically." } },
              { "@type": "Question", name: "Can I use transparent PNGs on Walmart?", acceptedAnswer: { "@type": "Answer", text: "PNG is an accepted format, but the main image still needs a seamless white background, so a transparent PNG will not comply as a hero image. The practical move is to flatten transparency onto pure white (RGB 255, 255, 255) in bulk before uploading, then export as JPEG to stay under the 5MB cap." } },
              { "@type": "Question", name: "What happens if my Walmart images do not meet requirements?", acceptedAnswer: { "@type": "Answer", text: "Walmart's guide states that noncompliance may result in products being unpublished. Oversized files above 5MB fail outright at submission. There is no published automatic pixel threshold that unpublishes listings at, say, 500 x 500, despite what some guides claim, but low-resolution images drag down your content quality score and lose zoom." } },
            ],
          }),
        }}
      />
      <div className="mb-8">
        <p className="text-sub text-sm mb-2">October 14, 2026 · 6 min read</p>
        <div className="mb-6 rounded-xl overflow-hidden">
          <img src="/demo/product-after.jpg" alt="Walmart-compliant product photo with seamless pure white background" className="w-full h-48 object-cover" loading="lazy" />
        </div>
      </div>

      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
        Walmart Marketplace Image Requirements (2026)
      </h1>
      <p className="text-sub text-lg leading-relaxed mb-8">
        Build every image to 2200 x 2200 pixels, square, under 5MB, JPEG, on a seamless white background of exactly RGB 255, 255, 255, with a zoom floor of 1500 x 1500. That is the complete set of hard constraints from Walmart's own Marketplace Learn guide. The trickier part is that most third-party "Walmart image requirement" articles circulating right now contain numbers Walmart never published, and sellers who build to those numbers get failed submissions or lost zoom. Below: the verified spec table, the specific myths to ignore, and a bulk workflow that preps a whole catalog in one pass.
      </p>

      <div className="prose prose-gray max-w-none">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The Verified Spec Table</h2>
        <p className="text-sub leading-relaxed mb-4">
          Straight from Walmart's Product Detail Page image guidelines, cross-checked against the live Marketplace Learn page. If another guide contradicts this table, this table wins:
        </p>
        <div className="overflow-x-auto mb-8 not-prose">
          <table className="w-full text-sm border border-line rounded-xl overflow-hidden">
            <thead className="bg-card">
              <tr className="text-left">
                <th className="font-heading font-semibold text-ink px-4 py-3 border-b border-line">Constraint</th>
                <th className="font-heading font-semibold text-ink px-4 py-3 border-b border-line">Walmart's requirement</th>
              </tr>
            </thead>
            <tbody className="text-sub">
              <tr><td className="px-4 py-2.5 border-b border-line">File format</td><td className="px-4 py-2.5 border-b border-line">JPEG, JPG, PNG, BMP — no GIF</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Color / bit depth</td><td className="px-4 py-2.5 border-b border-line">RGB, 8 bits per pixel</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Max file size</td><td className="px-4 py-2.5 border-b border-line">5MB — larger files fail submission</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Target dimensions</td><td className="px-4 py-2.5 border-b border-line">2200 x 2200 px</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Zoom minimum</td><td className="px-4 py-2.5 border-b border-line">1500 x 1500 px</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Swatch image</td><td className="px-4 py-2.5 border-b border-line">100 x 100 px where applicable</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Aspect ratio</td><td className="px-4 py-2.5 border-b border-line">1:1 (square)</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">Main image background</td><td className="px-4 py-2.5 border-b border-line">Seamless white, RGB 255/255/255</td></tr>
              <tr><td className="px-4 py-2.5 border-b border-line">File naming</td><td className="px-4 py-2.5 border-b border-line">14-digit GTIN recommended</td></tr>
              <tr><td className="px-4 py-2.5">Image count</td><td className="px-4 py-2.5">4+ distinct images recommended per listing</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The Wrong Numbers Everywhere</h2>
        <p className="text-sub leading-relaxed mb-4">
          Several popular optimization agencies publish "Walmart image requirement" guides with specs that do not appear in Walmart's documentation. Sellers build to these numbers and then wonder why uploads fail. Four of the most common fabrications:
        </p>
        <ul className="space-y-3 text-sub mb-6">
          <li><strong className="text-ink">"10MB file limit, minimum 640 x 480."</strong> Walmart's published figures are 5MB max and 2200 x 2200 target. A 2200 x 2200 Photoshop export can easily pass 5MB — build to the 5MB number or your bulk upload errors out item by item.</li>
          <li><strong className="text-ink">"Images under 500 x 500 are automatically unpublished."</strong> Walmart publishes a zoom minimum (1500 x 1500) and exactly one consequence sentence: "Noncompliance may result in products being unpublished." No pixel threshold is stated anywhere.</li>
          <li><strong className="text-ink">"The product must fill 85% of the frame."</strong> The actual wording is qualitative: crop the item as close as possible to the image frame and avoid excessive background space. There is no 85% rule.</li>
          <li><strong className="text-ink">"No human models or mannequins allowed."</strong> Not in the image guide. Apparel and many lifestyle-category secondary images routinely show models.</li>
        </ul>
        <p className="text-sub leading-relaxed mb-8">
          One more genuine regional quirk: Walmart's Canada guide lists a 1000 x 1000 zoom minimum while the US guide lists 1500 x 1500. If you sell cross-border, export masters at 2200 and both thresholds are covered — never ship a hero below 1500.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Main Image vs Secondary Images</h2>
        <p className="text-sub leading-relaxed mb-4">
          The white-background rule applies to the main image. What must never appear on it: watermarks, your logo or name, text claims, promotional language, Walmart or competitor retailer names, out-of-stock indicators, condition labels like "refurbished" or "grade A", accessories not included in the box, and duplicate frames. Stock photos are prohibited on Walmart entirely — the company's own FAQ answer is a flat no. That last point separates Walmart from eBay and, to a degree, Amazon: supplier photography you did not shoot is a policy violation, not just a quality problem.
        </p>
        <p className="text-sub leading-relaxed mb-8">
          Secondary slots (2 through 4+) are where angles, detail close-ups, packaging, and in-context shots live. A competitive set looks like: hero on pure white, one alternate angle, one material or hardware close-up, one in-context shot, plus a what's-in-the-box frame if it builds trust. Walmart's minimum of four distinct images assumes this spread.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Bulk Workflow for a Whole Catalog</h2>
        <p className="text-sub leading-relaxed mb-4">
          The three constraints that break most sellers at volume are the pure-white background, the square 2200 frame, and the 5MB ceiling — and all three can be handled in one pass without Photoshop:
        </p>
        <ol className="space-y-3 text-sub mb-8 pl-6">
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 1 — Drop backgrounds in bulk.</span><span>Load every supplier or studio photo into the <a href="/transparent-background/" className="text-accent hover:underline">transparent background tool</a>, choose White as the output. It composites onto exact RGB 255, 255, 255 — no off-white casts, no gray shadow edges. Processing runs locally in your browser, so a 300-SKU folder takes minutes and costs nothing.</span></li>
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 2 — Square the frame.</span><span>Crop or pad to 1:1 at 2200 x 2200. Any image below 1500 x 1500 on its short edge will lose zoom, so upscale small supplier files before this step, not after.</span></li>
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 3 — Clamp file size under 5MB.</span><span>Run the set through the <a href="/batch-image-compressor/" className="text-accent hover:underline">batch image compressor</a> as JPEG. A 2200 x 2200 JPEG at quality 85-90 lands around 1-2MB with no visible loss — comfortably under the cap.</span></li>
          <li className="flex gap-3"><span className="font-semibold text-ink flex-shrink-0">Step 4 — Rename to GTIN and upload.</span><span>Rename each file to its 14-digit GTIN before bulk upload so images bind to the correct items without manual matching. If you also sell on Amazon, the same white-background masters work there — the two platforms converge on RGB 255 heroes, as covered in our <a href="/blog/amazon-image-rejected/" className="text-accent hover:underline">Amazon rejection guide</a>.</span></li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Content Quality Score: The Soft Constraint With Teeth</h2>
        <p className="text-sub leading-relaxed mb-4">
          Walmart scores listing content (images included) and low scores suppress placement even when nothing is technically "rejected". The guide explicitly warns that low-resolution images pull down the score. Practically: 72 ppi screen-grab images out of a PDF get flagged; 300 ppi exports of the same pixels do not. If your supplier hands you files straight from a spec sheet PDF, re-export at print resolution before the bulk pass, or everything else about the listing won't matter.
        </p>
        <ul className="space-y-2 text-sub mb-8">
          <li><strong className="text-ink">Checking the wrong spec sheet:</strong> third-party guides with fabricated numbers (above) waste prep time — verify against Marketplace Learn before rebuilding a catalog.</li>
          <li><strong className="text-ink">Transparent PNG as hero:</strong> accepted format, noncompliant background. Flatten onto white first.</li>
          <li><strong className="text-ink">One image per listing:</strong> below Walmart's own four-image minimum; expect a content score penalty.</li>
          <li><strong className="text-ink">Non-English text in frames:</strong> prohibited. Infographic images in Chinese or Spanish fail review on US listings.</li>
        </ul>
      </div>

      <div className="mt-12 pt-8 border-t border-line">
        <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What size should Walmart marketplace product images be?", a: "Walmart's target is 2200 x 2200 pixels, square 1:1, with 1500 x 1500 as the zoom floor. Files must stay under 5MB. Images below the zoom minimum render without hover-zoom, which costs conversions on detail-heavy products." },
            { q: "Does Walmart require a white background on product images?", a: "Yes, for the main image: seamless white at exactly RGB 255, 255, 255. Off-white, gray shadow edges, and visible background seams all count as noncompliant. Secondary images can show context; stock photos are prohibited outright." },
            { q: "What file formats does Walmart accept?", a: "JPEG, JPG, PNG, and BMP, in RGB color at 8 bits per pixel. GIF is not permitted. Walmart recommends naming files with the 14-digit GTIN so bulk uploads map images to the right items." },
            { q: "Can I use transparent PNGs on Walmart?", a: "PNG is an accepted format, but the main image still needs a seamless white background, so transparency itself is noncompliant as a hero. Flatten onto pure white in bulk before uploading, then export JPEG to stay under 5MB." },
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
      </article>
    </>
  );
}
