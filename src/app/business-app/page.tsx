import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Dashboard | Shark AI Solutions",
  description:
    "Your complete AI marketing dashboard. See reviews, rankings, campaigns, listings, and reports, all in one place, branded to your business.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/business-app",
  },
  openGraph: {
    title: "Client Dashboard | Shark AI Solutions",
    description:
      "One dashboard for everything, reputation, listings, campaigns, reporting, and AI tools. Built for local businesses that want to see real results.",
    url: "https://sharkbrandingsolutions.com/business-app",
  },
};

const CDN = "https://cdn-bjmjf.nitrocdn.com/gsSJVsHgkwexdOuGJbPveYehDehaVtlN/assets/images/optimized/rev-9db17f0/www.vendasta.com/wp-content/uploads/";

/* Tab showcase: 5 views from the app */
const tabs = [
  {
    label: "Overview",
    img: CDN + "2025/05/download-75-491x.webp",
    alt: "Business app overview dashboard showing key marketing metrics at a glance",
    w: 491, h: 427,
    desc: "See every marketing metric that matters, reviews, rankings, campaigns, traffic, and leads, all in a single view updated in real time.",
  },
  {
    label: "Reputation",
    img: CDN + "2025/05/download-77-491x.webp",
    alt: "Reputation management view showing review scores and response tracking",
    w: 491, h: 430,
    desc: "Monitor your star rating across Google, Facebook, and 50+ review sites. Respond to reviews, flag issues, and track your score over time.",
  },
  {
    label: "Listings",
    img: CDN + "2025/05/download-78-491x.webp",
    alt: "Listing management dashboard showing directory sync status and accuracy score",
    w: 491, h: 451,
    desc: "See which directories your business is listed on, where your NAP data is accurate, and get alerts when listings go out of sync.",
  },
  {
    label: "Social",
    img: CDN + "2025/05/download-79-491x.webp",
    alt: "Social media dashboard showing scheduled posts and engagement metrics",
    w: 491, h: 390,
    desc: "View upcoming posts, track engagement across platforms, and see which social content is driving the most reach and clicks.",
  },
  {
    label: "Reporting",
    img: CDN + "2025/05/download-81-491x.webp",
    alt: "Marketing performance reporting dashboard with automated monthly reports",
    w: 491, h: 408,
    desc: "Automated monthly reports delivered to your inbox. See what moved, what drove it, and where to focus next month.",
  },
];

/* Core feature rows */
const features = [
  {
    id: "reputation",
    h2: "Reputation Management, all your reviews, one place",
    body: "Your star rating is one of the first things customers see. Our dashboard pulls in reviews from Google, Facebook, Yelp, and dozens of industry-specific sites so you never miss a new review.\n\nAI-generated response suggestions let you reply to every review in seconds. Set up auto-responses for common review types, and get alerts the moment a negative review comes in so you can get ahead of it.",
    cta: { label: "Learn about reputation management", href: "/services" },
    img: CDN + "2025/09/Reputation-Management-Pro-img-491x.webp",
    alt: "Reputation Management Pro dashboard showing review scores, response tools, and multi-site monitoring",
    imgLeft: false,
    w: 491, h: 375,
  },
  {
    id: "engagement",
    h2: "Customer engagement that keeps people coming back",
    body: "Every interaction a customer has with your business is tracked in your dashboard. Messages, calls, emails, review replies, all visible in one place so nothing falls through the cracks.\n\nYour AI employees handle the front line: responding to inquiries, following up with leads, requesting reviews, and re-engaging past customers automatically. You see every conversation and can jump in at any time.",
    cta: { label: "Discover AI Employees", href: "/aiemployees" },
    img: CDN + "2025/09/Customer-engagement-491x.webp",
    alt: "Customer engagement interface showing unified inbox, conversation history, and AI response tools",
    imgLeft: true,
    w: 491, h: 283,
  },
  {
    id: "reporting",
    h2: "Automated reporting that proves your ROI",
    body: "At the end of every month, a full performance report hits your inbox automatically. Rankings, review growth, campaign performance, website traffic, listing accuracy, everything in one professional document.\n\nNo more chasing your agency for updates. Your dashboard shows real-time data 24/7, and monthly reports summarize what moved and why. You always know exactly what your marketing is doing.",
    cta: { label: "See reporting features", href: "/contact" },
    img: CDN + "2025/09/Automated-Reporting-img-491x.webp",
    alt: "Automated marketing reporting dashboard showing monthly performance summaries and trend charts",
    imgLeft: false,
    w: 491, h: 326,
  },
  {
    id: "marketplace",
    h2: "Add more tools as your business grows",
    body: "As your marketing needs evolve, your dashboard grows with you. Add advanced reputation tools, social media scheduling, digital advertising management, or additional AI employees, all from the same platform.\n\nNo new logins, no vendor switching, no data migration. Every product you add connects to your existing dashboard and reporting so everything stays in one place.",
    cta: { label: "View all services", href: "/services" },
    img: CDN + "2025/09/Marketplace-of-3rd-party-product-491x.webp",
    alt: "Product marketplace showing available marketing tools and services that can be added to the dashboard",
    imgLeft: true,
    w: 491, h: 349,
  },
];

