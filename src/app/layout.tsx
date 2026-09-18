import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BatchBG — Free Bulk Background Remover | No Upload, No Signup",
  description:
    "Remove backgrounds from unlimited images at once. 100% local processing — your photos never leave your device. Free, fast, no signup required.",
  keywords:
    "bulk background remover, batch background remover, remove backgrounds in bulk, free background remover, no upload background remover",
  openGraph: {
    title: "BatchBG — Free Bulk Background Remover",
    description:
      "Remove backgrounds from unlimited images at once. 100% local, no upload, no signup.",
    url: "https://batchbg.com",
    siteName: "BatchBG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BatchBG — Free Bulk Background Remover",
    description:
      "Remove backgrounds from unlimited images at once. 100% local, no upload, no signup.",
  },
  alternates: {
    canonical: "https://batchbg.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BatchBG",
              url: "https://batchbg.com",
              description:
                "Free unlimited bulk background remover. 100% local processing, no upload required.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Bulk background removal",
                "100% local processing",
                "No signup required",
                "Unlimited free usage",
                "ZIP batch download",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl text-ink">
                Batch<span className="text-success">BG</span>
              </span>
            </a>
            <div className="hidden sm:flex items-center gap-6 text-sm text-sub">
              <a
                href="/batch-background-remover/"
                className="hover:text-ink transition-colors"
              >
                Batch Remover
              </a>
              <a
                href="/remove-background-from-product-photos/"
                className="hover:text-ink transition-colors"
              >
                Product Photos
              </a>
              <a
                href="/amazon-white-background/"
                className="hover:text-ink transition-colors"
              >
                Amazon White BG
              </a>
              <a
                href="/remove-bg-alternative/"
                className="hover:text-ink transition-colors"
              >
                remove.bg Alternative
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-line bg-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-heading font-semibold text-ink mb-3">
                  Tools
                </h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li>
                    <a href="/" className="hover:text-ink">
                      Bulk Background Remover
                    </a>
                  </li>
                  <li>
                    <a
                      href="/batch-background-remover/"
                      className="hover:text-ink"
                    >
                      Batch Background Remover
                    </a>
                  </li>
                  <li>
                    <a
                      href="/remove-background-from-product-photos/"
                      className="hover:text-ink"
                    >
                      Product Photo BG
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-3">
                  E-Commerce
                </h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li>
                    <a
                      href="/amazon-white-background/"
                      className="hover:text-ink"
                    >
                      Amazon White Background
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-ink opacity-50">
                      Etsy Listing Photos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-ink opacity-50">
                      Shopify Product Images
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-3">
                  Alternatives
                </h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li>
                    <a
                      href="/remove-bg-alternative/"
                      className="hover:text-ink"
                    >
                      remove.bg Alternative
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-3">
                  Legal
                </h4>
                <ul className="space-y-2 text-sm text-sub">
                  <li>
                    <a href="/privacy/" className="hover:text-ink">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms/" className="hover:text-ink">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-line text-sm text-sub flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>
                © {new Date().getFullYear()} BatchBG. All images are processed
                locally on your device.
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1 text-xs bg-success-bg text-success px-2 py-1 rounded-full">
                  🔒 100% Local
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-success-bg text-success px-2 py-1 rounded-full">
                  ♾ Unlimited
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-success-bg text-success px-2 py-1 rounded-full">
                  🚫 No Signup
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
