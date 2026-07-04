"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export default function ArticleCarousel({ posts }: { posts: Post[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <div className="relative px-12">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-[#18b5d8] hover:border-[#18b5d8] hover:text-white transition-colors duration-150 shadow-sm hidden md:flex"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-[#18b5d8] hover:border-[#18b5d8] hover:text-white transition-colors duration-150 shadow-sm hidden md:flex"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Carousel track */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            className="shrink-0 w-[300px] sm:w-[320px] border border-black/15 bg-white hover:border-[#18b5d8] transition-colors duration-150 flex flex-col"
            style={{ scrollSnapAlign: "start" }}
          >
            <Link href={`/resources/${post.slug}`} className="block overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={320}
                height={180}
                className="w-full object-cover hover:opacity-90 transition-opacity duration-150"
                style={{ height: "180px" }}
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-[10px] text-[#18b5d8] mb-2">
                {post.category}
              </span>
              <h3 className="text-[16px] leading-snug text-black mb-2 font-bold flex-1">
                <Link href={`/resources/${post.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                  {post.title}
                </Link>
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="text-[11px] text-[#6e6e73] uppercase tracking-[0.08em] font-semibold border-t border-black/10 pt-3 mt-auto flex justify-between">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Hide scrollbar in webkit */}
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
