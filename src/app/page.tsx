import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";

export const metadata: Metadata = {
  title: "Bulk Background Remover — Free, Unlimited, No Signup | BatchBG",
  description: "Remove backgrounds from unlimited images at once. 100% local processing — your photos never leave your device. Free, fast, no signup.",
  keywords: "bulk background remover, batch background remover, remove backgrounds in bulk, free background remover",
  alternates: { canonical: "https://batchbg.com" },
};

function BeforeAfterSVG() {
  return (
    <svg viewBox="0 0 600 280" className="w-full max-w-xl mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Before: product with busy background */}
      <rect x="10" y="10" width="270" height="260" rx="12" stroke="#e3e8ef" strokeWidth="2" fill="white"/>
      <text x="145" y="35" textAnchor="middle" fill="#5a6b80" fontSize="12" fontWeight="600">BEFORE</text>
      {/* messy background lines */}
      <line x1="30" y1="60" x2="260" y2="60" stroke="#e3e8ef" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="30" y1="100" x2="260" y2="100" stroke="#e3e8ef" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="30" y1="140" x2="260" y2="140" stroke="#e3e8ef" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="30" y1="180" x2="260" y2="180" stroke="#e3e8ef" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="30" y1="220" x2="260" y2="220" stroke="#e3e8ef" strokeWidth="1" strokeDasharray="4 4"/>
      {/* product shoe shape */}
      <path d="M100 180 Q100 120 145 110 Q190 100 220 130 Q240 150 230 180 Q220 200 180 210 Q140 215 110 200 Z" stroke="#1a2332" strokeWidth="2" fill="#f0f0f0"/>
      <path d="M120 170 Q130 145 160 135 Q185 130 200 145" stroke="#1a2332" strokeWidth="1.5" fill="none"/>
      {/* noise dots for background */}
      {[40,60,80,200,220,240,50,70,210,230,150,170].map((x,i) => (
        <circle key={i} cx={x+10} cy={70+(i%4)*45} r="3" fill="#e3e8ef"/>
      ))}

      {/* Arrow */}
      <path d="M295 140 L325 140" stroke="#0e8a5f" strokeWidth="3" strokeLinecap="round"/>
      <path d="M318 130 L330 140 L318 150" stroke="#0e8a5f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

      {/* After: clean cutout */}
      <rect x="320" y="10" width="270" height="260" rx="12" stroke="#e3e8ef" strokeWidth="2" fill="white"/>
      {/* checkerboard pattern */}
      {Array.from({length:8}).map((_,r) =>
        Array.from({length:8}).map((_,c) => (
          <rect key={`${r}-${c}`} x={340+c*28} y={50+r*26} width="28" height="26" fill={(r+c)%2===0?"#f0f0f0":"#fafafa"}/>
        ))
      )}
      <text x="455" y="35" textAnchor="middle" fill="#0e8a5f" fontSize="12" fontWeight="600">AFTER</text>
      {/* same shoe, clean */}
      <path d="M400 180 Q400 120 445 110 Q490 100 520 130 Q540 150 530 180 Q520 200 480 210 Q440 215 410 200 Z" stroke="#1a2332" strokeWidth="2" fill="white"/>
      <path d="M420 170 Q430 145 460 135 Q485 130 500 145" stroke="#1a2332" strokeWidth="1.5" fill="none"/>
      {/* green checkmark */}
      <circle cx="555" cy="250" r="12" fill="#0e8a5f"/>
      <path d="M549 250 L553 254 L561 246" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StepIcon({ type }: { type: string }) {
  const icons: Record<string, React.JSX.Element> = {
    upload: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
      </svg>
    ),
    process: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"/>
      </svg>
    ),
    download: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
      </svg>
    ),
  };
  return icons[type] || null;
}

