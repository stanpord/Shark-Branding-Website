import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Shark Branding Solutions",
  description:
    "Real results from real Tampa Bay businesses. See how Shark Branding Solutions has helped local companies get found, trusted, and chosen by AI.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black min-h-[40vh] flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Case Studies
          </p>
          <h1 className="display-hero text-white mb-5">
            Results that speak
            <br />
            <span className="text-[#18b5d8]">louder than promises.</span>
          </h1>
          <p className="lead-airy text-[#cccccc]">
            Real Tampa Bay businesses. Real numbers. Real timelines.
          </p>
        </div>
      </section>

      {/* ── CASE STUDY 1: HVAC ── */}
      <article id="hvac">
        {/* Header band — dark */}
        <section className="bg-[#07141a] py-16 px-6">
          <div className="max-w-[760px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#18b5d8]/10 text-[#18b5d8] text-[12px] font-semibold rounded-full px-3 py-1">
                Home Services / HVAC
              </span>
              <span className="text-[#7a7a7a] text-[13px]">Tampa Bay, FL</span>
            </div>
            <h2 className="display-lg text-white mb-3">
              From invisible to #2 on Google in 30 days.
            </h2>
            <p className="text-[17px] text-[#7a7a7a]">Local HVAC Company &mdash; Local Business Toolkit</p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f5f5f7] py-12 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                #32→#2
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Best rank jump</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">"same day AC repair"</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                6
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Keywords won</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">high-intent moved to top 3</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                &lt;30
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Days</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">to top local positions</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-4">
                The Problem
              </h3>
              <p className="body-copy text-[#333333]">
                This HVAC company was doing excellent work but wasn&rsquo;t showing up where it mattered. When homeowners searched for urgent help — &ldquo;same day AC repair,&rdquo; &ldquo;emergency AC repair,&rdquo; &ldquo;HVAC near me&rdquo; — competitors captured every call. Without strong local visibility, urgency-driven searches went to whoever ranked at the top.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-4">
                What We Did
              </h3>
              <p className="body-copy text-[#333333]">
                Using the Local Business Toolkit, we addressed AI-driven search readiness, digital authority signals, and accurate business data across every platform. We cleaned up location and service information so local search systems connected the right business to the right searches — across Google, Maps, voice search, and AI-assisted discovery.
              </p>
            </div>
          </div>

          {/* Rank cards */}
          <div className="max-w-[760px] mx-auto">
            <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-6">
              Keyword Rankings — Before &amp; After
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { kw: "same day AC repair", before: "#32", after: "#2" },
                { kw: "air conditioning service near me", before: "#31", after: "#2" },
                { kw: "HVAC near me", before: "#27", after: "#2" },
                { kw: "air conditioning repair", before: "#30", after: "#2" },
                { kw: "emergency AC repair", before: "#21", after: "#3" },
                { kw: "air handler repair", before: "#29", after: "#3" },
              ].map((r) => (
                <div
                  key={r.kw}
                  className="bg-[#f5f5f7] rounded-[14px] p-5 flex flex-col gap-3"
                >
                  <p className="text-[14px] font-semibold text-[#1d1d1f] leading-snug">
                    {r.kw}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="bg-red-50 border border-red-200 text-red-500 text-[14px] font-bold px-3 py-1 rounded-lg">
                      {r.before}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="bg-green-50 border border-green-200 text-green-600 text-[16px] font-extrabold px-3 py-1 rounded-lg">
                      {r.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* ── CASE STUDY 2: Emory's Rock Realty ── */}
      <article id="emorys-rock-realty">
        {/* Header band — light */}
        <section className="bg-white py-16 px-6 border-t border-[#e8e8ed]">
          <div className="max-w-[760px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#18b5d8]/10 text-[#18b5d8] text-[12px] font-semibold rounded-full px-3 py-1">
                Real Estate
              </span>
              <span className="text-[#7a7a7a] text-[13px]">Wesley Chapel, FL</span>
            </div>
            <h2 className="display-lg text-[#1d1d1f] mb-3">
              #4 to #1 and +20% AI recommendations in 30 days.
            </h2>
            <p className="text-[17px] text-[#7a7a7a]">Emory&rsquo;s Rock Realty &mdash; AI Visibility Toolkit</p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f5f5f7] py-12 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                +20%
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">AI recommendations</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">within 30 days</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                #4→#1
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Local ranking</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">"Best Realtors in Wesley Chapel"</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                2,000+
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Competing agents</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">in the Wesley Chapel market</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#07141a] py-16 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-[14px] font-semibold text-[#18b5d8] uppercase tracking-wide mb-4">
                The Problem
              </h3>
              <p className="body-copy text-[#cccccc]">
                In a market with nearly 2,000 competing agents, Emory&rsquo;s Rock Realty had visibility — but not recommendation-level credibility. Inconsistent NAP data made the brokerage look like multiple fragmented entities to AI systems. When buyers asked who to trust, AI had less reason to choose them over more coherent competitors.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#18b5d8] uppercase tracking-wide mb-4">
                What We Did
              </h3>
              <p className="body-copy text-[#cccccc]">
                Four targeted actions changed how AI interpreted and recommended the brokerage: NAP standardization across all platforms, AI Visibility Toolkit deployment adding contextual depth, Chamber syncing to connect to a trusted local authority hub, and map-to-chat alignment for high-intent local searches within the 1.25-mile Chamber radius.
              </p>
            </div>
          </div>

          {/* Results grid */}
          <div className="max-w-[760px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { action: "NAP standardization", result: "Easier for AI to verify and cite" },
              { action: "Toolkit deployment", result: "More hooks for buyer, seller, and investor queries" },
              { action: "Chamber syncing", result: "Strengthened credibility via Chamber authority" },
              { action: "Map-to-chat alignment", result: "Easier to surface for nearby high-intent searches" },
            ].map((r) => (
              <div
                key={r.action}
                className="bg-white/7 border border-white/12 rounded-[16px] p-6 flex items-start gap-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[15px] font-semibold text-white mb-1">{r.action}</p>
                  <p className="text-[14px] text-[#cccccc] leading-relaxed">{r.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* ── CASE STUDY 3: Diamond Dogs ── */}
      <article id="diamond-dogs">
        {/* Header band — light */}
        <section className="bg-white py-16 px-6 border-t border-[#e8e8ed]">
          <div className="max-w-[760px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#18b5d8]/10 text-[#18b5d8] text-[12px] font-semibold rounded-full px-3 py-1">
                Smart Vending / Tech
              </span>
              <span className="text-[#7a7a7a] text-[13px]">Wesley Chapel, FL</span>
            </div>
            <h2 className="display-lg text-[#1d1d1f] mb-3">
              From invisible to top recommended by AI.
            </h2>
            <p className="text-[17px] text-[#7a7a7a]">Diamond Dogs Smart Vending &mdash; AI Visibility &amp; Structured Data</p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f5f5f7] py-12 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                Top
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">AI recommended</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">Named, described &amp; linked by AI</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                3
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">AI platforms</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">ChatGPT, Gemini, Perplexity</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                Local
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Query captured</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">"Smart vending in Wesley Chapel"</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-4">
                The Problem
              </h3>
              <p className="body-copy text-[#333333]">
                Diamond Dogs Smart Vending had a real operating business — but not enough AI-visible reinforcement to appear in recommendation answers for local smart vending demand. Without strong entity signals, AI answers generalized around vending or national suppliers instead of selecting the right local operator. The company existed online but wasn&rsquo;t machine-readable enough to be chosen.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-4">
                What We Did
              </h3>
              <p className="body-copy text-[#333333]">
                The lift came from three layers: JSON-LD structured data to give AI a clear understanding of who Diamond Dogs is and what they offer; Chamber toolkit authority creating a trusted local reference layer; and AI-readable service language — smart vending, AI vision technology, telemetry-driven restocking, tap-to-pay, and grab-and-go retail — giving AI the right summary hooks to recommend them.
              </p>
            </div>
          </div>

          {/* Why it worked */}
          <div className="max-w-[760px] mx-auto">
            <h3 className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-6">
              Why AI Started Recommending Them
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: "Clear Entity Definition",
                  body: "Structured backend data helped identify Diamond Dogs as the primary entity for this service category in the local market.",
                },
                {
                  label: "Service Relevance",
                  body: "The site language matched how AI describes modern smart vending: AI vision tech, telemetry, tap-to-pay, and grab-and-go retail.",
                },
                {
                  label: "Trusted Local References",
                  body: "Chamber and Shark Branding references gave AI an external trust path instead of relying on one website alone.",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-[#f5f5f7] border border-[#e8e8ed] rounded-[14px] p-5"
                >
                  <p className="text-[12px] font-bold text-[#18b5d8] uppercase tracking-widest mb-2">
                    {c.label}
                  </p>
                  <p className="text-[14px] text-[#333333] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* ── CASE STUDY 4: North Tampa Bay Chamber ── */}
      <article id="north-tampa-bay-chamber">
        {/* Header band — dark */}
        <section className="bg-[#07141a] py-16 px-6">
          <div className="max-w-[760px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#18b5d8]/10 text-[#18b5d8] text-[12px] font-semibold rounded-full px-3 py-1">
                Chamber of Commerce
              </span>
              <span className="text-[#7a7a7a] text-[13px]">North Tampa Bay, FL</span>
            </div>
            <h2 className="display-lg text-white mb-3">
              From standard directory to trusted AI source.
            </h2>
            <p className="text-[17px] text-[#7a7a7a]">North Tampa Bay Chamber &mdash; AI Visibility Toolkit</p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f5f5f7] py-12 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                96%
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">AI visibility gap</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">of businesses not recommended by AI</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                &lt;30
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Days</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">to measurable AI visibility gains</p>
            </div>
            <div>
              <p className="text-[48px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                3
              </p>
              <p className="text-[15px] font-semibold text-[#1d1d1f]">Targeted steps</p>
              <p className="text-[13px] text-[#7a7a7a] mt-1">using the AI Visibility Toolkit</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#07141a] py-16 px-6">
          <div className="max-w-[760px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-[14px] font-semibold text-[#18b5d8] uppercase tracking-wide mb-4">
                The Problem
              </h3>
              <p className="body-copy text-[#cccccc]">
                Most Chamber member businesses weren&rsquo;t showing up in AI search at all. When buyers asked AI who to trust locally, it could only recommend businesses it could verify — and most couldn&rsquo;t clear that bar. Inconsistent information caused businesses to be skipped entirely, regardless of how good they actually were.
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#18b5d8] uppercase tracking-wide mb-4">
                What We Did
              </h3>
              <p className="body-copy text-[#cccccc]">
                Using the AI Visibility Toolkit, we took three targeted steps: cleaned and unified business information across every platform AI relies on, built stronger digital authority so AI could clearly trust the Chamber as a local source, and aligned member visibility so the Chamber&rsquo;s credibility actively translated into member recommendations.
              </p>
            </div>
          </div>

          {/* Before/after table */}
          <div className="max-w-[760px] mx-auto bg-white rounded-[18px] overflow-hidden">
            <div className="hidden md:grid grid-cols-3 bg-[#0f1117] px-8 py-4 gap-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/40">Visibility Factor</span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/40">Before</span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/40">After (&lt;30 Days)</span>
            </div>
            {[
              {
                factor: "AI Recommendations",
                before: "Not showing up in AI results",
                after: "Increased presence in AI-generated recommendations",
              },
              {
                factor: "Chamber Authority",
                before: "Standard local directory",
                after: "Recognized as a trusted local source by AI",
              },
              {
                factor: "Member Visibility",
                before: "Hard for AI to find and validate",
                after: "Members easier for AI to find, verify, and recommend",
              },
              {
                factor: "Information Consistency",
                before: "Inconsistencies causing businesses to be skipped",
                after: "Fewer inconsistencies across platforms AI relies on",
              },
            ].map((row, i) => (
              <div
                key={row.factor}
                className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 md:px-8 py-5 md:py-6 border-b border-[#f0f1f4] last:border-0 items-start ${i % 2 === 1 ? "bg-[#fafbfc]" : "bg-white"}`}
              >
                <p className="text-[15px] font-semibold text-[#1d1d1f]">{row.factor}</p>
                <p className="text-[14px] text-[#999] flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  {row.before}
                </p>
                <p className="text-[14px] text-green-600 flex items-start gap-2">
                  <span className="font-bold mt-0.5">✓</span>
                  {row.after}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-[#07141a] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-white mb-5">
            Want results like these?
          </h2>
          <p className="lead-airy text-[#cccccc] mb-10">
            Start with a free visibility report. We&rsquo;ll show you exactly
            where you stand and what it would take to move.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-[#1ec8ee] transition-colors duration-150"
          >
            Get My Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
