import type { Metadata } from "next";
import Link from "next/link";

const plansSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/plans",
      url: "https://sharkbrandingsolutions.com/plans",
      name: "AI Employees & AI Visibility Pricing | Shark AI Solutions",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
      about: { "@id": "https://sharkbrandingsolutions.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://sharkbrandingsolutions.com/plans#full-suite",
      name: "Full AI Suite",
      description: "Five AI employees, Chat Receptionist, Voice Receptionist, Reputation Specialist, AI CRM, and AI Sales Coach, deployed and live within one week for Tampa Bay businesses.",
      provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      url: "https://sharkbrandingsolutions.com/plans",
      offers: {
        "@type": "Offer",
        price: "5000",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5000",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        description: "Starting at $5,000/month. No contracts. Live within 7 days.",
        seller: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      },
      areaServed: { "@type": "State", name: "Florida" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://sharkbrandingsolutions.com/plans#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take for AI employees to go live?",
          acceptedAnswer: { "@type": "Answer", text: "Most clients are fully live within 5 to 7 business days. We handle all setup, training, and integration." },
        },
        {
          "@type": "Question",
          name: "Can I hire just one AI employee instead of the full suite?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Individual AI employees are available. Most clients start with Gemma (chat receptionist) or the Voice Receptionist and expand from there." },
        },
        {
          "@type": "Question",
          name: "Are there contracts or long-term commitments?",
          acceptedAnswer: { "@type": "Answer", text: "A 3-month initial agreement is required, after which pricing is month-to-month with no long-term lock-in." },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Visibility Pricing & Plans | Shark AI Solutions",
  description:
    "Get found on Google, ChatGPT, and Gemini without paying for ads. Two plans: Self-Guided at $997/mo or Done For You at $2,000/mo. 90-day results guarantee.",
};

const selfGuidedFeatures = [
  "Full AI Visibility Toolkit framework, the same system our team uses for managed clients",
  "Step-by-step action plan across listings, reviews, AI signals, and local content",
  "Clear priority sequence so your team always knows what to work on next",
  "Templates and implementation guides for each phase",
  "Structured to produce measurable visibility movement within 90 days",
];

const doneForYouFeatures = [
  "Google Business Profile updated and optimized every month by our team",
  "Citation consistency, schema markup, and AI readiness signals maintained and expanded",
  "Full audit of how ChatGPT, Gemini, and Google AI Overview currently see your business",
  "Written strategy plan tailored to your market, location, and competitors",
  "Monthly report: what changed, what moved, what's targeted next",
  "Everything from the Self-Guided Toolkit, fully executed for you",
];

const customFeatures = [
  "Dedicated account lead and priority support",
  "Custom SLA and quarterly business reviews",
  "Multi-location and multi-market visibility management",
  "White-glove onboarding and executive strategy workshops",
  "Custom reporting, dashboards, and executive summaries",
  "Agencies managing AI visibility for their own clients",
];

// 3 objections shown directly below pricing
const pricingObjections = [
  {
    q: "Is this just another tool?",
    a: "No. There's no dashboard to log into, no software to learn, and no algorithm to game. This is hands-on consulting backed by a proven framework. Done For You means our team does the work. Self-Guided means you execute the same framework we use, with clear instructions at every step.",
  },
  {
    q: "What if I'm not technical?",
    a: "You don't need to be. The Done For You plan requires nothing from you except a 30-minute onboarding call. Even the Self-Guided Toolkit is built for business owners, not developers, every phase has plain-English instructions and templates.",
  },
  {
    q: "How is this different from my current agency?",
    a: "Most agencies focus on ads, social posts, and traffic metrics. We focus on AI visibility signals, the data ChatGPT, Gemini, and Google AI Overviews use to decide which businesses to recommend. It's a different layer entirely. Most of our clients run us alongside their existing agency.",
  },
];

const objections = [
  {
    q: "I've paid for SEO before and it didn't work. How is this different?",
    a: "Traditional SEO targets search engine algorithms. This targets AI search engines, the systems behind ChatGPT, Gemini, and Google AI Overviews that now drive a growing share of local business discovery. The signals are different, the work is different, and the timeline is faster. Our HVAC client saw position movement in 30 days, not six months.",
  },
  {
    q: "What actually happens after I buy?",
    a: "For Done For You: you'll receive an onboarding call within 48 hours. We audit your current AI visibility, build your strategy plan, and begin implementation in week one. For Self-Guided: you get immediate access to the full toolkit framework with a clear priority sequence so your team knows exactly what to do first.",
  },
  {
    q: "How long until I see results?",
    a: "Visibility signals typically begin moving within 30–60 days. Significant position changes, like the HVAC results below, can happen faster with consistent execution.",
  },
  {
    q: "Is there a contract? Can I cancel?",
    a: "The Self-Guided plan has a 12-month or 3-month minimum commitment, after that, cancel with 60 days' notice (12-month plan) or at the end of your term (3-month plan). Done For You has no required annual contract; cancel any time with reasonable notice. Questions? Reach out before you commit.",
  },
];

