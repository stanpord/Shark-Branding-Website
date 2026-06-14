'use client'

import { useEffect } from 'react'

declare global {
  interface Window { gsap: any; ScrollTrigger: any }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const s = document.createElement('script')
    s.src = src; s.onload = () => resolve(); s.onerror = reject
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

export default function AiVisibilityAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (window.matchMedia('(pointer: coarse)').matches) {
      initMobile(); return
    }

    const init = async () => {
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js')
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js')
      const { gsap, ScrollTrigger } = window
      gsap.registerPlugin(ScrollTrigger)

      // ── Hero ──────────────────────────────────────────────────────────
      const hero = document.querySelector('[data-scene="avc-hero"]')
      if (hero) {
        const label = hero.querySelector('[data-animate="hero-label"]')
        const h1    = hero.querySelector('[data-animate="hero-title"]') as HTMLElement
        const sub   = hero.querySelector('[data-animate="hero-sub"]')
        const ctas  = hero.querySelectorAll('[data-animate="hero-cta"]')

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        if (label) tl.from(label, { y: -16, opacity: 0, duration: 0.55 }, 0)
        if (h1) {
          // block fade — preserves colored <span> inside h1
          tl.from(h1, { y: 36, opacity: 0, duration: 0.75, ease: 'power3.out' }, 0.15)
        }
        if (sub) tl.from(sub, { y: 26, opacity: 0, duration: 0.7 }, 0.5)
        if (ctas.length) tl.from(ctas, { scale: 0.88, opacity: 0, stagger: 0.08, duration: 0.55, ease: 'back.out(2)' }, 0.75)
      }

      // ── What is AI Visibility ─────────────────────────────────────────
      const what = document.querySelector('[data-scene="avc-what"]')
      if (what) {
        const h2 = what.querySelector('[data-animate="what-title"]') as HTMLElement
        const ps = what.querySelectorAll('[data-animate="what-para"]')
        if (h2) {
          const words = splitWords(h2)
          gsap.from(words, { y: '105%', opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: h2, start: 'top 80%' } })
        }
        ps.forEach((p: Element, i: number) => {
          gsap.from(p, { y: 24, opacity: 0, duration: 0.65,
            scrollTrigger: { trigger: p, start: 'top 84%' },
            delay: i * 0.06 })
        })
      }

      // ── How It Works (step cards) ─────────────────────────────────────
      const how = document.querySelector('[data-scene="avc-how"]')
      if (how) {
        const h2    = how.querySelector('[data-animate="how-title"]') as HTMLElement
        const cards = how.querySelectorAll('[data-animate="how-card"]')
        if (h2) {
          const words = splitWords(h2)
          gsap.from(words, { y: '100%', opacity: 0, stagger: 0.04, duration: 0.65, ease: 'power3.out',
            scrollTrigger: { trigger: h2, start: 'top 80%' } })
        }
        if (cards.length) {
          gsap.from(cards, { y: 40, opacity: 0, scale: 0.97, stagger: 0.09, duration: 0.65, ease: 'power3.out',
            scrollTrigger: { trigger: cards[0], start: 'top 85%' } })
        }
      }

      // ── Who It's For ─────────────────────────────────────────────────
      const who = document.querySelector('[data-scene="avc-who"]')
      if (who) {
        const h2    = who.querySelector('[data-animate="who-title"]') as HTMLElement
        const sub2  = who.querySelector('[data-animate="who-sub"]')
        const cards = who.querySelectorAll('[data-animate="who-card"]')
        const cta   = who.querySelector('[data-animate="who-cta"]')

        if (h2) {
          const words = splitWords(h2)
          gsap.from(words, { y: '105%', opacity: 0, stagger: 0.04, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: h2, start: 'top 80%' } })
        }
        if (sub2) gsap.from(sub2, { y: 22, opacity: 0, duration: 0.65,
          scrollTrigger: { trigger: sub2, start: 'top 83%' } })
        if (cards.length) gsap.from(cards, { y: 36, opacity: 0, stagger: 0.1, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: cards[0], start: 'top 85%' } })
        if (cta) gsap.from(cta, { scale: 0.9, opacity: 0, duration: 0.55, ease: 'back.out(2)',
          scrollTrigger: { trigger: cta, start: 'top 88%' } })
      }

      // ── FAQ ────────────────────────────────────────────────────────────
      const faq = document.querySelector('[data-scene="avc-faq"]')
      if (faq) {
        const items = faq.querySelectorAll('[data-animate="faq-item"]')
        if (items.length) gsap.from(items, { y: 22, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: items[0], start: 'top 85%' } })
      }

      // ── CTA (teal) ────────────────────────────────────────────────────
      const cta = document.querySelector('[data-scene="avc-cta"]')
      if (cta) {
        const h2   = cta.querySelector('[data-animate="cta-title"]') as HTMLElement
        const sub2 = cta.querySelector('[data-animate="cta-sub"]')
        const btns = cta.querySelectorAll('[data-animate="cta-btn"]')
        const tl2  = gsap.timeline({ scrollTrigger: { trigger: cta, start: 'top 72%' } })
        if (h2) {
          const words = splitWords(h2)
          tl2.from(words, { y: '105%', opacity: 0, stagger: 0.05, duration: 0.65, ease: 'power3.out' }, 0)
        }
        if (sub2)       tl2.from(sub2, { y: 20, opacity: 0, duration: 0.65 }, 0.35)
        if (btns.length) tl2.from(btns, { scale: 0.88, opacity: 0, stagger: 0.08, duration: 0.55, ease: 'back.out(2)' }, 0.6)
      }

      ScrollTrigger.refresh()
    }

    init().catch(console.error)

    return () => {
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((st: any) => st.kill())
    }
  }, [])

  return null
}

function initMobile() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        ;(e.target as HTMLElement).style.opacity = '1'
        ;(e.target as HTMLElement).style.transform = 'none'
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('[data-animate]').forEach(el => {
    ;(el as HTMLElement).style.opacity = '0'
    ;(el as HTMLElement).style.transform = 'translateY(16px)'
    ;(el as HTMLElement).style.transition = 'opacity 0.45s ease, transform 0.45s ease'
    obs.observe(el)
  })
}
