import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Local SEO Services | Shark Branding Solutions",
  description:
    "Dominate local search with AI-powered local SEO. From listing management to geolocation rank tracking, we help your business get found by the right customers at the right time.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/local-seo",
  },
  openGraph: {
    title: "Local SEO Services | Shark Branding Solutions",
    description:
      "Dominate local search with AI-powered local SEO. Listing management, NAP citations, rank tracking, and reporting — all in one place.",
    url: "https://sharkbrandingsolutions.com/local-seo",
  },
};

const CDN = "https://cdn-bjmjf.nitrocdn.com/gsSJVsHgkwexdOuGJbPveYehDehaVtlN/assets/images/optimized/rev-9db17f0/www.vendasta.com/wp-content/uploads/";

const features = [
  {
    id: "platform",
    h2: "An all-in-one local SEO platform built for results",
    body: "Stop juggling tools. Our local SEO platform brings together listing management, citation building, rank tracking, and performance reporting in one clean dashboard, so your team can focus on execution instead of coordination.\n\nEvery tool is connected. Every update is reflected in real time across the directories, data aggregators, and AI knowledge graphs that drive local search rankings.",
    cta: { label: "Explore our platform", href: "/services" },
    img: CDN + "2025/08/all-in-one-local-seo-platform-492x.webp",
    alt: "All-in-one local SEO platform dashboard",
    imgLeft: false,
    width: 492,
    height: 348,
  },
  {
    id: "nap",
    h2: "Boost online visibility with NAP citations",
    body: "Consistent Name, Address, and Phone data across every directory is the foundation of local search. Our platform automatically syncs your business information to hundreds of directories and data aggregators, eliminating conflicting listings that confuse search engines and customers alike.\n\nWhen your NAP data is airtight, you rank higher, earn more trust, and show up in more local results, including AI-powered answers in ChatGPT, Gemini, and Google SGE.",
    cta: { label: "Learn about listing management", href: "/services" },
    img: CDN + "2025/08/boost-online-visibility-with-nap-citations-492x.webp",
    alt: "NAP citation consistency dashboard showing listing accuracy across directories",
    imgLeft: true,
    width: 492,
    height: 380,
  },
  {
    id: "listings",
    h2: "Effortless listing management across every directory",
    body: "Update once, publish everywhere. Whether you're changing your hours, adding a new location, or refreshing your photos, our listing management tool pushes your changes to all major directories instantly.\n\nNo more manually logging into Google Business Profile, Yelp, Apple Maps, Bing, and dozens of others. One source of truth. Every directory stays current.",
    cta: { label: "See how it works", href: "/contact" },
    img: CDN + "2025/08/effortless-listing-management-492x.webp",
    alt: "Effortless listing management showing multi-directory publishing",
    imgLeft: false,
    width: 492,
    height: 377,
  },
  {
    id: "rank",
    h2: "In-depth geolocation rank tracking",
    body: "See exactly where you rank across your service area with hyperlocal rank tracking. Our grid-based geolocation reports show your Google Maps position at dozens of points around your business, so you can see where you're winning and where there's room to grow.\n\nTrack keyword rankings by location, monitor movement over time, and benchmark against competitors, all in a report your clients or team can actually understand.",
    cta: { label: "Try rank tracking", href: "/free-report" },
    img: CDN + "2025/08/indepth-geolocation-rank-492x.webp",
    alt: "Geolocation rank tracking grid showing local map search positions",
    imgLeft: true,
    width: 492,
    height: 366,
  },
  {
    id: "reporting",
    h2: "Seamless local SEO reporting",
    body: "Prove your value with automated, white-label reports that show clients exactly what's moving and why. Track impressions, clicks, keyword rankings, listing accuracy, and review growth all in one place.\n\nReports are scheduled automatically and delivered to inboxes, so no one has to chase down performance data at the end of the month.",
    cta: { label: "See reporting features", href: "/contact" },
    img: CDN + "2025/08/seamless-local-seo-reporting-492x.webp",
    alt: "Local SEO reporting dashboard showing keyword rankings and performance",
    imgLeft: false,
    width: 492,
    height: 441,
  },
];

const stats = [
  { value: "3x", label: "More map pack appearances after listing cleanup" },
  { value: "87%", label: "Of local searches result in an in-store visit within 24 hours" },
  { value: "500+", label: "Directories and data aggregators updated automatically" },
];

