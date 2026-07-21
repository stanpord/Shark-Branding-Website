import type { Metadata } from "next";
import Link from "next/link";

const BOOK_CALL_URL = "https://bookmenow.info/book/jstanaland/30-minutes";

const plansSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/plans",
      url: "https://sharkbrandingsolutions.com/plans",
      name: "Enterprise AI Visibility Plans | Shark AI Solutions",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
      about: { "@id": "https://sharkbrandingsolutions.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://sharkbrandingsolutions.com/plans#enterprise",
      name: "Enterprise AI Visibility",
      description:
        "Dedicated AI visibility management for multi-location brands and enterprise organizations. Dedicated account lead, custom SLAs, multi-market execution, white-glove onboarding, and executive reporting.",
      provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      url: "https://sharkbrandingsolutions.com/plans",
      offers: {
        "@type": "Offer",
        price: "4000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "4000",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        description: "Starting at $4,000/month. Custom scope, dedicated resources.",
        seller: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      },
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://sharkbrandingsolutions.com/plans#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which plan is right for an enterprise or multi-location brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enterprise. The individual-location plans are designed for single-market businesses. Enterprise engagements are custom-scoped to cover the specific number of locations, markets, and reporting requirements your organization needs.",
          },
        },
        {
          "@type": "Question",
          name: "What does multi-location AI visibility management include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each location receives its own AI visibility audit, GBP optimization, citation management, and schema implementation. Progress is tracked per location and rolled up into executive reporting. Your dedicated account lead owns execution and communicates directly with your internal team.",
          },
        },
        {
          "@type": "Question",
          name: "Are there contracts or long-term commitments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enterprise engagements are scoped on a custom basis, terms depend on the scope, markets, and deliverables. Done For You has no required annual contract. The Self-Guided Toolkit requires a 12-month or 3-month minimum commitment.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Enterprise AI Visibility Plans | Shark AI Solutions",
  description:
    "AI visibility management for multi-location brands and enterprise organizations. Dedicated account lead, custom scope, and managed execution across every market you serve.",
};

const enterpriseFeatures = [
  "Dedicated account lead and priority support",
  "Custom SLA and quarterly business reviews",
  "Multi-location and multi-market visibility management",
  "White-glove onboarding and executive strategy workshops",
  "Custom reporting, dashboards, and executive summaries",
  "Agencies managing AI visibility for their own clients",
];

const doneForYouFeatures = [
  "Google Business Profile optimized monthly by our team",
  "Citation consistency, schema markup, and AI readiness signals",
  "Full audit across ChatGPT, Gemini, and Google AI Overview",
  "Written strategy plan tailored to your market and competitors",
  "Monthly report: what changed, what moved, what's next",
];

const selfGuidedFeatures = [
  "Full AI Visibility Toolkit, the same framework our managed clients run on",
  "1 Google Business Profile optimization included",
  "Step-by-step action plan: listings, reviews, AI signals, local content",
  "Clear priority sequence so your team always knows what to do next",
  "Templates and implementation guides for each phase",
];

const comparisonFeatures = [
  { label: "Managed AI visibility audit",   enterprise: true,  dfy: true,  toolkit: false },
  { label: "Proven framework + templates",  enterprise: true,  dfy: true,  toolkit: true  },
  { label: "Our team executes everything",  enterprise: true,  dfy: true,  toolkit: false },
  { label: "Monthly GBP optimization",      enterprise: true,  dfy: true,  toolkit: false },
  { label: "Citation & schema management",  enterprise: true,  dfy: true,  toolkit: false },
  { label: "Written strategy plan",         enterprise: true,  dfy: true,  toolkit: false },
  { label: "Monthly progress reports",      enterprise: true,  dfy: true,  toolkit: false },
  { label: "Dedicated account lead",        enterprise: true,  dfy: false, toolkit: false },
  { label: "Multi-location support",        enterprise: true,  dfy: false, toolkit: false },
  { label: "White-glove onboarding",        enterprise: true,  dfy: false, toolkit: false },
  { label: "Custom SLA & QBRs",            enterprise: true,  dfy: false, toolkit: false },
];

