import Link from "next/link";
import HackathonBanner from "@/components/HackathonBanner";

const services = [
  {
    n: "01",
    title: "AI Business Consulting",
    body: "Your customers are asking AI for recommendations — not just Google. We make sure Perplexity, ChatGPT, and Google AI Overviews answer with your name.",
    href: "/services#ai-visibility",
  },
  {
    n: "02",
    title: "AI Visibility Toolkit",
    body: "A structured framework to fix every visibility gap: search signals, trust indicators, listing accuracy, and AI readiness — all in one system.",
    href: "/services#toolkit",
  },
  {
    n: "03",
    title: "Workshops & Training",
    body: "Equip your team or chamber organization with the modern buyer discovery knowledge that changes how you compete.",
    href: "/services#workshops",
  },
  {
    n: "04",
    title: "Free Visibility Report",
    body: "See exactly how your business appears across search, maps, reviews, and AI platforms — delivered in 48 hours, no strings attached.",
    href: "/services#report",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[100svh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            AI Business Consulting
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Get Found. Get Trusted.
            <br />
            <span className="text-[#18b5d8]">Get Chosen.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[560px] mx-auto mb-12" style={{ textWrap: "balance" }}>
            AI Business Consulting that makes your company run better, grow faster, and stay visible — even when you&rsquo;re not there.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press bg-[#0a0a0a] text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get Free Visibility Report
            </Link>
            <Link
              href="/services"
              className="btn-press text-[#1d1d1f] text-[17px] border border-[#d2d2d7] rounded-full px-[28px] py-[14px] hover:border-[#0a0a0a] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hackathon banner ── */}
      <HackathonBanner />

      {/* ── Services ── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">What We Do</p>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              AI solutions for forward-thinking businesses.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-[#07141a] rounded-[20px] p-8 border border-white/5 hover:border-[#18b5d8]/30 motion-safe:transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
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

      {/* ── Testimonial ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-10">Client Story</p>
          <blockquote className="display-md text-[#0a0a0a] mb-10 leading-relaxed" style={{ textWrap: "balance" }}>
            &ldquo;They completely transformed how our business shows up online&hellip; we&rsquo;re now showing up on AI search platforms, where before we were basically invisible.&rdquo;
          </blockquote>
          <div className="w-10 h-px bg-[#18b5d8] mx-auto mb-6" aria-hidden="true" />
          <p className="text-[17px] font-semibold text-[#1d1d1f]">Jonathan Tuttle</p>
          <p className="text-[14px] text-[#7a7a7a] mt-1">Drywall Company Owner &mdash; Pinellas County, FL</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Find out now</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Is your business invisible to AI?
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            Find out in 48 hours — completely free. We&rsquo;ll show you exactly where you stand across search, maps, and AI platforms.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[18px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
