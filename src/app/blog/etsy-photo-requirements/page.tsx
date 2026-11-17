import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Etsy Listing Photo Requirements (2026) — Sizes, Backgrounds, Batch Fix | BatchBG",
  description:
    "Etsy wants 1000px+ images, but unlike Amazon it does NOT force white backgrounds. The full 2026 spec list, what actually converts, and how to prep a whole shop's photos in one batch — free.",
  keywords:
    "etsy listing photo requirements, etsy photo size 2026, etsy product photo background, etsy listing images specs, batch edit etsy photos",
  alternates: { canonical: "https://batchbg.com/blog/etsy-photo-requirements/" },
  openGraph: {
    title: "Etsy Listing Photo Requirements (2026) — The Complete Spec Sheet",
    description: "Exact sizes, file rules, background policy, and a one-batch workflow to make a whole catalog compliant.",
    url: "https://batchbg.com/blog/etsy-photo-requirements/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function EtsyPhotoRequirements() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "https://batchbg.com/blog/etsy-photo-requirements/" }]} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Etsy Listing Photo Requirements (2026): Sizes, Backgrounds, and the Batch Workflow",
            description: "Etsy's image specs in one place, what the platform actually enforces versus what sellers assume, and a free bulk prep workflow.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-10",
            dateModified: "2026-10-10",
            url: "https://batchbg.com/blog/etsy-photo-requirements/",
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
              { "@type": "Question", name: "What size should Etsy listing photos be?", acceptedAnswer: { "@type": "Answer", text: "Minimum 500px on the shortest side, but Etsy recommends at least 2000px so the zoom tool works. The first (hero) image displays in a 4:3-friendly square crop in search, so center your subject with breathing room on all sides. Files up to 20MB, JPG or PNG." } },
              { "@type": "Question", name: "Does Etsy require white backgrounds like Amazon?", acceptedAnswer: { "@type": "Answer", text: "No. Etsy explicitly allows lifestyle and contextual backgrounds on the main image — the opposite of Amazon's pure-white rule. What Etsy bans is stock photos, mockups presented as the product itself, and blurry or poorly lit images. Clean, well-lit, uncluttered is what actually wins." } },
              { "@type": "Question", name: "How many photos does an Etsy listing allow?", acceptedAnswer: { "@type": "Answer", text: "10 images plus 1 video per listing. Use slot 1 for the product alone (best for search tiles), slots 2-4 for scale/detail shots, 5-8 for in-context lifestyle, 9-10 for packaging or variants." } },
              { "@type": "Question", name: "How do I prep hundreds of Etsy photos at once?", acceptedAnswer: { "@type": "Answer", text: "Batch workflow: pull every listing photo through a browser-based editor that (1) resizes the long edge to 2000px+ for zoom eligibility, (2) removes the background for sellers who prefer clean white or neutral context shots, (3) exports at high quality with original filenames. A local tool like BatchBG processes 100+ images in one pass with no per-image fee." } },
            ],
          }),
        }}
      />
      <div className="mb-8">
        <p className="text-sub text-sm mb-2">October 10, 2026 · 6 min read</p>
        <div className="mb-6 rounded-xl overflow-hidden">
          <img src="/demo/handbag.jpg" alt="Etsy-style product photo with clean background" className="w-full h-48 object-cover" loading="lazy" />
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
          Etsy Listing Photo Requirements (2026)
        </h1>
        <p className="text-sub text-lg leading-relaxed">
          The short version: 500px minimum, 2000px+ for zoom, 10 images + 1 video per listing, 20MB max, and — unlike Amazon — <strong>no white background requirement</strong> on the main image. This page is the full spec sheet, the three rules Etsy actually enforces, and a batch workflow to make an entire shop compliant in one pass.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The Spec Sheet</h2>
        <div className="bg-card rounded-xl border border-line overflow-hidden mb-6 not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-white">
                <th className="text-left p-3 font-semibold">Item</th>
                <th className="text-left p-3 font-semibold">Etsy&apos;s requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr><td className="p-3 font-semibold text-ink">Minimum size</td><td className="p-3">500px on the shortest side (below this, upload is refused)</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Recommended size</td><td className="p-3">2000px long edge — zoom only works above roughly 1000px, and Etsy&apos;s own guidance says higher resolution shows better detail</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Max file size</td><td className="p-3">20MB per image</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Formats</td><td className="p-3">JPG and PNG (HEIC/WebP get converted on upload)</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Images per listing</td><td className="p-3">10 photos + 1 video</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Main image background</td><td className="p-3">Any — white, lifestyle, or contextual all allowed. Stock photos and mockups shown as the product are not</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Watermarks</td><td className="p-3">Not allowed on the main image; lightly tolerated in later slots</td></tr>
              <tr><td className="p-3 font-semibold text-ink">Video</td><td className="p-3">Up to 15 seconds, displays in the listing gallery</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">What Etsy Enforces vs What Sellers Assume</h2>
        <p className="text-sub leading-relaxed mb-4">
          Two assumptions cost sellers time here. First: &quot;Etsy wants white backgrounds like Amazon.&quot; It does not. Etsy&apos;s brand is handmade and personal — a mug photographed on a wooden table outperforms the same mug floating on white, because the platform&apos;s buyers shop for atmosphere, not catalog uniformity. Amazon&apos;s validator (<a href="/blog/amazon-image-rejected/" className="text-accent hover:underline">see the rejection triggers</a>) and Etsy&apos;s policy pull in opposite directions: sellers cross-listing on both platforms need <em>two</em> image sets — which is exactly a batch-processing problem, not a shooting problem.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          Second: &quot;any photo uploads fine.&quot; Etsy&apos;s automated checks do refuse files under 500px and above 20MB, and its photo-quality guidance actively demotes blurry, over-filtered, or stock imagery in search. The real enforcement is softer than Amazon&apos;s — conversion does the punishing instead of the validator.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Slot-by-Slot: How to Spend Your 10 Images</h2>
        <ol className="space-y-3">
          <li className="text-sub leading-relaxed"><strong className="text-ink">Slot 1 — hero.</strong> Product alone, sharp, well-lit, centered. Search tiles crop aggressively; the product should survive a square crop without losing edges.</li>
          <li className="text-sub leading-relaxed"><strong className="text-ink">Slots 2–4 — proof.</strong> Scale reference (hand, coin, common object), texture/detail close-up, back or underside. These cut &quot;looks bigger than it is&quot; returns.</li>
          <li className="text-sub leading-relaxed"><strong className="text-ink">Slots 5–8 — atmosphere.</strong> In use, in context. This is where Etsy beats Amazon: lifestyle shots are legitimate listing content here.</li>
          <li className="text-sub leading-relaxed"><strong className="text-ink">Slots 9–10 — variants and packaging.</strong> Color/size options together; what arrives in the box. Gift sellers: show the wrap.</li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Prepping a Whole Shop in One Batch</h2>
        <p className="text-sub leading-relaxed mb-4">
          If you migrate from Instagram-shot photos (usually 1080×1080, mixed lighting) or cross-list on Amazon (pure-white requirement), do not edit per-listing. The efficient path: put the whole folder through a batch pipeline that removes backgrounds and outputs clean cutouts you can drop onto either a white canvas (Amazon) or a lifestyle backdrop (Etsy). Browser-based bulk tools run locally — <a href="/transparent-background/" className="text-accent hover:underline">make backgrounds transparent in bulk</a> covers the cutout step; the <a href="/remove-background-from-product-photos/" className="text-accent hover:underline">product photo tutorial</a> covers marketplace-ready output. One pass, every SKU, filenames intact.
        </p>
        <div className="bg-card rounded-xl border border-line p-5 mb-6">
          <p className="text-sm text-sub leading-relaxed"><strong className="text-ink">Cross-listing tip:</strong> shoot once against any plain backdrop, then generate two batches from the same cutouts — White mode (RGB 255,255,255) for Amazon main images, transparent PNGs for Etsy slots 2–4 where you composite the product onto context yourself. That is how full-time resellers keep both storefronts fed without double the photography.</p>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-6 mt-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">What size should Etsy listing photos be?</h3>
            <p className="text-sub leading-relaxed">Minimum 500px on the shortest side; 2000px on the long edge is what you want so the zoom tool activates and detail shots stay crisp. Center the subject — search tiles crop toward a square.</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">Does Etsy require white backgrounds?</h3>
            <p className="text-sub leading-relaxed">No — unlike Amazon, Etsy allows lifestyle and contextual backgrounds on the main image. It refuses stock photos and blurry/over-filtered imagery instead. Clean and well-lit matters more than white.</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">How many photos per Etsy listing?</h3>
            <p className="text-sub leading-relaxed">10 images plus one 15-second video. Most sellers leave 3–4 slots empty; using all 10 is free real estate for objection-handling.</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">How do I prepare hundreds of photos at once?</h3>
            <p className="text-sub leading-relaxed">Batch: whole folder into a remover with local processing, cut out everything, then export two sets — white-fill for Amazon, transparent for Etsy composites. No per-image fees, filenames preserved, minutes instead of weekends.</p>
          </div>
        </div>
      </div>
      </article>
    </>
  );
}
