---
target: src/app/plans/page.tsx
total_score: 23
p0_count: 1
p1_count: 4
timestamp: 2026-08-20T18-36-30Z
slug: src-app-plans-page-tsx
---
# Critique: src/app/plans/page.tsx

**Score: 23/40** | **Cognitive load failures: 5 (CL1, CL4, CL5, CL6, CL8)**

Assessed 2026-08-20. Plans page — pricing/conversion surface for three tiers: Enterprise ($4,000+/mo), Done For You ($2,000/mo), Toolkit ($999/mo).

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Intuit "Start instantly" links silently exit the site with no warning — user has no idea they are leaving shark-ai-solutions.com to complete a $999–$2,000/mo purchase on an unbranded third-party checkout |
| 2 | Match System / Real World | 3 | Feature bullets use unexplained jargon: "GBP optimization," "citation consistency," "schema markup," "AI readiness signals" — no inline definition for buyers who are not domain-fluent |
| 3 | User Control and Freedom | 2 | Sticky mobile CTA ("Book an Enterprise Call →") offers no alternative path for Toolkit or Done For You buyers; full-width, no dismiss, no secondary option |
| 4 | Consistency and Standards | 3 | Done For You uses "Book a Strategy Call" while Enterprise uses "Book a Scope Call" — both link to the same BOOK_CALL_URL; comparison table footer uses different link treatments per column (accent color vs white vs white/55) |
| 5 | Error Prevention | 2 | Toolkit card exposes both 12-month ($999/mo) and 3-month ($1,297/mo) payment links side by side with a 4–6px "·" separator — easy to mis-tap on mobile; no preview of what checkout page looks like |
| 6 | Recognition Rather Than Recall | 3 | Comparison table keeps plan names and prices visible in column headers — solid; but FAQ 1,000px below pricing loses price context for the buyer reading it |
| 7 | Flexibility and Efficiency | 2 | Enterprise buyer must scroll through audit strip, all three plan cards, three objection cards, eleven-row comparison table, and HVAC proof section before reaching final enterprise CTA; no anchor jump, no "skip to enterprise" path |
| 8 | Aesthetic and Minimalist Design | 3 | Three consecutive dark `#07141a` sections (pricing, quick objections, comparison table) are only separated by faint `border-white/5` lines — no rhythm change across a large vertical block |
| 9 | Error Recovery | 1 | No diagnostic tool, no "not sure which plan?" branching path, no inline guidance for confused buyers; free audit is positioned as pre-purchase on-ramp but not resurface at moments of likely confusion (after comparison table) |
| 10 | Help and Documentation | 2 | FAQ positioned at very end of page, after all purchase decisions should be made; "Talk to the team" link is plain text buried at bottom of objections section; no live chat, no contextual help |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

---

## Anti-Patterns Verdict

**LLM assessment**: No — the page does not read as AI-generated. No side-stripe borders, gradient text, glassmorphism, hero-metric template, numbered scaffolding, or over-rounded cards. The closest call is the three-card pricingObjections grid (identical card shape × 3), but it does not repeat across multiple sections. Enterprise visual hierarchy is intentional: full-width featured block above a two-column supporting grid. The "Before you commit." section tone is above average for a pricing page.

**Deterministic scan**: Exit code 0 — zero detector hits. Clean.

**Visual overlays**: Browser automation not available in this session. No overlay injection attempted.

---

## Overall Impression

The page is structurally sound and avoids most conversion-page clichés, but it has a fundamental page-flow problem: it detours into two pre-purchase products ($0 audit, $199 report) before the buyer sees pricing. This inverts the standard decision arc and kills momentum at the most critical point. The biggest single opportunity is fixing the section order to: hero → pricing → objections → audit entry (as "not ready to commit? start here") → proof → FAQ → final CTA.

---

## What's Working

