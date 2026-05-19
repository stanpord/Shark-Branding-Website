import Link from "next/link";
import Image from "next/image";
import HackathonBanner from "@/components/HackathonBanner";

const solutions = [
  {
    n: "01",
    title: "AI Visibility Toolkit",
    body: "Get found on Google, ChatGPT, and Gemini — without paying for ads. We fix every gap in how AI discovers, evaluates, and recommends your business.",
    href: "/plans",
    tag: "Most Popular",
  },
  {
    n: "02",
    title: "AI Marketing Employees",
    body: "Conversations that convert 24/7. AI employees that qualify leads, book appointments, answer objections, and follow up — sounding like your best salesperson.",
    href: "/marketing",
    tag: null,
  },
  {
    n: "03",
    title: "AI Operations & Automation",
    body: "Remove the bottlenecks. AI that handles intake, scheduling, reporting, follow-up, and internal workflows — so your team focuses on what only humans can do.",
    href: "/operations",
    tag: null,
  },
  {
    n: "04",
    title: "Custom AI Consulting",
    body: "Strategy, build, and deployment. We map your operations, identify every automation opportunity, and implement AI that fits your business — not a template.",
    href: "/services",
    tag: null,
  },
];


export default function Home() {
  return (
    <>
      {/* ── Hackathon Banner ── */}
      <div className="hidden sm:block">
        <HackathonBanner />
      </div>

      {/* ── Hero ── */}
      <section className="bg-white px-6 pt-20 pb-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[88vh]">
          {/* Left: copy */}
          <div>
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
              Shark AI Solutions &nbsp;&middot;&nbsp; AI Business Consulting
            </p>
            <h1 className="display-hero text-[#0a0a0a] mb-6">
              AI-Ready Business
              <br />
              Consulting for
              <br />
              <span className="text-[#18b5d8]">Tampa Bay.</span>
            </h1>
            <p className="lead-airy text-[#444] max-w-[520px] mb-10">
              We build the foundation that gets your business found on ChatGPT, Google AI, and Gemini — and the AI systems that run your operations without adding staff.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-press bg-[#0a0a0a] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/services"
                className="btn-press text-[#1d1d1f] text-[17px] border border-[#d2d2d7] rounded-full px-[32px] py-[15px] hover:border-[#0a0a0a] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                See Our Solutions
              </Link>
            </div>
          </div>
          {/* Right: image */}
          <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
            <Image
              src="/ai-visibility-hero.webp"
              alt="AI recommends your business above competitors in Tampa Bay"
              width={900}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-[#e5e5e5]">
            <Image
              src="/infographic-ai-decision.png"
              alt="Google shows options. AI makes the decision faster."
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">What We Build</p>
            <h2 className="display-lg text-white mb-4" style={{ textWrap: "balance" }}>
              AI solutions for every part of your business.
            </h2>
            <p className="lead-airy text-white/50 max-w-[520px] mx-auto" style={{ textWrap: "balance" }}>
              From getting found online to running your operations — we build AI that works like your best employee, only better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative bg-[#07141a] rounded-[20px] p-8 border border-white/5 hover:border-[#18b5d8]/30 motion-safe:transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                {s.tag && (
                  <span className="absolute top-6 right-6 bg-[#18b5d8]/10 text-[#18b5d8] text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-[#18b5d8]/20">
                    {s.tag}
                  </span>
                )}
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">{s.n}</span>
                <h3 className="text-[21px] font-semibold text-white mb-3 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
                  {s.title}
                </h3>
                <p className="body-copy text-white/50">{s.body}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-[#18b5d8] text-[13px] font-semibold">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Shift ── */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-[#e5e5e5]">
            <Image
              src="/infographic-shift-wins.png"
              alt="The shift that wins the decision — from Get Found to Get Chosen"
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Real Results ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Client Results</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Real results. Real fast.
            </h2>
          </div>
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-[#e5e5e5] mb-8">
            <Image
              src="/infographic-real-results.png"
              alt="Real results across HVAC, AI code impact, and social media clients"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-[#e5e5e5]">
            <Image
              src="/hvac-ranking-table.png"
              alt="HVAC client keyword rankings: from #32 to #2 in under 30 days"
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies" className="text-[#18b5d8] text-[15px] font-semibold hover:underline">
              Read the full HVAC case study &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-10">Client Result</p>
          <blockquote className="display-md text-[#0a0a0a] mb-10 leading-relaxed" style={{ textWrap: "balance" }}>
            &ldquo;They completely transformed how our business shows up online&hellip; we&rsquo;re now showing up on AI search platforms, where before we were basically invisible.&rdquo;
          </blockquote>
          <div className="w-10 h-px bg-[#18b5d8] mx-auto mb-6" aria-hidden="true" />
          <p className="text-[17px] font-semibold text-[#1d1d1f]">Jonathan Tuttle</p>
          <p className="text-[14px] text-[#7a7a7a] mt-1">Drywall Company Owner &mdash; Pinellas County, FL</p>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="rounded-[20px] overflow-hidden shadow-lg border border-[#e5e5e5]">
            <Image
              src="/team-photo.png"
              alt="Meet the Shark AI Solutions team — Michelle Stanaland, Josh Stanaland, Tiffany Fancher"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">The Process</p>
            <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
              How AI visibility consulting works.
            </h2>
            <p className="lead-airy text-[#444] max-w-[580px] mx-auto" style={{ textWrap: "balance" }}>
              Most Tampa Bay businesses are invisible to AI. ChatGPT, Gemini, and Google AI Overviews pull from a curated set of trusted sources — and if your business isn&rsquo;t sending the right signals, you&rsquo;re not on that list. Here&rsquo;s how we fix that.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Audit Your AI Presence",
                body: "We run a full visibility audit across Google, ChatGPT, Gemini, and Perplexity to find every gap in how AI discovers and evaluates your business. This includes your listings, schema markup, review signals, content structure, and citation consistency across the web.",
              },
              {
                n: "02",
                title: "Build Your Trust Signals",
                body: "AI systems recommend businesses they trust. We fix your structured data, optimize your Google Business Profile, clean up inconsistent citations, and create the content signals that tell AI you&rsquo;re the most credible option in your category in the Tampa Bay area.",
              },
              {
                n: "03",
                title: "Get Recommended — Without Ads",
                body: "Once your trust signals are in place, AI starts recommending you organically. Clients in Wesley Chapel, Lutz, Land O&rsquo; Lakes, and St. Petersburg have seen keyword rankings move from page 3 to position 1 — and started appearing in ChatGPT responses — within 30 days.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-[#f5f5f7] rounded-[20px] p-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-4">{step.n}</span>
                <h3 className="text-[19px] font-semibold text-[#0a0a0a] mb-3">{step.title}</h3>
                <p className="body-copy text-[#444] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[620px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Ready to start</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Your business, running on AI.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            Book a free discovery call. We&rsquo;ll map your operations, identify every AI opportunity, and show you exactly what&rsquo;s possible &mdash; no commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[18px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/plans"
              className="btn-press inline-block text-white text-[18px] font-semibold rounded-full px-[32px] py-[15px] border border-white/20 hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