/* What's inside the dashboard */
const tools = [
  { img: CDN + "2025/09/Reputation-Management-Pro-img-491x.webp", icon: CDN + "2025/04/Services-icon.png", title: "Reputation Management", body: "Reviews, ratings, and response tools across 50+ sites." },
  { img: CDN + "2025/04/Listing-management-1.png", icon: CDN + "2025/04/Listing-management-1.png", title: "Listing Management", body: "Directory sync, NAP accuracy, and listing health scores." },
  { img: CDN + "2025/04/Social-media-content.png", icon: CDN + "2025/04/Social-media-content.png", title: "Social Media", body: "Scheduled posts, engagement tracking, and content performance." },
  { img: CDN + "2025/03/Email-and-SMS-Marketing-Icon.png", icon: CDN + "2025/03/Email-and-SMS-Marketing-Icon.png", title: "Email & SMS Campaigns", body: "Automated sequences, broadcasts, and drip campaigns." },
  { img: CDN + "2025/04/Digital-advertising.png", icon: CDN + "2025/04/Digital-advertising.png", title: "Digital Advertising", body: "Google and Meta ad performance tracked alongside organic." },
  { img: CDN + "2025/04/web-design.webp", icon: CDN + "2025/04/web-design.webp", title: "Website Performance", body: "Traffic, conversions, and Core Web Vitals in one view." },
];

/* App screen mini-gallery */
const appScreens = [
  { img: CDN + "2025/05/download-82-491x.webp", alt: "Campaign performance view in business app", w: 491, h: 378 },
  { img: CDN + "2025/05/download-83-491x.webp", alt: "Lead and contact management view", w: 491, h: 323 },
  { img: CDN + "2025/05/download-84-491x.webp", alt: "Digital advertising performance view", w: 491, h: 360 },
  { img: CDN + "2025/05/download-86-491x.webp", alt: "Full monthly marketing report view", w: 491, h: 516 },
];

const testimonials = [
  {
    quote: "I used to have to ask for updates constantly. Now I just log in and everything I want to know is right there. It's the first time I've actually understood what my marketing was doing.",
    name: "Owner",
    company: "HVAC company, Tampa FL",
  },
  {
    quote: "Having all my reviews in one place changed how I manage my online reputation. I see a new review, I respond in 30 seconds. That's made a real difference.",
    name: "Operations Manager",
    company: "Auto shop, Wesley Chapel FL",
  },
  {
    quote: "The monthly report alone is worth it. I show it to my business partner and we can actually have a real conversation about what's working based on data, not gut feeling.",
    name: "Co-owner",
    company: "Med spa, Pasco County FL",
  },
];

