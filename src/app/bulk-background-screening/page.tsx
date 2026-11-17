import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "Is bulk background screening the same as bulk background removal?",
    a: "No — they are two different jobs and doing them in the wrong order is how catalogs get expensive. Screening is a read-only pass: you check every image in a folder against a platform's background rules (corner pixels pure white, product fill above threshold, no text or watermark intrusion) and get a pass/fail verdict per file. Removal is a write pass that regenerates the image. A 1,000-SKU catalog typically has 5–15% background violations; screening first means you only re-cut the 50–150 files that actually fail instead of paying — in credits or in time — to process a thousand.",
  },
  {
    q: "What exactly does the screening check on each image?",
    a: "Three things, all computed from the pixels rather than the filename. First, corner color: the tool samples the four corners of the frame and reports whether they hit the platform's required value — Amazon's validator flags anything above RGB 250,250,250, so an off-white 252 is a fail even though it looks white on your monitor. Second, subject fill: the share of the frame the product occupies, checked against rules like Amazon's 85% minimum. Third, geometry: whether the export meets the size ladder (1,000 px minimum for zoom, 2,000 px recommended). The verdict line under each thumbnail shows the measured corner color, fill rate, and width so you know why something failed, not just that it did.",
  },
  {
    q: "Can I screen images that are already on white backgrounds?",
    a: "Yes, and that is the main use case. Most catalog rejections are not missing-white-background images — they are off-white scans, images with a gray gradient in one corner, product photos where the shadow anchor survived, or files where the product fills only 60% of the frame. Screening catches exactly those. If a file fails because the background is genuinely wrong, the same page runs the fix: drop it into the transparent/white export pass and re-screen it after.",
  },
  {
    q: "Does screening upload my images anywhere?",
    a: "No. The screen runs in your browser — the corner sampling, fill computation, and size checks all happen on your machine, so a pre-launch catalog never leaves your laptop. That also means there is no per-file fee: a 3,000-image screen costs the same as a 30-image screen, which is the opposite of credit-metered services where every check that involves an export is charged.",
  },
  {
    q: "How often should I re-screen a catalog?",
    a: "Two triggers. Operationally, screen every batch the moment it comes back from the photographer or the outsourcing vendor, before uploading — a vendor's template change can quietly push corner values to 251 for a whole month of SKUs. Platform-wise, re-screen when a marketplace updates its image policy, because the rules that decide pass/fail move: Amazon automated its background-color validation in 2026 and Walmart tightened its 1:1 crop behavior. A quarterly full-catalog screen is a reasonable floor for sellers with more than ~500 SKUs.",
  },
];

