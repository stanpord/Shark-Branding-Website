'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

const EMPLOYEES = [
  { name: 'Gemma', role: 'Chat Receptionist', cardImg: '/avatars/gemma.png', color: '#18b5d8' },
  { name: 'Blogger', role: 'Content Writer', cardImg: '/avatars/blogger.png', color: '#4FD1A0' },
  { name: 'Reputation Specialist', role: 'Review Manager', cardImg: '/avatars/reputation.png', color: '#F9DB79' },
  { name: 'Lead Qualifier', role: 'Sales Employee', cardImg: '/avatars/sales.png', color: '#18b5d8' },
  { name: 'Social Media Manager', role: 'Content Publisher', cardImg: '/avatars/social.png', color: '#F7555F' },
]

const TOTAL = EMPLOYEES.length
const DRAG_SCALE = 260   // px of drag = 1 card
const DAMPING = 0.93     // momentum friction (higher = slides longer)
const SNAP_SPEED = 0.12  // ease toward nearest card

export default function ShowcaseCarousel() {
  const posRef = useRef(0)
  const velRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const dragging = useRef(false)
  const drag = useRef({ startX: 0, startPos: 0, lastX: 0, lastT: 0 })
  const [pos, setPos] = useState(0)

  const wrapOffset = (i: number, p: number) => {
    let off = (i - p) % TOTAL
    if (off > TOTAL / 2) off -= TOTAL
    if (off < -TOTAL / 2) off += TOTAL
    return off
  }

  const activeIndex = ((Math.round(pos) % TOTAL) + TOTAL) % TOTAL
  const emp = EMPLOYEES[activeIndex]

  const physics = useCallback(() => {
    const snapping = Math.abs(velRef.current) < 0.015
    if (snapping) {
      const target = Math.round(posRef.current)
      const diff = target - posRef.current
      posRef.current += diff * SNAP_SPEED
      setPos(posRef.current)
      if (Math.abs(diff) > 0.001) {
        rafRef.current = requestAnimationFrame(physics)
      } else {
        posRef.current = target
        setPos(target)
        rafRef.current = null
      }
    } else {
      velRef.current *= DAMPING
      posRef.current += velRef.current
      setPos(posRef.current)
      rafRef.current = requestAnimationFrame(physics)
    }
  }, [])

  const startDrag = useCallback((x: number) => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    dragging.current = true
    velRef.current = 0
    drag.current = { startX: x, startPos: posRef.current, lastX: x, lastT: Date.now() }
  }, [])

  const moveDrag = useCallback((x: number) => {
    if (!dragging.current) return
    const dx = x - drag.current.startX
    posRef.current = drag.current.startPos - dx / DRAG_SCALE
    setPos(posRef.current)
    const now = Date.now()
    const dt = now - drag.current.lastT
    if (dt > 0 && dt < 80) {
      velRef.current = (drag.current.lastX - x) / DRAG_SCALE / dt * 16
    }
    drag.current.lastX = x
    drag.current.lastT = now
  }, [])

  const endDrag = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    rafRef.current = requestAnimationFrame(physics)
  }, [physics])

  useEffect(() => {
    const onMove = (e: MouseEvent) => moveDrag(e.clientX)
    const onUp = () => endDrag()
    const onTouchMove = (e: TouchEvent) => moveDrag(e.touches[0].clientX)
    const onTouchEnd = () => endDrag()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [moveDrag, endDrag])

  const goTo = (i: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    velRef.current = 0
    posRef.current = Math.round(posRef.current) + wrapOffset(i, Math.round(posRef.current))
    setPos(posRef.current)
  }

  const cardStyle = (i: number): React.CSSProperties => {
    const off = wrapOffset(i, pos)
    const absOff = Math.abs(off)
    const visible = absOff < 2.8
    return {
      position: 'absolute',
      width: 300,
      top: '50%',
      left: '50%',
      transform: `
        translateX(calc(-50% + ${off * 255}px))
        translateY(-50%)
        rotateY(${off * 36}deg)
        translateZ(${-absOff * 90}px)
        scale(${Math.max(0.55, 1 - absOff * 0.17)})
      `,
      opacity: visible ? Math.max(0, 1 - absOff * 0.32) : 0,
      zIndex: Math.round(30 - absOff * 8),
      pointerEvents: absOff < 0.5 ? 'none' : 'auto',
      transition: dragging.current ? 'none' : 'opacity 0.3s',
    }
  }

  return (
    <div style={{ userSelect: 'none' }}>
      {/* Carousel */}
      <div
        className="relative w-full"
        style={{
          height: 370,
          perspective: 1100,
          perspectiveOrigin: '50% 50%',
          cursor: dragging.current ? 'grabbing' : 'grab',
        }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        aria-label="AI Employees carousel"
      >
        {EMPLOYEES.map((card, i) => (
          <div key={i} style={cardStyle(i)}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: `0 0 40px ${card.color}25, 0 16px 48px rgba(0,0,0,0.6)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.cardImg} alt={card.name} style={{ width: '100%', display: 'block' }} draggable={false} />
            </div>
          </div>
        ))}
      </div>

      {/* Dots nav */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {EMPLOYEES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={EMPLOYEES[i].name}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? 22 : 7,
              height: 7,
              backgroundColor: i === activeIndex ? emp.color : 'rgba(255,255,255,0.15)',
            }}
          />
        ))}
      </div>

      {/* Active label */}
      <div className="mt-5 text-center pointer-events-none" style={{ minHeight: 48 }}>
        <p className="text-white font-bold text-[18px]">{emp.name}</p>
        <p className="text-white/30 text-[13px] mt-0.5">{emp.role}</p>
      </div>

      <p className="text-center text-white/20 text-[12px] mt-2 pointer-events-none">
        Drag to explore the team
      </p>
    </div>
  )
}
