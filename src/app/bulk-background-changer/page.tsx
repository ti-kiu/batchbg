import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "Can I change the background color of multiple images at once for free?",
    a: "Yes. BatchBG's studio mode cuts the background out of every image in a dropped folder with an in-browser AI model, then replaces it with one solid color you pick — pure white (#FFFFFF), black, a warm studio neutral, or any brand hex. The whole batch exports as a ZIP. There is no signup, no per-image credit, and the images never leave your device, so recoloring 100 photos costs the same as recoloring one.",
  },
  {
    q: "What background color do product photos need on each marketplace?",
    a: "Amazon requires pure white (RGB 255,255,255) on main images with the product filling at least 85% of the frame. Walmart requires seamless white 255/255/255 on the main image, 1:1, ideally 2200x2200. eBay names no RGB value — white is 'generally best' but eBay explicitly recommends a darker background for shiny or reflective items like jewelry. Etsy and Shopify publish no background-color rule at all, and Google Shopping accepts solid white or transparent. So one catalog realistically needs at least a pure-white set and a styled/colored set.",
  },
  {
    q: "Is a color background or a transparent background better for product photos?",
    a: "Transparent PNG is more flexible — you can composite onto any color later — but it fails as a marketplace hero image: Amazon and Walmart reject it, and some upload pipelines flatten it onto checkerboard or black. The robust pattern is to keep the transparent cutout as your master, batch-flatten it onto pure white for marketplace submissions, and keep colored variants for ads, collections pages, and social.",
  },
  {
    q: "Do shadows break the white-background rule on Amazon or Walmart?",
    a: "Neither platform's image guide uses the word 'shadow' — what they enforce is the pure-white background. A tight, light contact shadow under the product is routine on compliant listings; a shadow that gradients across the canvas drags the corners below 255 and gives the reviewer something to point at. Practical test: sample the four corner pixels of the finished JPEG — if all read 255,255,255 the shadow survived the rule.",
  },
  {
    q: "Why do tools like Canva or Photoroom charge per image to change a background color?",
    a: "Because their cutout runs on their servers, so every processed image costs them GPU time and is metered as a credit or a subscription tier. A browser-based model (ONNX/WebAssembly) shifts that cost to your machine, which is why unlimited bulk recoloring can genuinely be free — the constraint is your hardware, not their billing. If you recolor more than a few dozen photos a month, per-image pricing is the thing to question, not the quality of the tool.",
  },
];

