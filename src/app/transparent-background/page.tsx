import type { Metadata } from "next";
import BackgroundRemoverTool from "@/components/BackgroundRemoverTool";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Make Background Transparent in Bulk — Free PNG, No Signup | BatchBG",
  description:
    "Turn hundreds of JPGs into transparent-background PNGs in one pass. Free, unlimited, no upload — the AI runs in your browser. Keeps original resolution and filename.",
  keywords:
    "make background transparent in bulk, batch transparent background, transparent background png free, remove background make transparent, bulk png transparency",
  alternates: { canonical: "https://batchbg.com/transparent-background/" },
  openGraph: {
    title: "Make Backgrounds Transparent in Bulk — Free & Unlimited",
    description: "50 or 5,000 images: one drop, one ZIP, transparent PNGs out. 100% browser-based, no upload, no watermark.",
    url: "https://batchbg.com/transparent-background/",
  },
};

const faqs = [
  {
    q: "How do I make a background transparent in bulk?",
    a: "Drag all your images onto BatchBG at once, keep the output set to Transparent, and click Remove Backgrounds. The AI cuts every image and the ZIP you download contains transparent PNGs with their original filenames — typically 50+ images in under 3 minutes on a normal laptop.",
  },
  {
    q: "Which file format keeps transparency?",
    a: "PNG, WebP, and TIFF support an alpha channel; JPG does not. BatchBG always outputs PNG for transparency because it is accepted everywhere — Amazon, Shopify, Etsy, PowerPoint, Figma, and every browser.",
  },
  {
    q: "Does making a background transparent reduce quality?",
    a: "No. BatchBG processes each image at its original resolution — it never downscales, and pixels outside the cutout become transparent instead of being compressed away. A 3000×3000 JPG in gives a 3000×3000 PNG out.",
  },
  {
    q: "Can I remove backgrounds from 100+ images at once for free?",
    a: "Yes — that is exactly what BatchBG is built for. There is no image cap, no credit system, and no signup. Most online tools cap bulk work at 10–50 images or charge $0.20 per image; BatchBG charges nothing because the AI runs in your own browser.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Background removal runs entirely on your device using an AI model loaded into your browser. Your photos never leave your computer, which is why batch processing is free and unlimited.",
  },
  {
    q: "How do I check that transparency actually worked?",
    a: "Open the PNG in any viewer with a checkerboard backdrop (Figma, Photoshop, most OS preview apps) — the grey-and-white pattern behind the subject means real transparency. A white box around your subject usually means the file is a JPG, not a PNG.",
  },
];

export default function TransparentBackground() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Make Background Transparent in Bulk", url: "https://batchbg.com/transparent-background/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-center mb-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-3">
            Make Backgrounds Transparent in Bulk
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto">
            Drop 50 or 5,000 photos in — get transparent PNGs back in one ZIP. Free and unlimited, because the AI runs in your browser and your images are never uploaded.
          </p>
        </div>
        <BackgroundRemoverTool config={{ mode: "batch", defaultBg: "transparent", showBatchStats: true, folderButton: true, label: "Make Backgrounds Transparent" }} />
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">The 3-Step Bulk Transparency Workflow</h2>
        <ol className="space-y-4 text-sub leading-relaxed">
          <li className="flex gap-3"><span className="font-heading font-bold text-accent shrink-0">1.</span><span>Select all your files (JPG, PNG, or WebP) and drop them on the box above — or use the folder button to bring in a whole product catalog at once.</span></li>
          <li className="flex gap-3"><span className="font-heading font-bold text-accent shrink-0">2.</span><span>Keep the background option on <strong className="text-ink">Transparent</strong> and click Remove Backgrounds. Every image is cut in parallel using your device&apos;s CPU — no queue, no upload wait.</span></li>
          <li className="flex gap-3"><span className="font-heading font-bold text-accent shrink-0">3.</span><span>Click Download ZIP. Inside you get one transparent PNG per source image, with the original filename kept, so SKU-based workflows (B09ABC1234_01.jpg → B09ABC1234_01.png) survive the batch.</span></li>
        </ol>

        <p className="text-sub leading-relaxed mt-6">
          Want the full walkthrough — color key vs AI cutout, verifying real alpha, and fixing edge halos? See the <a href="/blog/png-transparent-background-editor-online/" className="text-accent hover:underline">PNG transparent background editor tutorial</a>. Worried the cutout itself costs you resolution? It does not — <a href="/blog/does-removing-background-reduce-image-quality/" className="text-accent hover:underline">here is where quality actually gets lost</a> and how to test any tool in ten minutes.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">Why People Batch-Transparent Images</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["E-commerce listings", "Marketplaces want cutouts for zoom views and comparison grids. Transparent PNGs let Amazon, Shopify, and Etsy place your product on their own backgrounds."],
            ["Catalog & price lists", "Print and web catalogs composite dozens of products per page. Transparent sources mean no white halos when products sit on colored layouts."],
            ["Mockups & design", "Dropping a transparent product into a lifestyle scene or ad creative is one layer, not an eraser session."],
            ["Ads & thumbnails", "High-contrast ad thumbnails are built by stacking a cutout on a bold background — it only works if the cutout is real transparency."],
          ].map(([t, d]) => (
            <div key={t} className="bg-card rounded-xl border border-line p-4">
              <h3 className="font-heading font-semibold text-ink mb-1 text-sm">{t}</h3>
              <p className="text-sub text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl font-bold text-ink mb-4 mt-10">How It Compares</h2>
        <div className="bg-card rounded-xl border border-line overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-white">
                <th className="text-left p-3 font-semibold">Option</th>
                <th className="text-left p-3 font-semibold">Cost for 100 images</th>
                <th className="text-left p-3 font-semibold">Images leave your PC?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr><td className="p-3 font-semibold text-ink">BatchBG</td><td className="p-3">$0, no cap</td><td className="p-3 text-green">No — 100% local</td></tr>
              <tr><td className="p-3">remove.bg API</td><td className="p-3">~$9 (credits)</td><td className="p-3 text-red">Yes — uploaded</td></tr>
              <tr><td className="p-3">Fotor / generic online tools</td><td className="p-3">Bulk needs paid plan</td><td className="p-3 text-red">Yes — uploaded</td></tr>
              <tr><td className="p-3">Freelancer</td><td className="p-3">$50–$200</td><td className="p-3 text-red">Yes — shared files</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sub text-sm mt-3 leading-relaxed">
          Need the background white instead of transparent? See the{" "}
          <a href="/bulk-background-remover/" className="text-accent hover:underline">bulk background remover</a> page, or the{" "}
          <a href="/remove-background-from-product-photos/" className="text-accent hover:underline">product photo tutorial</a> for marketplace specs.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink mb-6 mt-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-heading font-semibold text-ink mb-1">{f.q}</h3>
              <p className="text-sub leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
