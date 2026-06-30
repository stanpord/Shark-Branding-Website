import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Franchise Marketing Solutions | Shark AI Solutions",
  description:
    "Scale AI-powered marketing across every franchise location without losing brand control. One platform, unified visibility, measurable results at every level.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/franchises",
  },
  openGraph: {
    title: "Franchise Marketing Solutions | Shark AI Solutions",
    description:
      "Scale AI-powered marketing across every franchise location without losing brand control.",
    url: "https://sharkbrandingsolutions.com/franchises",
  },
};

const CDN = "https://cdn-bjmjf.nitrocdn.com/gsSJVsHgkwexdOuGJbPveYehDehaVtlN/assets/images/optimized/rev-9db17f0/www.vendasta.com/wp-content/uploads/";

/* ── Why blurbs ── */
const whyBlurbs = [
  {
    title: "Deploy AI-powered marketing products across every location while keeping execution on-brand and easy to manage",
    iconSrc: "https://www.vendasta.com/wp-content/uploads/2025/05/AIspark-tsp.webp",
    iconAlt: "AI spark icon",
  },
  {
    title: "Gain clear visibility into marketing performance at both the franchise and location level, so you know what's working and where support is needed",
    iconSrc: "https://www.vendasta.com/wp-content/uploads/2025/05/Gain-insights-on-marketing-performance-for-franchisee-success-icon-42x.webp",
    iconAlt: "Insights icon",
  },
  {
    title: "Save time and reduce complexity with unified ordering, billing, and fulfillment across your entire network",
    iconSrc: "https://www.vendasta.com/wp-content/uploads/2025/05/Save-time-with-unified-ordering-billing-and-fulfillment-processes-icon-42x.webp",
    iconAlt: "Save time icon",
  },
  {
    title: "Maintain brand consistency without micromanaging by setting standards once and giving franchisees flexibility where it matters",
    iconSrc: "https://www.vendasta.com/wp-content/uploads/2025/05/Maintain-brand-consistency-with-a-centralized-marketing-hub-icon-42x.webp",
    iconAlt: "Brand consistency icon",
  },
];

/* ── Benefit cards ── */
const benefits = [
  {
    id: "growth",
    img: "https://www.vendasta.com/wp-content/uploads/2026/02/Provide-franchisees-with-end-to-end-digital-marketing-image.webp",
    alt: "Franchise team managing digital marketing across locations",
    h3: "Provide franchisees with end-to-end digital marketing",
    body: "Give every location the tools to execute local marketing confidently, from AI-powered content to real-time engagement, without relying on outside vendors.",
  },
  {
    id: "scale",
    img: "https://www.vendasta.com/wp-content/uploads/2026/02/Cutting-edge-franchise-marketing-software-and-data-insights-image.webp",
    alt: "Data dashboard showing franchise location performance metrics",
    h3: "Cutting-edge franchise marketing software and data insights",
    body: "Get clear, actionable visibility into performance at both the franchisor and franchisee level, so you can optimize lead generation, funnel progression, and outcomes across the network.",
  },
  {
    id: "cost",
    img: "https://www.vendasta.com/wp-content/uploads/2026/02/Reduce-your-marketing-spend-and-get-better-results-image.webp",
    alt: "Business owner reviewing reduced marketing spend reports",
    h3: "Reduce your marketing spend and get better results",
    body: "Replace fragmented vendors with a unified platform that lowers costs, streamlines operations, and delivers better results for every franchisee.",
  },
  {
    id: "hub",
    img: "https://www.vendasta.com/wp-content/uploads/2026/02/Marketing-for-franchisees-has-never-been-easier-image.webp",
    alt: "Single branded hub for local digital marketing management",
    h3: "Give franchisees one place for local digital",
    body: "Equip franchisees with a single, branded hub to manage local marketing, track performance, and take action, improving adoption, consistency, and satisfaction.",
  },
];

