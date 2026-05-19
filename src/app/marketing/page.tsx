import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Employees — Shark Branding Solutions",
  description:
    "AI marketing employees for Tampa Bay businesses. CMO strategy, reputation management, content automation, and AI visibility — running 24/7 without adding staff.",
};

const bots = [
  {
    n: "01", id: "cmo-bot", eyebrow: "Strategic Marketing", dark: true, href: "/contact", cta: "Get a Custom Quote",
    title: "AI CMO",
    description: "Get the strategic marketing firepower of a Chief Marketing Officer without the executive salary. Your AI CMO analyzes your market position, identifies growth opportunities, builds campaign briefs, and keeps your marketing aligned with business goals — every single week.",
    bullets: [
      "Weekly market and competitor analysis",
      "Campaign strategy and messaging briefs",
      "Budget allocation recommendations by channel",
      "Brand voice consistency across all content",
      "Monthly marketing performance reviews",
    ],
    bestFor: "Growing businesses spending money on marketing without a clear strategy. Replaces the need for a $120K/yr CMO.",
  },
  {
    n: "02", id: "content-bot", eyebrow: "Content & AI Visibility", dark: false, href: "/plans", cta: "See Plans & Pricing",
    title: "AI Visibility Toolkit",
    description: "Your customers are asking AI for recommendations before they ever visit a website. The AI Visibility Toolkit optimizes your business to appear — and appear credibly — when ChatGPT, Perplexity, and Google AI Overviews answer questions your buyers are asking right now.",
    bullets: [
      "Full audit of your AI and search presence",
      "Entity and citation optimization for AI platforms",
      "Review and trust signal strategy",
      "Listing accuracy and consistency across directories",
      "Self-directed ($497/mo) or fully managed ($2,000/mo)",
    ],
    bestFor: "Any local service business that relies on customers finding them online — HVAC, legal, medical, contractors, restaurants, salons.",
  },
  {
    n: "03", id: "reputation-ai", eyebrow: "Reputation & Reviews", dark: true, href: "/contact", cta: "Get a Custom Quote",
    title: "Reputation & Review AI",
    description: "Your online reputation is your most powerful sales tool — and most businesses leave it completely unmanaged. Our Reputation & Review AI monitors every platform, requests reviews at the right moment, responds to feedback automatically in your brand voice, and flags issues before they escalate.",
    bullets: [
      "Automated review requests triggered by job completion",
      "AI-generated responses in your brand voice — reviewed before posting",
      "Multi-platform monitoring: Google, Yelp, Facebook, and more",
      "Negative review alerts with suggested response drafts",
      "Monthly reputation score reporting and benchmarking",
    ],
    bestFor: "Restaurants, contractors, home services, medical, legal, salons — any business where reviews are a dealbreaker.",
  },
  {
    n: "04", id: "marketing-bots", eyebrow: "Custom Automation", dark: false, href: "/contact", cta: "Get a Custom Quote",
    title: "Custom Marketing AI",
    description: "From social media scheduling to email nurture sequences to lead scoring — we build marketing AI employees tailored to your exact workflow. If your team is repeating a task more than twice a week, we can automate it.",
    bullets: [
      "Social content generation and scheduling",
      "Email nurture sequences with AI personalization",
      "Lead scoring and qualification automation",
      "Reporting dashboards that update themselves",
      "Integrates with your existing marketing stack",
    ],
    bestFor: "Businesses manually posting, emailing, and updating reports every week. Reclaim 10–20 hours/month immediately.",
  },
];

const industries = [
  { name: "HVAC & Home Services", result: "Position #32 → #2 in 30 days" },
  { name: "Medical & Dental", result: "More AI-referred patients" },
  { name: "Legal & Professional", result: "Cited in AI answer results" },
  { name: "Restaurants & Retail", result: "Higher review velocity" },
  { name: "Real Estate", result: "Consistent AI visibility" },
  { name: "Contractors", result: "Leads without paid ads" },
];

export default function MarketingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            AI Marketing Employees &nbsp;&middot;&nbsp; Shark AI Solutions
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI that markets your
            <br />
            <span className="text-[#18b5d8]">business 24/7.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            CMO strategy, AI visibility, reputation management, and content automation — so your brand keeps growing even when you&rsquo;re not working.
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
            {[
              "HVAC: #32 → #2 in 30 days",
              "No paid ads required",
              "Live in 30 days",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[14px] font-semibold text-[#333333]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {bots.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="text-[13px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                {b.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bots ── */}
      {bots.map((b) => (
        <section
          key={b.id}
          id={b.id}
          className={b.dark ? "bg-[#0a0a0a] px-6 py-24 border-t border-white/5" : "bg-white px-6 py-24 border-t border-[#e8e8ed]"}
        >
          <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">{b.n}</span>
                <span className={`w-px h-4 ${b.dark ? "bg-white/20" : "bg-[#1d1d1f]/15"}`} aria-hidden="true" />
                <span className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${b.dark ? "text-white/50" : "text-[#1d1d1f]/50"}`}>{b.eyebrow}</span>
              </div>
              <h2 className={`display-lg mb-6 ${b.dark ? "text-white" : "text-[#0a0a0a]"}`} style={{ textWrap: "balance" }}>
                {b.title}
              </h2>
              <p className={`body-copy leading-relaxed mb-6 ${b.dark ? "text-white/60" : "text-[#333333]"}`}>
                {b.description}
              </p>
              <div className={`rounded-[12px] px-4 py-3 text-[13px] leading-relaxed ${b.dark ? "bg-white/5 border border-white/10 text-white/50" : "bg-[#f5f5f7] border border-[#e8e8ed] text-[#7a7a7a]"}`}>
                <span className={`font-semibold ${b.dark ? "text-white/70" : "text-[#333]"}`}>Best for: </span>{b.bestFor}
              </div>
            </div>
            <div className="lg:pt-[72px]">
              <ul className="space-y-4 mb-10">
                {b.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="text-[#18b5d8] font-bold leading-none mt-1 shrink-0" aria-hidden="true">✓</span>
                    <span className={`body-copy ${b.dark ? "text-white/70" : "text-[#333333]"}`}>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={b.href}
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                {b.cta}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── Industries ── */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Who We Work With</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Built for Tampa Bay local businesses.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-[16px] px-6 py-5 border border-[#e8e8ed]">
                <p className="text-[16px] font-semibold text-[#0a0a0a] mb-1">{ind.name}</p>
                <p className="text-[13px] text-[#18b5d8] font-medium">{ind.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency / Founding clients ── */}
      <section className="bg-[#07141a] py-16 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <span className="inline-block bg-[#18b5d8]/10 border border-[#18b5d8]/30 text-[#18b5d8] text-[12px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6">
            Limited Availability
          </span>
          <h2 className="display-lg text-white mb-4" style={{ textWrap: "balance" }}>
            Founding client spots — price locked, no setup fee.
          </h2>
          <p className="lead-airy text-white/50 mb-8" style={{ textWrap: "balance" }}>
            We&rsquo;re currently onboarding a limited number of founding clients. Price is locked at the current rate for as long as you stay — no setup fee, live within 30 days.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
          >
            Claim a Founding Spot
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">See how you stack up</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Start with the free Visibility Audit.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            We&rsquo;ll show you exactly where your marketing stands across search, maps, and AI platforms.
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
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