export const metadata: Metadata = {
  title: "Bulk Background Screening — Check 1,000 Images Against Platform Rules | BatchBG",
  description:
    "Screen a whole folder for background compliance before you upload: corner-pixel white check, subject fill rate, size ladder — pass/fail per file, running locally in your browser. Free, unlimited, no upload.",
  keywords:
    "bulk background screening, background compliance check, image QC batch, check white background multiple images, bulk background check tool",
  alternates: { canonical: "https://batchbg.com/bulk-background-screening/" },
  openGraph: {
    title: "Bulk Background Screening — Find the 5% of Your Catalog That Will Get Rejected",
    description:
      "A read-only compliance pass over a whole folder: corner color, subject fill, size checks against Amazon, Walmart, eBay and Etsy rules. Runs on your machine, free, unlimited.",
    url: "https://batchbg.com/bulk-background-screening/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function BulkBackgroundScreening() {
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
      <BreadcrumbSchema items={[{ name: "Bulk Background Screening", url: "https://batchbg.com/bulk-background-screening/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bulk Background Screening: Check a Whole Catalog Against Marketplace Rules Before You Upload",
            description:
              "How a read-only background-compliance pass works — corner-pixel sampling, subject fill measurement, size-ladder checks — and why screening before re-cutting is the cheapest order of operations for 500–5,000 SKU catalogs.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-11-04",
            dateModified: "2026-11-04",
            url: "https://batchbg.com/bulk-background-screening/",
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
            Bulk Background Screening
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Drop a whole folder and every image gets a verdict against the actual upload rules: corner pixels at RGB 255 (Amazon&apos;s validator fails anything above 250), subject fill &ge; 85%, size on the 1,000/2,000 px ladder. Screening is read-only &mdash; nothing is re-cut, nothing is uploaded, nothing is charged &mdash; so you only spend time fixing the files that actually fail.
          </p>
        </div>
        <BackgroundRemoverTool config={{ mode: "audit", defaultBg: "white", showSwatches: false, lockedSpec: { width: 2000, height: 2000, fill: 85, format: "JPEG" }, label: "Screen a Folder — Pass/Fail Against Amazon-Class Rules" }} />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Screen first, re-cut second — the order is the whole saving</h2>
        <p className="text-sub leading-relaxed mb-4">
          Most rejected catalog uploads are not images with missing backgrounds. They are images whose background is 98% right: a scan whose corner reads RGB 251, a photo where the product fills 62% instead of 85%, a template that quietly exported 1,600 px instead of the 2,000 px the zoom feature wants. A bulk <em>remover</em> can&apos;t see any of that — it just regenerates files you may not need regenerated. A screening pass reads every pixel against the rules, tells you which files violate which rule, and shrinks the repair job from &ldquo;re-process the catalog&rdquo; to &ldquo;fix these 80 files.&rdquo; The full rules-by-platform table lives on our <a href="/product-photo-background-remover/" className="text-accent underline">product photo background remover</a> spec sheet; this page is the check step that consumes it.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">What a screening verdict is made of</h2>
        <p className="text-sub leading-relaxed mb-4">
          Three measurements, taken locally in your browser, one per file:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="text-left border-b-2 border-line">
                <th className="py-2 pr-4 font-semibold text-ink">Check</th>
                <th className="py-2 pr-4 font-semibold text-ink">What the tool measures</th>
                <th className="py-2 font-semibold text-ink">Which rule it maps to</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">Corner color</td>
                <td className="py-3 pr-4">Samples the four corners of the frame; fails if any corner drifts off pure white.</td>
                <td className="py-3">Amazon RGB 255 requirement and its 2026 automated validator (above 250 = flagged); Walmart/Etsy want the same visually, enforced at review instead of by machine.</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">Subject fill</td>
                <td className="py-3 pr-4">Computes the share of the frame the non-background pixels occupy.</td>
                <td className="py-3">Amazon&apos;s 85% minimum fill on main images; long-tail eBay frames that leave product tiny in a big white field.</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">Size ladder</td>
                <td className="py-3 pr-4">Reports export width/height against the threshold that unlocks features.</td>
                <td className="py-3">Zoom needs &ge; 1,000 px (recommended 2,000); Walmart wants 2,200 px square; Shopify&apos;s ceiling is 5,000 px / 25 MP — see the <a href="/shopify-product-image-size/" className="text-accent underline">Shopify size guide</a>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub leading-relaxed mb-4">
          Every verdict line under a thumbnail shows the measured values &mdash; corner color, fill percent, pixel width &mdash; not just a red tick. A fail you can&apos;t diagnose is a fail you can&apos;t fix: &ldquo;corner 252&rdquo; means re-export from the source, while &ldquo;fill 61%&rdquo; means crop or re-place the cutout, and those are different repairs in your workflow.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The screening-then-repair loop</h2>
        <p className="text-sub leading-relaxed mb-4">
          1. <strong className="text-ink">Screen the folder as-is.</strong> Drop everything the photographer or vendor delivered. Nothing changes on disk; you get pass/fail per file plus the measurements. 2. <strong className="text-ink">Export only the fails list.</strong> In practice this is 5–15% of a healthy catalog, 30%+ right after a vendor changes templates. 3. <strong className="text-ink">Repair in one pass.</strong> The failed files go straight through the batch remover set to white — the same u2netp model our <a href="/bulk-background-remover/" className="text-accent underline">bulk background remover</a> uses, exporting RGB-255 corners at original resolution. 4. <strong className="text-ink">Re-screen the repaired set</strong> before upload; corner and fill re-measure free, because the check runs on your machine. 5. Keep the loop as a gate: no batch reaches a marketplace console without a green screen pass first.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          For scale, the arithmetic follows the same lines as our <a href="/large-batch-background-remover/" className="text-accent underline">large-batch numbers page</a>: a screen pass is decode + sample + compute — cheaper per image than a removal run, since no segmentation inference happens. Folders in the low thousands stay within browser memory; beyond roughly a gigabyte of input, split by category folder like any bulk job.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Why the check has to be bulk</h2>
        <p className="text-sub leading-relaxed mb-4">
          Spot-checking is how catalogs get suppressed. A supplier re-shoots 400 SKUs with a slightly gray studio sweep; the first ten look white on a calibrated monitor; uploads go out; Amazon&apos;s automated validator rejects them in a batch days later and the listing traffic resets. Screening is the cheap insurance step that makes rejections impossible to batch: every file is measured against the same numeric threshold, not against someone&apos;s eyeball at 11pm. The same logic applies after any <a href="/transparent-background/" className="text-accent underline">transparent-background export</a> you plan to flatten to white for a marketplace &mdash; flatten, then screen, don&apos;t flatten and assume.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">What this is not</h2>
        <p className="text-sub leading-relaxed mb-4">
          To keep expectations honest: &ldquo;background screening&rdquo; outside e-commerce usually means pre-employment checks, and no image tool fixes those. Within images, this page screens the background layer only — it does not judge whether the product itself is in focus, whether colors match your physical goods, or whether a competitor has snapped your photo; those stay human calls. The verdict is machine-precise on the three measurable rules (corner, fill, size) and silent on everything else.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Frequently asked questions</h2>
        {faqData.map((faq) => (
          <div key={faq.q} className="mb-6">
            <h3 className="font-heading font-semibold text-ink text-lg mb-2">{faq.q}</h3>
            <p className="text-sub leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </article>
    </>
  );
}
