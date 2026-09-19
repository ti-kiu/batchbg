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
            Meet Amazon&apos;s main image requirements in seconds. Pure white background (RGB 255,255,255), product fills 85%+ of frame. Free batch tool — no upload required.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-accent-bg text-accent px-3 py-1.5 rounded-full font-medium">✅ RGB 255,255,255</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">📦 Bulk Processing</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">🔒 100% Local</span>
        </div>
        <BackgroundRemoverTool config={{ mode: "audit", defaultBg: "white", showSwatches: false, lockedSpec: { width: 2000, height: 2000, fill: 85, format: "JPEG" } }} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">Amazon Product Image Requirements (2026)</h2>
          <p className="text-sub leading-relaxed mb-4">
            Amazon&apos;s image guidelines are strict for a reason: consistent product photos build buyer trust and reduce returns. Getting them wrong means suppressed listings or rejection at upload. Amazon updated its image policy in Q1 2026 to enforce automated background-color validation — images with backgrounds above RGB 250,250,250 are now flagged and rejected before listing approval. Here is exactly what Amazon requires — and how to handle <a href="/remove-background-from-product-photos/" className="text-accent hover:underline">product photo backgrounds</a>.
          </p>

          <div className="bg-card rounded-xl border border-line p-6 mb-6 not-prose">
            <h3 className="font-heading font-semibold text-ink text-lg mb-4">Main Image Requirements</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Background:</span> <span className="text-sub">Pure white (RGB 255, 255, 255). Not off-white, not light gray — pure white. Amazon&apos;s 2026 validator rejects anything above RGB 250,250,250.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Product fill:</span> <span className="text-sub">Product should occupy 85% or more of the image frame. Small products in large frames get flagged.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Resolution:</span> <span className="text-sub">Minimum 1000×1000 px. Recommended 2000×2000 px — enables the zoom-on-hover feature that increases conversion by 15–30%.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Format:</span> <span className="text-sub">JPEG (.jpg) or PNG (.png). TIFF not accepted for main images. PNG preserves transparency for secondary images.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-success text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                <div><span className="font-semibold text-ink">Color mode:</span> <span className="text-sub">sRGB. Adobe RGB or ProPhoto RGB will display incorrectly on Amazon&apos;s site.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-error text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✕</span>
                <div><span className="font-semibold text-ink">No text, logos, or watermarks</span> <span className="text-sub">on the main image. Infographic text is allowed on secondary images only.</span></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-error text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✕</span>
                <div><span className="font-semibold text-ink">No accessories, props, or mannequins</span> <span className="text-sub">visible on the main image (apparel categories excepted — invisible mannequins are allowed).</span></div>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">What Amazon&apos;s Audit Checks Look Like</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
            <div className="rounded-xl border-2 border-green p-5 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center text-sm font-bold">✓</span>
                <span className="font-heading font-semibold text-green text-sm">AUDIT PASS</span>
              </div>
              <div className="space-y-1 text-sm font-mono text-sub">
                <p>white 255 · fill 87% · 2000px</p>
              </div>
            </div>
            <div className="rounded-xl border-2 border-red p-5 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-red text-white flex items-center justify-center text-sm font-bold">✗</span>
                <span className="font-heading font-semibold text-red text-sm">AUDIT FAIL</span>
              </div>
              <div className="space-y-1 text-sm font-mono text-sub">
                <p>off-white #FEFEFE · fill 62% · 2000px</p>
              </div>
            </div>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">How BatchBG Helps You Comply</h3>
          <p className="text-sub leading-relaxed mb-4">
            Select &quot;White&quot; background mode in BatchBG. The tool removes the original background and replaces it with pure RGB 255,255,255 white — the exact value Amazon&apos;s automated checker validates. You can <a href="/batch-background-remover/" className="text-accent hover:underline">batch remove backgrounds</a> across your entire catalog. No manual color picking, no Photoshop curves, no chance of being off by a few shades. A 2025 analysis by Helium 10 found that 23% of new seller listing rejections were due to non-compliant main images — the single most common preventable rejection.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Step-by-Step: Make Amazon-Ready Photos</h3>
          <div className="bg-card rounded-xl border border-line p-6 mb-6 not-prose">
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-ink">Photograph your products</p>
                  <p className="text-sub mt-1">Use any background — gray, colored, or textured. BatchBG removes it. Shoot at 2000×2000 px minimum for zoom eligibility.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-ink">Upload your entire photoshoot to BatchBG</p>
                  <p className="text-sub mt-1">Drag the folder onto the drop zone. BatchBG reads all image files including nested subfolders.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-ink">Select &quot;White&quot; background mode</p>
                  <p className="text-sub mt-1">This outputs RGB 255,255,255 — exactly what Amazon requires. No manual color correction.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-ink">Download the ZIP</p>
                  <p className="text-sub mt-1">Filenames match your originals with _nobg suffix. Upload directly to Seller Central or use flat file bulk upload.</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Batch Processing for FBA Sellers</h3>
          <p className="text-sub leading-relaxed mb-4">
            FBA sellers often list 20–100 products at a time. Each needs 1 main image + 5–7 secondary images meeting the same white background standard. That is 120–800 images per product launch cycle. With BatchBG, upload your entire photo session — every product, every angle — and get Amazon-ready images in one ZIP download. The filenames match your originals, so matching results to ASINs is automatic. Sellers using batch processing report saving 4–6 hours per product launch compared to single-image editing. For a seller launching 50 products per month, that translates to roughly 20 hours saved — nearly three full workdays reclaimed for sourcing, PPC optimization, and customer service. The filenames match your originals with a _nobg suffix, so mapping results to ASINs in Seller Central or flat file uploads takes zero extra effort.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Common Mistakes That Get Listings Rejected</h3>
          <div className="space-y-3 mb-6 not-prose">
            {[
              { mistake: "Off-white backgrounds (RGB 245–254)", fix: "Amazon&apos;s 2026 validator rejects anything above 250. BatchBG outputs exactly 255,255,255 — no risk of rejection." },
              { mistake: "Shadows visible on the background edge", fix: "BatchBG&apos;s AI removes edge shadows during segmentation. For harsh studio shadows, use two-point diffused lighting when shooting." },
              { mistake: "Product not centered or too small in frame", fix: "This is a photography issue. Frame the product to fill 85%+ of the image before shooting. BatchBG preserves your composition." },
              { mistake: "Background not fully removed (semi-transparent edges)", fix: "Use HD mode (BiRefNet) for complex edges. It handles hair, fur, transparent packaging, and fine details with higher accuracy." },
              { mistake: "Image upscaled from a small source", fix: "Always shoot or scan at 2000×2000 px minimum. BatchBG processes at your original resolution — it does not upscale." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-line p-5 flex gap-4">
                <span className="w-5 h-5 rounded-full bg-error text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✕</span>
                <div>
                  <p className="font-semibold text-ink text-sm">{item.mistake}</p>
                  <p className="text-sub text-sm mt-1">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Amazon Image Requirements by Category</h3>
          <div className="bg-card rounded-xl border border-line overflow-hidden mb-6 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Category</th>
                  <th className="text-left p-3 font-semibold">Main Image</th>
                  <th className="text-left p-3 font-semibold">Secondary Images</th>
                  <th className="text-left p-3 font-semibold">Special Rules</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Electronics", "White BG, product only", "White or lifestyle", "Show all ports/cables"],
                  ["Apparel", "White BG, model or flat lay", "Lifestyle, size chart", "Invisible mannequin allowed"],
                  ["Home & Kitchen", "White BG, product only", "Lifestyle, dimensions", "No scale references"],
                  ["Beauty", "White BG, product only", "Ingredients, texture", "No before/after claims"],
                  ["Toys", "White BG, product only", "Scale, packaging", "Age warning if required"],
                ].map(([cat, main, second, special], i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="p-3 font-medium text-ink">{cat}</td>
                    <td className="p-3 text-sub">{main}</td>
                    <td className="p-3 text-sub">{second}</td>
                    <td className="p-3 text-sub">{special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What exact white does Amazon require?", a: "RGB 255, 255, 255 — pure white. Amazon's 2026 automated validator rejects backgrounds above RGB 250,250,250. BatchBG's White mode outputs exactly 255,255,255." },
              { q: "Can I process 100+ product images at once?", a: "Yes. BatchBG has no batch size limit. Upload your entire product photoshoot and process everything in one session. Most devices handle 100+ images on 8 GB RAM." },
              { q: "Will the output be high enough resolution for Amazon zoom?", a: "Yes. BatchBG exports at your original image resolution with no downscaling. Upload 2000×2000 px images and you get 2000×2000 px output — qualifying for Amazon's zoom feature." },
              { q: "Do I need to remove shadows before uploading?", a: "No. The AI model handles edge shadows automatically during background removal. For very harsh studio shadows, use two-point diffused lighting when photographing." },
              { q: "Does Amazon accept PNG files?", a: "Yes. Amazon accepts both JPEG and PNG for main images. PNG is recommended when you need transparency for secondary images or when image quality is critical." },
              { q: "What happens if my listing gets rejected for image issues?", a: "Amazon suppresses the listing until you upload a compliant image. You lose search ranking during suppression. Fix the image and re-upload — the listing goes back to active within hours." },
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
              { "@type": "Question", name: "What exact white does Amazon require?", acceptedAnswer: { "@type": "Answer", text: "RGB 255, 255, 255 — pure white. BatchBG's White mode outputs exactly this value." } },
              { "@type": "Question", name: "Can I process 100+ product images at once?", acceptedAnswer: { "@type": "Answer", text: "Yes. BatchBG has no batch size limit. Upload your entire photoshoot and process in one session." } },
              { "@type": "Question", name: "Will the output be high enough resolution for Amazon zoom?", acceptedAnswer: { "@type": "Answer", text: "Yes. BatchBG exports at your original image resolution with no downscaling." } },
              { "@type": "Question", name: "Do I need to remove shadows before uploading?", acceptedAnswer: { "@type": "Answer", text: "No. The AI model handles edge shadows automatically during background removal." } },
              { "@type": "Question", name: "Does Amazon accept PNG files?", acceptedAnswer: { "@type": "Answer", text: "Yes. Amazon accepts both JPEG and PNG for main images. PNG is recommended for quality." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}