export default function Home() {
  return (
    <>
      {/* Hero: tool IS the landing page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
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
          <span className="inline-flex items-center gap-1.5 bg-green-bg text-green text-xs font-semibold px-3 py-1.5 rounded-full">🔒 Local Processing — images never leave your device</span>
          <span className="inline-flex items-center gap-1.5 bg-green-bg text-green text-xs font-semibold px-3 py-1.5 rounded-full">♾ Unlimited Free — no per-image charges</span>
          <span className="inline-flex items-center gap-1.5 bg-green-bg text-green text-xs font-semibold px-3 py-1.5 rounded-full">🚫 No Signup — open and start</span>
        </div>
      </section>

      {/* Before / After — visual proof */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-ink text-center mb-2">See the Result</h2>
        <p className="text-sub text-center mb-6">Clean cutouts with preserved edges — product, portrait, or graphics.</p>
        <BeforeAfterSVG />
      </section>

      {/* How It Works — with icons */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-ink text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { step: "1", icon: "upload", title: "Drop Your Images", desc: "Drag a folder or select multiple files. JPG, PNG, and WebP — no file size limit." },
            { step: "2", icon: "process", title: "Click Remove BG", desc: "AI runs in your browser via WASM. No uploads, no waiting for servers." },
            { step: "3", icon: "download", title: "Download ZIP", desc: "All cutouts in one ZIP with original filenames. Ready for marketplace upload." },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-lg border border-line p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center">
                  <StepIcon type={item.icon} />
                </div>
                <span className="text-green font-bold text-sm">Step {item.step}</span>
              </div>
              <h3 className="font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sub text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value props — data blocks */}
      <section className="bg-white border-y border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-ink text-center mb-8">Why Sellers Choose BatchBG</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="border border-line rounded-lg p-5">
              <h3 className="font-bold text-ink mb-2">Marketplace-Ready Output</h3>
              <p className="text-sub text-sm mb-3">One-click white background that meets Amazon, Etsy, and Shopify requirements.</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded">Amazon RGB 255</span>
                <span className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded">Etsy 2000px</span>
                <span className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded">Shopify 2048²</span>
              </div>
            </div>
            <div className="border border-line rounded-lg p-5">
              <h3 className="font-bold text-ink mb-2">Privacy by Design</h3>
              <p className="text-sub text-sm mb-3">Every pixel processed in your browser. Zero bytes sent to any server.</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-line rounded-full h-2">
                  <div className="bg-green h-2 rounded-full" style={{ width: "0%" }} />
                </div>
                <span className="text-green text-xs font-bold">0 bytes uploaded</span>
              </div>
            </div>
            <div className="border border-line rounded-lg p-5">
              <h3 className="font-bold text-ink mb-2">remove.bg Alternative</h3>
              <p className="text-sub text-sm mb-3">remove.bg shuts down Dec 1, 2026. Switch to a free, unlimited alternative.</p>
              <a href="/remove-bg-alternative/" className="inline-block bg-green text-white text-xs font-semibold px-3 py-1.5 rounded hover:opacity-90">See Comparison →</a>
            </div>
            <div className="border border-line rounded-lg p-5">
              <h3 className="font-bold text-ink mb-2">Batch at Scale</h3>
              <p className="text-sub text-sm mb-3">Process entire product catalogs. Preserves SKU filenames through to ZIP.</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-line/50 rounded p-2"><div className="font-bold text-ink text-lg">∞</div><div className="text-sub text-xs">Images</div></div>
                <div className="bg-line/50 rounded p-2"><div className="font-bold text-ink text-lg">0¢</div><div className="text-sub text-xs">Per image</div></div>
                <div className="bg-line/50 rounded p-2"><div className="font-bold text-ink text-lg">0</div><div className="text-sub text-xs">Uploads</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-ink mb-4">Built for E-Commerce Sellers</h2>
        <p className="text-sub leading-relaxed mb-4">
          Amazon requires pure white backgrounds (RGB 255,255,255) with the product filling 85% of the frame. Etsy and Shopify have their own guidelines. BatchBG&apos;s white background mode outputs marketplace-compliant images automatically — no manual editing needed.
        </p>
        <h3 className="text-xl font-bold text-ink mb-3">Your Images Stay Private</h3>
        <p className="text-sub leading-relaxed mb-4">
          Unlike cloud-based tools, BatchBG processes every image directly in your browser using ONNX Runtime Web. Your product photos — valuable business assets — never leave your device. No servers collecting your images, no AI training on your data.
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
                <summary className="font-semibold text-ink cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="text-sub group-open:rotate-180 transition-transform ml-2">▼</span>
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
              { "@type": "Question", name: "How many images can I process at once?", acceptedAnswer: { "@type": "Answer", text: "There is no limit. Process 10, 100, or 1,000 images in a single session." } },
              { "@type": "Question", name: "Are my images uploaded to a server?", acceptedAnswer: { "@type": "Answer", text: "No. All processing happens locally in your browser." } },
              { "@type": "Question", name: "Is it really free? No watermarks?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free with no watermarks, no sign-up, and no per-image charges." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}