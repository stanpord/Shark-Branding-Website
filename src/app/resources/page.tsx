import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Shark Branding Solutions",
  description:
    "Guides, insights, and practical advice on AI visibility, local SEO, and marketing automation for Tampa Bay businesses.",
};

const posts = [
  {
    slug: "why-ai-search-matters-local-business",
    category: "AI Visibility",
    title: "Why AI Search Is Now the First Stop for Local Buyers",
    excerpt:
      "Before customers visit your website — or even Google your name — more of them are asking ChatGPT, Perplexity, and Google AI for recommendations. Here's what that means for your business.",
    date: "May 2025",
    readTime: "5 min read",
  },
  {
    slug: "listing-accuracy-ai-rankings",
    category: "Local SEO",
    title: "How Listing Accuracy Directly Impacts Your AI Search Rankings",
    excerpt:
      "Inconsistent NAP data across directories doesn't just hurt your Google ranking — it confuses AI models and gets your business filtered out of AI-generated recommendations entirely.",
    date: "April 2025",
    readTime: "7 min read",
  },
  {
    slug: "ai-crm-vs-traditional-crm",
    category: "Operations",
    title: "AI CRM vs. Traditional CRM: What Tampa Bay Businesses Need to Know",
    excerpt:
      "Traditional CRMs store data. AI CRMs act on it. We break down the difference and explain when it makes sense to upgrade — and when it doesn't.",
    date: "April 2025",
    readTime: "6 min read",
  },
  {
    slug: "review-strategy-2025",
    category: "Marketing",
    title: "The 2025 Review Strategy That Actually Works for Local Businesses",
    excerpt:
      "Volume still matters, but recency and response rate matter more than ever. Here's the review acquisition system we use with every client.",
    date: "March 2025",
    readTime: "8 min read",
  },
  {
    slug: "what-is-ai-visibility",
    category: "AI Visibility",
    title: "What Is AI Visibility and Why Does Your Business Need It?",
    excerpt:
      "AI visibility is whether your business shows up — accurately and credibly — when AI platforms answer questions your customers are already asking. Most local businesses score poorly. Here's how to fix that.",
    date: "March 2025",
    readTime: "6 min read",
  },
  {
    slug: "cmo-bot-explained",
    category: "Marketing",
    title: "What a CMO Bot Actually Does (And What It Doesn't)",
    excerpt:
      "A CMO bot isn't a content generator. It's a strategic layer that analyzes your market, identifies opportunities, and keeps your marketing decisions grounded in data — every week.",
    date: "February 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "AI Visibility", "Local SEO", "Operations", "Marketing"];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white min-h-[40vh] flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Resources
          </p>
          <h1 className="display-hero text-white mb-5" style={{ textWrap: "balance" }}>
            Insights to help your
            <br />
            <span className="text-[#18b5d8]">business stay ahead.</span>
          </h1>
          <p className="lead-airy text-[#cccccc]">
            Practical guides on AI visibility, local SEO, and marketing
            automation — written for Tampa Bay business owners, not tech teams.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          {/* Category filter — visual only for now */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`text-[13px] font-semibold rounded-full px-4 py-1.5 border ${
                  i === 0
                    ? "bg-[#18b5d8] text-white border-[#18b5d8]"
                    : "text-[#333333] border-[#e0e0e0] hover:border-[#18b5d8] hover:text-[#18b5d8]"
                } motion-safe:transition-colors cursor-pointer`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group flex flex-col border border-[#e0e0e0] rounded-[18px] p-7 hover:border-[#18b5d8]/40 motion-safe:transition-colors duration-200"
              >
                <span className="text-[#18b5d8] text-[12px] font-semibold uppercase tracking-wide mb-3">
                  {post.category}
                </span>
                <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3 leading-snug group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
                  {post.title}
                </h2>
                <p className="text-[15px] text-[#333333] leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3 text-[13px] text-[#7a7a7a]">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-[#18b5d8] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
            Get new insights first.
          </h2>
          <p className="lead-airy text-[#cccccc] mb-10">
            We publish practical guides on AI visibility and marketing
            automation. Reach out and we&rsquo;ll make sure you don&rsquo;t
            miss the ones that matter for your business.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-black text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Stay in the Loop
          </Link>
        </div>
      </section>
    </>
  );
}

