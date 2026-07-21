import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Website Design & Development | Shark AI Solutions",
  description:
    "Custom websites built to attract, convert, and retain customers. Fast, mobile-optimized, SEO-ready sites designed to grow your business from day one.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/websites",
  },
  openGraph: {
    title: "Website Design & Development | Shark AI Solutions",
    description:
      "Custom websites built to attract, convert, and retain customers. Fast, mobile-optimized, and SEO-ready.",
    url: "https://sharkbrandingsolutions.com/websites",
  },
};

const CDN = "https://cdn-bjmjf.nitrocdn.com/gsSJVsHgkwexdOuGJbPveYehDehaVtlN/assets/images/optimized/rev-9db17f0/www.vendasta.com/wp-content/uploads/";

const whyItems = [
  {
    img: CDN + "2025/08/website_creation.webp",
    title: "Built from scratch for your brand",
    body: "No templates recycled from other clients. Every site is designed around your brand, your market, and your goals.",
  },
  {
    img: CDN + "2025/08/format_shapes.webp",
    title: "Designed to convert visitors into leads",
    body: "Clear calls-to-action, fast load times, and mobile-first layouts that guide visitors from discovery to contact.",
  },
  {
    img: CDN + "2025/08/support_agent.webp",
    title: "Ongoing support and updates included",
    body: "Your website isn't a one-time project. We maintain, update, and optimize it over time so it keeps performing.",
  },
  {
    img: CDN + "2025/08/web.webp",
    title: "SEO-ready from the first page",
    body: "Structured data, fast Core Web Vitals, clean URLs, and local SEO signals baked in from the start.",
  },
];

const features = [
  {
    id: "foundation",
    h2: "Your website is the foundation of everything",
    body: "Every ad you run, every review you earn, every social post you publish, it all drives people back to your website. If that site is slow, confusing, or outdated, you're losing customers before they ever contact you.\n\nWe build websites designed to convert, not just look good. Fast, mobile-first, and optimized for local search from the first line of code.",
    cta: { label: "See our process", href: "/contact" },
    img: CDN + "2025/08/Foundation-for-growth-502x.webp",
    alt: "Foundation for business growth, website as the core of digital marketing",
    imgLeft: false,
    width: 502,
    height: 366,
  },
  {
    id: "custom",
    h2: "Deliver a custom website experience your customers expect",
    body: "Your website is often the first impression a potential customer gets of your business. We design sites that match your brand, speak to your audience, and make it easy for visitors to take the next step.\n\nFrom the homepage layout to the contact form, every element is built with conversion in mind. Clear messaging, intuitive navigation, and calls-to-action that actually get clicked.",
    cta: { label: "Book a strategy call", href: "/contact" },
    img: CDN + "2025/08/Deliver-custom-website-experience-502x.webp",
    alt: "Custom website experience design showing brand-aligned layout and UX",
    imgLeft: true,
    width: 502,
    height: 384,
  },
  {
    id: "experts",
    h2: "The difference is our team of experts",
    body: "Anyone can build a website. Very few can build one that ranks in Google, loads in under 2 seconds, converts visitors into leads, and integrates with your AI marketing tools.\n\nOur team combines web design, local SEO, AI, and conversion optimization into a single coherent strategy. You get a website that doesn't just exist, it works.",
    cta: { label: "Meet our team", href: "/about" },
    img: CDN + "2025/08/Difference-is-our-experts-502x.webp",
    alt: "Expert team delivering website strategy, design, and ongoing optimization",
    imgLeft: false,
    width: 502,
    height: 364,
  },
];

const services = [
  {
    img: CDN + "2025/04/web-design.webp",
    title: "Custom web design",
    body: "Fully custom designs aligned to your brand identity, target market, and conversion goals.",
  },
  {
    img: CDN + "2025/04/Listing-management-1.png",
    title: "Local SEO integration",
    body: "Structured data, local schema, fast load speeds, and on-page optimization built into every site.",
  },
  {
    img: CDN + "2025/03/Email-and-SMS-Marketing-Icon.png",
    title: "Lead capture & follow-up",
    body: "Forms, chat widgets, and AI-powered follow-up sequences that turn website visitors into paying customers.",
  },
  {
    img: CDN + "2025/04/Social-media-content.png",
    title: "Content & copywriting",
    body: "Professionally written copy that speaks to your customers and tells search engines exactly what you do.",
  },
  {
    img: CDN + "2025/04/Digital-advertising.png",
    title: "Ad landing pages",
    body: "Dedicated landing pages for Google Ads and social campaigns built to maximize conversion rates.",
  },
  {
    img: CDN + "2025/08/switch_access_shortcut_add.webp",
    title: "Ongoing maintenance",
    body: "Security updates, speed optimization, content edits, and performance reporting on a monthly basis.",
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

export default function WebsitesPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[#18b5d8] text-[13px] font-bold tracking-[2px] uppercase mb-5">
              Website Design & Development
            </span>
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textWrap: "balance" }}>
              A website that actually works for your business
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              Custom-designed, mobile-first, and built to convert. We create websites that attract the right customers, communicate your value clearly, and turn visitors into leads.
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
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src={CDN + "2025/08/Vendasta-website-services-567x.webp"}
                alt="Website design and development services dashboard showing site performance and design tools"
                width={567}
                height={528}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATTRACT CONVERT ENGAGE, full-width feature */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-[28px] sm:text-[38px] font-extrabold text-[#1d1d1f] tracking-tight mb-5 leading-tight" style={{ textWrap: "balance" }}>
              Attract, convert, and engage, all from one website
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
              Your website doesn't just need to look good. It needs to rank in local search, load fast on mobile, communicate your value instantly, and make it easy for customers to contact you. We build sites that do all of it.
            </p>
            <ul className="space-y-3">
              {["Ranks in Google and AI search results", "Loads in under 2 seconds on mobile", "Turns visitors into leads with clear CTAs", "Integrates with your CRM and AI marketing tools"].map((item) => (
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
            <div className="relative rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src={CDN + "2025/05/Attract-convert-engage-386x.webp"}
                alt="Attract, convert, and engage website strategy showing multi-channel digital presence"
                width={386}
                height={386}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US, 4-up grid */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] text-center tracking-tight mb-4">
            Why businesses choose us for their website
          </h2>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[520px] mx-auto mb-14">
            We build more than websites. We build the digital foundation your entire marketing strategy runs on.
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

      {/* SERVICES GRID */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-4">
            Everything your website project includes
          </h2>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[500px] mx-auto mb-14">
            No hidden fees, no add-ons required. Every engagement includes the full stack of what a high-performing website needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-[20px] border border-[#e5e5ea] p-7 flex flex-col gap-4 shadow-sm">
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
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-14">
            What our clients say
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

      {/* CTA */}
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
            Ready to build a website that actually performs?
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            Let's talk about your business, your goals, and what a high-performing website would look like for your specific market and customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Start your project
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
