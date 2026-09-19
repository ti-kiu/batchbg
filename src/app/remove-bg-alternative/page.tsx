import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import CompareSlider from "@/components/CompareSlider";

export const metadata: Metadata = {
  title: "remove.bg Alternative — Free, Unlimited, No Shutdown | BatchBG",
  description:
    "remove.bg is shutting down December 1, 2026. BatchBG is the free alternative: unlimited background removal, 100% local, no per-image charges, no credits.",
  keywords:
    "remove.bg alternative, remove bg alternative, free alternative to remove.bg, remove.bg shutting down",
  alternates: { canonical: "https://batchbg.com/remove-bg-alternative/" },
  openGraph: {
    title: "remove.bg Alternative — Free, Unlimited, No Shutdown",
    description: "remove.bg is shutting down December 1, 2026. Switch to BatchBG: free, unlimited, local.",
    url: "https://batchbg.com/remove-bg-alternative/",
  },
};

export default function RemoveBgAlternative() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-error-bg text-error px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚠ remove.bg shuts down December 1, 2026
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            remove.bg Alternative
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            remove.bg is closing its standalone service. BatchBG is the free, unlimited alternative — no credits, no per-image charges, no shutdown date.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">✅ Free Forever</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">♾ No Image Limit</span>
          <span className="inline-flex items-center gap-1.5 text-sm bg-success-bg text-success px-3 py-1.5 rounded-full font-medium">🔒 100% Local</span>
        </div>
        <div className="max-w-lg mx-auto mb-6">
          <CompareSlider beforeSrc="/demo/portrait-before.jpg" afterSrc="/demo/portrait-after.jpg" />
        </div>
        <BackgroundRemoverTool config={{ mode: "quick", defaultBg: "transparent" }} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">remove.bg Is Shutting Down — What You Need to Know</h2>
          <p className="text-sub leading-relaxed mb-4">
            On December 1, 2026 at 9:00 CET, remove.bg will shut down its standalone website. The service — which processed an estimated 10 million images per month and served over 240 million monthly search visits — is being absorbed into Canva&apos;s ecosystem. Any unused Pay-As-You-Go credits will expire on that date. API endpoints are being redirected to Leonardo.ai, which uses a different request format and credit-based pricing model.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">What Happens to Your remove.bg Account?</h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Unused credits:</span> Expire December 1, 2026. No refunds. Process your backlog now or lose the balance.</li>
            <li><span className="font-semibold text-ink">API integrations:</span> Will stop responding on December 1. All endpoints return HTTP 410 Gone after shutdown.</li>
            <li><span className="font-semibold text-ink">Desktop/mobile apps:</span> Will be discontinued and removed from app stores.</li>
            <li><span className="font-semibold text-ink">Photoshop plugin:</span> Will be discontinued. Adobe is directing users to its own Firefly-based removal tool.</li>
            <li><span className="font-semibold text-ink">Background removal feature:</span> Continues inside Canva (requires Canva Pro at $14.99/month). No batch processing. No API.</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Step-by-Step: Migrate from remove.bg to BatchBG</h3>
          <div className="bg-card rounded-xl border border-line p-6 mb-6 not-prose">
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-ink">Use your remaining remove.bg credits</p>
                  <p className="text-sub mt-1">Log into remove.bg and process any queued images before December 1. Credits do not transfer and are non-refundable.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-ink">Export your processing history</p>
                  <p className="text-sub mt-1">Download any images stored on remove.bg&apos;s servers. They will be deleted after shutdown with no recovery option.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-ink">Test BatchBG with a sample batch</p>
                  <p className="text-sub mt-1">Open batchbg.com, drop 10–20 representative product photos, and compare output quality. No signup needed — instant access.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-success text-white flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-ink">Update your workflow</p>
                  <p className="text-sub mt-1">Replace your remove.bg bookmark with BatchBG. For API users, see the migration guide below. Cancel your remove.bg subscription to avoid auto-renewal charges.</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">BatchBG vs remove.bg: Feature Comparison</h3>
          <div className="bg-card rounded-xl border border-line overflow-hidden mb-6 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold">remove.bg</th>
                  <th className="text-left p-3 font-semibold">BatchBG</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price", "$0.07–$0.20/image", "Free, unlimited"],
                  ["Batch limit", "1,000 images", "No limit"],
                  ["Upload required", "Yes (server-side)", "No (100% local)"],
                  ["Privacy", "Images sent to servers", "Never leaves your device"],
                  ["Signup required", "Yes", "No"],
                  ["API access", "Paid (shutting down)", "Planned (free)"],
                  ["Watermark", "On free tier", "Never"],
                  ["Resolution limit", "Full on paid plans", "Full resolution, always free"],
                  ["Processing speed", "1–3 sec (server)", "2–15 sec (device-dependent)"],
                  ["Offline use", "No", "Yes (after first load)"],
                  ["Shutdown risk", "December 1, 2026", "None — runs in your browser"],
                ].map(([feat, rbg, bbg], i) => (
                  <tr key={i} className="border-t border-line">
                    <td className="p-3 font-medium text-ink">{feat}</td>
                    <td className="p-3 text-sub">{rbg}</td>
                    <td className="p-3 text-ink font-medium">{bbg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Other remove.bg Alternatives</h3>
          <p className="text-sub leading-relaxed mb-4">
            BatchBG is not the only option. Here is how the alternatives stack up for sellers and developers who need reliable, ongoing service:
          </p>
          <div className="space-y-3 mb-6 not-prose">
            {[
              { name: "Canva BG Remover", price: "Canva Pro ($14.99/mo)", verdict: "Built into Canva editor. No batch processing, no API. Only makes sense if you already pay for Canva." },
              { name: "Leonardo.ai", price: "Credits-based", verdict: "remove.bg&apos;s official API successor. Different request format — not a drop-in replacement. Requires code changes." },
              { name: "PhotoRoom", price: "$9.99–$23.99/mo", verdict: "Good mobile app. Batch processing limited to 50 images. API available on enterprise plans only." },
              { name: "Removal.AI", price: "$0.07–$0.15/image", verdict: "Similar pricing to remove.bg. 50 free images, then pay-per-image. No guarantee against future shutdowns." },
              { name: "Backgroundless.io", price: "$49 one-time", verdict: "Local processing like BatchBG. Batch limit of 40 images. One-time purchase — no subscription risk." },
            ].map((alt, i) => (
              <div key={i} className="bg-card rounded-xl border border-line p-4 flex gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-heading font-semibold text-ink text-sm">{alt.name}</h4>
                    <span className="text-xs text-sub bg-ink/5 px-2 py-0.5 rounded">{alt.price}</span>
                  </div>
                  <p className="text-sub text-sm">{alt.verdict}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">How to Migrate from remove.bg</h3>
          <p className="text-sub leading-relaxed mb-4">
            If you were using remove.bg for product photo processing, switching to BatchBG takes 30 seconds: open batchbg.com, drop your images, click remove. No account, no API key, no credit card. The workflow is identical but with no per-image cost and no upload — your images stay on your device.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            For API users, we are building a drop-in compatible API endpoint that accepts the same request format as remove.bg&apos;s v1.0 API. <a href="/blog/remove-bg-shutting-down-migration/" className="text-accent hover:underline">Read our full migration guide</a> for developers, including code samples and timeline.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">Why Local Processing Is the Future</h3>
          <p className="text-sub leading-relaxed mb-4">
            The remove.bg shutdown illustrates a fundamental risk of cloud-dependent tools: when the company changes strategy, your workflow breaks. Local processing — where the AI model runs on your own device — eliminates this dependency entirely. BatchBG uses ONNX Runtime Web to run the same u2netp and BiRefNet models that cloud services use, but entirely within your browser. There is no server to shut down, no subscription to cancel, no API to deprecate. The tool works as long as your browser works.
          </p>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is BatchBG really a replacement for remove.bg?", a: "Yes. BatchBG offers the same core feature — AI background removal — but runs locally in your browser instead of on remote servers. It is free, unlimited, and has no shutdown risk because there is no server to turn off." },
              { q: "Why is remove.bg shutting down?", a: "Canva acquired remove.bg in 2021 and is consolidating all background removal into the Canva platform. The standalone website, apps, and API are being discontinued. Background removal continues inside Canva Pro ($14.99/month) without batch or API support." },
              { q: "Can I migrate my remove.bg API integration?", a: "We are building a drop-in API endpoint compatible with remove.bg's v1.0 request format. If your code sends POST requests to api.remove.bg/v1.0/removebg, you will only need to change the base URL. Check our migration guide for updates and timeline." },
              { q: "Is the quality comparable to remove.bg?", a: "BatchBG uses u2netp for instant processing (comparable to remove.bg standard) and BiRefNet for HD mode (comparable to remove.bg HD). Both run locally. In our tests, BiRefNet produces equivalent or better edge quality on product photography." },
              { q: "Will BatchBG ever charge per image?", a: "No. Batch processing is free and unlimited by design — it runs on your device, so there is no server cost to pass on. Optional Pro features (API access, team presets, custom models) may be added later as paid upgrades, but core batch processing stays free." },
              { q: "What if I already paid for remove.bg credits?", a: "Use them before December 1, 2026 — they expire on shutdown day and are non-refundable. Process any backlog images on remove.bg now, then switch to BatchBG for ongoing work." },
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
              { "@type": "Question", name: "Is BatchBG really a replacement for remove.bg?", acceptedAnswer: { "@type": "Answer", text: "Yes. BatchBG offers the same core feature — AI background removal — but runs locally in your browser instead of on remote servers. It is free, unlimited, and has no shutdown risk." } },
              { "@type": "Question", name: "Why is remove.bg shutting down?", acceptedAnswer: { "@type": "Answer", text: "Canva acquired remove.bg in 2021 and is consolidating all background removal into the Canva platform. The standalone website, apps, and API are being discontinued on December 1, 2026." } },
              { "@type": "Question", name: "Can I migrate my remove.bg API integration?", acceptedAnswer: { "@type": "Answer", text: "We are building a drop-in API endpoint compatible with remove.bg's v1.0 request format. You will only need to change the base URL." } },
              { "@type": "Question", name: "Is the quality comparable to remove.bg?", acceptedAnswer: { "@type": "Answer", text: "BatchBG uses u2netp for instant processing (comparable to remove.bg standard) and BiRefNet for HD mode (comparable to remove.bg HD). Both run locally." } },
              { "@type": "Question", name: "Will BatchBG ever charge per image?", acceptedAnswer: { "@type": "Answer", text: "No. Batch processing is free and unlimited by design — it runs on your device, so there is no server cost to pass on." } },
              { "@type": "Question", name: "What if I already paid for remove.bg credits?", acceptedAnswer: { "@type": "Answer", text: "Use them before December 1, 2026 — they expire on shutdown day and are non-refundable. Process any backlog on remove.bg now, then switch to BatchBG." } },
            ],
          }),
        }} />
      </section>
    </>
  );
}