const pricingObjections = [
  {
    q: "Is this just another tool?",
    a: "No. There's no dashboard to log into, no software to learn, no algorithm to game. This is hands-on consulting backed by a proven framework. Done For You and Enterprise mean our team does the work. Self-Guided means you execute the same framework with clear instructions at every step.",
  },
  {
    q: "How does this integrate with our existing stack?",
    a: "Enterprise onboarding includes a technical discovery call where we map your existing tools, CRM, and reporting workflows. For Done For You, there's nothing to integrate, we work directly with your GBP, citation platforms, and content layer. No new software required on your end.",
  },
  {
    q: "How is this different from our current agency?",
    a: "Most agencies focus on ads, social posts, and traffic metrics. We focus on AI visibility signals, the data ChatGPT, Gemini, and Google AI Overviews use to decide which businesses to recommend. It's a different layer. Most of our clients run us alongside their existing agency.",
  },
];

const objections = [
  {
    q: "We've paid for SEO before and it didn't work. How is this different?",
    a: "Traditional SEO targets search engine algorithms. This targets AI search engines, the systems behind ChatGPT, Gemini, and Google AI Overviews that now drive a growing share of local and regional discovery. The signals are different, the work is different, and the timeline is faster. Our HVAC client saw position movement in 30 days, not six months.",
  },
  {
    q: "What actually happens after we sign?",
    a: "For Enterprise: you'll be assigned a dedicated account lead and scheduled for an executive strategy workshop in week one. We audit your current AI visibility across all markets, build your custom plan, and begin implementation immediately. Done For You follows the same pace with a 48-hour onboarding call.",
  },
  {
    q: "How long until we see results?",
    a: "Visibility signals typically begin moving within 30–60 days. Significant position changes, like the HVAC results below, can happen faster with consistent execution. Enterprise clients operating across multiple markets typically see initial movement in their highest-priority markets first.",
  },
  {
    q: "What does the engagement look like month to month?",
    a: "Enterprise clients get monthly execution reports, quarterly business reviews with their account lead, and ongoing communication through a dedicated channel. You know exactly what was done, what moved, and what's targeted next, every month, without having to ask.",
  },
];

