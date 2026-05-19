import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — AI Visibility Toolkit | Shark Branding Solutions",
  description:
    "Get found on Google, ChatGPT, and Gemini without paying for ads. Two plans: Self-Guided at $497/mo or Done For You at $2,000/mo. 90-day results guarantee.",
};

const selfGuidedFeatures = [
  "Full AI Visibility Toolkit framework — the same system our team uses for managed clients",
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
  "Multi-location businesses needing visibility across several markets",
  "Agencies managing AI visibility for their own clients",
  "Organizations needing a dedicated account lead and custom reporting",
  "White-glove onboarding and strategy workshops",
];

const objections = [
  {
    q: "I've paid for SEO before and it didn't work. How is this different?",
    a: "Traditional SEO targets search engine algorithms. This targets AI search engines — the systems behind ChatGPT, Gemini, and Google AI Overviews that now drive a growing share of local business discovery. The signals are different, the work is different, and the timeline is faster. Our HVAC client saw position movement in 30 days, not six months.",
  },
  {
    q: "What actually happens after I buy?",
    a: "For Done For You: you'll receive an onboarding call within 48 hours. We audit your current AI visibility, build your strategy plan, and begin implementation in week one. For Self-Guided: you get immediate access to the full toolkit framework with a clear priority sequence so your team knows exactly what to do first.",
  },
  {
    q: "How long until I see results?",
    a: "Visibility signals typically begin moving within 30–60 days. Significant position changes — like the HVAC results below — can happen faster with consistent execution.",
  },
  {
    q: "Is there a contract? Can I cancel?",
    a: "The Self-Guided plan has a 12-month or 3-month minimum commitment — after that, cancel with 60 days' notice (12-month plan) or at the end of your term (3-month plan). Done For You has no required annual contract; cancel any time with reasonable notice. Questions? Reach out before you commit.",
  },
];

