import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import AuditModal from "@/components/AuditModal";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Visibility Agency | Tampa Bay, FL | Shark AI Solutions",
  description:
    "Shark AI Solutions is Tampa Bay's AI visibility and GEO agency. We get your business recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity. Serving Tampa, Wesley Chapel, and the greater Tampa Bay area.",
  keywords: [
    "AI visibility",
    "GEO agency Tampa",
    "AI SEO Tampa Bay",
    "generative engine optimization",
    "ChatGPT SEO",
    "AI search optimization",
    "Tampa Bay AI agency",
    "AI business consulting Tampa",
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
    canonical: "https://shark-ai-solutions.com",
  },
  openGraph: {
    title: "AI Visibility Agency | Tampa Bay, FL | Shark AI Solutions",
    description:
      "Shark AI Solutions is Tampa Bay's AI visibility and GEO agency. Get your business recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity.",
    type: "website",
    url: "https://shark-ai-solutions.com",
    siteName: "Shark AI Solutions",
    locale: "en_US",
    images: [
      {
        url: "https://shark-ai-solutions.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Shark AI Solutions: AI Visibility & GEO Agency | Tampa Bay, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Visibility Agency | Tampa Bay, FL | Shark AI Solutions",
    description: "Tampa Bay's AI visibility and GEO agency. Get found on ChatGPT, Google AI Overviews, Gemini, and Perplexity.",
    images: ["https://shark-ai-solutions.com/logo.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://shark-ai-solutions.com/#organization",
      name: "Shark AI Solutions",
      alternateName: "Shark Branding Solutions",
      url: "https://shark-ai-solutions.com",
      logo: {
        "@type": "ImageObject",
        url: "https://shark-ai-solutions.com/logo.webp",
        width: 300,
        height: 80,
      },
      image: "https://shark-ai-solutions.com/logo.webp",
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
        "@id": "https://shark-ai-solutions.com/about#michelle",
        name: "Michelle Stanaland",
        jobTitle: "Managing Partner and Founder",
        url: "https://shark-ai-solutions.com/about#michelle",
        sameAs: ["https://www.linkedin.com/company/shark-branding-solutions"],
        award: "Top 15 Marketing Experts in Tampa Bay, Influence Digest 2025",
      },
      employee: [
        {
          "@type": "Person",
          "@id": "https://shark-ai-solutions.com/about#michelle",
          name: "Michelle Stanaland",
          jobTitle: "Managing Partner and Founder",
          url: "https://shark-ai-solutions.com/about#michelle",
        },
        {
          "@type": "Person",
          "@id": "https://shark-ai-solutions.com/about#josh",
          name: "Josh Stanaland",
          jobTitle: "Partner and Chief Technology Officer",
          url: "https://shark-ai-solutions.com/about#josh",
        },
        {
          "@type": "Person",
          "@id": "https://shark-ai-solutions.com/about#tiffany",
          name: "Tiffany Fancher",
          jobTitle: "Chief Operating Officer",
          url: "https://shark-ai-solutions.com/about#tiffany",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "7",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://www.linkedin.com/company/shark-branding-solutions",
        "https://www.facebook.com/sharkbrandingsolutions",
        "https://www.instagram.com/sharkbranding",
        "https://www.youtube.com/@sharkbranding",
        "https://www.tiktok.com/@sharkbranding",
        "https://share.google/qmY6FsoMpxip8rslm",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://shark-ai-solutions.com/#services",
        name: "AI Consulting & Automation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://shark-ai-solutions.com/ai-visibility-consulting#service",
              name: "AI Visibility Consulting",
              description: "Full audit and optimization of your business's presence across ChatGPT, Google AI Overviews, Gemini, and Perplexity. Includes citation fixes, schema markup, trust signal building, and monthly reporting.",
              url: "https://shark-ai-solutions.com/ai-visibility-consulting",
              areaServed: "Tampa Bay, FL",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://shark-ai-solutions.com/aiemployees#service",
              name: "AI Employees",
              description: "AI-powered employees for local businesses: chat receptionist, voice receptionist, reputation specialist, AI CRM, and sales coach. Automates lead follow-up, review requests, and customer communication 24/7.",
              url: "https://shark-ai-solutions.com/aiemployees",
              areaServed: "Tampa Bay, FL",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://shark-ai-solutions.com/free-report#service",
              name: "Free AI Visibility Report",
              description: "Free 48-hour audit showing exactly how your business appears across search, maps, reviews, and AI platforms.",
              url: "https://shark-ai-solutions.com/free-report",
              areaServed: "Tampa Bay, FL",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://shark-ai-solutions.com/#website",
      url: "https://shark-ai-solutions.com",
      name: "Shark AI Solutions",
      publisher: { "@id": "https://shark-ai-solutions.com/#organization" },
      inLanguage: "en-US",
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
          dangerouslySetInnerHTML={{
            __html: `if(typeof $localize==='undefined'){globalThis.$localize=function(p){var r=p[0];for(var i=1;i<p.length;i++)r+=arguments[i]+p[i];return r;};globalThis.$localize.TRANSLATIONS={};globalThis.$localize.LOCALE_ID='en-US';}`,
          }}
        />
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
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="vNvDwenzhopR1QPePhiHOQ"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N8D9SY4FH3"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N8D9SY4FH3');
          `}
        </Script>
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","y8fzj7puf6");
          `}
        </Script>
      </body>
    </html>
  );
}