export const metadata: Metadata = {
  title: "Bulk Background Changer — Swap to White, Black or Any Color | BatchBG",
  description:
    "Change the background color of many photos in one pass: cut out the whole folder, drop it on pure white #FFFFFF, black, or any brand hex, export a ZIP. Free, unlimited, runs in your browser. Includes each marketplace's real background-color rule.",
  keywords:
    "bulk background changer, change background color of image, white background changer, change photo background color in bulk, black background product photos, brand color background generator",
  alternates: { canonical: "https://batchbg.com/bulk-background-changer/" },
  openGraph: {
    title: "Bulk Background Changer — One Folder, Any Color, Free",
    description:
      "Cut out a whole folder and re-place every product on white, black, or your brand hex in one pass. No credits, no upload. Plus the verified background-color rules for Amazon, Walmart, eBay, Etsy, Shopify, and Google Shopping.",
    url: "https://batchbg.com/bulk-background-changer/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function BulkBackgroundChanger() {
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
      <BreadcrumbSchema items={[{ name: "Bulk Background Changer", url: "https://batchbg.com/bulk-background-changer/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bulk Background Changer: Swap Every Photo to White, Black, or Brand Color in One Pass",
            description:
              "How to recolor the background of an entire product folder at once — cutout on device, drop onto #FFFFFF, black, a studio neutral, or any hex — plus the actual background-color rules per marketplace (Amazon, Walmart, eBay, Etsy, Shopify, Google Shopping), the shadow loophole, and why per-image credits are the wrong pricing for bulk recoloring.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-30",
            dateModified: "2026-10-30",
            url: "https://batchbg.com/bulk-background-changer/",
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
            Bulk Background Changer
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Drop a folder of product photos. Every background gets cut and replaced with the color you pick — pure white, black, a studio neutral, or any brand hex — then the whole set exports as one ZIP. Free, unlimited, and the recolor runs in your browser.
          </p>
        </div>
        <BackgroundRemoverTool config={{ mode: "studio", defaultBg: "white" }} />
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The answer, before the philosophy</h2>
        <p className="text-sub leading-relaxed mb-4">
          &ldquo;Change background color&rdquo; tools are almost all single-image editors: upload one photo, pick one color, download, repeat — 300 times for a catalog. The bulk version of the same job is mechanically two steps, not one: <strong className="text-ink">(1) segment the product from its current background, (2) composite the cutout onto a new solid color</strong>. Once the segmentation mask exists, swapping colors is a canvas fill — free and instant. Everything below follows from that: if a tool charges per recolor, it is charging you for the mask, and the mask only has to be made once.
        </p>
        <p className="text-sub leading-relaxed mb-4">
          The studio mode above builds the mask locally with an in-browser ONNX model, then renders each image over your chosen variant colors — <code className="text-ink bg-card px-1.5 py-0.5 rounded">Pure white #FFFFFF</code>, <code className="text-ink bg-card px-1.5 py-0.5 rounded">Black #111111</code>, <code className="text-ink bg-card px-1.5 py-0.5 rounded">Warm studio #ECE7DF</code>, <code className="text-ink bg-card px-1.5 py-0.5 rounded">Brand blue #2563EB</code> — with a soft ground shadow so products do not look pasted. Edit any variant&rsquo;s hex to your brand color before processing; one pass yields every colorway.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Which color is legal where: the real rule table</h2>
        <p className="text-sub leading-relaxed mb-4">
          Background color is not a taste decision on marketplaces — it is a rejection trigger. Here is what each platform actually publishes, as opposed to what aggregator blogs keep copying:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="bg-card text-left">
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Platform</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Main-image background rule</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">The gotcha</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Amazon</td><td className="px-3 py-2 border-b">Pure white, exactly RGB 255,255,255; product fills 85%+ of frame</td><td className="px-3 py-2 border-b">250,250,250 &ldquo;looks white&rdquo; and still fails; a gray halo from JPEG recompression is a top rejection cause</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Walmart</td><td className="px-3 py-2 border-b">Seamless white 255/255/255, 1:1, 2200x2200 target, under 5&nbsp;MB</td><td className="px-3 py-2 border-b">Transparent PNG is a legal <em>format</em> but cannot be a compliant hero — flatten it to white first</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">eBay</td><td className="px-3 py-2 border-b">No RGB value published; white &ldquo;generally best&rdquo;</td><td className="px-3 py-2 border-b">eBay <em>recommends dark backgrounds for shiny/reflective items</em> — jewelry, chrome, glass: black is the correct color, not a violation</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Etsy</td><td className="px-3 py-2 border-b">No background rule — lifestyle shots allowed on the hero</td><td className="px-3 py-2 border-b">Stock photos and mockups sold as the product are what get listings flagged</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Shopify</td><td className="px-3 py-2 border-b">No background rule at all</td><td className="px-3 py-2 border-b">Your theme&rsquo;s gallery crop decides composition; keep consistent color across SKUs or the grid looks chaotic</td></tr>
              <tr><td className="px-3 py-2 border-b font-semibold text-ink">Google Shopping</td><td className="px-3 py-2 border-b">Solid white <em>or</em> transparent accepted; staged images allowed</td><td className="px-3 py-2 border-b">Transparent PNGs render on Google&rsquo;s white anyway — no visual gain, and some merchants report parsing issues</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub leading-relaxed mb-4">
          Read together, the table says one thing: a serious seller needs <strong className="text-ink">the same products in at least two background colors</strong> — compliant pure white for Amazon/Walmart, and a styled set (dark for reflective goods per eBay&rsquo;s own tip, studio neutral or brand color for collections pages and ads). That is exactly a bulk-recolor job, not a batch of single-image edits. The per-platform deep-dives live in the <a href="/amazon-white-background/" className="text-accent underline">Amazon white-background checker</a> and the <a href="/blog/walmart-marketplace-image-requirements/" className="text-accent underline">Walmart spec guide</a>.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">One mask, many colorways: the workflow that ends the re-cut loop</h2>
        <p className="text-sub leading-relaxed mb-4">
          Sellers who pay per-image usually re-cut every time they want a new background — white round, then black round, then brand-color round, three full passes over the catalog. The correct loop touches each photo once:
        </p>
        <ol className="list-decimal pl-6 text-sub space-y-3 mb-6">
          <li><strong className="text-ink">Segment once.</strong> Drop the whole folder; the model builds a mask per image. Corner-sampling and edge softening happen in this pass, so all later colors share one edge quality.</li>
          <li><strong className="text-ink">Define the colorway set before exporting.</strong> Tick white + black + a neutral in one run (multi-select), or set your exact brand hex on a variant. Selecting two modes produces two outputs per image in the same ZIP.</li>
          <li><strong className="text-ink">Keep the transparent master.</strong> Also export one <a href="/transparent-background/" className="text-accent underline">transparent PNG set</a>. Colored sets go stale when the brand palette changes; the mask-backed master recolors forever at zero cost.</li>
          <li><strong className="text-ink">Size and compress per destination</strong> after recoloring, not before — resizing an off-white background into 2048&nbsp;px does not make it compliant. The <a href="/batch-image-compressor/" className="text-accent underline">batch compressor</a> handles the Amazon/Walmart byte caps in the same browser session.</li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The shadow question nobody&rsquo;s spec table answers</h2>
        <p className="text-sub leading-relaxed mb-4">
          &ldquo;No shadows on white backgrounds&rdquo; circulates as an Amazon rule. Amazon&rsquo;s product image guide does not contain the word shadow — what it contains is &ldquo;pure white&rdquo; and &ldquo;no borders, color blocks, watermarks, or graphics in the background.&rdquo; The operational consequence: a tight contact shadow is fine on thousands of compliant listings, as long as the canvas corners still measure 255,255,255 after export. A shadow that washes half the frame drags the background off-white and converts a taste question into a rejection. Flat-dye-free colored backgrounds (black, brand hex) have no such constraint — which is also why the dark set for reflective jewelry reads as &ldquo;grounded,&rdquo; not pasted. The studio variants above render an anchored soft shadow by default for exactly this reason; switch it off when a product is a swatch, decal, or flat diagram.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Why browser-side recoloring is free when subscription tools are not</h2>
        <p className="text-sub leading-relaxed mb-4">
          Canva, Photoroom, and the rest meter background swaps because the segmentation runs on their GPUs — see the breakdown in our <a href="/photoroom-pricing-alternative/" className="text-accent underline">Photoroom pricing analysis</a> of how credit systems gate exactly this operation. BatchBG ships the model to your device instead, so the marginal cost of image #500 is your battery, not their invoice. The honest trade-off: very large folders (300+ files) take as long as your machine needs, mobile browsers can out-of-memory on huge JPEGs, and there are no AI scene backgrounds — no fake marble counters or sunset skies. If you need a lifestyle <em>scene</em>, that is a different tool; if you need a <em>color</em>, a solid fill beats generated scenery on every marketplace table above anyway. For pure removal without any fill, use the <a href="/bulk-background-remover/" className="text-accent underline">bulk background remover</a>; for the studio look applied to one hero image, the <a href="/remove-background-from-product-photos/" className="text-accent underline">product-photo editor</a> runs the same engine in single-image mode.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{faq.q}</h3>
              <p className="text-sub leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <p className="text-sub text-sm leading-relaxed mt-10 border-t pt-6">
          Recoloring for a specific marketplace? The <a href="/blog/batch-edit-ebay-photos-white-background/" className="text-accent underline">eBay batch workflow</a>, the <a href="/blog/model-photo-background-change-fashion/" className="text-accent underline">fashion-seller background swap</a>, and the <a href="/blog/what-file-format-keeps-transparent-background/" className="text-accent underline">file-format guide</a> cover the per-platform last mile.
        </p>
      </article>
    </>
  );
}
