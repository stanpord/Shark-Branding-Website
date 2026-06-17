import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Visibility Foundation — North Tampa Bay Chamber Exclusive | Shark AI Solutions",
  description: "Exclusive AI visibility offer for North Tampa Bay Chamber members.",
  robots: { index: false, follow: false },
};

const included = [
  {
    title: "AI Presence Management",
    desc: "Your business information kept accurate and consistent across every platform AI uses to research and recommend local businesses.",
  },
  {
    title: "AI Readability Setup",
    desc: "A technical configuration that helps AI systems understand exactly what your business does, who you serve, and where you're located.",
  },
  {
    title: "Visibility Tracking Dashboard",
    desc: "See exactly where you rank for your most important search terms and watch the movement month over month.",
  },
  {
    title: "Monthly Performance Report",
    desc: "A plain-English summary of what improved, where you're gaining ground, and what we're focused on next.",
  },
];

const steps = [
  {
    n: "01",
    title: "We Audit Your Visibility",
    desc: "We run a free Visibility Audit showing every place AI can't find or trust your business right now.",
  },
  {
    n: "02",
    title: "We Fix the Gaps",
    desc: "We correct, build, and configure everything AI needs to recognize your business as credible.",
  },
  {
    n: "03",
    title: "We Prove It's Working",
    desc: "Every month you receive a report showing ranking improvements and visibility gains.",
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="rgba(24,181,216,0.15)" />
      <polyline points="8 12 11 15 16 9" stroke="#18b5d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ChamberPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white pt-28 pb-16 px-6">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#0a0a0a] rounded-full px-4 py-2 mb-8">
            <span className="bg-[#18b5d8] text-white text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
              Chamber Exclusive
            </span>
            <a
              href="https://www.northtampabay.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-[12px] font-medium hover:text-white transition-colors"
            >
              North Tampa Bay Chamber Members Only
            </a>
          </div>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI Visibility{" "}
            <span className="text-[#18b5d8]">Foundation</span>
          </h1>
          <p className="lead-airy text-[#444] max-w-[560px] mx-auto mb-4" style={{ textWrap: "balance" }}>
            When someone asks ChatGPT or Google who the best contractor, dentist, or service company in Wesley Chapel is, your name should come up. Right now, it probably doesn&rsquo;t. That&rsquo;s what we fix.
          </p>
          <p className="text-[15px] text-[#18b5d8] font-semibold mb-10">
            Not available to the general public. Reserved for chamber members.
          </p>
        </div>
      </section>

      {/* ── Hook bar ── */}
      <section className="bg-[#0a0a0a] py-8 px-6">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[16px] text-white leading-relaxed" style={{ textWrap: "balance" }}>
            Most businesses are invisible to AI not because they&rsquo;re bad at what they do, but because{" "}
            <strong className="text-[#18b5d8]">AI can&rsquo;t find or trust them.</strong>{" "}
            We fix that with a done-for-you system that keeps your business accurate, readable, and credible everywhere AI looks.
          </p>
        </div>
      </section>

      {/* ── Plain-language bullets ── */}
      <section className="bg-[#f5f5f7] py-16 px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 text-center">Here&rsquo;s the simple version</p>
          <ul className="space-y-4">
            {[
              "When someone asks ChatGPT or Google for a recommendation, AI pulls from a list of businesses it trusts. Right now, you might not be on that list.",
              "It's not about having a website. It's about whether AI can find you, read you, and trust you enough to recommend you.",
              "Most businesses in Wesley Chapel haven't done this yet, which means the ones who do will show up first.",
              "We handle everything. You don't need to understand AI. You just need to be on the list before your competitor is.",
              "We start with a free audit so you can see exactly where you stand before spending a dollar.",
              "Chamber members get a lower rate than the general public, and this page is the only place it's offered.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-4 bg-white rounded-[14px] px-6 py-4 shadow-sm">
                <span className="text-[#18b5d8] font-bold text-[18px] leading-none mt-0.5 shrink-0">✓</span>
                <span className="text-[16px] text-[#333] leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">What&rsquo;s Included</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Everything done for you. Monthly.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-[20px] p-7 border-l-4 border-[#18b5d8]">
                <div className="flex items-start gap-3 mb-3">
                  <CheckIcon />
                  <h3 className="text-[17px] font-semibold text-[#0a0a0a]">{item.title}</h3>
                </div>
                <p className="text-[14px] text-[#555] leading-relaxed pl-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">The Process</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              How it works.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.n} className="bg-white rounded-[20px] p-7 text-center">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-4">{step.n}</span>
                <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-3">{step.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 text-center">Real Results: Local Businesses You Know</p>
          <p className="text-[15px] text-[#7a7a7a] text-center mb-12">These aren&rsquo;t made-up numbers. These are businesses in your backyard.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f5f5f7] rounded-[20px] p-7 flex flex-col">
              <p className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#18b5d8] leading-none mb-2">#4→#1</p>
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-1">Best Realtor in Wesley Chapel</p>
              <p className="text-[12px] text-[#888] mb-4">In a market of 2,000+ competing agents</p>
              <p className="text-[14px] text-[#333] leading-relaxed italic flex-1">
                &ldquo;AI Visibility Toolkit changed how buyers find us. We went from invisible to the top recommended realtor in our area.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#1d1d1f] mt-4">Emory&rsquo;s Rock Realty</p>
              <p className="text-[12px] text-[#888]">Wesley Chapel, FL, Real Estate</p>
            </div>
            <div className="bg-[#f5f5f7] rounded-[20px] p-7 flex flex-col">
              <p className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#18b5d8] leading-none mb-2">#1</p>
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-1">AI-Recommended on 3 Platforms</p>
              <p className="text-[12px] text-[#888] mb-4">ChatGPT, Gemini, and Perplexity, in 30 days</p>
              <p className="text-[14px] text-[#333] leading-relaxed italic flex-1">
                &ldquo;We went from completely invisible to AI to being the #1 recommended smart vending company in the area. It happened faster than we expected.&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-[#1d1d1f] mt-4">Diamond Dogs Smart Vending</p>
              <p className="text-[12px] text-[#888]">Wesley Chapel, FL, Smart Vending</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-[20px] p-7 flex flex-col border border-[#18b5d8]/30">
              <p className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-[#18b5d8] leading-none mb-2">10×</p>
              <p className="text-[13px] font-semibold text-white mb-1">More AI Citations</p>
              <p className="text-[12px] text-white/40 mb-4">Chamber recognized as a trusted local source</p>
              <p className="text-[14px] text-white/70 leading-relaxed italic flex-1">
                &ldquo;96% of our members weren&rsquo;t being recommended by AI at all. Working with Shark Branding changed that for the Chamber and for our members.&rdquo;
              </p>
              <a
                href="https://www.northtampabay.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-white mt-4 hover:text-[#18b5d8] transition-colors block"
              >
                North Tampa Bay Chamber ↗
              </a>
              <p className="text-[12px] text-white/40">North Tampa Bay, Chamber of Commerce</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/case-studies" className="text-[#18b5d8] text-[14px] font-semibold hover:underline">
              Read the full case studies &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">Ready to start</p>
          <h2 className="display-lg text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Let&rsquo;s get your business found by AI.
          </h2>
          <p className="lead-airy text-[#444] mb-10" style={{ textWrap: "balance" }}>
            Book a free discovery call. We&rsquo;ll run your free Visibility Audit, show you exactly where you&rsquo;re invisible, and walk you through what we&rsquo;d do to fix it, no commitment required.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#0a0a0a] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Book a Free Discovery Call
          </Link>
          <p className="text-[13px] text-[#888] mt-4">
            (727) 513-3955 &nbsp;&middot;&nbsp; info@sharkbrandingsolutions.com
          </p>
        </div>
      </section>
    </>
  );
}
