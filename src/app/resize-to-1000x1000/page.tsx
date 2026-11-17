import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "How do I resize an image to exactly 1000×1000?",
    a: "Drop the files into the batch tool above — it is locked to exact 1000 × 1000. Square sources just get resampled; rectangular ones need a decision first: pad to a square (nothing lost, bands of fill on two sides), center-crop to a square (nothing added, frame edges trimmed), or stretch (always visibly wrong on photos). Export JPEG at quality 85–90 for product shots, PNG if transparency must survive, and download the whole set as one ZIP. Everything runs in your browser — no upload, no account, no watermark.",
  },
  {
    q: "Is 1000×1000 enough for Amazon product images?",
    a: "It is exactly the threshold that turns zoom on — and nothing more. Amazon's published rule is 1,000+ pixels on the longest side to enable the zoom function; the upload minimum is 500 px and the maximum 10,000 px. A 1000 × 1000 square clears the zoom gate with the fewest pixels any square can. But Amazon separately recommends 2,000+ px, because a 1000-px image magnified on a retina desktop shows soft edges and JPEG blocks. So 1000 × 1000 is the compliance floor, 2000 × 2000 is the quality target — use this size when file weight matters (large catalogs, slow-connection shoppers, form uploads), not when zoom sharpness sells the product.",
  },
  {
    q: "Does the 1000-pixel rule count width and height, or just the long edge?",
    a: "Just the long edge — and this is the most-misread number in e-commerce image specs. Amazon's zoom requirement fires on the longest side ≥ 1,000 px, so a 1333 × 1000 or a 2000 × 1500 image enables zoom too; nobody at Amazon requires a square. The square is a convention, not a spec: uniform 1:1 tiles keep catalog grids tidy, and resizing a mixed folder to 1000 × 1000 is the cheapest way to guarantee every image passes the threshold regardless of orientation. If your real constraint is 'longest side ≥ 1000', fit-inside mode at 1000 does that without forcing the square.",
  },
  {
    q: "Can I just upscale a 600 px photo to 1000×1000 to pass the check?",
    a: "You can, and Amazon says not to — their image guide explicitly warns against artificially enlarging small images, and listing teams do suppress obviously upscaled mains. Upscaling adds pixels, not detail: a 600 px photo at 1000 shows smeared edges and doubled compression artifacts under zoom, which is precisely the surface customers magnify into. Flat graphics (logos on white, simple packaging) upscale ~1.6× almost invisibly; photographs do not. The honest moves: re-export from a larger original, re-shoot, or keep the true size and accept no zoom. This tool resizes without silently upscaling beyond what you ask for.",
  },
  {
    q: "What is the difference between 1000×1000 and 1024×1024?",
    a: "One is a human round number, the other a machine one. 1000 × 1000 is exactly 1 megapixel and is the number marketplaces write their policies around — Amazon's zoom threshold, countless form upload limits. 1024 × 1024 is 2^10 (1,048,576 px) and is what software stacks standardize on: Apple's app-icon master, SDXL's native diffusion canvas. They are 2.4% apart visually but serve different worlds: if the image feeds a marketplace listing or an upload form, the spec said 1000 and you should use 1000; if it feeds an app build or an AI pipeline, use the <a>1024 page</a>. Do not round-trip a JPEG between the two repeatedly — each re-encode costs a generation of quality.",
  },
  {
    q: "Can I batch-resize many images to 1000×1000 for free?",
    a: "Yes — the tool above accepts any number of files, applies the locked 1000 × 1000 target to all of them in one pass, and exports a single ZIP with original filenames preserved. It is free because the Canvas resize runs on your machine: no upload, no quota, no watermark, nothing leaves the browser. The typical bulk job at this size is a catalog normalization — mixed phone photos and scans brought to uniform 1 MP squares before a marketplace upload — or trimming oversized exports down to the zoom floor when file weight per listing is the constraint.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 1000×1000 — Amazon Zoom Floor, Batch Free | BatchBG",
  description:
    "Resize one image or a whole catalog folder to exactly 1000×1000 px. What Amazon's 1,000-pixel zoom rule really measures, where 1000×1000 passes and fails each platform, and the upscale trap sellers hit. Free in-browser batch tool, ZIP export, no upload.",
  keywords:
    "resize image to 1000x1000, 1000x1000 image resizer, resize to 1000x1000 pixels, batch resize 1000x1000, amazon zoom 1000 pixels, 1000x1000 product image",
  alternates: { canonical: "https://batchbg.com/resize-to-1000x1000/" },
  openGraph: {
    title: "Resize Image to 1000×1000 — The Zoom Floor, In Batch",
    description:
      "Exact 1000×1000 for marketplace listings — plus what Amazon's 1,000-pixel rule actually measures, the per-platform pass/fail, and the upscaling trap. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-1000x1000/",
  },
};

