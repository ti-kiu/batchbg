import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqData = [
  {
    q: "What size should a Shopify banner image be?",
    a: "Start at 2048 x 1024 px (2:1) for a homepage hero or slideshow on a current OS 2.0 theme, and design with the focal point inside the center 80% of the frame. Shopify publishes no official banner dimension — the section height is set by your theme (Dawn calls it Slide Height: small, medium, large), so the aspect ratio your theme crops to matters more than the pixel count. Anything from 1800–2500 px wide is fine as long as you stay under the 25 MP / 20 MB upload ceiling.",
  },
  {
    q: "Is the common 1600 x 500 px Shopify slideshow size still correct?",
    a: "It is folklore, not a spec. 1600 x 500 (3.2:1) came from older theme tutorials and still renders acceptably, but modern OS 2.0 slideshow sections stretch or crop images to whatever slide height you chose in the theme editor. If you upload 1600 x 500 into a section set to a tall \"large\" slide, the theme upscales it and you get a blurry hero. Match the ratio to your slide height setting instead: roughly 2:1 for medium, 4:1 for a short promo strip.",
  },
  {
    q: "What are Shopify's hard limits for banner uploads?",
    a: "Images of any kind — including section and banner images — max out at 5000 x 5000 px, 25 megapixels, and 20 MB per file, per Shopify's product-media documentation. Files that fail any of the three simply refuse to upload. Practically you should also keep banners under about 500 KB: they sit above the fold, and a 4 MB hero is the single fastest way to tank your Largest Contentful Paint score.",
  },
  {
    q: "Can I use a background image on the Shopify checkout page?",
    a: "No, as of February 5, 2026 Shopify removed the ability to add a background image to the checkout header and main content area. Checkout branding is now logo, colors, and fonts only (checkout and accounts editor). Guides still telling you to upload an 1800 x 300 px checkout banner are describing a feature that no longer exists. Storefront section banners are unaffected.",

  },
  {
    q: "Do banner images count toward my Shopify storage limit?",
    a: "Files uploaded through Content → Files count against your plan's storage pool (100 GB on Basic, 500 GB on Advanced). Images attached through the theme editor are stored as theme/shop assets rather than in Files, but keeping old campaign banners in Files is one of the first things to sweep when a store reports being near the cap — see the Shopify file storage limit breakdown.",
  },
  {
    q: "How do I make desktop and mobile banners without two designs?",
    a: "Export one wide master (e.g. 2400 x 1200) and let the theme crop, but place all text and the product inside the middle 60% vertically so mobile portrait crops never cut a headline. If your theme's mobile slide is genuinely a different shape (800 x 1200-style sections exist on some themes), create the second frame by cropping the master with the same focal box — a batch resizer set to crop-to-ratio does both sizes in one pass.",
  },
];

export const metadata: Metadata = {
  title: "Shopify Banner Size: The Real Spec Is Your Theme, Not 1600x500 | BatchBG",
  description:
    "Shopify publishes no official banner dimensions. The actual constraints are the 25MP/20MB upload ceiling, your theme's crop, and one 2026 change that killed checkout banners. Here is the working size table per section.",
  keywords:
    "shopify banner size, banner size for shopify, shopify banner dimensions, shopify slideshow image size, shopify hero image size, shopify checkout banner",
  alternates: { canonical: "https://batchbg.com/shopify-banner-size/" },
  openGraph: {
    title: "Shopify Banner Size: What Actually Determines It (2026)",
    description:
      "No official spec exists — the real rules are theme crop, 5000x5000/25MP/20MB ceilings, and the Feb 2026 removal of checkout background images. Section-by-section working sizes plus a batch prep workflow.",
    url: "https://batchbg.com/shopify-banner-size/",
    siteName: "BatchBG",
    type: "article",
  },
};

