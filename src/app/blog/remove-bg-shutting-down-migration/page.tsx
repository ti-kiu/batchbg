import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "remove.bg Shutting Down: Migration Guide & Alternatives (Dec 2026) | BatchBG",
  description:
    "remove.bg shuts down December 1, 2026. Complete migration checklist: save your credits, export your history, switch to a free alternative. API migration guide included.",
  keywords:
    "remove.bg shutting down, remove bg migration, remove.bg alternative 2026, remove.bg API migration",
  alternates: { canonical: "https://batchbg.com/blog/remove-bg-shutting-down-migration/" },
};

export default function RemoveBgMigration() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-error-bg text-error px-3 py-1.5 rounded-full text-sm font-medium mb-3">
          ⚠ Time-Sensitive — Deadline: December 1, 2026
        </div>
        <p className="text-sub text-sm mb-2">September 18, 2026 · 6 min read</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
          remove.bg Shutting Down: Your Complete Migration Guide
        </h1>
        <p className="text-sub text-lg leading-relaxed">
          remove.bg&apos;s standalone website closes December 1, 2026 at 9:00 CET. Here is everything you need to do before that date — plus free alternatives that work today.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">What Is Happening</h2>
        <p className="text-sub leading-relaxed mb-4">
          Canva, which acquired remove.bg in 2021, is consolidating all background removal into the Canva ecosystem. The standalone remove.bg website, desktop apps, mobile apps, Photoshop plugin, and API will all stop functioning on December 1, 2026. Background removal will continue as a feature inside Canva Pro ($14.99/month), but without batch processing, API access, or the per-image pricing model that made remove.bg popular with developers and high-volume sellers.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          This affects an estimated 10 million images processed per month and over 240 million monthly search visits. If you rely on remove.bg for any part of your workflow, you need a plan before December 1.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">Migration Checklist</h2>
        <p className="text-sub leading-relaxed mb-4">
          Work through this list in order. Items marked URGENT should be completed this week:
        </p>
        <div className="space-y-4 mb-8">
          {[
            { priority: "URGENT", title: "Use remaining credits", desc: "Any unused Pay-As-You-Go credits expire on December 1. There is no refund, no transfer, no grace period. Log into your remove.bg dashboard and process your backlog now. If you have 500+ credits remaining, start a batch processing session today." },
            { priority: "URGENT", title: "Export your processing history", desc: "Download any images you have processed and stored on remove.bg's servers. Go to your Dashboard → History → Download All. These files will be permanently deleted after shutdown with no recovery option." },
            { priority: "URGENT", title: "Cancel auto-renewal", desc: "If you have a subscription plan (not pay-as-you-go), cancel auto-renewal immediately. remove.bg's billing system may charge you for a full month even if the service shuts down mid-cycle. Check your Stripe or PayPal recurring payments." },
            { priority: "HIGH", title: "Test an alternative tool", desc: "Do not wait until December 1. Test BatchBG or another tool now with a sample batch of 20–30 images so you know the workflow, quality, and speed before you depend on it. Switching under deadline pressure leads to mistakes." },
            { priority: "HIGH", title: "Update API integrations", desc: "If you use the remove.bg API (api.remove.bg/v1.0/removebg) in scripts, e-commerce platforms, or CI/CD pipelines, update them before December 1. After shutdown, all endpoints return HTTP 410 Gone. See the API migration section below for code changes." },
            { priority: "MEDIUM", title: "Inform your team", desc: "If multiple people in your organization use remove.bg — designers, photographers, listing managers — make sure everyone knows the shutdown date and the replacement tool. Document the new workflow in your internal wiki." },
            { priority: "MEDIUM", title: "Update bookmarks and documentation", desc: "Replace remove.bg bookmarks with your new tool. Update any internal SOPs, onboarding docs, or training materials that reference remove.bg." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-line p-5 flex gap-4">
              <span className={`text-xs font-bold px-2 py-1 rounded self-start flex-shrink-0 ${item.priority === "URGENT" ? "bg-error-bg text-error" : item.priority === "HIGH" ? "bg-amber-50 text-amber-700" : "bg-accent-bg text-accent"}`}>
                {item.priority}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-ink mb-1">{item.title}</h3>
                <p className="text-sub text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">For API Users</h2>
        <p className="text-sub leading-relaxed mb-4">
          remove.bg&apos;s API endpoints (api.remove.bg/v1.0/removebg) will stop responding on December 1. Canva is directing API users to Leonardo.ai, which uses a different request format, different authentication (API key vs OAuth), and a credit-based pricing model. Leonardo.ai is not a drop-in replacement — your code will need significant changes.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          If you need a drop-in replacement, we are building a compatible API that accepts the same request format. Here is what your current remove.bg API call looks like and what changes:
        </p>

        <div className="bg-ink rounded-xl p-5 mb-6 not-prose overflow-x-auto">
          <pre className="text-sm text-white/90 font-mono">
{`// Current remove.bg API call
curl -H "X-Api-Key: YOUR_KEY" \\
  -F "image_file=@photo.jpg" \\
  -F "size=auto" \\
  -o output.png \\
  https://api.remove.bg/v1.0/removebg

// After migration — only the URL changes
curl -H "X-Api-Key: YOUR_KEY" \\
  -F "image_file=@photo.jpg" \\
  -F "size=auto" \\
  -o output.png \\
  https://api.batchbg.com/v1.0/removebg`}
          </pre>
        </div>

        <p className="text-sub leading-relaxed mb-4">
          The BatchBG API is planned for release in Q4 2026 — before the remove.bg shutdown. It will support the same parameters: image_file, image_url, size, type, format, and bg_color. Pricing will be free for standard usage with optional paid tiers for high-volume enterprise use. <a href="/remove-bg-alternative/" className="text-accent hover:underline">Sign up for API early access on the alternative page</a>.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">Free Alternatives Comparison</h2>
        <p className="text-sub leading-relaxed mb-4">
          We evaluated every major alternative on price, batch support, privacy, and shutdown risk:
        </p>
        <div className="bg-card rounded-xl border border-line overflow-hidden mb-6 not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-white">
                <th className="text-left p-3 font-semibold">Alternative</th>
                <th className="text-left p-3 font-semibold">Price</th>
                <th className="text-left p-3 font-semibold">Batch</th>
                <th className="text-left p-3 font-semibold">Privacy</th>
                <th className="text-left p-3 font-semibold">Shutdown Risk</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BatchBG", "Free, unlimited", "No limit", "100% local", "None — browser-based"],
                ["Canva BG Remover", "Canva Pro ($14.99/mo)", "No batch", "Server", "Low (Canva is stable)"],
                ["Leonardo.ai", "Credits-based", "API only", "Server", "Low (VC-funded)"],
                ["PhotoRoom", "$9.99–$23.99/mo", "50 images", "Server", "Medium (startup)"],
                ["Removal.AI", "$0.07–$0.15/image", "Unlimited (paid)", "Server", "Medium (startup)"],
                ["Backgroundless.io", "$49 one-time", "40 images", "Local", "Low (one-time purchase)"],
                ["batchtool.com", "Free", "Unlimited", "Local", "Low (no server)"],
              ].map(([name, price, batch, priv, risk], i) => (
                <tr key={i} className="border-t border-line">
                  <td className="p-3 font-medium text-ink">{name}</td>
                  <td className="p-3 text-sub">{price}</td>
                  <td className="p-3 text-sub">{batch}</td>
                  <td className="p-3 text-sub">{priv}</td>
                  <td className="p-3 text-sub">{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">Why This Matters</h2>
        <p className="text-sub leading-relaxed mb-4">
          remove.bg processed an estimated 10 million images per month. Its 240M+ monthly search visits represent a massive user base that needs to find a new solution. The shutdown is not just a product change — it is a market-level disruption in the background removal space. For context, that search volume is larger than Canva&apos;s own branded search traffic. These users are going somewhere.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          The deeper lesson: cloud-dependent tools carry inherent risk. When a company changes strategy, gets acquired, or shuts down, your workflow breaks overnight. Local processing — where the AI model runs on your own device — eliminates this dependency. BatchBG uses ONNX Runtime Web to run u2netp and BiRefNet models entirely in your browser. There is no server to shut down, no subscription to cancel, no API to deprecate.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">Timeline: Key Dates</h2>
        <div className="space-y-3 mb-6 not-prose">
          {[
            { date: "September 2026", event: "remove.bg announces shutdown. Users begin searching for alternatives." },
            { date: "October 2026", event: "Last month to test alternatives and validate output quality against your existing workflow." },
            { date: "November 2026", event: "Final month. Use remaining credits. Export processing history. Update all API integrations." },
            { date: "December 1, 2026", event: "Shutdown at 9:00 CET. Website, API, apps, and plugin all stop. Credits expire. Data deleted." },
            { date: "Q1 2027", event: "Canva fully integrates background removal into Canva Pro. No standalone option." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-line p-4 flex gap-4">
              <span className="text-xs font-bold px-2 py-1 rounded bg-ink text-white self-start flex-shrink-0 whitespace-nowrap">
                {item.date}
              </span>
              <p className="text-sub text-sm">{item.event}</p>
            </div>
          ))}
        </div>

        <div className="bg-success-bg rounded-xl p-6 not-prose mb-8">
          <h3 className="font-heading font-semibold text-ink mb-2">Switch to BatchBG Today</h3>
          <p className="text-sub text-sm mb-4">Free, unlimited, 100% local. No account, no credits, no shutdown risk. Test it with your existing product photos in 30 seconds.</p>
          <a href="/" className="inline-block bg-success text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-success/90 transition-colors">
            Try BatchBG Free →
          </a>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-6 mt-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "When exactly does remove.bg shut down?", a: "December 1, 2026 at 9:00 CET. After that, the website, API, desktop apps, mobile apps, and Photoshop plugin all stop functioning. Any unused credits expire with no refund." },
            { q: "Will my remove.bg account data be deleted?", a: "Yes. All processed images stored on remove.bg's servers will be deleted after shutdown. Export your processing history before December 1 using Dashboard → History → Download All." },
            { q: "Can I get a refund for unused credits?", a: "No. remove.bg's terms state that unused credits expire on the shutdown date with no refund. Process your backlog before December 1 to maximize the value of credits you've already paid for." },
            { q: "Is Canva's built-in background remover a good replacement?", a: "It works for single images if you already pay for Canva Pro ($14.99/month). However, it has no batch processing, no API access, and requires uploading images to Canva's servers. For bulk workflows, BatchBG is a better fit." },
            { q: "Will the remove.bg API keep working after shutdown?", a: "No. All API endpoints (api.remove.bg/v1.0/removebg) will return HTTP 410 Gone after December 1, 2026. Canva is directing API users to Leonardo.ai, which uses a different request format and pricing model." },
            { q: "What is the fastest way to migrate 1,000+ images?", a: "Use your remaining remove.bg credits to process queued images now. For ongoing work, switch to BatchBG — it handles unlimited batch sizes with no per-image cost. Upload your folder, select background mode, click once, download a ZIP." },
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
    </article>
  );
}
