import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/services#ai-visibility", label: "AI Business Consulting" },
  { href: "/services#toolkit", label: "AI Visibility Toolkit" },
  { href: "/aiemployees", label: "AI Employees" },
  { href: "/automation", label: "AI Automation" },
  { href: "/franchises", label: "Franchises & Multi-Location" },
  { href: "/ai-assessment", label: "AI Assessment" },
  { href: "/aiemployees/roi-calculator", label: "ROI Calculator" },
  { href: "/services#workshops", label: "Workshops & Training" },
  { href: "/free-report", label: "Free AI Audit" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/about#team", label: "Executive Team" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/media", label: "Media & Press" },
  { href: "/plans", label: "Pricing & Plans" },
  { href: "/chamber", label: "Chamber Partnership" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/how-to-rank-on-chatgpt-for-local-businesses", label: "How to Rank on ChatGPT" },
  { href: "/resources/blog-seo-old-school-geo-ai-shift", label: "GEO vs. SEO" },
  { href: "/resources/blog-ai-funnel-chatgpt-new-front-door", label: "The AI Funnel" },
  { href: "/resources/blog-google-reviews-ai-recommendations", label: "Reviews & AI" },
  { href: "/vs/seo", label: "Shark vs. Traditional SEO" },
  { href: "/vs/salesforce", label: "Shark vs. Salesforce" },
  { href: "/resources", label: "All Articles" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sharkbranding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sharkbranding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sharkbranding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@sharkbranding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sharkbranding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
      </svg>
    ),
  },
  {
    label: "Google Business Profile",
    href: "https://share.google/qmY6FsoMpxip8rslm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#07141a] text-white">

      {/* ── CTA bar ── */}
      <div className="border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[22px] font-bold text-white leading-snug">See how your business appears to AI, free.</p>
          </div>
          <Link
            href="/free-report"
            className="shrink-0 bg-[#18b5d8] text-white text-[13px] font-bold uppercase tracking-[0.08em] px-7 py-3.5 rounded-full hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-[1100px] mx-auto px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.webp"
              alt="Shark AI Solutions"
              width={240}
              height={86}
              className="h-20 w-auto object-contain mb-5"
            />
            <p className="text-[13px] text-white/60 mb-6 leading-relaxed max-w-[300px]">
              AI visibility consulting and AI employees for growing franchises, multi-location brands, and established businesses ready to own AI search.
            </p>

            {/* Address */}
            <div className="mb-5 space-y-1">
              <p className="text-[13px] text-white/80 font-medium">27251 Wesley Chapel Blvd.</p>
              <p className="text-[13px] text-white/50">Suite B14 #805, Wesley Chapel, FL 33544</p>
            </div>

            {/* Contact */}
            <div className="mb-8 space-y-1.5">
              <a href="tel:+17275133955" className="block text-[13px] text-white/70 hover:text-[#18b5d8] motion-safe:transition-colors">
                (727) 513-3955
              </a>
              <a href="mailto:info@sharkbrandingsolutions.com" className="block text-[13px] text-white/70 hover:text-[#18b5d8] motion-safe:transition-colors">
                info@sharkbrandingsolutions.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/65 hover:text-[#18b5d8] hover:border-[#18b5d8] motion-safe:transition-colors [touch-action:manipulation]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-[11px] font-bold text-white uppercase tracking-[0.10em] mb-5">
              Services
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[13px] text-white/65 hover:text-[#18b5d8] motion-safe:transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-[11px] font-bold text-white uppercase tracking-[0.10em] mb-5">
              Company
            </h2>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[13px] text-white/65 hover:text-[#18b5d8] motion-safe:transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-[11px] font-bold text-white uppercase tracking-[0.10em] mb-5">
              Resources
            </h2>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-[13px] text-white/65 hover:text-[#18b5d8] motion-safe:transition-colors">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/55">
            &copy; {new Date().getFullYear()} Shark AI Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="text-[12px] text-white/55 hover:text-[#18b5d8] motion-safe:transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12px] text-white/55 hover:text-[#18b5d8] motion-safe:transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap-html" className="text-[12px] text-white/55 hover:text-[#18b5d8] motion-safe:transition-colors">
              Sitemap
            </Link>
            <p className="text-[12px] text-white/55">
              Serving{" "}
              <Link href="/wesley-chapel" className="hover:text-[#18b5d8] motion-safe:transition-colors">Wesley Chapel</Link>
              {" "}&middot;{" "}
              <Link href="/tampa" className="hover:text-[#18b5d8] motion-safe:transition-colors">Tampa</Link>
              {" "}&middot; Lutz &middot; Land O&rsquo; Lakes &middot; St. Petersburg
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
