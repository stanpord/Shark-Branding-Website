import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.marblism.com" },
      { protocol: "https", hostname: "www.vendasta.com" },
      { protocol: "https", hostname: "cdn-bjmjf.nitrocdn.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/hackathon",
        destination: "https://sharkaihackathon2.pages.dev/",
        permanent: false,
      },
      {
        source: "/bots/showcase",
        destination: "/aiemployees",
        permanent: true,
      },
      {
        source: "/bots/advisor",
        destination: "/employees/advisor",
        permanent: true,
      },
      {
        source: "/bots",
        destination: "/aiemployees",
        permanent: true,
      },
      {
        source: "/call-bot",
        destination: "/call-employee",
        permanent: true,
      },
      {
        source: "/api/bots-analyze",
        destination: "/api/employees-analyze",
        permanent: true,
      },
      // Old Wix URLs — high impression 404s
      // NOTE: /ai-visibility-consulting and /how-to-rank-on-chatgpt-for-local-businesses
      // have real pages now — do NOT redirect them
      { source: "/local-seo-visibility-audit", destination: "/free-report", permanent: true },
      { source: "/be-a-shark", destination: "/free-report", permanent: true },
      { source: "/north-tampa-bay-chamber-ai-visibility-case-study", destination: "/case-studies", permanent: true },
      { source: "/emorys-rock-realty-ai-visibility-case-study", destination: "/case-studies", permanent: true },
      { source: "/st-petersburg-marketing-consultant", destination: "/tampa", permanent: true },
      { source: "/lutz-marketing-consultant", destination: "/wesley-chapel", permanent: true },
      { source: "/hvac-local-seo-case-study", destination: "/case-studies", permanent: true },
      { source: "/ai-resources", destination: "/resources", permanent: true },
      { source: "/seo-vs-geo-vs-aeo-for-local-businesses/", destination: "/resources", permanent: true },
      { source: "/seo-vs-geo-vs-aeo-for-local-businesses", destination: "/resources", permanent: true },
      { source: "/geo-for-local-businesses", destination: "/resources", permanent: true },
      { source: "/what-is-geo-and-why-it-matters-for-local-businesses", destination: "/resources", permanent: true },
      { source: "/ai-visibility-toolkit", destination: "/plans", permanent: true },
      { source: "/shark-ai-solutions", destination: "/", permanent: true },
      { source: "/blog-ntbc-ai-ready-partnership", destination: "/resources/blog-ntbc-ai-ready-partnership", permanent: true },
      { source: "/blog-trusted-ai-review-responses", destination: "/resources/blog-trusted-ai-review-responses", permanent: true },
      { source: "/blog-ai-map-consistent-business-listings", destination: "/resources/blog-ai-map-consistent-business-listings", permanent: true },
      { source: "/blog-ai-visibility-funnel-part-2", destination: "/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase", permanent: true },
      { source: "/blog-ai-visibility-funnel-part-2/", destination: "/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/plans.html", destination: "/plans", permanent: true },
      { source: "/portfolio.html", destination: "/case-studies", permanent: true },
      { source: "/portfolio", destination: "/case-studies", permanent: true },
      { source: "/workshops.html", destination: "/services", permanent: true },
      { source: "/workshops", destination: "/services", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/tampa-bay-marketing-consultant", destination: "/services", permanent: true },
      { source: "/emorys-rock-realty-case-study", destination: "/case-studies", permanent: true },
      { source: "/blog-north-tampa-bay-chamber-partnership", destination: "/resources/blog-ntbc-ai-ready-partnership", permanent: true },
      { source: "/blog-google-reviews-ai-recommendations", destination: "/resources/blog-google-reviews-ai-recommendations", permanent: true },
      { source: "/blog-ai-funnel-chatgpt-gemini-path-to-purchase", destination: "/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase", permanent: true },
      { source: "/blog-ai-local-search-map", destination: "/resources/blog-ai-map-consistent-business-listings", permanent: true },
      { source: "/free-report.html", destination: "/free-report", permanent: true },
      // New 404s from June 12 GSC coverage report
      { source: "/blog-becoming-trusted-ai-recommendation", destination: "/resources/blog-trusted-ai-review-responses", permanent: true },
      { source: "/generative-engine-optimization", destination: "/ai-visibility-consulting", permanent: true },
      { source: "/blog-seo-old-school-geo-ai-shift", destination: "/resources/blog-seo-old-school-geo-ai-shift", permanent: true },
      { source: "/blog-seo-vs-geo-local-business", destination: "/resources/blog-seo-old-school-geo-ai-shift", permanent: true },
      { source: "/ai-vs-seo-whats-the-difference", destination: "/ai-visibility-consulting", permanent: true },
      { source: "/tampa-marketing-consultant", destination: "/tampa", permanent: true },
      { source: "/blog-ai-funnel-chatgpt-new-front-door", destination: "/resources/blog-ai-funnel-chatgpt-new-front-door", permanent: true },
      { source: "/blog-24-hour-rule-local-trust-ai", destination: "/resources/blog-24-hour-rule-local-trust-ai", permanent: true },
      { source: "/blog-end-of-phone-tag-google-ai-check-prices", destination: "/resources/blog-end-of-phone-tag-google-ai-check-prices", permanent: true },
      { source: "/blog-ai-visibility-funnel-part-1", destination: "/resources/blog-ai-funnel-chatgpt-new-front-door", permanent: true },
      { source: "/blog-google-ai-price-check-ready-to-be-chosen", destination: "/resources/blog-google-ai-price-check-ready-to-be-chosen", permanent: true },
      { source: "/blog-google-reviews-ai-trust-signal", destination: "/resources/blog-google-reviews-ai-recommendations", permanent: true },
      { source: "/land-o-lakes-marketing-consultant", destination: "/wesley-chapel", permanent: true },
      { source: "/how-to-rank-on-chatgpt", destination: "/how-to-rank-on-chatgpt-for-local-businesses", permanent: true },
      { source: "/enterprise", destination: "/franchises", permanent: false },
      { source: "/wesley-chapel-marketing-consultant", destination: "/wesley-chapel", permanent: true },
      { source: "/blog-hvac-invisible-to-number-2-local-search", destination: "/aiemployees/hvac", permanent: true },
      { source: "/what-is-geo-generative-engine-optimization", destination: "/ai-visibility-consulting", permanent: true },
      // July 2026 GSC additions
      { source: "/north-tampa-bay-chamber-ai-visibility-toolkit.html", destination: "/case-studies", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/ai-vs-seo-what-changed-and-what-hasnt", destination: "/ai-visibility-consulting", permanent: true },
      { source: "/marketing", destination: "/aiemployees", permanent: true },
      { source: "/faq", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
