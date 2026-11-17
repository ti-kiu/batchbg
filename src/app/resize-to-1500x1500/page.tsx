import type { Metadata } from "next";
import ResizerTool from "@/components/ResizerTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "How do I resize an image to exactly 1500×1500?",
    a: "Drop the files into the batch tool above — it is locked to exact 1500 × 1500. Square sources are resampled straight in; rectangular ones need a decision first: pad to a square (nothing lost, fill bands on two sides), center-crop to a square (nothing added, frame edges trimmed), or stretch (visibly wrong on photographs). For feed images export JPEG at quality 85–90 — a 2.25 MP square at q95 buys you nothing but file weight. The whole set leaves as one ZIP with filenames preserved, and everything runs in your browser: no upload, no account, no watermark.",
  },
  {
    q: "Why does Google recommend 1500×1500 for product images?",
    a: "Because it is the number Google can crop down from. The Merchant Center image_link spec states it directly: minimum 500 × 500 (enforced across all categories from January 31, 2027), and &ldquo;when possible, we recommend that you provide images around 1500x1500 pixels or above to ensure best performance in all listing formats.&rdquo; Shopping surfaces do not display one fixed size — the same image gets re-cropped for the shopping tab, image results, retailer badges, and mobile cards. A 1500² master keeps every derived crop sharp; a 500² compliant-minimum image falls apart the moment any surface magnifies it. 1500 is not a display size, it is crop headroom.",
  },
  {
    q: "Is 1500×1500 enough for Amazon, eBay, and Etsy too?",
    a: "Graded one honest file against five destinations: <strong>Google Shopping</strong> — this is literally the recommendation, pass. <strong>Amazon</strong> — passes the 1,000-px zoom threshold with margin, but sits below Amazon&rsquo;s own 2,000-px recommendation, so 1500 is fine for secondary images and a compromise for zoom hero mains. <strong>eBay</strong> — passes; it lands inside eBay&rsquo;s published &ldquo;800–1,600 pixels on the long side&rdquo; optimization window, the one marketplace where 1500 is not a compromise but nearly the stated ideal. <strong>Etsy</strong> — fails the guideline: longest side at least 2,000 px. <strong>Walmart</strong> — fails: 2,200 px on the longest side required. A 1500² export is a Google-first size; if the same folder also feeds Etsy or Walmart, export the <a>2000 page</a> batch instead and derive Google images by downsizing, never the reverse.",
  },
  {
    q: "What happens on January 31, 2027 — does 1500 become mandatory?",
    a: "No. The enforced floor from that date is 500 × 500 across all product categories (warnings in Merchant Center began April 14, 2026 for images under it, and images between the old 100 × 100 / 250 × 250 minima and 500 × 500 started warning in July 2026). What changes is where the floor lifts: anything under 500² stops serving outright, so years of &ldquo;compliant&rdquo; 250² thumbnails get culled from feeds. 1500 × 1500 stays a recommendation, not a rule — but it is the recommendation that decides how your images look on the surfaces that crop them. Fixing a feed before the enforcement date is a batch job, not a re-shoot: normalize folder-wide to 1500² in one pass and re-submit.",
  },
  {
    q: "Can I upscale a 500×500 image to 1500×1500 to hit the recommendation?",
    a: "You can push the pixels, and the feed validator will accept the dimensions — Google&rsquo;s own Diagnostics flags what that actually produces as &ldquo;Low image quality,&rdquo; separate from &ldquo;Image too small.&rdquo; Upscaling triples linear resolution without adding a pixel of detail: a 500 px photo stretched to 1500 shows smeared edges and block artifacts exactly where Google&rsquo;s automated crops zoom in. This is also why the 16 MB and 64-megapixel ceilings exist far above this size — the game is not filling a frame, it is feeding surfaces that magnify into it. Re-export from the original file or re-shoot; if neither exists, a clean 500² (compliant, small) beats a fake 1500² (dimensionally compliant, quality-flagged).",
  },
  {
    q: "Can I batch-resize many images to 1500×1500 for free?",
    a: "Yes — the tool above takes any number of files, applies the locked 1500 × 1500 target in one pass, and exports a single ZIP with original filenames intact so feed CSVs still match row-for-row. It is free because the Canvas resize runs on your machine: no upload, no quota, no watermark, nothing leaves the browser. The typical job at this size is a Merchant Center feed cleanup — hundreds of mixed-size product photos brought to uniform 2.25 MP squares ahead of the 2027 enforcement — or preparing 1500² masters for surfaces like Google image search that display cropped derivatives.",
  },
];