export default function Resize1000() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/<\/?a>/g, "") },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BatchBG — Resize to 1000×1000",
    url: "https://batchbg.com/resize-to-1000x1000/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 1000×1000 px",
      "Fit-inside mode for mixed-orientation folders",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 1000×1000: Amazon's Zoom Floor and Where That Number Actually Holds",
    description:
      "What the 1,000-pixel threshold really measures (longest side, not square), which platforms a 1000×1000 export passes or fails, and why the anti-upscaling clause matters — plus a correct batch pipeline that never uploads.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-08",
    dateModified: "2026-11-08",
    url: "https://batchbg.com/resize-to-1000x1000/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 1000×1000", url: "https://batchbg.com/resize-to-1000x1000/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 1000 × 1000 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 1000 × 1000 is the compliance floor of e-commerce imaging — exactly 1 megapixel, and the smallest square that clears Amazon&rsquo;s 1,000-pixel zoom threshold. Drop a catalog folder above, and every file leaves as an exact 1000 × 1000 in one ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 1000, h: 1000 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            What the 1,000-Pixel Rule Actually Measures
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Amazon&rsquo;s product image guide is precise in a way most resize pages are not: images under <strong>500 px on the longest side</strong> cannot be uploaded, images with <strong>1,000+ pixels on the longest side enable the zoom function</strong>, and the ceiling is 10,000 px. Read that twice — the zoom gate fires on the <em>longest side</em>, not on width and height both. A 1333 × 1000 landscape and a 2000 × 1500 scan enable zoom just as well as any square. So why does everyone resize to 1000 × 1000? Because a uniform 1:1 tile is the cheapest way to guarantee the threshold for a mixed folder of photos in every orientation at once, and 1000 × 1000 is exactly 1,000,000 pixels — 1 MP, a round number a listing CSV author can reason about. If you serve a rectangular image at 1000 on the long edge you pass; if you force the square you also keep the grid. Both are legitimate; only one of them is actually <em>required</em>. The tool above is locked to the square, and the <a href="/bulk-image-resizer/" className="text-accent hover:underline">full resizer</a> has a fit-inside mode for the long-edge reading.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            1000 Is the Floor, Not the Target
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            The same guide that sets 1,000 as the zoom trigger recommends <strong>2,000 px or more</strong> — and those two numbers are not in conflict, they are a floor and a ceiling of expectation. At 1000 × 1000 the zoom feature switches on, then a customer on a retina display magnifies into a 1 MP image and finds soft edges and JPEG blocks at 200%. Where 1000 × 1000 genuinely wins: file-weight budgets across thousands of SKUs, slow-connection markets, upload forms that cap dimensions or size, and thumbnails derived from larger masters. Where it loses: the hero main image of anything inspected closely — jewelry, fabric, food — which is why the marketplace default most sellers should actually export is the <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000 × 2000</a> size that satisfies zoom plus perceived sharpness in one file. Pick the floor when weight is the constraint; pick the square-catalog target when zoom sharpness sells.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Pass / Fail: One 1000 × 1000 JPEG Against Five Destinations
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            The number that made this page famous is Amazon&rsquo;s, but catalogs go places. A single exact 1000 × 1000 export, honestly graded: <span className="font-semibold text-ink">Amazon</span> — passes upload (500 min), zoom switches on (longest side ≥ 1,000), under the 2,000 recommendation; fine for secondary images, a compromise for mains. <span className="font-semibold text-ink">eBay</span> — passes the minimum, below the 1600-px recommendation. <span className="font-semibold text-ink">Etsy</span> — fails: the guideline is a longest side of at least 2,000 px. <span className="font-semibold text-ink">Walmart</span> — fails: 2,200 px on the longest side is required. <span className="font-semibold text-ink">Shopify</span> — works, but HD theme thumbnails want 2048+, so 1000 looks dated on a modern theme. One spec does not serve all shelves; the per-platform table with legal background values lives on the <a href="/product-photo-background-remover/" className="text-accent hover:underline">product photo spec page</a>, and the white-background mechanics Amazon enforces (pure RGB 255, 255, 255, not &ldquo;looks white&rdquo;) are on the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon background page</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            The Upscale Trap — and Amazon&rsquo;s Sentence About It
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            The fast way to &ldquo;hit 1000 px&rdquo; is to drag a small image into any resizer and type the number. Amazon&rsquo;s guide closes that door explicitly: <em>do not artificially enlarge small images.</em> Listing review teams suppress obviously upscaled mains, and customers who zoom are the worst audience for them — upscaling adds pixels, not detail, and a 600 px photo forced to 1000 magnifies its own blur. Flat artwork (a logo on white, simple packaging) survives 1.6× almost invisibly; photographs never do. If the only copy you own is small, re-export from the original file, re-shoot, or keep the honest size and lose zoom — do not manufacture a threshold. The bulk audit pass for finding sub-1000 and off-white offenders across a folder before upload is <a href="/bulk-background-screening/" className="text-accent hover:underline">bulk background screening</a>; the reverse problem — 1000 × 1000 files still too heavy — is a one-pass <a href="/batch-image-compressor/" className="text-accent hover:underline">batch compression</a> job.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 1000 Batch Pipeline (Catalog Normalization)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Sort the destination first: floor-for-weight or form-upload limits (this page) vs. sharp-zoom hero mains (use <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000 × 2000</a> instead).</li>
            <li>If mains sit on wrong backgrounds, fix them before sizing — <a href="/remove-background-from-multiple-images/" className="text-accent hover:underline">batch background removal</a> at original resolution beats edge math at 1000 px.</li>
            <li>Drop the folder here: exact 1000 × 1000 for uniform squares; pad or center-crop per image as the subject allows.</li>
            <li>Export JPEG quality 85–90 for photographs — at 1 MP there is no reason to bleed file weight on q95.</li>
            <li>Download the ZIP with filenames preserved so listing CSVs still match, and spot-check one long-edge case (e.g. 1333 × 1000) if your platform reads the rule literally.</li>
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
                <p className="text-sub text-sm mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a.replace(/<a>1024 page<\/a>/, '<a class="text-accent hover:underline" href="/resize-to-1024x1024/">1024 page</a>') }}></p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
