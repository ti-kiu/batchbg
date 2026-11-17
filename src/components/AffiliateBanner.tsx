const RETOUCH4ME = "https://plrvq.com/g/gp8po8i1u7e896ed030045d8e108c6/?ulp=https%3A%2F%2Fretouch4me.com%2Fstore";
const VECTORSTOCK = "https://grfpr.com/g/e8s706m24be896ed030069ba13f9ec/?ulp=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vectors%2Fbackground-vectors";
const ALIEXPRESS = "https://rzekl.com/g/1e8d114494e896ed030016525dc3e8/?ulp=https%3A%2F%2Fwww.aliexpress.com%2Fw%2Fwholesale-photo-backdrop.html";
const ALIBABA = "https://rzekl.com/g/pm1aev55cle896ed0300219aa26f6f/?ulp=https%3A%2F%2Fwww.alibaba.com%2F";
const PARALLELS = "https://ficca2021.com/g/5ermu17f1ne896ed0300ad29faedc4/";

export default function AffiliateBanner() {
  return (
    <div className="my-8 border border-line rounded-xl overflow-hidden bg-card">
      <div className="px-4 py-1.5 bg-ink/[0.04] border-b border-line flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-sub/70">Sponsored · 推广</span>
        <span className="text-[11px] text-sub/60">Admitad Partner</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-5 sm:border-r border-b sm:border-b-0 border-line">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-white font-bold text-sm shrink-0">R4</div>
            <h4 className="font-heading font-semibold text-ink text-sm">Retouch4me — AI Retouch Plugins</h4>
          </div>
          <p className="text-sub text-sm leading-relaxed mb-4">One-click dust removal, reflections, and drop shadows for product photos. Batch-process a full catalog in minutes inside Photoshop, Affinity, or Capture One.</p>
          <a href={RETOUCH4ME} target="_blank" rel="sponsored nofollow" className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Try Retouch4me →
          </a>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#00b066] flex items-center justify-center text-white font-bold text-sm shrink-0">VS</div>
            <h4 className="font-heading font-semibold text-ink text-sm">VectorStock — Background Vectors</h4>
          </div>
          <p className="text-sub text-sm leading-relaxed mb-4">Millions of royalty-free studio backdrops and lifestyle scenes. Composite your BatchBG cutouts onto surfaces, interiors, and seasonal setups — sharp at any banner size.</p>
          <a href={VECTORSTOCK} target="_blank" rel="sponsored nofollow" className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Browse Backdrops →
          </a>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#e62e2e] flex items-center justify-center text-white font-bold text-sm shrink-0">AE</div>
            <h4 className="font-heading font-semibold text-ink text-sm">AliExpress — Photo Studio Gear</h4>
          </div>
          <p className="text-sub text-sm leading-relaxed mb-4">Backdrop stands, light boxes, and seamless paper rolls that make clean cutouts easy in-camera. Gear under $30 that pays for itself on your first catalog shoot.</p>
          <a href={ALIEXPRESS} target="_blank" rel="sponsored nofollow" className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Shop Photo Gear →
          </a>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff6a00] flex items-center justify-center text-white font-bold text-sm shrink-0">AB</div>
            <h4 className="font-heading font-semibold text-ink text-sm">Alibaba.com — Custom Packaging</h4>
          </div>
          <p className="text-sub text-sm leading-relaxed mb-4">Once your listings look right, source branded boxes, mailers, and inserts at factory price. MOQ-friendly suppliers for Amazon FBA and DTC brands.</p>
          <a href={ALIBABA} target="_blank" rel="sponsored nofollow" className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Find Suppliers →
          </a>
        </div>
        <div className="p-5 lg:border-l border-line">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#c0392b] flex items-center justify-center text-white font-bold text-sm shrink-0">P</div>
            <h4 className="font-heading font-semibold text-ink text-sm">Parallels Desktop — Run Windows Apps</h4>
          </div>
          <p className="text-sub text-sm leading-relaxed mb-4">Need Photoshop, Lightroom, or seller-tool Windows-only software on a Mac? Parallels runs Windows inside macOS without reboot — the standard setup for design-heavy seller workflows.</p>
          <a href={PARALLELS} target="_blank" rel="sponsored nofollow" className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Try Parallels →
          </a>
        </div>
      </div>
    </div>
  );
}
