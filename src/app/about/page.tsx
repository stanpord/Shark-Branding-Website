import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Shark Branding Solutions",
  description:
    "Meet Michelle Stanaland, Founder and CEO of Shark Branding Solutions — Top 15 Marketing Expert in Tampa Bay.",
};

const values = [
  {
    n: "01",
    title: "Clarity over complexity",
    body: "We translate AI and marketing into plain strategy. No jargon. No fluff. Just what moves the needle.",
  },
  {
    n: "02",
    title: "Results, not reports",
    body: "We measure success by your ranking movement, visibility score, and the calls you receive, not activity metrics.",
  },
  {
    n: "03",
    title: "Local first",
    body: "We're based in Wesley Chapel. We know Tampa Bay. We understand what local buyers want and how they search.",
  },
  {
    n: "04",
    title: "Honest before anything",
    body: "Our free visibility report tells the truth, even if the truth is uncomfortable. That's where real progress starts.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            About Us
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            We make businesses
            <br />
            <span className="text-[#18b5d8]">impossible to ignore.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[540px] mx-auto" style={{ textWrap: "balance" }}>
            Shark Branding Solutions was built on a simple belief: every great business deserves to be found by the right people, at the right moment, on every platform.
          </p>
        </div>
      </section>

      {/* ── Seen In — scrolling media strip ── */}
      <div className="bg-[#111] py-8 overflow-hidden border-y border-white/5">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25 mb-6">As Seen In</p>
        <div
          className="flex min-w-max gap-14 whitespace-nowrap motion-safe:animate-[marquee_38s_linear_infinite]"
          aria-hidden="true"
        >
          {[
            { name: "NBC", style: "font-black" },
            { name: "ABC", style: "font-black" },
            { name: "CBS", style: "font-black" },
            { name: "FOX", style: "font-black" },
            { name: "The CW", style: "font-bold" },
            { name: "Telemundo", style: "font-bold italic" },
            { name: "The Morning Blend", style: "font-semibold" },
            { name: "Tampa Home Talk", style: "font-semibold" },
            { name: "102.5 The Bone", style: "font-bold" },
            { name: "The Business Journals", style: "font-semibold" },
            { name: "Creative Loafing Tampa Bay", style: "font-semibold" },
            { name: "Yahoo! News", style: "font-bold" },
            { name: "NBC", style: "font-black" },
            { name: "ABC", style: "font-black" },
            { name: "CBS", style: "font-black" },
            { name: "FOX", style: "font-black" },
            { name: "The CW", style: "font-bold" },
            { name: "Telemundo", style: "font-bold italic" },
            { name: "The Morning Blend", style: "font-semibold" },
            { name: "Tampa Home Talk", style: "font-semibold" },
            { name: "102.5 The Bone", style: "font-bold" },
            { name: "The Business Journals", style: "font-semibold" },
            { name: "Creative Loafing Tampa Bay", style: "font-semibold" },
            { name: "Yahoo! News", style: "font-bold" },
          ].map((logo, i) => (
            <span key={i} className={`text-[15px] tracking-wide text-white/40 uppercase ${logo.style}`}>
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Michelle ── */}
      <section id="michelle" className="bg-[#0a0a0a] px-6 py-24">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">Founder</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-white/50">Leadership</span>
            </div>
            <h2 className="display-lg text-white mb-3">Michelle Stanaland</h2>
            <p className="text-[17px] text-white/40 mb-8">Founder &amp; CEO</p>
            <div className="inline-flex items-center gap-3 bg-white/6 border border-white/10 rounded-[12px] px-5 py-3">
              <span className="text-[#18b5d8] text-[18px]" aria-hidden="true">★</span>
              <span className="text-[14px] font-semibold text-white">Top 15 Marketing Expert in Tampa Bay</span>
              <span className="text-[12px] text-white/35">Influence Digest, 2025</span>
            </div>
          </div>
          <div className="space-y-6">
            <p className="body-copy text-white/60 leading-relaxed">
              Michelle Stanaland is a recognized marketing strategist and AI visibility expert serving businesses across Tampa Bay. In 2025, she was named one of the{" "}
              <strong className="font-semibold text-white">Top 15 Marketing Experts in Tampa Bay</strong>{" "}
              by Influence Digest, a recognition of her commitment to results over rhetoric.
            </p>
            <p className="body-copy text-white/60 leading-relaxed">
              Before founding Shark Branding Solutions, Michelle observed a consistent pattern: talented, hardworking business owners were losing customers not because of their product or service, but because they couldn&rsquo;t be found. As AI search platforms changed how buyers discover businesses, the gap between visible and invisible grew wider, and she built a firm to close it.
            </p>
            <p className="body-copy text-white/60 leading-relaxed">
              Based in Wesley Chapel, Michelle works directly with clients across Lutz, Land O&rsquo; Lakes, St. Petersburg, and the wider Tampa Bay area, bringing enterprise-level AI strategy to local businesses that deserve to compete.
            </p>
          </div>
        </div>
      </section>

      {/* ── Results & Accomplishments ── */}
      <section className="bg-[#f5f5f7] px-6 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Documented Results</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Our results &amp; accomplishments.
            </h2>
          </div>

          {/* Nominations / awards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-[20px] p-7 border-l-4 border-[#18b5d8]">
              <p className="text-[11px] font-bold text-[#18b5d8] tracking-[0.18em] uppercase mb-3">Nominations</p>
              <p className="text-[20px] font-bold text-[#0a0a0a] leading-snug">Top 100 Most Influential People in the Marketing &amp; Advertising Industry</p>
            </div>
            <div className="bg-white rounded-[20px] p-7 border-l-4 border-[#F7555F]">
              <p className="text-[11px] font-bold text-[#F7555F] tracking-[0.18em] uppercase mb-3">Award</p>
              <p className="text-[20px] font-bold text-[#0a0a0a] leading-snug">CEO of the Year</p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                stat: "4 min",
                label: "to first product sale",
                body: "Product sales within 4 minutes of product launch. 5 media interviews booked within 3 days of new site going live.",
                color: "#18b5d8",
              },
              {
                stat: "48 hrs",
                label: "strategy to execution",
                body: "Shortened marketing strategy and execution plan development from 6 months to 48 hours.",
                color: "#4FD1A0",
              },
              {
                stat: "$900K+",
                label: "revenue pipeline",
                body: "Revenue pipeline within first four months of initial product deployment, without paid ads.",
                color: "#F9DB79",
              },
              {
                stat: "Top 47%",
                label: "content creator",
                body: "Top 47% content creator on social media with 60% engagement rate within 7 days of launch, out of 1M+ creators.",
                color: "#18b5d8",
              },
              {
                stat: "$54K",
                label: "closed in 5 days",
                body: "Closed $54K in annual contracts in 5 days from 5 social media posts, without paid ads.",
                color: "#4FD1A0",
              },
              {
                stat: "$180K",
                label: "saved annually",
                body: "Saves the average business $180,000 annually in software fees through AI-powered systems.",
                color: "#F7555F",
              },
              {
                stat: "30%+",
                label: "revenue increase",
                body: "Clients increased top-line revenue by 30%+ using our marketing strategy.",
                color: "#18b5d8",
              },
              {
                stat: "$4,320",
                label: "cut in one day",
                body: "Cut costs by $4,320 in one day without decreasing operational quality or efficiency.",
                color: "#4FD1A0",
              },
            ].map((item) => (
              <div key={item.stat} className="bg-white rounded-[20px] px-6 py-6">
                <p className="text-[clamp(1.6rem,3vw,2.2rem)] font-black leading-none mb-1" style={{ color: item.color }}>{item.stat}</p>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7a7a7a] mb-3">{item.label}</p>
                <p className="text-[13px] text-[#555] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white px-6 py-24 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">How We Work</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Principles we never compromise.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v.n} className="bg-white rounded-[20px] px-8 py-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">{v.n}</span>
                <h3 className="text-[21px] font-semibold text-[#0a0a0a] mb-3">{v.title}</h3>
                <p className="body-copy text-[#333333]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area ── */}
      <section className="bg-white px-6 py-24 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Where We Serve</p>
          <h2 className="display-lg text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Rooted in Tampa Bay.
          </h2>
          <p className="lead-airy text-[#333333] mb-10" style={{ textWrap: "balance" }}>
            We serve businesses across Wesley Chapel, Lutz, Land O&rsquo; Lakes, St. Petersburg, and the broader Tampa Bay region, in person and virtually.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Wesley Chapel", "Lutz", "Land O\u2019 Lakes", "St. Petersburg", "Tampa", "Virtual"].map((city) => (
              <span
                key={city}
                className="bg-[#f5f5f7] border border-[#e0e0e0] rounded-full px-5 py-2 text-[14px] text-[#333333] font-semibold"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Work with us</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Ready to work together?
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Start with a free visibility report or reach out directly. We&rsquo;ll make it simple.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <a
              href="tel:+17275133955"
              className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              (727) 513-3955
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
