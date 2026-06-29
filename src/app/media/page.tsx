import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press Coverage & Media | Shark AI Solutions",
  description:
    "Press coverage, broadcast features, and media appearances from Shark AI Solutions. Featured on WFLA News Channel 8, Tampa Bay Times, iHeart Radio, Spotify, AIthority, Bay News 9, St. Pete Catalyst, and 173 total outlets.",
  alternates: { canonical: "https://sharkbrandingsolutions.com/media" },
};

const featuredLogos = [
  { name: "INC.", src: "/press-logos/inc.svg", width: 80, height: 30, href: "https://www.inc.com/" },
  { name: "TechNewsWorld", src: "/press-logos/technewsworld.png", width: 160, height: 52, href: "https://www.technewsworld.com/story/study-finds-most-restaurants-missing-from-ai-recommendations-180396.html" },
  { name: "AIthority", src: "/press-logos/aithority.png", width: 120, height: 36, href: "https://aithority.com/machine-learning/shark-branding-solutions-launches-shark-ai-hackathon-to-build-the-future-of-human-first-ai-employees/" },
  { name: "Bay News 9", src: "/press-logos/baynews9.png", width: 70, height: 70, href: "https://baynews9.com/fl/tampa/events/2026/05/26/shark_ai_hackathon" },
  { name: "WFLA News Channel 8", src: "/press-logos/wfla.png", width: 130, height: 65, href: "https://www.wfla.com" },
  { name: "Tampa Bay Times", src: "/press-logos/tampabay-times.png", width: 150, height: 56, href: "https://www.tampabay.com" },
  { name: "Neighborhood News", src: "/press-logos/neighborhoodnews-pdf.png", width: 150, height: 44, href: "https://neighborhoodnewsonline.net/tag/michelle-stanaland/" },
  { name: "St. Pete Catalyst", src: "/press-logos/stpetecatalyst.png", width: 130, height: 40, href: "https://stpetecatalyst.com/w/shark-branding-solutions-hosted-the-shark-ai-hackathon-an-interactive-innovation-event-where-business-leaders-community-partners-and-invited-guests-helped-test-challenge-and-shape-the-next-genera/" },
];

const broadcastLogos = [
  { name: "Spotify", src: "/press-logos/spotify.png", type: "Podcast" },
  { name: "Apple Podcasts", src: "/press-logos/apple-podcasts.png", type: "Podcast" },
  { name: "Google Podcasts", src: "/press-logos/google-podcasts.png", type: "Podcast" },
  { name: "YouTube TV", src: "/press-logos/youtube-tv.png", type: "Streaming" },
  { name: "Roku", src: "/press-logos/roku.png", type: "Streaming" },
  { name: "Fire TV", src: "/press-logos/firetv.png", type: "Streaming" },
  { name: "Apple TV", src: "/press-logos/apple-tv.png", type: "Streaming" },
  { name: "AM 860", src: "/press-logos/am860.png", type: "Radio" },
];

const broadcastText = [
  { name: "iHeart Radio", type: "Radio / Podcast" },
  { name: "102.5 The Bone", type: "Radio" },
  { name: "Binge Networks", type: "Streaming" },
];

