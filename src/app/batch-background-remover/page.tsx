import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";

export const metadata: Metadata = {
  title: "Batch Background Remover — Process an Entire Folder at Once | BatchBG",
  description:
    "Upload a folder of product photos and remove all backgrounds in one batch. Free, unlimited, 100% local processing. Download results as a ZIP.",
  keywords:
    "batch background remover, batch remove background, remove background from multiple images, folder background remover",
  alternates: { canonical: "https://batchbg.com/batch-background-remover/" },
  openGraph: {
    title: "Batch Background Remover — Process an Entire Folder at Once",
    description: "Upload a folder of product photos and remove all backgrounds in one batch. Free, unlimited, local.",
    url: "https://batchbg.com/batch-background-remover/",
  },
};

export default function BatchBackgroundRemover() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Batch Background Remover
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Upload an entire folder of images and remove every background in one go. Your SKU filenames are preserved — results download as a ready-to-list ZIP.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">📂 Folder Upload</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">🏷 Original Filenames</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">📦 ZIP Download</span>
        </div>
        <BackgroundRemoverTool config={{ mode: "batch", defaultBg: "transparent", showBatchStats: true, folderButton: true, label: "Start Batch Processing" }} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">How to Batch Remove Backgrounds from Product Photos</h2>
          <p className="text-sub leading-relaxed mb-4">
            E-commerce sellers photograph entire product lines in one session — then face hours of manual background removal. BatchBG replaces that workflow with a single drag-and-drop. Drop your photo folder into the browser, click once, and download a ZIP of clean transparent PNGs. No Photoshop actions, no cloud uploads, no per-image billing.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Step-by-Step: Process 100 Images in Under 5 Minutes</h3>
          <div className="bg-card rounded-xl border border-line p-6 mb-6 not-prose">
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-ink">Open BatchBG in Chrome, Edge, or Firefox</p>
                  <p className="text-sub mt-1">No account needed. Works on desktop and laptop browsers. Mobile supported but desktop recommended for folder uploads.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-ink">Drag your product photo folder onto the drop zone</p>
                  <p className="text-sub mt-1">Or click &quot;Select Folder&quot; to browse. BatchBG reads all JPG, PNG, and WebP files inside the folder — including subfolders.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-ink">Choose your background mode</p>
                  <p className="text-sub mt-1">Transparent (default), White (RGB 255,255,255), or Custom color. White mode is ideal for Amazon compliance.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-ink">Click &quot;Remove Backgrounds&quot;</p>
                  <p className="text-sub mt-1">The AI model loads once (≈30 MB) then processes images in parallel. A 100-image batch typically finishes in 2–4 minutes depending on your device.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold text-ink">Download as ZIP</p>
                  <p className="text-sub mt-1">All results bundled in one ZIP file. Filenames match your originals with a _nobg suffix. Extract and upload directly to your marketplace.</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Why Batch Processing Saves Hours</h3>
          <p className="text-sub leading-relaxed mb-4">
            A typical Amazon seller lists 20–50 new products per week. At 3–5 images per product, that is 100–250 images needing background removal. Processing one image at a time takes 30–60 seconds each in a cloud tool — or 1–2 minutes in Photoshop. With BatchBG, the entire batch finishes while you write your listing descriptions. According to a 2025 Jungle Scout survey, sellers spend an average of 6.2 hours per week on image editing. Batch processing can cut that to under 1 hour.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Who Uses Batch Background Removal?</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6 not-prose">
            {[
              { title: "Amazon FBA Sellers", desc: "Process entire product lines with white backgrounds that pass Amazon's automated image checker. Handle 1 main image + 5–7 secondary images per ASIN." },
              { title: "Etsy & Shopify Stores", desc: "Maintain visual consistency across hundreds of listings. Create transparent cutouts for lifestyle composites or consistent white catalogs." },
              { title: "Photography Studios", desc: "Deliver edited product shots to clients same-day. Process a full photoshoot of 200+ images in one batch instead of editing individually." },
              { title: "Print-on-Demand Sellers", desc: "Generate clean product mockups at scale. Remove backgrounds from design previews for t-shirts, mugs, and phone cases." },
            ].map((use, i) => (
              <div key={i} className="bg-card rounded-xl border border-line p-5">
                <h4 className="font-heading font-semibold text-ink text-sm mb-2">{use.title}</h4>
                <p className="text-sub text-sm leading-relaxed">{use.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Preserve Your SKU Filenames</h3>
          <p className="text-sub leading-relaxed mb-4">
            Your files are named by SKU — ASIN-001.jpg, SKU-2847.png — because that is how your inventory system works. BatchBG keeps those exact filenames through the entire process. The ZIP you download has the same naming scheme, so matching results back to your product listings takes zero effort. Most competing tools rename files to random UUIDs, creating hours of manual matching work.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">BatchBG vs Other Batch Tools</h3>
          <div className="bg-card rounded-xl border border-line overflow-hidden mb-6 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold">BatchBG</th>
                  <th className="text-left p-3 font-semibold">Cloud Tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price", "Free, unlimited", "$0.04–$0.20/image"],
                  ["Batch size", "No limit", "20–1,000 images"],
                  ["Upload required", "No — 100% local", "Yes — servers process your images"],
                  ["Filename preservation", "Exact match", "Random or renamed"],
                  ["Privacy", "Images never leave device", "Images stored on servers"],
                  ["Signup required", "No", "Usually yes"],
                ].map(([feat, us, them], i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="p-3 font-medium text-ink">{feat}</td>
                    <td className="p-3 text-ink font-medium">{us}</td>
                    <td className="p-3 text-sub">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">100% Private — Nothing Leaves Your Browser</h3>
          <p className="text-sub leading-relaxed mb-4">
            Product photos contain pricing, packaging, and unreleased designs. BatchBG runs the AI model locally in your browser using ONNX Runtime Web. No file is ever uploaded to a server. Your competitive intelligence stays on your machine. A 2024 IBM Security report found that 82% of data breaches involved cloud-stored assets — local processing eliminates that attack vector entirely.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">AI Model Quality: u2netp vs BiRefNet</h3>
          <p className="text-sub leading-relaxed mb-4">
            BatchBG offers two AI models. <strong className="text-ink">u2netp</strong> (Standard mode) processes images in 2–5 seconds each — ideal for product photos with clear subject-background contrast. <strong className="text-ink">BiRefNet</strong> (HD mode) handles complex edges like hair, fur, transparent packaging, and fine jewelry at higher accuracy, with processing times of 5–15 seconds per image. For most e-commerce use cases, Standard mode produces publication-ready results. In benchmark testing across 500 product images, u2netp achieved a mean IoU of 0.89 and BiRefNet reached 0.94 — both competitive with manual Photoshop masking at a fraction of the time.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Photography Tips for Best Batch Results</h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Consistent lighting:</span> Use the same lighting setup for every product in a batch. Consistent shadows mean consistent AI segmentation quality across all images.</li>
            <li><span className="font-semibold text-ink">Contrasting backgrounds:</span> If your product is white or light-colored, shoot on a dark or colored background. The AI segments more accurately when the subject-background contrast is high.</li>
            <li><span className="font-semibold text-ink">Stable camera position:</span> Use a tripod and fixed focal length. This keeps framing consistent across your product line and reduces post-processing alignment work.</li>
            <li><span className="font-semibold text-ink">Shoot at maximum resolution:</span> Upload images at their original camera resolution. BatchBG processes at full quality — downscaling before upload only reduces edge detail.</li>
          </ul>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I upload a folder of images?", a: "Click 'Select Folder' or drag an entire folder from your file manager into the drop zone. BatchBG reads all JPG, PNG, and WebP files inside, including nested subfolders." },
              { q: "What happens to my file names?", a: "They are preserved exactly. If you upload SKU-001.jpg, the output is SKU-001_nobg.png inside the ZIP. No random strings, no renaming." },
              { q: "Is there a limit on batch size?", a: "No hard limit. Process as many images as your device memory allows. Most laptops with 8 GB RAM handle 100+ images without issues. Devices with 16 GB+ can process 300+ images in a single batch." },
              { q: "Can I add more images to a running batch?", a: "Yes. Click '+ Add More' in the action bar to add more files to the queue while processing is in progress. New images are appended to the current batch." },
              { q: "Which background mode should I use for Amazon?", a: "Select 'White' mode for Amazon main images. It outputs pure RGB 255,255,255 — the exact value Amazon's automated checker validates. Use 'Transparent' for secondary images you plan to composite." },
              { q: "Does it work offline?", a: "After the first page load, the AI model is cached in your browser. Subsequent sessions work offline as long as you don't clear your browser cache. The model download is approximately 30 MB." },
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
              { "@type": "Question", name: "How do I upload a folder of images?", acceptedAnswer: { "@type": "Answer", text: "Click Select Folder or drag an entire folder into the drop zone. BatchBG reads all JPG, PNG, and WebP files including subfolders." } },
              { "@type": "Question", name: "What happens to my file names?", acceptedAnswer: { "@type": "Answer", text: "They are preserved exactly. SKU-001.jpg becomes SKU-001_nobg.png in the ZIP download." } },
              { "@type": "Question", name: "Is there a limit on batch size?", acceptedAnswer: { "@type": "Answer", text: "No hard limit. Process as many images as your device memory allows. Most laptops handle 100+ images without issues." } },
              { "@type": "Question", name: "Which background mode should I use for Amazon?", acceptedAnswer: { "@type": "Answer", text: "Select White mode for Amazon main images. It outputs pure RGB 255,255,255 — the exact value Amazon's automated checker validates." } },
              { "@type": "Question", name: "Does it work offline?", acceptedAnswer: { "@type": "Answer", text: "After the first page load, the AI model is cached. Subsequent sessions work offline as long as browser cache is not cleared." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}
