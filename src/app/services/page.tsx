import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Business Services — Shark Branding Solutions",
  description:
    "AI Visibility Consulting, AI Toolkit, Workshops, and Free Visibility Reports for Tampa Bay businesses.",
};

const services = [
  {
    id: "ai-visibility",
    eyebrow: "Core Service",
    title: "AI Visibility Consulting",
    description:
      "The way buyers find businesses has fundamentally shifted. Before they ever visit a website, they ask AI. We optimize your business to appear — and appear well — when ChatGPT, Perplexity, Google AI Overviews, and other discovery platforms answer questions your customers are asking right now.",
    bullets: [
      "Full audit of your AI and search presence",
      "Structured optimization of trust signals and listings",
      "Keyword and entity alignment for AI platforms",
      "Ongoing monitoring across AI discovery channels",
      "Competitive positioning analysis",
    ],
    cta: "Start Consulting",
    href: "/contact",
    dark: true,
  },
  {
    id: "toolkit",
    eyebrow: "Managed System",
    title: "AI Visibility Toolkit",
    description:
      "A complete, proven framework for businesses ready to stop guessing and start winning. We fix your visibility gaps systematically — search signals, trust indicators, listing accuracy, and AI readiness — with two engagement levels to match where you are.",
    bullets: [
      "Self-directed toolkit starting at $497/month",
      "Fully managed service at $2,000/month",
      "Initial changes visible in 7–14 days",
      "Measurable ranking movement within 30 days",
      "Monthly reporting and strategy calls",
    ],
    cta: "Explore the Toolkit",
    href: "/contact",
    dark: false,
  },
  {
    id: "workshops",
    eyebrow: "Education",
    title: "Workshops & Training",
    description:
      "Modern buyer behavior has changed — most businesses haven't caught up. Our workshops arm your team and chamber organizations with practical knowledge on how buyers discover, evaluate, and choose businesses in the age of AI. Engaging, actionable, and immediately applicable.",
    bullets: [
      "Tailored for business teams and chamber groups",
      "Half-day and full-day formats available",
      "Covers AI search, local visibility, and trust signals",
      "Includes hands-on exercises and take-home materials",
      "Available in-person (Tampa Bay) and virtually",
    ],
    cta: "Book a Workshop",
    href: "/contact",
    dark: true,
  },
  {
    id: "report",
    eyebrow: "Free — No Strings Attached",
    title: "Free Visibility Report",
    description:
      "Before you spend a dollar on marketing, know exactly where you stand. We assess how your business appears across search, maps, reviews, and AI platforms — and deliver a clear, honest report in 48 hours. No sales pressure. Just the truth about your visibility.",
    bullets: [
      "Search and map listing analysis",
      "Review and trust signal audit",
      "AI platform appearance check",
      "Actionable priority list delivered in 48 hours",
      "100% free — forever, no catch",
    ],
    cta: "Get My Free Report",
    href: "/free-report",
    dark: false,
  },
];

const plans = [
  {
    name: "AI Toolkit — Self-Directed",
    price: "$497",
    period: "/month",
    features: [
      "Full AI Visibility Toolkit access",
      "Guided framework + templates",
      "Monthly strategy session",
      "Email support",
    ],
  },
  {
    name: "AI Toolkit — Fully Managed",
    price: "$2,000",
    period: "/month",
    featured: true,
    features: [
      "Everything in Self-Directed",
      "Done-for-you implementation",
      "Weekly progress reporting",
      "Priority support",
      "Competitive monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Services
          </p>
          <h1 className="display-hero text-white mb-5">
            AI Solutions Built for
            <br />
            <span className="text-[#18b5d8]">Real Results.</span>
          </h1>
          <p className="lead-airy text-[#cccccc]">
            Every service we offer is designed around one outcome: your business
            getting found, trusted, and chosen — by humans and AI alike.
          </p>
        </div>
      </section>

      {/* Services — alternating tiles */}
      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 px-6 ${s.dark ? "bg-[#07141a]" : "bg-white"}`}
        >
          <div className="max-w-[760px] mx-auto">
            <p
              className={`text-[14px] font-semibold tracking-[0.15em] uppercase mb-4 ${
                s.dark ? "text-[#18b5d8]" : "text-[#18b5d8]"
              }`}
            >
              {s.eyebrow}
            </p>
            <h2
              className={`display-lg mb-6 ${
                s.dark ? "text-white" : "text-[#1d1d1f]"
              }`}
            >
              {s.title}
            </h2>
            <p
              className={`lead-airy mb-8 ${
                s.dark ? "text-[#cccccc]" : "text-[#333333]"
              }`}
            >
              {s.description}
            </p>
            <ul className="space-y-3 mb-10">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-[#18b5d8] text-[18px] font-semibold leading-none mt-0.5">
                    &#x2713;
                  </span>
                  <span
                    className={`body-copy ${
                      s.dark ? "text-[#cccccc]" : "text-[#333333]"
                    }`}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={s.href}
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-[#1ec8ee] transition-colors duration-150"
            >
              {s.cta}
            </Link>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase text-center mb-4">
            Pricing
          </p>
          <h2 className="display-lg text-[#1d1d1f] text-center mb-14">
            Simple, transparent plans.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[680px] mx-auto">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-[18px] p-8 border ${
                  p.featured
                    ? "bg-white border-2 border-[#18b5d8]"
                    : "bg-white border border-[#e0e0e0]"
                }`}
              >
                {p.featured && (
                  <span className="inline-block bg-[#18b5d8] text-white text-[12px] font-semibold rounded-full px-3 py-1 mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3">
                  {p.name}
                </h3>
                <p className="text-[40px] font-semibold text-[#18b5d8] leading-none mb-1">
                  {p.price}
                  <span className="text-[17px] font-normal text-[#7a7a7a]">
                    {p.period}
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#18b5d8] font-semibold">
                        &#x2713;
                      </span>
                      <span className="text-[17px] text-[#333333]">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-press mt-8 block text-center bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-[#1ec8ee] transition-colors duration-150"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07141a] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-white mb-5">
            Not sure where to start?
          </h2>
          <p className="lead-airy text-[#cccccc] mb-10">
            Start with the free report. Zero commitment, maximum clarity.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[18px] font-light rounded-full px-[28px] py-[14px] hover:bg-[#1ec8ee] transition-colors duration-150"
          >
            Get My Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
