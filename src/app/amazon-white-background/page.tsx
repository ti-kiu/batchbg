import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";

export const metadata: Metadata = {
  title: "Amazon White Background — Product Photo Requirements & Free Tool | BatchBG",
  description:
    "Make Amazon-compliant product photos: pure white RGB 255 background, 85% fill, 2000×2000 px. Free tool, no upload, instant batch processing.",
  keywords:
    "amazon white background, amazon product photo requirements, amazon white background image, amazon main image guidelines",
  alternates: { canonical: "https://batchbg.com/amazon-white-background/" },
  openGraph: {
    title: "Amazon White Background — Product Photo Requirements & Free Tool",
    description: "Make Amazon-compliant product photos with pure white backgrounds. Free, local, unlimited.",
    url: "https://batchbg.com/amazon-white-background/",
  },
};

export default function AmazonWhiteBackground() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Amazon White Background
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Meet Amazon's main image requirements in seconds. Pure white background (RGB 255,255,255), product fills 85%+ of frame. Free batch tool — no upload required.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-accent-bg text-accent px-3 py-1.5 rounded-full font-medium">✅ RGB 255,255,255</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">📦 Bulk Processing</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">🔒 100% Local</span>
        </div>
        <BackgroundRemoverTool />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">Amazon Product Image Requirements (2026)</h2>
          <p className="text-sub leading-relaxed mb-4">
            Amazon's image guidelines are strict for a reason: consistent product photos build buyer trust and reduce returns. Getting them wrong means suppressed listings or rejection at upload. Here is exactly what Amazon requires.
          </p>

          <div className="bg-white rounded-xl border border-line p-6 mb-6 not-prose">
            <h3 className="font-heading font-semibold text-ink text-lg mb-4">Main Image Requirements</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Background:</span> <span className="text-sub">Pure white (RGB 255, 255, 255). Not off-white, not light gray — pure white.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Product fill:</span> <span className="text-sub">Product should occupy 85% or more of the image frame.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Resolution:</span> <span className="text-sub">Minimum 1000×1000 px. Recommended 2000×2000 px for zoom.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Format:</span> <span className="text-sub">JPEG (.jpg) or PNG (.png). TIFF not accepted for main images.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-error text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✕</span>
                <div><span className="font-semibold text-ink">No text, logos, or watermarks</span> <span className="text-sub">on the main image.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-error text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✕</span>
                <div><span className="font-semibold text-ink">No accessories, props, or mannequins</span> <span className="text-sub">visible on the main image (apparel excepted).</span></div>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">How BatchBG Helps You Comply</h3>
          <p className="text-sub leading-relaxed mb-4">
            Select &quot;White&quot; background mode in BatchBG. The tool removes the original background and replaces it with pure RGB 255,255,255 white — the exact value Amazon's automated checker validates. No manual color picking, no Photoshop curves, no chance of being off by a few shades.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Batch Processing for FBA Sellers</h3>
          <p className="text-sub leading-relaxed mb-4">
            FBA sellers often list 20–100 products at a time. Each needs 1 main image + 5–7 secondary images meeting the same white background standard. With BatchBG, upload your entire photo session — every product, every angle — and get Amazon-ready images in one ZIP download. The filenames match your originals, so matching results to ASINs is automatic.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Common Mistakes That Get Listings Rejected</h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li>Using off-white or cream backgrounds (RGB 245–254 fails Amazon's check)</li>
            <li>Shadows visible on the background edge</li>
            <li>Product not centered or too small in frame</li>
            <li>Background not fully removed (semi-transparent edges)</li>
            <li>Image upscaled from a small source (blurry at zoom)</li>
          </ul>
          <p className="text-sub leading-relaxed mb-4">
            BatchBG's AI model handles all of these: it outputs pure white, removes shadows at the product edge, and the full-resolution export preserves your original image quality.
          </p>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What exact white does Amazon require?", a: "RGB 255, 255, 255 — pure white. BatchBG's White mode outputs exactly this value." },
              { q: "Can I process 100+ product images at once?", a: "Yes. BatchBG has no batch size limit. Upload your entire product photoshoot and process everything in one session." },
              { q: "Will the output be high enough resolution for Amazon zoom?", a: "Yes. BatchBG exports at your original image resolution. Upload 2000×2000 px images and you get 2000×2000 px output." },
              { q: "Do I need to remove shadows before uploading?", a: "No. The AI model handles edge shadows automatically during background removal." },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-line p-5 group">
                <summary className="font-heading font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                  {faq.q} <span className="text-sub group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sub text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What exact white does Amazon require?", acceptedAnswer: { "@type": "Answer", text: "RGB 255, 255, 255 — pure white. BatchBG's White mode outputs exactly this value." } },
              { "@type": "Question", name: "Can I process 100+ product images at once?", acceptedAnswer: { "@type": "Answer", text: "Yes. BatchBG has no batch size limit. Upload your entire photoshoot and process in one session." } },
              { "@type": "Question", name: "Will the output be high enough resolution for Amazon zoom?", acceptedAnswer: { "@type": "Answer", text: "Yes. BatchBG exports at your original image resolution with no downscaling." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}
