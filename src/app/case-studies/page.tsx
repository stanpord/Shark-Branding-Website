import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Tampa Bay Businesses | Shark Branding Solutions",
  description:
    "HVAC, real estate, smart vending, and chamber of commerce — four Tampa Bay businesses that went from invisible to #1 in AI search in under 30 days.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0a0a0a] min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Documented Results
          </p>
          <h1 className="display-hero text-white mb-7" style={{ textWrap: "balance" }}>
            Four businesses.
            <br />
            <span className="text-[#18b5d8]">All ranked #1 or #2.</span>
            <br />
            All in 30 days.
          </h1>
          <p className="lead-airy text-white/50 max-w-[520px] mx-auto mb-14" style={{ textWrap: "balance" }}>
            These are not projections or estimates. Every number on this page is documented from a real client in Tampa Bay.
          </p>

          {/* Aggregate stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 rounded-[20px] overflow-hidden mb-14">
            {[
              { v: "4",    label: "Industries served" },
              { v: "30d",  label: "Max time to results" },
              { v: "6+",   label: "Keywords in top 3" },
              { v: "3",    label: "AI platforms optimized" },
            ].map((s) => (
              <div key={s.label} className="bg-[#111] px-6 py-6 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-[#18b5d8] leading-none mb-2">
                  {s.v}
                </p>
                <p className="text-[12px] text-white/35 uppercase tracking-[0.14em]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Industry pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "HVAC / Home Services", href: "#hvac" },
              { label: "Real Estate",          href: "#emorys-rock-realty" },
              { label: "Smart Vending",        href: "#diamond-dogs" },
              { label: "Chamber of Commerce",  href: "#north-tampa-bay-chamber" },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="text-[13px] font-semibold text-white/60 border border-white/15 rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CASE 01 — HVAC
      ══════════════════════════════════════════ */}
      <article id="hvac">

        {/* Photo hero */}
        <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&h=560&q=80"
            alt="HVAC technician working on an air conditioning unit"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">01</span>
              <span className="w-px h-4 bg-white/25" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-white/50 tracking-[0.1em] uppercase">Home Services / HVAC</span>
              <span className="text-[12px] text-white/30">Tampa Bay, FL</span>
            </div>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              Page 3 to <span className="text-[#18b5d8]">#2 on Google</span> in 30 days.
            </h2>
          </div>
        </div>

        {/* Stats band */}
        <div className="bg-[#07141a] px-6 py-14 border-y border-white/5">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "#32→#2", label: "Best keyword jump",    sub: '"same day AC repair"' },
              { v: "6",      label: "Keywords in top 3",    sub: "all high-intent local" },
              { v: "30d",    label: "Time to results",      sub: "page 3 to top local positions" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-2">
                  {s.v}
                </p>
                <p className="text-[14px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[11px] text-white/30 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <section className="bg-[#f5f5f7] px-6 py-20">
          <div className="max-w-[980px] mx-auto">

            {/* Problem / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">The Problem</p>
                <p className="body-copy text-[#333333]">
                  This HVAC company was doing excellent work but wasn&rsquo;t showing up where it mattered. When homeowners searched for urgent help, &ldquo;same day AC repair,&rdquo; &ldquo;emergency AC repair,&rdquo; &ldquo;HVAC near me,&rdquo; every call went to whoever ranked at the top. They were invisible right when buyers needed them most.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">What We Did</p>
                <p className="body-copy text-[#333333]">
                  Using the AI Visibility Toolkit, we addressed search readiness, authority signals, and accurate business data across every platform. We cleaned up location and service data so AI systems connected the right business to the right searches, across Google, Maps, voice search, and AI-assisted discovery.
                </p>
              </div>
            </div>

            {/* Keyword ranking grid */}
            <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-6">
              Keyword Rankings — Before &amp; After
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
              {[
                { kw: "same day AC repair",               before: "#32", after: "#2" },
                { kw: "air conditioning service near me", before: "#31", after: "#2" },
                { kw: "HVAC near me",                     before: "#27", after: "#2" },
                { kw: "air conditioning repair",          before: "#30", after: "#2" },
                { kw: "emergency AC repair",              before: "#21", after: "#3" },
                { kw: "air handler repair",               before: "#29", after: "#3" },
              ].map((r) => (
                <div
                  key={r.kw}
                  className="bg-white rounded-[14px] px-5 py-4 flex items-center justify-between gap-4 shadow-sm"
                >
                  <p className="text-[13px] font-semibold text-[#1d1d1f] leading-snug flex-1">{r.kw}</p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[13px] font-bold text-[#bbb] tabular-nums">{r.before}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] font-extrabold text-[#18b5d8] tabular-nums">{r.after}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="bg-white border-l-4 border-[#18b5d8] rounded-r-[16px] px-8 py-7 mb-12 shadow-sm">
              <p className="text-[18px] text-[#1d1d1f] leading-relaxed italic mb-4">
                &ldquo;We went from getting beat out by competitors every day to being the first name that shows up. The phone didn&rsquo;t stop ringing after that.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#7a7a7a] uppercase tracking-[0.1em]">HVAC Company Owner, Tampa Bay FL</p>
            </blockquote>

            {/* Inline CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/free-report"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150"
              >
                Get My Free Visibility Report
              </Link>
              <Link
                href="/contact"
                className="text-[15px] font-semibold text-[#18b5d8] hover:underline motion-safe:transition-opacity"
              >
                Talk to us first &rarr;
              </Link>
            </div>

          </div>
        </section>
      </article>


      {/* ══════════════════════════════════════════
          CASE 02 — Emory's Rock Realty
      ══════════════════════════════════════════ */}
      <article id="emorys-rock-realty">

        {/* Photo hero */}
        <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&h=560&q=80"
            alt="Modern home representing real estate listings in Wesley Chapel FL"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">02</span>
              <span className="w-px h-4 bg-white/25" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-white/50 tracking-[0.1em] uppercase">Real Estate</span>
              <span className="text-[12px] text-white/30">Wesley Chapel, FL</span>
            </div>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              <span className="text-[#18b5d8]">#1 realtor</span> in a market of 2,000+ agents.
            </h2>
          </div>
        </div>

        {/* Stats band */}
        <div className="bg-[#0a0a0a] px-6 py-14 border-y border-white/5">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "+20%",   label: "AI recommendations",  sub: "within 30 days" },
              { v: "#4→#1",  label: "Local ranking",       sub: '"Best Realtors Wesley Chapel"' },
              { v: "2,000+", label: "Agents outranked",    sub: "Wesley Chapel market" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-2">
                  {s.v}
                </p>
                <p className="text-[14px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[11px] text-white/30 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <section className="bg-white px-6 py-20">
          <div className="max-w-[980px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">The Problem</p>
                <p className="body-copy text-[#333333]">
                  In a market with nearly 2,000 competing agents, Emory&rsquo;s Rock Realty had visibility but not recommendation-level credibility. Inconsistent business data made the brokerage look fragmented to AI systems. When buyers asked who to trust, AI had less reason to choose them over more coherent competitors.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">What We Did</p>
                <p className="body-copy text-[#333333]">
                  Four targeted actions changed how AI interpreted and recommended the brokerage: NAP standardization across all platforms, AI Visibility Toolkit deployment, Chamber syncing to connect to a trusted local authority hub, and map-to-chat alignment for high-intent local searches within the 1.25-mile Chamber radius.
                </p>
              </div>
            </div>

            {/* Actions grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
              {[
                { action: "NAP standardization",   result: "Easier for AI to verify and cite the business" },
                { action: "Toolkit deployment",     result: "More hooks for buyer, seller, and investor queries" },
                { action: "Chamber syncing",        result: "Strengthened credibility via Chamber authority" },
                { action: "Map-to-chat alignment",  result: "Easier to surface for nearby high-intent searches" },
              ].map((r) => (
                <div key={r.action} className="bg-[#f5f5f7] rounded-[14px] px-6 py-5 flex items-start gap-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#18b5d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{r.action}</p>
                    <p className="text-[13px] text-[#7a7a7a] leading-relaxed">{r.result}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="bg-[#f5f5f7] border-l-4 border-[#18b5d8] rounded-r-[16px] px-8 py-7 mb-12">
              <p className="text-[18px] text-[#1d1d1f] leading-relaxed italic mb-4">
                &ldquo;In a sea of realtors, being the one AI recommends is everything. Buyers trust what AI tells them, and now it&rsquo;s telling them to call us.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#7a7a7a] uppercase tracking-[0.1em]">Emory&rsquo;s Rock Realty, Wesley Chapel FL</p>
            </blockquote>

            {/* Inline CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/free-report"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150"
              >
                Get My Free Visibility Report
              </Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">
                Talk to us first &rarr;
              </Link>
            </div>

          </div>
        </section>
      </article>


      {/* ── Mid-page CTA ── */}
      <section className="bg-[#18b5d8] px-6 py-16 text-center">
        <div className="max-w-[640px] mx-auto">
          <p className="text-black/60 text-[13px] font-semibold tracking-[0.18em] uppercase mb-4">Your business could be next</p>
          <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-5 leading-tight" style={{ textWrap: "balance" }}>
            Most businesses in your market haven&rsquo;t done this yet.
            That window closes fast.
          </h3>
          <p className="text-black/60 text-[16px] mb-8">
            Find out where you stand before your competitor does.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-black text-white text-[16px] font-semibold rounded-full px-8 py-4 hover:bg-[#1d1d1f] motion-safe:transition-colors duration-150"
          >
            Get the Free Report — It Takes 2 Minutes
          </Link>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CASE 03 — Diamond Dogs Smart Vending
      ══════════════════════════════════════════ */}
      <article id="diamond-dogs">

        {/* Photo hero */}
        <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&h=560&q=80"
            alt="Modern smart vending machine with digital interface"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">03</span>
              <span className="w-px h-4 bg-white/25" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-white/50 tracking-[0.1em] uppercase">Smart Vending / Tech</span>
              <span className="text-[12px] text-white/30">Wesley Chapel, FL</span>
            </div>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              Invisible to AI. Then <span className="text-[#18b5d8]">the #1 result.</span>
            </h2>
          </div>
        </div>

        {/* Stats band */}
        <div className="bg-[#07141a] px-6 py-14 border-y border-white/5">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "#1",  label: "AI recommended",      sub: "Named, described & linked by AI" },
              { v: "3",   label: "AI platforms",         sub: "ChatGPT, Gemini, Perplexity" },
              { v: "30d", label: "Time to visibility",   sub: "invisible to top result" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-2">
                  {s.v}
                </p>
                <p className="text-[14px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[11px] text-white/30 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <section className="bg-[#f5f5f7] px-6 py-20">
          <div className="max-w-[980px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">The Problem</p>
                <p className="body-copy text-[#333333]">
                  Diamond Dogs had a real operating business, but zero AI-visible reinforcement to appear in recommendation answers for local smart vending demand. Without strong entity signals, AI answers pointed to national suppliers instead of the right local operator.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">What We Did</p>
                <p className="body-copy text-[#333333]">
                  Three layers made the difference: JSON-LD structured data to give AI a clear understanding of who Diamond Dogs is; Chamber toolkit authority creating a trusted local reference layer; and AI-readable service language, smart vending, AI vision technology, telemetry-driven restocking, tap-to-pay, giving AI the right hooks to recommend them.
                </p>
              </div>
            </div>

            {/* Why it worked */}
            <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-6">
              Why AI Started Recommending Them
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14">
              {[
                {
                  label: "Clear Entity Definition",
                  body: "Structured data helped AI identify Diamond Dogs as the primary entity for this service category in the local market.",
                },
                {
                  label: "Service Relevance",
                  body: "Site language matched how AI describes modern smart vending: AI vision, telemetry, tap-to-pay, and grab-and-go retail.",
                },
                {
                  label: "Trusted Local References",
                  body: "Chamber and Shark Branding references gave AI an external trust path instead of relying on one website alone.",
                },
              ].map((c) => (
                <div key={c.label} className="bg-white rounded-[14px] px-6 py-6 shadow-sm">
                  <p className="text-[11px] font-bold text-[#18b5d8] uppercase tracking-[0.18em] mb-3">{c.label}</p>
                  <p className="text-[14px] text-[#333333] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="bg-white border-l-4 border-[#18b5d8] rounded-r-[16px] px-8 py-7 mb-12 shadow-sm">
              <p className="text-[18px] text-[#1d1d1f] leading-relaxed italic mb-4">
                &ldquo;ChatGPT literally names us by name now. Before Shark Branding, we didn&rsquo;t exist to AI at all. It&rsquo;s like being handed an entire new channel for free.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#7a7a7a] uppercase tracking-[0.1em]">Diamond Dogs Smart Vending, Wesley Chapel FL</p>
            </blockquote>

            {/* Inline CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/free-report"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150"
              >
                Get My Free Visibility Report
              </Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">
                Talk to us first &rarr;
              </Link>
            </div>

          </div>
        </section>
      </article>


      {/* ══════════════════════════════════════════
          CASE 04 — North Tampa Bay Chamber
      ══════════════════════════════════════════ */}
      <article id="north-tampa-bay-chamber">

        {/* Photo hero */}
        <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&h=560&q=80"
            alt="Business professionals networking at a chamber of commerce event"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-[980px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">04</span>
              <span className="w-px h-4 bg-white/25" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-white/50 tracking-[0.1em] uppercase">Chamber of Commerce</span>
              <span className="text-[12px] text-white/30">North Tampa Bay, FL</span>
            </div>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              From standard directory to <span className="text-[#18b5d8]">trusted AI source.</span>
            </h2>
          </div>
        </div>

        {/* Stats band */}
        <div className="bg-[#0a0a0a] px-6 py-14 border-y border-white/5">
          <div className="max-w-[980px] mx-auto grid grid-cols-3 divide-x divide-white/8">
            {[
              { v: "96%",  label: "AI visibility gap",    sub: "members not recommended by AI" },
              { v: "10×",  label: "More AI citations",    sub: "Chamber as trusted local source" },
              { v: "30d",  label: "Days to results",      sub: "measurable visibility gains" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center first:pl-0 last:pr-0">
                <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-none tracking-tight text-[#18b5d8] mb-2">
                  {s.v}
                </p>
                <p className="text-[14px] font-semibold text-white mb-1">{s.label}</p>
                <p className="text-[11px] text-white/30 tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <section className="bg-white px-6 py-20">
          <div className="max-w-[980px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">The Problem</p>
                <p className="body-copy text-[#333333]">
                  Most Chamber member businesses weren&rsquo;t showing up in AI search at all. When buyers asked AI who to trust locally, it could only recommend businesses it could verify, and most couldn&rsquo;t clear that bar. Inconsistent information caused businesses to be skipped entirely, regardless of how good they actually were.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-4">What We Did</p>
                <p className="body-copy text-[#333333]">
                  Three targeted steps: cleaned and unified business information across every platform AI relies on, built stronger digital authority so AI could clearly trust the Chamber as a local source, and aligned member visibility so the Chamber&rsquo;s credibility actively translated into member recommendations.
                </p>
              </div>
            </div>

            {/* Before / after table */}
            <div className="bg-[#f5f5f7] rounded-[20px] overflow-hidden mb-14">
              <div className="hidden md:grid grid-cols-3 bg-[#0a0a0a] px-8 py-5 gap-6">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">Visibility Factor</span>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">Before</span>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8]/70">After (30 Days)</span>
              </div>
              {[
                { factor: "AI Recommendations",       before: "Not showing up in AI results",                        after: "Increased presence in AI-generated answers" },
                { factor: "Chamber Authority",         before: "Standard local directory",                            after: "Recognized as a trusted local source by AI" },
                { factor: "Member Visibility",         before: "Hard for AI to find and validate",                   after: "Members easier for AI to find, verify, and recommend" },
                { factor: "Information Consistency",   before: "Inconsistencies causing businesses to be skipped",   after: "Unified data across every platform AI relies on" },
              ].map((row, i) => (
                <div
                  key={row.factor}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 px-6 md:px-8 py-5 md:py-6 border-b border-black/5 last:border-0 items-start ${i % 2 === 1 ? "bg-[#fafbfc]" : "bg-white"}`}
                >
                  <p className="text-[15px] font-semibold text-[#1d1d1f]">{row.factor}</p>
                  <p className="text-[13px] text-[#aaa] flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5" aria-hidden="true">✕</span>
                    {row.before}
                  </p>
                  <p className="text-[13px] text-[#18b5d8] flex items-start gap-2">
                    <span className="font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                    {row.after}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="bg-[#f5f5f7] border-l-4 border-[#18b5d8] rounded-r-[16px] px-8 py-7 mb-12">
              <p className="text-[18px] text-[#1d1d1f] leading-relaxed italic mb-4">
                &ldquo;96% of our members were invisible to AI before this. Now when people ask who to trust in North Tampa Bay, the Chamber actually shows up as the answer.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#7a7a7a] uppercase tracking-[0.1em]">North Tampa Bay Chamber of Commerce, FL</p>
            </blockquote>

            {/* Inline CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/free-report"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150"
              >
                Get My Free Visibility Report
              </Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">
                Talk to us first &rarr;
              </Link>
            </div>

          </div>
        </section>
      </article>


      {/* ── Why Now ── */}
      <section className="bg-[#f5f5f7] border-t border-[#e8e8ed] px-6 py-20">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-3 mb-8">
            <p className="text-[11px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-3">Why this matters right now</p>
            <h3 className="display-lg text-[#0a0a0a] max-w-[640px]" style={{ textWrap: "balance" }}>
              The businesses that move first will own this for years.
            </h3>
          </div>
          {[
            {
              heading: "AI search is here now",
              body: "Over 60% of Google searches now surface an AI-generated answer before any website link. If your business isn't optimized for that answer, you're invisible at the moment of decision.",
            },
            {
              heading: "Most competitors aren't ready",
              body: "The vast majority of local businesses haven't touched AI visibility at all. Right now, showing up in AI answers is a genuine competitive advantage, not table stakes.",
            },
            {
              heading: "Results come in days, not months",
              body: "Every case on this page saw measurable movement in under 30 days. This isn't a six-month project. It's a systematic fix with a fast feedback loop.",
            },
          ].map((c) => (
            <div key={c.heading} className="bg-white rounded-[16px] px-7 py-7 shadow-sm">
              <p className="text-[16px] font-bold text-[#0a0a0a] mb-3">{c.heading}</p>
              <p className="text-[14px] text-[#555] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── Final CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[620px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
            Your turn
          </p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Your competitors haven&rsquo;t done this yet.
            You could be next.
          </h2>
          <p className="lead-airy text-white/50 mb-4" style={{ textWrap: "balance" }}>
            We&rsquo;ll run your business through the same audit we ran for these four. You&rsquo;ll see exactly where you stand in AI search, what&rsquo;s holding you back, and what it would take to move.
          </p>
          <p className="text-[14px] text-white/30 mb-12">Free. No sales pressure. Delivered in 48 hours.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free Visibility Report
            </Link>
            <Link
              href="/contact"
              className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
