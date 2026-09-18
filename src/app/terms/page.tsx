import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BatchBG",
  description: "BatchBG terms of service. Free background removal tool for personal and commercial use.",
  alternates: { canonical: "https://batchbg.com/terms/" },
};

export default function Terms() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-bold text-3xl text-ink mb-6">Terms of Service</h1>
      <p className="text-sub text-sm mb-8">Last updated: September 18, 2026</p>
      <div className="prose prose-gray max-w-none text-sub leading-relaxed space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Service Description</h2>
          <p>BatchBG is a free, browser-based background removal tool. All processing happens locally on your device. We do not store, access, or process your images on our servers.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Acceptable Use</h2>
          <p>You may use BatchBG for personal and commercial purposes, including processing product photos, portraits, and other images. You retain full ownership and rights to all images you process.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Limitation of Liability</h2>
          <p>BatchBG is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from use of the service. The AI model may not produce perfect results for all images.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Changes</h2>
          <p>We may update these terms from time to time. Continued use of BatchBG after changes constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </article>
  );
}
