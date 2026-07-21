import type { Metadata } from "next";
import AuditModalTrigger from "@/components/AuditModalTrigger";

const freeReportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://sharkbrandingsolutions.com/free-report#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What's included in the Free AI Audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Free AI Audit covers search presence (how you rank on Google and Bing for searches your customers are making), maps and listings (whether your business information is accurate and consistent across directories), reviews and trust (your star rating, review volume, and how your reputation compares to local competitors), and AI readiness (whether ChatGPT, Perplexity, and Google AI Overviews would recommend your business). Your findings are delivered to your inbox within 48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the Free AI Audit take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Getting started takes 60 seconds, just your business name, location, and email. Your top visibility findings are delivered to your inbox within 48 hours. From there, you book a Google Meet with the Shark AI Solutions team to go through everything together, prioritize what matters most, and build your action plan. The call is free and takes about one hour.",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/free-report",
      url: "https://sharkbrandingsolutions.com/free-report",
      name: "Free AI Visibility Audit | Shark AI Solutions",
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
        description: "Complimentary AI visibility audit for businesses nationwide.",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "AI Visibility Audit",
      knowsAbout: ["AI Visibility", "GEO", "Local SEO", "ChatGPT search", "Google AI Overviews", "Perplexity"],
    },
  ],
};

export const metadata: Metadata = {
  title: "Free AI Visibility Audit | Shark AI Solutions",
  description:
    "See exactly how your business appears across search, maps, reviews, and AI platforms. We walk through every finding with you in a free 1-hour session.",
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
            <span className="text-[#18b5d8]">stands, before you spend a dollar.</span>
          </h1>
          <p className="lead-airy text-[#333333] mb-10">
            We pull your top visibility findings and send them to your inbox within 48 hours. Then we sit down on a Google Meet to build your action plan together. You leave knowing exactly what to fix and in what order. Free, and no commitment required.
          </p>
          {/* Proof strip */}
          <div className="flex items-center justify-center gap-0 border border-[#e8e8ed] rounded-[16px] overflow-hidden divide-x divide-[#e8e8ed] mb-8">
            {[
              { v: "Free", l: "No credit card" },
              { v: "Action", l: "Plan included" },
              { v: "1:1", l: "Personal walkthrough" },
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
              <strong className="text-[#1d1d1f]">Real result:</strong> An HVAC client&rsquo;s audit revealed 4 fixable visibility gaps. After we fixed them, they moved from <strong className="text-[#18b5d8]">#32 → #2</strong> in 30 days, no paid ads.
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
              { n: "1", title: "Tell us about your business", body: "Takes 60 seconds. Your business name, location, and the best email to reach you." },
              { n: "2", title: "Get your top findings", body: "We check your AI visibility, listings, reviews, and search presence. Your findings hit your inbox within 48 hours. Real gaps, specific to your business." },
              { n: "3", title: "Build your plan on a call", body: "Once you have your findings, book a Google Meet with us. We go deeper on everything and you leave with a prioritized list of what to fix first. That's where the strategy happens." },
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
              <strong className="text-[#1d1d1f]">Is this really free?</strong> Yes. No credit card, no contract. You get real findings in your inbox, then a real conversation with us on Google Meet. If you want our help fixing what we find, we can talk about that. If not, you still walk away knowing exactly where you stand.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f5f5f7] px-6 pt-16 pb-0">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-3">Ready to start?</p>
          <p className="text-[22px] font-semibold text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>Enter your business details and we will get started</p>
          <p className="text-[12px] text-[#9b9b9b] font-semibold tracking-[0.1em] uppercase mb-6">
            As seen in{" "}
            <a href="https://www.inc.com/" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#18b5d8] transition-colors">INC.</a>
            {" · "}
            <a href="https://www.wfla.com" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#18b5d8] transition-colors">WFLA News</a>
            {" · "}
            <a href="https://www.tampabay.com" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#18b5d8] transition-colors">Tampa Bay Times</a>
          </p>
          <AuditModalTrigger
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[36px] py-[16px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7] [touch-action:manipulation]"
            label="Get My Free AI Audit"
          />
          <p className="text-[13px] text-[#86868b] mt-4 mb-16">Free. No commitment. Reviewed with you personally.</p>
        </div>
      </section>

      {/* ── Book session ── */}
      <section className="bg-[#f5f5f7] px-6 pt-8 pb-16">
        <div className="max-w-[680px] mx-auto">
          <div className="bg-white border border-[#e8e8ed] rounded-[20px] px-8 py-8 text-center">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-3">Step 3</p>
            <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">Book your strategy call</p>
            <p className="text-[14px] text-[#6e6e73] leading-relaxed mb-6" style={{ textWrap: "balance" }}>
              Once your findings land in your inbox, book a Google Meet with us. We go through everything together, prioritize what matters most, and build your action plan on the call. Your team can run with it, or we can help.
            </p>
            <a
              href="https://bookmenow.info/book/mstanaland/ai-visibility-report-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150"
            >
              Book My Results Walkthrough
            </a>
            <p className="text-[12px] text-[#9b9b9b] mt-4">Free. 1 hour. No commitment required.</p>
          </div>
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
