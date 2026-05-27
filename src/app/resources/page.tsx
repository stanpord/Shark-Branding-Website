import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resources — Shark Branding Solutions",
  description:
    "Guides, insights, and practical advice on AI visibility, local SEO, and marketing for Tampa Bay businesses.",
};

const posts = [
  {
    slug: "blog-end-of-local-seo-ai-visibility",
    category: "AI Visibility",
    title: "What the End of Local SEO Means for Your Business",
    excerpt: "AI Overviews now appear on over 60% of Google searches. Local SEO as you knew it is ending. Here's what changed, why it matters, and three things to do right now.",
    date: "May 20, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&h=420&q=80",
  },
  {
    slug: "blog-end-of-phone-tag-google-ai-check-prices",
    category: "AI Visibility",
    title: "The End of Phone Tag: How Google's 'Have AI Check Prices' Is Changing Local Service Discovery",
    excerpt: "Google's AI now calls local businesses to check prices on behalf of customers. If you don't answer, you're listed as 'unreachable.' Here's how to stay in the game.",
    date: "April 3, 2026",
    readTime: "7 min read",
    image: "https://cdn.marblism.com/pAHnAFvGQW-.webp",
  },
  {
    slug: "blog-google-ai-price-check-ready-to-be-chosen",
    category: "AI Visibility",
    title: "Google's New 'AI Price Check' Is Calling: Is Your Business Ready to Be Chosen?",
    excerpt: "Businesses that don't respond to AI-initiated price checks get flagged as unreachable. Here's the step-by-step action plan to make sure you're ready.",
    date: "April 5, 2026",
    readTime: "7 min read",
    image: "https://cdn.marblism.com/JgoUj9sIFN7.webp",
  },
  {
    slug: "blog-ai-funnel-chatgpt-new-front-door",
    category: "AI Visibility",
    title: "The AI Funnel: Why ChatGPT Is the New Front Door for Your Customers",
    excerpt: "AI doesn't give customers 100 options. It gives them three. Learn how the AI Funnel works and what it takes to land in that top-three shortlist.",
    date: "April 7, 2026",
    readTime: "6 min read",
    image: "https://cdn.marblism.com/WCQ37axSRBo.webp",
  },
  {
    slug: "blog-ai-funnel-chatgpt-gemini-path-to-purchase",
    category: "AI Visibility",
    title: "The AI Funnel: How ChatGPT and Gemini Are Reshaping the Path to Purchase",
    excerpt: "ChatGPT and Gemini have collapsed the customer decision timeline from days to minutes. If your business isn't optimized for AI, you're invisible at the most critical moment.",
    date: "April 9, 2026",
    readTime: "7 min read",
    image: "https://cdn.marblism.com/8f2m0RQROII.webp",
  },
  {
    slug: "blog-ai-map-consistent-business-listings",
    category: "AI Visibility",
    title: "The AI Map: Why Consistent Business Listings Are the Secret to Being Found",
    excerpt: "If your business data is inconsistent across the web, AI models won't recommend you. Learn how to fix your digital map and become the top result.",
    date: "April 10, 2026",
    readTime: "7 min read",
    image: "https://cdn.marblism.com/7iy6leaSINV.webp",
  },
  {
    slug: "blog-trusted-ai-review-responses",
    category: "Strategy",
    title: "Don't Leave 'Em Hanging: Using AI to Master the 'Trusted' Stage",
    excerpt: "Getting found is only half the battle. If you're leaving reviews unanswered and your trust signals are weak, AI won't recommend you. Here's how to fix it.",
    date: "April 12, 2026",
    readTime: "8 min read",
    image: "https://cdn.marblism.com/9UR7nYzKUsH.webp",
  },
  {
    slug: "blog-24-hour-rule-local-trust-ai",
    category: "Strategy",
    title: "The 24-Hour Rule: Mastering Local Trust with AI",
    excerpt: "If you aren't responding to reviews within 24 hours, you're handing your competitors your market share. Learn how AI-assisted responses build local trust.",
    date: "April 14, 2026",
    readTime: "8 min read",
    image: "https://cdn.marblism.com/Pa2DPW_JehC.webp",
  },
  {
    slug: "blog-google-reviews-ai-recommendations",
    category: "Strategy",
    title: "The Future Is AI Visibility: Turning Google Reviews Into AI Recommendations",
    excerpt: "Your Google reviews are no longer just feedback. They're AI visibility signals. Learn how to collect reviews that AI can read, trust, and use to recommend your business.",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "https://cdn.marblism.com/y52lgWLfO0y.webp",
  },
  {
    slug: "blog-seo-old-school-geo-ai-shift",
    category: "GEO",
    title: "SEO Is Old School: Why Your Business Needs GEO to Survive the AI Shift",
    excerpt: "Traditional SEO puts you on a list. GEO makes you the recommendation. Learn the three pillars of Generative Engine Optimization and why you must shift now.",
    date: "March 22, 2026",
    readTime: "7 min read",
    image: "https://cdn.marblism.com/2VbuJ2Gidnh.webp",
  },
];