export const metadata: Metadata = {
  title: "Resize Image to 1500×1500 — Google Shopping Size, Batch Free | BatchBG",
  description:
    "Resize one image or a whole product feed to exactly 1500×1500 px — Google Merchant Center's recommended size. What the 2027 500×500 enforcement really changes, where 1500×1500 passes or fails each marketplace, and the upscale trap. Free in-browser batch tool, ZIP export, no upload.",
  keywords:
    "resize image to 1500x1500, 1500x1500 image resizer, resize to 1500x1500 pixels, google shopping image size, merchant center image requirements 1500, batch resize 1500x1500, product feed image",
  alternates: { canonical: "https://batchbg.com/resize-to-1500x1500/" },
  openGraph: {
    title: "Resize Image to 1500×1500 — The Size Google Asks For, In Batch",
    description:
      "Exact 1500×1500 for product feeds — plus why Google recommends this number, what the January 2027 500×500 enforcement actually changes, and the per-marketplace pass/fail. Runs in your browser, ZIP export, no upload.",
    url: "https://batchbg.com/resize-to-1500x1500/",
  },
};

export default function Resize1500() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/<\/?a>/g, "").replace(/<\/?strong>/g, "") },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BatchBG — Resize to 1500×1500",
    url: "https://batchbg.com/resize-to-1500x1500/",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Resize many images to exactly 1500×1500 px",
      "Fit-inside mode for mixed-orientation feed folders",
      "JPEG, PNG or WebP output with quality control",
      "ZIP export with filenames preserved for feed CSVs",
      "100% in-browser — no upload, no account",
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Resize Images to 1500×1500: Google's Recommended Feed Size and the 2027 Floor Change",
    description:
      "Why Merchant Center recommends 1500×1500 (crop headroom, not display size), what the January 31, 2027 500×500 enforcement actually changes, how one 1500² JPEG grades against five marketplaces, and the low-image-quality upscale trap — plus a correct batch pipeline that never uploads.",
    author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    url: "https://batchbg.com/resize-to-1500x1500/",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Resize to 1500×1500", url: "https://batchbg.com/resize-to-1500x1500/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Resize to 1500 × 1500 — In One Batch
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            The answer up front: 1500 × 1500 is the number Google itself puts in its spec — Merchant Center recommends product images &ldquo;around 1500x1500 pixels or above,&rdquo; and it is the only square size on the internet whose source is a search engine. Drop a feed folder above and every file leaves as an exact 1500 × 1500 in one ZIP. Nothing uploads.
          </p>
        </div>
        <ResizerTool initialMode="exact" initialExact={{ w: 1500, h: 1500 }} initialPreset={-2} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">
            Why Google Chose 1500 — It Is Crop Headroom, Not a Display Size
          </h2>
          <p className="text-sub leading-relaxed mb-4">
            Most resize pages quote 1500 × 1500 without saying where it comes from. It comes from the Google Merchant Center <em>image_link</em> spec, in writing: at least 500 × 500, &ldquo;when possible, we recommend that you provide images around 1500x1500 pixels or above to ensure best performance in all listing formats,&rdquo; with ceilings at 64 megapixels and 16 MB. The phrase doing the work is <em>all listing formats</em>. Your one product image does not display at one size — Google re-frames it for the shopping tab, image results, retailer badges, comparison cards, and phone screens, and the platform crops and magnifies <em>into</em> your file. A 500² image that is technically compliant collapses at the first crop that zooms; a 1500² master leaves every derived surface sharp. 1500 is exactly 2.25 megapixels — 15× the enforced floor&rsquo;s area — which is the headroom Google pays itself for when it tests &ldquo;subtle cropping&rdquo; on your image, a behavior its own help page discloses. If you serve the floor, you are serving Google a file it must invent detail into. The full batch tool is on the <a href="/bulk-image-resizer/" className="text-accent hover:underline">bulk image resizer</a> if you want unlocked dimensions instead of this lock.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            January 31, 2027: What the Enforcement Date Actually Changes
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Google announced a specification update that lifts the <strong>minimum</strong> to 500 × 500 across every product category, warnings live since April 14, 2026, enforcement on <strong>January 31, 2027</strong>. Read the dates carefully, because the feed community keeps misreading this: the hard rule that arrives is <em>not</em> 1500 — it is the floor under it. What dies on that date is the decade-old allowance of 100 × 100 (non-apparel) and 250 × 250 (apparel) images; every thumbnail that scraped by at 250² stops serving entirely. The recommendation stays exactly where it was, which means the strategic move has a clock on it: a feed full of 500²–1000² images passes 2027 but still looks cropped-down next to competitors exporting at Google&rsquo;s recommended 1500². Normalizing the folder to 1500 × 1500 <em>before</em> the enforcement panic — as one ZIP pass, filenames intact so your feed CSV still matches row-for-row — is a Tuesday afternoon job here, not a Q1 2027 re-shoot project. The companion compliance mechanics (feed-safe backgrounds, what Google disapproves on sight) share ground with the <a href="/amazon-white-background/" className="text-accent hover:underline">white-background spec page</a>.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            Pass / Fail: One 1500 × 1500 JPEG Against Five Destinations
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            1500 is a Google number — but feed folders rarely feed one shelf. The same honest grading as the other size pages: <span className="font-semibold text-ink">Google Shopping</span> — this is the stated recommendation itself; pass on every surface. <span className="font-semibold text-ink">Amazon</span> — clears the 1,000-px zoom threshold with 50% margin, but sits below Amazon&rsquo;s recommended 2,000+ px, so it is fine for secondary images and a compromise for hero mains that get magnified (the <a href="/resize-to-1000x1000/" className="text-accent hover:underline">1000 page</a> grades that gate; the <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000 page</a> is Amazon&rsquo;s own answer). <span className="font-semibold text-ink">eBay</span> — passes, and this is the sleeper result: eBay&rsquo;s published photo-tips window is <em>800–1,600 px on the long side</em>, making 1500² the rare size that is simultaneously Google&rsquo;s recommendation and nearly eBay&rsquo;s stated ideal — eBay is the marketplace where 1500 is not a downgrade at all. <span className="font-semibold text-ink">Etsy</span> — fails the guideline (longest side ≥ 2,000 px). <span className="font-semibold text-ink">Walmart</span> — fails (2,200 px required on the longest side). One export, three verdicts by shelf. Multi-channel folders should export masters at 2000² and derive the 1500² Google feed by downsizing — never upscale upward — or run the same folder through both locks.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            The Upscale Trap, Now With a Second Failure Mode
          </h3>
          <p className="text-sub leading-relaxed mb-4">
            Every digital-size page warns against manufacturing pixels; at 1500 the trap is worse, because Google split the diagnostics into two buckets and stretching walks into the second one. A 500² image forced to 1500 clears &ldquo;Image too small&rdquo; — the validator reads dimensions, not detail — and lands in <strong>&ldquo;Low image quality&rdquo;</strong>, a separate warning Google introduced precisely because the 2027 floor change would otherwise trigger a mass upscale epidemic. Three times the linear resolution from the same source photo means smeared edges and doubled JPEG blocks exactly in the regions where Google&rsquo;s automated crops zoom. Flat graphics tolerate ~1.6× invisibly; 3× never works on photographs. The honest ladder: re-export from the original file, re-shoot, or ship a clean true 500² that is compliant-but-small instead of dimensionally-compliant-but-flagged. Before uploading a normalized folder, the <a href="/bulk-background-screening/" className="text-accent hover:underline">bulk screening pass</a> finds sub-floor and off-white offenders in one sweep; if 1500² files come out heavier than the feed needs, one <a href="/batch-image-compressor/" className="text-accent hover:underline">batch compression</a> pass fixes weight without touching dimensions.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">
            A 1500 Batch Pipeline (Feed Normalization Ahead of 2027)
          </h3>
          <ol className="text-sub text-sm space-y-2 mb-4">
            <li>Sort the destination first: Google-first feeds and eBay listings (this page) vs. Amazon hero mains and Etsy/Walmart shelves (use <a href="/resize-to-2000x2000/" className="text-accent hover:underline">2000 × 2000</a> as master and downsize from it).</li>
            <li>If mains sit on wrong or off-white backgrounds, fix them before sizing — <a href="/remove-background-from-multiple-images/" className="text-accent hover:underline">batch background removal</a> at original resolution beats edge math at 1500 px.</li>
            <li>Drop the folder here: exact 1500 × 1500 for uniform squares; pad or center-crop per image as the subject allows — a crop that cuts the product is worse than a pad band.</li>
            <li>Export JPEG quality 85–90. At 2.25 MP there is no display surface where q95 is visible and the feed is 30% lighter at 85.</li>
            <li>Download the ZIP with filenames preserved so the feed CSV matches row-for-row, then check Diagnostics in Merchant Center for &ldquo;Image too small for upcoming enforcement&rdquo; disappearing — that queue is the scoreboard for this job.</li>
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
                <p className="text-sub text-sm mt-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a.replace(/<a>2000 page<\/a>/, '<a class="text-accent hover:underline" href="/resize-to-2000x2000/">2000 page</a>') }}></p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
