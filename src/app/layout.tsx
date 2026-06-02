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
  title: "Shark Branding Solutions — AI Business Consulting | Tampa Bay, FL",
  description:
    "AI Business Consulting for Tampa Bay businesses. Get found by ChatGPT, Google AI Overviews & Gemini — without ads. Serving Wesley Chapel, Lutz, Land O' Lakes & St. Pete.",
  keywords: [
    "AI business consulting",
    "AI visibility",
    "ChatGPT SEO",
    "AI search optimization",
    "Tampa Bay marketing",
    "Wesley Chapel marketing consultant",
    "AI visibility toolkit",
    "generative engine optimization",
  ],
  alternates: {
    canonical: "https://sharkbrandingsolutions.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Shark Branding Solutions — AI Business Consulting",
    description:
      "Get Found. Get Trusted. Get Chosen. AI solutions for Tampa Bay businesses — without paying for ads.",
    type: "website",
    url: "https://sharkbrandingsolutions.com",
    images: [
      {
        url: "https://sharkbrandingsolutions.com/ai-visibility-hero.webp",
        width: 900,
        height: 900,
        alt: "Shark Branding Solutions — AI Business Consulting for Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shark Branding Solutions — AI Business Consulting",
    description:
      "Get Found. Get Trusted. Get Chosen. AI solutions for Tampa Bay businesses.",
    images: ["https://sharkbrandingsolutions.com/ai-visibility-hero.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sharkbrandingsolutions.com/#website",
      url: "https://sharkbrandingsolutions.com",
      name: "Shark Branding Solutions",
      publisher: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://sharkbrandingsolutions.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://sharkbrandingsolutions.com/#organization",
      name: "Shark Branding Solutions",
      alternateName: "Shark AI Solutions",
      url: "https://sharkbrandingsolutions.com",
      logo: "https://sharkbrandingsolutions.com/logo.webp",
      description:
        "AI Business Consulting for Tampa Bay businesses. We help companies get found by AI, run operations with AI employees, and build the trust signals that make ChatGPT, Perplexity, and Google AI Overviews recommend them.",
      telephone: "+17275133955",
      email: "info@sharkbrandingsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Wesley Chapel",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        postalCode: "33544",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "City", name: "Lutz" },
        { "@type": "City", name: "Land O' Lakes" },
        { "@type": "City", name: "St. Petersburg" },
        { "@type": "City", name: "Tampa" },
      ],
      foundingDate: "2018",
      priceRange: "$$",
      founder: {
        "@id": "https://sharkbrandingsolutions.com/#michelle",
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
      sameAs: [
        "https://www.linkedin.com/company/shark-branding-solutions",
        "https://sharkbrandingsolutions.com",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "12",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/#webpage",
      url: "https://sharkbrandingsolutions.com",
      name: "AI Visibility Consulting for Tampa Bay Businesses | Shark Branding Solutions",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      datePublished: "2024-01-01",
      dateModified: "2026-05-17",
      description:
        "AI Business Consulting for Tampa Bay businesses. Get found by ChatGPT, Google AI Overviews & Gemini — without ads.",
    },
    {
      "@type": "Review",
      "@id": "https://sharkbrandingsolutions.com/#review-tuttle",
      itemReviewed: {
        "@id": "https://sharkbrandingsolutions.com/#organization",
      },
      author: {
        "@type": "Person",
        name: "Jonathan Tuttle",
        description: "Drywall Company Owner — Pinellas County, FL",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "They completely transformed how our business shows up online. We're now showing up on AI search platforms, where before we were basically invisible.",
    },
    {
      "@type": "Person",
      "@id": "https://sharkbrandingsolutions.com/#michelle",
      name: "Michelle Stanaland",
      jobTitle: "Founder & CEO",
      description:
        "Top 15 Marketing Expert in Tampa Bay — Influence Digest, 2025. AI visibility consultant serving Tampa Bay businesses.",
      url: "https://sharkbrandingsolutions.com/about",
      sameAs: [
        "https://www.linkedin.com/company/shark-branding-solutions",
        "https://influencedigest.com/marketing-expert/top-marketing-experts-in-tampa-in-2025/",
      ],
      worksFor: {
        "@id": "https://sharkbrandingsolutions.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://sharkbrandingsolutions.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI visibility consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI visibility consulting helps your business get found and recommended by AI-powered search tools like ChatGPT, Google AI Overviews, and Gemini. We optimize your listings, content, and trust signals so AI recommends you — not your competitors.",
          },
        },
        {
          "@type": "Question",
          name: "How does Shark Branding Solutions help Tampa Bay businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide AI business consulting, AI visibility toolkits, AI marketing employees, and operations automation for local businesses in Wesley Chapel, Lutz, Land O' Lakes, St. Petersburg, and Tampa. Our clients typically see measurable ranking improvements within 30 days.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can I see results from AI visibility optimization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients see measurable improvements within 30 days. One HVAC client moved from #32 to #2 in under 30 days after we optimized their AI visibility signals.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to run ads to appear in AI search results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI recommendations from ChatGPT, Gemini, and Google AI Overviews are based on trust signals, consistent business data, reviews, and content quality — not paid ads. Our AI Visibility Toolkit targets exactly these organic signals.",
          },
        },
        {
          "@type": "Question",
          name: "What is GEO — Generative Engine Optimization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generative Engine Optimization (GEO) is the practice of optimizing a business's content, listings, and trust signals so that AI-powered tools like ChatGPT, Google AI Overviews, Perplexity, and Gemini recommend it in their generated answers. Unlike traditional SEO, which targets ranked blue links, GEO targets the AI answer layer — the responses users now see before they ever click a result.",
          },
        },
        {
          "@type": "Question",
          name: "What types of businesses does Shark Branding Solutions work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work primarily with local and regional businesses in the Tampa Bay area — including service businesses, real estate professionals, contractors, healthcare providers, and chamber organizations. Our clients are typically owner-operated businesses that want to compete for AI-driven recommendations without depending on paid advertising.",
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
        <link rel="preconnect" href="https://cdn.apigateway.co" />
        <link rel="preconnect" href="https://cdn.marblism.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5T6S7CXR');` }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5T6S7CXR" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
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