const faqs = [
  {
    q: "Which plan should I choose?",
    a: "If your team has bandwidth to execute a structured framework internally, start with Self-Guided. If you want the work done for you — no managing, no wondering if you're doing it right — choose Done For You. Either way, start with the free Visibility Audit: it makes the right call obvious before you spend a dollar.",
  },
  {
    q: "Are both Self-Guided commitment lengths still available?",
    a: "Yes. The 12-month plan is $497/month — that's a saving of $1,200 compared to paying $597/month for twelve months. The 3-month plan is $597/month for businesses that want to test the framework first. Both include the exact same toolkit.",
  },
  {
    q: "What does \"AI visibility\" actually mean for a local business?",
    a: "When someone asks ChatGPT, Gemini, or Google's AI Overviews \"who is the best HVAC company near me?\" — AI systems pull from citation data, reviews, local listings, and structured content signals to decide which businesses to mention. If those signals aren't in order, your business gets skipped. This toolkit fixes that systematically.",
  },
  {
    q: "Does this work for my industry?",
    a: "The framework applies to any local service business that relies on customers finding them online — HVAC, real estate, legal, medical, home services, restaurants, retail, and more. The signals AI systems look for are consistent across industries. If your customers search locally, this applies to you.",
  },
  {
    q: "Is there special pricing for Chamber members?",
    a: "Yes. North Tampa Bay Chamber members can request member-only pricing directly from the team. We keep that off the public page and share it with qualified members directly.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="12" cy="12" r="10" fill="rgba(24,181,216,0.15)" />
      <polyline
        points="8 12 11 15 16 9"
        stroke="#18b5d8"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#18b5d8" strokeWidth="2" strokeLinejoin="round" />
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

            {/* Card 1: Self-Guided */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-white/8 flex flex-col">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">
                Toolkit — Self-Guided
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                You run it.<br />We built the map.
              </h2>

              {/* Price */}
              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold text-white leading-none">$497</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                  <span className="text-[11px] font-bold tracking-wide uppercase text-[#18b5d8] bg-[#18b5d8]/10 rounded-full px-3 py-1">
                    Save $1,200
                  </span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">12-month commitment — best value</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-1">
                {selfGuidedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>


              {/* CTA */}
              <a
                href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-86b5809a824f464dba5ad90dded570a445f76b19f0384d9dbe734b750f7256989d1db28afa4647bd929885d1678f5099?locale=EN_US&cta=saveandcopylink"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-6 block text-center bg-white text-[#0a0a0a] text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#18b5d8] hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Start 12-Month Plan — $497/mo
              </a>
              <p className="text-center text-[13px] text-white/30 mt-3">
                Shorter commitment?{" "}
                <a
                  href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-9454fee56f394fdfb63ff800cf994d5794634439ed8b4ae7813be49ad385ec7f0bd37ee6cfe54dfd877a039d2862d07c?locale=EN_US&cta=saveandcopylink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18b5d8] hover:underline"
                >
                  3-month plan at $597/mo →
                </a>
              </p>
            </div>

            {/* Card 2: Done For You (featured) */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-[#18b5d8]/40 ring-1 ring-[#18b5d8]/15 flex flex-col relative">
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#18b5d8] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Recommended
                </span>
              </div>

              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5 mt-2">
                Toolkit — Done For You
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                We handle it.<br />You watch it move.
              </h2>

              {/* Price */}
              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold text-[#18b5d8] leading-none">$2,000</span>
                  <span className="text-[15px] text-white/40">/mo</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">No annual lock-in required</p>
              </div>

              {/* Inline proof */}
              <div className="mt-4 bg-white/5 border border-white/10 rounded-[12px] px-4 py-3 text-[13px] text-white/70 leading-relaxed">
                <strong className="text-white font-semibold">This is what that work costs.</strong> One HVAC client moved from position #32 → #2 in 30 days across four high-intent keywords. No paid ads — just this framework, executed by our team.
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-1">
                {doneForYouFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/60 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>


              {/* CTA */}
              <a
                href="https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-98497518b305454980c1a55eb30bffaf128ceb77a8aa42078ac6afb0ba6ccde3439958261aab46f0866337d1362d6ea7?locale=EN_US&cta=saveandcopylink"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-6 block text-center bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Start Done For You — $2,000/mo
              </a>
            </div>

            {/* Card 3: Custom (decoy anchor) */}
            <div className="bg-[#07141a] rounded-[20px] p-7 border border-dashed border-white/10 flex flex-col">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">
                Custom / Multi-Location
              </span>
              <h2 className="text-[22px] font-semibold text-white mb-1 leading-snug">
                Full-Service<br />Custom Scope
              </h2>

              {/* Price */}
              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-semibold text-white/70 leading-none">Let&rsquo;s talk</span>
                </div>
                <p className="text-[13px] text-white/35 mt-1">Starting at $4,000/mo</p>
              </div>

              {/* Built for */}
              <p className="mt-5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/30 mb-3">Built for</p>
              <ul className="space-y-3 flex-1">
                {customFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-white/50 leading-snug">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="btn-press mt-6 block text-center text-white text-[15px] font-semibold rounded-full px-6 py-3.5 border border-white/20 hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Request a Custom Quote
              </Link>
            </div>

          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              "90-day results guarantee",
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
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#18b5d8] py-12 px-6 text-center">
        <div className="max-w-[620px] mx-auto">
          <p className="text-white/80 text-[15px] mb-3">Still on the fence?</p>
          <h2 className="text-[26px] font-semibold text-white mb-6" style={{ textWrap: "balance" }}>
            See exactly where you stand before you spend a dollar.
          </h2>
          <a
            href="/free-report"
            className="btn-press inline-block bg-white text-[#0a0a0a] text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#f0f0f0] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8] [touch-action:manipulation]"
          >
            Get My Free Visibility Audit
          </a>
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

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
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
    </>
  );
}
