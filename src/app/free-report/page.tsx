import type { Metadata } from "next";
import SnapshotWidget from "@/components/SnapshotWidget";

const freeReportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/free-report",
      url: "https://sharkbrandingsolutions.com/free-report",
      name: "Free AI Visibility Audit — Shark AI Solutions",
      description: "See exactly how your business appears across search, maps, reviews, and AI platforms. Delivered within 48 hours.",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
    },
    {
      "@type": "Service",
      "@id": "https://sharkbrandingsolutions.com/free-report#service",
      name: "Free AI Visibility Audit",
      description: "A comprehensive audit showing how your business appears across Google, ChatGPT, Gemini, Perplexity, and local search. Delivered within 48 hours and reviewed personally with your team.",
      provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      url: "https://sharkbrandingsolutions.com/free-report",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Complimentary AI visibility audit for Tampa Bay businesses.",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      },
      areaServed: [
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "City", name: "Tampa" },
        { "@type": "City", name: "Lutz" },
        { "@type": "City", name: "Land O Lakes" },
        { "@type": "City", name: "St. Petersburg" },
      ],
      serviceType: "AI Visibility Audit",
      knowsAbout: ["AI Visibility", "GEO", "Local SEO", "ChatGPT search", "Google AI Overviews", "Perplexity"],
    },
  ],
};

export const metadata: Metadata = {
  title: "Free AI Audit — Shark AI Solutions",
  description:
    "See exactly how your business appears across search, maps, reviews, and AI platforms. Delivered within 48 hours. We walk you through it personally.",
};

export default function FreeReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(freeReportSchema) }} />
      {/* ── Hero ── */}
      <section className="bg-white min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[640px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Free AI Audit
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            See exactly where your business
            <br />
            <span className="text-[#18b5d8]">stands — before you spend a dollar.</span>
          </h1>
          <p className="lead-airy text-[#333333] mb-10">
            We audit how your business appears across AI search, maps, and reviews — then call you personally to walk through what we found. 100% free. No pitch.
          </p>
          {/* Proof strip */}
          <div className="flex items-center justify-center gap-0 border border-[#e8e8ed] rounded-[16px] overflow-hidden divide-x divide-[#e8e8ed] mb-8">
            {[
              { v: "Free", l: "No credit card" },
              { v: "Action", l: "Plan included" },
              { v: "Local", l: "Tampa Bay focused" },
            ].map((s) => (
              <div key={s.l} className="flex-1 py-5 px-4 text-center">
                <p className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-[#18b5d8] leading-none mb-1">{s.v}</p>
                <p className="text-[13px] text-[#7a7a7a] font-semibold">{s.l}</p>
              </div>
            ))}
          </div>
          {/* HVAC proof */}
          <div className="bg-[#f5f5f7] border border-[#e0e0e0] rounded-[14px] px-6 py-4 text-left">
            <p className="text-[14px] text-[#333333] leading-relaxed">
              <strong className="text-[#1d1d1f]">Real result:</strong> An HVAC client&rsquo;s audit revealed 4 fixable visibility gaps. After we fixed them, they moved from <strong className="text-[#18b5d8]">#32 → #2</strong> in 30 days — no paid ads.
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white px-6 pb-10">
        <div className="max-w-[680px] mx-auto">
          <p className="text-center text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-8">How It Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: "1", title: "Enter your business", body: "Takes 60 seconds. Just your business name and location." },
              { n: "2", title: "We run the audit", body: "Our team checks your AI visibility, listings, reviews, and search presence." },
              { n: "3", title: "Book your results walkthrough", body: "Pick a time on our calendar. We go through every finding together and you leave with a prioritized action plan — your team can tackle it, or we can help." },
            ].map((step) => (
              <div key={step.n} className="bg-[#f5f5f7] rounded-[16px] p-6 text-center">
                <div className="w-9 h-9 rounded-full bg-[#18b5d8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-[13px]">{step.n}</span>
                </div>
                <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">{step.title}</p>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          {/* Objection */}
          <div className="mt-6 bg-[#f5f5f7] border-l-4 border-[#18b5d8] rounded-r-[12px] px-6 py-4">
            <p className="text-[14px] text-[#333333] leading-relaxed">
              <strong className="text-[#1d1d1f]">Is this really free?</strong> Yes — no credit card, no contract, no sales pressure. You get a real report and a real call. If you want help fixing what we find, we can talk about that. If not, the audit is yours to keep.
            </p>
          </div>
        </div>
      </section>

      {/* ── Widget ── */}
      <section className="bg-[#f5f5f7] px-6 py-16">
        <div className="max-w-[680px] mx-auto">
          <SnapshotWidget />
        </div>
      </section>

      {/* ── What's in the report ── */}
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">What you get</p>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              A complete picture of your online visibility.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                n: "01",
                title: "Search presence",
                body: "How you rank on Google and Bing for the searches your customers are actually making.",
              },
              {
                n: "02",
                title: "Maps & listings",
                body: "Whether your business information is accurate, complete, and consistent across directories.",
              },
              {
                n: "03",
                title: "Reviews & trust",
                body: "Your star rating, review volume, and how your reputation compares to local competitors.",
              },
              {
                n: "04",
                title: "AI readiness",
                body: "Whether ChatGPT, Perplexity, and Google AI Overviews would recommend your business.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#07141a] rounded-[20px] p-7 border border-white/5">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">{item.n}</span>
                <h3 className="text-[19px] font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
