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
          Canva, which acquired remove.bg in 2021, is consolidating all background removal into the Canva ecosystem. The standalone remove.bg website, desktop apps, mobile apps, Photoshop plugin, and API will all stop functioning on December 1, 2026.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">Migration Checklist</h2>
        <div className="space-y-4 mb-8">
          {[
            { priority: "URGENT", title: "Use remaining credits", desc: "Any unused Pay-As-You-Go credits expire on December 1. There is no refund. Process your backlog now." },
            { priority: "URGENT", title: "Export your processing history", desc: "Download any images you have processed and stored on remove.bg's servers. They will be deleted after shutdown." },
            { priority: "HIGH", title: "Test an alternative tool", desc: "Do not wait until December 1. Test BatchBG or another tool now with a sample batch so you know the workflow before you need it." },
            { priority: "HIGH", title: "Update API integrations", desc: "If you use the remove.bg API in scripts or applications, update them before December 1. See the API migration section below." },
            { priority: "MEDIUM", title: "Cancel auto-renewal", desc: "If you have a subscription plan, cancel auto-renewal so you are not charged for a service that is shutting down." },
            { priority: "MEDIUM", title: "Inform your team", desc: "If multiple people in your organization use remove.bg, make sure everyone knows the shutdown date and the replacement tool." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-line p-5 flex gap-4">
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
          remove.bg&apos;s API endpoints (api.remove.bg/v1.0/removebg) will stop responding on December 1. Canva is directing API users to Leonardo.ai, which uses a different request format and pricing model.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          If you need a drop-in replacement, we are building a compatible API. <a href="/remove-bg-alternative/" className="text-accent hover:underline">See the BatchBG alternative page</a> for details and timeline.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Free Alternatives Comparison</h2>
        <div className="bg-white rounded-xl border border-line overflow-hidden mb-6 not-prose">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-white">
                <th className="text-left p-3 font-semibold">Alternative</th>
                <th className="text-left p-3 font-semibold">Price</th>
                <th className="text-left p-3 font-semibold">Batch</th>
                <th className="text-left p-3 font-semibold">Privacy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BatchBG", "Free, unlimited", "No limit", "100% local"],
                ["Canva BG Remover", "Requires Canva Pro", "No batch", "Server"],
                ["Leonardo.ai", "Credits-based", "API only", "Server"],
                ["BatchRemover", "$0.04/image batch", "60 images", "Server"],
                ["Backgroundless.io", "$49 one-time", "40 images", "Local"],
              ].map(([name, price, batch, priv], i) => (
                <tr key={i} className="border-t border-line">
                  <td className="p-3 font-medium text-ink">{name}</td>
                  <td className="p-3 text-sub">{price}</td>
                  <td className="p-3 text-sub">{batch}</td>
                  <td className="p-3 text-sub">{priv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Why This Matters</h2>
        <p className="text-sub leading-relaxed mb-4">
          remove.bg processed an estimated 10 million images per month. Its 240M+ monthly search visits represent a massive user base that needs to find a new solution. The shutdown is not just a product change — it is a market-level disruption in the background removal space.
        </p>

        <div className="bg-success-bg rounded-xl p-6 not-prose mb-8">
          <h3 className="font-heading font-semibold text-ink mb-2">Switch to BatchBG Today</h3>
          <p className="text-sub text-sm mb-4">Free, unlimited, 100% local. No account, no credits, no shutdown risk.</p>
          <a href="/" className="inline-block bg-success text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-success/90 transition-colors">
            Try BatchBG Free →
          </a>
        </div>
      </div>
    </article>
  );
}
