# GEO-ANALYSIS.md — sharkbrandingsolutions.com
**Generated:** May 29, 2026 | **Previous report:** May 18, 2026

---

## GEO Readiness Score: 67/100 (C+)

Solid technical foundation. Robots.txt and llms.txt are best-in-class. Organization + Person + FAQPage schema is strong. SSR is correct throughout. Score is held back by missing Article/BlogPosting schema on all blog posts, no sitemap.xml, no author bylines in HTML, and absent off-site presence (Wikipedia, Reddit, YouTube).

| Category | Weight | Score | Points |
|---|---|---|---|
| AI Crawler Access | — | 100% | Full marks |
| llms.txt | — | 92% | Present, clean, well-structured |
| Citability (quotable, extractable passages) | 25% | 60% | 15/25 |
| Structural Readability | 20% | 75% | 15/20 |
| Multi-Modal Content | 15% | 53% | 8/15 |
| Authority & Brand Signals | 20% | 65% | 13/20 |
| Technical Accessibility | 20% | 80% | 16/20 |
| **TOTAL** | | | **67/100** |

---

## Changes Since May 18 Report

| Item | Was | Now |
|------|-----|-----|
| llms.txt terminology | Had "bots" language | Clean — updated |
| Person schema (Michelle Stanaland) | Missing | Present in layout.tsx |
| Review schema | Missing | Present in layout.tsx |
| AggregateRating | Missing | Present (5.0, 12 reviews) |
| AI crawler access | Not verified | All 8 major crawlers explicitly allowed |
| GEO Readiness Score | 62/100 | 67/100 |

---

## Platform Breakdown

| Platform | Score | Limiting Factor |
|----------|-------|----------------|
| Google AI Overviews | 71/100 | No sitemap; blog posts lack Article schema |
| ChatGPT | 60/100 | No Wikipedia; limited third-party citations |
| Perplexity | 55/100 | No Reddit presence (Reddit = 46.7% of Perplexity citations) |
| Bing Copilot | 65/100 | Bingbot allowed; Bing indexing status unknown |

Only 11% of domains appear in both ChatGPT and Google AI Overviews for the same query. The site is well-positioned for Google AIO but underrepresented in ChatGPT/Perplexity citation pools.

---

## AI Crawler Access: PASS — No Action Needed

All major AI search crawlers are explicitly allowed in `public/robots.txt`:

| Crawler | Platform | Status |
|---------|----------|--------|
| GPTBot | ChatGPT | ALLOWED |
| OAI-SearchBot | OpenAI | ALLOWED |
| ChatGPT-User | ChatGPT | ALLOWED |
| ClaudeBot | Claude | ALLOWED |
| anthropic-ai | Claude | ALLOWED |
| PerplexityBot | Perplexity | ALLOWED |
| Google-Extended | Gemini / AI Overviews | ALLOWED |
| Bingbot | Copilot | ALLOWED |
| Googlebot | Core Google | ALLOWED |

No action needed. This is ideal configuration.

---

## llms.txt Status: PASS

`public/llms.txt` is present, clean, and well-structured. Includes:
- Brand positioning ("AI business consulting firm, not a marketing agency")
- Self-contained definitions of AI visibility consulting and GEO
- Proven results with specific numbers
- Service descriptions with actual pricing ($497/mo, $2,000/mo)
- Full contact info and service area
- LinkedIn URL

**One recommended addition:** Add a `## Competitive Differentiators` block and industry-specific routing hints so AI agents can match queries like "AI consultant for HVAC Tampa" to this source.

---

## Brand Mention Analysis

| Platform | Status | Notes |
|----------|--------|-------|
| Wikipedia | NOT PRESENT | 47.9% of ChatGPT citations come from Wikipedia — highest gap |
| Reddit | UNKNOWN | Perplexity: 46.7% from Reddit; ChatGPT: 11.3% |
| YouTube | UNKNOWN | Strongest AI citation correlation (~0.737 per Ahrefs) |
| LinkedIn | PRESENT | Linked in schema + llms.txt |
| Influence Digest | PRESENT | sameAs in Person schema — "Top 15 Marketing Experts Tampa Bay 2025" |

**The single biggest gap:** Zero verified off-site presence on Wikipedia, Reddit, or YouTube. These three platforms account for the majority of ChatGPT and Perplexity citations. The brand lives almost entirely in owned media.

---

