import Link from "next/link";

const stats = [
  { value: "#2", label: "Google ranking in 30 days", sub: "from #32" },
  { value: "583", label: "Listing score", sub: "up from 64" },
  { value: "48h", label: "Free report turnaround", sub: "" },
  { value: "30", label: "Days to measurable ranking movement", sub: "days" },
];

const services = [
  {
    title: "AI Business Consulting",
    body:
      "Your customers are asking AI for recommendations — not just Google. We make sure Perplexity, ChatGPT, and Google AI Overviews answer with your name.",
    href: "/services#ai-visibility",
  },
  {
    title: "AI Visibility Toolkit",
    body:
      "A structured framework to fix every visibility gap: search signals, trust indicators, listing accuracy, and AI readiness — all in one system.",
    href: "/services#toolkit",
  },
  {
    title: "Workshops & Training",
    body:
      "Equip your team or chamber organization with the modern buyer discovery knowledge that changes how you compete.",
    href: "/services#workshops",
  },
  {
    title: "Free Visibility Report",
    body:
      "See exactly how your business appears across search, maps, reviews, and AI platforms — delivered in 48 hours, no strings attached.",
    href: "/services#report",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero tile ── */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-6">
            AI Business Consulting
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{textWrap:"balance"}}>
            Get Found. Get Trusted.
            <br />
            <span className="text-[#18b5d8]">Get Chosen.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[560px] mx-auto mb-10">
            AI Business Consulting that makes your company run better, grow
            faster, and stay visible — even when you&rsquo;re not there.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press bg-black text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get Free Visibility Report
            </Link>
            <Link
              href="/services"
              className="btn-press text-[#1d1d1f] text-[17px] border-2 border-black rounded-full px-[22px] py-[11px] hover:bg-black hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats — light tile ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <h2 className="display-md text-[#1d1d1f] text-center mb-14" style={{textWrap:"balance"}}>
            Results that speak louder than promises.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-[56px] font-semibold leading-none tracking-tight text-[#18b5d8] mb-2">
                  {s.value}
                </p>
                <p className="text-[17px] text-[#1d1d1f] leading-snug">
                  {s.label}
                </p>
                {s.sub && (
                  <p className="text-[14px] text-[#7a7a7a] mt-1">{s.sub}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — dark tile ── */}
      <section className="bg-[#07141a] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase text-center mb-4">
            What We Do
          </p>
          <h2 className="display-lg text-white text-center mb-14" style={{textWrap:"balance"}}>
            AI solutions for forward-thinking businesses.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-[#091c24] rounded-[18px] p-8 border border-white/5 hover:border-[#18b5d8]/40 transition-colors duration-200"
              >
                <h3 className="text-[21px] font-semibold text-white mb-3 group-hover:text-[#18b5d8] transition-colors duration-150">
                  {s.title}
                </h3>
                <p className="body-copy text-[#cccccc]">{s.body}</p>
                <span className="inline-block mt-5 text-[#18b5d8] text-[14px] font-semibold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial — parchment ── */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-8">
            Client Story
          </p>
          <blockquote className="display-md text-[#1d1d1f] mb-8 leading-relaxed">
            &ldquo;They completely transformed how our business shows up
            online&hellip; we&rsquo;re now showing up on AI search platforms,
            where before we were basically invisible.&rdquo;
          </blockquote>
          <p className="text-[17px] font-semibold text-[#1d1d1f]">
            Jonathan Tuttle
          </p>
          <p className="text-[14px] text-[#7a7a7a]">
            Drywall Company Owner &mdash; Pinellas County, FL
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#18b5d8] py-24 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="display-lg text-black mb-5" style={{textWrap:"balance"}}>
            Is your business invisible to AI?
          </h2>
          <p className="lead-airy text-black/65 mb-10">
            Find out in 48 hours — completely free. We&rsquo;ll show you exactly
            where you stand across search, maps, and AI platforms.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-black text-white text-[18px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Get My Free Report
          </Link>
        </div>
      </section>
    </>
  );
}
