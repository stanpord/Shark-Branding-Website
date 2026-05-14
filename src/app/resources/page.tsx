import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Shark Branding Solutions",
  description:
    "Guides, insights, and practical advice on AI visibility, local SEO, and marketing for Tampa Bay businesses.",
};

const posts = [
  {
    slug: "blog-end-of-phone-tag-google-ai-check-prices",
    category: "AI Visibility",
    title: "The End of Phone Tag: How Google's 'Have AI Check Prices' Is Changing Local Service Discovery",
    excerpt: "Google's AI now calls local businesses to check prices on behalf of customers. If you don't answer, you're listed as 'unreachable.' Here's how to stay in the game.",
    date: "April 3, 2026",
    readTime: "7 min read",
  },
  {
    slug: "blog-google-ai-price-check-ready-to-be-chosen",
    category: "AI Visibility",
    title: "Google's New 'AI Price Check' Is Calling: Is Your Business Ready to Be Chosen?",
    excerpt: "Businesses that don't respond to AI-initiated price checks get flagged as unreachable. Here's the step-by-step action plan to make sure you're ready.",
    date: "April 5, 2026",
    readTime: "7 min read",
  },
  {
    slug: "blog-ai-funnel-chatgpt-new-front-door",
    category: "AI Visibility",
    title: "The AI Funnel: Why ChatGPT Is the New Front Door for Your Customers",
    excerpt: "AI doesn't give customers 100 options. It gives them three. Learn how the AI Funnel works and what it takes to land in that top-three shortlist.",
    date: "April 7, 2026",
    readTime: "6 min read",
  },
  {
    slug: "blog-ai-funnel-chatgpt-gemini-path-to-purchase",
    category: "AI Visibility",
    title: "The AI Funnel: How ChatGPT and Gemini Are Reshaping the Path to Purchase",
    excerpt: "ChatGPT and Gemini have collapsed the customer decision timeline from days to minutes. If your business isn't optimized for AI, you're invisible at the most critical moment.",
    date: "April 9, 2026",
    readTime: "7 min read",
  },
  {
    slug: "blog-ai-map-consistent-business-listings",
    category: "AI Visibility",
    title: "The AI Map: Why Consistent Business Listings Are the Secret to Being Found",
    excerpt: "If your business data is inconsistent across the web, AI models won't recommend you. Learn how to fix your digital map and become the top result.",
    date: "April 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "blog-trusted-ai-review-responses",
    category: "Strategy",
    title: "Don't Leave 'Em Hanging: Using AI to Master the 'Trusted' Stage",
    excerpt: "Getting found is only half the battle. If you're leaving reviews unanswered and your trust signals are weak, AI won't recommend you. Here's how to fix it.",
    date: "April 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "blog-24-hour-rule-local-trust-ai",
    category: "Strategy",
    title: "The 24-Hour Rule: Mastering Local Trust with AI",
    excerpt: "If you aren't responding to reviews within 24 hours, you're handing your competitors your market share. Learn how AI-assisted responses build local trust.",
    date: "April 14, 2026",
    readTime: "8 min read",
  },
  {
    slug: "blog-google-reviews-ai-recommendations",
    category: "Strategy",
    title: "The Future Is AI Visibility: Turning Google Reviews Into AI Recommendations",
    excerpt: "Your Google reviews are no longer just feedback — they're AI visibility signals. Learn how to collect reviews that AI can read, trust, and use to recommend your business.",
    date: "March 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "blog-seo-old-school-geo-ai-shift",
    category: "GEO",
    title: "SEO Is Old School: Why Your Business Needs GEO to Survive the AI Shift",
    excerpt: "Traditional SEO puts you on a list. GEO makes you the recommendation. Learn the three pillars of Generative Engine Optimization and why you must shift now.",
    date: "March 22, 2026",
    readTime: "7 min read",
  },
];

