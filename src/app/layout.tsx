import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shark Branding Solutions — AI Business Consulting",
  description:
    "AI Business Consulting that makes your company run better, grow faster, and stay visible — even when you're not there.",
  keywords: [
    "AI business consulting",
    "AI visibility",
    "ChatGPT SEO",
    "AI search optimization",
    "Tampa Bay marketing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/icon.png", sizes: "180x180" },
  },
  alternates: {
    canonical: "https://sharkbrandingsolutions.com",
  },
  openGraph: {
    title: "Shark Branding Solutions",
    description:
      "Get Found. Get Trusted. Get Chosen. AI solutions for forward-thinking businesses.",
    type: "website",
    url: "https://sharkbrandingsolutions.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://sharkbrandingsolutions.com/#organization",
      name: "Shark Branding Solutions",
      alternateName: "Shark AI Solutions",
      url: "https://sharkbrandingsolutions.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sharkbrandingsolutions.com/logo.webp",
        width: 300,
        height: 80,
      },
      image: "https://sharkbrandingsolutions.com/logo.webp",
      description:
        "AI Business Consulting for Tampa Bay businesses. We help companies get found by AI, run operations with AI bots, and build the trust signals that make ChatGPT, Perplexity, and Google AI Overviews recommend them.",
      telephone: "+17278556505",
      email: "info@sharkbrandingsolutions.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        postalCode: "33544",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "City", name: "Lutz" },
        { "@type": "City", name: "Land O Lakes" },
        { "@type": "City", name: "St. Petersburg" },
        { "@type": "City", name: "Tampa" },
      ],
      founder: {
        "@type": "Person",
        "@id": "https://sharkbrandingsolutions.com/#founder",
        name: "Michelle Stanaland",
        jobTitle: "Founder & CEO",
      },
      knowsAbout: [
        "AI business consulting",
        "AI search optimization",
        "AI visibility",
        "local SEO",
        "AI CRM",
        "marketing automation",
        "reputation management",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://cdn.apigateway.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#18b5d8] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
