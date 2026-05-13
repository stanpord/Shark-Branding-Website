import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Shark Branding Solutions",
  description:
    "Real results from real Tampa Bay businesses. See how Shark Branding Solutions has helped local companies get found, trusted, and chosen online.",
};

const caseStudies = [
  {
    id: "jonathan-tuttle",
    industry: "Home Services",
    client: "Jonathan Tuttle",
    business: "Drywall Company",
    location: "Pinellas County, FL",
    headline: "From invisible to #2 on Google in 30 days.",
    challenge:
      "Jonathan's drywall company was doing excellent work but couldn't be found online. His Google ranking sat at #32 — effectively invisible to local homeowners searching for drywall contractors. His listing score was a 64 out of 1,000, and he had no presence on AI search platforms whatsoever.",
    solution:
      "We ran a full AI and search visibility audit, fixed 47 listing inconsistencies across directories, restructured his Google Business Profile, built a review acquisition strategy, and optimized his entity presence for AI platforms including ChatGPT and Perplexity.",
    results: [
      { value: "#2", label: "Google ranking", sub: "up from #32 in 30 days" },
      { value: "583", label: "Listing score", sub: "up from 64" },
      { value: "AI", label: "Search visible", sub: "ChatGPT & Perplexity" },
      { value: "30", label: "Days to results", sub: "measurable movement" },
    ],
    quote:
      "They completely transformed how our business shows up online… we're now showing up on AI search platforms, where before we were basically invisible.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black min-h-[40vh] flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Case Studies
          </p>
          <h1 className="display-hero text-white mb-5" style={{ textWrap: "balance" }}>
            Results that speak
            <br />
            <span className="text-[#18b5d8]">louder than promises.</span>
          </h1>
          <p className="lead-airy text-[#cccccc]">
            Real Tampa Bay businesses. Real numbers. Real timelines.
          </p>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.map((cs, i) => (
        <article key={cs.id} id={cs.id}>
          {/* Header band */}
          <section className={`py-16 px-6 ${i % 2 === 0 ? "bg-[#07141a]" : "bg-white"}`}>
            <div className="max-w-[760px] mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-[#18b5d8]/10 text-[#18b5d8] text-[12px] font-semibold rounded-full px-3 py-1">
                  {cs.industry}
                </span>
                <span className={`text-[13px] ${i % 2 === 0 ? "text-[#7a7a7a]" : "text-[#7a7a7a]"}`}>
                  {cs.location}
                </span>
              </div>
              <h2 className={`display-lg mb-3 ${i % 2 === 0 ? "text-white" : "text-[#1d1d1f]"}`}>
                {cs.headline}
              </h2>
              <p className={`text-[17px] ${i % 2 === 0 ? "text-[#7a7a7a]" : "text-[#7a7a7a]"}`}>
                {cs.client} &mdash; {cs.business}
              </p>
            </div>
          </section>

          {/* Results stats */}
          <section className="bg-[#f5f5f7] py-12 px-6">
            <div className="max-w-[760px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {cs.results.map((r) => (
                <div key={r.label}>
                  <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                    {r.value}
                  </p>
                  <p className="text-[15px] font-semibold text-[#1d1d1f]">{r.label}</p>
                  <p className="text-[13px] text-[#7a7a7a] mt-1">{r.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Story */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-[760px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-4">
                  The Challenge
                </h3>
                <p className="body-copy text-[#333333]">{cs.challenge}</p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-4">
                  What We Did
                </h3>
                <p className="body-copy text-[#333333]">{cs.solution}</p>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-[760px] mx-auto mt-12 border-l-4 border-[#18b5d8] pl-8">
              <blockquote className="text-[21px] font-light text-[#1d1d1f] leading-relaxed mb-4">
                &ldquo;{cs.quote}&rdquo;
              </blockquote>
              <p className="text-[14px] font-semibold text-[#1d1d1f]">{cs.client}</p>
              <p className="text-[13px] text-[#7a7a7a]">
                {cs.business} &mdash; {cs.location}
              </p>
            </div>
          </section>
        </article>
      ))}

      {/* CTA */}
      <section className="bg-[#07141a] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
            Want results like these?
          </h2>
          <p className="lead-airy text-[#cccccc] mb-10">
            Start with a free visibility report. We&rsquo;ll show you exactly
            where you stand and what it would take to move.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
          >
            Get My Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
