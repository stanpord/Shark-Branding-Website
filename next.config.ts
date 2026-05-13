import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/Hackathon",
        destination: "https://sharkaihackathon2.pages.dev/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
