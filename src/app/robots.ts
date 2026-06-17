import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Block AI training crawlers while allowing AI search crawlers
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: "https://sharkbrandingsolutions.com/sitemap.xml",
  };
}