const faqs = [
  {
    q: "Which plan is right for a multi-location brand?",
    a: "Enterprise. The individual-location plans (Done For You and Self-Guided) are designed for single-market businesses. Enterprise engagements are custom-scoped to cover your specific number of locations, markets, and reporting requirements. Start with a scoping call, no commitment required.",
  },
  {
    q: "What does multi-location management actually include?",
    a: "Each location gets its own AI visibility audit, GBP optimization, citation management, and schema implementation. Progress is tracked per location and rolled up into executive reporting. Your dedicated account lead owns execution and communicates directly with your internal team.",
  },
  {
    q: "What does 'AI visibility' actually mean across markets?",
    a: "When a buyer asks ChatGPT, Gemini, or Google's AI Overviews 'who is the best HVAC company near me?' in any market you serve, you're either recommended or you're not. AI systems use citation data, reviews, GBP authority, and structured content to decide. This service maintains those signals consistently at scale.",
  },
  {
    q: "Does this work across industries?",
    a: "The framework applies to any business that relies on customers finding them online. The signals AI systems look for are consistent across HVAC, legal, healthcare, real estate, home services, franchise, retail, and more. If your customers search locally or regionally, this applies.",
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-label="Not included" className="mx-auto opacity-25">
      <line x1="8" y1="8" x2="16" y2="16" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="8" x2="8" y2="16" stroke="#888" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function PlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plansSchema) }} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-[#07141a] min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-20">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-center">
          <div>
            <h1 className="display-hero text-white mb-7" style={{ textWrap: "balance", letterSpacing: "-0.02em" }}>
              AI visibility, managed at scale.
            </h1>
            <p className="text-[19px] leading-[1.65] text-white/60 max-w-[560px] mb-10" style={{ textWrap: "pretty" }}>
              ChatGPT, Google AI Overviews, and Gemini each surface one to three businesses per query.
              For multi-location brands, maintaining that position across every market you serve is an
              ongoing management challenge, not a one-time fix. We handle it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[16px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
              >
                Book an Enterprise Scope Call
              </a>
              <a
                href="#plans"
                className="btn-press inline-block text-white text-[16px] font-semibold border border-white/20 rounded-full px-8 py-4 hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
              >
                See all plans ↓
              </a>
            </div>
          </div>

          {/* Proof strip */}
          <div className="border border-white/10 rounded-[14px] p-8 space-y-7">
            {[
              { stat: "#32 → #2",  label: "HVAC client, 30 days, no paid ads" },
              { stat: "$1M+",       label: "Multi-state retail client, single weekend" },
              { stat: "5–7 days",  label: "Typical time to first results live" },
            ].map((item) => (
              <div key={item.stat} className="border-b border-white/8 pb-7 last:border-0 last:pb-0">
                <p className="text-[34px] font-semibold text-white leading-none mb-2">{item.stat}</p>
                <p className="text-[13px] text-white/55 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audit Entry Strip ─────────────────────────────────────── */}
      <section className="bg-[#07141a] border-t border-white/5 py-14 px-6">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-7 text-center">
            Start here, before committing to any plan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/10 rounded-[14px] p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#18b5d8] uppercase tracking-[0.1em]">Free</span>
                <span className="text-[12px] text-white/35">Instant · Automated</span>
              </div>
              <h3 className="text-[18px] font-semibold text-white leading-snug">
                Free AI Visibility Audit
              </h3>
              <p className="text-[13px] text-white/55 leading-relaxed">
                See exactly how your business appears across ChatGPT, Gemini, and Google AI Overviews.
                Runs in 60 seconds. No commitment.
              </p>
              <Link
                href="/ai-audit"
                className="mt-auto btn-press inline-block text-center bg-[#18b5d8] text-white text-[14px] font-semibold rounded-full px-6 py-3 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
              >
                Run My Free Audit →
              </Link>
            </div>
            <div className="border border-white/10 rounded-[14px] p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-white">$199</span>
                <span className="text-[12px] text-white/35">48 hours · Human-curated</span>
              </div>
              <h3 className="text-[18px] font-semibold text-white leading-snug">
                Comprehensive AI Visibility Report
              </h3>
              <p className="text-[13px] text-white/55 leading-relaxed">
                Full audit with a written strategy roadmap: where you stand, what&rsquo;s costing you
                leads, and the exact steps to fix it, prioritized for your market and competitors.
              </p>
              <Link
                href="/free-report"
                className="mt-auto btn-press inline-block text-center border border-white/20 text-white text-[14px] font-semibold rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
              >
                Get the $199 Report →
              </Link>
              <p className="text-[11px] text-white/30 text-center">
                North Tampa Bay Chamber members: free with member code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section id="plans" className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-[28px] font-semibold text-white mb-3" style={{ letterSpacing: "-0.01em" }}>
            Choose your plan
          </h2>
          <p className="text-[15px] text-white/55 mb-12 max-w-[520px]">
            Enterprise is built for organizations operating across multiple markets. Done For You and
            Self-Guided are designed for individual locations.
          </p>

          {/* ── Enterprise, full-width featured block ── */}
          <div className="bg-[#07141a] border border-[#18b5d8]/30 rounded-[14px] p-10 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#18b5d8] text-white text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full mb-7">
                  Enterprise
                </div>
                <h2 className="text-[26px] font-semibold text-white leading-snug mb-5" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
                  For organizations operating across multiple markets.
                </h2>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[44px] font-semibold text-white leading-none">$4,000</span>
                    <span className="text-[15px] text-white/50">/mo, starting</span>
                  </div>
                  <p className="text-[13px] text-white/50">Custom scope, pricing scales with number of locations and markets.</p>
                </div>
                <p className="text-[15px] text-white/65 leading-relaxed mb-8" style={{ textWrap: "pretty" }}>
                  Dedicated resources, executive-level reporting, and a team that owns AI visibility
                  across every market you operate. No managing vendors, no wondering if it&rsquo;s working.
                </p>
              </div>
              <div>
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press block text-center bg-[#18b5d8] text-white text-[16px] font-semibold rounded-full px-6 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
                >
                  Book a Scope Call
                </a>
                <p className="text-center text-[12px] text-white/40 mt-3">
                  Franchise or multi-location brand?{" "}
                  <Link href="/franchises" className="text-[#18b5d8] hover:underline">
                    See the franchise platform →
                  </Link>
                </p>
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <p className="text-[13px] font-semibold text-white mb-6">What&rsquo;s included</p>
              <ul className="space-y-4">
                {enterpriseFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/65 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Supporting plans, 2-col ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

            {/* Done For You */}
            <div className="bg-[#07141a] rounded-[14px] p-8 border border-white/8 flex flex-col">
              <p className="text-[13px] font-medium text-white/45 mb-1.5">For individual locations</p>
              <h2 className="text-[22px] font-semibold text-white mb-5 leading-snug">
                Done For You
              </h2>
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-[40px] font-semibold text-[#18b5d8] leading-none">$2,000</span>
                <span className="text-[14px] text-white/45">/mo</span>
              </div>
              <p className="text-[12px] text-white/45 mb-7">No annual lock-in required</p>
              <ul className="space-y-3 flex-1 mb-8">
                {doneForYouFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press block text-center bg-white text-[#0a0a0a] text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#18b5d8] hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
              >
                Book a Strategy Call
              </a>
              <p className="text-center text-[12px] text-white/40 mt-3">
                Ready now?{" "}
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-98497518b305454980c1a55eb30bffaf128ceb77a8aa42078ac6afb0ba6ccde3439958261aab46f0866337d1362d6ea7?locale=EN_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18b5d8] hover:underline"
                >
                  Start instantly, $2,000/mo →
                </a>
              </p>
            </div>

            {/* Self-Guided Toolkit */}
            <div className="bg-[#07141a] rounded-[14px] p-8 border border-white/8 flex flex-col">
              <p className="text-[13px] font-medium text-white/45 mb-1.5">For teams with internal bandwidth</p>
              <h2 className="text-[22px] font-semibold text-white mb-5 leading-snug">
                AI Visibility Toolkit
              </h2>
              <div className="mb-1 flex items-baseline gap-2.5">
                <span className="text-[40px] font-semibold text-white leading-none">$999</span>
                <span className="text-[14px] text-white/45">/mo</span>
                <span className="text-[11px] font-bold text-[#18b5d8] bg-[#18b5d8]/10 rounded-full px-3 py-1 whitespace-nowrap">
                  Save $3,600/yr
                </span>
              </div>
              <p className="text-[12px] text-white/45 mb-7">12-month plan · $1,297/mo month-to-month</p>
              <ul className="space-y-3 flex-1 mb-8">
                {selfGuidedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press block text-center bg-white/10 text-white text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-white hover:text-[#0a0a0a] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
              >
                Book a Strategy Call
              </a>
              <p className="text-center text-[12px] text-white/40 mt-3">
                Ready now?{" "}
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-86b5809a824f464dba5ad90dded570a445f76b19f0384d9dbe734b750f7256989d1db28afa4647bd929885d1678f5099?locale=EN_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18b5d8] hover:underline"
                >
                  Start 12-month, $999/mo →
                </a>
                {" "}·{" "}
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-9454fee56f394fdfb63ff800cf994d5794634439ed8b4ae7813be49ad385ec7f0bd37ee6cfe54dfd877a039d2862d07c?locale=EN_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18b5d8] hover:underline"
                >
                  3-month, $1,297/mo →
                </a>
              </p>
            </div>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "90-day visibility improvement guarantee",
              "Enterprise scope includes a dedicated account lead",
              "No paid ads required",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] text-white/45">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <p className="text-center text-[14px] text-white/40 mt-6">
            Not sure where to start?{" "}
            <Link href="/ai-audit" className="text-[#18b5d8] font-semibold hover:underline">
              Run a free AI Audit →
            </Link>{" "}
            It shows exactly where you stand before you commit to anything.
          </p>
        </div>
      </section>

      {/* ── 3 quick objections ────────────────────────────────────── */}
      <section className="bg-[#111111] py-16 px-6 border-t border-white/5">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingObjections.map((o) => (
            <div key={o.q} className="bg-[#07141a] rounded-[14px] px-6 py-7 border border-white/8">
              <p className="text-[15px] font-semibold text-white mb-3 leading-snug">&ldquo;{o.q}&rdquo;</p>
              <p className="text-[14px] text-white/60 leading-relaxed">{o.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] font-semibold text-white mb-10" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            What&rsquo;s included in each plan
          </h2>

          <div className="overflow-x-auto">
            <div className="rounded-[14px] overflow-hidden border border-white/10 min-w-[540px]">
              <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                <div className="px-5 py-4" />
                {[
                  { label: "Enterprise",    sub: "From $4,000/mo", highlight: true  },
                  { label: "Done For You",  sub: "$2,000/mo",      highlight: false },
                  { label: "Toolkit",       sub: "$999/mo",        highlight: false },
                ].map((col) => (
                  <div key={col.label} className={`px-5 py-4 text-center ${col.highlight ? "bg-[#18b5d8]/10" : ""}`}>
                    <p className={`text-[13px] font-semibold ${col.highlight ? "text-[#18b5d8]" : "text-white"}`}>{col.label}</p>
                    <p className="text-[11px] text-white/40 mt-0.5">{col.sub}</p>
                  </div>
                ))}
              </div>

              {comparisonFeatures.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 border-b border-white/5 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}
                >
                  <div className="px-5 py-3.5 text-[13px] text-white/60 flex items-center">{row.label}</div>
                  <div className="px-5 py-3.5 flex items-center justify-center bg-[#18b5d8]/5">
                    <TableCheck yes={row.enterprise} />
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-center">
                    <TableCheck yes={row.dfy} />
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-center">
                    <TableCheck yes={row.toolkit} />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-4 bg-white/5">
                <div className="px-5 py-4" />
                <div className="px-4 py-4 text-center bg-[#18b5d8]/10">
                  <a
                    href={BOOK_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-[#18b5d8] hover:text-[#1ec8ee] motion-safe:transition-colors"
                  >
                    Book a call →
                  </a>
                </div>
                <div className="px-4 py-4 text-center">
                  <a
                    href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-98497518b305454980c1a55eb30bffaf128ceb77a8aa42078ac6afb0ba6ccde3439958261aab46f0866337d1362d6ea7?locale=EN_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-white hover:text-[#18b5d8] motion-safe:transition-colors"
                  >
                    Start →
                  </a>
                </div>
                <div className="px-4 py-4 text-center">
                  <a
                    href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-86b5809a824f464dba5ad90dded570a445f76b19f0384d9dbe734b750f7256989d1db28afa4647bd929885d1678f5099?locale=EN_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-white/55 hover:text-white motion-safe:transition-colors"
                  >
                    Start →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HVAC Proof ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[860px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
            What this framework delivers when our team executes it.
          </h2>
          <p className="body-copy text-[#333333] mb-10" style={{ textWrap: "balance" }}>
            One HVAC client moved from weak local visibility to top positions in under 30 days across
            multiple high-intent searches. No paid ads. No tricks. Foundational AI visibility work,
            executed correctly.
          </p>

          <div className="bg-[#f5f5f7] rounded-[14px] p-8 border border-[#e0e0e0]">
            <table className="w-full text-[15px]">
              <thead>
                <tr className="border-b border-[#e0e0e0]">
                  <th className="text-left text-[12px] font-semibold text-[#7a7a7a] pb-3">Keyword</th>
                  <th className="text-left text-[12px] font-semibold text-[#7a7a7a] pb-3">Before</th>
                  <th className="text-left text-[12px] font-semibold text-[#7a7a7a] pb-3">After 30 days</th>
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
              Read the full case study →
            </Link>
            <span className="text-[13px] text-[#7a7a7a]">See exactly what was done and why it worked.</span>
          </div>
        </div>
      </section>

      {/* ── Objections ────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-14" style={{ textWrap: "balance" }}>
            Before you commit.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {objections.map((o) => (
              <div key={o.q} className="bg-white rounded-[14px] px-8 py-7">
                <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-3 leading-snug">&ldquo;{o.q}&rdquo;</h3>
                <p className="body-copy text-[#333333] leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-[14px] text-[#7a7a7a]">
            Something not covered here?{" "}
            <Link href="/contact" className="text-[#18b5d8] font-semibold hover:underline">
              Talk to the team before you commit →
            </Link>
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-[14px] justify-center">
            <Link href="/services" className="text-[#18b5d8] font-semibold hover:underline">What We Do →</Link>
            <Link href="/case-studies" className="text-[#18b5d8] font-semibold hover:underline">See Client Results →</Link>
            <Link href="/ai-audit" className="text-[#18b5d8] font-semibold hover:underline">Run a Free AI Audit →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-14">Common questions</h2>
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

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center pb-36 md:pb-28">
        <div className="max-w-[600px] mx-auto">
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Ready to scope your enterprise engagement?
          </h2>
          <p className="lead-airy text-white/55 mb-12" style={{ textWrap: "balance" }}>
            Start with a free AI Audit to see exactly where you stand across Google, ChatGPT,
            Gemini, and local listings. Then we scope what an enterprise engagement looks like for
            your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/ai-audit"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Run My Free AI Audit
            </Link>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Book an Enterprise Call
            </a>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile bar ─────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#18b5d8] px-4 py-3.5 shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-white text-[15px] font-semibold [touch-action:manipulation]"
        >
          Book an Enterprise Call →
        </a>
      </div>
    </>
  );
}
