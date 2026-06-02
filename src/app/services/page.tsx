import type { Metadata } from "next";
import Link from "next/link";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sharkbrandingsolutions.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://sharkbrandingsolutions.com/services",
        },
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://sharkbrandingsolutions.com/services#catalog",
      name: "AI Business Services",
      provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Business Consulting",
            description:
              "Full audit and optimization of your business presence across AI discovery platforms including ChatGPT, Perplexity, Google AI Overviews, and Gemini.",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
            areaServed: { "@type": "State", name: "Florida" },
            serviceType: "AI Visibility Consulting",
          },
        },
        {
          "@type": "Offer",
          priceSpecification: [
            {
              "@type": "PriceSpecification",
              price: "497",
              priceCurrency: "USD",
              unitText: "MONTH",
              name: "Self-Directed",
            },
            {
              "@type": "PriceSpecification",
              price: "2000",
              priceCurrency: "USD",
              unitText: "MONTH",
              name: "Fully Managed",
            },
          ],
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Toolkit",
            description:
              "A complete framework for AI search visibility. Fixes search signals, trust indicators, listing accuracy, and AI readiness. Self-directed at $497/month or fully managed at $2,000/month.",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
            areaServed: { "@type": "State", name: "Florida" },
            serviceType: "AI Search Optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility Workshops & Training",
            description:
              "Half-day and full-day workshops for business teams and chamber organizations covering AI search, local visibility, and trust signals. Available in-person (Tampa Bay) and virtually.",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
            areaServed: [
              { "@type": "City", name: "Wesley Chapel" },
              { "@type": "City", name: "Tampa" },
            ],
            serviceType: "Business Training",
          },
        },
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Free AI Visibility Audit",
            description:
              "A free audit covering search presence, maps, reviews, and AI platform appearance. Includes a call to walk through results — no commitment required.",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
            serviceType: "Business Audit",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Visibility Consulting Tampa Bay | Shark Branding Solutions",
  description:
    "AI visibility consulting for Tampa Bay businesses. Get found by ChatGPT, Google AI Overviews, and Gemini without paid ads. Serving Wesley Chapel, Tampa, St. Petersburg, and Lutz, FL.",
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
      "Self-directed toolkit starting at $497/month",
      "Fully managed service at $2,000/month",
      "Initial changes visible in 7–14 days",
      "Measurable ranking movement within 30 days",
      "Monthly reporting and strategy calls",
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
    title: "Free Visibility Audit",
    description: "Before you spend a dollar on marketing, know exactly where you stand. We run your audit and walk you through everything together on a quick call — search, maps, reviews, and AI platforms. No sales pressure. Just the truth about your visibility.",
    bullets: [
      "Search and map listing analysis",
      "Review and trust signal audit",
      "AI platform appearance check",
      "We walk you through your results on a call — you keep what you learn",
      "100% free — forever, no catch",
    ],
    cta: "Get My Free Visibility Audit", href: "/free-report",
  },
];

const plans = [
  {
    name: "Self-Directed",
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
    name: "Fully Managed",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
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

      {/* ── Pricing ── */}
      <section className="bg-[#f5f5f7] px-6 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Pricing</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Simple, transparent plans.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[720px] mx-auto">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-[20px] p-8 ${p.featured ? "bg-[#0a0a0a]" : "bg-white border border-[#e8e8ed]"}`}
              >
                {p.featured && (
                  <span className="inline-block bg-[#18b5d8] text-black text-[11px] font-bold rounded-full px-3 py-1 mb-5 tracking-wide uppercase">
                    Most Popular
                  </span>
                )}
                <p className={`text-[13px] font-semibold tracking-[0.12em] uppercase mb-3 ${p.featured ? "text-white/50" : "text-[#7a7a7a]"}`}>
                  AI Visibility Toolkit — {p.name}
                </p>
                <p className={`text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tight mb-1 ${p.featured ? "text-white" : "text-[#0a0a0a]"}`}>
                  {p.price}
                  <span className={`text-[17px] font-normal ${p.featured ? "text-white/40" : "text-[#7a7a7a]"}`}>{p.period}</span>
                </p>
                <div className={`mt-8 space-y-3 mb-8 border-t pt-8 ${p.featured ? "border-white/10" : "border-[#e8e8ed]"}`}>
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      <span className={`text-[15px] ${p.featured ? "text-white/70" : "text-[#333333]"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`btn-press block text-center text-[15px] font-semibold rounded-full px-6 py-3.5 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation] ${
                    p.featured
                      ? "bg-[#18b5d8] text-white hover:bg-[#1ec8ee] focus-visible:ring-offset-[#0a0a0a]"
                      : "bg-[#0a0a0a] text-white hover:bg-[#07141a]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-[0.15em] mb-8">Frequently Asked Questions</p>
          <div className="space-y-8">
            {[
              { q: "What is AI visibility consulting?", a: "AI visibility consulting is the practice of optimizing your business listings, reviews, content, and trust signals so AI-powered tools like ChatGPT, Google AI Overviews, Gemini, and Perplexity recommend your business when buyers ask questions in your category. Unlike traditional SEO, it targets the AI answer layer — not just ranked blue links." },
              { q: "How is this different from regular SEO?", a: "Traditional SEO gets you ranked in the blue links. AI visibility consulting gets you recommended in the AI-generated answer before anyone ever clicks a link. The signals are different — AI systems prioritize consistent business data, review quality, structured content, and entity authority over backlinks and keyword density." },
              { q: "How quickly do Tampa Bay businesses see results?", a: "Most clients see measurable visibility movement within 30 days. One Wesley Chapel HVAC client moved from position #32 to #2 on Google in under 30 days. A real estate client reached #1 for 'Best Realtors in Wesley Chapel' among 2,000+ competing agents." },
              { q: "Do I need to run ads to appear in AI search results?", a: "No. ChatGPT, Gemini, and Google AI Overviews base their recommendations on trust signals, review quality, consistent business data, and structured content — not paid ads. Our AI Visibility Toolkit is built entirely around organic signals." },
              { q: "What areas do you serve?", a: "We serve Tampa Bay businesses including Wesley Chapel, Lutz, Land O' Lakes, Tampa, and St. Petersburg, FL. We also work with regional businesses remotely." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#e5e5e5] pb-8">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-3">{q}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 text-[14px]">
            <Link href="/plans" className="text-[#18b5d8] font-semibold hover:underline">View Plans &amp; Pricing →</Link>
            <Link href="/case-studies" className="text-[#18b5d8] font-semibold hover:underline">See Case Studies →</Link>
            <Link href="/free-report" className="text-[#18b5d8] font-semibold hover:underline">Get a Free Visibility Audit →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Not sure where to start?</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Start with a free Visibility Audit.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Zero commitment. Maximum clarity.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free Visibility Audit
          </Link>
        </div>
      </section>
    </>
  );
}
