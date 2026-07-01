'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CoursePage() {
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [openModule, setOpenModule] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      setShowSticky(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' })
    revealEls.forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.bottom < 0) el.classList.add('visible')
      else obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const modules = [
    {
      num: '01', color: 'rgba(201,168,76,0.22)', textColor: '#C9A84C',
      title: 'Meta Ads Mastery', sub: '6 lessons · Beginner to Advanced',
      lessons: ['Meta Business Manager setup & structure','Audience research, targeting & lookalikes','Creative strategy — what works in 2025','Campaign scaling without killing ROAS','Pixel setup, retargeting & conversion events','Reading data & optimising for profit'],
      dark: false,
    },
    {
      num: '02', color: 'rgba(37,99,235,0.22)', textColor: '#2563EB',
      title: 'Google Ads Pro', sub: '6 lessons · Search, Display & PMax',
      lessons: ['Google Ads account structure & campaign types','Keyword research & match types mastery','Writing high-CTR search ads that convert','Performance Max campaigns — setup & optimisation','Smart bidding strategies & ROAS targets','Analytics, conversion tracking & reporting'],
      dark: false,
    },
    {
      num: '03', color: 'rgba(16,185,129,0.12)', textColor: '#10B981',
      title: 'SEO & Content Strategy', sub: '5 lessons · Rank & drive organic traffic',
      lessons: ['On-page & technical SEO fundamentals','Keyword research that drives buyer-intent traffic','Content marketing & blog strategy','Link building & domain authority growth','Google Search Console & SEO measurement'],
      dark: false,
    },
    {
      num: '04', color: 'rgba(139,92,246,0.12)', textColor: '#8B5CF6',
      title: 'Social Media Growth', sub: '5 lessons · Instagram, LinkedIn & beyond',
      lessons: ['Brand positioning & profile optimisation','Content calendar & viral content frameworks','Reels, Shorts & short-form video strategy','Community building & engagement tactics','Analytics & tracking social ROI'],
      dark: false,
    },
    {
      num: '05', color: '', textColor: '#1a1a1a',
      title: 'Andromeda Growth Framework', sub: 'Advanced · Exclusive to this course',
      lessons: ['The Andromeda full-funnel growth system','Multi-channel attribution & budget allocation','Scaling from ₹10K to ₹1L+ ad spend profitably','Advanced retargeting architecture','Proprietary reporting dashboards used by Zyra'],
      dark: true,
    },
  ]

  const CheckIcon = ({ gold = false }: { gold?: boolean }) => (
    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={gold ? { color: '#C9A84C' } : { color: '#2563EB' }}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )

  const CheckIconLg = () => (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#C9A84C' }}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )

  return (
    <div className="font-sans bg-white text-gray-900 antialiased">

      {/* ── NAVBAR ── */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 ${scrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'}`}
        style={scrolled ? { backdropFilter: 'blur(12px)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-lg" style={{ background: 'linear-gradient(135deg,#2563EB,#1E3A8A)' }}>Z</div>
            <div>
              <div className="text-lg font-bold leading-none">
                <span className="text-brand">zyra</span>{' '}
                <span style={{ color: scrolled ? '#1E2A4A' : '#ffffff' }}>digital</span>
              </div>
              <div className="text-xs tracking-widest" style={{ color: scrolled ? '#6B7280' : 'rgba(147,197,253,0.7)' }}>Elevate Your Presence</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium transition-colors duration-200" style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.8)' }}>← Back to Agency</Link>
            <a href="#curriculum" className="text-sm font-medium transition-colors duration-200" style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.8)' }}>Curriculum</a>
            <a href="#instructor" className="text-sm font-medium transition-colors duration-200" style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.8)' }}>Instructor</a>
            <a href="#pricing" className="text-sm font-medium transition-colors duration-200" style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.8)' }}>Pricing</a>
          </div>
          <a href="https://wa.me/919999999999?text=Hi%20Zyra%20Digital!%20I%27d%20like%20to%20enrol%20in%20Digital%20Marketing%20Mastery" target="_blank" rel="noopener"
            className="hidden sm:flex items-center gap-2 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D070)' }}>
            Enrol Now — ₹10,000
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="gradient-hero hero-grain min-h-screen flex items-center relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="blob blob-gold"></div>
          <div className="blob blob-blue"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="hero-in-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-8" style={{ borderColor: 'rgba(201,168,76,0.5)', color: '#F0D070', background: 'rgba(201,168,76,0.08)' }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                Full Digital Marketing Course
              </div>
              <h1 className="hero-in-2 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Digital Marketing<br />
                <span className="gradient-gold">Mastery by Zyra</span>
              </h1>
              <p className="hero-in-3 text-blue-100/80 text-lg leading-relaxed mb-8 max-w-xl">
                Learn the exact system our agency uses to generate 3–5x ROAS for clients. Meta Ads, Google Ads, SEO, Social Media, and our proprietary Andromeda growth framework — all in one course.
              </p>
              <div className="hero-in-3 flex flex-wrap gap-6 mb-10">
                {[
                  { label: '5 Modules' },
                  { label: 'Self-Paced' },
                  { label: 'Agency-Proven System' },
                  { label: 'Beginners to Advanced' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2 text-blue-200 text-sm">
                    <svg className="w-4 h-4" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" /></svg>
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="hero-in-4 flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919999999999?text=Hi%20Zyra%20Digital!%20I%27d%20like%20to%20enrol%20in%20Digital%20Marketing%20Mastery%20for%20%E2%82%B910%2C000" target="_blank" rel="noopener"
                  className="inline-flex items-center justify-center gap-3 text-gray-900 font-bold text-base px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D070)' }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" /></svg>
                  Enrol Now — ₹10,000
                </a>
                <a href="#curriculum" className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                  See Curriculum
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="flex justify-center lg:justify-end">
              <div className="glass-card rounded-3xl p-8 w-full max-w-sm">
                <div className="rounded-2xl mb-6 flex items-center justify-center h-44 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1E2A4A,#1E3A8A)' }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 70% 30%, #C9A84C 0%, transparent 60%)' }}></div>
                  <div className="text-center relative z-10">
                    <div className="font-display text-3xl font-bold text-white mb-1">DMM</div>
                    <div className="text-blue-300 text-xs tracking-widest uppercase">by Zyra Digital</div>
                  </div>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-4xl font-bold text-white">₹10,000</span>
                  <span className="text-blue-400/60 text-sm line-through">₹15,000</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#F0D070' }}>33% OFF</span>
                </div>
                <p className="text-blue-300/70 text-sm mb-6">One-time payment. Lifetime access.</p>
                <ul className="space-y-3 mb-7">
                  {['5 in-depth modules','Lifetime access + future updates','Private WhatsApp community access','Real campaign templates & swipe files','Andromeda Framework (exclusive)'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-blue-100"><CheckIconLg />{item}</li>
                  ))}
                </ul>
                <a href="https://wa.me/919999999999?text=Hi%20Zyra%20Digital!%20I%27d%20like%20to%20enrol%20in%20Digital%20Marketing%20Mastery%20for%20%E2%82%B910%2C000" target="_blank" rel="noopener"
                  className="flex items-center justify-center gap-2 w-full text-gray-900 font-bold py-4 rounded-2xl hover:scale-105 transition-transform duration-200 cursor-pointer text-sm"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D070)' }}>
                  Enrol via WhatsApp →
                </a>
                <p className="text-center text-blue-400/50 text-xs mt-3">Message us to pay & get instant access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <span className="section-label inline-block bg-blue-50 text-brand px-4 py-2 rounded-full mb-4">Who Is This For</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Built for People Who Want <span className="gradient-text">Real Results</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Not theory. Not generic advice. The actual playbook from an agency managing ₹2Cr+ in ad spend.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { delay: 'delay-1', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, title: 'Business Owners', desc: 'Want to understand your marketing so you can hold agencies accountable — or run it yourself profitably.' },
              { delay: 'delay-2', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />, title: 'Aspiring Marketers', desc: 'Want to build a career in digital marketing with skills that get you hired or help you land freelance clients.' },
              { delay: 'delay-3', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />, title: 'Freelancers & Consultants', desc: 'Want to offer full-stack digital marketing services to clients — and actually know what you\'re doing.' },
            ].map(card => (
              <div key={card.title} className={`reveal ${card.delay} bg-gray-50 rounded-2xl p-7 card-hover cursor-default border border-gray-100`}>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{card.icon}</svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <span className="section-label inline-block bg-blue-50 text-brand px-4 py-2 rounded-full mb-4">Full Curriculum</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You&apos;ll <span className="gradient-text">Master</span></h2>
            <p className="text-gray-500 text-lg">5 modules. Agency-grade depth. Zero fluff.</p>
          </div>
          <div className="space-y-4">
            {modules.map((mod, i) => (
              <div key={mod.num} className={`reveal delay-${i + 1} rounded-2xl overflow-hidden ${mod.dark ? 'border' : 'bg-white shadow-sm border border-gray-100'}`}
                style={mod.dark ? { background: 'linear-gradient(135deg,#0F172A,#1E2A4A)', borderColor: 'rgba(201,168,76,0.3)' } : {}}>
                <button
                  className="w-full flex items-center justify-between p-7 text-left cursor-pointer"
                  aria-expanded={openModule === i}
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm"
                      style={mod.dark
                        ? { background: 'linear-gradient(135deg, #C9A84C, #F0D070)', color: '#1a1a1a' }
                        : { background: mod.color, color: mod.textColor }}>
                      {mod.num}
                    </div>
                    <div>
                      <div className={`font-bold text-base ${mod.dark ? 'text-white' : 'text-gray-900'}`}>{mod.title}</div>
                      <div className="text-sm mt-0.5" style={{ color: mod.dark ? 'rgba(201,168,76,0.8)' : '#9CA3AF' }}>{mod.sub}</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ transform: openModule === i ? 'rotate(180deg)' : '', color: mod.dark ? 'rgba(201,168,76,0.7)' : '#9CA3AF' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openModule === i && (
                  <div className="px-7 pb-6">
                    <ul className="space-y-3 border-t pt-5" style={{ borderColor: mod.dark ? 'rgba(201,168,76,0.2)' : '#F3F4F6' }}>
                      {mod.lessons.map(lesson => (
                        <li key={lesson} className={`flex items-start gap-3 text-sm ${mod.dark ? 'text-blue-200' : 'text-gray-600'}`}>
                          <CheckIcon gold={mod.dark} />{lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── INSTRUCTOR ── */}
      <section id="instructor" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label inline-block bg-blue-50 text-brand px-4 py-2 rounded-full mb-6">Your Instructor</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Taught by the <span className="gradient-text">Agency Itself</span></h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">This isn&apos;t a course built by a blogger or a YouTube personality. Every lesson comes directly from Zyra Digital&apos;s active client work — the same strategies we use every day to manage ₹2Cr+ in ad spend across 50+ businesses.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[['50+','Businesses Grown'],['₹2Cr+','Ad Spend Managed'],['3.8x','Average ROAS'],['4+','Years in Business']].map(([val, label]) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="font-display text-2xl font-bold text-brand mb-1">{val}</div>
                    <div className="text-gray-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
              <Link href="/" className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:underline cursor-pointer">
                See Zyra Digital&apos;s client results →
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-blue-50 rounded-3xl flex items-center justify-center relative overflow-hidden border-2 border-blue-100">
                  <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Zyra Digital instructor" role="img">
                    <rect width="280" height="280" fill="#EFF6FF"/>
                    <ellipse cx="140" cy="230" rx="70" ry="50" fill="#1E2A4A"/>
                    <ellipse cx="140" cy="105" rx="45" ry="48" fill="#FBBF24"/>
                    <ellipse cx="140" cy="108" rx="38" ry="40" fill="#FDE68A"/>
                    <ellipse cx="124" cy="100" rx="6" ry="7" fill="#1E2A4A"/>
                    <ellipse cx="156" cy="100" rx="6" ry="7" fill="#1E2A4A"/>
                    <ellipse cx="126" cy="99" rx="2.5" ry="3" fill="#fff"/>
                    <ellipse cx="158" cy="99" rx="2.5" ry="3" fill="#fff"/>
                    <path d="M128 120 Q140 132 152 120" stroke="#1E2A4A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <ellipse cx="140" cy="60" rx="46" ry="22" fill="#1E2A4A"/>
                    <rect x="95" y="45" width="90" height="20" rx="10" fill="#1E2A4A"/>
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D070)' }}>
                  <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 gradient-hero hero-grain relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="blob blob-gold"></div>
          <div className="blob blob-blue"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <span className="section-label inline-block bg-white/5 border px-4 py-2 rounded-full mb-6" style={{ borderColor: 'rgba(201,168,76,0.45)', color: '#F0D070' }}>Enrol Today</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">One Price.<br /><span className="gradient-gold">Lifetime Access.</span></h2>
            <p className="text-blue-200/70 text-lg mb-12">No subscriptions. No hidden fees. Pay once, learn forever.</p>
          </div>
          <div className="reveal glass-card rounded-3xl p-10 max-w-lg mx-auto">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="font-display text-6xl font-bold text-white">₹10,000</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-blue-400/60 text-base line-through">₹15,000</span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#F0D070' }}>Save ₹5,000</span>
            </div>
            <ul className="space-y-4 mb-10 text-left">
              {['All 5 modules — 28 lessons total','Lifetime access + all future updates','Private WhatsApp student community','Campaign templates & swipe files','Exclusive Andromeda Framework (Module 5)'].map(item => (
                <li key={item} className="flex items-center gap-3 text-blue-100 text-sm"><CheckIconLg />{item}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999999999?text=Hi%20Zyra%20Digital!%20I%27d%20like%20to%20enrol%20in%20Digital%20Marketing%20Mastery%20for%20%E2%82%B910%2C000" target="_blank" rel="noopener"
              className="flex items-center justify-center gap-3 w-full text-gray-900 font-bold text-base py-4 rounded-2xl hover:scale-105 transition-transform duration-200 cursor-pointer mb-4"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D070)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" /></svg>
              Enrol Now via WhatsApp
            </a>
            <p className="text-blue-400/50 text-xs text-center">Message us on WhatsApp to pay & get instant access</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-white text-sm" style={{ background: 'linear-gradient(135deg,#2563EB,#1E3A8A)' }}>Z</div>
              <span className="text-white font-bold">Zyra Digital</span>
            </div>
            <p className="text-xs text-gray-600">Digital Marketing Mastery · ₹10,000 · Lifetime Access</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors duration-200 cursor-pointer">← Agency Services</Link>
            <a href="#curriculum" className="hover:text-white transition-colors duration-200 cursor-pointer">Curriculum</a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="hover:text-white transition-colors duration-200 cursor-pointer">Enrol</a>
          </div>
          <p className="text-xs text-gray-600">&copy; 2025 Zyra Digital. All rights reserved.</p>
        </div>
      </footer>

      {/* ── STICKY ENROL BAR ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-gray-900 border-t border-gray-800 px-4 py-4 transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="text-white font-bold text-sm">Digital Marketing Mastery by Zyra</div>
            <div className="text-gray-400 text-xs">5 modules · Lifetime access · ₹10,000</div>
          </div>
          <a href="https://wa.me/919999999999?text=Hi%20Zyra%20Digital!%20I%27d%20like%20to%20enrol%20in%20Digital%20Marketing%20Mastery%20for%20%E2%82%B910%2C000" target="_blank" rel="noopener"
            className="flex items-center gap-2 text-gray-900 font-bold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 cursor-pointer w-full sm:w-auto justify-center"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D070)' }}>
            Enrol Now — ₹10,000
          </a>
        </div>
      </div>

    </div>
  )
}
