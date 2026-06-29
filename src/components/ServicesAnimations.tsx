'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = reject
    document.head.appendChild(s)
  })
}

function splitWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent || ''
  el.setAttribute('aria-label', text)
  el.innerHTML = text.trim().split(/\s+/)
    .map(w => `<span style="display:inline-block;overflow:hidden"><span class="gsap-wi" style="display:inline-block">${w}</span></span>`)
    .join(' ')
  return Array.from(el.querySelectorAll('.gsap-wi'))
}

export default function ServicesAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (window.matchMedia('(pointer: coarse)').matches) {
      initMobile(); return
    }

    let cleanupFns: (() => void)[] = []

    const init = async () => {
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js')
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js')

      const { gsap, ScrollTrigger } = window
      gsap.registerPlugin(ScrollTrigger)

      cleanupFns.push(initHero(gsap, ScrollTrigger))
      cleanupFns.push(initShift(gsap, ScrollTrigger))
      cleanupFns.push(initFilters(gsap, ScrollTrigger))
      cleanupFns.push(initServiceSections(gsap, ScrollTrigger))
      cleanupFns.push(initComparisons(gsap, ScrollTrigger))
      cleanupFns.push(initFAQ(gsap, ScrollTrigger))
      cleanupFns.push(initCTA(gsap, ScrollTrigger))

      ScrollTrigger.refresh()
    }

    init().catch(console.error)

    return () => {
      cleanupFns.forEach(fn => fn?.())
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((st: any) => st.kill())
    }
  }, [])

  return null
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function initHero(gsap: any, ScrollTrigger: any): () => void {
  const hero = document.querySelector('[data-scene="services-hero"]')
  if (!hero) return () => {}

  const label  = hero.querySelector('[data-animate="hero-label"]')
  const h1     = hero.querySelector('[data-animate="hero-title"]') as HTMLElement
  const sub    = hero.querySelector('[data-animate="hero-sub"]')
  const pills  = hero.querySelectorAll('[data-animate="hero-pill"]')
  const cta    = hero.querySelector('[data-animate="hero-cta"]')

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  if (label) tl.from(label, { y: -18, opacity: 0, duration: 0.55 }, 0)

  if (h1) {
    const words = splitWords(h1)
    tl.from(words, { y: '110%', opacity: 0, duration: 0.75, stagger: 0.055, ease: 'power4.out' }, 0.15)
  }

  if (sub) tl.from(sub, { y: 28, opacity: 0, duration: 0.7 }, 0.5)

  if (pills.length) {
    tl.from(pills, { y: 20, opacity: 0, stagger: 0.07, duration: 0.55 }, 0.65)
  }

  if (cta) tl.from(cta, { scale: 0.88, opacity: 0, duration: 0.55, ease: 'back.out(2)' }, 0.85)

  return () => { tl.kill() }
}

// ─── "THE SHIFT" DARK SECTION ────────────────────────────────────────────────
function initShift(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="services-shift"]')
  if (!section) return () => {}

  const h2    = section.querySelector('[data-animate="shift-title"]') as HTMLElement
  const sub   = section.querySelector('[data-animate="shift-sub"]')
  const cards = section.querySelectorAll('[data-animate="shift-card"]')
  const stats = section.querySelectorAll('[data-animate="shift-stat"]')

  if (h2) {
    const words = splitWords(h2)
    gsap.from(words, {
      y: '105%', opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: h2, start: 'top 80%' }
    })
  }

  if (sub) {
    gsap.from(sub, { y: 24, opacity: 0, duration: 0.7,
      scrollTrigger: { trigger: sub, start: 'top 82%' }
    })
  }

  // Google vs AI cards, come from opposite sides
  if (cards.length >= 2) {
    gsap.from(cards[0], { x: -40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cards[0], start: 'top 85%' }
    })
    gsap.from(cards[1], { x: 40, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cards[1], start: 'top 85%' }
    })
  }

  if (stats.length) {
    gsap.from(stats, { y: 36, opacity: 0, stagger: 0.1, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: stats[0], start: 'top 85%' }
    })

    stats.forEach((card: Element) => {
      const numEl = card.querySelector('[data-count]') as HTMLElement
      if (!numEl) return
      const raw   = numEl.textContent?.trim() || ''
      const match = raw.match(/([\d.]+)/)
      if (!match) return
      const target = parseFloat(match[1])
      const prefix = raw.slice(0, match.index)
      const suffix = raw.slice((match.index ?? 0) + match[0].length)
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 82%' },
        onUpdate() {
          numEl.textContent = prefix + (Number.isInteger(target) ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix
        }
      })
    })
  }

  return () => {}
}

