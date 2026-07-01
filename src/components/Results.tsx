'use client'
import { useEffect, useRef } from 'react'

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  const isDecimal = String(target).includes('.')
  const steps = 60
  const interval = 1800 / steps
  let step = 0
  const timer = setInterval(() => {
    step++
    const progress = step / steps
    const ease = 1 - Math.pow(1 - progress, 3)
    const val = isDecimal ? (target * ease).toFixed(1) : Math.round(target * ease)
    el.textContent = val + suffix
    if (step >= steps) {
      el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix
      clearInterval(timer)
    }
  }, interval)
}

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting || animated.current) return
        animated.current = true
        const counters = sectionRef.current?.querySelectorAll<HTMLElement>('.counter')
        counters?.forEach(el => {
          const raw = el.dataset.count
          const suffix = el.dataset.suffix || ''
          if (raw) animateCounter(el, parseFloat(raw), suffix)
        })
        obs.disconnect()
      })
    }, { threshold: 0, rootMargin: '0px 0px -50px 0px' })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="results" className="py-16 gradient-hero relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="section-label inline-block bg-white/5 border px-4 py-2 rounded-full mb-4" style={{ borderColor: 'rgba(201,168,76,0.45)', color: '#F0D070' }}>Real Numbers. Real Growth.</span>
          <h2 className="font-display t-heading font-bold text-white mb-4">
            Results That Speak for Themselves
          </h2>
        </div>

        {/* Stats bento: 4 cols, hero stat spans 2 */}
        <div className="pg-grid pg-grid-4">

          {/* Main stat — 2×2 featured */}
          <div className="reveal card card-3d card-featured p-10 flex flex-col justify-between pg-span-2">
            <div className="bento-content">
              <div className="text-blue-300/60 text-xs font-semibold uppercase tracking-widest mb-4">Ad Spend Managed</div>
              <div className="text-7xl font-extrabold text-white leading-none mb-3">₹2Cr+</div>
              <div className="text-blue-200/80 text-base leading-relaxed">Profitably deployed across Meta, Google, and performance channels — with full transparency on every rupee.</div>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-green-400 text-sm font-medium">Consistently profitable</span>
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="reveal delay-2 card card-3d card-dark p-8 flex flex-col items-center justify-center text-center">
            <div className="bento-content">
              <div className="text-5xl font-extrabold text-white stat-number mb-2"><span className="counter" data-count="50" data-suffix="+">50+</span></div>
              <div className="text-blue-300 font-medium text-sm">Happy Clients</div>
              <div className="text-blue-300/70 text-xs mt-1">Across industries</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="reveal delay-3 card card-3d card-dark p-8 flex flex-col items-center justify-center text-center">
            <div className="bento-content">
              <div className="text-5xl font-extrabold text-white stat-number mb-2"><span className="counter" data-count="3.8" data-suffix="x">3.8x</span></div>
              <div className="text-blue-300 font-medium text-sm">Average ROAS</div>
              <div className="text-blue-300/70 text-xs mt-1">On paid ad campaigns</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="reveal delay-4 card card-3d card-dark p-8 flex flex-col items-center justify-center text-center">
            <div className="bento-content">
              <div className="text-5xl font-extrabold text-white stat-number mb-2"><span className="counter" data-count="94" data-suffix="%">94%</span></div>
              <div className="text-blue-300 font-medium text-sm">Client Retention</div>
              <div className="text-blue-300/70 text-xs mt-1">They stay because it works</div>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="reveal delay-5 card card-3d card-dark p-8 flex flex-col items-center justify-center text-center">
            <div className="bento-content">
              <div className="text-5xl font-extrabold text-white stat-number mb-2">100%</div>
              <div className="text-blue-300 font-medium text-sm">Transparent Reporting</div>
              <div className="text-blue-300/70 text-xs mt-1">No vanity metrics</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