**1. Objection placement directly after pricing**
Three pre-empted objections ("Is this just another tool?", "How does this integrate?", "How is this different from our current agency?") appear immediately below the price cards. This is correct conversion architecture: address doubt before the buyer can spiral. The copy is specific and differentiating ("There's no dashboard to log into, no software to learn").

**2. Enterprise visual hierarchy in the pricing section**
Enterprise is full-width, positioned above the two-column supporting grid. The accent border (`border-[#18b5d8]/30`) distinguishes it without feeling forced. Done For You's white CTA button is visually de-prioritized against Enterprise's accent-filled primary. This is intentional and reads like a designed choice, not a template default.

**3. "Before you commit." section tone**
Naming buyer hesitation as a legitimate section signals product confidence over high-pressure tactics. "We've paid for SEO before and it didn't work" named in the buyer's voice — and answered by distinguishing AI signals from traditional SEO signals — is the best trust-building moment on the page.

---

## Priority Issues

### P0-1 · Audit Entry Strip appears before pricing — inverted decision arc

**Why it matters**: A buyer with intent to evaluate plans hits a detour offering two pre-purchase products ($0 audit, $199 report) before seeing pricing. The copy "Start here, before committing to any plan" reads as a roadblock, not a feature, when the buyer has not yet seen what they would be committing to. High-value enterprise buyers who came to evaluate plans will feel friction and may bail. The audit strip is a valuable conversion tool — it is just in the wrong place.

**Fix**: Move the audit entry strip to after the pricing section, between the comparison table and the HVAC proof. Position it as "Not ready to commit? Start here." — a fallback for buyers who saw pricing and need more confidence before booking, not an interrupt before they've seen pricing at all.

**Suggested command**: `$impeccable shape` (restructure the page section order)

---

### P1-1 · Intuit checkout links — trust cliff, no constants, URLs duplicated

**Why it matters**: Three Intuit Commerce Network URLs (Done For You, Toolkit 12-month, Toolkit 3-month) are hardcoded inline with no constants. The Done For You URL appears at lines 406 and 562 (two places); the Toolkit 12-month URL appears at lines 449 and 572 (two places). No constant like `BOOK_CALL_URL` exists for any of them. When a buyer clicks "Start instantly," they silently leave `shark-ai-solutions.com` and land on a raw `connect.intuit.com` URL with no brand continuity, no summary of what they are buying, and no return path. For a $999–$2,000/mo purchase, this destroys confidence at the exact moment of commitment. Assessment B confirmed the duplication and missing constants.

**Fix (two parts)**:
1. Extract all Intuit URLs to named constants at the top of the file (e.g., `INTUIT_DFY_URL`, `INTUIT_TOOLKIT_12MO_URL`, `INTUIT_TOOLKIT_3MO_URL`).
2. Add micro-copy before each "Start instantly" link: `"You'll be taken to our secure billing portal to complete your subscription."` Or consider whether a Stripe checkout with brand continuity would serve this buyer profile better.

**Suggested command**: `$impeccable harden` (then `$impeccable clarify` for the micro-copy)

---

### P1-2 · Sticky mobile CTA misdirects non-Enterprise buyers + missing safe-area padding

**Why it matters**: The sticky bar (lines 722–731) reads "Book an Enterprise Call →" and is displayed on ALL pages for ALL plan options. A Toolkit buyer who has scrolled through the page is told the only available action is an enterprise call. This actively suppresses conversion on the lower-tier plans. Additionally, the bar has no `env(safe-area-inset-bottom)` or `pb-safe` padding — on all modern iPhones (iPhone X and later), the system home indicator overlaps the bottom of the bar, partially obscuring the tap target. Assessment B confirmed both issues (G1).