const lead = posts[0];
const above = posts.slice(1, 3);
const below = posts.slice(3);

export default function ResourcesPage() {
  return (
    <div className={playfair.variable}>

      {/* ── Date bar ── */}
      <div className="bg-white border-b border-black/20 px-6 py-2 mt-[60px]">
        <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#666]">
          <span>Tampa Bay&rsquo;s AI Visibility Resource</span>
          <span className="hidden sm:block">sharkbrandingsolutions.com</span>
          <span>May 2026 &nbsp;&middot;&nbsp; Always Free</span>
        </div>
      </div>

      {/* ── Masthead ── */}
      <header className="bg-white px-6 pt-8 pb-0">
        <div className="max-w-[1120px] mx-auto text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#18b5d8] mb-3">
            Est. 2024 &nbsp;&middot;&nbsp; Wesley Chapel, FL &nbsp;&middot;&nbsp; {posts.length + 1} Articles Published
          </p>
          <h1
            className="text-[48px] sm:text-[64px] md:text-[80px] leading-none tracking-[-0.02em] text-black mb-3"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Shark Branding Intelligence
          </h1>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#555] mb-5">
            The AI Visibility Dispatch &nbsp;&middot;&nbsp; For Tampa Bay Business Owners
          </p>
          <div className="border-t-[3px] border-black" />
          <div className="border-t border-black/25 mt-[3px]" />
        </div>
      </header>

      {/* ── Section nav ── */}
      <nav className="bg-white px-6 border-b-2 border-black">
        <div className="max-w-[1120px] mx-auto flex overflow-x-auto">
          {["All", "AI Visibility", "Strategy", "GEO", "Partnership"].map((cat, i) => (
            <span
              key={cat}
              className={`shrink-0 text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-3 border-r border-black/15 cursor-default select-none ${
                i === 0 ? "text-[#18b5d8] border-b-2 border-b-[#18b5d8] -mb-[2px]" : "text-[#444] hover:text-black"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </nav>

      {/* ── Front page ── */}
      <section className="bg-white px-6">
        <div className="max-w-[1120px] mx-auto border-b-2 border-black">
          <div className="flex flex-col lg:flex-row">

            {/* Lead story */}
            <div className="lg:w-[62%] py-8 pr-0 lg:pr-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] border border-[#18b5d8] text-[#18b5d8] px-2 py-[3px]">
                  {lead.category}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#18b5d8]">Lead Story</span>
              </div>

              <h2
                className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.05] text-black mb-5"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
              >
                <Link href={`/resources/${lead.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                  {lead.title}
                </Link>
              </h2>

              <p className="text-[16px] text-[#333] leading-[1.7] mb-6 max-w-[540px]">
                {lead.excerpt}
              </p>

              <Link href={`/resources/${lead.slug}`} className="block mb-6 group">
                <img
                  src={lead.image}
                  alt={lead.title}
                  className="w-full object-cover group-hover:opacity-95 transition-opacity"
                  style={{ height: "300px" }}
                />
              </Link>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#888] uppercase tracking-[0.1em] font-semibold border-t border-black/15 pt-4">
                <span>By Shark Branding Solutions</span>
                <span className="text-black/30">&middot;</span>
                <span>{lead.date}</span>
                <span className="text-black/30">&middot;</span>
                <span>{lead.readTime}</span>
                <Link
                  href={`/resources/${lead.slug}`}
                  className="ml-auto text-[#18b5d8] hover:underline tracking-[0.08em] text-[11px]"
                >
                  Continue Reading &rarr;
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:w-[38%] pl-0 lg:pl-8 py-8 flex flex-col">
              {above.map((post, i) => (
                <div key={post.slug} className={`pb-6 ${i < above.length - 1 ? "mb-6 border-b border-black/15" : "mb-6"}`}>
                  <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] border border-[#18b5d8] text-[#18b5d8] px-2 py-[3px] mb-3">
                    {post.category}
                  </span>
                  <h3
                    className="text-[20px] sm:text-[22px] leading-[1.15] text-black mb-3"
                    style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
                  >
                    <Link href={`/resources/${post.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[14px] text-[#555] leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="text-[11px] text-[#999] uppercase tracking-[0.08em] font-semibold">
                    {post.date} &nbsp;&middot;&nbsp; {post.readTime}
                  </div>
                </div>
              ))}

              {/* Free report callout — styled like a newspaper ad */}
              <div className="mt-auto border-2 border-black p-5">
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#18b5d8] mb-2 border-b border-black/10 pb-2">
                  Free for Tampa Bay Businesses
                </div>
                <h4
                  className="text-[18px] leading-snug text-black mb-3 mt-3"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontStyle: "italic" }}
                >
                  Find Out How AI Sees Your Business Right Now
                </h4>
                <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                  We audit your visibility across AI search, maps, and reviews, and show you exactly what needs fixing.
                </p>
                <Link
                  href="/free-report"
                  className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] bg-black text-white px-5 py-2.5 hover:bg-[#18b5d8] transition-colors"
                >
                  Get the Free Report &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Below the fold header ── */}
      <div className="bg-white px-6 pt-8 pb-0">
        <div className="max-w-[1120px] mx-auto flex items-center gap-5 mb-0">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black whitespace-nowrap">
            From the Intelligence Desk
          </span>
          <div className="flex-1 border-t-2 border-black" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black whitespace-nowrap">
            {below.length} More Articles
          </span>
        </div>
      </div>

      {/* ── Article columns ── */}
      <section className="bg-white px-6 pt-6 pb-16">
        <div className="max-w-[1120px] mx-auto">

          {/* Desktop: newspaper columns with rules */}
          <div className="hidden lg:flex gap-0 border-t border-black/15">
            {below.map((post, i) => (
              <div
                key={post.slug}
                className={`flex-1 pt-6 ${i > 0 ? "pl-7 border-l border-black/15" : ""} ${i < below.length - 1 ? "pr-7" : ""}`}
              >
                <Link href={`/resources/${post.slug}`} className="block mb-4 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover group-hover:opacity-90 transition-opacity"
                    style={{ height: "130px" }}
                  />
                </Link>
                <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] text-[#18b5d8] mb-2">
                  {post.category}
                </span>
                <h3
                  className="text-[17px] leading-[1.2] text-black mb-2"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
                >
                  <Link href={`/resources/${post.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="text-[11px] text-[#aaa] uppercase tracking-[0.08em] font-semibold border-t border-black/10 pt-3">
                  {post.date}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/tablet: 2-column grid */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-black/15 pt-6">
            {below.map((post) => (
              <div key={post.slug}>
                <Link href={`/resources/${post.slug}`} className="block mb-4 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover group-hover:opacity-90 transition-opacity"
                    style={{ height: "160px" }}
                  />
                </Link>
                <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] text-[#18b5d8] mb-2">
                  {post.category}
                </span>
                <h3
                  className="text-[19px] leading-snug text-black mb-2"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
                >
                  <Link href={`/resources/${post.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed mb-3">{post.excerpt}</p>
                <div className="text-[11px] text-[#aaa] uppercase tracking-[0.08em] font-semibold border-t border-black/10 pt-3">
                  {post.date} &middot; {post.readTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NTBC Partnership feature ── */}
      <section className="bg-[#f5f5f2] px-6 py-12 border-t-2 border-black">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center gap-5 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black whitespace-nowrap">Featured Partnership</span>
            <div className="flex-1 border-t-2 border-black" />
          </div>
          <Link
            href="/resources/blog-ntbc-ai-ready-partnership"
            className="group flex flex-col md:flex-row gap-0 border-2 border-black hover:border-[#18b5d8] transition-colors duration-150 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
          >
            <div className="md:w-[42%] shrink-0">
              <img
                src="https://cdn.marblism.com/Nco3hsiA150.webp"
                alt="Shark Branding Solutions Partners with North Tampa Bay Chamber"
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
                style={{ minHeight: "220px", maxHeight: "340px" }}
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="inline-block text-[9px] font-bold uppercase tracking-[0.25em] border border-black text-black px-2 py-[3px] mb-4 w-fit">
                Partnership
              </span>
              <h2
                className="text-[24px] md:text-[28px] leading-[1.1] text-black mb-4 group-hover:text-[#18b5d8] transition-colors duration-150"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
              >
                AI-Ready: Shark Branding Solutions Partners with North Tampa Bay Chamber to Future-Proof Local Business
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed mb-5">
                Shark Branding Solutions partners with the North Tampa Bay Chamber to help every local business get Found, Trusted, and Chosen by AI. NTBC members receive a free Business Visibility Report, no strings attached.
              </p>
              <div className="text-[11px] text-[#999] uppercase tracking-[0.1em] font-semibold">
                By Shark Branding Solutions &nbsp;&middot;&nbsp; April 15, 2026 &nbsp;&middot;&nbsp; 10 min read
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-t-2 border-[#18b5d8]">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="border border-white/10 p-10 md:p-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#18b5d8] mb-5">
              Intelligence Direct to You
            </p>
            <h2
              className="text-[36px] md:text-[44px] leading-[1.08] text-white mb-5"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontStyle: "italic" }}
            >
              Stay ahead of the AI shift.
            </h2>
            <p className="text-[16px] text-white/50 leading-relaxed mb-8 max-w-[420px] mx-auto">
              Practical intelligence on AI visibility and marketing automation, written for Tampa Bay business owners, not tech teams.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#18b5d8] text-white text-[12px] font-bold uppercase tracking-[0.18em] px-8 py-4 hover:bg-[#1ec8ee] transition-colors"
            >
              Stay in the Loop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
