import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.marblism.com" },
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
    ];
  },
};

export default nextConfig;