export default function BusinessAppPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 mb-5">
              <Image
                src={CDN + "2025/09/Business-App-32x.webp"}
                alt="Business App"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="text-[#18b5d8] text-[13px] font-bold tracking-[2px] uppercase">Client Dashboard</span>
            </div>
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textWrap: "balance" }}>
              One place for everything your business needs to grow
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              Your branded AI marketing dashboard. See your reviews, rankings, campaigns, listings, and reports in real time, without having to ask your agency for an update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Book a free strategy call
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                View pricing
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="flex-1 min-w-0 w-full lg:max-w-[580px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src={CDN + "2025/09/Business-app-page-hero-1-567x.webp"}
                alt="Business app client dashboard showing marketing overview with reviews, rankings, and campaign performance"
                width={567}
                height={462}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TAB SHOWCASE ── */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-tight mb-4" style={{ textWrap: "balance" }}>
              Every view your business needs, all in one dashboard
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[540px] mx-auto">
              From your morning review check to your monthly performance review, your dashboard gives you a clear picture of what's happening across every channel.
            </p>
          </div>

          {/* Tab grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10 max-w-[900px] mx-auto">
            {tabs.map((t, i) => (
              <div
                key={t.label}
                className={`rounded-[12px] px-4 py-2.5 text-center text-[14px] font-bold border transition-colors duration-150 ${
                  i === 0
                    ? "bg-[#18b5d8] text-white border-[#18b5d8]"
                    : "bg-white text-[#6e6e73] border-[#e5e5ea]"
                }`}
              >
                {t.label}
              </div>
            ))}
          </div>

          {/* Showcase grid, all 5 visible as cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabs.map((t) => (
              <div key={t.label} className="bg-white rounded-[20px] border border-[#e5e5ea] overflow-hidden shadow-sm flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.alt}
                    width={t.w}
                    height={t.h}
                    className="w-full h-auto"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1">
                  <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-1">{t.label}</p>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE, tool grid ── */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight mb-4">
              Everything connected in one dashboard
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto">
              Every marketing tool and channel you use with Shark AI Solutions flows into your dashboard automatically. No spreadsheets. No report requests. Just data.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div key={t.title} className="bg-[#f5f5f7] rounded-[20px] border border-[#e5e5ea] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#e8f7fb] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={t.icon}
                    alt={t.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1d1d1f]">{t.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE ROWS ── */}
      <section className="py-4 border-b border-[#e5e5ea]">
        {features.map((f, idx) => (
          <div
            key={f.id}
            id={f.id}
            className={`max-w-[1200px] mx-auto px-6 py-16 flex flex-col ${
              f.imgLeft ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12 lg:gap-20 items-center ${
              idx < features.length - 1 ? "border-b border-[#e5e5ea]" : ""
            }`}
          >
            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2
                className="text-[26px] sm:text-[34px] font-extrabold text-[#1d1d1f] tracking-tight mb-5 leading-tight"
                style={{ textWrap: "balance" }}
              >
                {f.h2}
              </h2>
              {f.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-[16px] text-[#6e6e73] leading-relaxed mb-4">
                  {para}
                </p>
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

            {/* Image */}
            <div className="flex-1 min-w-0 w-full">
              <div className="relative rounded-[20px] overflow-hidden shadow-lg">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={f.w}
                  height={f.h}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── APP SCREEN GALLERY ── */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight mb-4">
              More of what you'll see inside
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto">
              Campaign results, lead data, advertising performance, and monthly summaries, all inside your branded dashboard.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {appScreens.map((s) => (
              <div key={s.alt} className="bg-white rounded-[16px] overflow-hidden border border-[#e5e5ea] shadow-sm">
                <Image
                  src={s.img}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-14">
            What clients say about having everything in one place
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

      {/* ── CTA ── */}
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
            Stop guessing. Start knowing exactly what your marketing is doing.
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            Book a 30-minute strategy call and we'll show you what your dashboard would look like, what data you'd be tracking, and what that would mean for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Book a free strategy call
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
