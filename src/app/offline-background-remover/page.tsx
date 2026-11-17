import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "Does BatchBG work with no internet connection?",
    a: "Once the page and the model weights have finished loading, yes: the inference runs on your CPU and nothing is sent anywhere, so turning off Wi-Fi or switching to airplane mode after load does not stop the batch. What does need a connection is getting the page and model into the browser the first time — so plan a two-minute online window before the flight, the market stall, or the air-gapped office, load the tool once, and the rest of the session works dark.",
  },
  {
    q: "What actually gets sent over the network when I use an offline background remover?",
    a: "For a genuinely local tool, only two things ever cross the wire: static assets coming down (the page, the model file, the WASM runtime) and, in most analytics-enabled sites, anonymous pageview beacons. No pixel of your image leaves the tab, because the entire pipeline — decode, 320×320 segmentation, full-resolution composite, PNG encoding, ZIP packaging — runs in memory on your machine. Server-side tools are the opposite: every file is uploaded, processed remotely, and downloaded back, which is why they can meter you per image.",
  },
  {
    q: "How do I verify a background remover is really offline?",
    a: "Run the airplane-mode test with a folder you would never upload: disconnect after the tool has loaded, process ten images, and confirm the results come out. Then check your router's live connection list or a network monitor during the run — an honest local tool produces no image-sized upload. This works to audit any tool making the claim, including desktop apps that quietly call cloud APIs behind an install window.",
  },
  {
    q: "Is offline processing slower than a server?",
    a: "Per image it is comparable or faster once warm: on a modest two-core test machine we measured a median of about 0.5 seconds per image through this exact pipeline. Server tools add an upload and a download per file plus queue time, so for folders of hundreds of images the local path usually wins on wall-clock total — but the real difference is the failure mode: a local batch cannot stall on someone else's outage.",
  },
  {
    q: "Why does the first load need internet if the images never leave my device?",
    a: "Because the model travels to you, not your images to the model. The segmentation weights and the inference runtime are fetched once and sit in memory and the browser cache for the session. A desktop app ships the same weights inside the installer — that is the only architectural difference: an install versus a page load. Both end with the computation happening on your hardware.",
  },
];