// ─── BUYER DECISION FILTERS ───────────────────────────────────────────────────
function initFilters(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="services-filters"]')
  if (!section) return () => {}

  const h2    = section.querySelector('[data-animate="filters-title"]') as HTMLElement
  const cards = section.querySelectorAll('[data-animate="filter-card"]')
  const bar   = section.querySelector('[data-animate="filters-bar"]')

  if (h2) {
    const words = splitWords(h2)
    gsap.from(words, {
      y: '100%', opacity: 0, stagger: 0.04, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: h2, start: 'top 80%' }
    })
  }

  if (cards.length) {
    gsap.from(cards, {
      y: 44, opacity: 0, scale: 0.97, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cards[0], start: 'top 85%' }
    })
  }

  if (bar) {
    gsap.from(bar, { y: 20, opacity: 0, duration: 0.6,
      scrollTrigger: { trigger: bar, start: 'top 88%' }
    })
  }

  return () => {}
}

// ─── INDIVIDUAL SERVICE SECTIONS (01–04) ──────────────────────────────────────
function initServiceSections(gsap: any, ScrollTrigger: any): () => void {
  document.querySelectorAll('[data-scene^="service-"]').forEach((section: Element) => {
    const left    = section.querySelector('[data-animate="service-left"]')
    const right   = section.querySelector('[data-animate="service-right"]')
    const bullets = section.querySelectorAll('[data-animate="service-bullet"]')

    if (left) {
      gsap.from(left, {
        x: -36, opacity: 0, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: left, start: 'top 82%' }
      })
    }

    if (right) {
      gsap.from(right, {
        x: 36, opacity: 0, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: right, start: 'top 82%' }
      })
    }

    if (bullets.length) {
      gsap.from(bullets, {
        x: 20, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: bullets[0], start: 'top 87%' }
      })
    }
  })

  return () => {}
}

// ─── COMPARISON SECTIONS (30 Days + DIY/Toolkit) ─────────────────────────────
function initComparisons(gsap: any, ScrollTrigger: any): () => void {
  document.querySelectorAll('[data-scene="services-compare"]').forEach((section: Element) => {
    const h2    = section.querySelector('[data-animate="compare-title"]') as HTMLElement
    const left  = section.querySelector('[data-animate="compare-left"]')
    const right = section.querySelector('[data-animate="compare-right"]')
    const bar   = section.querySelector('[data-animate="compare-bar"]')

    if (h2) {
      const words = splitWords(h2)
      gsap.from(words, {
        y: '100%', opacity: 0, stagger: 0.04, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: h2, start: 'top 80%' }
      })
    }

    if (left) {
      gsap.from(left, {
        x: -36, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: left, start: 'top 85%' }
      })
    }

    if (right) {
      gsap.from(right, {
        x: 36, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: right, start: 'top 85%' }
      })
    }

    if (bar) {
      gsap.from(bar, { y: 16, opacity: 0, duration: 0.6,
        scrollTrigger: { trigger: bar, start: 'top 90%' }
      })
    }
  })

  return () => {}
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function initFAQ(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="services-faq"]')
  if (!section) return () => {}

  const items = section.querySelectorAll('[data-animate="faq-item"]')
  if (items.length) {
    gsap.from(items, {
      y: 24, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: items[0], start: 'top 85%' }
    })
  }

  return () => {}
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function initCTA(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="services-cta"]')
  if (!section) return () => {}

  const label   = section.querySelector('[data-animate="cta-label"]')
  const h2      = section.querySelector('[data-animate="cta-title"]') as HTMLElement
  const sub     = section.querySelector('[data-animate="cta-sub"]')
  const btn     = section.querySelector('[data-animate="cta-btn"]')

  const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 72%' } })

  if (label) tl.from(label, { y: -14, opacity: 0, duration: 0.5 }, 0)
  if (h2) {
    const words = splitWords(h2)
    tl.from(words, { y: '105%', opacity: 0, stagger: 0.05, duration: 0.65, ease: 'power3.out' }, 0.1)
  }
  if (sub)  tl.from(sub, { y: 22, opacity: 0, duration: 0.65 }, 0.45)
  if (btn)  tl.from(btn, { scale: 0.88, opacity: 0, duration: 0.55, ease: 'back.out(2)' }, 0.65)

  return () => { tl.kill() }
}

// ─── MOBILE ───────────────────────────────────────────────────────────────────
function initMobile() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ;(entry.target as HTMLElement).style.opacity = '1'
        ;(entry.target as HTMLElement).style.transform = 'none'
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('[data-animate]').forEach(el => {
    ;(el as HTMLElement).style.opacity = '0'
    ;(el as HTMLElement).style.transform = 'translateY(16px)'
    ;(el as HTMLElement).style.transition = 'opacity 0.45s ease, transform 0.45s ease'
    observer.observe(el)
  })
}