**Fix**:
1. Change "Book an Enterprise Call →" to "Book a Strategy Call →" or "Get Started →" so it is plan-agnostic.
2. Add `pb-[env(safe-area-inset-bottom)]` to the sticky bar container (or Tailwind's `pb-safe` if configured).

**Suggested command**: `$impeccable harden`

---

### P1-3 · BreadcrumbList schema declared but never injected

**Why it matters**: `breadcrumbData` is defined at lines 198–205 but the JSX only injects `plansSchema` (line 209). The BreadcrumbList schema is a dead variable — it is completely absent from page output. Googlebot never sees it. The `/plans` page has no breadcrumb rich results.

**Fix**: Add a second `<script>` tag below the existing one:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
```

**Suggested command**: `$impeccable harden`

---

### P1-4 · FAQPage schema has 3 questions; rendered FAQ has 4 — text also diverges

**Why it matters**: The `plansSchema` FAQPage block declares 3 questions, but the `faqs` array rendered in the accordion has 4 entries. Question 3 ("What does 'AI visibility' actually mean across markets?") and question 4 ("Does this work across industries?") have no corresponding schema entries. Additionally, the schema question text does not match the rendered question text verbatim (e.g., schema: "Which plan is right for an enterprise or multi-location brand?" vs rendered: "Which plan is right for a multi-location brand?"), which reduces FAQPage rich result eligibility confidence. Assessment B confirmed this (B2).

**Fix**: Sync the FAQPage schema entries to match the rendered `faqs` array exactly — same question text, same count (4 items), same answer text.

**Suggested command**: `$impeccable harden`

---

## P2 Issues

### P2-1 · "$1M+" proof stat in hero has no unit or context

The hero proof strip shows "$1M+ — Multi-state retail client, single weekend." $1M in what? Revenue? Visibility lift? Impressions? The HVAC stat (#32 → #2) is credible because the mechanism is specific. The $1M stat is not. Riley persona (stress tester) will attempt to verify it and find no supporting case study link. Fix: add a unit ("$1.2M in attributed weekend sales" or similar) and link it to the relevant case study, or replace with a verifiable metric.

### P2-2 · Toolkit card has three links below its primary CTA button

Lines 446–465: after the main CTA button, three links appear — "Start 12-month, $999/mo →", a literal "·" separator, and "Start 3-month, $1,297/mo →". A buyer choosing between Done For You and Toolkit is already managing a pricing decision; exposing a sub-decision (12-month vs 3-month) in the same card view compounds complexity. The "·" separator is a 4–6px mobile hit target. Fix: show only one default option (12-month) in the card; move 3-month behind a disclosure toggle or a secondary "See 3-month option" link.

### P2-3 · Plan cards use `<h2>` when section already has an `<h2>`

"Choose your plan" (line 312) is `<h2>`. Enterprise (line 327), Done For You (line 379), and Toolkit (line 419) card headings are also `<h2>`. The section heading and card headings are the same level — screen readers and search engines see them as equal-weight peers, not parent/child. Fix: change card headings to `<h3>`.

### P2-4 · Two "Start →" comparison table links are identical text, different destinations

Lines 561–578: "Start →" in the Done For You column and "Start →" in the Toolkit column have the same visible label but different Intuit URLs. Screen reader users navigating by links ("list all links on page") see two consecutive "Start →" anchors that are indistinguishable. Fix: change labels to "Start Done For You →" and "Start Toolkit →" — or add `aria-label` attributes if the visual label must stay short.

---

## Persona Red Flags

**Jordan (Confused First-Timer — Facebook ad, never heard of "AI visibility")**
- Feature bullets use "GBP optimization," "citation consistency," "schema markup," "AI readiness signals" with no definitions. Jordan does not know GBP = Google Business Profile.
- The audit strip on-ramp is correct for Jordan but placed before pricing, so Jordan hits it before understanding what they'd be committing to. The logic inverts: they're offered a lower-commitment product before they know what the higher-commitment product costs.
- The 11-row comparison table is a matrix Jordan will not read. Jordan will feel overwhelmed and leave. The table needs a "Best for you if…" summary row or a "not sure?" inline prompt.
- "North Tampa Bay Chamber members: free with member code" will confuse non-local Jordan and make the page feel exclusionary.

**Casey (Distracted Mobile User — iPhone, one-handed)**
- The hero's right-column proof stats drop below the headline on mobile (grid goes single-column). The stats are the emotional hook — they are below the fold on mobile on first load.
- Three Intuit links in the Toolkit card are close together; the "·" separator between them is a few pixels of touch target. Casey will mis-tap.
- Comparison table has `min-w-[540px]` with `overflow-x-auto` but no fade-gradient scroll affordance. Casey will see a truncated table and assume it ends there.
- Sticky bar has no `pb-safe` — home indicator overlaps the tap target on iPhone X+.
- FAQ `<summary>` chevron is 18×18px, below 44×44px minimum touch target. Casey will fail to expand FAQ items.

**Riley (Deliberate Stress Tester)**
- Hero says "5–7 days: Typical time to first results live." Objections section says "Visibility signals typically begin moving within 30–60 days." These appear to contradict each other — Riley will screenshot this.
- "90-day visibility improvement guarantee" appears once in tiny muted text (line 473) with no definition, no link, no guarantee policy page. Riley will ask "what does this guarantee actually mean?" and find no answer.
- Toolkit has a 12-month commitment requirement; Done For You has "No annual lock-in." The commitment difference is only clearly stated for Done For You, not for Toolkit. A buyer comparing the two may not realize the cheaper plan has a longer commitment. Riley flags this as a dark pattern by omission.
- $1M+ stat has no case study link, while the HVAC stat directly below in its section has a case study link. The asymmetry signals the $1M+ claim is unsubstantiated.

---

## Minor Observations

- Done For You CTA says "Book a Strategy Call" while Enterprise CTA says "Book a Scope Call" — both use the same `BOOK_CALL_URL`. Either consolidate the label or use different calendars.
- Final CTA section (line 703): primary button is "Run My Free AI Audit" (accent, filled); secondary is "Book an Enterprise Call" (ghost border). For an enterprise buyer who has scrolled the full page, this button hierarchy is inverted — the enterprise call should be the primary action at the decision point.
- `pricingObjections` section (line 496) uses the same `bg-[#07141a]` as the pricing section above and comparison table below. Three consecutive dark sections with only `border-white/5` as a separator creates a monotonous scroll experience with no visual rhythm change.
- "Agencies managing AI visibility for their own clients" is buried as bullet #6 in the Enterprise feature list (line 85). It implies a white-label/reseller use case — a completely different buyer — mixed into the enterprise feature set. It would be more effective as a callout or a link to a dedicated agency page.
- `textWrap: "pretty"` (lines 218, 339) has incomplete browser support; falls back to normal wrap on unsupported browsers. Low risk, but `text-wrap: balance` is better supported and more appropriate for short UI paragraphs.
- Comparison table shows Enterprise has 11/11 features while Toolkit has 1/11. The table inadvertently makes Toolkit look weak. Consider whether the table is pulling buyers toward Enterprise (good) or driving them off the page (bad).

---

## Questions to Consider

1. **Is the audit strip a conversion asset or a conversion leak?** If the primary KPI is enterprise calls booked, offering a $0 and $199 on-ramp before the buyer sees $4,000/mo pricing may dilute intent rather than build it. Who decides to book an enterprise call after running a free audit versus never booking at all?

2. **Is the 90-day guarantee real?** It appears once, in muted text, with no definition, link, or policy page. Either it deserves a full guarantee section (or `/guarantee` page) with specific terms, or it should be removed. A guarantee that can't survive a due diligence call is a liability.

3. **Does the Toolkit belong on this page?** The URL, meta title ("Enterprise AI Visibility Plans"), sticky bar, and hero all signal enterprise. The Toolkit at $999/mo targets a different buyer entirely. Is the Toolkit here for price anchoring and SEO breadth, or is it actively confusing the enterprise buyer and under-serving the Toolkit buyer?
