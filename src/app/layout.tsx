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
  openGraph: {
    title: "Shark Branding Solutions",
    description:
      "Get Found. Get Trusted. Get Chosen. AI solutions for forward-thinking businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://cdn.apigateway.co" />
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
