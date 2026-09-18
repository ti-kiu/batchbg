import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";

export const metadata: Metadata = {
  title: "Bulk Background Remover — Free, Unlimited, No Signup | BatchBG",
  description: "Remove backgrounds from unlimited images at once. 100% local processing — your photos never leave your device. Free, fast, no signup.",
  keywords: "bulk background remover, batch background remover, remove backgrounds in bulk, free background remover",
  alternates: { canonical: "https://batchbg.com" },
};

export default function Home() {
  return (
    <>
      {/* Hero: tool IS the landing page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Bulk Background Remover
          </h1>
          <p className="text-sub text-lg max-w-xl mx-auto mt-3">
            Free, unlimited, no signup. Remove backgrounds from hundreds of images — 100% on your device.
          </p>
        </div>
        <BackgroundRemoverTool />
        {/* Trust badges — directly below upload area */}
        <div className="flex justify-center gap-4 mt-5 flex-wrap">
          <span className="tag t-green">🔒 Local Processing — images never leave your device</span>
          <span className="tag t-green">♾ Unlimited Free — no per-image charges</span>
          <span className="tag t-green">🚫 No Signup — open and start</span>
        </div>
      </section>

      {/* SEO content BELOW the tool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-ink mb-4">Why Use a Bulk Background Remover?</h2>
        <p className="text-sub leading-relaxed mb-6">
          If you sell online, you know the drill: photograph 50 products, then spend hours removing backgrounds one by one. BatchBG lets you drag an entire folder into your browser and get clean cutouts in minutes — not hours. Every image stays on your device. Nothing is uploaded to any server.
        </p>

        <h3 className="text-xl font-bold text-ink mb-4">How It Works</h3>
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {[
            { step: "1", title: "Drop Your Images", desc: "Drag a folder or select multiple files. JPG, PNG, and WebP — no file size limit." },
            { step: "2", title: "Click Remove BG", desc: "Our AI model runs directly in your browser using WASM. No uploads, no waiting." },
            { step: "3", title: "Download ZIP", desc: "Get all cutouts in one ZIP with original filenames preserved. Ready for marketplace upload." },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-lg border border-line p-5">
              <div className="w-8 h-8 rounded-full bg-green text-white flex items-center justify-center font-bold text-sm mb-3">{item.step}</div>
              <h4 className="font-semibold text-ink mb-2">{item.title}</h4>
              <p className="text-sub text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-ink mb-3">Built for E-Commerce Sellers</h3>
        <p className="text-sub leading-relaxed mb-4">
          Amazon requires pure white backgrounds (RGB 255,255,255) with the product filling 85% of the frame. Etsy and Shopify have their own guidelines. BatchBG&apos;s white background mode outputs marketplace-compliant images automatically — no manual editing needed.
        </p>

        <h3 className="text-xl font-bold text-ink mb-3">Your Images Stay Private</h3>
        <p className="text-sub leading-relaxed mb-4">
          Unlike cloud-based tools, BatchBG processes every image directly in your browser using ONNX Runtime Web. Your product photos — valuable business assets — never leave your device. No servers collecting your images, no AI training on your data.
        </p>

        <h3 className="text-xl font-bold text-ink mb-3">Looking for a remove.bg Alternative?</h3>
        <p className="text-sub leading-relaxed mb-4">
          With <a href="/remove-bg-alternative/" className="text-blue hover:underline">remove.bg shutting down December 1, 2026</a>, millions of users need a new solution. BatchBG offers unlimited free background removal — no per-image charges, no credit packs. The AI runs entirely in your browser. Free forever.
        </p>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How many images can I process at once?", a: "There is no limit. Process 10, 100, or 1,000 images in a single session. The only constraint is your device's memory." },
              { q: "Are my images uploaded to a server?", a: "No. All processing happens locally in your browser using ONNX Runtime Web. Your images never leave your device." },
              { q: "Is it really free? No watermarks?", a: "Yes, completely free with no watermarks, no sign-up, and no per-image charges. Batch processing will always be free." },
              { q: "What image formats are supported?", a: "JPG, PNG, and WebP. Output is always PNG with transparent or solid-color backgrounds." },
              { q: "Can I use the results for commercial purposes?", a: "Yes. All processed images are yours to use however you like, including on Amazon, Etsy, Shopify, and other platforms." },
              { q: "How does this compare to remove.bg?", a: "BatchBG is free and unlimited, while remove.bg charges per image and is shutting down December 1, 2026. We process everything locally — no uploads needed." },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-lg border border-line p-5 group">
                <summary className="font-semibold text-ink cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-sub group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-sub text-sm mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "How many images can I process at once?", acceptedAnswer: { "@type": "Answer", text: "There is no limit. Process 10, 100, or 1,000 images in a single session." } },
                { "@type": "Question", name: "Are my images uploaded to a server?", acceptedAnswer: { "@type": "Answer", text: "No. All processing happens locally in your browser. Your images never leave your device." } },
                { "@type": "Question", name: "Is it really free? No watermarks?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free with no watermarks, no sign-up, and no per-image charges." } },
              ],
            }),
          }}
        />
      </section>
    </>
  );
}