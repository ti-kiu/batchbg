import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Why Amazon Rejects Your White Background Images (7 Real Reasons) | BatchBG",
  description:
    "Amazon's automated image validator rejects listings for more than just 'not white enough.' Here are the 7 actual rejection triggers, the exact RGB thresholds, and how to fix a whole catalog in one batch.",
  keywords:
    "why does amazon reject my white background images, amazon product image requirements, amazon image rejected, amazon main image rules, amazon white background 255",
  alternates: { canonical: "https://batchbg.com/blog/amazon-image-rejected/" },
  openGraph: {
    title: "Why Amazon Rejects Your White Background Images — and How to Fix It in Bulk",
    description: "The 7 real rejection triggers, exact RGB thresholds, and a batch fix that clears a whole catalog.",
    url: "https://batchbg.com/blog/amazon-image-rejected/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function AmazonImageRejected() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "https://batchbg.com/blog/amazon-image-rejected/" }]} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Why Amazon Rejects Your White Background Images (7 Real Reasons)",
            description: "The actual triggers behind Amazon's automated image rejections, with exact thresholds and batch fixes.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-09",
            dateModified: "2026-10-09",
            url: "https://batchbg.com/blog/amazon-image-rejected/",
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
              { "@type": "Question", name: "What RGB value does Amazon require for product backgrounds?", acceptedAnswer: { "@type": "Answer", text: "The main image background must be pure white: RGB 255, 255, 255. Since early 2026, Amazon's automated validator flags backgrounds even a few values below that — anything above roughly RGB 250,250,250 in the corners fails. Off-white, light gray, and 'almost white' are the most common first-listing rejections." } },
              { "@type": "Question", name: "Why was my white background image still rejected?", acceptedAnswer: { "@type": "Answer", text: "Usually one of six other triggers: watermark or logo text baked into the image, product not filling at least 85% of the frame, extra props or packaging shown, JPEG compression artifacts forming a gray halo at the edges, transparent PNG flattened onto checkerboard, or a colored shadow under the product. Run the checklist in this article before re-uploading." } },
              { "@type": "Question", name: "How do I fix rejected images for my whole catalog at once?", acceptedAnswer: { "@type": "Answer", text: "Batch process: put every rejected file into a browser-based remover with a White output mode set to pure RGB 255,255,255, keep minimum dimension at 1000px+, then re-upload. Tools that run the AI locally (like BatchBG) let you do 100+ images in one pass without per-image fees." } },
              { "@type": "Question", name: "Does Amazon reject images with transparent backgrounds?", acceptedAnswer: { "@type": "Answer", text: "Main images must display on white. A PNG with real transparency often renders with a checkerboard or black background in the validator, which fails. Flatten transparency onto pure white before uploading main images; keep the transparent version for A+ content and secondary slots." } },
            ],
          }),
        }}
      />
      <div className="mb-8">
        <p className="text-sub text-sm mb-2">October 9, 2026 · 7 min read</p>
        <div className="mb-6 rounded-xl overflow-hidden">
          <img src="/demo/product-after.jpg" alt="Product photo on pure white Amazon-compliant background" className="w-full h-48 object-cover" loading="lazy" />
        </div>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
          Why Amazon Rejects Your White Background Images
        </h1>
        <p className="text-sub text-lg leading-relaxed">
          Short answer: it is almost never the color. It is one of six other things the image does wrong — or the white is 252 instead of 255. This page lists the exact thresholds and the order to check them in, so you can fix a rejected batch in one pass instead of one image at a time.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The Number Amazon&apos;s Checker Actually Uses</h2>
        <p className="text-sub leading-relaxed mb-4">
          Amazon&apos;s image requirements say &quot;pure white background (RGB 255, 255, 255).&quot; Since early 2026 the check is automated: the validator samples the background region and flags anything it cannot round to full white. In practice that means a background of RGB 250+ passes occasionally, 252 is a coin flip on JPEG artifacts, and only a true 255,255,255 flood fill is safe. The mistake most sellers make is <em>photographing</em> white instead of <em>generating</em> white — a lit paper backdrop photographs as 240–252 with gradients. The fix is never camera gear: remove the background and replace it with a machine-generated pure white.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The 7 Rejection Triggers, In Order of How Often They Bite</h2>
        <ol className="space-y-5">
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">1. Background is off-white (photographed, not generated)</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">Even lighting on paper or foam board still lands in RGB 240–252 with visible gradients. Check: open the file, sample the corner pixel with any editor&apos;s eyedropper. Anything below 255 is a maybe; regenerate the background instead of retuning it.</p>
          </li>
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">2. Text, logo, or watermark inside the image</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">The main image must show only the product itself — no &quot;brand&quot; overlays, no promo badges, no photographer watermark, not even a subtle one in the corner. Amazon added a &quot;no text overlay&quot; clause to the main-image policy that catches sellers who reused their social-media creatives.</p>
          </li>
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">3. Product smaller than 85% of the frame</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">The cutout must occupy at least 85% of the longest side. Rejected files often have perfectly white backgrounds with a tiny product floating in the middle. Crop tight to the subject after removing the background, leaving a small margin.</p>
          </li>
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">4. Compression halo — the white that isn&apos;t quite white</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">A PNG flattened onto RGB 255 and then saved as a medium-quality JPEG gets a ring of 245–252 pixels around the subject from chroma subsampling. The validator sees that ring, not your flood fill. Fix: export at high JPEG quality (90+) or upload as PNG, and batch-convert with the background set <em>after</em> resizing, not before.</p>
          </li>
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">5. Transparency left un-flattened</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">Transparent PNGs render as checkerboard or black to the automated check. Secondary images may use transparency-friendly layouts, but the main image must be white-filled. Keep both versions: this is why <a href="/transparent-background/" className="text-accent hover:underline">bulk transparency</a> and White output mode exist as separate switches in most removers.</p>
          </li>
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">6. Props, packaging, or mannequin parts in the shot</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">A shirt on a hanger, a box next to the device, a hand holding the mug — all flag. Apparel must be shot flat or on an invisible mannequin with no visible supports. If your catalog came from one lifestyle shoot, expect main-image rejections and re-cut the subject from the scene.</p>
          </li>
          <li>
            <h3 className="font-heading font-semibold text-ink mb-1">7. Resolution under 1000px on the longest side</h3>
            <p className="text-sub text-sm leading-relaxed mb-2">Below 1000px the image technically uploads but the zoom feature — and often the checker — refuses it. 1600px+ is recommended. If your source photos are small, upscale the long edge before re-submitting rather than resubmitting the same file hoping it passes.</p>
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Fixing a Whole Rejected Batch at Once</h2>
        <p className="text-sub leading-relaxed mb-4">
          If you got one image rejected, fix one image. If twenty came back the same night — usually after an ASIN merge or a category move — the fix is a batch pass, not twenty Photoshop sessions. What actually clears all seven triggers in one run: drop every rejected file into a remover that (a) outputs exactly RGB 255,255,255 in White mode, (b) auto-crops so the subject fills the frame, and (c) exports high-quality JPEG or flattened PNG at 1600px+. Browser-based tools do this locally without upload — <a href="/remove-background-from-product-photos/" className="text-accent hover:underline">the bulk product-photo workflow</a> walks through the same three-step process on a 100-image catalog.
        </p>
        <div className="bg-card rounded-xl border border-line p-5 mb-6">
          <p className="text-sm text-sub leading-relaxed"><strong className="text-ink">Before you re-upload:</strong> rename files to match SKU or ASIN, sample one corner pixel to confirm 255,255,255, and view one image at 100% zoom for the compression halo. Spot-checking three files from the batch beats re-uploading fifty and waiting for the bot&apos;s opinion.</p>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Why Rejected Listings Cost More Than Time</h2>
        <p className="text-sub leading-relaxed mb-4">
          A suppressed listing stops collecting search rank while it sits in review. Sellers who batch-fix the same day recover the ranking they had; sellers who fix image-by-image over a week return to a worse position and pay for it in PPC. If image rejections are routine for you, the real fix is upstream: shoot against any clean backdrop, cut with White mode on upload day, and let the camera stop being the compliance layer.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          Full specs and a printable checklist of every requirement (not just backgrounds) live on the <a href="/amazon-white-background/" className="text-accent hover:underline">Amazon white background tool page</a>. Cross-listing on Etsy too? The platforms pull opposite ways — see <a href="/blog/etsy-photo-requirements/" className="text-accent hover:underline">Etsy&apos;s photo requirements</a>.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-6 mt-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">What RGB value does Amazon require for product backgrounds?</h3>
            <p className="text-sub leading-relaxed">Pure white — RGB 255, 255, 255. Since early 2026 the automated validator flags backgrounds above roughly RGB 250,250,250 as &quot;not white,&quot; so 252-grade photographed white is a coin flip. Generate the white (remove and replace), don&apos;t photograph it.</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">My background is already white — why was it still rejected?</h3>
            <p className="text-sub leading-relaxed">Usually a watermark, product under 85% of the frame, visible props or packaging, a JPEG compression halo at the edges, un-flattened transparency, or sub-1000px resolution. Work the seven-item list above in order; that covers the overwhelming majority of appeals that get denied on the second try.</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">How do I fix rejected images for my whole catalog?</h3>
            <p className="text-sub leading-relaxed">Batch them: all rejected files into a remover with White output at exact 255, auto-crop on, 1600px high-quality export, filenames kept to match SKUs. A 100-image catalog takes minutes, and spot-checking three files catches everything the bot will care about.</p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-ink mb-1">Does Amazon accept transparent PNGs?</h3>
            <p className="text-sub leading-relaxed">Not for main images — transparency renders as checkerboard/black to the validator, which fails. Keep transparent PNGs for A+ content and secondary images, and flatten onto pure white before submitting the main slot.</p>
          </div>
        </div>
      </div>
      </article>
    </>
  );
}