const categories = ["All", "AI Visibility", "Strategy", "GEO", "Partnership"];

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Resources
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Insights to help your
            <br />
            <span className="text-[#18b5d8]">business stay ahead.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[500px] mx-auto mb-12" style={{ textWrap: "balance" }}>
            Practical guides on AI visibility, local SEO, and marketing automation — written for Tampa Bay business owners, not tech teams.
          </p>
          {/* Article count stat */}
          <div className="inline-flex items-center gap-6 border-t border-b border-[#e8e8ed] py-5 px-2">
            <div className="text-center">
              <p className="text-[32px] font-bold text-[#18b5d8] leading-none">{posts.length + 1}</p>
              <p className="text-[12px] text-[#7a7a7a] font-semibold tracking-wide uppercase mt-1">Articles</p>
            </div>
            <div className="w-px h-10 bg-[#e8e8ed]" aria-hidden="true" />
            <div className="text-center">
              <p className="text-[32px] font-bold text-[#18b5d8] leading-none">4</p>
              <p className="text-[12px] text-[#7a7a7a] font-semibold tracking-wide uppercase mt-1">Topics</p>
            </div>
            <div className="w-px h-10 bg-[#e8e8ed]" aria-hidden="true" />
            <div className="text-center">
              <p className="text-[32px] font-bold text-[#18b5d8] leading-none">Free</p>
              <p className="text-[12px] text-[#7a7a7a] font-semibold tracking-wide uppercase mt-1">Always</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-8">Featured</p>
          <Link
            href="/resources/blog-ntbc-ai-ready-partnership"
            className="group flex flex-col md:flex-row gap-0 overflow-hidden rounded-[20px] border border-white/8 hover:border-[#18b5d8]/40 motion-safe:transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            <div className="md:w-[44%] shrink-0">
              <img
                src="https://cdn.marblism.com/Nco3hsiA150.webp"
                alt="Shark Branding Solutions Partners with North Tampa Bay Chamber"
                width={440}
                height={360}
                className="w-full h-full object-cover"
                style={{ minHeight: "260px", maxHeight: "380px" }}
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 bg-[#07141a]">
              <span className="inline-block bg-[#18b5d8] text-black text-[11px] font-bold rounded-full px-3 py-1 mb-5 w-fit tracking-wide uppercase">
                Partnership
              </span>
              <h2 className="text-[22px] font-semibold text-white leading-snug mb-4 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150" style={{ textWrap: "balance" }}>
                AI-Ready: Shark Branding Solutions Partners with North Tampa Bay Chamber to Future-Proof Local Business
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed mb-6">
                Shark Branding Solutions partners with the North Tampa Bay Chamber to help every local business get Found, Trusted, and Chosen by AI. NTBC members receive a free Business Visibility Report — no strings attached.
              </p>
              <div className="flex items-center gap-3 text-[13px] text-white/30">
                <span>April 15, 2026</span>
                <span>&middot;</span>
                <span>10 min read</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Blog grid ── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`text-[13px] font-semibold rounded-full px-4 py-2 ${
                  i === 0
                    ? "bg-[#0a0a0a] text-white"
                    : "text-[#333333] border border-[#e0e0e0]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group flex flex-col bg-[#f5f5f7] rounded-[20px] p-7 hover:bg-[#eeeef0] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                <span className="text-[#18b5d8] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
                  {post.category}
                </span>
                <h2 className="text-[17px] font-semibold text-[#0a0a0a] mb-3 leading-snug group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150 flex-1" style={{ textWrap: "balance" }}>
                  {post.title}
                </h2>
                <p className="text-[14px] text-[#7a7a7a] leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[12px] text-[#7a7a7a] font-semibold border-t border-[#e0e0e0] pt-4">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Stay sharp</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Get new insights first.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            We publish practical guides on AI visibility and marketing automation. Reach out and we&rsquo;ll make sure you don&rsquo;t miss the ones that matter for your business.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Stay in the Loop
          </Link>
        </div>
      </section>
    </>
  );
}
