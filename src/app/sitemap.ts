import type { MetadataRoute } from "next";

const BASE = "https://sharkbrandingsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/operations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/plans`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/free-report`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/aiemployees`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-informations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Blog posts
    { url: `${BASE}/resources/blog-end-of-local-seo-ai-visibility`, lastModified: new Date("2026-05-20"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ntbc-ai-ready-partnership`, lastModified: new Date("2026-04-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-new-front-door`, lastModified: new Date("2026-04-01"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase`, lastModified: new Date("2026-03-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-map-consistent-business-listings`, lastModified: new Date("2026-03-01"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-google-ai-price-check-ready-to-be-chosen`, lastModified: new Date("2026-02-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-end-of-phone-tag-google-ai-check-prices`, lastModified: new Date("2026-02-01"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-google-reviews-ai-recommendations`, lastModified: new Date("2026-01-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-trusted-ai-review-responses`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-seo-old-school-geo-ai-shift`, lastModified: new Date("2025-12-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/resources/blog-24-hour-rule-local-trust-ai`, lastModified: new Date("2025-12-01"), changeFrequency: "yearly", priority: 0.7 },
  ];
}