export default function ShopifyBannerSize() {
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
      <BreadcrumbSchema items={[{ name: "Shopify Banner Size", url: "https://batchbg.com/shopify-banner-size/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Shopify Banner Size: The Real Spec Is Your Theme, Not 1600x500",
            description:
              "Every Shopify banner rule that actually binds: the 5000x5000 px / 25 MP / 20 MB upload ceilings, how OS 2.0 theme sections crop instead of resize, section-by-section working dimensions, the February 2026 checkout background-image removal, and a batch workflow that outputs desktop and mobile frames from one master.",
            author: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            publisher: { "@type": "Organization", name: "BatchBG", url: "https://batchbg.com" },
            datePublished: "2026-10-29",
            dateModified: "2026-10-29",
            url: "https://batchbg.com/shopify-banner-size/",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sub text-sm mb-2">October 29, 2026 · 6 min read</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink mb-4">
          Shopify Banner Size: The Number Everyone Cites Is Not a Spec
        </h1>
        <p className="text-sub text-lg leading-relaxed mb-6">
          There is no official Shopify banner size. The &ldquo;2048&nbsp;&times;&nbsp;1024 desktop / 1600&nbsp;&times;&nbsp;500 slideshow&rdquo; table copied around the internet is third-party folklore — Shopify&rsquo;s own documentation sets only <strong className="text-ink">upload ceilings: 5000&nbsp;&times;&nbsp;5000&nbsp;px, 25&nbsp;MP, 20&nbsp;MB per image</strong> — and the shape you actually see is decided by <em>your theme&rsquo;s section settings</em>, which crop rather than resize. The practical answer for a current OS&nbsp;2.0 theme (Dawn-class): design one <strong className="text-ink">2:1 master around 2400&nbsp;&times;&nbsp;1200&nbsp;px</strong>, keep text and focal content inside the center 80%, compress under ~500&nbsp;KB, and let the CDN variants do the rest. One more rule changed in 2026: checkout background images are gone entirely (details below).
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-8">The three constraints that are actually official</h2>
        <ul className="list-disc pl-6 text-sub space-y-2 mb-4">
          <li><strong className="text-ink">5000 x 5000 px / 25 megapixels / 20 MB.</strong> Shopify&rsquo;s media documentation caps every image — product, collection, and section images alike — at these three numbers. Fail any one and the upload is rejected. There is no separate &ldquo;banner max&rdquo;.</li>
          <li><strong className="text-ink">200 files max per multi-upload.</strong> Preparing a seasonal banner set? Files and product media upload in batches of 200 at most; larger batches must be selected and repeated.</li>
          <li><strong className="text-ink">Performance, not dimensions.</strong> Banners sit above the fold. A 3–4 MB hero is the most common self-inflicted LCP failure on Shopify homepages; a 2400&nbsp;px JPEG at quality 80 is routinely under 400&nbsp;KB and visually identical at slide size. The <a href="/batch-image-compressor/" className="text-accent underline">batch image compressor</a> exists precisely for this cap-and-quality pass.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Why the theme decides the shape: crop, not resize</h2>
        <p className="text-sub leading-relaxed mb-4">
          OS&nbsp;2.0 sections (Slideshow, Image Banner, Video) define a container with its own aspect behavior — Dawn exposes it as <em>Slide Height: small / medium / large</em> — and CSS fills that container by cropping your image, never by letterboxing it. Consequences that the copy-paste size tables gloss over:
        </p>
        <ul className="list-disc pl-6 text-sub space-y-2 mb-4">
          <li>Uploading a short 1600&nbsp;&times;&nbsp;500 strip into a &ldquo;large&rdquo; slide stretches or upscales it — blurriness is a ratio mismatch, not a resolution problem.</li>
          <li>A tall master (2:3) in a wide section loses its top and bottom on desktop. Anything burned into the outer frame — logo, headline, promo code — gets cut at unpredictable edges per device.</li>
          <li>Shopify&rsquo;s CDN auto-generates sized variants from whatever you upload, so pixel-perfect exports per breakpoint are wasted effort. What you cannot outsource to the CDN is <em>composition</em>: keep all critical content in the center 80% (the safe zone) and edges become expendable.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Working dimensions per section (OS 2.0 themes)</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-sub border-collapse">
            <thead>
              <tr className="bg-card text-left">
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Section</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Master to design</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Ratio logic</th>
                <th className="font-heading font-semibold text-ink px-3 py-2 border-b">Watch out for</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="px-3 py-2 border-b">Homepage hero / Slideshow (medium)</td><td className="px-3 py-2 border-b">2400 x 1200</td><td className="px-3 py-2 border-b">~2:1</td><td className="px-3 py-2 border-b">Mobile slides crop harder — text in center 60% vertically</td></tr>
              <tr><td className="px-3 py-2 border-b">Promo bar / Image Banner (short)</td><td className="px-3 py-2 border-b">2400 x 600</td><td className="px-3 py-2 border-b">~4:1</td><td className="px-3 py-2 border-b">Tiny type gets unreadable after mobile crop; keep one short message</td></tr>
              <tr><td className="px-3 py-2 border-b">Collection page banner</td><td className="px-3 py-2 border-b">2000 x 800–1000</td><td className="px-3 py-2 border-b">2–2.5:1</td><td className="px-3 py-2 border-b">Theme title overlay collides with in-image text</td></tr>
              <tr><td className="px-3 py-2 border-b">Full-width background image</td><td className="px-3 py-2 border-b">2560 x 1440</td><td className="px-3 py-2 border-b">16:9</td><td className="px-3 py-2 border-b">Needs the lightest compression — it repeats behind content</td></tr>
              <tr><td className="px-3 py-2 border-b">Blog featured image</td><td className="px-3 py-2 border-b">1600 x 900</td><td className="px-3 py-2 border-b">16:9</td><td className="px-3 py-2 border-b">Some themes list at 3:2 — check the grid, not the post page</td></tr>
              <tr><td className="px-3 py-2 border-b">Email / footer strip</td><td className="px-3 py-2 border-b">1200 x 400</td><td className="px-3 py-2 border-b">3:1</td><td className="px-3 py-2 border-b">Clients clamp to 600 px wide anyway — bake legibility at that size</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub leading-relaxed mb-4">
          None of these are Shopify requirements — they are the ratios the corresponding section containers render at on mainstream OS&nbsp;2.0 themes. The verification method beats memorizing any table: open <em>Customize → click the section → note its height preset</em>, screenshot the rendered area, and design to that ratio. Product photography dimension rules (square vs. fit, the 2048&nbsp;px sweet spot, zoom threshold) live in the <a href="/blog/shopify-product-image-size-guide/" className="text-accent underline">Shopify product image size guide</a>.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">The 2026 change most guides still miss</h2>
        <p className="text-sub leading-relaxed mb-4">
          As of <strong className="text-ink">February 5, 2026</strong>, Shopify removed background images from the checkout header and main content area (checkout and accounts editor documentation). Older articles still recommending an &ldquo;1800&nbsp;&times;&nbsp;300 checkout banner&rdquo; describe a retired feature. Checkout branding today is logo + colors + fonts; if your campaign art is designed around a checkout backdrop, redesign it for the storefront sections that still accept images — or the <a href="/photoroom-pricing-alternative/" className="text-accent underline">tools you pay for per-scene</a> need re-scoping too.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Producing a banner set in one pass, offline</h2>
        <p className="text-sub leading-relaxed mb-4">
          Seasonal refreshes mean 8–15 section images across campaigns, and they all share the same failure mode: exported at 4K PNG from the design tool, 4–8 MB each, uploaded straight in. The whole set can be prepped locally in minutes, no upload to any service:
        </p>
        <ol className="list-decimal pl-6 text-sub space-y-3 mb-6">
          <li><strong className="text-ink">Export one master per campaign</strong> at 2:1 or 16:9, whatever the tallest target section is.</li>
          <li><strong className="text-ink">Batch resize the family</strong> with the <a href="/bulk-image-resizer-shopify/" className="text-accent underline">bulk image resizer</a> — long edge 2400–2560 px, ratios locked to the table above; use crop-to-fill for the short promo strips rather than fit, which letterboxes.</li>
          <li><strong className="text-ink">Compress to the byte target</strong> (quality 80 JPEG, or <a href="/transparent-background/" className="text-accent underline">transparent PNG</a> only where the section shows the page background through the art) with the batch compressor in the same pass.</li>
          <li><strong className="text-ink">Verify the safe zone</strong> by opening each file at 800 px width — if the headline still reads, mobile crop will not eat it.</li>
          <li><strong className="text-ink">Upload in batches of ≤200 files</strong>, publish, and re-check every section on an actual phone, not the theme editor&rsquo;s desktop preview.</li>
        </ol>
        <p className="text-sub leading-relaxed mb-4">
          If the banners carry cutout products rather than photos, remove those backgrounds in bulk first — the <a href="/bulk-background-remover/" className="text-accent underline">bulk background remover</a> outputs transparent PNGs of a whole supplier folder in one pass, which is also how you avoid paying scene-generation subscriptions per campaign.
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
          Prepping a seasonal banner set? Size the family with the <a href="/bulk-image-resizer-shopify/" className="text-accent underline">Shopify-sized bulk resizer</a>, compress below the LCP budget with the <a href="/batch-image-compressor/" className="text-accent underline">batch compressor</a>, and if your store is also fighting &ldquo;storage limit reached&rdquo;, sweep old campaign art per the <a href="/shopify-file-storage-limit/" className="text-accent underline">file storage guide</a>.
        </p>
      </article>
    </>
  );
}
