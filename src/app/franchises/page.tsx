import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BOOK_CALL_URL = "https://bookmenow.info/book/jstanaland/30-minutes";

export const metadata: Metadata = {
  title: "Franchise Marketing Solutions | Shark AI Solutions",
  description:
    "Scale AI-powered marketing across every franchise location without losing brand control. One platform, unified visibility, measurable results at every level.",
  alternates: {
    canonical: "https://shark-ai-solutions.com/franchises",
  },
  openGraph: {
    title: "Franchise Marketing Solutions | Shark AI Solutions",
    description:
      "Scale AI-powered marketing across every franchise location without losing brand control.",
    url: "https://shark-ai-solutions.com/franchises",
  },
};

/* ── Why blurbs ── */
const whyBlurbs = [
  {
    title: "Deploy AI-powered marketing products across every location while keeping execution on-brand and easy to manage",
    icon: "ai",
  },
  {
    title: "Gain clear visibility into marketing performance at both the franchise and location level, so you know what's working and where support is needed",
    icon: "insights",
  },
  {
    title: "Save time and reduce complexity with unified ordering, billing, and fulfillment across your entire network",
    icon: "time",
  },
  {
    title: "Maintain brand consistency without micromanaging by setting standards once and giving franchisees flexibility where it matters",
    icon: "brand",
  },
];

/* ── Benefit cards ── */
const benefits = [
  {
    id: "growth",
    img: "/franchises/multilocation-social.webp",
    alt: "Franchise team managing digital marketing across locations",
    h3: "Provide franchisees with end-to-end digital marketing",
    body: "Give every location the tools to execute local marketing confidently, from AI-powered content to real-time engagement, without relying on outside vendors.",
  },
  {
    id: "scale",
    img: "/franchises/multilocation-reporting.webp",
    alt: "Data dashboard showing franchise location performance metrics",
    h3: "Cutting-edge franchise marketing software and data insights",
    body: "Get clear, actionable visibility into performance at both the franchisor and franchisee level, so you can optimize lead generation, funnel progression, and outcomes across the network.",
  },
  {
    id: "cost",
    img: "/franchises/multilocation-screenshot.webp",
    alt: "Business owner reviewing reduced marketing spend reports",
    h3: "Reduce your marketing spend and get better results",
    body: "Replace fragmented vendors with a unified platform that lowers costs, streamlines operations, and delivers better results for every franchisee.",
  },
  {
    id: "hub",
    img: "/franchises/multilocation-screenshot.webp",
    alt: "Single branded hub for local digital marketing management",
    h3: "Give franchisees one place for local digital",
    body: "Equip franchisees with a single, branded hub to manage local marketing, track performance, and take action, improving adoption, consistency, and satisfaction.",
  },
];

/* ── Multi-location capability blurbs ── */
const mlCapabilities = [
  {
    icon: "reach",
    title: "Reach further across your market",
    body: "Expand your footprint with coordinated campaigns that run across every location simultaneously.",
  },
  {
    icon: "engage",
    title: "Engage customers at every location",
    body: "AI tools respond to leads, manage reviews, and follow up with customers at the local level, without requiring franchisor oversight.",
  },
  {
    icon: "social",
    title: "Post to social across all locations",
    body: "Publish brand-approved social content to every location at once, or let individual locations personalize within set guardrails.",
  },
  {
    icon: "monitor",
    title: "Stay updated on every location",
    body: "Monitor performance alerts, review flags, and campaign updates across your entire network in real time.",
  },
];

