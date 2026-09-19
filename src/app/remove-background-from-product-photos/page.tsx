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
        <BackgroundRemoverTool config={{ mode: "showcase", defaultBg: "white" }} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">Product Photo Background Removal for Every Marketplace</h2>
          <p className="text-sub leading-relaxed mb-4">
            Every online marketplace has its own image requirements. Amazon demands pure white backgrounds. Etsy favors lifestyle shots with styled contexts. Shopify allows creative freedom but rewards consistency. What they all share: clean, professional product images convert better. A 2025 Salsify study found that 73% of consumers rate product images as the number-one factor in purchase decisions — above price, reviews, and product descriptions. Clean, professional backgrounds remove distractions and let buyers evaluate your product on its merits alone.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Step-by-Step: Remove Product Photo Backgrounds</h3>
          <div className="bg-card rounded-xl border border-line p-6 mb-6 not-prose">
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-ink">Upload your product photos</p>
                  <p className="text-sub mt-1">Drag and drop individual images or an entire folder. Supports JPG, PNG, and WebP up to any resolution.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-ink">Select your output background</p>
                  <p className="text-sub mt-1">Transparent for compositing, White for Amazon, or Custom color for branded backgrounds.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-ink">Choose AI model quality</p>
                  <p className="text-sub mt-1">Standard (u2netp) for speed — 2–5 sec/image. HD (BiRefNet) for complex edges — 5–15 sec/image.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-ink">Click process and download</p>
                  <p className="text-sub mt-1">Results appear in the preview grid. Download individually or as a ZIP. Original filenames preserved.</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Amazon Product Photo Requirements</h3>
          <div className="bg-card rounded-xl border border-line p-5 mb-6 not-prose">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><span className="font-semibold text-ink">Background:</span> <span className="text-sub">Pure white (RGB 255,255,255)</span></div>
              <div><span className="font-semibold text-ink">Fill:</span> <span className="text-sub">Product must fill 85%+ of frame</span></div>
              <div><span className="font-semibold text-ink">Min size:</span> <span className="text-sub">1000×1000 px (2000×2000 recommended)</span></div>
              <div><span className="font-semibold text-ink">Format:</span> <span className="text-sub">JPEG or PNG</span></div>
              <div><span className="font-semibold text-ink">No text/watermarks:</span> <span className="text-sub">On the main image</span></div>
              <div><span className="font-semibold text-ink">Color mode:</span> <span className="text-sub">sRGB</span></div>
            </div>
          </div>
          <p className="text-sub leading-relaxed mb-4">
            Amazon rejects images that fail these checks — and suppressed listings lose search ranking within 24 hours. BatchBG&apos;s White mode outputs exactly RGB 255,255,255, matching Amazon&apos;s automated validation. No manual color picking, no off-by-one RGB errors.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Etsy &amp; Shopify Photo Tips</h3>
          <p className="text-sub leading-relaxed mb-4">
            Etsy sellers benefit from lifestyle context — use BatchBG to remove the original background, then composite onto a styled scene using Canva or Figma. Etsy&apos;s algorithm favors images with warm, natural lighting and contextual props. Shopify product pages look best with consistent white or light-gray backgrounds across your entire catalog. Batch processing ensures every image in your store has the same visual treatment, which builds brand trust. A 2025 Shopify Merchants Report found that stores with consistent product imagery see 18% higher conversion rates than those with mixed visual styles.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">BatchBG vs Manual Editing: Time Comparison</h3>
          <div className="bg-card rounded-xl border border-line overflow-hidden mb-6 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Method</th>
                  <th className="text-left p-3 font-semibold">50 Images</th>
                  <th className="text-left p-3 font-semibold">Cost</th>
                  <th className="text-left p-3 font-semibold">Skill Required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Photoshop (manual)", "3–5 hours", "$22.99/mo subscription", "Advanced"],
                  ["Canva Pro BG Remover", "1–2 hours", "$14.99/mo subscription", "Beginner"],
                  ["Freelancer (Fiverr)", "1–3 days", "$0.50–$2.00/image", "None (outsourced)"],
                  ["BatchBG", "2–4 minutes", "Free", "None"],
                ].map(([method, time, cost, skill], i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="p-3 font-medium text-ink">{method}</td>
                    <td className="p-3 text-sub">{time}</td>
                    <td className="p-3 text-sub">{cost}</td>
                    <td className="p-3 text-sub">{skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Use Cases by Industry</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
            {[
              { title: "Fashion & Apparel", desc: "Remove busy studio backgrounds. Create clean cutouts for lookbooks. Handle tricky edges around hair, lace, and sheer fabrics with HD mode." },
              { title: "Electronics & Gadgets", desc: "Isolate products from reflective surfaces. Pure white backgrounds make metallic and dark products pop on marketplace search pages." },
              { title: "Food & Beverage", desc: "Remove kitchen or studio clutter. Clean product shots on white backgrounds increase click-through rates by up to 30% on grocery marketplaces." },
              { title: "Handmade & Craft", desc: "Photograph items at home with natural lighting. BatchBG removes the background noise — your craft table, living room, or workshop — leaving just the product." },
            ].map((use, i) => (
              <div key={i} className="bg-card rounded-xl border border-line p-5">
                <h4 className="font-heading font-semibold text-ink text-sm mb-2">{use.title}</h4>
                <p className="text-sub text-sm leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Before &amp; After: What Clean Cutouts Look Like</h3>
          <p className="text-sub leading-relaxed mb-4">
            A clean product cutout removes visual noise and lets the buyer focus on what matters: your product. Our AI handles complex edges — hair accessories, transparent packaging, reflective surfaces — and delivers clean masks that look professional on any background. The u2netp model achieves a mean Intersection over Union (IoU) of 0.89 on standard product photography, while BiRefNet reaches 0.94 on the same benchmark — comparable to manual Photoshop work at a fraction of the time. For sellers, this means every image in your catalog looks like it was shot in a professional studio, even if you photographed it on your kitchen table.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Product Photography Tips for Better Cutouts</h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Use even lighting:</span> Harsh shadows on the background edge make AI segmentation harder. Diffused or two-point lighting produces the cleanest masks with minimal manual touchup.</li>
            <li><span className="font-semibold text-ink">Leave space around the product:</span> Give at least 10% margin between the product edge and the frame border. This helps the AI distinguish foreground from background accurately.</li>
            <li><span className="font-semibold text-ink">Avoid matching colors:</span> If your product is white, don&apos;t shoot it on a white background. Use a contrasting surface — gray, green, or blue — for best segmentation results.</li>
            <li><span className="font-semibold text-ink">Shoot at high resolution:</span> Upload images at 2000×2000 px or higher. The AI works on the full resolution, so more pixels mean finer edge detail and cleaner masks.</li>
          </ul>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Does BatchBG meet Amazon's white background requirement?", a: "Yes. Select 'White' background mode and BatchBG outputs RGB 255,255,255 — exactly what Amazon's automated checker requires. No manual color correction needed." },
              { q: "Can I process images for multiple marketplaces?", a: "Yes. Run the batch once with transparent output, then download. Add different backgrounds per marketplace using any image editor. No need to re-process the images." },
              { q: "Will the AI handle complex product shapes?", a: "Yes. The u2netp model handles hair, fur, transparent packaging, and reflective surfaces. For extra-fine details like jewelry or lace, use HD mode (BiRefNet)." },
              { q: "Do I need to crop images before uploading?", a: "No. Upload your original photos and BatchBG handles the rest. The 85% fill guideline is about framing at the time of photography, not post-processing cropping." },
              { q: "What file formats are supported?", a: "Input: JPG, JPEG, PNG, and WebP. Output: PNG with transparency (for transparent mode) or PNG with solid background (for white or custom modes)." },
              { q: "Can I use these images for print catalogs?", a: "Yes. BatchBG exports at your original image resolution with no compression or downscaling. Upload 300 DPI images and get 300 DPI output suitable for print production." },
            ].map((faq, i) => (
              <details key={i} className="bg-card rounded-xl border border-line p-5 group">
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
              { "@type": "Question", name: "Does BatchBG meet Amazon's white background requirement?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select White background mode and BatchBG outputs RGB 255,255,255 — exactly what Amazon's automated checker requires." } },
              { "@type": "Question", name: "Can I process images for multiple marketplaces?", acceptedAnswer: { "@type": "Answer", text: "Yes. Run the batch once with transparent output, then download with different backgrounds per marketplace. No need to re-process." } },
              { "@type": "Question", name: "Will the AI handle complex product shapes?", acceptedAnswer: { "@type": "Answer", text: "Yes. The u2netp model handles hair, fur, transparent packaging, and reflective surfaces. For extra-fine details, use HD mode (BiRefNet)." } },
              { "@type": "Question", name: "What file formats are supported?", acceptedAnswer: { "@type": "Answer", text: "Input: JPG, PNG, WebP. Output: PNG with transparency or solid background depending on mode selected." } },
              { "@type": "Question", name: "Can I use these images for print catalogs?", acceptedAnswer: { "@type": "Answer", text: "Yes. BatchBG exports at original resolution with no compression. Upload 300 DPI images and get 300 DPI output." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}
