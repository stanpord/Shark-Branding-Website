import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Bots — Shark AI Solutions",
  description:
    "AI-powered marketing bots for Tampa Bay businesses. CMO bots, content automation, and AI visibility tools that grow your brand around the clock.",
};

const bots = [
  {
    id: "cmo-bot",
    eyebrow: "Strategic Marketing",
    title: "CMO Bot",
    description:
      "Get the strategic marketing firepower of a Chief Marketing Officer without the executive salary. The CMO Bot analyzes your market position, identifies growth opportunities, builds campaign briefs, and keeps your marketing aligned with business goals — every single week.",
    bullets: [
      "Weekly market and competitor analysis",
      "Campaign strategy and messaging briefs",
      "Budget allocation recommendations by channel",
      "Brand voice consistency across all content",
      "Monthly marketing performance reviews",
    ],
    dark: true,
  },
  {
    id: "content-bot",
    eyebrow: "Content & AI Visibility",
    title: "AI Visibility Toolkit",
    description:
      "Your customers are asking AI for recommendations before they ever visit a website. The AI Visibility Toolkit optimizes your business to appear — and appear credibly — when ChatGPT, Perplexity, and Google AI Overviews answer questions your buyers are asking right now.",
    bullets: [
      "Full audit of your AI and search presence",
      "Entity and citation optimization for AI platforms",
      "Review and trust signal strategy",
      "Listing accuracy and consistency across directories",
      "Self-directed ($497/mo) or fully managed ($2,000/mo)",
    ],
    dark: false,
  },
  {
    id: "reputation-ai",
    eyebrow: "Reputation & Reviews",
    title: "Reputation & Review AI",
    description:
      "Your online reputation is your most powerful sales tool — and most businesses leave it completely unmanaged. Our Reputation & Review AI monitors every platform, requests reviews at the right moment, responds to feedback automatically in your brand voice, and flags issues before they escalate.",
    bullets: [
      "Automated review requests triggered by job completion",
      "AI-generated responses in your brand voice — reviewed before posting",
      "Multi-platform monitoring: Google, Yelp, Facebook, and more",
      "Negative review alerts with suggested response drafts",
      "Monthly reputation score reporting and benchmarking",
    ],
    dark: true,
  },
  {
    id: "marketing-bots",
    eyebrow: "Custom Automation",
    title: "Custom Marketing Bots",
    description:
      "From social media scheduling to email nurture sequences to lead scoring — we build marketing bots tailored to your exact workflow. If your team is repeating a task more than twice, we can automate it.",
    bullets: [
      "Social content generation and scheduling",
      "Email nurture sequences with AI personalization",
      "Lead scoring and qualification automation",
      "Reporting dashboards that update themselves",
      "Integrates with your existing marketing stack",
    ],
    dark: false,
  },
];

export default function MarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white min-h-[50vh] flex items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-3">
            Shark AI Solutions &mdash; Marketing
          </p>
          <p className="text-[13px] text-[#7a7a7a] mb-5">A Shark Branding Solutions company</p>
          <h1 className="display-hero text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
            AI that markets your
            <br />
            <span className="text-[#18b5d8]">business 24/7.</span>
          </h1>
          <p className="lead-airy text-[#333333]">
            CMO strategy, AI visibility, and content automation — so your brand
            keeps growing even when you&rsquo;re not working.
          </p>
        </div>
      </section>

      {/* Bots — alternating tiles */}
      {bots.map((b) => (
        <section
          key={b.id}
          id={b.id}
          className={`py-20 px-6 ${b.dark ? "bg-[#07141a]" : "bg-white"}`}
        >
          <div className="max-w-[760px] mx-auto">
            <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-4">
              {b.eyebrow}
            </p>
            <h2 className={`display-lg mb-6 ${b.dark ? "text-white" : "text-[#1d1d1f]"}`}>
              {b.title}
            </h2>
            <p className={`lead-airy mb-8 ${b.dark ? "text-[#cccccc]" : "text-[#333333]"}`}>
              {b.description}
            </p>
            <ul className="space-y-3 mb-10">
              {b.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="text-[#18b5d8] text-[18px] font-semibold leading-none mt-0.5">
                    &#x2713;
                  </span>
                  <span className={`body-copy ${b.dark ? "text-[#cccccc]" : "text-[#333333]"}`}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Learn More
            </Link>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#f5f5f7] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-[#1d1d1f] mb-5" style={{ textWrap: "balance" }}>
            See how your marketing stacks up.
          </h2>
          <p className="lead-airy text-[#333333] mb-10">
            Start with a free visibility report — we&rsquo;ll show you exactly
            where your marketing stands across search, maps, and AI platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7] [touch-action:manipulation]"
            >
              Get Free Report
            </Link>
            <Link
              href="/contact"
              className="btn-press inline-block text-[#18b5d8] text-[17px] border border-[#18b5d8] rounded-full px-[22px] py-[11px] hover:bg-[#18b5d8]/10 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7] [touch-action:manipulation]"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

