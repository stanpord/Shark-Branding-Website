import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Visibility Pricing — Tampa Bay | Shark Branding Solutions",
  description:
    "Three tiers of AI visibility for Tampa Bay. Foundation $997/mo, Growth $2,500/mo, Dominance $5,000+/mo. Get found on ChatGPT, Gemini, and Google.",
};

const tier1Features = [
  "AI Visibility Audit (Quarterly) — 20 constrained prompts across ChatGPT, Perplexity, and Gemini",
  "Citation & NAP Consistency — audit and correct listings across hundreds of directories",
  "Google Business Profile Optimization — weekly updates, photos, posts, and review replies",
  "Basic Schema Implementation — LocalBusiness, Service, FAQ, Review, and Organization schema",
  "Monthly Visibility Report — AI score, citation growth, and specific action items",
];

const tier2AddsFeatures = [
  "AI-Optimized Content Creation — answer-ready content AI can extract and reference, not generic blog posts",
  "Third-Party Mention Building — 1–2 local PR placements per month, industry directories, partnership co-mentions",
  "Advanced Prompt Strategy — 50+ prompt variations, neighborhood-level GEO testing, monthly expansion",
  "Review Engineering — automated follow-up engine, multi-platform diversification, sentiment monitoring",
  "Advanced Reporting — competitive share of voice, AI sentiment analysis, revenue attribution in GA4",
];

const tier3AddsFeatures = [
  "Dedicated Digital PR Campaign — original research, expert commentary placement, ongoing media relationships",
  "Knowledge Graph Enhancement — entity optimization, Wikipedia eligibility, industry database listings",
  "Multi-Location Coordination — neighborhood-level content, centrally coordinated reputation management",
  "Executive Visibility — founder personal brand, thought leadership, podcast and speaking opportunities",
];

const comparisonFeatures = [
  { label: "AI Visibility Audit",              t1: true,  t2: true,  t3: true  },
  { label: "Citation & NAP Consistency",       t1: true,  t2: true,  t3: true  },
  { label: "GBP Optimization (weekly)",        t1: true,  t2: true,  t3: true  },
  { label: "Schema Implementation",            t1: true,  t2: true,  t3: true  },
  { label: "Monthly Visibility Report",        t1: true,  t2: true,  t3: true  },
  { label: "AI-Optimized Content Creation",    t1: false, t2: true,  t3: true  },
  { label: "Third-Party Mention Building",     t1: false, t2: true,  t3: true  },
  { label: "50+ Prompt Strategy & Testing",    t1: false, t2: true,  t3: true  },
  { label: "Review Engineering",               t1: false, t2: true,  t3: true  },
  { label: "Competitive Share of Voice",       t1: false, t2: true,  t3: true  },
  { label: "Dedicated Digital PR Campaign",    t1: false, t2: false, t3: true  },
  { label: "Knowledge Graph Enhancement",      t1: false, t2: false, t3: true  },
  { label: "Multi-Location Coordination",      t1: false, t2: false, t3: true  },
  { label: "Executive Visibility",             t1: false, t2: false, t3: true  },
];

const objections = [
  {
    q: "I've paid for SEO before and it didn't work. How is this different?",
    a: "Traditional SEO targets search engine algorithms. This targets AI search engines — the systems behind ChatGPT, Gemini, and Google AI Overviews that now drive a growing share of local business discovery. The signals are different, the work is different, and the timeline is faster. Our HVAC client saw position movement in 30 days, not six months.",
  },
  {
    q: "What actually happens after I sign up?",
    a: "You'll receive an onboarding call within 48 hours. We audit your current AI visibility, build your strategy plan, and begin implementation in week one. By the end of month one, you'll have a baseline score and a clear picture of where you stand across AI platforms.",
  },
  {
    q: "How long until I see results?",
    a: "Visibility signals typically begin moving within 30–60 days. Significant position changes — like the HVAC results below — can happen faster with consistent execution. The Growth and Dominance tiers compound faster because the content and PR layers accelerate AI consensus.",
  },
  {
    q: "Is there a contract? Can I cancel?",
    a: "We ask for a 3-month minimum to see meaningful movement — visibility work compounds over time and results before month three are incomplete. After that, cancel with 30 days' notice. No lock-ins, no tricks. Questions? Talk to us before you commit.",
  },
];

