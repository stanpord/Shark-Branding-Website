import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI-Optimized Website Design & Development | Shark AI Solutions",
  description:
    "Websites built to rank in Google and AI search engines like ChatGPT and Perplexity. Custom-designed, fast, and structured for the era of AI-powered discovery.",
  alternates: {
    canonical: "https://shark-ai-solutions.com/websites",
  },
  openGraph: {
    title: "AI-Optimized Website Design & Development | Shark AI Solutions",
    description:
      "Websites built to rank in Google and AI search. Custom-designed, fast, and structured for AI-powered discovery.",
    url: "https://shark-ai-solutions.com/websites",
  },
};

/* ── Hero mockup: AI readiness scorecard ── */
function WebsiteAuditMockup() {
  const scores = [
    { label: "Schema Markup", score: 98, color: "#18b5d8" },
    { label: "Core Web Vitals", score: 96, color: "#18b5d8" },
    { label: "AI Citability", score: 94, color: "#18b5d8" },
    { label: "Entity Coverage", score: 91, color: "#18b5d8" },
    { label: "Mobile Speed", score: 99, color: "#18b5d8" },
  ]
  return (
    <div className="rounded-2xl bg-[#0a1a22] border border-white/10 p-5 space-y-4">
      <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 bg-white/[0.06] rounded-md px-3 py-1">
          <span className="text-[10px] text-white/30 font-mono">shark-ai-solutions.com</span>
        </div>
        <span className="text-[10px] font-bold text-[#18b5d8] bg-[#18b5d8]/10 px-2.5 py-1 rounded-full">AI-Ready</span>
      </div>
      <div className="space-y-3">
        {scores.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-white/50">{s.label}</span>
              <span className="text-[11px] font-bold text-[#18b5d8]">{s.score}</span>
            </div>
            <div className="h-1 rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-[#18b5d8]" style={{ width: `${s.score}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 pt-1">
        {[
          { v: "#1", label: "AI ranking" },
          { v: "0.8s", label: "Load time" },
          { v: "100", label: "SEO score" },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.04] rounded-xl p-2.5 text-center">
            <p className="text-[13px] font-bold text-[#18b5d8] leading-none mb-1">{m.v}</p>
            <p className="text-[9px] text-white/30">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Feature row mockups ── */
function FoundationMockup() {
  const signals = [
    { label: "Schema markup", detail: "LocalBusiness + Service + FAQPage" },
    { label: "Entity signals", detail: "Consistent across 40+ directories" },
    { label: "Content depth", detail: "Topical authority mapped" },
    { label: "Core Web Vitals", detail: "LCP 0.8s · CLS 0 · INP 80ms" },
    { label: "Mobile-first", detail: "Responsive, touch-optimized" },
  ]
  return (
    <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] overflow-hidden">
      <div className="px-5 py-3.5 border-b border-[#e5e5ea] bg-white flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
        <span className="text-[11px] font-bold text-[#1d1d1f] tracking-wide">Foundation audit · shark-ai-solutions.com</span>
      </div>
      <div className="divide-y divide-[#e5e5ea]">
        {signals.map((s) => (
          <div key={s.label} className="flex items-center justify-between px-5 py-3.5 bg-white">
            <div>
              <p className="text-[13px] font-semibold text-[#1d1d1f]">{s.label}</p>
              <p className="text-[11px] text-[#6e6e73] mt-0.5">{s.detail}</p>
            </div>
            <svg className="w-4 h-4 text-[#18b5d8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

function DepthMockup() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl bg-[#0a1a22] border border-white/10 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#10a37f]" />
          <span className="text-[10px] font-bold text-[#10a37f] uppercase tracking-wider">ChatGPT</span>
          <span className="text-[10px] text-white/30 font-mono ml-auto">chatgpt.com</span>
        </div>
        <p className="text-[11px] text-white/40 font-mono mb-3">"best AI marketing agency Tampa Bay"</p>
        <div className="space-y-1.5">
          {[
            { n: 1, name: "Shark AI Solutions", sub: "shark-ai-solutions.com · Wesley Chapel, FL", highlight: true },
            { n: 2, name: "Regional Agency B", highlight: false },
            { n: 3, name: "National Vendor C", highlight: false },
          ].map((item) => (
            <div key={item.n} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${item.highlight ? "bg-[#18b5d8]/10 border border-[#18b5d8]/25" : "opacity-25"}`}>
              <span className={`text-[10px] font-bold w-3 shrink-0 ${item.highlight ? "text-[#18b5d8]" : "text-white/30"}`}>{item.n}</span>
              <div className="flex-1 min-w-0">
                <p className={`text-[12px] ${item.highlight ? "text-white font-semibold" : "text-white/30"}`}>{item.name}</p>
                {item.sub && <p className="text-[9px] text-white/25 truncate">{item.sub}</p>}
              </div>
              {item.highlight && <span className="text-[9px] font-bold bg-[#18b5d8]/15 text-[#18b5d8] px-1.5 py-0.5 rounded-full shrink-0">#1</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "3x", label: "More AI mentions" },
          { v: "4.8★", label: "Review score" },
          { v: "40+", label: "Citation sources" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl bg-[#f5f5f7] border border-[#e5e5ea] p-3 text-center">
            <p className="text-[15px] font-bold text-[#1d1d1f] leading-none mb-1">{m.v}</p>
            <p className="text-[10px] text-[#6e6e73]">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExpertiseMockup() {
  return (
    <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-[#e5e5ea]">
        <div className="p-5 bg-white">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#86868b] mb-4">Design agency</p>
          <div className="space-y-2.5">
            {["Beautiful website", "On-brand design", "Mobile-first build", "Fast delivery"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-[12px] text-[#1d1d1f]">{item}</span>
              </div>
            ))}
            {["AI optimization", "Schema strategy", "AI citability"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#d1d1d6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                </svg>
                <span className="text-[12px] text-[#aeaeb2]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 bg-[#07141a]">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#18b5d8]/60 mb-4">Shark AI Solutions</p>
          <div className="space-y-2.5">
            {["Beautiful website", "On-brand design", "Mobile-first build", "Fast delivery", "AI optimization", "Schema strategy", "AI citability"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#18b5d8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-[12px] text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const whyItems = [
  {
    icon: "ai",
    title: "Built for AI search from day one",
    body: "Every page is structured with the schema, content depth, and entity signals that Google, ChatGPT, and Perplexity use to surface authoritative answers.",
  },
  {
    icon: "convert",
    title: "Designed to convert AI-referred visitors",
    body: "AI search sends high-intent traffic. We build sites with clear CTAs, fast load times, and layouts that turn those visitors into leads.",
  },
  {
    icon: "refresh",
    title: "Ongoing AI optimization included",
    body: "AI search signals evolve constantly. We monitor, update, and re-optimize your site so it stays visible as the landscape shifts.",
  },
  {
    icon: "rank",
    title: "Ranked in Google and AI models",
    body: "Structured data, fast Core Web Vitals, semantic content, and entity optimization built in from the first line of code.",
  },
];

const features = [
  {
    id: "foundation",
    h2: "Your website is the foundation of AI visibility",
    body: "Every ad you run, every review you earn, every social post you publish, it all drives people back here. If the site is slow, thin on content, or missing the structure AI looks for, you're invisible to the buyers who matter most.\n\nWe build sites with the technical depth and content signals that earn recommendations. Fast. Mobile-first. Structured for the way search actually works today.",
    cta: { label: "See our process", href: "/contact" },
    mockup: "foundation",
    imgLeft: false,
  },
  {
    id: "depth",
    h2: "AI search rewards depth. We build for it.",
    body: "ChatGPT doesn't cite websites at random. It pulls from pages with real authority: comprehensive content, structured data, consistent entity signals, fast load times, and strong local presence.\n\nEvery page we build is designed to check those boxes. Your site becomes a source AI trusts and recommends by name.",
    cta: { label: "Book a strategy call", href: "/contact" },
    mockup: "depth",
    imgLeft: true,
  },
  {
    id: "experts",
    h2: "Web design and AI expertise in the same team",
    body: "Most agencies build good-looking websites. Most AI firms don't touch web design. We do both, which changes everything.\n\nYou get a site that's fast, visually sharp, and optimized for AI recommendations, without coordinating two vendors and hoping they agree on a strategy.",
    cta: { label: "Meet our team", href: "/about" },
    mockup: "expertise",
    imgLeft: false,
  },
];

const services = [
  {
    icon: "design",
    title: "Custom web design",
    body: "Fully custom layouts built around your brand and your customers. No recycled templates, no designs borrowed from other clients.",
  },
  {
    icon: "ai",
    title: "AI search optimization",
    body: "Schema markup, entity signals, content depth, and structured data that gets your site cited in ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    icon: "lead",
    title: "Lead capture & follow-up",
    body: "Forms, chat, and AI-powered follow-up that convert visitors into booked appointments, whether they found you on Google or an AI answer engine.",
  },
  {
    icon: "content",
    title: "Content for AI visibility",
    body: "Copy written to rank in traditional search and earn citations in AI responses, by name, by category, and by location.",
  },
  {
    icon: "ads",
    title: "Ad landing pages",
    body: "High-converting pages for paid campaigns, built to the same technical standard as the rest of your site. Not an afterthought.",
  },
  {
    icon: "monitor",
    title: "Ongoing optimization",
    body: "Monthly performance reviews, content updates, schema maintenance, and AI citation monitoring. We don't ship and disappear.",
  },
];

const testimonials = [
  {
    quote: "Our old site was embarrassing to send people to. The new one looks professional, loads fast, and we're already getting more calls from it.",
    name: "Owner",
    company: "HVAC company, Tampa FL",
  },
  {
    quote: "They didn't just design a website. They explained the strategy behind every decision. Now I understand why our site works, not just that it does.",
    name: "Managing Partner",
    company: "Law firm, Wesley Chapel FL",
  },
  {
    quote: "Within 60 days of launching our new site, our Google rankings improved and our contact form submissions doubled. Real results.",
    name: "Marketing Director",
    company: "Multi-location medical practice",
  },
];

function WhyIcon({ type }: { type: string }) {
  const cls = "w-6 h-6 text-[#18b5d8]"
  if (type === "ai") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  )
  if (type === "convert") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  )
  if (type === "refresh") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function ServiceIcon({ type }: { type: string }) {
  const cls = "w-6 h-6 text-[#18b5d8]"
  if (type === "design") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  )
  if (type === "ai") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  )
  if (type === "lead") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
  if (type === "content") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
  if (type === "ads") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  )
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  )
}


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://shark-ai-solutions.com/websites#service',
  name: 'AI-Optimized Website Design & Development',
  description: 'AI-optimized websites for Tampa Bay businesses. Built for speed, structured data, and AI citability. Delivered in weeks, not months.',
  url: 'https://shark-ai-solutions.com/websites',
  provider: { '@id': 'https://shark-ai-solutions.com/#organization' },
  serviceType: 'Website Design and Development',
  areaServed: [
    { '@type': 'City', name: 'Wesley Chapel' },
    { '@type': 'City', name: 'Tampa' },
    { '@type': 'City', name: 'Lutz' },
    { '@type': 'City', name: 'Land O Lakes' },
  ],
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shark-ai-solutions.com' },
    { '@type': 'ListItem', position: 2, name: 'AI-Optimized Website Design & Development', item: 'https://shark-ai-solutions.com/websites' },
  ],
}
export default function WebsitesPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* HERO */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-[-0.02em] mb-6" style={{ textWrap: "balance" }}>
              Built to rank where buyers are looking now
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              Google is one answer engine. ChatGPT, Perplexity, and Google AI Overviews are three more. We build websites structured to earn citations in all of them and convert whoever lands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Start your website project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                See our work
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-0 w-full lg:max-w-[500px]">
            <WebsiteAuditMockup />
          </div>
        </div>
      </section>

      {/* AI SEARCH SECTION */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] mb-5 leading-tight" style={{ textWrap: "balance" }}>
              Built for AI search. Designed to convert.
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
              Most websites weren't built for this. They load fine, look fine, and get found by nobody because AI search doesn't know they exist. We fix that at the structural level.
            </p>
            <ul className="space-y-3">
              {[
                "Cited by ChatGPT, Perplexity, and Google AI Overviews",
                "Loads in under 2 seconds on any device",
                "Converts AI-referred traffic into booked leads",
                "Integrated with your CRM and AI follow-up tools",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#1d1d1f] font-medium">
                  <svg className="w-5 h-5 text-[#18b5d8] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional workspace with MacBook and monitors showing a modern website"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US, 4-up grid */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] text-center tracking-[-0.02em] mb-4">
            Why businesses choose us for their website
          </h2>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[520px] mx-auto mb-14">
            We build more than websites. We build the digital foundation your entire AI visibility strategy runs on.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f7fb] flex items-center justify-center flex-shrink-0">
                  <WhyIcon type={item.icon} />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#1d1d1f] leading-snug">{item.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{item.body}</p>
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
              {f.mockup === "foundation" && <FoundationMockup />}
              {f.mockup === "depth" && <DepthMockup />}
              {f.mockup === "expertise" && <ExpertiseMockup />}
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] text-center mb-4">
            Everything your website project includes
          </h2>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[500px] mx-auto mb-14">
            No hidden fees, no add-ons required. Every engagement includes the full stack of what a high-performing, AI-visible website needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-[#e5e5ea] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f7fb] flex items-center justify-center">
                  <ServiceIcon type={s.icon} />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1d1d1f]">{s.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGED HOSTING */}
      <section className="py-20 px-6 bg-[#07141a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-white tracking-[-0.02em] mb-5 leading-tight" style={{ textWrap: "balance" }}>
              Enterprise hosting built for multi-location businesses
            </h2>
            <p className="text-[#8d9aab] text-[17px] max-w-[560px] mx-auto leading-relaxed">
              We don't just build your website. We host it on infrastructure designed for businesses with multiple locations that need speed, security, and scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                img: "/websites/multisite-network.webp",
                title: "Multisite network",
                body: "Manage every location from one dashboard. One login, one update process, full site-to-site isolation. Scale from two locations to two hundred without new infrastructure.",
              },
              {
                img: "/websites/security-built-in.webp",
                title: "Security built in",
                body: "Web application firewall, DDoS protection, brute-force defense, and free SSL on every site. Enterprise-grade security without a dedicated IT team.",
              },
              {
                img: "/websites/uptime-guarantee.webp",
                title: "99.99% uptime",
                body: "Free CDN, 30-day backup history, staging environments, per-site isolation, and SFTP access. Your sites stay fast and online while you focus on running the business.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl overflow-hidden bg-white/[0.06] border border-white/[0.1] flex flex-col">
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h3 className="text-[17px] font-extrabold text-white leading-snug">{card.title}</h3>
                  <p className="text-[14px] text-[#8d9aab] leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/[0.12] p-8 bg-white/[0.04]">
            <p className="text-[13px] font-semibold text-[#18b5d8] mb-6">Everything included</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
              {[
                "Multisite Network",
                "Easy one-click setup",
                "Free SSL Certificate",
                "Role-Based Access",
                "Custom Domains",
                "30-day backup history",
                "Staging Environment",
                "Free CDN",
                "Enhanced WordPress dashboard",
                "Per-site isolation",
                "Access to SFTP",
                "Web application firewall (WAF)",
                "DDoS protection",
                "Brute-force defense",
                "Centralized Plugin & Theme Management",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#18b5d8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[14px] text-[#c5cdd7]">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] text-center mb-14">
            What our clients say
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#f5f5f7] rounded-2xl border border-[#e5e5ea] p-8 flex flex-col gap-5"
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
            AI search is being carved up right now. First-movers win.
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            The businesses that get structured into AI recommendations over the next 12 months will hold those positions for years. We build websites that compete on that timeline.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Get a custom quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
