import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";

export const metadata: Metadata = {
  title: "Remove Background from Product Photos — Free, No Upload | BatchBG",
  description:
    "Remove backgrounds from product photos for Amazon, Etsy, and Shopify. White background compliant, 100% local, free and unlimited.",
  keywords:
    "remove background from product photos, product photo background remover, ecommerce background removal, white background product photo",
  alternates: { canonical: "https://batchbg.com/remove-background-from-product-photos/" },
  openGraph: {
    title: "Remove Background from Product Photos — Free, No Upload",
    description: "Remove backgrounds from product photos for Amazon, Etsy, Shopify. White background compliant.",
    url: "https://batchbg.com/remove-background-from-product-photos/",
  },
};

export default function ProductPhotos() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Remove Background from Product Photos
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Get marketplace-ready product images in seconds. One-click white background for Amazon, Etsy, Shopify — no Photoshop, no upload.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">🛒 Marketplace Ready</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">⬜ Pure White BG</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">🔒 Private</span>
        </div>
        <BackgroundRemoverTool />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">Product Photo Background Removal for Every Marketplace</h2>
          <p className="text-sub leading-relaxed mb-4">
            Every online marketplace has its own image requirements. Amazon demands pure white backgrounds. Etsy favors lifestyle shots. Shopify allows creative freedom. What they all share: clean, professional product images sell better. BatchBG gives you one tool that handles every platform.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Amazon Product Photo Requirements</h3>
          <div className="bg-white rounded-xl border border-line p-5 mb-6 not-prose">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><span className="font-semibold text-ink">Background:</span> <span className="text-sub">Pure white (RGB 255,255,255)</span></div>
              <div><span className="font-semibold text-ink">Fill:</span> <span className="text-sub">Product must fill 85%+ of frame</span></div>
              <div><span className="font-semibold text-ink">Min size:</span> <span className="text-sub">1000×1000 px (2000×2000 recommended)</span></div>
              <div><span className="font-semibold text-ink">Format:</span> <span className="text-sub">JPEG or PNG</span></div>
              <div><span className="font-semibold text-ink">No text/watermarks:</span> <span className="text-sub">On the main image</span></div>
              <div><span className="font-semibold text-ink">Color mode:</span> <span className="text-sub">sRGB</span></div>
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Etsy &amp; Shopify Photo Tips</h3>
          <p className="text-sub leading-relaxed mb-4">
            Etsy sellers benefit from lifestyle context — use BatchBG to remove the original background, then composite onto a styled scene. Shopify product pages look best with consistent white or light-gray backgrounds across your entire catalog. Batch processing ensures visual consistency.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Before &amp; After: What Clean Cutouts Look Like</h3>
          <p className="text-sub leading-relaxed mb-4">
            A clean product cutout removes visual noise and lets the buyer focus on what matters: your product. Our AI handles complex edges — hair accessories, transparent packaging, reflective surfaces — and delivers clean masks that look professional on any background.
          </p>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Does BatchBG meet Amazon's white background requirement?", a: "Yes. Select 'White' background mode and BatchBG outputs RGB 255,255,255 — exactly what Amazon's automated checker requires." },
              { q: "Can I process images for multiple marketplaces?", a: "Yes. Run the batch once with transparent output, then download with different backgrounds per marketplace. No need to re-process." },
              { q: "Will the AI handle complex product shapes?", a: "Yes. The u2netp model handles hair, fur, transparent packaging, and reflective surfaces. For extra-fine details, use HD mode (BiRefNet)." },
              { q: "Do I need to crop images before uploading?", a: "No. Upload your original photos and BatchBG handles the rest. The 85% fill guideline is about framing, not cropping." },
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
      </section>
    </>
  );
}
