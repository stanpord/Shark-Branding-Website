import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Visibility Case Studies Tampa Bay | Shark Branding Solutions",
  description:
    "Real results from real Tampa Bay businesses. HVAC from #32 to #2, real estate from #4 to #1, Diamond Dogs ranked #1 on ChatGPT. See exactly how AI visibility consulting works.",
};

const cases = [
  { id: "hvac", label: "HVAC / Home Services", anchor: "#hvac" },
  { id: "emorys", label: "Real Estate", anchor: "#emorys-rock-realty" },
  { id: "diamond", label: "Smart Vending", anchor: "#diamond-dogs" },
  { id: "chamber", label: "Chamber of Commerce", anchor: "#north-tampa-bay-chamber" },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Client Results
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Real businesses.
            <br />
            <span className="text-[#18b5d8]">Real numbers.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-14" style={{ textWrap: "balance" }}>
            Four Tampa Bay companies. Four documented wins. All measured in days, not months.
          </p>

          {/* Case nav pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {cases.map((c) => (
              <a
                key={c.id}
                href={c.anchor}
                className="text-[13px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDY 01 — HVAC
      ══════════════════════════════════════════ */}
      <article id="hvac">

        {/* Header */}
        <section className="bg-[#0a0a0a] px-6 py-20">
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">01</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span className="text-[13px] font-semibold text-white/50 tracking-[0.08em] uppercase">Home Services / HVAC</span>
              <span className="text-[13px] text-white/30">Tampa Bay, FL</span>
            </div>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
              From page 3 to #2 on Google.
              <br />
              <span className="text-[#18b5d8]">In 30 days.</span>
            </h2>
            <p className="text-[17px] text-white/45 max-w-[560px]">
              Local HVAC Company — AI Visibility &amp; Local Business Toolkit
            </p>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-[#07141a] px-6 py-16 border-t border-white/5">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "#32→#2", label: "Best rank jump", sub: '"same day AC repair"' },
              { v: "6",      label: "Keywords in top 3", sub: "all high-intent local" },
              { v: "30d",    label: "Time to results", sub: "top local positions" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-3">
                  {s.v}
                </p>
                <p className="text-[15px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[12px] text-white/35 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#f5f5f7] px-6 py-20">
          <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">The Problem</p>
              <p className="body-copy text-[#333333]">
                This HVAC company was doing excellent work but wasn&rsquo;t showing up where it mattered. When homeowners searched for urgent help — &ldquo;same day AC repair,&rdquo; &ldquo;emergency AC repair,&rdquo; &ldquo;HVAC near me&rdquo; — competitors captured every call. Without strong local visibility, urgency-driven searches went to whoever ranked at the top.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">What We Did</p>
              <p className="body-copy text-[#333333]">
                Using the Local Business Toolkit, we addressed AI-driven search readiness, digital authority signals, and accurate business data across every platform. We cleaned up location and service information so local search systems connected the right business to the right searches — across Google, Maps, voice search, and AI-assisted discovery.
              </p>
            </div>
          </div>

          {/* Keyword ranking grid */}
          <div className="max-w-[980px] mx-auto">
            <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-8">
              Keyword Rankings — Before &amp; After
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { kw: "same day AC repair",            before: "#32", after: "#2" },
                { kw: "air conditioning service near me", before: "#31", after: "#2" },
                { kw: "HVAC near me",                  before: "#27", after: "#2" },
                { kw: "air conditioning repair",       before: "#30", after: "#2" },
                { kw: "emergency AC repair",           before: "#21", after: "#3" },
                { kw: "air handler repair",            before: "#29", after: "#3" },
              ].map((r) => (
                <div
                  key={r.kw}
                  className="bg-white rounded-[16px] px-5 py-4 flex items-center justify-between gap-4"
                >
                  <p className="text-[14px] font-semibold text-[#1d1d1f] leading-snug flex-1">
                    {r.kw}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[13px] font-bold text-[#999] tabular-nums">{r.before}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] font-extrabold text-[#18b5d8] tabular-nums">{r.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>


      {/* ── Mid-page CTA ── */}
      <section className="bg-[#18b5d8] py-12 px-6 text-center">
        <div className="max-w-[620px] mx-auto">
          <p className="text-white/80 text-[15px] mb-3">Want results like this for your business?</p>
          <h2 className="text-[26px] font-semibold text-white mb-6" style={{ textWrap: "balance" }}>
            Start with a free Visibility Audit.
          </h2>
          <a
            href="/free-report"
            className="btn-press inline-block bg-white text-[#0a0a0a] text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#f0f0f0] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8] [touch-action:manipulation]"
          >
            Get My Free Visibility Audit
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDY 02 — Emory's Rock Realty
      ══════════════════════════════════════════ */}
      <article id="emorys-rock-realty">

        {/* Header */}
        <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">02</span>
              <span className="w-px h-4 bg-[#1d1d1f]/15" aria-hidden="true" />
              <span className="text-[13px] font-semibold text-[#1d1d1f]/50 tracking-[0.08em] uppercase">Real Estate</span>
              <span className="text-[13px] text-[#7a7a7a]">Wesley Chapel, FL</span>
            </div>
            <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
              #4 to #1 in a market of
              <br />
              <span className="text-[#18b5d8]">2,000+ competing agents.</span>
            </h2>
            <p className="text-[17px] text-[#7a7a7a] max-w-[560px]">
              Emory&rsquo;s Rock Realty — AI Visibility Toolkit
            </p>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-[#0a0a0a] px-6 py-16">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "+20%",   label: "AI recommendations", sub: "within 30 days" },
              { v: "#4→#1",  label: "Local ranking", sub: '"Best Realtors in Wesley Chapel"' },
              { v: "2,000+", label: "Agents outranked", sub: "Wesley Chapel market" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-3">
                  {s.v}
                </p>
                <p className="text-[15px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[12px] text-white/35 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#f5f5f7] px-6 py-20">
          <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">The Problem</p>
              <p className="body-copy text-[#333333]">
                In a market with nearly 2,000 competing agents, Emory&rsquo;s Rock Realty had visibility — but not recommendation-level credibility. Inconsistent NAP data made the brokerage look like multiple fragmented entities to AI systems. When buyers asked who to trust, AI had less reason to choose them over more coherent competitors.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">What We Did</p>
              <p className="body-copy text-[#333333]">
                Four targeted actions changed how AI interpreted and recommended the brokerage: NAP standardization across all platforms, AI Visibility Toolkit deployment adding contextual depth, Chamber syncing to connect to a trusted local authority hub, and map-to-chat alignment for high-intent local searches within the 1.25-mile Chamber radius.
              </p>
            </div>
          </div>

          {/* Results grid */}
          <div className="max-w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { action: "NAP standardization",  result: "Easier for AI to verify and cite" },
              { action: "Toolkit deployment",   result: "More hooks for buyer, seller, and investor queries" },
              { action: "Chamber syncing",      result: "Strengthened credibility via Chamber authority" },
              { action: "Map-to-chat alignment", result: "Easier to surface for nearby high-intent searches" },
            ].map((r) => (
              <div
                key={r.action}
                className="bg-white rounded-[16px] px-6 py-5 flex items-start gap-4"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#18b5d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{r.action}</p>
                  <p className="text-[14px] text-[#7a7a7a] leading-relaxed">{r.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>


      {/* ══════════════════════════════════════════
          CASE STUDY 03 — Diamond Dogs
      ══════════════════════════════════════════ */}
      <article id="diamond-dogs">

        {/* Header */}
        <section className="bg-[#0a0a0a] px-6 py-20 border-t border-white/5">
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">03</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span className="text-[13px] font-semibold text-white/50 tracking-[0.08em] uppercase">Smart Vending / Tech</span>
              <span className="text-[13px] text-white/30">Wesley Chapel, FL</span>
            </div>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
              Invisible to AI.
              <br />
              <span className="text-[#18b5d8]">Then the #1 result.</span>
            </h2>
            <p className="text-[17px] text-white/45 max-w-[560px]">
              Diamond Dogs Smart Vending — AI Visibility &amp; Structured Data
            </p>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-[#07141a] px-6 py-16 border-t border-white/5">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "#1",  label: "AI recommended", sub: "Named, described & linked by AI" },
              { v: "3",   label: "AI platforms", sub: "ChatGPT, Gemini, Perplexity" },
              { v: "30d", label: "Time to visibility", sub: "invisible → top result" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-3">
                  {s.v}
                </p>
                <p className="text-[15px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[12px] text-white/35 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="bg-white px-6 py-20">
          <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">The Problem</p>
              <p className="body-copy text-[#333333]">
                Diamond Dogs Smart Vending had a real operating business — but not enough AI-visible reinforcement to appear in recommendation answers for local smart vending demand. Without strong entity signals, AI answers generalized around vending or national suppliers instead of selecting the right local operator.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">What We Did</p>
              <p className="body-copy text-[#333333]">
                Three layers made the difference: JSON-LD structured data to give AI a clear understanding of who Diamond Dogs is; Chamber toolkit authority creating a trusted local reference layer; and AI-readable service language — smart vending, AI vision technology, telemetry-driven restocking, tap-to-pay — giving AI the right hooks to recommend them.
              </p>
            </div>
          </div>

          {/* Why it worked */}
          <div className="max-w-[980px] mx-auto">
            <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-8">
              Why AI Started Recommending Them
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                <div key={c.label} className="bg-[#f5f5f7] rounded-[16px] px-6 py-6">
                  <p className="text-[11px] font-bold text-[#18b5d8] uppercase tracking-[0.18em] mb-3">
                    {c.label}
                  </p>
                  <p className="text-[15px] text-[#333333] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>


      {/* ══════════════════════════════════════════
          CASE STUDY 04 — North Tampa Bay Chamber
      ══════════════════════════════════════════ */}
      <article id="north-tampa-bay-chamber">

        {/* Header */}
        <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">04</span>
              <span className="w-px h-4 bg-[#1d1d1f]/15" aria-hidden="true" />
              <span className="text-[13px] font-semibold text-[#1d1d1f]/50 tracking-[0.08em] uppercase">Chamber of Commerce</span>
              <span className="text-[13px] text-[#7a7a7a]">North Tampa Bay, FL</span>
            </div>
            <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
              From standard directory
              <br />
              <span className="text-[#18b5d8]">to trusted AI source.</span>
            </h2>
            <p className="text-[17px] text-[#7a7a7a] max-w-[560px]">
              <a
                href="https://www.northtampabay.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#18b5d8] transition-colors"
              >
                North Tampa Bay Chamber
              </a>{" "}— AI Visibility Toolkit
            </p>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-[#0a0a0a] px-6 py-16">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "96%",  label: "AI visibility gap", sub: "members not recommended by AI" },
              { v: "10×",  label: "More AI citations", sub: "Chamber as trusted local source" },
              { v: "30d",  label: "Days to results", sub: "measurable visibility gains" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-3">
                  {s.v}
                </p>
                <p className="text-[15px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[12px] text-white/35 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#f5f5f7] px-6 py-20">
          <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">The Problem</p>
              <p className="body-copy text-[#333333]">
                Most Chamber member businesses weren&rsquo;t showing up in AI search at all. When buyers asked AI who to trust locally, it could only recommend businesses it could verify — and most couldn&rsquo;t clear that bar. Inconsistent information caused businesses to be skipped entirely, regardless of how good they actually were.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">What We Did</p>
              <p className="body-copy text-[#333333]">
                Using the AI Visibility Toolkit, we took three targeted steps: cleaned and unified business information across every platform AI relies on, built stronger digital authority so AI could clearly trust the Chamber as a local source, and aligned member visibility so the Chamber&rsquo;s credibility actively translated into member recommendations.
              </p>
            </div>
          </div>

          {/* Before / after table */}
          <div className="max-w-[980px] mx-auto bg-white rounded-[20px] overflow-hidden">
            <div className="hidden md:grid grid-cols-3 bg-[#0a0a0a] px-8 py-5 gap-6">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">Visibility Factor</span>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">Before</span>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8]/70">After (&lt;30 Days)</span>
            </div>
            {[
              {
                factor: "AI Recommendations",
                before: "Not showing up in AI results",
                after: "Increased presence in AI-generated answers",
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
                after: "Unified data across every platform AI relies on",
              },
            ].map((row, i) => (
              <div
                key={row.factor}
                className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 px-6 md:px-8 py-5 md:py-6 border-b border-[#f0f0f5] last:border-0 items-start ${
                  i % 2 === 1 ? "bg-[#fafbfc]" : "bg-white"
                }`}
              >
                <p className="text-[15px] font-semibold text-[#1d1d1f]">{row.factor}</p>
                <p className="text-[14px] text-[#999] flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5" aria-hidden="true">✕</span>
                  {row.before}
                </p>
                <p className="text-[14px] text-[#18b5d8] flex items-start gap-2">
                  <span className="font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  {row.after}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>


      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
            Your turn
          </p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Want results like these?
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            Start with a free Visibility Audit. We&rsquo;ll show you exactly where you stand and what it would take to move.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free Visibility Audit
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-[0.15em] mb-8">Frequently Asked Questions</p>
          <div className="space-y-8">
            {[
              { q: "How long does it take to see results like the HVAC case study?", a: "The HVAC client moved from position #32 to #2 within 30 days. Most clients see measurable visibility movement within 30 to 60 days depending on the starting point and consistency of execution. AI platforms update their recommendation data more frequently than traditional search engines, which is why the timeline is shorter." },
              { q: "Do these results apply to my industry?", a: "The case studies shown cover HVAC, real estate, smart vending, and chamber of commerce — but the same AI visibility signals apply across all local service industries. HVAC, legal, medical, contractors, restaurants, dental, and any business that depends on local customers finding them online will see the same type of improvement." },
              { q: "What specifically caused the ranking improvements?", a: "For each client, the work focused on three areas: consistent business information across every platform AI relies on, structured content that AI can extract and cite, and trust signals including reviews and authoritative local references. None of the results came from paid advertising." },
              { q: "Can I get a case study for my specific industry?", a: "We may have unpublished work in your category depending on your industry. Book a free Visibility Audit and during the call we can share what we have seen work for businesses similar to yours." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#e5e5e5] pb-8">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-3">{q}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 text-[14px]">
            <Link href="/services" className="text-[#18b5d8] font-semibold hover:underline">What We Do →</Link>
            <Link href="/plans" className="text-[#18b5d8] font-semibold hover:underline">View Plans &amp; Pricing →</Link>
            <Link href="/free-report" className="text-[#18b5d8] font-semibold hover:underline">Get a Free Visibility Audit →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