const editorial = [
  {
    outlet: "INC.",
    outletTag: "Expert Quote",
    headline: "We Stress-Tested a Startup Idea With AI. Here's What Claude and ChatGPT Got Right — and Wrong.",
    excerpt:
      "Michelle Stanaland of Shark AI Solutions is quoted in INC. magazine on how AI tools like Claude and ChatGPT can help founders stress-test business ideas, and where human judgment still matters most.",
    href: "https://www.inc.com/diana-bocco/ai-claude-chatgpt-stress-test-startup-idea/91363659",
  },
  {
    outlet: "TechNewsWorld",
    outletTag: "Expert Quote",
    headline: "Study Finds Most Restaurants Missing From AI Recommendations",
    excerpt:
      "Josh Stanaland, CTO of Shark Branding Solutions, is quoted explaining why traditional SEO investments don't translate to AI visibility. \"AI search rewards structured, machine-readable content,\" Josh told TechNewsWorld. \"Most restaurant websites have none of that. So the AI ignores them, regardless of how many reviews they have.\"",
    href: "https://www.technewsworld.com/story/study-finds-most-restaurants-missing-from-ai-recommendations-180396.html",
  },
  {
    outlet: "AIthority",
    outletTag: "Press Coverage",
    headline: "Shark Branding Solutions Launches Shark AI Hackathon to Build the Future of Human-First AI Employees",
    excerpt:
      "AIthority covers the launch of the Shark AI Hackathon, highlighting Shark Branding Solutions' mission to build the next generation of human-first AI employees for real businesses.",
    href: "https://aithority.com/machine-learning/shark-branding-solutions-launches-shark-ai-hackathon-to-build-the-future-of-human-first-ai-employees/",
  },
  {
    outlet: "Bay News 9",
    outletTag: "Event Feature",
    headline: "Shark AI Hackathon, Tampa Bay Event",
    excerpt:
      "Bay News 9 listed the Shark AI Hackathon as a featured Tampa Bay area event, bringing together business leaders and community partners to shape the future of AI employees for local businesses.",
    href: "https://baynews9.com/fl/tampa/events/2026/05/26/shark_ai_hackathon",
  },
  {
    outlet: "St. Pete Catalyst",
    outletTag: "Event Coverage",
    headline: "Shark AI Hackathon Aims to Build Human-First AI Employees",
    excerpt:
      "Shark Branding Solutions hosted the Shark AI Hackathon, an interactive innovation event where business leaders, community partners, and invited guests helped test, challenge, and shape the next generation of AI employees built for real businesses.",
    href: "https://stpetecatalyst.com/w/shark-branding-solutions-hosted-the-shark-ai-hackathon-an-interactive-innovation-event-where-business-leaders-community-partners-and-invited-guests-helped-test-challenge-and-shape-the-next-genera/",
  },
  {
    outlet: "IT Tech Pulse",
    outletTag: "Event Coverage",
    headline: "Shark AI Hackathon Aims to Build Human-First AI Employees",
    excerpt:
      "IT Tech Pulse features the Shark AI Hackathon and Shark Branding Solutions' mission to build AI employees that put human connection at the center of business automation.",
    href: "https://ittech-pulse.com/news/shark-ai-hackathon-aims-to-build-human-first-ai-employees/",
  },
  {
    outlet: "Neighborhood News",
    outletTag: "Ongoing Coverage",
    headline: "Michelle Stanaland, Neighborhood News",
    excerpt:
      "Neighborhood News features ongoing coverage of Michelle Stanaland and Shark AI Solutions, documenting the firm's growth and impact across the Tampa Bay business community.",
    href: "https://neighborhoodnewsonline.net/tag/michelle-stanaland/",
  },
];



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
          <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-[520px] mx-auto mb-10">
            Press coverage, broadcast features, and media appearances from the team building the future of AI visibility and AI employees for service businesses.
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-[#e5e5ea] rounded-full px-6 py-3 shadow-sm">
            <span className="text-[28px] font-extrabold text-[#18b5d8] leading-none">173</span>
            <span className="text-[14px] text-[#6e6e73] font-medium">total press placements</span>
          </div>
        </div>
      </section>

      {/* As Seen In, logos */}
      <section className="border-b border-[#e5e5ea] py-12 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-center text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-10">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {featuredLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className="flex items-center justify-center opacity-60 hover:opacity-100 motion-safe:transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-12 w-auto"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial coverage grid */}
      <section className="py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-10">
            Editorial Coverage
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorial.map((m) => (
              <a
                key={m.href}
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
                <h3
                  className="text-[16px] font-bold text-[#1d1d1f] leading-snug mb-3 group-hover:text-[#18b5d8] motion-safe:transition-colors"
                  style={{ textWrap: "balance" }}
                >
                  {m.headline}
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">{m.excerpt}</p>
              </a>
            ))}

            {/* Press inquiry card */}
            <div className="border border-dashed border-[#d2d2d7] rounded-[20px] p-7 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-4">
                  Press Inquiries
                </p>
                <h3 className="text-[16px] font-bold text-[#1d1d1f] leading-snug mb-3">
                  Working on a story? We would love to help.
                </h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                  Michelle and Josh are available for interviews, expert commentary, and speaking engagements on AI visibility, AI automation, and the future of AI for local businesses.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[#18b5d8] text-[13px] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Broadcast & Podcast */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#86868b] mb-3">
            Broadcast &amp; Podcast
          </p>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#1d1d1f] mb-3">
            On air, on screen, on demand.
          </h2>
          <p className="text-[#6e6e73] text-[16px] mb-10 max-w-[520px]">
            Shark AI Solutions and Michelle Stanaland have been featured across TV, radio, and podcast platforms reaching the greater Tampa Bay area and beyond.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {broadcastLogos.map((b) => (
              <div
                key={b.name}
                className="bg-white border border-[#e5e5ea] rounded-[16px] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#18b5d8] motion-safe:transition-colors"
              >
                <Image
                  src={b.src}
                  alt={b.name}
                  width={100}
                  height={50}
                  className="object-contain max-h-10 w-auto"
                  unoptimized
                />
                <span className="text-[11px] text-[#86868b] font-medium text-center">{b.type}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {broadcastText.map((b) => (
              <div
                key={b.name}
                className="bg-white border border-[#e5e5ea] rounded-full px-5 py-2.5 flex items-center gap-2"
              >
                <span className="text-[13px] font-semibold text-[#1d1d1f]">{b.name}</span>
                <span className="text-[11px] text-[#86868b] font-medium">{b.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e5e5ea] py-20 px-6 text-center">
        <div className="max-w-[540px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">
            Work With Us
          </p>
          <h2
            className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] leading-tight mb-5"
            style={{ textWrap: "balance" }}
          >
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
