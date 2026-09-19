import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Bulk Background Remover — No Signup | BatchBG",
  description: "Remove backgrounds from unlimited product photos at once. 100% local processing in your browser — images never leave your device. Free, fast, no signup required.",
  keywords: "bulk background remover, batch background remover, remove backgrounds in bulk, free background remover",
  openGraph: {
    title: "Free Bulk Background Remover — No Signup",
    description: "Remove backgrounds from unlimited product photos at once. 100% local, no upload, no signup.",
    url: "https://batchbg.com",
    siteName: "BatchBG",
    type: "website",
  },
  alternates: { canonical: "https://batchbg.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/assets/compliance.js"></script>
        <script defer data-domain="batchbg.com" src="https://plausible.io/js/script.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BatchBG",
              url: "https://batchbg.com",
              description: "Free unlimited bulk background remover. 100% local processing, no upload required.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web Browser",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              featureList: ["Bulk background removal", "100% local processing", "No signup required", "Unlimited free usage"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "How many images can I process at once?", acceptedAnswer: { "@type": "Answer", text: "There is no limit. Process 10, 100, or 1,000 images in a single session. The only constraint is your device's available memory." } },
                { "@type": "Question", name: "Are my images uploaded to a server?", acceptedAnswer: { "@type": "Answer", text: "No. All processing happens locally in your browser using ONNX Runtime Web (WebAssembly). Your images never leave your device." } },
                { "@type": "Question", name: "Is it really free? No watermarks?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free with no watermarks, no sign-up, and no per-image charges. Batch processing will always be free." } },
                { "@type": "Question", name: "What image formats are supported?", acceptedAnswer: { "@type": "Answer", text: "Input: JPG, JPEG, PNG, and WebP. Output is always PNG with transparent or solid-color backgrounds." } },
                { "@type": "Question", name: "How does this compare to remove.bg?", acceptedAnswer: { "@type": "Answer", text: "BatchBG is free and unlimited, while remove.bg charges per image and is shutting down December 1, 2026. We process everything locally via WebAssembly." } },
                { "@type": "Question", name: "Can I use the results commercially?", acceptedAnswer: { "@type": "Answer", text: "Yes. All processed images are yours to use for Amazon, Etsy, Shopify, print-on-demand, or any commercial purpose with no restrictions." } },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-ink">Batch<span className="text-green">BG</span></span>
            </a>
            <div className="hidden sm:flex items-center gap-6 text-sm text-sub">
              <a href="/batch-background-remover/" className="hover:text-ink transition-colors">Batch Remover</a>
              <a href="/remove-background-from-product-photos/" className="hover:text-ink transition-colors">Product Photos</a>
              <a href="/amazon-white-background/" className="hover:text-ink transition-colors">Amazon White BG</a>
              <a href="/remove-bg-alternative/" className="hover:text-ink transition-colors">remove.bg Alternative</a>
              <a href="/blog/best-bulk-background-remover-2026/" className="hover:text-ink transition-colors">Blog</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-line bg-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-ink mb-3">Tools</h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li><a href="/" className="hover:text-ink">Bulk Background Remover</a></li>
                  <li><a href="/batch-background-remover/" className="hover:text-ink">Batch Background Remover</a></li>
                  <li><a href="/remove-background-from-product-photos/" className="hover:text-ink">Product Photo BG</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-3">E-Commerce</h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li><a href="/amazon-white-background/" className="hover:text-ink">Amazon White Background</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-3">Alternatives</h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li><a href="/remove-bg-alternative/" className="hover:text-ink">remove.bg Alternative</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li><a href="/privacy/" className="hover:text-ink">Privacy Policy</a></li>
                  <li><a href="/terms/" className="hover:text-ink">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-ink mb-3">Blog</h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li><a href="/blog/best-bulk-background-remover-2026/" className="hover:text-ink">Best Bulk BG Remover 2026</a></li>
                  <li><a href="/blog/remove-bg-shutting-down-migration/" className="hover:text-ink">remove.bg Migration Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-line text-sm text-sub flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} BatchBG. All images processed locally on your device.</p>
              <div className="flex items-center gap-3">
                <span className="tag t-green">🔒 100% Local</span>
                <span className="tag t-green">♾ Unlimited</span>
                <span className="tag t-green">🚫 No Signup</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}