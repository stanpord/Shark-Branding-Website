import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Tampa Bay Businesses | Shark AI Solutions",
  description:
    "HVAC, real estate, smart vending, and chamber of commerce — four Tampa Bay businesses that went from invisible to #1 in AI search in under 30 days.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-[#f5f5f7] pt-28 pb-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">
            Documented Results
          </p>
          <h1 className="text-[52px] sm:text-[64px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-6" style={{ textWrap: "balance" }}>
            Real clients.<br />
            <span className="text-[#18b5d8]">Real rankings.</span><br />
            30 days.
          </h1>
          <p className="text-[#6e6e73] text-[19px] leading-relaxed max-w-[540px] mx-auto mb-12" style={{ textWrap: "balance" }}>
            Every number on this page is documented from a real Tampa Bay business. No projections, no estimates.
          </p>

          {/* Aggregate stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-[640px] mx-auto">
            {[
              { v: "4",   label: "Industries" },
              { v: "30d", label: "Time to results" },
              { v: "6+",  label: "Keywords top 3" },
              { v: "3",   label: "AI platforms" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-[16px] border border-[#e5e5ea] px-4 py-5 text-center shadow-sm">
                <p className="text-[32px] font-extrabold text-[#18b5d8] leading-none mb-1">{s.v}</p>
                <p className="text-[11px] text-[#86868b] uppercase tracking-[1px] font-semibold">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Jump links */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "HVAC",             href: "#hvac" },
              { label: "Real Estate",      href: "#emorys-rock-realty" },
              { label: "Smart Vending",    href: "#diamond-dogs" },
              { label: "Chamber",          href: "#north-tampa-bay-chamber" },
            ].map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="text-[13px] font-semibold text-[#6e6e73] border border-[#d2d2d7] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
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
        <div className="relative h-[380px] sm:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&h=560&q=90"
            alt="HVAC air conditioning units on the exterior of a building"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/90 via-[#1d1d1f]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-[1000px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8]">Case 01</span>
              <span className="w-px h-3 bg-white/30" />
              <span className="text-[12px] font-semibold text-white/60 uppercase tracking-wide">Home Services / HVAC · Tampa Bay, FL</span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] font-extrabold text-white leading-tight tracking-tight" style={{ textWrap: "balance" }}>
              Page 3 to <span className="text-[#18b5d8]">#2 on Google</span> in 30 days.
            </h2>
          </div>
        </div>

        {/* Stats band */}
        <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] px-6 py-12">
          <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 divide-x divide-[#e5e5ea]">
            {[
              { v: "#32→#2", label: "Best keyword jump",   sub: '"same day AC repair"' },
              { v: "6",      label: "Keywords in top 3",   sub: "all high-intent local" },
              { v: "30d",    label: "Time to results",     sub: "page 3 to top local" },
            ].map((s) => (
              <div key={s.label} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="text-[36px] sm:text-[44px] font-extrabold text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{s.label}</p>
                <p className="text-[12px] text-[#86868b]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <section className="bg-white px-6 py-20">
          <div className="max-w-[1000px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">The Problem</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  This HVAC company was doing excellent work but wasn&rsquo;t showing up where it mattered. When homeowners searched for urgent help — "same day AC repair," "emergency AC repair," "HVAC near me" — every call went to whoever ranked at the top. They were invisible right when buyers needed them most.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">What We Did</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  Using the AI Visibility Toolkit, we addressed search readiness, authority signals, and accurate business data across every platform. We cleaned up location and service data so AI systems connected the right business to the right searches, across Google, Maps, voice search, and AI-assisted discovery.
                </p>
              </div>
            </div>

            {/* Before / After */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="bg-[#f5f5f7] rounded-[20px] p-8 border border-[#e5e5ea]">
                <span className="inline-block bg-[#1d1d1f] text-white text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full mb-6">Before</span>
                <p className="text-[20px] font-bold text-[#1d1d1f] mb-5">Hard to find. Easy to skip.</p>
                <ul className="space-y-3">
                  {["Not ranking for high-intent keywords","Low visibility in local search","Inconsistent online presence","Minimal inbound calls or engagement"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#6e6e73] leading-relaxed">
                      <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#07141a] rounded-[20px] p-8 border border-[#18b5d8]/20">
                <span className="inline-block bg-[#18b5d8] text-white text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full mb-6">After 30 Days</span>
                <p className="text-[20px] font-bold text-white mb-5">Top 3 rankings. More calls. Real growth.</p>
                <ul className="space-y-3">
                  {[`Multiple keywords moved into Top 3 "Money Zone"`,"High-intent searches captured","Significant increase in calls & engagement","Dominating local visibility in key service areas"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-white/70 leading-relaxed">
                      <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Keyword ranking table */}
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-5">Keyword Rankings</p>
            <div className="rounded-[20px] overflow-hidden border border-[#e5e5ea] mb-14">
              <div className="grid grid-cols-[1fr_110px_80px_110px] bg-[#f5f5f7] border-b border-[#e5e5ea] px-6 py-4 text-[11px] font-bold uppercase tracking-[1.5px] text-[#86868b]">
                <span>Keyword</span>
                <span className="text-center">Now</span>
                <span className="text-center">Move</span>
                <span className="text-center">Before</span>
              </div>
              {[
                { kw: "same day ac repair",               after: "#2",  move: "+30", before: "#32" },
                { kw: "air conditioning service near me", after: "#2",  move: "+29", before: "#31" },
                { kw: "24 hour hvac repair",              after: "#3",  move: "+19", before: "#22" },
                { kw: "emergency ac repair",              after: "#2",  move: "+19", before: "#21" },
                { kw: "ac installation",                  after: "#4",  move: "+22", before: "#26" },
                { kw: "hvac repair",                      after: "#5",  move: "+18", before: "#23" },
              ].map((r, i) => (
                <div key={r.kw} className={`grid grid-cols-[1fr_110px_80px_110px] px-6 py-4 items-center border-b border-[#f0f0f0] last:border-0 ${i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}`}>
                  <span className="text-[15px] font-medium text-[#1d1d1f]">{r.kw}</span>
                  <span className="text-center text-[15px] font-extrabold text-[#18b5d8]">{r.after}</span>
                  <span className="text-center text-[14px] font-bold text-emerald-600">{r.move}</span>
                  <span className="text-center text-[14px] text-[#86868b]">{r.before}</span>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#18b5d8] pl-8 py-2 mb-12">
              <p className="text-[20px] text-[#1d1d1f] leading-relaxed italic mb-3">
                &ldquo;We went from getting beat out by competitors every day to being the first name that shows up. The phone didn&rsquo;t stop ringing after that.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wide">HVAC Company Owner, Tampa Bay FL</p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-report" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#14a0c0] motion-safe:transition-colors">Get My Free AI Audit</Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">Talk to us first &rarr;</Link>
            </div>
          </div>
        </section>
      </article>


      {/* ══════════════════════════════════════════
          CASE 02 — Real Estate
      ══════════════════════════════════════════ */}
      <article id="emorys-rock-realty">

        <div className="relative h-[380px] sm:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&h=560&q=90"
            alt="Modern home exterior representing real estate in Wesley Chapel FL"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/90 via-[#1d1d1f]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-[1000px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8]">Case 02</span>
              <span className="w-px h-3 bg-white/30" />
              <span className="text-[12px] font-semibold text-white/60 uppercase tracking-wide">Real Estate · Wesley Chapel, FL</span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] font-extrabold text-white leading-tight tracking-tight" style={{ textWrap: "balance" }}>
              <span className="text-[#18b5d8]">#1 realtor</span> in a market of 2,000+ agents.
            </h2>
          </div>
        </div>

        <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] px-6 py-12">
          <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 divide-x divide-[#e5e5ea]">
            {[
              { v: "+20%",   label: "AI recommendations", sub: "within 30 days" },
              { v: "#4→#1",  label: "Local ranking",      sub: '"Best Realtors Wesley Chapel"' },
              { v: "2,000+", label: "Agents outranked",   sub: "Wesley Chapel market" },
            ].map((s) => (
              <div key={s.label} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="text-[36px] sm:text-[44px] font-extrabold text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{s.label}</p>
                <p className="text-[12px] text-[#86868b]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white px-6 py-20">
          <div className="max-w-[1000px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">The Problem</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  Not consistently showing up in AI-driven results. Inconsistent business data across platforms created weak trust signals for search and AI — causing buyers and sellers to land on competitors instead.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">What We Did</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  We built stronger, more consistent digital presence — aligned entity signals, strengthened local authority, and positioned Emory&rsquo;s Rock Realty to be the agent AI recommends when buyers, sellers, and investors ask who to work with.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              {[
                { stat: "$20–$100+", label: "per click",         body: "Real estate keywords cost $20–$100+ per click. Paid visibility is expensive and temporary." },
                { stat: "Organic",   label: "AI positioning",    body: "AI Visibility means organic positioning — showing up without paying for every click." },
                { stat: "2,000+",    label: "agents outranked",  body: "In a market this large, being chosen matters more than being seen." },
              ].map((c) => (
                <div key={c.stat} className="bg-[#f5f5f7] rounded-[16px] px-6 py-6 text-center border border-[#e5e5ea]">
                  <p className="text-[28px] font-extrabold text-[#18b5d8] leading-none mb-1">{c.stat}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#86868b] mb-3">{c.label}</p>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#18b5d8] pl-8 py-2 mb-12">
              <p className="text-[20px] text-[#1d1d1f] leading-relaxed italic mb-3">
                &ldquo;In a market this competitive, a 20% increase in AI recommendations isn&rsquo;t incremental. It&rsquo;s a competitive advantage.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wide">Emory&rsquo;s Rock Realty, Wesley Chapel FL</p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-report" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#14a0c0] motion-safe:transition-colors">Get My Free AI Audit</Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">Talk to us first &rarr;</Link>
            </div>
          </div>
        </section>
      </article>


      {/* ── Mid-page CTA ── */}
      <section className="bg-[#18b5d8] px-6 py-16 text-center">
        <div className="max-w-[640px] mx-auto">
          <p className="text-white/70 text-[13px] font-bold uppercase tracking-[2px] mb-4">Your business could be next</p>
          <h3 className="text-[32px] font-extrabold text-white mb-5 leading-tight" style={{ textWrap: "balance" }}>
            Most businesses in your market haven&rsquo;t done this yet. That window closes fast.
          </h3>
          <p className="text-white/80 text-[17px] mb-8">Find out where you stand before your competitor does.</p>
          <Link href="/free-report" className="inline-block bg-white text-[#1d1d1f] text-[16px] font-bold rounded-full px-8 py-4 hover:bg-[#f0f0f0] motion-safe:transition-colors">
            Get My Free AI Audit
          </Link>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CASE 03 — Diamond Dogs Smart Vending
      ══════════════════════════════════════════ */}
      <article id="diamond-dogs">

        <div className="relative h-[380px] sm:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&h=560&q=90"
            alt="Modern smart vending machine with digital interface"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/90 via-[#1d1d1f]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-[1000px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8]">Case 03</span>
              <span className="w-px h-3 bg-white/30" />
              <span className="text-[12px] font-semibold text-white/60 uppercase tracking-wide">Smart Vending / Tech · Wesley Chapel, FL</span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] font-extrabold text-white leading-tight tracking-tight" style={{ textWrap: "balance" }}>
              Invisible to AI. Then <span className="text-[#18b5d8]">the #1 result.</span>
            </h2>
          </div>
        </div>

        <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] px-6 py-12">
          <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 divide-x divide-[#e5e5ea]">
            {[
              { v: "#1",  label: "AI recommended",    sub: "Named, described & linked by AI" },
              { v: "3",   label: "AI platforms",       sub: "ChatGPT, Gemini, Perplexity" },
              { v: "30d", label: "Time to visibility", sub: "invisible to top result" },
            ].map((s) => (
              <div key={s.label} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="text-[36px] sm:text-[44px] font-extrabold text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{s.label}</p>
                <p className="text-[12px] text-[#86868b]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white px-6 py-20">
          <div className="max-w-[1000px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">The Problem</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  Diamond Dogs had a real operating business, but zero AI-visible reinforcement to appear in recommendation answers for local smart vending demand. Without strong entity signals, AI answers pointed to national suppliers instead of the right local operator.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">What We Did</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  Three layers made the difference: JSON-LD structured data to give AI a clear understanding of who Diamond Dogs is; Chamber toolkit authority creating a trusted local reference layer; and AI-readable service language giving AI the right hooks to recommend them.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
              {[
                { label: "Clear Entity Definition",  body: "Structured data helped AI identify Diamond Dogs as the primary entity for this service category in the local market." },
                { label: "Service Relevance",         body: "Site language matched how AI describes modern smart vending: AI vision, telemetry, tap-to-pay, and grab-and-go retail." },
                { label: "Trusted Local References",  body: "Chamber and Shark Branding references gave AI an external trust path instead of relying on one website alone." },
              ].map((c) => (
                <div key={c.label} className="bg-[#f5f5f7] rounded-[16px] px-6 py-6 border border-[#e5e5ea]">
                  <p className="text-[11px] font-bold text-[#18b5d8] uppercase tracking-[1.5px] mb-3">{c.label}</p>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#18b5d8] pl-8 py-2 mb-12">
              <p className="text-[20px] text-[#1d1d1f] leading-relaxed italic mb-3">
                &ldquo;ChatGPT literally names us by name now. Before Shark Branding, we didn&rsquo;t exist to AI at all. It&rsquo;s like being handed an entire new channel for free.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wide">Diamond Dogs Smart Vending, Wesley Chapel FL</p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-report" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#14a0c0] motion-safe:transition-colors">Get My Free AI Audit</Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">Talk to us first &rarr;</Link>
            </div>
          </div>
        </section>
      </article>


      {/* ══════════════════════════════════════════
          CASE 04 — North Tampa Bay Chamber
      ══════════════════════════════════════════ */}
      <article id="north-tampa-bay-chamber">

        <div className="relative h-[380px] sm:h-[480px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&h=560&q=90"
            alt="Business professionals networking at the North Tampa Bay Chamber of Commerce"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/90 via-[#1d1d1f]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-[1000px] mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8]">Case 04</span>
              <span className="w-px h-3 bg-white/30" />
              <span className="text-[12px] font-semibold text-white/60 uppercase tracking-wide">Chamber of Commerce · North Tampa Bay, FL</span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] font-extrabold text-white leading-tight tracking-tight" style={{ textWrap: "balance" }}>
              From standard directory to <span className="text-[#18b5d8]">trusted AI source.</span>
            </h2>
          </div>
        </div>

        <div className="bg-[#f5f5f7] border-b border-[#e5e5ea] px-6 py-12">
          <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 divide-x divide-[#e5e5ea]">
            {[
              { v: "96%", label: "AI visibility gap",  sub: "members not recommended by AI" },
              { v: "10×", label: "More AI citations",  sub: "Chamber as trusted local source" },
              { v: "30d", label: "Days to results",    sub: "measurable visibility gains" },
            ].map((s) => (
              <div key={s.label} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="text-[36px] sm:text-[44px] font-extrabold text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{s.label}</p>
                <p className="text-[12px] text-[#86868b]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white px-6 py-20">
          <div className="max-w-[1000px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">The Problem</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  Most Chamber member businesses weren&rsquo;t showing up in AI search at all. When buyers asked AI who to trust locally, it could only recommend businesses it could verify — and most couldn&rsquo;t clear that bar. Inconsistent information caused businesses to be skipped entirely.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">What We Did</p>
                <p className="text-[#6e6e73] text-[17px] leading-relaxed">
                  Three targeted steps: cleaned and unified business information across every platform AI relies on, built stronger digital authority so AI could clearly trust the Chamber as a local source, and aligned member visibility so the Chamber&rsquo;s credibility actively translated into member recommendations.
                </p>
              </div>
            </div>

            {/* Before / after table */}
            <div className="rounded-[20px] overflow-hidden border border-[#e5e5ea] mb-14">
              <div className="hidden md:grid grid-cols-3 bg-[#f5f5f7] border-b border-[#e5e5ea] px-8 py-5 gap-6">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b]">Visibility Factor</span>
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b]">Before</span>
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8]">After (30 Days)</span>
              </div>
              {[
                { factor: "AI Recommendations",     before: "Not showing up in AI results",                      after: "Increased presence in AI-generated answers" },
                { factor: "Chamber Authority",       before: "Standard local directory",                          after: "Recognized as a trusted local source by AI" },
                { factor: "Member Visibility",       before: "Hard for AI to find and validate",                 after: "Members easier for AI to find, verify, and recommend" },
                { factor: "Info Consistency",        before: "Inconsistencies causing businesses to be skipped", after: "Unified data across every platform AI relies on" },
              ].map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 px-6 md:px-8 py-5 border-b border-[#f0f0f0] last:border-0 ${i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}`}>
                  <p className="text-[15px] font-semibold text-[#1d1d1f]">{row.factor}</p>
                  <p className="text-[14px] text-[#86868b] flex items-start gap-2"><span className="text-red-400 font-bold shrink-0">✕</span>{row.before}</p>
                  <p className="text-[14px] text-[#18b5d8] flex items-start gap-2"><span className="font-bold shrink-0">✓</span>{row.after}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#18b5d8] pl-8 py-2 mb-12">
              <p className="text-[20px] text-[#1d1d1f] leading-relaxed italic mb-3">
                &ldquo;96% of our members were invisible to AI before this. Now when people ask who to trust in North Tampa Bay, the Chamber actually shows up as the answer.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wide">North Tampa Bay Chamber of Commerce, FL</p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-report" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#14a0c0] motion-safe:transition-colors">Get My Free AI Audit</Link>
              <Link href="/contact" className="text-[15px] font-semibold text-[#18b5d8] hover:underline">Talk to us first &rarr;</Link>
            </div>
          </div>
        </section>
      </article>


      {/* ── Why Now ── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] px-6 py-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-3">Why this matters right now</p>
            <h3 className="text-[36px] sm:text-[44px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight max-w-[600px]" style={{ textWrap: "balance" }}>
              The businesses that move first will own this for years.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { heading: "AI search is here now",         body: "Over 60% of Google searches now surface an AI-generated answer before any website link. If your business isn't optimized for that answer, you're invisible at the moment of decision." },
              { heading: "Most competitors aren't ready", body: "The vast majority of local businesses haven't touched AI visibility at all. Right now, showing up in AI answers is a genuine competitive advantage, not table stakes." },
              { heading: "Results come in days",          body: "Every case on this page saw measurable movement in under 30 days. This isn't a six-month project. It's a systematic fix with a fast feedback loop." },
            ].map((c) => (
              <div key={c.heading} className="bg-white rounded-[20px] px-7 py-7 border border-[#e5e5ea] shadow-sm">
                <p className="text-[17px] font-bold text-[#1d1d1f] mb-3">{c.heading}</p>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Final CTA ── */}
      <section className="bg-[#07141a] py-28 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-6">Your turn</p>
          <h2 className="text-[40px] sm:text-[48px] font-extrabold text-white leading-tight tracking-tight mb-6" style={{ textWrap: "balance" }}>
            Your competitors haven&rsquo;t done this yet. You could be next.
          </h2>
          <p className="text-white/60 text-[18px] leading-relaxed mb-3" style={{ textWrap: "balance" }}>
            We&rsquo;ll run your business through the same audit we ran for these four clients — and show you exactly where you stand.
          </p>
          <p className="text-[14px] text-white/30 mb-12">Free. No sales pressure. Delivered in 48 hours.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/free-report" className="inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-8 py-4 hover:bg-[#14a0c0] motion-safe:transition-colors">
              Get My Free AI Audit
            </Link>
            <Link href="/contact" className="inline-block text-white text-[17px] border border-white/20 rounded-full px-7 py-4 hover:border-white/50 motion-safe:transition-colors">
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
