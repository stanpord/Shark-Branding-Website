import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import AuditModal from "@/components/AuditModal";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shark AI Solutions: AI Employees & AI Visibility for Tampa Bay",
  description:
    "AI employees and AI visibility for Tampa Bay local businesses. Automate leads, follow-up, reviews, and content, and get found on ChatGPT, Google AI, and Gemini.",
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
    title: "Shark AI Solutions",
    description:
      "AI employees and AI visibility for Tampa Bay local businesses. Get found on ChatGPT, Google AI, and Gemini.",
    type: "website",
    url: "https://sharkbrandingsolutions.com",
    siteName: "Shark AI Solutions",
    locale: "en_US",
    images: [
      {
        url: "https://sharkbrandingsolutions.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Shark AI Solutions: AI Employees & AI Visibility for Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shark AI Solutions",
    description: "Get Found. Get Trusted. Get Chosen. AI solutions for forward-thinking businesses.",
    images: ["https://sharkbrandingsolutions.com/logo.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://sharkbrandingsolutions.com/#organization",
      name: "Shark AI Solutions",
      alternateName: "Shark Branding Solutions",
      url: "https://sharkbrandingsolutions.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sharkbrandingsolutions.com/logo.webp",
        width: 300,
        height: 80,
      },
      image: "https://sharkbrandingsolutions.com/logo.webp",
      description:
        "AI Business Consulting for Tampa Bay businesses. We help companies get found by AI, run operations with AI employees, and build the trust signals that make ChatGPT, Perplexity, and Google AI Overviews recommend them.",
      telephone: "+17275133955",
      email: "info@sharkbrandingsolutions.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27251 Wesley Chapel Blvd., Suite B14 #805",
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
        "@id": "https://sharkbrandingsolutions.com/about#michelle",
        name: "Michelle Stanaland",
        jobTitle: "Managing Partner and Founder",
        url: "https://sharkbrandingsolutions.com/about#michelle",
        sameAs: ["https://www.linkedin.com/company/shark-branding-solutions"],
        award: "Top 15 Marketing Experts in Tampa Bay, Influence Digest 2025",
      },
      employee: [
        {
          "@type": "Person",
          "@id": "https://sharkbrandingsolutions.com/about#michelle",
          name: "Michelle Stanaland",
          jobTitle: "Managing Partner and Founder",
          url: "https://sharkbrandingsolutions.com/about#michelle",
        },
        {
          "@type": "Person",
          "@id": "https://sharkbrandingsolutions.com/about#josh",
          name: "Josh Stanaland",
          jobTitle: "Partner and Chief Technology Officer",
          url: "https://sharkbrandingsolutions.com/about#josh",
        },
        {
          "@type": "Person",
          "@id": "https://sharkbrandingsolutions.com/about#tiffany",
          name: "Tiffany Fancher",
          jobTitle: "Chief Operating Officer",
          url: "https://sharkbrandingsolutions.com/about#tiffany",
        },
      ],
      knowsAbout: [
        "AI business consulting",
        "AI search optimization",
        "AI visibility",
        "Generative Engine Optimization",
        "GEO",
        "local SEO",
        "AI employees",
        "AI CRM",
        "marketing automation",
        "reputation management",
      ],
      sameAs: [
        "https://www.linkedin.com/company/shark-branding-solutions",
        "https://www.facebook.com/sharkbrandingsolutions",
        "https://www.instagram.com/sharkbranding",
        "https://www.youtube.com/@sharkbranding",
        "https://www.tiktok.com/@sharkbranding",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sharkbrandingsolutions.com/#website",
      url: "https://sharkbrandingsolutions.com",
      name: "Shark AI Solutions",
      publisher: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://sharkbrandingsolutions.com/#services",
      name: "AI Consulting & Automation Services",
      provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      itemListElement: [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            name: "AI Visibility Consulting",
            description: "Full audit and optimization of your business's presence across ChatGPT, Google AI Overviews, Gemini, and Perplexity. Includes citation fixes, schema markup, trust signal building, and monthly reporting.",
            url: "https://sharkbrandingsolutions.com/ai-visibility-consulting",
            areaServed: "Tampa Bay, FL",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            name: "AI Employees",
            description: "AI-powered employees for local businesses: chat receptionist, voice receptionist, reputation specialist, AI CRM, and sales coach. Automates lead follow-up, review requests, and customer communication 24/7.",
            url: "https://sharkbrandingsolutions.com/aiemployees",
            areaServed: "Tampa Bay, FL",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            name: "Free AI Visibility Report",
            description: "Free 48-hour audit showing exactly how your business appears across search, maps, reviews, and AI platforms.",
            url: "https://sharkbrandingsolutions.com/free-report",
            areaServed: "Tampa Bay, FL",
          },
        },
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
        <main id="main-content" className="flex-1 pt-[116px]">{children}</main>
        <Footer />
        <ChatWidget />
        <ExitIntentPopup />
        <AuditModal />
        <Analytics />
      </body>
    </html>
  );
}