/* ── Feature rows ── */
const features = [
  {
    id: "vendors",
    h2: "Consolidate franchise marketing vendors into one platform",
    body: "Eliminate vendor sprawl by centralizing AI-powered reputation, listings, and local marketing solutions at the franchisor level, so every location performs better, on brand, and at lower cost.",
    cta: { label: "Explore our platform", href: "/services" },
    img: "/franchises/multilocation-screenshot.webp",
    alt: "Platform interface showing multiple product categories and marketing tools",
    imgLeft: false,
    width: 1041,
    height: 712,
  },
  {
    id: "ai-employees",
    h2: "Protect brand integrity with your AI Employees",
    body: "Shark AI Solutions' AI Employees help franchise brands scale local marketing without losing control. AI employees handle lead response, reputation management, content, and follow-up at the location level, so every franchisee executes consistently, on brand, and on time.\n\nFranchisors set the standards once. AI enforces them everywhere. Franchisees get flexibility where it matters, without constant oversight.",
    cta: { label: "Discover AI Employees", href: "/aiemployees" },
    img: "/franchises/multilocation-social.webp",
    alt: "Multi-location social media and content posting interface",
    imgLeft: true,
    width: 1062,
    height: 1126,
  },
  {
    id: "performance",
    h2: "Track top-performing locations, and support the ones that need it",
    body: "See which locations are winning and why. Our multi-location performance dashboard surfaces the highest-performing locations alongside those falling behind, so franchisors can replicate what's working and intervene where needed.\n\nCustom reporting by location, region, or the whole network gives you the visibility to make decisions faster, with data you can actually trust.",
    cta: { label: "Discover multi-location reporting", href: "/contact" },
    img: "/franchises/multilocation-performers.webp",
    alt: "Top-performing franchise location dashboard with ranking, reviews, and campaign metrics by location",
    imgLeft: false,
    width: 551,
    height: 472,
  },
  {
    id: "social",
    h2: "Social posting that scales across every location",
    body: "Publish content to all locations simultaneously or let franchisees personalize approved content within your brand guardrails. Schedule campaigns at the network level, monitor engagement per location, and ensure every franchisee has an active, on-brand social presence.\n\nOne content calendar. Every location covered. No manual coordination required.",
    cta: { label: "Explore social media tools", href: "/services" },
    img: "/franchises/multilocation-social.webp",
    alt: "Multi-location social media scheduling dashboard showing content calendar and per-location engagement",
    imgLeft: true,
    width: 551,
    height: 378,
  },
  {
    id: "users",
    h2: "Empower your franchise with data-driven success",
    body: "Gain clear visibility into marketing performance at both the franchisor and franchisee level. Track local execution, customer journeys, and network-wide results, so you can optimize strategy, support underperforming locations, and drive consistent growth across the franchise.",
    cta: { label: "Learn about user management", href: "/contact" },
    img: "/franchises/multilocation-reporting.webp",
    alt: "Franchise reporting dashboard showing network-wide marketing performance and location metrics",
    imgLeft: false,
    width: 499,
    height: 399,
  },
  {
    id: "cost",
    h2: "Reduce operational costs with our franchise marketing platform",
    body: "Unlock wholesale pricing for digital products, enhancing productivity and savings while streamlining ordering, billing, and fulfillment processes.",
    cta: { label: "Learn more", href: "/plans" },
    img: "/franchises/multilocation-screenshot.webp",
    alt: "Cost savings and operational efficiency dashboard",
    imgLeft: true,
    width: 560,
    height: 418,
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    quote: "Having everything in one place has been a game changer. Our franchisees are actually using the tools now because they're simple and everything is right there.",
    name: "Regional Director",
    company: "Multi-location franchise network",
  },
  {
    quote: "We cut our vendor list from seven down to one. The savings were significant but the bigger win was that our location managers stopped asking us which tool to use for what.",
    name: "VP of Marketing",
    company: "National service franchise",
  },
  {
    quote: "The reporting alone was worth it. For the first time we could see which locations were performing and why, and actually do something about the ones that weren't.",
    name: "Franchise Operations Manager",
    company: "300+ location brand",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const cls = "w-6 h-6 text-[#18b5d8]"
  if (type === "reach") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-12m12 0v3.75m-12-3.75v3.75m0 0h12" />
    </svg>
  )
  if (type === "engage") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V20l4.155-4.155" />
    </svg>
  )
  if (type === "social") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  )
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  )
}

