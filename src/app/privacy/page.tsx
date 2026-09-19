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
      <p className="text-sub text-sm mb-8">Last updated: September 19, 2026</p>
      <div className="prose prose-gray max-w-none text-sub leading-relaxed space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Image Processing</h2>
          <p>All image processing in BatchBG happens entirely within your web browser using client-side JavaScript (ONNX Runtime WebAssembly). Your images are never uploaded to our servers or any third-party service. We have no access to your images at any point. Images remain on your device and are processed using your device&apos;s CPU.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Data We Collect</h2>
          <p>We collect anonymous usage analytics (page views, feature usage) through <strong>Plausible Analytics</strong>, a privacy-friendly, cookieless analytics platform. Plausible does not use cookies, does not track users across websites, and does not collect personal data. All analytics data is aggregated and cannot identify individual users.</p>
          <p>We do not collect: your images, filenames, IP addresses, browser fingerprints, or any personally identifiable information.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Cookies</h2>
          <p>BatchBG does not use cookies. We do not store any data on your device beyond the browser&apos;s standard caching of static assets (HTML, CSS, JavaScript, and the AI model file).</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Third-Party Services</h2>
          <p><strong>Plausible Analytics:</strong> Privacy-friendly, cookieless analytics. No personal data collected. <a href="https://plausible.io/privacy" className="text-accent hover:underline" target="_blank" rel="noopener">Plausible Privacy Policy</a>.</p>
          <p><strong>Cloudflare:</strong> Content delivery network (CDN) for serving static files. Cloudflare processes standard HTTP request data (IP address, user agent) for security and performance. <a href="https://www.cloudflare.com/privacypolicy/" className="text-accent hover:underline" target="_blank" rel="noopener">Cloudflare Privacy Policy</a>.</p>
          <p><strong>jsDelivr CDN:</strong> Used to load ONNX Runtime WebAssembly files. Standard CDN logs may be recorded. <a href="https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-com" className="text-accent hover:underline" target="_blank" rel="noopener">jsDelivr Privacy Policy</a>.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Your Rights (GDPR)</h2>
          <p>If you are in the European Economic Area (EEA), you have the following rights under GDPR:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Right to Access:</strong> Request a copy of personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
            <li><strong>Right to Restrict Processing:</strong> Request restriction of processing your personal data.</li>
            <li><strong>Right to Data Portability:</strong> Request transfer of your data in a machine-readable format.</li>
            <li><strong>Right to Object:</strong> Object to processing of your personal data.</li>
          </ul>
          <p className="mt-2">Since we do not collect personal data through BatchBG, these rights primarily apply to any correspondence you initiate with us. To exercise these rights, contact us at privacy@batchbg.com.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Your Rights (CCPA)</h2>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Right to Know:</strong> We do not sell personal information. We collect only anonymous, aggregated analytics.</li>
            <li><strong>Right to Delete:</strong> Request deletion of any personal information we may have.</li>
            <li><strong>Right to Opt-Out:</strong> We do not sell personal information, so there is nothing to opt out of.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Data Retention</h2>
          <p>We do not retain any user data. Analytics data is aggregated and stored by Plausible Analytics for 12 months, after which it is automatically deleted. No personal data is stored on our servers.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Children&apos;s Privacy</h2>
          <p>BatchBG is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify users of any material changes by updating the &quot;Last updated&quot; date at the top of this page. Continued use of BatchBG after changes constitutes acceptance of the updated policy.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-ink mb-2">Contact</h2>
          <p>For privacy questions or to exercise your rights, contact:</p>
          <p className="mt-2"><strong>Email:</strong> privacy@batchbg.com</p>
          <p><strong>Response time:</strong> Within 30 days of receiving your request.</p>
        </div>
      </div>
    </article>
  );
}
