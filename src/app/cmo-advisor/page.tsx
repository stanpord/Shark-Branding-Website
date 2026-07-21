import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI CMO Advisor | Shark AI Solutions",
  description:
    "Get CMO-level marketing strategy for your business without the CMO salary. Our AI advisor helps you prioritize channels, sharpen positioning, and drive more qualified leads.",
  alternates: { canonical: "https://sharkbrandingsolutions.com/cmo-advisor" },
};

const advisorQuestions = [
  {
    q: "Where are my best leads actually coming from?",
    a: "Most businesses are spending on the wrong channels because they're tracking the wrong metrics. We look at where your highest-value customers originated, not just where the volume is.",
  },
  {
    q: "Why does my messaging not convert?",
    a: "Positioning problems look like conversion problems. If your copy speaks to everyone, it speaks to no one. We diagnose whether the issue is channel, message, or offer.",
  },
  {
    q: "How do I compete with larger players in AI search?",
    a: "Big brands have brand budgets. You have specificity. Niche authority and local entity signals outperform broad brand awareness in AI-generated recommendations. We show you how.",
  },
  {
    q: "What should I actually be doing in the next 90 days?",
    a: "No 47-page strategy deck. A clear priority sequence: what to fix first, what to build second, and what to ignore entirely until the foundation is solid.",
  },
];

const advisorCapabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#18b5d8" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Positioning Diagnosis",
    body: "Identify why your current messaging isn't cutting through and what needs to change to attract better-fit customers.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Channel Prioritization",
    body: "Cut the channels that feel productive but don't produce. Double down on the ones with the best CAC and highest-quality leads.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#18b5d8" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 010 7.75" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "ICP Sharpening",
    body: "Define exactly who your best customers are, where they come from, and what they care about, so every marketing dollar is aimed at the right target.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#18b5d8" strokeWidth="1.5" />
        <path d="M3 9h18M9 21V9" stroke="#18b5d8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "90-Day Growth Plan",
    body: "A sequenced action plan with no fluff: what to fix first, what to build second, and what to stop doing entirely.",
  },
];

const BOOK_CALL_URL = "https://bookmenow.info/book/jstanaland/30-minutes";

export default function CmoAdvisorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] min-h-[72vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[12px] font-semibold tracking-[0.22em] uppercase mb-8">
            AI CMO Advisor
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em", textWrap: "balance" }}>
            CMO-level marketing strategy.
            <br />
            <span className="text-[#18b5d8]">Without the CMO salary.</span>
          </h1>
          <p className="text-[16px] text-white/55 leading-relaxed max-w-[520px] mx-auto mb-12" style={{ textWrap: "balance" }}>
            Most small businesses and franchises don&rsquo;t need a full-time CMO. They need sharp answers
            to the right questions. Our AI CMO Advisor delivers strategic clarity on positioning,
            channels, and growth, backed by our team when you need execution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Book a Strategy Session
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
              The questions most business owners can&rsquo;t answer, but need to.
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

      {/* Capabilities */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-5">
            What you get
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white mb-14 leading-snug" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            Strategic clarity across every marketing decision.
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

      {/* Who this is for */}
      <section className="bg-[#07141a] py-20 px-6 border-t border-white/5">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-6">
            Who this is for
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white mb-8 leading-snug" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            You&rsquo;re already running the business. You need strategy that keeps up.
          </h2>
          <div className="space-y-4">
            {[
              "Franchise owners who need a clear marketing direction without a dedicated marketing team",
              "SMB owners who've tried agencies but never got a straight answer on what's actually working",
              "Multi-location operators who need consistency across markets without managing 10 vendors",
              "Business owners preparing to scale and needing to know which bets to make first",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <p className="text-[15px] text-white/65 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#18b5d8] mb-6">
            Ready to get clarity?
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-white mb-6" style={{ letterSpacing: "-0.01em", textWrap: "balance" }}>
            Book a 30-minute CMO strategy session.
          </h2>
          <p className="text-[15px] text-white/50 mb-10 leading-relaxed" style={{ textWrap: "balance" }}>
            We&rsquo;ll work through your positioning, channels, and 90-day priorities. No pitch. No deck.
            Just answers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[16px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Book My CMO Session
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
