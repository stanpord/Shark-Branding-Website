import Link from "next/link";
import Image from "next/image";

function toIsoDate(dateStr: string): string {
  const months: Record<string, string> = {
    January: "01", February: "02", March: "03", April: "04",
    May: "05", June: "06", July: "07", August: "08",
    September: "09", October: "10", November: "11", December: "12",
  };
  const m = dateStr.match(/^(\w+)\s+(\d+),\s+(\d{4})$/);
  if (!m) return dateStr;
  return `${m[3]}-${months[m[1]] ?? "01"}-${m[2].padStart(2, "0")}`;
}

interface RelatedPost {
  href: string;
  title: string;
  category: string;
}

interface BlogShellProps {
  category: string;
  title: string;
  date: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  children: React.ReactNode;
  relatedPosts?: RelatedPost[];
}

export default function BlogShell({
  category,
  title,
  date,
  readTime,
  heroImage,
  heroAlt,
  children,
  relatedPosts,
}: BlogShellProps) {
  const isoDate = toIsoDate(date);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: heroImage,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      "@id": "https://sharkbrandingsolutions.com/about#michelle",
      name: "Michelle Stanaland",
      url: "https://sharkbrandingsolutions.com/about#michelle",
      jobTitle: "Managing Partner and Founder, Shark AI Solutions",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://sharkbrandingsolutions.com/#organization",
      name: "Shark Branding Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://sharkbrandingsolutions.com/logo.webp",
      },
    },
    isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
    articleSection: category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* Blog hero */}
      <section className="bg-[#07141a] pt-24 pb-16 px-6 text-center">
        <div className="max-w-[760px] mx-auto">
          <span className="inline-block text-[#18b5d8] text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            {category}
          </span>
          <h1 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            {title}
          </h1>
          <p className="text-[14px] text-[#7a7a7a]">
            {date}&nbsp;&middot;&nbsp;{readTime}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[720px] mx-auto">
          <Image
            src={heroImage}
            alt={heroAlt}
            width={1200}
            height={480}
            className="w-full rounded-[18px] mb-12 object-cover"
            style={{ width: "100%", height: "auto", maxHeight: "480px" }}
          />
          <div className="article-prose">{children}</div>

          {/* Author byline */}
          <div className="mt-10 pt-8 border-t border-[#e8e8ed] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] font-bold text-[15px] shrink-0">M</div>
            <div>
              <p className="text-[14px] font-semibold text-[#1d1d1f]">Michelle Stanaland</p>
              <p className="text-[13px] text-[#6e6e73]">
                Founder &amp; CEO, Shark Branding Solutions &middot;{" "}
                <Link href="/about" className="text-[#18b5d8] hover:underline">
                  Top 15 Tampa Bay Marketing Experts
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-[#f5f5f7] py-14 px-6">
          <div className="max-w-[720px] mx-auto">
            <p className="text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-[0.15em] mb-6">Related Articles</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block bg-white rounded-[14px] p-5 border border-[#e0e0e0] hover:border-[#18b5d8] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
                >
                  <span className="text-[11px] font-semibold text-[#18b5d8] uppercase tracking-[0.12em] mb-2 block">{p.category}</span>
                  <span className="text-[15px] font-semibold text-[#1d1d1f] leading-snug">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#18b5d8] py-20 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-black mb-5">
            Ready to become the top AI recommendation in your market?
          </h2>
          <p className="lead-airy text-black/65 mb-10">
            Get a free visibility report and see exactly where your business
            stands across AI search, local search, and digital authority, with no
            commitment required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-black text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8] [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/contact"
              className="btn-press inline-block border-2 border-black text-black text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-black hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8] [touch-action:manipulation]"
            >
              Speak with the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Back bar */}
      <div className="bg-[#f5f5f7] border-t border-[#e0e0e0] py-4 px-6">
        <div className="max-w-[720px] mx-auto flex items-center justify-between">
          <Link
            href="/resources"
            className="flex items-center gap-2 text-[14px] font-semibold text-[#1d1d1f] hover:text-[#18b5d8] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Resources
          </Link>
          <span className="text-[13px] text-[#7a7a7a]">
            {category}&nbsp;&middot;&nbsp;{date}
          </span>
        </div>
      </div>
    </>
  );
}