## Server-Side Rendering: PASS

Next.js App Router. All customer-facing pages are server-rendered. AI crawlers receive fully rendered HTML for all content.

| Page type | Rendering | Status |
|-----------|-----------|--------|
| Homepage, blog posts, services, case studies | Server (static) | PASS |
| aiemployees/Showcase.tsx | Client ('use client') | OK — carousel is UI, not content |
| ChatWidget, Nav | Client | OK — non-content |
| Internal tools (/bots, /call-bot) | Server (gated) | OK — noindex |

---

## Top 5 Highest-Impact Changes

### 1. Add BlogPosting Schema to BlogShell (HIGH — 1 hr)

All 10+ blog posts have zero structured data. BlogShell injects no JSON-LD. This is the primary signal AI systems use to identify citable authored content — datePublished, author credentials, publisher entity.

Add to `BlogShell.tsx` as a `<script type="application/ld+json">`:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[title prop]",
  "author": {
    "@type": "Person",
    "@id": "https://sharkbrandingsolutions.com/#michelle",
    "name": "Michelle Stanaland"
  },
  "publisher": {
    "@id": "https://sharkbrandingsolutions.com/#organization"
  },
  "datePublished": "[iso date from date prop]",
  "image": "[heroImage prop]"
}
```

Also add a visible author byline to the BlogShell HTML: "By Michelle Stanaland · AI Visibility Consultant" between the date line and hero image.

### 2. Create sitemap.ts (HIGH — 30 min)

`robots.txt` declares `Sitemap: https://sharkbrandingsolutions.com/sitemap.xml` but no sitemap exists. Add `src/app/sitemap.ts`:

```ts
import { MetadataRoute } from 'next'
const BASE = 'https://sharkbrandingsolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/plans`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/marketing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/operations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/aiemployees`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/plans`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // blog posts
    { url: `${BASE}/resources/blog-seo-old-school-geo-ai-shift`, lastModified: new Date('2026-03-22'), priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-new-front-door`, lastModified: new Date('2026-04-07'), priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase`, lastModified: new Date('2026-04-09'), priority: 0.7 },
    { url: `${BASE}/resources/blog-ai-map-consistent-business-listings`, lastModified: new Date('2026-04-10'), priority: 0.7 },
    { url: `${BASE}/resources/blog-google-ai-price-check-ready-to-be-chosen`, lastModified: new Date('2026-04-05'), priority: 0.7 },
    { url: `${BASE}/resources/blog-end-of-local-seo-ai-visibility`, lastModified: new Date('2026-05-20'), priority: 0.7 },
    { url: `${BASE}/resources/blog-google-reviews-ai-recommendations`, lastModified: new Date('2026-04-12'), priority: 0.7 },
  ]
}
```

### 3. Add Source Links to Blog Statistics (HIGH — 2 hrs)

Statistics boost AI citation rate +37-40% (Princeton GEO study). Sourced statistics boost it further. Current blog posts cite statistics without any source:

- "40-55% of consumers now use AI tools for research" — no source
- "51% of customer service journeys start on third-party platforms" — no source
- "900 million ChatGPT users" — no source

Action: Link each statistic to the original study or announcement.

### 4. Rewrite Blog Openings to Lead with Definitions (MEDIUM-HIGH — 2 hrs)

AI systems extract direct answers, not narrative introductions. Every blog post currently opens with "Remember when..." style prose. The GEO definition, AI Funnel definition, and AI visibility definition should all appear in the first 60 words as self-contained answer blocks.

**Current (not citable):**
> "Remember the good old days? You'd type a few keywords into Google..."

**Citable rewrite:**
> "Generative Engine Optimization (GEO) is replacing traditional SEO as the primary way customers find local businesses. In 2026, AI tools like ChatGPT, Gemini, and Perplexity answer questions directly — giving users 2-3 recommendations instead of a list of links. For Tampa Bay businesses, this means appearing in AI answers or being invisible at the moment of purchase decision."

Apply this pattern to each post: define the concept in sentence 1, state the implication in sentence 2, ground it in a specific number in sentence 3.

### 5. Build Reddit Presence (HIGH — Ongoing)

Perplexity draws 46.7% of citations from Reddit. ChatGPT draws 11.3%. Currently zero Reddit presence.

Target subreddits for authentic participation (answer questions, don't self-promote):
- r/smallbusiness — AI tools for local businesses, CRM questions, visibility
- r/marketing — GEO vs SEO, AI search optimization
- r/tampa / r/WesleyChapel — Local business questions
- r/SEO — GEO debate is active here

Link to blog posts only when directly relevant to the question being answered. 4-6 helpful answers per month compounds fast in Perplexity's citation pool.

---

## Schema Recommendations (Current State)

| Schema Type | Status | Action |
|-------------|--------|--------|
| Organization / LocalBusiness | PRESENT — strong | Add Google Business Profile URL to sameAs |
| Person (Michelle Stanaland) | PRESENT in layout.tsx | Add LinkedIn personal URL (vs company URL) |
| FAQPage | PRESENT — 6 questions | Move copies to /services, /plans, /marketing pages |
| WebSite + SearchAction | PRESENT | Fine |
| Review | PRESENT — 1 entry | Add 2-3 more Review nodes with real client names |
| AggregateRating | PRESENT (5.0, 12) | Fine |
| BlogPosting / Article | MISSING | Add via BlogShell — highest priority fix |
| Service / OfferCatalog | PRESENT on /services | Fine |
| BreadcrumbList | PRESENT on /services, /about | Add to blog posts and homepage |
| HowTo | MISSING | Add to "How It Works" section on homepage |

---

## Content Reformatting Suggestions

**Case studies — add prose narrative blocks.** Each case study has stats in bullets/numbers but no 140-160 word standalone prose block that AI can extract as a citation. Add one paragraph per case that reads like a complete story with context, problem, and result.

**Optimal citability example** (140-155 words, self-contained):
> "A Tampa Bay HVAC company hired Shark Branding Solutions after years of invisible online presence. The company ranked #32 on Google for its core service terms and received no mentions in ChatGPT or Google AI Overview responses. Over 30 days, the team optimized the company's Google Business Profile, corrected inconsistent NAP data across 40+ directories, structured schema markup for the business entity, and published three answer-ready content pieces targeting questions Tampa Bay homeowners ask before booking HVAC service. At the end of 30 days, the company ranked #2 on Google for its primary service term and began appearing in Google AI Overviews for local HVAC queries. No paid advertising was involved. The entire lift came from trust signal alignment and structured data that AI systems could read and act on."

**Add `/pricing.md` to public folder.** AI agents evaluating services on behalf of buyers parse machine-readable files. A simple markdown file with your plans, tiers, pricing, and what's included makes your business evaluable by AI agents before a human visits your site.

---

## Quick Wins Checklist

- [ ] Create `src/app/sitemap.ts` — robots.txt references a sitemap that doesn't exist
- [ ] Add BlogPosting JSON-LD to BlogShell.tsx
- [ ] Add visible author byline to BlogShell ("By Michelle Stanaland · AI Visibility Consultant")
- [ ] Add source links to all unattributed blog statistics
- [ ] Add Google Business Profile URL to Organization sameAs in layout.tsx
- [ ] Add `public/pricing.md` for AI agent parsing
- [ ] Add HowTo schema to homepage "The Process" section
- [ ] Rewrite first paragraph of top 3 blog posts to lead with direct definitions

---

## Medium-Effort / High-Impact

- **YouTube channel** — Even 5 short videos (60-90 sec) on GEO, AI visibility basics, and the HVAC case study would significantly boost AI citation potential. YouTube correlates 0.737 with AI visibility — the strongest signal in the Ahrefs study.
- **Reddit participation** — 4-6 helpful answers/month in the subreddits above. Compounds in Perplexity's citation pool over 90 days.
- **Wikipedia** — A Wikipedia article for "AI visibility consulting" as an emerging discipline, citing original research and noting practitioners, would drive ChatGPT citations materially. This is the highest single-action ceiling for ChatGPT visibility.

---

## AI Search Brand Visibility (Ahrefs Brand Radar)

Ahrefs MCP not connected — live AI citation data unavailable. This report is based on static site analysis.

**Manual test queries (run monthly in ChatGPT, Perplexity, Google):**

1. "AI visibility consulting Tampa Bay"
2. "AI marketing consultants Wesley Chapel FL"
3. "how to get recommended by ChatGPT local business"
4. "GEO generative engine optimization Tampa"
5. "best AI consultants Tampa Bay"
6. "how do I appear in Google AI Overviews for my business"
7. "what is AI visibility consulting"
8. "AI employee consulting Tampa"
