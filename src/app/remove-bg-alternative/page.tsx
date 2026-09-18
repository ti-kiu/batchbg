import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";

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
        <BackgroundRemoverTool />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-gray max-w-none">
          <h2 className="font-heading text-2xl font-bold text-ink mb-4">remove.bg Is Shutting Down — What You Need to Know</h2>
          <p className="text-sub leading-relaxed mb-4">
            On December 1, 2026 at 9:00 CET, remove.bg will shut down its standalone website. The service — which processed millions of images per month — is being absorbed into Canva's ecosystem. Any unused Pay-As-You-Go credits will expire on that date. API endpoints are being redirected to Leonardo.ai.
          </p>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3 mt-8">What Happens to Your remove.bg Account?</h3>
          <ul className="text-sub text-sm space-y-2 mb-4">
            <li><span className="font-semibold text-ink">Unused credits:</span> Expire December 1, 2026. Use them or lose them.</li>
            <li><span className="font-semibold text-ink">API integrations:</span> Will stop working on December 1. Migrate before then.</li>
            <li><span className="font-semibold text-ink">Desktop/mobile apps:</span> Will be discontinued.</li>
            <li><span className="font-semibold text-ink">Photoshop plugin:</span> Will be discontinued.</li>
            <li><span className="font-semibold text-ink">Background removal feature:</span> Continues inside Canva (requires Canva subscription).</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">BatchBG vs remove.bg: Feature Comparison</h3>
          <div className="bg-white rounded-xl border border-line overflow-hidden mb-6 not-prose">
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

          <h3 className="font-heading text-xl font-semibold text-ink mb-3">How to Migrate from remove.bg</h3>
          <p className="text-sub leading-relaxed mb-4">
            If you were using remove.bg for product photo processing, switching to BatchBG takes 30 seconds: open batchbg.com, drop your images, click remove. No account, no API key, no credit card. The workflow is identical but with no per-image cost and no upload — your images stay on your device.
          </p>
          <p className="text-sub leading-relaxed mb-4">
            For API users, we are building a drop-in compatible API endpoint. <a href="/blog/remove-bg-shutting-down-migration/" className="text-accent hover:underline">Read our full migration guide</a> for developers.
          </p>
        </article>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is BatchBG really a replacement for remove.bg?", a: "Yes. BatchBG offers the same core feature — AI background removal — but runs locally in your browser instead of on remote servers. It is free and unlimited." },
              { q: "Why is remove.bg shutting down?", a: "Canva acquired remove.bg in 2021 and is consolidating all background removal into the Canva platform. The standalone website and API are being discontinued." },
              { q: "Can I migrate my remove.bg API integration?", a: "We are building a drop-in API endpoint compatible with remove.bg's request format. Check our migration guide for updates." },
              { q: "Is the quality comparable to remove.bg?", a: "BatchBG uses u2netp for instant processing (comparable to remove.bg standard) and BiRefNet for HD mode (comparable to remove.bg HD). Both run locally." },
              { q: "Will BatchBG ever charge per image?", a: "No. Batch processing is free and unlimited by design — it runs on your device, so there is no server cost to pass on. Optional Pro features (API, team presets) may be added later." },
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
