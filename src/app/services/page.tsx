import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Business Services — Shark Branding Solutions",
  description:
    "AI Business Consulting, AI Toolkit, Workshops, and Free Visibility Reports for Tampa Bay businesses.",
};

const services = [
  {
    n: "01", id: "ai-visibility", eyebrow: "Core Service", dark: true,
    title: "AI Business Consulting",
    description: "The way buyers find businesses has fundamentally shifted. Before they ever visit a website, they ask AI. We optimize your business to appear — and appear well — when ChatGPT, Perplexity, Google AI Overviews, and other discovery platforms answer questions your customers are asking right now.",
    bullets: [
      "Full audit of your AI and search presence",
      "Structured optimization of trust signals and listings",
      "Keyword and entity alignment for AI platforms",
      "Ongoing monitoring across AI discovery channels",
      "Competitive positioning analysis",
    ],
    cta: "Start Consulting", href: "/contact",
  },
  {
    n: "02", id: "toolkit", eyebrow: "Managed System", dark: false,
    title: "AI Visibility Toolkit",
    description: "A complete, proven framework for businesses ready to stop guessing and start winning. We fix your visibility gaps systematically — search signals, trust indicators, listing accuracy, and AI readiness — with two engagement levels to match where you are.",
    bullets: [
      "Complete AI and search visibility framework",
      "Initial changes visible in 7–14 days",
      "Measurable ranking movement within 30 days",
      "Monthly reporting and strategy calls",
      "Flexible engagement levels to match your needs",
    ],
    cta: "Explore the Toolkit", href: "/contact",
  },
  {
    n: "03", id: "workshops", eyebrow: "Education", dark: true,
    title: "Workshops & Training",
    description: "Modern buyer behavior has changed — most businesses haven't caught up. Our workshops arm your team and chamber organizations with practical knowledge on how buyers discover, evaluate, and choose businesses in the age of AI. Engaging, actionable, and immediately applicable.",
    bullets: [
      "Tailored for business teams and chamber groups",
      "Half-day and full-day formats available",
      "Covers AI search, local visibility, and trust signals",
      "Includes hands-on exercises and take-home materials",
      "Available in-person (Tampa Bay) and virtually",
    ],
    cta: "Book a Workshop", href: "/contact",
  },
  {
    n: "04", id: "report", eyebrow: "Free — No Strings Attached", dark: false,
    title: "Free Visibility Report",
    description: "Before you spend a dollar on marketing, know exactly where you stand. We assess how your business appears across search, maps, reviews, and AI platforms — and deliver a clear, honest report in 48 hours. No sales pressure. Just the truth about your visibility.",
    bullets: [
      "Search and map listing analysis",
      "Review and trust signal audit",
      "AI platform appearance check",
      "Actionable priority list delivered in 48 hours",
      "100% free — forever, no catch",
    ],
    cta: "Get My Free Report", href: "/free-report",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Services
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Every service built around
            <br />
            <span className="text-[#18b5d8]">one outcome.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-14" style={{ textWrap: "balance" }}>
            Your business getting found, trusted, and chosen — by humans and AI alike.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[13px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={s.dark ? "bg-[#0a0a0a] px-6 py-24 border-t border-white/5" : "bg-white px-6 py-24 border-t border-[#e8e8ed]"}
        >
          <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">{s.n}</span>
                <span className={`w-px h-4 ${s.dark ? "bg-white/20" : "bg-[#1d1d1f]/15"}`} aria-hidden="true" />
                <span className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${s.dark ? "text-white/50" : "text-[#1d1d1f]/50"}`}>{s.eyebrow}</span>
              </div>
              <h2 className={`display-lg mb-6 ${s.dark ? "text-white" : "text-[#0a0a0a]"}`} style={{ textWrap: "balance" }}>
                {s.title}
              </h2>
              <p className={`body-copy leading-relaxed ${s.dark ? "text-white/60" : "text-[#333333]"}`}>
                {s.description}
              </p>
            </div>
            {/* Right */}
            <div className="lg:pt-[72px]">
              <ul className="space-y-4 mb-10">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-[#18b5d8] font-bold leading-none mt-1 shrink-0" aria-hidden="true">✓</span>
                    <span className={`body-copy ${s.dark ? "text-white/70" : "text-[#333333]"}`}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                {s.cta}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Not sure where to start?</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Start with the free report.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Zero commitment. Maximum clarity.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
