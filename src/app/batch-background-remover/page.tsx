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
        <BackgroundRemoverTool />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">How to Batch Remove Backgrounds from Product Photos</h2>
          <p className="text-sub leading-relaxed mb-4">
            E-commerce sellers photograph entire product lines in one session — then face hours of manual background removal. BatchBG replaces that workflow with a single drag-and-drop. Drop your photo folder into the browser, click once, and download a ZIP of clean transparent PNGs.
          </p>
          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Why Batch Processing Saves Hours</h3>
          <p className="text-sub leading-relaxed mb-4">
            A typical Amazon seller lists 20–50 new products per week. At 3–5 images per product, that is 100–250 images needing background removal. Processing one image at a time takes 30–60 seconds each in a cloud tool — or 1–2 minutes in Photoshop. With BatchBG, the entire batch finishes while you write your listing descriptions.
          </p>
          <h3 className="font-heading text-xl font-semibold text-ink mb-3">Preserve Your SKU Filenames</h3>
          <p className="text-sub leading-relaxed mb-4">
            Your files are named by SKU — ASIN-001.jpg, SKU-2847.png — because that is how your inventory system works. BatchBG keeps those exact filenames through the entire process. The ZIP you download has the same naming scheme, so matching results back to your product listings takes zero effort.
          </p>
          <h3 className="font-heading text-xl font-semibold text-ink mb-3">100% Private — Nothing Leaves Your Browser</h3>
          <p className="text-sub leading-relaxed mb-4">
            Product photos contain pricing, packaging, and unreleased designs. BatchBG runs the AI model locally in your browser using ONNX Runtime Web. No file is ever uploaded to a server. Your competitive intelligence stays on your machine.
          </p>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I upload a folder of images?", a: "Click 'Select Folder' or drag an entire folder from your file manager into the drop zone. BatchBG reads all JPG, PNG, and WebP files inside." },
              { q: "What happens to my file names?", a: "They are preserved exactly. If you upload SKU-001.jpg, the output is SKU-001_nobg.png inside the ZIP." },
              { q: "Is there a limit on batch size?", a: "No hard limit. Process as many images as your device memory allows. Most laptops handle 100+ images without issues." },
              { q: "Can I add more images to a running batch?", a: "Yes. Click '+ Add More' in the action bar to add more files to the queue while processing is in progress." },
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
              { "@type": "Question", name: "How do I upload a folder of images?", acceptedAnswer: { "@type": "Answer", text: "Click Select Folder or drag an entire folder into the drop zone. BatchBG reads all JPG, PNG, and WebP files." } },
              { "@type": "Question", name: "What happens to my file names?", acceptedAnswer: { "@type": "Answer", text: "They are preserved exactly. SKU-001.jpg becomes SKU-001_nobg.png in the ZIP download." } },
              { "@type": "Question", name: "Is there a limit on batch size?", acceptedAnswer: { "@type": "Answer", text: "No hard limit. Process as many images as your device memory allows." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}
