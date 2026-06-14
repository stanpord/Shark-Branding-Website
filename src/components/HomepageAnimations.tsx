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

function splitIntoWordSpans(el: HTMLElement): HTMLElement[] {
  const text = el.textContent || ''
  el.setAttribute('aria-label', text)
  el.innerHTML = text
    .trim()
    .split(/\s+/)
    .map(w => `<span class="gsap-word" style="display:inline-block;overflow:hidden"><span class="gsap-word-inner" style="display:inline-block">${w}</span></span>`)
    .join(' ')
  return Array.from(el.querySelectorAll('.gsap-word-inner'))
}

export default function HomepageAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) {
      // Mobile: lighter effects only — no pinning, simpler reveals
      initMobile(); return
    }

    let cleanupFns: (() => void)[] = []

    const init = async () => {
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js')
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js')

      const { gsap, ScrollTrigger } = window
      gsap.registerPlugin(ScrollTrigger)

      cleanupFns.push(initHero(gsap, ScrollTrigger))
      cleanupFns.push(initShiftSection(gsap, ScrollTrigger))
      cleanupFns.push(initFrameworkCards(gsap, ScrollTrigger))
      cleanupFns.push(initSteps(gsap, ScrollTrigger))
      cleanupFns.push(initResults(gsap, ScrollTrigger))
      cleanupFns.push(initServices(gsap, ScrollTrigger))
      cleanupFns.push(initEmployees(gsap, ScrollTrigger))
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
  const hero = document.querySelector('[data-scene="hero"]')
  if (!hero) return () => {}

  const headline = hero.querySelector('[data-animate="hero-title"]') as HTMLElement
  const sub      = hero.querySelector('[data-animate="hero-sub"]')
  const cta      = hero.querySelector('[data-animate="hero-cta"]')
  const label    = hero.querySelector('[data-animate="hero-label"]')
  const glows    = hero.querySelectorAll('.hero-glow')
  const dots     = hero.querySelectorAll('.hero-dot')

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Label slides down
  if (label) tl.from(label, { y: -20, opacity: 0, duration: 0.6 }, 0)

  // Headline: each word rises from its clipping container
  if (headline) {
    const words = splitIntoWordSpans(headline)
    tl.from(words, {
      y: '110%',
      opacity: 0,
      duration: 0.75,
      stagger: 0.06,
      ease: 'power4.out',
    }, 0.15)
  }

  // Sub fades up
  if (sub) tl.from(sub, { y: 30, opacity: 0, duration: 0.8 }, 0.55)

  // CTA bounces in
  if (cta) tl.from(cta, { scale: 0.85, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, 0.75)

  // Glow blobs drift on scroll
  if (glows.length) {
    glows.forEach((glow: Element, i: number) => {
      gsap.to(glow, {
        y: i % 2 === 0 ? -120 : 80,
        x: i % 2 === 0 ? 60 : -40,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 2 + i,
        }
      })
    })
  }

  // Dots parallax
  if (dots.length) {
    dots.forEach((dot: Element, i: number) => {
      gsap.to(dot, {
        y: (i % 3 === 0 ? -60 : i % 3 === 1 ? -90 : -40),
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1 + (i * 0.3),
        }
      })
    })
  }

  return () => { tl.kill() }
}

// ─── "THE SHIFT" DARK SECTION ─────────────────────────────────────────────
function initShiftSection(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="shift"]')
  if (!section) return () => {}

  const heading = section.querySelector('[data-animate="shift-title"]') as HTMLElement
  const sub     = section.querySelector('[data-animate="shift-sub"]')
  const stats   = section.querySelectorAll('[data-animate="stat-card"]')

  // Section clips in from the top
  gsap.fromTo(section,
    { clipPath: 'inset(0 0 100% 0)' },
    {
      clipPath: 'inset(0 0 0% 0)',
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: { trigger: section, start: 'top 85%' }
    }
  )

  if (heading) {
    const words = splitIntoWordSpans(heading)
    gsap.from(words, {
      y: '105%',
      opacity: 0,
      stagger: 0.04,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 80%' }
    })
  }

  if (sub) {
    gsap.from(sub, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: { trigger: sub, start: 'top 82%' }
    })
  }

  // Stat cards stagger in with scale
  if (stats.length) {
    gsap.from(stats, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: stats[0], start: 'top 82%' }
    })

    // Count up numbers
    stats.forEach((card: Element) => {
      const numEl = card.querySelector('[data-count-to]') as HTMLElement
      if (!numEl) return
      const target = parseFloat(numEl.dataset.countTo || '0')
      const isInt = Number.isInteger(target)
      gsap.from({ val: 0 }, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 80%' },
        onUpdate: function() {
          numEl.textContent = isInt
            ? Math.round(this.targets()[0].val).toString()
            : this.targets()[0].val.toFixed(1)
        }
      })
    })
  }

  return () => {}
}

