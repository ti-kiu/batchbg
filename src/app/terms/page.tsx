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
      <p className="text-sub text-sm mb-8">Last updated: September 19, 2026</p>
      <div className="prose prose-gray max-w-none text-sub leading-relaxed space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">1. Service Description</h2>
          <p>BatchBG is a free, browser-based background removal tool. All processing happens locally on your device using ONNX Runtime WebAssembly. We do not store, access, or process your images on our servers. The service is provided &quot;as is&quot; without warranties of any kind.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">2. Eligibility</h2>
          <p>You must be at least 13 years old to use BatchBG. If you are under 18, you must have parental or guardian consent. By using BatchBG, you represent that you meet these requirements.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">3. Acceptable Use</h2>
          <p>You may use BatchBG for personal and commercial purposes, including processing product photos, portraits, and other images. You retain full ownership and rights to all images you process.</p>
          <p className="mt-2">You agree NOT to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Use BatchBG for any illegal purpose</li>
            <li>Process images that violate copyright or intellectual property rights of others</li>
            <li>Attempt to reverse-engineer, decompile, or extract the AI model</li>
            <li>Use automated scripts to overload the service</li>
            <li>Redistribute or resell BatchBG as your own service</li>
            <li>Process images containing illegal content</li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">4. Intellectual Property</h2>
          <p>The BatchBG website, code, and design are protected by copyright. The AI model (u2netp) is open source under the Apache 2.0 license. All trademarks and logos on this site are the property of their respective owners.</p>
          <p className="mt-2">You retain all rights to images you process through BatchBG. We claim no ownership or license over your content.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">5. AI Processing Disclaimer</h2>
          <p>BatchBG uses AI models (u2netp and BiRefNet) for background removal. While these models produce high-quality results for most images, they may not work perfectly for all images. Results may vary based on image complexity, lighting, and subject-background contrast.</p>
          <p className="mt-2"><strong>Important:</strong> AI-generated results should be reviewed before use in commercial listings. We recommend checking processed images for accuracy, especially for images with complex edges, transparent objects, or similar subject-background colors.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, BatchBG and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities arising from use of the service.</p>
          <p className="mt-2">Our total liability shall not exceed $100 USD.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">7. No Warranty</h2>
          <p>BatchBG is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">8. Changes to Service</h2>
          <p>We reserve the right to modify, suspend, or discontinue BatchBG at any time without notice. We may also update these terms from time to time. Continued use after changes constitutes acceptance of the new terms.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">9. Governing Law</h2>
          <p>These terms are governed by the laws of the United States, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of the United States.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">10. Contact</h2>
          <p>For questions about these terms, contact: legal@batchbg.com</p>
        </div>
      </div>
    </article>
  );
}