/* ── Multi-location capability blurbs ── */
const mlCapabilities = [
  {
    icon: CDN + "2025/05/reach-further.webp",
    title: "Reach further across your market",
    body: "Expand your footprint with coordinated campaigns that run across every location simultaneously.",
  },
  {
    icon: CDN + "2025/05/engage-customers.webp",
    title: "Engage customers at every location",
    body: "AI tools respond to leads, manage reviews, and follow up with customers at the local level, without requiring franchisor oversight.",
  },
  {
    icon: CDN + "2025/05/post-to-social.webp",
    title: "Post to social across all locations",
    body: "Publish brand-approved social content to every location at once, or let individual locations personalize within set guardrails.",
  },
  {
    icon: CDN + "2025/05/stay-updated.webp",
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
    img: "https://www.vendasta.com/wp-content/uploads/2025/06/Marketplace-lrg.webp",
    alt: "Platform interface showing multiple product categories and marketing tools",
    imgLeft: false,
    width: 1041,
    height: 712,
    cdn: false,
  },
  {
    id: "ai-employees",
    h2: "Protect brand integrity with your AI Employees",
    body: "Shark AI Solutions' AI Employees help franchise brands scale local marketing without losing control. AI employees handle lead response, reputation management, content, and follow-up at the location level, so every franchisee executes consistently, on brand, and on time.\n\nFranchisors set the standards once. AI enforces them everywhere. Franchisees get flexibility where it matters, without constant oversight.",
    cta: { label: "Discover AI Employees", href: "/aiemployees" },
    img: "https://www.vendasta.com/wp-content/uploads/2026/02/Multi-location-posting.webp",
    alt: "Multi-location social media and content posting interface",
    imgLeft: true,
    width: 1062,
    height: 1126,
    cdn: false,
  },
  {
    id: "performance",
    h2: "Track top-performing locations — and support the ones that need it",
    body: "See which locations are winning and why. Our multi-location performance dashboard surfaces the highest-performing locations alongside those falling behind, so franchisors can replicate what's working and intervene where needed.\n\nCustom reporting by location, region, or the whole network gives you the visibility to make decisions faster, with data you can actually trust.",
    cta: { label: "Discover multi-location reporting", href: "/contact" },
    img: CDN + "2025/05/top-performance-551x.webp",
    alt: "Top-performing franchise location dashboard with ranking, reviews, and campaign metrics by location",
    imgLeft: false,
    width: 551,
    height: 472,
    cdn: true,
  },
  {
    id: "social",
    h2: "Social posting that scales across every location",
    body: "Publish content to all locations simultaneously or let franchisees personalize approved content within your brand guardrails. Schedule campaigns at the network level, monitor engagement per location, and ensure every franchisee has an active, on-brand social presence.\n\nOne content calendar. Every location covered. No manual coordination required.",
    cta: { label: "Explore social media tools", href: "/services" },
    img: CDN + "2025/05/socialposting-1-551x.webp",
    alt: "Multi-location social media scheduling dashboard showing content calendar and per-location engagement",
    imgLeft: true,
    width: 551,
    height: 378,
    cdn: true,
  },
  {
    id: "users",
    h2: "Empower your franchise with data-driven success",
    body: "Gain clear visibility into marketing performance at both the franchisor and franchisee level. Track local execution, customer journeys, and network-wide results, so you can optimize strategy, support underperforming locations, and drive consistent growth across the franchise.",
    cta: { label: "Learn about user management", href: "/contact" },
    img: CDN + "2025/07/UserManagement-499x.webp",
    alt: "User management and permissions dashboard for franchise and multi-location teams",
    imgLeft: false,
    width: 499,
    height: 399,
    cdn: true,
  },
  {
    id: "cost",
    h2: "Reduce operational costs with our franchise marketing platform",
    body: "Unlock wholesale pricing for digital products, enhancing productivity and savings while streamlining ordering, billing, and fulfillment processes.",
    cta: { label: "Learn more", href: "/plans" },
    img: "https://www.vendasta.com/wp-content/uploads/2026/02/reduce-cost.webp",
    alt: "Cost savings and operational efficiency dashboard",
    imgLeft: true,
    width: 560,
    height: 418,
    cdn: false,
  },
];

/* ── Case studies ── */
const caseStudies = [
  {
    category: "Franchise",
    img: "https://www.vendasta.com/wp-content/uploads/2023/12/Fred-Astaire-Franchise-case-study-featured-400x284.webp",
    alt: "Dance studio franchise locations marketing platform",
    title: "National dance studio franchise unifies marketing across all locations with one platform",
    href: "/case-studies",
  },
  {
    category: "MSP / IT Services",
    img: "https://www.vendasta.com/wp-content/uploads/2025/02/IP-Consulting-Case-Study-featured-image-560x420-1.png",
    alt: "Managed service provider unlocks marketing funds",
    title: "MSP helps franchise clients unlock $750K in co-op marketing funds",
    href: "/case-studies",
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

export default function FranchisesPage() {
  return (
    <div className="bg-white">

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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Get a demo
              </Link>
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
                src={CDN + "2025/06/Multi-location-brand-management-567x.webp"}
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
          LOCATIONS DASHBOARD — full-width
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
              src={CDN + "2025/05/locations-1280x683.webp"}
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
          MULTI-LOCATION CAPABILITIES — 4 blurbs
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
                  <Image
                    src={c.icon}
                    alt={c.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#1d1d1f] leading-snug">{c.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY SECTION — 4 blurbs
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
                  <Image
                    src={b.iconSrc}
                    alt={b.iconAlt}
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <p className="text-[15px] text-[#1d1d1f] font-semibold leading-snug">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENEFIT CARDS — 2x2
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[#18b5d8] font-semibold text-[15px] hover:underline"
            >
              See the mobile experience
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="flex-1 min-w-0 w-full lg:max-w-[460px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src={CDN + "2025/07/Multi-Location-Mobile-1.webp"}
                alt="Multi-location franchise marketing platform on mobile showing location overview and performance metrics"
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
          CASE STUDIES
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-14">
            Franchise success stories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="bg-white rounded-[20px] border border-[#e5e5ea] overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-[400/284]">
                  <Image
                    src={cs.img}
                    alt={cs.alt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8]">
                    {cs.category}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#1d1d1f] mt-2 leading-snug group-hover:text-[#18b5d8] transition-colors duration-150">
                    {cs.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
          >
            Get a demo
          </Link>
        </div>
      </section>

    </div>
  );
}