function WhyIcon({ type }: { type: string }) {
  const cls = "w-6 h-6 text-[#18b5d8]"
  if (type === "ai") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  )
  if (type === "insights") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
  if (type === "time") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://shark-ai-solutions.com/franchises#service',
  name: 'Franchise Marketing Solutions',
  description: 'Scale AI-powered marketing across every franchise location. One platform, unified visibility, and measurable results at every location level.',
  url: 'https://shark-ai-solutions.com/franchises',
  provider: { '@id': 'https://shark-ai-solutions.com/#organization' },
  serviceType: 'Franchise Marketing',
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
    { '@type': 'ListItem', position: 2, name: 'Franchise Marketing Solutions', item: 'https://shark-ai-solutions.com/franchises' },
  ],
}
export default function FranchisesPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textWrap: "balance" }}>
              Scale local marketing across every location, without losing control
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              Optimize your franchise's local digital marketing effortlessly with our advanced franchise marketing platform. Curated solutions, streamlined vendor relationships, and data-driven insights ensure comprehensive improvement across your entire network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Book a demo call
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                See results
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-0 w-full lg:max-w-[560px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src="/franchises/multilocation-screenshot.webp"
                alt="Multi-location brand management dashboard showing franchise network overview and location performance"
                width={567}
                height={417}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LOCATIONS DASHBOARD, full-width
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-tight mb-4" style={{ textWrap: "balance" }}>
              Every location. One view.
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[540px] mx-auto">
              See your entire franchise network at a glance. Monitor performance, flag issues, and take action across every location from a single dashboard without juggling logins or spreadsheets.
            </p>
          </div>
          <div className="relative rounded-[20px] overflow-hidden shadow-lg">
            <Image
              src="/franchises/multilocation-performers.webp"
              alt="Multi-location franchise dashboard showing all business locations with performance metrics, review scores, and ranking data"
              width={1280}
              height={683}
              className="w-full h-auto"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MULTI-LOCATION CAPABILITIES, 4 blurbs
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#1d1d1f] text-center mb-14 tracking-tight">
            Built for every level of your franchise operation
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mlCapabilities.map((c) => (
              <div key={c.title} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#e8f7fb] flex items-center justify-center flex-shrink-0">
                  <CapabilityIcon type={c.icon} />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#1d1d1f] leading-snug">{c.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY SECTION, 4 blurbs
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-[#e5e5ea] bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#1d1d1f] text-center mb-14 tracking-tight">
            Why leading franchise brands build on Shark AI Solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBlurbs.map((b, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#e8f7fb] flex items-center justify-center flex-shrink-0">
                  <WhyIcon type={b.icon} />
                </div>
                <p className="text-[15px] text-[#1d1d1f] font-semibold leading-snug">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENEFIT CARDS, 2x2
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-tight mb-3">
              See the benefits: from franchisee to franchisor
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[560px] mx-auto">
              Streamline operations, ensure brand consistency, and set franchisees up for local digital marketing success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.id} id={b.id} className="bg-white rounded-[20px] border border-[#e5e5ea] overflow-hidden shadow-sm">
                <div className="relative aspect-[788/423]">
                  <Image
                    src={b.img}
                    alt={b.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-[18px] font-extrabold text-[#1d1d1f] mb-3 leading-snug">{b.h3}</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MOBILE VIEW HIGHLIGHT
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1d1d1f] tracking-tight mb-5 leading-tight" style={{ textWrap: "balance" }}>
              Manage your network from anywhere
            </h2>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-4">
              Franchise operations don't happen at a desk. Our mobile-optimized dashboard gives franchisors and location managers full visibility and control from any device, so you're always in the loop even when you're in the field.
            </p>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-6">
              Review alerts, campaign updates, and performance summaries push directly to your phone. Respond to a review, approve a post, or check a location's metrics in seconds.
            </p>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#18b5d8] font-semibold text-[15px] hover:underline"
            >
              See the mobile experience
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="flex-1 min-w-0 w-full lg:max-w-[460px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src="/franchises/multilocation-mobile.webp"
                alt="Multi-location franchise marketing platform mobile dashboard showing location overview and performance metrics"
                width={600}
                height={480}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE ROWS
      ══════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-14">
            What franchise leaders say
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

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
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
            Ready to scale your franchise marketing?
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            A 30-minute call is enough to map out a deployment plan for your network size, franchise model, and current marketing stack.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Book a demo call
            </a>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[16px] px-8 py-5 rounded-full transition-colors duration-150"
            >
              See Enterprise pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