const testimonials = [
  {
    quote: "Our Google Maps rankings jumped within 60 days. The listing cleanup alone made a visible difference in how many calls we were getting from search.",
    name: "Operations Manager",
    company: "HVAC service company, Tampa FL",
  },
  {
    quote: "The rank tracking grid is what sold us. Seeing exactly where we stood across our whole service area, down to the block level, was eye-opening.",
    name: "Owner",
    company: "Law firm, Wesley Chapel FL",
  },
  {
    quote: "We used to update our hours manually on five different platforms. Now it's one click and everything stays current. That alone saved us hours every month.",
    name: "Marketing Director",
    company: "Multi-location medical practice",
  },
];

export default function LocalSeoPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[#18b5d8] text-[13px] font-bold tracking-[2px] uppercase mb-5">
              Local SEO
            </span>
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textWrap: "balance" }}>
              Get found locally. Rank higher. Win more customers.
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              AI-powered local SEO that manages your listings, builds citations, tracks your map rankings, and proves ROI, all without the complexity of managing it yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-report"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Get a free local SEO report
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Book a strategy call
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-0 w-full lg:max-w-[560px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src={CDN + "2025/06/local-SEO-AI-Banner-image-582x.webp"}
                alt="Local SEO AI platform dashboard showing search visibility and ranking improvements"
                width={582}
                height={541}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1000px] mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-[48px] font-extrabold text-[#18b5d8] leading-none mb-2">{s.value}</p>
              <p className="text-[15px] text-[#6e6e73] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section className="py-4 border-b border-[#e5e5ea]">
        {features.map((f, idx) => (
          <div
            key={f.id}
            id={f.id}
            className={`max-w-[1200px] mx-auto px-6 py-16 flex flex-col ${f.imgLeft ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center ${idx < features.length - 1 ? "border-b border-[#e5e5ea]" : ""}`}
          >
            <div className="flex-1 min-w-0">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1d1d1f] tracking-tight mb-5 leading-tight" style={{ textWrap: "balance" }}>
                {f.h2}
              </h2>
              {f.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-[16px] text-[#6e6e73] leading-relaxed mb-4">{para}</p>
              ))}
              <Link
                href={f.cta.href}
                className="inline-flex items-center gap-1 text-[#18b5d8] font-semibold text-[15px] hover:underline mt-2"
              >
                {f.cta.label}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="flex-1 min-w-0 w-full">
              <div className="relative rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MAP SCREENSHOTS — side by side */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-tight mb-4">
              See your rankings, anywhere in your market
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[560px] mx-auto">
              Visualize your Google Maps presence across your entire service area with heat-map style rank grids that show exactly where you show up and where you don't.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-[880px] mx-auto">
            <div className="rounded-[20px] overflow-hidden shadow-lg bg-white">
              <Image
                src={CDN + "2025/08/mobile-Your-current-rank-tracker-Local-SEO-map-image.webp"}
                alt="Local SEO rank tracker showing Google Maps position grid for current rankings"
                width={626}
                height={626}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg bg-white">
              <Image
                src={CDN + "2025/08/mobile-Vendastaa__s-White-label-Local-SEO-software-local-SEO-map-image-e1754080179655-645x551.webp"}
                alt="White-label local SEO map image showing geolocation ranking across a service area"
                width={645}
                height={551}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-14">
            What our clients say about local SEO results
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#f5f5f7] rounded-[20px] border border-[#e5e5ea] p-8 flex flex-col gap-5"
              >
                <svg viewBox="0 0 32 24" className="w-8 h-6 text-[#18b5d8] flex-shrink-0" fill="currentColor">
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6 6.4 9.6H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6 26.4 9.6H32V24H20z" />
                </svg>
                <p className="text-[15px] text-[#1d1d1f] leading-relaxed flex-1 italic">{t.quote}</p>
                <div>
                  <p className="text-[14px] font-bold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-[13px] text-[#86868b]">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#07141a] py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 35% 55%, #18b5d8 0%, transparent 55%)" }}
        />
        <div className="max-w-[760px] mx-auto text-center relative">
          <h2
            className="text-[32px] sm:text-[46px] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            style={{ textWrap: "balance" }}
          >
            Ready to own your local market?
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            Get a free local SEO report that shows exactly where you rank, where your listings have errors, and what it would take to outrank your top competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-report"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Get my free report
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Book a strategy call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
