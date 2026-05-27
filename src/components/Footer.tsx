import Link from "next/link";

const services = [
  { href: "/services#ai-visibility", label: "AI Business Consulting" },
  { href: "/services#toolkit", label: "AI Visibility Toolkit" },
  { href: "/services#workshops", label: "Workshops & Training" },
  { href: "/free-report", label: "Free AI Audit" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/about#michelle", label: "Michelle Stanaland" },
  { href: "/contact", label: "Contact" },
];

const resources = [
  { href: "/resources/blog-seo-old-school-geo-ai-shift", label: "GEO vs. SEO" },
  { href: "/resources/blog-ai-funnel-chatgpt-new-front-door", label: "The AI Funnel" },
  { href: "/resources/blog-google-reviews-ai-recommendations", label: "Reviews & AI" },
  { href: "/resources/blog-24-hour-rule-local-trust-ai", label: "The 24-Hour Rule" },
  { href: "/resources", label: "All Articles" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#333333]">
      <div className="max-w-[980px] mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mb-12">
          <div>
            <h2 className="text-[11px] font-semibold text-[#1d1d1f] mb-4 tracking-wide uppercase">
              Services
            </h2>
            <ul className="space-y-0">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[17px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors leading-[2.41]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold text-[#1d1d1f] mb-4 tracking-wide uppercase">
              Company
            </h2>
            <ul className="space-y-0">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-[17px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors leading-[2.41]"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold text-[#1d1d1f] mb-4 tracking-wide uppercase">
              Resources
            </h2>
            <ul className="space-y-0">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-[17px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors leading-[2.41]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold text-[#1d1d1f] mb-4 tracking-wide uppercase">
              Contact
            </h2>
            <ul className="space-y-0">
              <li>
                <a
                  href="tel:+17275133955"
                  className="text-[17px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors leading-[2.41]"
                >
                  (727) 513-3955
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sharkbrandingsolutions.com"
                  className="text-[13px] text-[#333333] hover:text-[#18b5d8] motion-safe:transition-colors leading-[2.41]"
                >
                  info@sharkbrandingsolutions.com
                </a>
              </li>
              <li>
                <span className="text-[17px] leading-[2.41] text-[#7a7a7a]">
                  Wesley Chapel, FL 33544
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline */}
        <div className="border-t border-[#e0e0e0] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#7a7a7a]">
            Copyright &copy; {new Date().getFullYear()} Shark Branding
            Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy"
              className="text-[12px] text-[#7a7a7a] hover:text-[#18b5d8] motion-safe:transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-[#7a7a7a] hover:text-[#18b5d8] motion-safe:transition-colors"
            >
              Terms of Service
            </Link>
            <p className="text-[12px] text-[#7a7a7a]">
              Serving Tampa Bay: Wesley Chapel &middot; Lutz &middot; Land
              O&rsquo; Lakes &middot; St. Petersburg
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
