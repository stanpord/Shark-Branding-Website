'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Post = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}

const CATEGORIES = ['All', 'Research & Data', 'AI Employees', 'AI Visibility', 'GEO', 'Strategy']

export default function ResourcesFilter({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  const lead = filtered[0]
  const above = filtered.slice(1, 3)
  const below = filtered.slice(3)

  const isFiltered = active !== 'All'

  return (
    <>
      {/* ── Section nav ── */}
      <nav className="bg-white px-6 border-b-2 border-black">
        <div className="max-w-[1120px] mx-auto flex overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-3 border-r border-black/15 transition-colors duration-100 ${
                active === cat
                  ? 'text-[#18b5d8] border-b-2 border-b-[#18b5d8] -mb-[2px]'
                  : 'text-[#444] hover:text-black cursor-pointer'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {filtered.length === 0 ? (
        <div className="bg-white px-6 py-24 text-center">
          <p className="text-[14px] text-[#999] uppercase tracking-[0.15em] font-semibold">No articles in this category yet</p>
        </div>
      ) : isFiltered ? (
        /* ── Filtered view: clean grid ── */
        <>
          <div className="bg-white px-6 pt-8 pb-0">
            <div className="max-w-[1120px] mx-auto flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black">{active}</span>
              <div className="flex-1 min-w-[20px] border-t-2 border-black" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black">{filtered.length} Article{filtered.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <section className="bg-white px-6 pt-6 pb-16">
            <div className="max-w-[1120px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-black/15">
                {filtered.map((post) => (
                  <div key={post.slug} className="pt-6">
                    <Link href={`/resources/${post.slug}`} className="block mb-4 group">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={160}
                        className="w-full object-cover group-hover:opacity-90 transition-opacity"
                        style={{ height: '160px', width: '100%' }}
                      />
                    </Link>
                    <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] text-[#18b5d8] mb-2">
                      {post.category}
                    </span>
                    <h3
                      className="text-[16px] leading-[1.25] text-black mb-2"
                      style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
                    >
                      <Link href={`/resources/${post.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[13px] text-[#666] leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                    <div className="text-[11px] text-[#aaa] uppercase tracking-[0.08em] font-semibold border-t border-black/10 pt-3">
                      {post.date} &middot; {post.readTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* ── All view: full newspaper layout ── */
        <>
          {/* Front page */}
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
                    style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
                  >
                    <Link href={`/resources/${lead.slug}`} className="hover:text-[#18b5d8] transition-colors duration-150">
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="text-[16px] text-[#333] leading-[1.7] mb-6 max-w-[540px]">{lead.excerpt}</p>
                  <Link href={`/resources/${lead.slug}`} className="block mb-6 group">
                    <Image
                      src={lead.image}
                      alt={lead.title}
                      width={900}
                      height={420}
                      className="w-full object-cover group-hover:opacity-95 transition-opacity"
                      style={{ height: '300px', width: '100%' }}
                    />
                  </Link>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#888] uppercase tracking-[0.1em] font-semibold border-t border-black/15 pt-4">
                    <span>By Shark AI Solutions</span>
                    <span className="text-black/30">&middot;</span>
                    <span>{lead.date}</span>
                    <span className="text-black/30">&middot;</span>
                    <span>{lead.readTime}</span>
                    <Link href={`/resources/${lead.slug}`} className="ml-auto text-[#18b5d8] hover:underline tracking-[0.08em] text-[11px]">
                      Continue Reading &rarr;
                    </Link>
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:w-[38%] pl-0 lg:pl-8 py-8 flex flex-col">
                  {above.map((post, i) => (
                    <div key={post.slug} className={`pb-6 ${i < above.length - 1 ? 'mb-6 border-b border-black/15' : 'mb-6'}`}>
                      <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] border border-[#18b5d8] text-[#18b5d8] px-2 py-[3px] mb-3">
                        {post.category}
                      </span>
                      <h3
                        className="text-[20px] sm:text-[22px] leading-[1.15] text-black mb-3"
                        style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
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

                  {/* Free report callout */}
                  <div className="mt-auto border-2 border-black p-5">
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#18b5d8] mb-2 border-b border-black/10 pb-2">
                      Free for Tampa Bay Businesses
                    </div>
                    <h4
                      className="text-[18px] leading-snug text-black mb-3 mt-3"
                      style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontStyle: 'italic' }}
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
                      Get My Free AI Audit &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Below the fold header */}
          {below.length > 0 && (
            <div className="bg-white px-6 pt-8 pb-0">
              <div className="max-w-[1120px] mx-auto flex flex-wrap items-center gap-x-5 gap-y-2 mb-0">
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black">From the Intelligence Desk</span>
                <div className="flex-1 min-w-[20px] border-t-2 border-black" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-black">{below.length} More Articles</span>
              </div>
            </div>
          )}

          {/* Article grid */}
          {below.length > 0 && (
            <section className="bg-white px-6 pt-6 pb-16">
              <div className="max-w-[1120px] mx-auto">
                {/* Desktop: 4-column grid */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-black/15">
                  {below.map((post) => (
                    <div key={post.slug} className="pt-6">
                      <Link href={`/resources/${post.slug}`} className="block mb-4 group">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={160}
                          className="w-full object-cover group-hover:opacity-90 transition-opacity"
                          style={{ height: '160px', width: '100%' }}
                        />
                      </Link>
                      <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] text-[#18b5d8] mb-2">
                        {post.category}
                      </span>
                      <h3
                        className="text-[16px] leading-[1.25] text-black mb-2"
                        style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
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
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={160}
                          className="w-full object-cover group-hover:opacity-90 transition-opacity"
                          style={{ height: '160px', width: '100%' }}
                        />
                      </Link>
                      <span className="inline-block text-[9px] font-bold uppercase tracking-[0.22em] text-[#18b5d8] mb-2">
                        {post.category}
                      </span>
                      <h3
                        className="text-[19px] leading-snug text-black mb-2"
                        style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
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
          )}
        </>
      )}
    </>
  )
}