const faqs = [
  {
    q: "Which tier is right for my business?",
    a: "Foundation is the entry point — right for businesses that want to fix the basics and build a visibility floor. Growth is the sweet spot for competitive markets where you need to win recommendations, not just participate. Dominance is for multi-location businesses or highly competitive markets where the goal is to own the category.",
  },
  {
    q: "What does \"AI visibility\" actually mean for a local business?",
    a: "When someone asks ChatGPT, Gemini, or Google's AI Overviews who is the best HVAC company near me — AI systems pull from citation data, reviews, local listings, and structured content to decide which businesses to mention. If those signals aren't in order, your business gets skipped. These tiers fix that systematically.",
  },
  {
    q: "Does this work for my industry?",
    a: "The framework applies to any local service business that relies on customers finding them online — HVAC, real estate, legal, medical, home services, restaurants, retail, and more. The signals AI systems look for are consistent across industries.",
  },
  {
    q: "Is there special pricing for Chamber members?",
    a: "Yes. North Tampa Bay Chamber members can request member-only pricing directly from the team. We keep that off the public page and share it with qualified members directly.",
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="rgba(24,181,216,0.15)" />
      <polyline points="8 12 11 15 16 9" stroke="#18b5d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TableCheck({ yes }: { yes: boolean }) {
  if (yes) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Included" className="mx-auto">
        <circle cx="12" cy="12" r="10" fill="rgba(24,181,216,0.15)" />
        <polyline points="8 12 11 15 16 9" stroke="#18b5d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-label="Not included" className="mx-auto opacity-30">
      <line x1="8" y1="8" x2="16" y2="16" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="8" x2="8" y2="16" stroke="#888" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function PlansPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            AI Visibility Plans
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Get found on ChatGPT, Gemini, and Google&nbsp;&mdash;{" "}
            <span className="text-[#18b5d8]">without paying for ads.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[560px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            AI search engines are already recommending your competitors. These plans make sure they recommend you instead. Three tiers, fully done for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-4">
            {[
              { text: "HVAC client: #32 → #2 in 30 days" },
              { text: "No paid ads required" },
              { text: "North Tampa Bay Chamber partner", href: "https://www.northtampabay.org" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-[14px] font-semibold text-[#333333]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#18b5d8] transition-colors">
                    {item.text}
                  </a>
                ) : item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing cards ── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Tier 1: Foundation */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-white/8 flex flex-col">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">
                Tier 1 — Foundation
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                AI Visibility<br />Foundation
              </h2>
              <p className="text-[13px] text-white/40 mt-2 mb-5 leading-relaxed">
                The entry point. For businesses ready to address AI visibility without going all-in.
              </p>

              <div className="mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold text-white leading-none">$997</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">3-month minimum, then cancel anytime</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {tier1Features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-press mt-6 block text-center bg-white text-[#0a0a0a] text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#18b5d8] hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Start Foundation — $997/mo
              </Link>
            </div>

            {/* Tier 2: Growth (Recommended) */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-[#18b5d8]/40 ring-1 ring-[#18b5d8]/15 flex flex-col relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#18b5d8] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              </div>

              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5 mt-2">
                Tier 2 — Growth
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                AI Visibility<br />Growth
              </h2>
              <p className="text-[13px] text-white/40 mt-2 mb-5 leading-relaxed">
                The sweet spot. For competitive markets where the goal is to win recommendations, not just participate.
              </p>

              <div className="mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold text-[#18b5d8] leading-none">$2,500</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">3-month minimum, then cancel anytime</p>
              </div>

              <div className="mt-3 flex items-start gap-2 bg-[#18b5d8]/10 border border-[#18b5d8]/25 rounded-[10px] px-4 py-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <p className="text-[12px] text-[#18b5d8] font-semibold leading-snug">
                  Includes everything in Foundation, plus content, PR, and advanced prompt strategy
                </p>
              </div>

              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mt-6 mb-3">Added in Growth</p>
              <ul className="space-y-3 flex-1">
                {tier2AddsFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-press mt-6 block text-center bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Start Growth — $2,500/mo
              </Link>
            </div>

            {/* Tier 3: Dominance */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-dashed border-white/10 flex flex-col">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">
                Tier 3 — Dominance
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                AI Visibility<br />Dominance
              </h2>
              <p className="text-[13px] text-white/40 mt-2 mb-5 leading-relaxed">
                For multi-location businesses or highly competitive markets where the goal is to dominate recommendations.
              </p>

              <div className="mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-semibold text-white/70 leading-none">$5,000+</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">Custom scope — let&rsquo;s talk</p>
              </div>

              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mt-6 mb-3">Added in Dominance</p>
              <ul className="space-y-3 flex-1">
                {tier3AddsFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/50 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-press mt-6 block text-center text-white text-[15px] font-semibold rounded-full px-6 py-3.5 border border-white/20 hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Request Dominance Scope
              </Link>
            </div>

          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              "90-day visibility improvement guarantee",
              "3-month minimum, then cancel anytime",
              "No paid ads required",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] text-white/35">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <p className="text-center text-[14px] text-white/30 mt-6">
            Not sure yet?{" "}
            <Link href="/free-report" className="text-[#18b5d8] font-semibold hover:underline">
              Start with the free Visibility Audit →
            </Link>{" "}
            See exactly where you stand before you commit to anything.
          </p>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Plan Comparison</p>
            <h2 className="text-[28px] font-semibold text-white" style={{ textWrap: "balance" }}>
              What&rsquo;s included in each tier
            </h2>
          </div>

          <div className="overflow-x-auto">
          <div className="rounded-[20px] overflow-hidden border border-white/10 min-w-[540px]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
              <div className="px-5 py-4" />
              {[
                { label: "Foundation", sub: "$997/mo",    highlight: false },
                { label: "Growth",     sub: "$2,500/mo",  highlight: true  },
                { label: "Dominance",  sub: "$5,000+/mo", highlight: false },
              ].map((col) => (
                <div key={col.label} className={`px-5 py-4 text-center ${col.highlight ? "bg-[#18b5d8]/10" : ""}`}>
                  <p className={`text-[13px] font-semibold ${col.highlight ? "text-[#18b5d8]" : "text-white"}`}>{col.label}</p>
                  <p className="text-[11px] text-white/35 mt-0.5">{col.sub}</p>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {comparisonFeatures.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 border-b border-white/5 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
              >
                <div className="px-5 py-3.5 text-[13px] text-white/60 col-span-1 flex items-center">{row.label}</div>
                <div className="px-5 py-3.5 flex items-center justify-center">
                  <TableCheck yes={row.t1} />
                </div>
                <div className="px-5 py-3.5 flex items-center justify-center bg-[#18b5d8]/5">
                  <TableCheck yes={row.t2} />
                </div>
                <div className="px-5 py-3.5 flex items-center justify-center">
                  <TableCheck yes={row.t3} />
                </div>
              </div>
            ))}

            {/* CTA footer row */}
            <div className="grid grid-cols-4 bg-white/5">
              <div className="px-5 py-4" />
              <div className="px-4 py-4 text-center">
                <Link href="/contact" className="text-[13px] font-semibold text-white hover:text-[#18b5d8] transition-colors">
                  Start →
                </Link>
              </div>
              <div className="px-4 py-4 text-center bg-[#18b5d8]/10">
                <Link href="/contact" className="text-[13px] font-semibold text-[#18b5d8] hover:text-[#1ec8ee] transition-colors">
                  Start →
                </Link>
              </div>
              <div className="px-4 py-4 text-center">
                <Link href="/contact" className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors">
                  Contact →
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── HVAC Proof ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">Real Result</p>
          <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
            What this work actually does to your rankings.
          </h2>
          <p className="body-copy text-[#333333] mb-10" style={{ textWrap: "balance" }}>
            One HVAC company moved from weak local visibility to top positions in under 30 days across multiple high-intent searches. No paid ads. No tricks. Just foundational AI visibility work executed correctly.
          </p>

          <div className="bg-[#f5f5f7] rounded-[20px] p-8 border border-[#e0e0e0]">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="border-b border-[#e0e0e0]">
                  <th className="text-left text-[11px] font-bold tracking-[0.15em] uppercase text-[#7a7a7a] pb-3">Keyword</th>
                  <th className="text-left text-[11px] font-bold tracking-[0.15em] uppercase text-[#7a7a7a] pb-3">Before</th>
                  <th className="text-left text-[11px] font-bold tracking-[0.15em] uppercase text-[#7a7a7a] pb-3">After 30 days</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Same day AC repair", "#32", "#2"],
                  ["Air conditioning service near me", "#31", "#2"],
                  ["HVAC near me", "#27", "#2"],
                  ["Emergency AC repair", "#21", "#3"],
                ].map(([kw, before, after], i, arr) => (
                  <tr key={kw} className={i < arr.length - 1 ? "border-b border-[#e0e0e0]" : ""}>
                    <td className="py-3 text-[#333333]">{kw}</td>
                    <td className="py-3 text-[#7a7a7a]">{before}</td>
                    <td className="py-3 font-bold text-[#18b5d8]">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <Link
              href="/case-studies"
              className="btn-press inline-block text-[#1d1d1f] text-[15px] border border-[#d2d2d7] rounded-full px-6 py-3 hover:border-[#0a0a0a] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Read the Full Case Study →
            </Link>
            <span className="text-[13px] text-[#7a7a7a]">See exactly what was done and why it worked.</span>
          </div>
        </div>
      </section>

      {/* ── Objection handling ── */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">Before You Commit</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Common concerns, answered directly.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {objections.map((o) => (
              <div key={o.q} className="bg-white rounded-[20px] px-8 py-7">
                <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-3 leading-snug">&ldquo;{o.q}&rdquo;</h3>
                <p className="body-copy text-[#333333] leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-[14px] text-[#7a7a7a]">
            Have a concern not covered here?{" "}
            <Link href="/contact" className="text-[#18b5d8] font-semibold hover:underline">
              Talk to the team before you commit →
            </Link>
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-[14px] justify-center">
            <Link href="/services" className="text-[#18b5d8] font-semibold hover:underline">What We Do →</Link>
            <Link href="/case-studies" className="text-[#18b5d8] font-semibold hover:underline">See Client Results →</Link>
            <Link href="/free-report" className="text-[#18b5d8] font-semibold hover:underline">Get a Free Visibility Audit →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="display-lg text-[#0a0a0a]">Questions about the plans</h2>
          </div>
          <div className="divide-y divide-[#e8e8ed]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[17px] font-semibold text-[#1d1d1f] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
                  {faq.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-[#7a7a7a] group-open:rotate-180 motion-safe:transition-transform duration-200"
                  >
                    <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-4 body-copy text-[#333333] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center pb-36 md:pb-28">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">
            Zero commitment to start
          </p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            See where you stand before you spend a dollar.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            The free Visibility Audit shows exactly how visible your business is across Google, ChatGPT, Gemini, and local listings. Most owners are surprised. From there, the right tier is obvious.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free Visibility Audit
            </Link>
            <Link
              href="/contact"
              className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Talk to the Team First
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#18b5d8] px-4 py-3.5 shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
        <Link
          href="/free-report"
          className="block text-center text-white text-[15px] font-semibold [touch-action:manipulation]"
        >
          Book a Free Visibility Audit — No Commitment
        </Link>
      </div>
    </>
  );
}
