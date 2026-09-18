import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BatchBG",
  description: "BatchBG privacy policy. Your images are processed entirely in your browser — we never collect, store, or transmit your files.",
  alternates: { canonical: "https://batchbg.com/privacy/" },
};

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-bold text-3xl text-ink mb-6">Privacy Policy</h1>
      <p className="text-sub text-sm mb-8">Last updated: September 18, 2026</p>
      <div className="prose prose-gray max-w-none text-sub leading-relaxed space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Image Processing</h2>
          <p>All image processing in BatchBG happens entirely within your web browser using client-side JavaScript (ONNX Runtime Web). Your images are never uploaded to our servers or any third-party service. We have no access to your images at any point.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Data We Collect</h2>
          <p>We collect anonymous usage analytics (page views, feature usage) through Google Analytics. This data does not include your images, filenames, or any content you process. We do not use cookies for tracking individual users.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Third-Party Services</h2>
          <p>We use Google Analytics for anonymous usage statistics. We use Cloudflare for content delivery. Neither service has access to images you process in BatchBG.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Contact</h2>
          <p>For privacy questions, contact: privacy@batchbg.com</p>
        </div>
      </div>
    </article>
  );
}
