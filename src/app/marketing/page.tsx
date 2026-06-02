import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Bots — Shark AI Solutions",
  description:
    "AI-powered marketing bots for Tampa Bay businesses. CMO bots, content automation, and AI visibility tools that grow your brand around the clock.",
};

const bots = [
  {
    n: "01", id: "cmo-bot", eyebrow: "Strategic Marketing", dark: true,
    title: "CMO Bot",
    description: "Get the strategic marketing firepower of a Chief Marketing Officer without the executive salary. The CMO Bot analyzes your market position, identifies growth opportunities, builds campaign briefs, and keeps your marketing aligned with business goals, every single week.",
    bullets: [
      "Weekly market and competitor analysis",
      "Campaign strategy and messaging briefs",
      "Budget allocation recommendations by channel",
      "Brand voice consistency across all content",
      "Monthly marketing performance reviews",
    ],
  },
  {
    n: "02", id: "content-bot", eyebrow: "Content & AI Visibility", dark: false,
    title: "AI Visibility Toolkit",
    description: "Your customers are asking AI for recommendations before they ever visit a website. The AI Visibility Toolkit optimizes your business to appear, and appear credibly, when ChatGPT, Perplexity, and Google AI Overviews answer questions your buyers are asking right now.",
    bullets: [
      "Full audit of your AI and search presence",
      "Entity and citation optimization for AI platforms",
      "Review and trust signal strategy",
      "Listing accuracy and consistency across directories",
      "Flexible engagement levels to match your needs",
    ],
  },
  {
    n: "03", id: "reputation-ai", eyebrow: "Reputation & Reviews", dark: true,
    title: "Reputation & Review AI",
    description: "Your online reputation is your most powerful sales tool, and most businesses leave it completely unmanaged. Our Reputation & Review AI monitors every platform, requests reviews at the right moment, responds to feedback automatically in your brand voice, and flags issues before they escalate.",
    bullets: [
      "Automated review requests triggered by job completion",
      "AI-generated responses in your brand voice, reviewed before posting",
      "Multi-platform monitoring: Google, Yelp, Facebook, and more",
      "Negative review alerts with suggested response drafts",
      "Monthly reputation score reporting and benchmarking",
    ],
  },
  {
    n: "04", id: "marketing-bots", eyebrow: "Custom Automation", dark: false,
    title: "Custom Marketing Bots",
    description: "From social media scheduling to email nurture sequences to lead scoring, we build marketing bots tailored to your exact workflow. If your team is repeating a task more than twice, we can automate it.",
    bullets: [
      "Social content generation and scheduling",
      "Email nurture sequences with AI personalization",
      "Lead scoring and qualification automation",
      "Reporting dashboards that update themselves",
      "Integrates with your existing marketing stack",
    ],
  },
];

export default function MarketingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[50vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-3">
            Shark AI Solutions: Marketing
          </p>
          <p className="text-[13px] text-[#7a7a7a] mb-8">A Shark Branding Solutions company</p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI that markets your
            <br />
            <span className="text-[#18b5d8]">business 24/7.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-14" style={{ textWrap: "balance" }}>
            CMO strategy, AI visibility, and content automation, so your brand keeps growing even when you&rsquo;re not working.
          </p>
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
          className={b.dark ? "bg-[#0a0a0a] px-6 py-14 md:py-24 border-t border-white/5" : "bg-white px-6 py-14 md:py-24 border-t border-[#e8e8ed]"}
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
              <p className={`body-copy leading-relaxed ${b.dark ? "text-white/60" : "text-[#333333]"}`}>
                {b.description}
              </p>
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
                href="/contact"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 md:py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">See how you stack up</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Start with the free visibility report.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            We&rsquo;ll show you exactly where your marketing stands across search, maps, and AI platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free AI Audit
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
