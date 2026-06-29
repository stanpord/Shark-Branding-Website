import type { MetadataRoute } from "next";

const BASE = "https://sharkbrandingsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ──
    { url: BASE, lastModified: "2026-06-24", changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai-visibility-consulting`, lastModified: "2026-06-12", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/aiemployees`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/automation`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/free-report`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/plans`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/operations`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-assessment`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/chamber`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },

    // ── How-to / landing ──
    { url: `${BASE}/how-to-rank-on-chatgpt-for-local-businesses`, lastModified: "2026-06-12", changeFrequency: "monthly", priority: 0.8 },

    // ── Competitor comparison pages ──
    { url: `${BASE}/vs/marketing-agency`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/vs/salesforce`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/vs/seo`, lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/vs/zapier`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },

    // ── AI Employees sub-pages ──
    { url: `${BASE}/aiemployees/home-services`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/aiemployees/real-estate`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/aiemployees/hvac`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/aiemployees/contractors`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/aiemployees/healthcare`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/aiemployees/legal`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },

    // ── Automation sub-pages ──
    { url: `${BASE}/automation/lead-follow-up`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/automation/review-generation`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/automation/appointment-booking`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },

    // ── Local / geo pages ──
    { url: `${BASE}/tampa`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/wesley-chapel`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },

    // ── Resources hub ──
    { url: `${BASE}/resources`, lastModified: "2026-06-24", changeFrequency: "weekly", priority: 0.8 },

    // ── Blog posts — AI Visibility ──
    { url: `${BASE}/resources/blog-ai-visibility-not-your-website`, lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-how-to-appear-in-google-ai-overviews`, lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-end-of-local-seo-ai-visibility`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-aio-aeo-geo-seo-wesley-chapel`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-seo-old-school-geo-ai-shift`, lastModified: "2026-04-06", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-new-front-door`, lastModified: "2026-04-08", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-map-consistent-business-listings`, lastModified: "2026-04-12", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-google-reviews-ai-recommendations`, lastModified: "2026-04-07", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-24-hour-rule-local-trust-ai`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-trusted-ai-review-responses`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-end-of-phone-tag-google-ai-check-prices`, lastModified: "2026-04-03", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-google-ai-price-check-ready-to-be-chosen`, lastModified: "2026-04-05", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ntbc-ai-ready-partnership`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.7 },

    // ── Blog posts — AI Employees ──
    { url: `${BASE}/resources/blog-what-is-an-ai-employee`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-why-tampa-bay-businesses-switching-ai-employees`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-receptionist-vs-human-receptionist`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-answering-service-vs-live-answering-service`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-5-automations-wesley-chapel-businesses`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },

    // ── Company pages ──
    { url: `${BASE}/about`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/media`, lastModified: "2026-06-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.3 },
  ];
}
