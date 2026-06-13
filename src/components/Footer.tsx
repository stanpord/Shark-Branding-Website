import Link from "next/link";

const services = [
  { href: "/services#ai-visibility", label: "AI Business Consulting" },
  { href: "/services#toolkit", label: "AI Visibility Toolkit" },
  { href: "/aiemployees", label: "AI Employees" },
  { href: "/services#workshops", label: "Workshops & Training" },
  { href: "/free-report", label: "Free AI Audit" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/about#michelle", label: "Michelle Stanaland" },
  { href: "/plans", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/resources/blog-seo-old-school-geo-ai-shift", label: "GEO vs. SEO" },
  { href: "/resources/blog-ai-funnel-chatgpt-new-front-door", label: "The AI Funnel" },
  { href: "/resources/blog-google-reviews-ai-recommendations", label: "Reviews & AI" },
  { href: "/resources/blog-24-hour-rule-local-trust-ai", label: "The 24-Hour Rule" },
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
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#333333]">
      <div className="max-w-[1100px] mx-auto px-8 pt-20 pb-10">

        {/* Top grid — brand column + 3 link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand + contact + socials — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <p className="text-[17px] font-bold text-[#1d1d1f] mb-1">Shark AI Solutions</p>
            <p className="text-[13px] text-[#6e6e73] mb-6 leading-relaxed">
              AI employees and AI visibility for Tampa Bay local businesses. Automate your follow-up, reviews, and content — and get found on ChatGPT, Google AI, and Gemini.
            </p>

            {/* Address */}
            <div className="mb-6 space-y-1">
              <p className="text-[13px] text-[#1d1d1f] font-medium">27251 Wesley Chapel Blvd.</p>
              <p className="text-[13px] text-[#6e6e73]">Suite B14 #805</p>
              <p className="text-[13px] text-[#6e6e73]">Wesley Chapel, FL 33544</p>
            </div>

            {/* Phone + email */}
            <div className="mb-8 space-y-1.5">
              <a
                href="tel:+17275133955"
                className="block text-[13px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors"
              >
                (727) 513-3955
              </a>
              <a
                href="mailto:info@sharkbrandingsolutions.com"
                className="block text-[13px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors"
              >
                info@sharkbrandingsolutions.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white border border-[#e0e0e0] flex items-center justify-center text-[#6e6e73] hover:text-[#18b5d8] hover:border-[#18b5d8] motion-safe:transition-colors [touch-action:manipulation]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-[11px] font-bold text-[#1d1d1f] mb-5 tracking-[1.5px] uppercase">
              Services
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[14px] text-[#6e6e73] hover:text-[#18b5d8] motion-safe:transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-[11px] font-bold text-[#1d1d1f] mb-5 tracking-[1.5px] uppercase">
              Company
            </h2>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[14px] text-[#6e6e73] hover:text-[#18b5d8] motion-safe:transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-[11px] font-bold text-[#1d1d1f] mb-5 tracking-[1.5px] uppercase">
              Resources
            </h2>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-[14px] text-[#6e6e73] hover:text-[#18b5d8] motion-safe:transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e0e0e0] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#86868b]">
            &copy; {new Date().getFullYear()} Shark AI Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="text-[12px] text-[#86868b] hover:text-[#18b5d8] motion-safe:transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12px] text-[#86868b] hover:text-[#18b5d8] motion-safe:transition-colors">
              Terms of Service
            </Link>
            <p className="text-[12px] text-[#86868b]">
              Serving Wesley Chapel &middot; Lutz &middot; Land O&rsquo; Lakes &middot; St. Petersburg
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
