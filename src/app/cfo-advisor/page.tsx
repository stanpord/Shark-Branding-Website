import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI CFO Advisor | Shark AI Solutions",
  description:
    "Get CFO-level financial clarity on your marketing investments. Know your CAC, understand your ROI, and make confident budget decisions without hiring a full-time CFO.",
  alternates: { canonical: "https://sharkbrandingsolutions.com/cfo-advisor" },
};

const advisorQuestions = [
  {
    q: "Am I actually profitable on each marketing channel?",
    a: "Blended CAC hides where you're losing money. We break it down by channel so you know which spend to scale and which to cut immediately.",
  },
  {
    q: "What's the real ROI on my AI visibility investment?",
    a: "We model the math: average customer value, close rate, how many more leads AI visibility drives, and what that's worth monthly versus the cost of the service.",
  },
  {
    q: "How long until this pays back?",
    a: "Payback period is the number that tells you whether a marketing investment makes sense. We calculate it before you commit, not after you've spent six months finding out.",
  },
  {
    q: "Where should I put the next dollar?",
    a: "Not every dollar earns the same return. We map your options by expected payback period and risk level so you're making capital allocation decisions, not guesses.",
  },
];

const advisorCapabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Marketing ROI Modeling",
    body: "Know exactly what your marketing spend should return before you commit. We model LTV, CAC, and payback period by channel so every budget decision is backed by numbers.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Unit Economics Clarity",
    body: "Customer acquisition cost, lifetime value, gross margin per client. The numbers your business runs on, calculated clearly so you can make decisions with confidence.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#18b5d8" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#18b5d8" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="12" y2="16" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="14" x2="14" y2="14" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Budget Allocation Framework",
    body: "Work backwards from your revenue target to build a marketing budget that makes sense. No arbitrary percentages. Just math that connects spend to outcomes.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 20h20M6 20V10M10 20V4M14 20V8M18 20V14" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Payback Period Analysis",
    body: "Before you invest in any service or channel, know how many months until you break even. We run the scenarios so you can make go/no-go decisions in minutes, not weeks.",
  },
];

const BOOK_CALL_URL = "https://bookmenow.info/book/jstanaland/30-minutes";

const roiExample = [
  { label: "Average client value", value: "$4,800/yr" },
  { label: "Close rate from inbound", value: "25%" },
  { label: "Additional leads from AI visibility", value: "+4/mo" },
  { label: "Monthly revenue impact", value: "+$400/mo at 25% close" },
  { label: "Annual revenue impact", value: "$4,800/yr" },
  { label: "Toolkit cost", value: "$999/mo" },
  { label: "Payback period", value: "~2.5 months" },
];

export default function CfoAdvisorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] min-h-[72vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[12px] font-semibold tracking-[0.22em] uppercase mb-8">
            AI CFO Advisor
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em", textWrap: "balance" }}>
            CFO-level financial clarity.
            <br />
            <span className="text-[#18b5d8]">Without the CFO overhead.</span>
          </h1>
          <p className="text-[16px] text-white/55 leading-relaxed max-w-[520px] mx-auto mb-12" style={{ textWrap: "balance" }}>
            Most business owners make marketing decisions on gut feel because the numbers are too
            hard to calculate. Our AI CFO Advisor gives you unit economics, payback periods, and
            ROI models so every dollar you spend is a decision, not a gamble.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Book a Financial Clarity Session
            </a>
            <Link
              href="/ai-audit"
              className="inline-block text-[15px] font-semibold text-white/70 border border-white/20 rounded-full px-7 py-3.5 hover:border-white/50 hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Run My Free AI Audit First
            </Link>
          </div>
        </div>
      </section>

      {/* What the advisor addresses */}
      <section className="bg-[#111111] py-20 px-6 border-t border-white/5">
        <div className="max-w-[1080px] mx-auto">
          <div className="max-w-[580px] mb-14">
            <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-5">
              What we work through together
            </p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white leading-snug" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
              The financial questions that drive every marketing decision.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advisorQuestions.map((item) => (
              <div
                key={item.q}
                className="bg-[#07141a] border border-white/8 rounded-[14px] p-7"
              >
                <h3 className="text-[16px] font-semibold text-white mb-3 leading-snug">
                  &ldquo;{item.q}&rdquo;
                </h3>
                <p className="text-[14px] text-white/55 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Example */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-5">
            Example ROI model
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white mb-10 leading-snug" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            This is how we think about your investment before you make it.
          </h2>

          <div className="bg-[#07141a] border border-white/10 rounded-[14px] overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10">
              <p className="text-[12px] font-semibold text-white/40 uppercase tracking-[0.12em]">
                Example: Local service business, AI Visibility Toolkit
              </p>
            </div>
            <div className="divide-y divide-white/5">
              {roiExample.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-2 px-6 py-4 ${i === roiExample.length - 1 ? "bg-[#18b5d8]/5" : ""}`}
                >
                  <p className={`text-[14px] ${i === roiExample.length - 1 ? "text-white font-semibold" : "text-white/55"}`}>
                    {row.label}
                  </p>
                  <p className={`text-[14px] font-semibold text-right ${i === roiExample.length - 1 ? "text-[#18b5d8]" : "text-white"}`}>
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[12px] text-white/30 mt-4 text-center">
            Illustrative example. Your numbers will vary based on average deal size and close rate.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#111111] py-20 px-6 border-t border-white/5">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-5">
            What you get
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white mb-14 leading-snug" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            Numbers that make your marketing decisions obvious.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advisorCapabilities.map((item) => (
              <div
                key={item.title}
                className="bg-[#07141a] border border-white/8 rounded-[14px] p-7"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-white/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-6">
            Ready to run the numbers?
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white mb-6" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            Book a 30-minute financial clarity session.
          </h2>
          <p className="text-[15px] text-white/50 mb-10 leading-relaxed" style={{ textWrap: "balance" }}>
            We&rsquo;ll model your CAC, payback period, and ROI so you can decide whether any marketing
            investment makes sense for your business. No obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[16px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Book My CFO Session
            </a>
            <Link
              href="/plans"
              className="inline-block text-[15px] font-semibold text-white/60 border border-white/15 rounded-full px-7 py-3.5 hover:border-white/40 hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              See Plans →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