export const metadata: Metadata = {
  title: "Offline Background Remover — Run a Batch With No Connection | BatchBG",
  description:
    "A background remover that keeps working when the internet does not: once loaded, inference runs fully on your device and no image is ever uploaded. What offline really means, the airplane-mode test, and the two-minute pre-flight setup.",
  keywords:
    "offline background remover, background remover no internet, works offline, local background removal, background remover batch & offline, remove background without uploading",
  alternates: { canonical: "https://batchbg.com/offline-background-remover/" },
  openGraph: {
    title: "Offline Background Remover — Load Once, Work Dark",
    description:
      "The honest version of offline background removal: model downloads to you once, images never download anywhere else. Includes a 60-second airplane-mode test that works on any tool.",
    url: "https://batchbg.com/offline-background-remover/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function OfflineBackgroundRemover() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Offline Background Remover", url: "https://batchbg.com/offline-background-remover/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Offline Background Remover: What Works With No Internet, What Only Pretends To",
            description:
              "A field-tested definition of offline background removal — the three things sold under one word, what actually crosses the network, a 60-second airplane-mode test for auditing any tool, and the real limits of browser-based offline work.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-11-05",
            dateModified: "2026-11-05",
            url: "https://batchbg.com/offline-background-remover/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Offline Background Remover
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Load this page once while you have signal, and the batch keeps running when you do not. The AI model &mdash; a few megabytes of segmentation weights &mdash; downloads <em>to your machine</em>; your images never download anywhere else. Wi-Fi off, airplane mode, dead hotel broadband: after the one-time load, processing continues exactly as before, because nothing in the pipeline ever needed the network.
          </p>
        </div>
        <BackgroundRemoverTool config={{ mode: "batch", defaultBg: "transparent", showSwatches: true, label: "Works With No Connection Once Loaded — Drop Files and Go Dark" }} />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">Three different things get sold as &ldquo;offline&rdquo;</h2>
        <p className="text-sub leading-relaxed mb-4">
          The word covers a spectrum, and most of it is not what you think you are buying. Know which one you are looking at before a deadline depends on it:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="text-left border-b-2 border-line">
                <th className="py-2 pr-4 font-semibold text-ink">Architecture</th>
                <th className="py-2 pr-4 font-semibold text-ink">Where your image goes</th>
                <th className="py-2 font-semibold text-ink">Works with the network unplugged?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">Cloud tool (upload-first)</td>
                <td className="py-3 pr-4">Every file, to their servers.</td>
                <td className="py-3">No. The site itself won&apos;t even load.</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">Desktop app calling a cloud API</td>
                <td className="py-3 pr-4">Every file &mdash; just from an app window instead of a tab.</td>
                <td className="py-3">No. The installer is a disguise, not an architecture.</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">&ldquo;Offline-capable&rdquo; PWA web tool</td>
                <td className="py-3 pr-4">Depends on the vendor: the page is cached, but the model &mdash; or the image &mdash; often still travels.</td>
                <td className="py-3">Partly, and unpredictably. Test it.</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-3 pr-4 font-semibold text-ink">Local inference (BatchBG, a few others)</td>
                <td className="py-3 pr-4">Nowhere. Decode, segmentation, composite, PNG export, ZIP &mdash; all in your tab&apos;s memory.</td>
                <td className="py-3">Yes, after the one-time asset load. The whole point of this page.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub leading-relaxed mb-4">
          The distinction that matters on an actual airplane: a tool that needs the network only to <em>arrive</em> behaves completely differently from one that needs it on every <em>file</em>. In the second architecture a 300-SKU folder is 300 round trips that all fail the moment signal does; in the first, the disconnect is invisible. Our <a href="/bulk-background-remover/" className="text-accent underline">bulk background remover</a> runs entirely in the fourth row &mdash; the same engine we documented down to the millisecond on the <a href="/large-batch-background-remover/" className="text-accent underline">large-batch numbers page</a>.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">What actually crosses the wire here</h2>
        <p className="text-sub leading-relaxed mb-4">
          Being precise, because vague privacy claims are how &ldquo;offline&rdquo; got its reputation. When you open this page: the HTML/JS comes down, the segmentation model comes down, and the WebAssembly inference runtime comes down &mdash; all once, all browser-cached after that, a few tens of megabytes total arriving at your machine. Anonymous pageview analytics go out &mdash; page URL and browser metadata, no file contents, no filenames, because the code that touches your images never holds them long enough to serialize them. That is the full conversation. Your pixels enter through the file picker and leave through the download button, and the only machine in between is yours. A tool that says &ldquo;no upload&rdquo; but phones home image bytes during &ldquo;processing&rdquo; is in row one or two of the table, regardless of the marketing.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The 60-second airplane-mode test (works on any tool)</h2>
        <p className="text-sub leading-relaxed mb-4">
          Don&apos;t trust the copy; run the protocol: 1. Load your candidate tool once with internet. 2. Cut connectivity completely &mdash; airplane mode, or yank the cable, or block it in your firewall. 3. Process ten images you would never upload (a family photo, a scanned document). 4. Two verdicts: if it errors or silently queues them, it&apos;s not offline. If results appear, watch your router&apos;s live traffic list during the next batch &mdash; a genuinely local tool produces no image-sized payload, and any &ldquo;local&rdquo; tool that spikes on upload bandwidth is caught red-handed. This test audits desktop apps too, which is how several &ldquo;private&rdquo; installers have been shown calling cloud APIs underneath. BatchBG passes it by construction; so does the browser&apos;s own DevTools Network tab if you prefer a receipt over eyeballs.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">When offline matters more than quality</h2>
        <p className="text-sub leading-relaxed mb-4">
          The honest use cases, ranked by how much the disconnect saves you: <strong className="text-ink">Connectivity-dead jobsites</strong> &mdash; sellers photographing inventory in basements, markets, and rural listings with no stable broadband; load on the drive in, process on arrival. <strong className="text-ink">Travel days</strong> &mdash; a flight&apos;s four hours is exactly the shape of a 500-image catalog (see the <a href="/large-batch-background-remover/" className="text-accent underline">time and memory math</a>). <strong className="text-ink">Locked-down corporate or agency machines</strong> &mdash; networks that block outbound uploads outright; local processing isn&apos;t a preference there, it&apos;s the only path that runs at all. <strong className="text-ink">Vendor-outage insurance</strong> &mdash; when a cloud remover&apos;s API throws 502s during a launch push, a local pass doesn&apos;t move your deadline. <strong className="text-ink">Sensitive imagery</strong> &mdash; pre-release products, legal/medical documentation, client work under NDA, where the upload itself is the compliance problem, which is also why the same engine doubles as a read-only <a href="/bulk-background-screening/" className="text-accent underline">background screening</a> QC gate.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The limits, stated plainly</h2>
        <p className="text-sub leading-relaxed mb-4">
          This is a browser tab, not a native app, and two honest caveats follow. First, the network is needed for the <em>first</em> load of the session: assets must arrive before the lights go out, so build the two-minute load into your pre-flight routine rather than discovering it at 30,000 feet. Second, results live in the tab: browsers evict long-idle tabs, and an evicted tab means re-loading the page (online for that refresh) &mdash; which is why the working rule on big jobs is <a href="/blog/remove-backgrounds-100-images-at-once-free/" className="text-accent underline">run a chunk, download its ZIP, then the next</a>. Offline here means &ldquo;works through the whole batch once loaded,&rdquo; which is what the deadline-critical cases actually need &mdash; not a perpetual zero-network cold start. If you need a true zero-touch air-gapped install with no page load at all, a desktop app that bundles the model is the right tool, and we&apos;ll say so instead of pretending otherwise.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Frequently asked questions</h2>
        {faqData.map((faq) => (
          <div key={faq.q} className="mb-6">
            <h3 className="font-heading font-semibold text-ink text-lg mb-2">{faq.q}</h3>
            <p className="text-sub leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </article>
    </>
  );
}
