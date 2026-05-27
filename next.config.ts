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
    ];
  },
};

export default nextConfig;
