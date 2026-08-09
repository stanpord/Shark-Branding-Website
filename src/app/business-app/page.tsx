import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Dashboard | Shark AI Solutions",
  description:
    "Your complete AI marketing dashboard. See reviews, rankings, campaigns, listings, and reports, all in one place, branded to your business.",
  alternates: {
    canonical: "https://shark-ai-solutions.com/business-app",
  },
  openGraph: {
    title: "Client Dashboard | Shark AI Solutions",
    description:
      "One dashboard for everything, reputation, listings, campaigns, reporting, and AI tools. Built for local businesses that want to see real results.",
    url: "https://shark-ai-solutions.com/business-app",
  },
};

/* ── CSS mockups for feature rows ── */
function ReputationMockup() {
  const reviews = [
    { name: "Mike T.", stars: 5, time: "2 days ago", text: "Best HVAC service I've ever had. Showed up on time and fixed it in 20 minutes.", replied: true },
    { name: "Sarah M.", stars: 5, time: "5 days ago", text: "Incredibly professional. The whole team was friendly and efficient.", replied: false },
    { name: "James R.", stars: 4, time: "1 week ago", text: "Good work overall. Would definitely use again.", replied: false },
  ]
  return (
    <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] overflow-hidden">
      <div className="bg-white px-5 py-3.5 border-b border-[#e5e5ea] flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#1d1d1f]">Review inbox</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-[#18b5d8]/10 text-[#18b5d8] font-semibold px-2 py-0.5 rounded-full">4.9★ avg</span>
          <span className="text-[10px] text-[#6e6e73]">across 6 platforms</span>
        </div>
      </div>
      {reviews.map((r) => (
        <div key={r.name} className="bg-white border-b border-[#f0f0f0] last:border-0 px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[12px] font-semibold text-[#1d1d1f]">{r.name}</span>
                <span className="text-[10px] text-[#86868b]">{r.time}</span>
              </div>
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(r.stars)].map((_, i) => <span key={i} className="text-[10px] text-[#f59e0b]">★</span>)}
              </div>
              <p className="text-[12px] text-[#6e6e73] leading-relaxed line-clamp-2">{r.text}</p>
            </div>
            {r.replied ? (
              <span className="text-[9px] font-bold bg-[#18b5d8]/10 text-[#18b5d8] px-2 py-0.5 rounded-full shrink-0">Replied</span>
            ) : (
              <button className="text-[9px] font-bold bg-[#1d1d1f] text-white px-2.5 py-1 rounded-full shrink-0">Reply with AI</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function EngagementMockup() {
  const messages = [
    { from: "Alex P.", channel: "SMS", time: "9:41 AM", text: "Hi, what are your weekend hours?", unread: true },
    { from: "Linda S.", channel: "Email", time: "9:18 AM", text: "Following up on my quote from last week", unread: true },
    { from: "Tom B.", channel: "Google", time: "Yesterday", text: "Left a 5-star review", unread: false },
    { from: "Rosa M.", channel: "SMS", time: "Yesterday", text: "Can I reschedule my Tuesday appointment?", unread: false },
  ]
  return (
    <div className="rounded-2xl bg-[#0a1a22] border border-white/10 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-white/[0.06] flex items-center gap-2">
        <span className="text-[11px] font-bold text-white/60">Unified inbox</span>
        <span className="ml-auto text-[11px] bg-[#18b5d8]/15 text-[#18b5d8] font-semibold px-2 py-0.5 rounded-full">2 unread</span>
      </div>
      {messages.map((m) => (
        <div key={m.from} className={`px-5 py-3.5 border-b border-white/[0.04] last:border-0 flex items-start gap-3 ${m.unread ? "" : "opacity-50"}`}>
          <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-[11px] font-bold text-white/60 shrink-0">
            {m.from[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[12px] font-semibold text-white truncate">{m.from}</span>
              <span className="text-[9px] font-semibold text-[#18b5d8] bg-[#18b5d8]/10 px-1.5 py-0.5 rounded shrink-0">{m.channel}</span>
              <span className="text-[10px] text-white/25 ml-auto shrink-0">{m.time}</span>
            </div>
            <p className="text-[11px] text-white/40 truncate">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ReportingMockup() {
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"]
  const values = [42, 55, 63, 59, 71, 86]
  const max = 100
  return (
    <div className="space-y-3">
      <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px] font-bold text-[#1d1d1f]">Marketing performance</p>
          <span className="text-[11px] font-bold text-[#18b5d8]">Aug 2026</span>
        </div>
        <div className="flex items-end gap-1.5 h-20 mb-3">
          {months.map((m, i) => (
            <div key={m} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t"
                style={{
                  height: `${(values[i] / max) * 100}%`,
                  background: i === months.length - 1 ? "#18b5d8" : "#d1e8ee",
                }}
              />
              <p className="text-[8px] text-[#86868b]">{m}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "+23", l: "New reviews" },
          { v: "4.9★", l: "Avg rating" },
          { v: "+14%", l: "Website traffic" },
        ].map((m) => (
          <div key={m.l} className="rounded-xl bg-white border border-[#e5e5ea] p-3 text-center">
            <p className="text-[14px] font-bold text-[#1d1d1f]">{m.v}</p>
            <p className="text-[9px] text-[#86868b] mt-0.5">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketplaceMockup() {
  const tools = [
    { name: "AI Voice Receptionist", status: "active", desc: "Answers calls 24/7" },
    { name: "Social Media Scheduler", status: "active", desc: "Posts across 6 platforms" },
    { name: "Digital Advertising", status: "add", desc: "Google & Meta ads" },
    { name: "AI Sales Assistant", status: "add", desc: "Qualifies and follows up leads" },
  ]
  return (
    <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] overflow-hidden">
      <div className="bg-white px-5 py-3.5 border-b border-[#e5e5ea] flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#1d1d1f]">Your dashboard</span>
        <span className="text-[10px] text-[#6e6e73]">2 tools active</span>
      </div>
      {tools.map((t) => (
        <div key={t.name} className="bg-white border-b border-[#f0f0f0] last:border-0 px-5 py-3.5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#e8f7fb] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-[#1d1d1f]">{t.name}</p>
            <p className="text-[10px] text-[#6e6e73]">{t.desc}</p>
          </div>
          {t.status === "active" ? (
            <span className="text-[9px] font-bold bg-[#18b5d8]/10 text-[#18b5d8] px-2 py-0.5 rounded-full shrink-0">Active</span>
          ) : (
            <button className="text-[9px] font-bold bg-[#1d1d1f] text-white px-2.5 py-1 rounded-full shrink-0">Add</button>
          )}
        </div>
      ))}
    </div>
  )
}

const dashViews = [
  {
    label: "Overview",
    icon: "grid",
    desc: "See every marketing metric that matters, reviews, rankings, campaigns, traffic, and leads, all in a single view updated in real time.",
  },
  {
    label: "Reputation",
    icon: "star",
    desc: "Monitor your star rating across Google, Facebook, and 50+ review sites. Respond to reviews and track your score over time.",
  },
  {
    label: "Listings",
    icon: "map",
    desc: "See which directories your business is listed on, where your NAP data is accurate, and get alerts when listings go out of sync.",
  },
  {
    label: "Social",
    icon: "share",
    desc: "View upcoming posts, track engagement across platforms, and see which social content is driving the most reach and clicks.",
  },
  {
    label: "Reporting",
    icon: "chart",
    desc: "Automated monthly reports delivered to your inbox. See what moved, what drove it, and where to focus next month.",
  },
];

const features = [
  {
    id: "reputation",
    h2: "Reputation Management, all your reviews, one place",
    body: "Your star rating is one of the first things customers see. Our dashboard pulls in reviews from Google, Facebook, Yelp, and dozens of industry-specific sites so you never miss a new review.\n\nAI-generated response suggestions let you reply to every review in seconds. Set up auto-responses for common review types, and get alerts the moment a negative review comes in so you can get ahead of it.",
    cta: { label: "Learn about reputation management", href: "/services" },
    mockup: "reputation",
    imgLeft: false,
  },
  {
    id: "engagement",
    h2: "Customer engagement that keeps people coming back",
    body: "Every interaction a customer has with your business is tracked in your dashboard. Messages, calls, emails, review replies, all visible in one place so nothing falls through the cracks.\n\nYour AI employees handle the front line: responding to inquiries, following up with leads, requesting reviews, and re-engaging past customers automatically. You see every conversation and can jump in at any time.",
    cta: { label: "Discover AI Employees", href: "/aiemployees" },
    mockup: "engagement",
    imgLeft: true,
  },
  {
    id: "reporting",
    h2: "Automated reporting that proves your ROI",
    body: "At the end of every month, a full performance report hits your inbox automatically. Rankings, review growth, campaign performance, website traffic, listing accuracy, everything in one professional document.\n\nNo more chasing your agency for updates. Your dashboard shows real-time data 24/7, and monthly reports summarize what moved and why. You always know exactly what your marketing is doing.",
    cta: { label: "See reporting features", href: "/contact" },
    mockup: "reporting",
    imgLeft: false,
  },
  {
    id: "marketplace",
    h2: "Add more tools as your business grows",
    body: "As your marketing needs evolve, your dashboard grows with you. Add advanced reputation tools, social media scheduling, digital advertising management, or additional AI employees, all from the same platform.\n\nNo new logins, no vendor switching, no data migration. Every product you add connects to your existing dashboard and reporting so everything stays in one place.",
    cta: { label: "View all services", href: "/services" },
    mockup: "marketplace",
    imgLeft: true,
  },
];

const tools = [
  { icon: "star", title: "Reputation Management", body: "Reviews, ratings, and response tools across 50+ sites." },
  { icon: "map", title: "Listing Management", body: "Directory sync, NAP accuracy, and listing health scores." },
  { icon: "share", title: "Social Media", body: "Scheduled posts, engagement tracking, and content performance." },
  { icon: "email", title: "Email & SMS Campaigns", body: "Automated sequences, broadcasts, and drip campaigns." },
  { icon: "ads", title: "Digital Advertising", body: "Google and Meta ad performance tracked alongside organic." },
  { icon: "web", title: "Website Performance", body: "Traffic, conversions, and Core Web Vitals in one view." },
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

function DashIcon({ type }: { type: string }) {
  const cls = "w-5 h-5 text-[#18b5d8]"
  if (type === "star") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
  if (type === "map") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
  if (type === "share") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  )
  if (type === "email") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
  if (type === "ads") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  )
  if (type === "chart") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
  if (type === "grid") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  )
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

export default function BusinessAppPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-[#18b5d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              <span className="text-[#18b5d8] text-[13px] font-bold tracking-[2px] uppercase">Client Dashboard</span>
            </div>
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-[-0.02em] mb-6" style={{ textWrap: "balance" }}>
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

          <div className="flex-1 min-w-0 w-full lg:max-w-[480px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/business-app/mobile-dashboard.webp"
                alt="Business app client dashboard showing reputation, listings, Google Business Profile, and advertising panels"
                width={540}
                height={720}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD VIEWS, text cards */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] mb-4" style={{ textWrap: "balance" }}>
              Every view your business needs, all in one dashboard
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[540px] mx-auto">
              From your morning review check to your monthly performance review, your dashboard gives you a clear picture of what's happening across every channel.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dashViews.map((v) => (
              <div key={v.label} className="bg-white rounded-2xl border border-[#e5e5ea] p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8f7fb] flex items-center justify-center">
                  <DashIcon type={v.icon} />
                </div>
                <h3 className="text-[15px] font-extrabold text-[#1d1d1f]">{v.label}</h3>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] mb-4">
              Everything connected in one dashboard
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto">
              Every marketing tool and channel you use with Shark AI Solutions flows into your dashboard automatically. No spreadsheets. No report requests. Just data.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div key={t.title} className="bg-[#f5f5f7] rounded-2xl border border-[#e5e5ea] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f7fb] flex items-center justify-center">
                  <DashIcon type={t.icon} />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1d1d1f]">{t.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
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
              <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] mb-5 leading-tight" style={{ textWrap: "balance" }}>
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
              {f.mockup === "reputation" && <ReputationMockup />}
              {f.mockup === "engagement" && <EngagementMockup />}
              {f.mockup === "reporting" && <ReportingMockup />}
              {f.mockup === "marketplace" && <MarketplaceMockup />}
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] text-center mb-14">
            What clients say about having everything in one place
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f5f5f7] rounded-2xl border border-[#e5e5ea] p-8 flex flex-col gap-5">
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

      {/* CTA */}
      <section className="bg-[#07141a] py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 35% 55%, #18b5d8 0%, transparent 55%)" }}
        />
        <div className="max-w-[760px] mx-auto text-center relative">
          <h2
            className="text-[32px] sm:text-[46px] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-5"
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