const faqs = [
  {
    q: "Which plan should I choose?",
    a: "If your team has bandwidth to execute a structured framework internally, start with Self-Guided. If you want the work done for you, no managing, no wondering if you're doing it right, choose Done For You. Either way, start with the free Visibility Audit: it makes the right call obvious before you spend a dollar.",
  },
  {
    q: "Are both Self-Guided commitment lengths still available?",
    a: "Yes. The 12-month plan is $997/month. The 3-month plan is $1,297/month for businesses that want to test the framework first. Both include the exact same toolkit.",
  },
  {
    q: "What does \"AI visibility\" actually mean for a local business?",
    a: "When someone asks ChatGPT, Gemini, or Google's AI Overviews \"who is the best HVAC company near me?\", AI systems pull from citation data, reviews, local listings, and structured content signals to decide which businesses to mention. If those signals aren't in order, your business gets skipped. This toolkit fixes that systematically.",
  },
  {
    q: "Does this work for my industry?",
    a: "The framework applies to any local service business that relies on customers finding them online, HVAC, real estate, legal, medical, home services, restaurants, retail, and more. The signals AI systems look for are consistent across industries. If your customers search locally, this applies to you.",
  },
];

const comparisonFeatures = [
  { label: "AI Visibility Audit",             toolkit: true,  dfy: true,  custom: true  },
  { label: "Proven framework + templates",    toolkit: true,  dfy: true,  custom: true  },
  { label: "You execute the work",            toolkit: true,  dfy: false, custom: false },
  { label: "Our team executes everything",    toolkit: false, dfy: true,  custom: true  },
  { label: "Monthly GBP optimization",        toolkit: false, dfy: true,  custom: true  },
  { label: "Citation & schema management",    toolkit: false, dfy: true,  custom: true  },
  { label: "Written strategy plan",           toolkit: false, dfy: true,  custom: true  },
  { label: "Monthly progress reports",        toolkit: false, dfy: true,  custom: true  },
  { label: "Dedicated account lead",          toolkit: false, dfy: false, custom: true  },
  { label: "Multi-location support",          toolkit: false, dfy: false, custom: true  },
  { label: "White-glove onboarding",          toolkit: false, dfy: false, custom: true  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plansSchema) }} />
      {/* ── Hero ── */}
      <section className="bg-white min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            AI Visibility Toolkit
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Get found on Google, ChatGPT, and Gemini&nbsp;&mdash;{" "}
            <span className="text-[#18b5d8]">without paying for ads.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[560px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            AI search engines are already recommending your competitors. These plans make sure they recommend you instead. One puts the work in your hands. One puts it in ours.
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-4">
            {(([
              { text: "HVAC client: #32 → #2 in 30 days" },
              { text: "No paid ads required" },
              { text: "Multi-state retail client: $1M+ weekend revenue" },
            ]) as { text: string; href?: string }[]).map((item) => (
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

            {/* Card 1: Self-Guided Toolkit */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-white/8 flex flex-col">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">
                Toolkit, Self-Guided
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                You run it.<br />We built the map.
              </h2>

              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold text-white leading-none">$997</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                  <span className="text-[11px] font-bold tracking-wide uppercase text-[#18b5d8] bg-[#18b5d8]/10 rounded-full px-3 py-1">
                    Save $3,600/yr
                  </span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">12-month commitment, best value · $1,297/mo month-to-month</p>
              </div>

<ul className="mt-6 space-y-3 flex-1">
                {selfGuidedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-86b5809a824f464dba5ad90dded570a445f76b19f0384d9dbe734b750f7256989d1db28afa4647bd929885d1678f5099?locale=EN_US&cta=saveandcopylink"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-6 block text-center bg-white text-[#0a0a0a] text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#18b5d8] hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Start 12-Month Plan, $997/mo
              </a>
              <p className="text-center text-[13px] text-white/30 mt-3">
                Shorter commitment?{" "}
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-9454fee56f394fdfb63ff800cf994d5794634439ed8b4ae7813be49ad385ec7f0bd37ee6cfe54dfd877a039d2862d07c?locale=EN_US&cta=saveandcopylink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18b5d8] hover:underline"
                >
                  3-month plan at $1,297/mo →
                </a>
              </p>
            </div>

            {/* Card 2: Done For You (featured / Recommended) */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-[#18b5d8]/40 ring-1 ring-[#18b5d8]/15 flex flex-col relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#18b5d8] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Recommended
                </span>
              </div>

              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5 mt-2">
                Toolkit, Done For You
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                We handle it.<br />You watch it move.
              </h2>

              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold text-[#18b5d8] leading-none">$2,000</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">No annual lock-in required</p>
              </div>

              {/* Savings callout */}
              <div className="mt-3 flex items-start gap-2 bg-[#18b5d8]/10 border border-[#18b5d8]/25 rounded-[10px] px-4 py-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#18b5d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[12px] text-[#18b5d8] font-semibold leading-snug">
                  Done For You clients typically replace agency, VA, and tool costs, saving $500–$1,500/month
                </p>
              </div>

              {/* HVAC social proof */}
              <div className="mt-4 bg-white/5 border border-white/10 rounded-[12px] px-4 py-3 text-[13px] text-white/70 leading-relaxed">
                <strong className="text-white font-semibold">HVAC client result:</strong> Moved from position #32 → #2 in 30 days across four high-intent keywords. No paid ads, just this framework, executed by our team.
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {doneForYouFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-98497518b305454980c1a55eb30bffaf128ceb77a8aa42078ac6afb0ba6ccde3439958261aab46f0866337d1362d6ea7?locale=EN_US&cta=saveandcopylink"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-6 block text-center bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Start Done For You, $2,000/mo
              </a>
            </div>

            {/* Card 3: Custom */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-dashed border-white/10 flex flex-col">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">
                Enterprise
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                Multi-Location.<br />Dedicated Scope.
              </h2>

              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-semibold text-white/70 leading-none">Let&rsquo;s talk</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">Starting at $4,000/mo</p>
              </div>

              <p className="mt-5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mb-3">Built for</p>
              <ul className="space-y-3 flex-1">
                {customFeatures.map((f) => (
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
                Request Enterprise Pricing
              </Link>
            </div>

          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              "90-day visibility improvement guarantee",
              "12-month plan: cancel with 60 days' notice",
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

      {/* ── 3 Objections directly below pricing ── */}
      <section className="bg-[#111111] py-16 px-6 border-t border-white/5">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-center text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-10">
            Quick Answers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricingObjections.map((o) => (
              <div key={o.q} className="bg-[#07141a] rounded-[20px] px-6 py-7 border border-white/8">
                <p className="text-[15px] font-semibold text-white mb-3 leading-snug">&ldquo;{o.q}&rdquo;</p>
                <p className="text-[14px] text-white/55 leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Plan Comparison</p>
            <h2 className="text-[28px] font-semibold text-white" style={{ textWrap: "balance" }}>
              What&rsquo;s included in each plan
            </h2>
          </div>

          <div className="overflow-x-auto">
          <div className="rounded-[20px] overflow-hidden border border-white/10 min-w-[540px]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
              <div className="px-5 py-4" />
              {[
                { label: "Toolkit",      sub: "$997/mo",      highlight: false },
                { label: "Done For You", sub: "$2,000/mo",    highlight: true  },
                { label: "Enterprise",    sub: "From $4,000",  highlight: false },
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
                  <TableCheck yes={row.toolkit} />
                </div>
                <div className="px-5 py-3.5 flex items-center justify-center bg-[#18b5d8]/5">
                  <TableCheck yes={row.dfy} />
                </div>
                <div className="px-5 py-3.5 flex items-center justify-center">
                  <TableCheck yes={row.custom} />
                </div>
              </div>
            ))}

            {/* CTA footer row */}
            <div className="grid grid-cols-4 bg-white/5">
              <div className="px-5 py-4" />
              <div className="px-4 py-4 text-center">
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-86b5809a824f464dba5ad90dded570a445f76b19f0384d9dbe734b750f7256989d1db28afa4647bd929885d1678f5099?locale=EN_US&cta=saveandcopylink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-white hover:text-[#18b5d8] transition-colors"
                >
                  Start →
                </a>
              </div>
              <div className="px-4 py-4 text-center bg-[#18b5d8]/10">
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-98497518b305454980c1a55eb30bffaf128ceb77a8aa42078ac6afb0ba6ccde3439958261aab46f0866337d1362d6ea7?locale=EN_US&cta=saveandcopylink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-[#18b5d8] hover:text-[#1ec8ee] transition-colors"
                >
                  Start →
                </a>
              </div>
              <div className="px-4 py-4 text-center">
                <Link href="/contact" className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors">
                  Contact →
                </Link>
              </div>
            </div>
          </div>
          </div>{/* /overflow-x-auto */}
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
            <h2 className="display-lg text-[#0a0a0a]">Questions about the toolkit</h2>
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

      {/* ── Final CTA, extra bottom padding on mobile for sticky bar ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center pb-36 md:pb-28">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">
            Zero commitment to start
          </p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            See where you stand before you spend a dollar.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            The free Visibility Audit shows exactly how visible your business is across Google, ChatGPT, Gemini, and local listings. Most owners are surprised. From there, the right plan is obvious.
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
          Book a Free Visibility Audit, No Commitment
        </Link>
      </div>
    </>
  );
}
