import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BatchBG — Who We Are",
  description: "BatchBG is built by a small team of ML engineers and e-commerce tool makers. Our mission: free, private background removal for every seller.",
  alternates: { canonical: "https://batchbg.com/about/" },
};

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-bold text-3xl text-ink mb-6">About BatchBG</h1>
      
      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-ink mb-3">What We Do</h2>
        <p className="text-sub leading-relaxed mb-4">
          BatchBG removes backgrounds from product photos — for free, with no limits, and without your images ever leaving your device. We built it because every existing tool either charges per image, limits batch sizes, or uploads your photos to remote servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-ink mb-3">How It Works</h2>
        <p className="text-sub leading-relaxed mb-4">
          We use open-source AI models (u2netp and BiRefNet) running entirely in your browser via ONNX Runtime WebAssembly. There is no server processing, no image upload, and no account required. The model runs on your CPU/GPU — your photos stay on your device.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-ink mb-3">Who We Are</h2>
        <p className="text-sub leading-relaxed mb-4">
          We are a small team of ML engineers and e-commerce tool makers. We have built tools used by thousands of Amazon, Etsy, and Shopify sellers. BatchBG is our contribution to making professional image processing accessible to every seller, regardless of budget.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-xl text-ink mb-3">Contact</h2>
        <p className="text-sub leading-relaxed mb-4">
          Email: <a href="mailto:support@batchbg.com" className="text-accent hover:underline">support@batchbg.com</a>
        </p>
        <p className="text-sub leading-relaxed">
          We respond to all emails within 24 hours.
        </p>
      </section>
    </main>
  );
}