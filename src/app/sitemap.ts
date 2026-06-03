import type { MetadataRoute } from "next";

const BASE = "https://sharkbrandingsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/services`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/operations`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/marketing`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/free-report`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/case-studies`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: "2026-05-22", changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/resources/blog-24-hour-rule-local-trust-ai`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-new-front-door`, lastModified: "2026-04-08", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-map-consistent-business-listings`, lastModified: "2026-04-12", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-end-of-phone-tag-google-ai-check-prices`, lastModified: "2026-04-03", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-google-ai-price-check-ready-to-be-chosen`, lastModified: "2026-04-05", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-google-reviews-ai-recommendations`, lastModified: "2026-04-07", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-ntbc-ai-ready-partnership`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-seo-old-school-geo-ai-shift`, lastModified: "2026-04-06", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/blog-trusted-ai-review-responses`, lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/vs/marketing-agency`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: "2026-05-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: "2026-05-01", changeFrequency: "yearly", priority: 0.6 },
  ];
}
