import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import CompareSlider from "@/components/CompareSlider";

export const metadata: Metadata = {
  title: "Bulk Background Remover — Free, Unlimited, No Signup | BatchBG",
  description:
    "Remove backgrounds from unlimited images at once. 100% local processing — your photos never leave your device. Free, fast, no signup.",
  keywords:
    "bulk background remover, batch background remover, remove backgrounds in bulk, free background remover",
  alternates: { canonical: "https://batchbg.com" },
};

/* ── Shared styles ── */

const checkerboardBg: React.CSSProperties = {
  backgroundImage:
    "conic-gradient(#e0e0e0 25%, #ffffff 25% 50%, #e0e0e0 50% 75%, #ffffff 75%)",
  backgroundSize: "16px 16px",
};

/* ── SVG icons for How It Works ── */

function StepIcon({ type }: { type: string }) {
  const icons: Record<string, React.JSX.Element> = {
    upload: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    ),
    process: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
    download: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    ),
  };
  return icons[type] || null;
}

/* ── Page ── */

export default function Home() {
  return (
    <>
      {/* 2. Hero section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="bg-white rounded-2xl shadow-card p-8 sm:p-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight"
            style={{ color: "#454545" }}
          >
            Bulk Background Remover
          </h1>
          <p className="text-body text-lg mt-4 max-w-lg mx-auto">
            <span
              className="inline-block text-white text-xs font-bold px-2 py-0.5 rounded mr-1 align-middle"
              style={{ backgroundColor: "#0F70E6" }}
            >
              free
            </span>
            unlimited, no signup. Remove backgrounds from hundreds of images
            — 100% on your device.
          </p>

          <div className="mt-8">
            <BackgroundRemoverTool />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 bg-green-bg text-green text-xs font-semibold px-3 py-1.5 rounded-full">
              Local — images never leave your device
            </span>
            <span className="inline-flex items-center gap-1.5 bg-green-bg text-green text-xs font-semibold px-3 py-1.5 rounded-full">
              Unlimited Free
            </span>
            <span className="inline-flex items-center gap-1.5 bg-green-bg text-green text-xs font-semibold px-3 py-1.5 rounded-full">
              No Signup
            </span>
          </div>
        </div>
      </section>

      {/* 3. Zigzag split sections */}
      <div style={{ backgroundColor: "#f4f6f9" }}>
        {/* Section A: Text LEFT + Image RIGHT */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#0F70E6]/10 text-[#0F70E6] text-xs font-semibold px-3 py-1 rounded mb-4">
                Bulk by design
              </span>
              <h2 className="text-3xl font-bold text-[#454545] mb-4">
                One queue, one folder, one ZIP
              </h2>
              <p className="text-[#54616C] leading-relaxed">
                Drop an entire folder of product photos and let the queue run.
                No per-image credits, no upload limits, no waiting for
                individual downloads. BatchBG processes every file in parallel
                on your device and packages the results into a single ZIP —
                filenames preserved, ready to re-upload.
              </p>
            </div>
            <div
              className="rounded-2xl shadow-card overflow-hidden p-4"
              style={checkerboardBg}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/product-after.jpg?v=2"
                alt="Product cutout on transparent background"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Section B: Image LEFT + Text RIGHT */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-2xl shadow-card overflow-hidden p-4 order-2 lg:order-1"
              style={checkerboardBg}
            >
              <CompareSlider
                beforeSrc="/demo/portrait-before.jpg"
                afterSrc="/demo/portrait-after.jpg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#0F70E6]/10 text-[#0F70E6] text-xs font-semibold px-3 py-1 rounded mb-4">
                Private by architecture
              </span>
              <h2 className="text-3xl font-bold text-[#454545] mb-4">
                Your images never leave your device
              </h2>
              <p className="text-[#54616C] leading-relaxed">
                All inference runs locally in your browser via WebAssembly.
                No server upload, no account required, no data collection.
                The segmentation model loads once and stays on your machine —
                a permanent free tool with no usage caps.
              </p>
            </div>
          </div>
        </div>

        {/* Section C: Text LEFT + Image RIGHT */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#0F70E6]/10 text-[#0F70E6] text-xs font-semibold px-3 py-1 rounded mb-4">
                Marketplace-ready
              </span>
              <h2 className="text-3xl font-bold text-[#454545] mb-4">
                Amazon, Etsy, Shopify — one click
              </h2>
              <p className="text-[#54616C] leading-relaxed">
                Built-in presets match platform requirements: 2000×2000px
                canvas, pure white background, 85% frame fill. An automatic
                pixel audit checks corner colors and fill rate before you
                download — so listings pass on the first upload, every time.
              </p>
            </div>
            <div
              className="rounded-2xl shadow-card overflow-hidden p-4"
              style={checkerboardBg}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/camera-after.jpg"
                alt="Camera cutout with clean edges on white background"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Existing SEO content */}

      {/* Who Uses */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-heading text-center mb-2">
          Who Uses BatchBG?
        </h2>
        <p className="text-body text-center mb-8">
          From solo Etsy sellers to agencies processing thousands of product
          images per week.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-card rounded-lg border border-line p-5">
            <div className="inline-block bg-amber-bg text-amber text-xs font-semibold px-2 py-1 rounded mb-3">
              E-Commerce
            </div>
            <h3 className="font-bold text-heading mb-2">
              Amazon &amp; Etsy Sellers
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Amazon requires pure white backgrounds (RGB 255,255,255) with the
              product filling 85% of the frame. A seller with 500 listings
              saves roughly 40 hours per season by batch-processing instead of
              editing each image individually in Photoshop. Etsy sellers
              preparing holiday inventory typically process 50–200 images at
              once.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-line p-5">
            <div className="inline-block bg-blue-bg text-blue text-xs font-semibold px-2 py-1 rounded mb-3">
              Marketplace
            </div>
            <h3 className="font-bold text-heading mb-2">
              Marketplace Compliance
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Platforms reject listings with non-compliant backgrounds. Walmart
              Marketplace, eBay, and Wish all enforce white or transparent
              background rules. BatchBG outputs PNG files that pass automated
              compliance checks on the first upload — no rejections, no delays,
              no listing downtime.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-line p-5">
            <div className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded mb-3">
              Photography
            </div>
            <h3 className="font-bold text-heading mb-2">
              Photographers &amp; Studios
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Portrait photographers deliver cutouts for client headshots,
              LinkedIn photos, and composite work. Processing 30–100 session
              images with preserved hair detail takes minutes instead of hours
              of manual pen-tool tracing. No Photoshop subscription required.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-bold text-heading text-center mb-2">
          How It Works
        </h2>
        <p className="text-body text-center mb-8">
          Three steps. No uploads, no accounts, no watermarks.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              step: "1",
              icon: "upload",
              title: "Drop Your Images",
              desc: "Drag a folder or select multiple files. JPG, PNG, and WebP — no file size limit. BatchBG reads files directly from your local disk using the browser File System Access API. No server upload, no queue waiting.",
            },
            {
              step: "2",
              icon: "process",
              title: "Click Remove BG",
              desc: "The AI segmentation model (ONNX Runtime Web) runs entirely in your browser using WebAssembly. It detects subject boundaries, processes hair-level detail, and generates an alpha mask — all without sending a single byte to any server.",
            },
            {
              step: "3",
              icon: "download",
              title: "Download ZIP",
              desc: "All cutouts packaged in one ZIP with original filenames preserved. Choose transparent PNG for design work, or white background for marketplace compliance. Ready to upload to Amazon, Etsy, Shopify, or your CMS.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-card rounded-lg border border-line p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center">
                  <StepIcon type={item.icon} />
                </div>
                <span className="text-green font-bold text-sm">
                  Step {item.step}
                </span>
              </div>
              <h3 className="font-bold text-heading mb-2">{item.title}</h3>
              <p className="text-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-card border-y border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-heading text-center mb-2">
            BatchBG vs Alternatives
          </h2>
          <p className="text-body text-center mb-8">
            How does a free, local bulk background remover compare to paid
            cloud tools?
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-line">
                  <th className="text-left py-3 px-4 font-semibold text-heading">
                    Feature
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-green">
                    BatchBG
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-body">
                    remove.bg
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-body">
                    Canva BG Remover
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-body">
                    Manual (Photoshop)
                  </th>
                </tr>
              </thead>
              <tbody className="text-body">
                <tr className="border-b border-line">
                  <td className="py-3 px-4 font-medium text-heading">Price</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-bg text-green font-semibold px-2 py-0.5 rounded text-xs">
                      Free forever
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    $0.90–$1.99/image
                  </td>
                  <td className="py-3 px-4 text-center">$12.99/mo (Pro)</td>
                  <td className="py-3 px-4 text-center">$22.99/mo</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 px-4 font-medium text-heading">
                    Bulk processing
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-bg text-green font-semibold px-2 py-0.5 rounded text-xs">
                      Unlimited
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">Paid credits only</td>
                  <td className="py-3 px-4 text-center">1 image at a time</td>
                  <td className="py-3 px-4 text-center">Manual per file</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 px-4 font-medium text-heading">
                    Privacy
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-bg text-green font-semibold px-2 py-0.5 rounded text-xs">
                      100% local
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">Cloud upload</td>
                  <td className="py-3 px-4 text-center">Cloud upload</td>
                  <td className="py-3 px-4 text-center">Local</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 px-4 font-medium text-heading">
                    Signup required
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-bg text-green font-semibold px-2 py-0.5 rounded text-xs">
                      No
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">Yes</td>
                  <td className="py-3 px-4 text-center">Yes</td>
                  <td className="py-3 px-4 text-center">License key</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 px-4 font-medium text-heading">
                    Speed per image
                  </td>
                  <td className="py-3 px-4 text-center">~3–8 sec</td>
                  <td className="py-3 px-4 text-center">~5 sec</td>
                  <td className="py-3 px-4 text-center">~3 sec</td>
                  <td className="py-3 px-4 text-center">5–20 min</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-heading">
                    ZIP download
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-bg text-green font-semibold px-2 py-0.5 rounded text-xs">
                      Yes
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">API only</td>
                  <td className="py-3 px-4 text-center">No</td>
                  <td className="py-3 px-4 text-center">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Sellers Choose BatchBG */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-heading text-center mb-8">
          Why Sellers Choose BatchBG
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <div className="border border-line rounded-lg p-5">
            <h3 className="font-bold text-heading mb-2">
              Marketplace-Ready Output
            </h3>
            <p className="text-body text-sm mb-3">
              One-click white background that meets Amazon, Etsy, and Shopify
              requirements. No manual adjustments — the output passes automated
              listing checks on the first upload.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded">
                Amazon RGB 255
              </span>
              <span className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded">
                Etsy 2000px
              </span>
              <span className="inline-block bg-green-bg text-green text-xs font-semibold px-2 py-1 rounded">
                Shopify 2048²
              </span>
            </div>
          </div>
          <div className="border border-line rounded-lg p-5">
            <h3 className="font-bold text-heading mb-2">Privacy by Design</h3>
            <p className="text-body text-sm mb-3">
              Every pixel processed in your browser using ONNX Runtime Web.
              Zero bytes sent to any server. Your product photos — valuable
              business assets — stay on your device. No AI training on your
              data.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-line rounded-full h-2">
                <div className="bg-green h-2 rounded-full" style={{ width: "0%" }} />
              </div>
              <span className="text-green text-xs font-bold">
                0 bytes uploaded
              </span>
            </div>
          </div>
          <div className="border border-line rounded-lg p-5">
            <h3 className="font-bold text-heading mb-2">
              remove.bg Alternative
            </h3>
            <p className="text-body text-sm mb-3">
              remove.bg shuts down Dec 1, 2026. BatchBG is the free, unlimited
              replacement that runs entirely in your browser — no credits, no
              API keys, no vendor lock-in.
            </p>
            <a
              href="/remove-bg-alternative/"
              className="inline-block bg-green text-white text-xs font-semibold px-3 py-1.5 rounded hover:opacity-90"
            >
              See Full Comparison →
            </a>
          </div>
          <div className="border border-line rounded-lg p-5">
            <h3 className="font-bold text-heading mb-2">Batch at Scale</h3>
            <p className="text-body text-sm mb-3">
              Process entire product catalogs. Preserves SKU filenames through
              to ZIP output — no renaming, no reorganizing after download.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-code rounded p-2">
                <div className="font-bold text-heading text-lg">∞</div>
                <div className="text-body text-xs">Images</div>
              </div>
              <div className="bg-code rounded p-2">
                <div className="font-bold text-heading text-lg">0¢</div>
                <div className="text-body text-xs">Per image</div>
              </div>
              <div className="bg-code rounded p-2">
                <div className="font-bold text-heading text-lg">0</div>
                <div className="text-body text-xs">Uploads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-heading text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-body text-center mb-8">
          Everything you need to know about bulk background removal with
          BatchBG.
        </p>
        <div className="space-y-3">
          {[
            {
              q: "How many images can I process at once?",
              a: "There is no limit. Process 10, 100, or 1,000 images in a single session. The only constraint is your device's available memory. A typical laptop handles 200–300 images without issues. For very large batches (500+), close other browser tabs to free up RAM.",
            },
            {
              q: "Are my images uploaded to a server?",
              a: "No. All processing happens locally in your browser using ONNX Runtime Web (WebAssembly). Your images never leave your device — not to our servers, not to any third party. You can verify this by disconnecting from the internet after the page loads; the tool still works.",
            },
            {
              q: "Is it really free? No watermarks?",
              a: "Yes, completely free with no watermarks, no sign-up, and no per-image charges. Batch processing will always be free. There are no hidden limits, no trial periods, and no 'premium' tier gating basic features.",
            },
            {
              q: "What image formats are supported?",
              a: "Input: JPG, JPEG, PNG, and WebP. Output is always PNG with a transparent alpha channel. You can also choose a solid white background for marketplace compliance. Maximum input resolution depends on your device memory, but 4000×4000px images process without issues on modern hardware.",
            },
            {
              q: "How does this compare to remove.bg?",
              a: "BatchBG is free and unlimited, while remove.bg charges $0.90–$1.99 per image and is shutting down December 1, 2026. We process everything locally — no uploads needed, no credits to buy. Both tools use AI segmentation, but BatchBG runs the model in your browser via WebAssembly instead of on remote servers.",
            },
            {
              q: "Can I use the results commercially?",
              a: "Yes. All processed images are yours to use however you like — Amazon listings, Etsy shops, Shopify stores, print-on-demand, marketing materials, client deliverables. There are no licensing restrictions on the output.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="bg-card rounded-lg border border-line p-5 group"
            >
              <summary className="font-semibold text-heading cursor-pointer flex items-center justify-between">
                {faq.q}
                <span className="text-body group-open:rotate-180 transition-transform ml-2">
                  ▼
                </span>
              </summary>
              <p className="text-body text-sm mt-3 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-[#0E1318] text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BatchBG. Free, local, unlimited
            background removal.
          </p>
        </div>
      </footer>
    </>
  );
}
