import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Shark AI Solutions",
  description: "A full directory of all pages on SharkBrandingSolutions.com, services, AI employees, automation, resources, and more.",
};

const sections = [
  {
    title: "Core Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Plans & Pricing", href: "/plans" },
      { label: "AI Assessment", href: "/ai-assessment" },
      { label: "Free AI Visibility Report", href: "/free-report" },
      { label: "Website Design & Development", href: "/websites" },
      { label: "Local SEO", href: "/local-seo" },
      { label: "Integrations", href: "/integrations" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Franchises & Multi-Location", href: "/franchises" },
      { label: "Operations", href: "/operations" },
    ],
  },
  {
    title: "AI Employees",
    links: [
      { label: "AI Employees Overview", href: "/aiemployees" },
      { label: "Home Services", href: "/aiemployees/home-services" },
      { label: "Real Estate", href: "/aiemployees/real-estate" },
      { label: "HVAC", href: "/aiemployees/hvac" },
      { label: "Contractors", href: "/aiemployees/contractors" },
      { label: "Healthcare", href: "/aiemployees/healthcare" },
      { label: "Legal", href: "/aiemployees/legal" },
    ],
  },
  {
    title: "Automation",
    links: [
      { label: "Automation Overview", href: "/automation" },
      { label: "Lead Follow-Up", href: "/automation/lead-follow-up" },
      { label: "Review Generation", href: "/automation/review-generation" },
      { label: "Appointment Booking", href: "/automation/appointment-booking" },
    ],
  },
  {
    title: "AI Visibility",
    links: [
      { label: "AI Visibility Consulting", href: "/ai-visibility-consulting" },
      { label: "How to Rank on ChatGPT for Local Businesses", href: "/how-to-rank-on-chatgpt-for-local-businesses" },
    ],
  },
  {
    title: "Comparisons",
    links: [
      { label: "Shark vs. Salesforce", href: "/vs/salesforce" },
      { label: "Shark vs. SEO", href: "/vs/seo" },
    ],
  },
  {
    title: "Local Pages",
    links: [
      { label: "Tampa", href: "/tampa" },
      { label: "Wesley Chapel", href: "/wesley-chapel" },
    ],
  },
  {
    title: "Resources & Blog",
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "The 24-Hour Rule: How Fast Response Builds Local Trust in the AI Era", href: "/resources/blog-24-hour-rule-local-trust-ai" },
      { label: "The AI Funnel: ChatGPT & Gemini Are the New Front Door", href: "/resources/blog-ai-funnel-chatgpt-new-front-door" },
      { label: "The AI Funnel: ChatGPT & Gemini Path to Purchase", href: "/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase" },
      { label: "AI Map: Why Consistent Business Listings Matter", href: "/resources/blog-ai-map-consistent-business-listings" },
      { label: "End of Phone Tag: Google AI Is Already Checking Your Prices", href: "/resources/blog-end-of-phone-tag-google-ai-check-prices" },
      { label: "Google AI Price Check: Are You Ready to Be Chosen?", href: "/resources/blog-google-ai-price-check-ready-to-be-chosen" },
      { label: "Google Reviews & AI Recommendations", href: "/resources/blog-google-reviews-ai-recommendations" },
      { label: "NTBC AI-Ready Partnership", href: "/resources/blog-ntbc-ai-ready-partnership" },
      { label: "SEO Is Old School, The GEO & AI Shift Is Here", href: "/resources/blog-seo-old-school-geo-ai-shift" },
      { label: "How to Write Trusted AI Review Responses", href: "/resources/blog-trusted-ai-review-responses" },
      { label: "AI Visibility Is Not Your Website", href: "/resources/blog-ai-visibility-not-your-website" },
      { label: "5 Automations Wesley Chapel Businesses Should Be Using", href: "/resources/blog-5-automations-wesley-chapel-businesses" },
      { label: "AI Receptionist vs. Human Receptionist", href: "/resources/blog-ai-receptionist-vs-human-receptionist" },
      { label: "AI Answering Service vs. Live Answering Service", href: "/resources/blog-ai-answering-service-vs-live-answering-service" },
      { label: "How to Appear in Google AI Overviews", href: "/resources/blog-how-to-appear-in-google-ai-overviews" },
      { label: "AIO, AEO, GEO & SEO: What Wesley Chapel Businesses Need to Know", href: "/resources/blog-aio-aeo-geo-seo-wesley-chapel" },
      { label: "The End of Local SEO: AI Visibility Is What Matters Now", href: "/resources/blog-end-of-local-seo-ai-visibility" },
      { label: "What Is an AI Employee?", href: "/resources/blog-what-is-an-ai-employee" },
      { label: "Why Tampa Bay Businesses Are Switching to AI Employees", href: "/resources/blog-why-tampa-bay-businesses-switching-ai-employees" },
      { label: "What Is an AI Voice Receptionist?", href: "/resources/blog-what-is-ai-voice-receptionist" },
      { label: "What Is an AI CRM vs. HubSpot?", href: "/resources/blog-what-is-ai-crm-vs-hubspot" },
      { label: "What Is an AI Sales Manager?", href: "/resources/blog-what-is-ai-sales-manager" },
      { label: "What Is an AI Sales Assistant? BANT & Sandler", href: "/resources/blog-what-is-ai-sales-assistant-bant-sandler" },
      { label: "AI Customer Acquisition Statistics 2026", href: "/resources/ai-customer-acquisition-statistics-2026" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Media & Press", href: "/media" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[640px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
            Site Directory
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
            Sitemap
          </h1>
          <p className="lead-airy text-[#555] max-w-[480px] mx-auto">
            Every page on SharkBrandingSolutions.com, organized by section.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white px-6 pb-24 md:pb-32">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#0a0a0a] hover:text-[#18b5d8] transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