// ─── FRAMEWORK CARDS (Found / Trusted / Chosen) ───────────────────────────
function initFrameworkCards(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="framework"]')
  if (!section) return () => {}

  const heading = section.querySelector('[data-animate="framework-title"]') as HTMLElement
  const cards   = section.querySelectorAll('[data-animate="framework-card"]')

  if (heading) {
    gsap.from(heading, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: { trigger: heading, start: 'top 80%' }
    })
  }

  cards.forEach((card: Element, i: number) => {
    gsap.fromTo(card,
      { y: 50, opacity: 0, clipPath: 'inset(0 0 30% 0 round 20px)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0 0 0% 0 round 20px)',
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 85%' },
        delay: i * 0.12,
      }
    )
  })

  return () => {}
}

// ─── HOW IT WORKS STEPS ───────────────────────────────────────────────────
function initSteps(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="steps"]')
  if (!section) return () => {}

  const heading = section.querySelector('[data-animate="steps-title"]') as HTMLElement
  const steps   = section.querySelectorAll('[data-animate="step-card"]')

  if (heading) {
    gsap.from(heading, {
      y: 36,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: { trigger: heading, start: 'top 78%' }
    })
  }

  if (steps.length) {
    gsap.from(steps, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: steps[0], start: 'top 85%' }
    })
  }

  return () => {}
}

// ─── RESULTS CARDS ────────────────────────────────────────────────────────
function initResults(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="results"]')
  if (!section) return () => {}

  const heading = section.querySelector('[data-animate="results-title"]') as HTMLElement
  const cards   = section.querySelectorAll('[data-animate="result-card"]')

  if (heading) {
    gsap.from(heading, {
      y: 36, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: heading, start: 'top 80%' }
    })
  }

  if (cards.length) {
    gsap.from(cards, {
      y: 40,
      opacity: 0,
      scale: 0.97,
      stagger: 0.1,
      duration: 0.65,
      ease: 'power3.out',
      scrollTrigger: { trigger: cards[0], start: 'top 85%' }
    })
  }

  return () => {}
}

// ─── SERVICES ─────────────────────────────────────────────────────────────
function initServices(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="services"]')
  if (!section) return () => {}

  const cards = section.querySelectorAll('[data-animate="service-card"]')

  if (cards.length) {
    cards.forEach((card: Element, i: number) => {
      gsap.fromTo(card,
        { x: i % 2 === 0 ? -30 : 30, opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 86%' },
          delay: (i % 2) * 0.08,
        }
      )
    })
  }

  return () => {}
}

// ─── AI EMPLOYEES ─────────────────────────────────────────────────────────
function initEmployees(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="employees"]')
  if (!section) return () => {}

  const heading = section.querySelector('[data-animate="employees-title"]') as HTMLElement

  if (heading) {
    gsap.from(heading, {
      y: 36, opacity: 0, duration: 0.8,
      scrollTrigger: { trigger: heading, start: 'top 80%' }
    })
  }

  return () => {}
}

// ─── CTA ──────────────────────────────────────────────────────────────────
function initCTA(gsap: any, ScrollTrigger: any): () => void {
  const section = document.querySelector('[data-scene="cta"]')
  if (!section) return () => {}

  const label   = section.querySelector('[data-animate="cta-label"]')
  const heading = section.querySelector('[data-animate="cta-title"]') as HTMLElement
  const sub     = section.querySelector('[data-animate="cta-sub"]')
  const btn     = section.querySelector('[data-animate="cta-btn"]')

  const tl = gsap.timeline({
    scrollTrigger: { trigger: section, start: 'top 70%' }
  })

  if (label)   tl.from(label,   { y: -16, opacity: 0, duration: 0.5 }, 0)
  if (heading) {
    const words = splitIntoWordSpans(heading)
    tl.from(words, { y: '105%', opacity: 0, stagger: 0.05, duration: 0.65, ease: 'power3.out' }, 0.1)
  }
  if (sub)     tl.from(sub,     { y: 24, opacity: 0, duration: 0.7 }, 0.45)
  if (btn)     tl.from(btn,     { scale: 0.85, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, 0.65)

  return () => { tl.kill() }
}

// ─── MOBILE (reduced set) ─────────────────────────────────────────────────
function initMobile() {
  // Simple fade-in via IntersectionObserver — no GSAP needed on mobile
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ;(entry.target as HTMLElement).style.opacity = '1'
        ;(entry.target as HTMLElement).style.transform = 'none'
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('[data-animate]').forEach(el => {
    ;(el as HTMLElement).style.opacity = '0'
    ;(el as HTMLElement).style.transform = 'translateY(20px)'
    ;(el as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    observer.observe(el)
  })
}
