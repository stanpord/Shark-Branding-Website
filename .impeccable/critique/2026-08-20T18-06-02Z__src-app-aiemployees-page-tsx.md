---
target: src/app/aiemployees/page.tsx
total_score: 28
p0_count: 4
p1_count: 8
timestamp: 2026-08-20T18-06-02Z
slug: src-app-aiemployees-page-tsx
---
# Critique: src/app/aiemployees/page.tsx

**Score: 28/40** | **Cognitive load failures: 4 (CL1, CL3, CL5, CL7)**

Assessed 2026-08-20. `AiEmployeesDeep.tsx` is 1601 lines — one of the longest pages in the project.

---

## P0 Issues

### P0-1 · Old brand name "Shark Branding" in two rendered locations (B-1)
Lines 334 (h2 heading) and 337 (opening paragraph sentence) in `AiEmployeesDeep.tsx` still say "Shark Branding" instead of "Shark AI Solutions". The heading is search-indexed and will appear in knowledge panel extractions with the wrong brand name. This is the highest-urgency fix on the page.

### P0-2 · FadeUp opacity:0 gates all content with no JS fallback (A-2 / B-7)
The `FadeUp` component (lines 22-33) initializes every wrapped element at `opacity: 0` and relies on `IntersectionObserver` to make it visible. With JS disabled, blocked, or delayed (slow mobile, heavy CPU), the entire page — hero h1, every section heading, all CTAs, pricing — renders permanently invisible. No `noscript` override exists. Fix: initialize `inView` to `true` if `IntersectionObserver` is unavailable; set it to `false` only after confirmed availability.

### P0-3 · "Custom Pricing" with no anchor is a hard conversion barrier (A-3)
The pricing card (lines 1334-1357) displays "Custom Pricing" in 46px extrabold with no floor, range, or comparison to hiring cost. The three ROI stat tiles (94%, 3×, <7 days) that would justify the investment appear *below* the price card, not above it. Buyers decide affordability before they engage with ROI; without any number to anchor on, most will abandon rather than book a call just to find out if they're in-budget.

### P0-4 · Identical Feature 01/02/03 scaffold across all five employee sections (A-1 / B-9)
Every AI employee section uses the exact same three-act structure: eyebrow + h3 + body copy + 4-item checklist alternating left/right with a demo card. This scaffold repeats 15 times (5 employees × 3 features). By the Reputation Specialist section (third employee), the pattern has been seen 6 times and the brain has down-regulated to skim. The AI Sales Coach — most revenue-relevant product — is buried under pattern fatigue. The "Feature 01/02/03" eyebrow labels communicate zero meaning to a buyer.

---

## P1 Issues

### P1-1 · CTA destination inconsistency — hero Calendly vs. /contact elsewhere (A-7 / B-5)
Hero CTA (line 205) opens an external Calendly URL (`bookmenow.info`). Pricing CTA (line 1352) and bottom CTA (line 1588) both go to `/contact`. All three say "Book a strategy call" or a variant. Additionally, all three internal CTAs plus six industry page links use raw `<a href>` instead of Next.js `<Link>`, disabling route prefetching.

### P1-2 · CSS `width` transition on BANT scorecard bars (B-4)
Line 1054: `style={{ transition: 'width 1.2s ease' }}` — confirmed `layout-transition` detector hit. Animating `width` causes browser recalculate+layout+paint on every frame. Fix: animate `transform: scaleX()` with `transformOrigin: 'left'` instead.

### P1-3 · Raw `<img>` tags on two hero images (B-2)
Reputation Specialist (~line 723) and AI CRM (~line 869) use `<img src=...>` with no `width`, `height`, or `loading` attributes. No dimensions = layout shift (CLS) on load. Should be Next.js `<Image>` with explicit dimensions, `sizes`, and `priority={false}`.

### P1-4 · `<video>` missing `poster` attribute (B-3)
Voice Receptionist video (~lines 542-551) has `autoPlay muted loop playsInline` but no `poster`. Until first frame decodes, the container renders blank. No fallback content inside the `<video>` tag for unsupported environments.

### P1-5 · Inline `<style>` block for keyframes is invalid and unbundled (B-6)
Lines 143-191: a large `<style>` block inside the JSX defines 7 `@keyframes` and utility classes including `.demo-card` hover. In Next.js App Router this block is injected inside `<body>` (invalid HTML), cannot be bundled/minified, and duplicates the `prefers-reduced-motion` override already in `globals.css`.

### P1-6 · Sticky nav appears 4 screens into scroll; no mobile horizontal-scroll affordance (A-4)
The sticky nav becomes visible only after the hero, team grid, capabilities, and how-it-works sections — ~4 full screens. On 375px mobile, 6 nav tabs require horizontal scroll with no fade-gradient edge indicator. A new visitor has no wayfinding tool above the fold.

### P1-7 · ai-float animation on demo cards creates competing peripheral motion (A-5)
The 7s vertical-bob animation is applied to Gemma, Voice, AI CRM, and Sales Coach demo cards. While users read adjacent feature copy, an object nearby moves continuously — a known attention-splitting pattern. `prefers-reduced-motion` is correctly handled (lines 184-190), but the animation itself should be removed from feature section containers and reserved for one purposeful use (e.g., typing dots inside the Gemma chat only).

### P1-8 · 8-card Customer Journey grid exceeds chunking limit (A-6)
Lines 1213-1288: 8 cards in a 4-column 2-row grid. CL1 failure (>5 items per visual group). Step numbers (01-08) imply sequence but grid layout implies matrix. Reputation Specialist appears twice (steps 01 and 06) in different colors, creating a confusing echo without connecting the recurrence.

---

## P2 Issues

### P2-1 · Eyebrow label system uses one style for four distinct purposes (A-8 / B-8)
The `text-[11px] font-bold uppercase tracking-[1.5px|2px]` pattern appears ~25 times: section-level labels, numbered step markers, demo card micro-labels, and "Feature 01/02/03" scaffolding markers — all visually identical. When applied universally, it provides no hierarchy signal.

### P2-2 · FAQ accordion lacks hover affordance; `+` icon not aria-hidden (A-9 / B-10)
Dark-background `<details>/<summary>` FAQ elements (lines 1398-1405) show no visual change on hover — no background shift, no color change, no cursor feedback beyond inherited `cursor-pointer`. The `+` span has no `aria-hidden="true"`, so screen readers announce the literal character "plus" after every question.

### P2-3 · Heuristic scores summary
H3 User Control: 2, H7 Flexibility: 2, H8 Aesthetic: 2, H9 Error Recovery: 2 — these are the lowest-scoring heuristics. H3/H7 are driven primarily by the sticky nav friction and CTA inconsistency (addressed in P0/P1). H8/H9 are driven primarily by structural repetition and the blank-page risk.
