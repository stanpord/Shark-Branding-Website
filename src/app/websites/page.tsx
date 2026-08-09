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

const CDN = "https://www.vendasta.com/wp-content/uploads/";

const whyItems = [
  {
    img: CDN + "2025/08/website_creation.webp",
    title: "Built for AI search from day one",
    body: "Every page is structured with the schema, content depth, and entity signals that Google, ChatGPT, and Perplexity use to surface authoritative answers.",
  },
  {
    img: CDN + "2025/08/format_shapes.webp",
    title: "Designed to convert AI-referred visitors",
    body: "AI search sends high-intent traffic. We build sites with clear CTAs, fast load times, and layouts that turn those visitors into leads.",
  },
  {
    img: CDN + "2025/08/support_agent.webp",
    title: "Ongoing AI optimization included",
    body: "AI search signals evolve constantly. We monitor, update, and re-optimize your site so it stays visible as the landscape shifts.",
  },
  {
    img: CDN + "2025/08/web.webp",
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
    img: CDN + "2025/08/Foundation-for-growth-502x.webp",
    alt: "Website as the foundation of AI visibility and digital marketing strategy",
    imgLeft: false,
    width: 502,
    height: 366,
  },
  {
    id: "depth",
    h2: "AI search rewards depth. We build for it.",
    body: "ChatGPT doesn't cite websites at random. It pulls from pages with real authority: comprehensive content, structured data, consistent entity signals, fast load times, and strong local presence.\n\nEvery page we build is designed to check those boxes. Your site becomes a source AI trusts and recommends by name.",
    cta: { label: "Book a strategy call", href: "/contact" },
    img: CDN + "2025/08/Deliver-custom-website-experience-502x.webp",
    alt: "Website content depth and AI search optimization strategy",
    imgLeft: true,
    width: 502,
    height: 384,
  },
  {
    id: "experts",
    h2: "Web design and AI expertise in the same team",
    body: "Most agencies build good-looking websites. Most AI firms don't touch web design. We do both, which changes everything.\n\nYou get a site that's fast, visually sharp, and optimized for AI recommendations, without coordinating two vendors and hoping they agree on a strategy.",
    cta: { label: "Meet our team", href: "/about" },
    img: CDN + "2025/08/Difference-is-our-experts-502x.webp",
    alt: "Expert team combining web design and AI search optimization",
    imgLeft: false,
    width: 502,
    height: 364,
  },
];

const services = [
  {
    img: CDN + "2025/04/web-design.webp",
    title: "Custom web design",
    body: "Fully custom layouts built around your brand and your customers. No recycled templates, no designs borrowed from other clients.",
  },
  {
    img: CDN + "2025/04/Listing-management-1.png",
    title: "AI search optimization",
    body: "Schema markup, entity signals, content depth, and structured data that gets your site cited in ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    img: CDN + "2025/03/Email-and-SMS-Marketing-Icon.png",
    title: "Lead capture & follow-up",
    body: "Forms, chat, and AI-powered follow-up that convert visitors into booked appointments, whether they found you on Google or an AI answer engine.",
  },
  {
    img: CDN + "2025/04/Social-media-content.png",
    title: "Content for AI visibility",
    body: "Copy written to rank in traditional search and earn citations in AI responses, by name, by category, and by location.",
  },
  {
    img: CDN + "2025/04/Digital-advertising.png",
    title: "Ad landing pages",
    body: "High-converting pages for paid campaigns, built to the same technical standard as the rest of your site. Not an afterthought.",
  },
  {
    img: CDN + "2025/08/switch_access_shortcut_add.webp",
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
            <span className="inline-block text-[#18b5d8] text-[13px] font-bold tracking-[2px] uppercase mb-5">
              AI-Optimized Website Design
            </span>
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

          <div className="flex-1 min-w-0 w-full lg:max-w-[560px]">
            <div className="relative rounded-[16px] overflow-hidden shadow-2xl">
              <Image
                src={CDN + "2025/08/Vendasta-website-services-567x.webp"}
                alt="AI-optimized website design and development services dashboard"
                width={567}
                height={528}
                className="w-full h-auto"
                priority
              />
            </div>
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
            <div className="relative rounded-[16px] overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
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
                <div className="w-12 h-12 rounded-[10px] bg-[#e8f7fb] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
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
              <div className="relative rounded-[16px] overflow-hidden shadow-lg">
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
              <div key={s.title} className="bg-white rounded-[12px] border border-[#e5e5ea] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-[10px] bg-[#e8f7fb] flex items-center justify-center">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1d1d1f]">{s.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{s.body}</p>
              </div>
            ))}
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
                className="bg-[#f5f5f7] rounded-[12px] border border-[#e5e5ea] p-8 flex flex-col gap-5"
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
