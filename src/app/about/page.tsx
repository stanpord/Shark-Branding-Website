import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Shark Branding Solutions",
  description:
    "Meet Michelle Stanaland, Founder and CEO of Shark Branding Solutions — Top 15 Marketing Expert in Tampa Bay.",
};

const values = [
  {
    title: "Clarity over complexity",
    body: "We translate AI and marketing into plain strategy. No jargon. No fluff. Just what moves the needle.",
  },
  {
    title: "Results, not reports",
    body: "We measure success by your ranking movement, visibility score, and the calls you receive — not activity metrics.",
  },
  {
    title: "Local first",
    body: "We're based in Wesley Chapel. We know Tampa Bay. We understand what local buyers want and how they search.",
  },
  {
    title: "Honest before anything",
    body: "Our free visibility report tells the truth — even if the truth is uncomfortable. That's where real progress starts.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white min-h-[50vh] flex items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            About Us
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-5">
            We make businesses
            <br />
            <span className="text-[#18b5d8]">impossible to ignore.</span>
          </h1>
          <p className="lead-airy text-[#333333]">
            Shark Branding Solutions was built on a simple belief: every great
            business deserves to be found — by the right people, at the right
            moment, on every platform.
          </p>
        </div>
      </section>

      {/* Michelle */}
      <section id="michelle" className="bg-white py-20 px-6">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-4">
            Leadership
          </p>
          <h2 className="display-lg text-[#1d1d1f] mb-6">
            Michelle Stanaland
          </h2>
          <p className="text-[21px] font-semibold text-[#7a7a7a] mb-8">
            Founder &amp; CEO
          </p>
          <div className="space-y-5">
            <p className="lead-airy text-[#333333]">
              Michelle Stanaland is a recognized marketing strategist and AI
              visibility expert serving businesses across Tampa Bay. In 2025, she
              was named one of the{" "}
              <strong className="font-semibold text-[#1d1d1f]">
                Top 15 Marketing Experts in Tampa Bay
              </strong>{" "}
              by Influence Digest — a recognition of her commitment to results
              over rhetoric.
            </p>
            <p className="lead-airy text-[#333333]">
              Before founding Shark Branding Solutions, Michelle observed a
              consistent pattern: talented, hardworking business owners were
              losing customers not because of their product or service, but
              because they couldn&rsquo;t be found. As AI search platforms
              changed how buyers discover businesses, the gap between
              visible and invisible grew wider — and she built a firm to close
              it.
            </p>
            <p className="lead-airy text-[#333333]">
              Based in Wesley Chapel, Michelle works directly with clients across
              Lutz, Land O&rsquo; Lakes, St. Petersburg, and the wider Tampa Bay
              area — bringing enterprise-level AI strategy to local businesses
              that deserve to compete.
            </p>
          </div>
          <div className="mt-10 inline-flex items-center gap-3 bg-[#f5f5f7] rounded-[11px] px-5 py-3">
            <span className="text-[#18b5d8] text-[20px]">&#9733;</span>
            <span className="text-[17px] font-semibold text-[#1d1d1f]">
              Top 15 Marketing Expert — Tampa Bay
            </span>
            <span className="text-[14px] text-[#7a7a7a]">
              Influence Digest, 2025
            </span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#07141a] py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase text-center mb-4">
            How We Work
          </p>
          <h2 className="display-lg text-white text-center mb-14">
            Principles we never compromise.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#091c24] rounded-[18px] p-8 border border-white/5"
              >
                <h3 className="text-[21px] font-semibold text-[#18b5d8] mb-3">
                  {v.title}
                </h3>
                <p className="body-copy text-[#cccccc]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-4">
            Where We Serve
          </p>
          <h2 className="display-lg text-[#1d1d1f] mb-5">
            Rooted in Tampa Bay.
          </h2>
          <p className="lead-airy text-[#333333] mb-8">
            We serve businesses across Wesley Chapel, Lutz, Land O&rsquo;
            Lakes, St. Petersburg, and the broader Tampa Bay region — in person
            and virtually.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Wesley Chapel",
              "Lutz",
              "Land O\u2019 Lakes",
              "St. Petersburg",
              "Tampa",
              "Virtual",
            ].map((city) => (
              <span
                key={city}
                className="bg-white border border-[#e0e0e0] rounded-full px-4 py-2 text-[14px] text-[#333333] font-semibold"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#18b5d8] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-black mb-5">Ready to work together?</h2>
          <p className="lead-airy text-black/65 mb-10">
            Start with a free visibility report or reach out directly.
            We&rsquo;ll make it simple.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-black text-white text-[18px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-white hover:text-black transition-colors duration-150"
            >
              Get Free Report
            </Link>
            <a
              href="tel:+17278556505"
              className="btn-press inline-block text-black text-[17px] border-2 border-black rounded-full px-[22px] py-[11px] hover:bg-black hover:text-white transition-colors duration-150"
            >
              (727) 855-6505
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
