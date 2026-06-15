import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media & News — Shark AI Solutions Press Coverage",
  description:
    "Press coverage, news features, and media appearances from Shark AI Solutions and Shark Branding Solutions. Featured in PR Newswire, St. Pete Catalyst, Neighborhood News, and more.",
  alternates: { canonical: "https://sharkbrandingsolutions.com/media" },
};

const mentions = [
  {
    outlet: "PR Newswire",
    outletTag: "Press Release",
    headline: "Shark Branding Solutions Launches Shark AI Hackathon to Build the Future of Human-First AI Employees",
    excerpt:
      "Shark Branding Solutions announced the launch of its Shark AI Hackathon, an interactive innovation event designed to test, challenge, and shape the next generation of AI employees built for real businesses.",
    href: "https://www.prnewswire.com",
    featured: true,
  },
  {
    outlet: "St. Pete Catalyst",
    outletTag: "Event Coverage",
    headline: "Shark AI Hackathon Aims to Build Human-First AI Employees",
    excerpt:
      "Shark Branding Solutions hosted the Shark AI Hackathon, an interactive innovation event where business leaders, community partners, and invited guests helped test, challenge, and shape the next generation of AI employees built for real businesses.",
    href: "https://stpetecatalyst.com",
    featured: false,
  },
  {
    outlet: "Neighborhood News",
    outletTag: "Ongoing Coverage",
    headline: "Michelle Stanaland — Neighborhood News",
    excerpt:
      "Neighborhood News features ongoing coverage of Michelle Stanaland and Shark AI Solutions, documenting the firm's growth and impact across the Tampa Bay business community.",
    href: "https://neighborhoodnewsfl.com",
    featured: false,
  },
];

const outlets = ["PR Newswire", "St. Pete Catalyst", "Neighborhood News"];

export default function MediaPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#f5f5f7] pt-28 pb-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">
            Media &amp; Press
          </p>
          <h1
            className="text-[38px] sm:text-[52px] lg:text-[60px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-6"
            style={{ textWrap: "balance" }}
          >
            Shark AI Solutions
            <br />
            <span className="text-[#18b5d8]">in the news.</span>
          </h1>
          <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-[520px] mx-auto">
            Press coverage, event features, and media appearances from the team building the future of AI visibility and AI employees for service businesses.
          </p>
        </div>
      </section>

      {/* As Seen In bar */}
      <section className="border-b border-[#e5e5ea] py-10 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-center text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {outlets.map((o) => (
              <span
                key={o}
                className="text-[15px] font-bold text-[#6e6e73] tracking-tight"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {mentions.filter((m) => m.featured).map((m) => (
        <section key={m.headline} className="bg-[#0a0a0a] py-16 px-6">
          <div className="max-w-[820px] mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8]">
                {m.outlet}
              </span>
              <span className="w-px h-4 bg-[#333]" />
              <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#555]">
                {m.outletTag}
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[34px] font-extrabold text-white leading-tight mb-5" style={{ textWrap: "balance" }}>
              {m.headline}
            </h2>
            <p className="text-[#aaa] text-[17px] leading-relaxed mb-8 max-w-[640px]">
              {m.excerpt}
            </p>
            <a
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#18b5d8] text-white text-[14px] font-semibold rounded-full px-6 py-3 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              Read on PR Newswire
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>
      ))}

      {/* Press cards grid */}
      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-10">
            Coverage
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mentions.filter((m) => !m.featured).map((m) => (
              <a
                key={m.headline}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#e5e5ea] rounded-[20px] p-7 hover:border-[#18b5d8] hover:shadow-sm motion-safe:transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8]">
                    {m.outlet}
                  </span>
                  <span className="w-px h-3 bg-[#d2d2d7]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#86868b]">
                    {m.outletTag}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1d1d1f] leading-snug mb-3 group-hover:text-[#18b5d8] motion-safe:transition-colors" style={{ textWrap: "balance" }}>
                  {m.headline}
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  {m.excerpt}
                </p>
              </a>
            ))}

            {/* Media inquiry card */}
            <div className="border border-dashed border-[#d2d2d7] rounded-[20px] p-7 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-4">
                  Press Inquiries
                </p>
                <h3 className="text-[17px] font-bold text-[#1d1d1f] leading-snug mb-3">
                  Working on a story? We would love to help.
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  Michelle and Josh are available for interviews, expert commentary, and speaking engagements on AI visibility, AI automation, and the future of AI for local businesses.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[#18b5d8] text-[14px] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-20 px-6 text-center">
        <div className="max-w-[540px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">
            Work With Us
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] leading-tight mb-5" style={{ textWrap: "balance" }}>
            Ready to get your business found by AI?
          </h2>
          <Link
            href="/free-report"
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white text-[15px] font-semibold rounded-full px-7 py-4 hover:bg-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </section>

    </div>
  );
}
