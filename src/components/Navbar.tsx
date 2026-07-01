'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4${scrolled ? ' nav-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="Zyra Digital Home">
          <div className="flex items-center">
            <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 4L18 4L2 20H18" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 4H36C40.4183 4 44 7.58172 44 12V12C44 16.4183 40.4183 20 36 20H24V4Z" fill="#1E2A4A"/>
              <path d="M28 10V14M32 8V16M36 11V13" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
              <path d="M30 14L38 8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="ml-2">
              <div className="text-lg font-bold leading-none">
                <span className="text-brand">zyra</span>{' '}
                <span style={{ color: '#FFFFFF' }}>digital</span>
              </div>
              <div className="text-xs tracking-widest" style={{ color: 'rgba(147,197,253,0.7)' }}>Elevate Your Presence</div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-white hover:text-blue-300 transition-colors duration-200">Services</a>
          <a href="#results" className="text-sm font-medium text-white hover:text-blue-300 transition-colors duration-200">Results</a>
          <a href="#process" className="text-sm font-medium text-white hover:text-blue-300 transition-colors duration-200">Process</a>
          <a href="#testimonials" className="text-sm font-medium text-white hover:text-blue-300 transition-colors duration-200">Testimonials</a>
          <Link href="/course" className="text-sm font-bold px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer" style={{ background: 'rgba(201,168,76,0.15)', color: '#F0D070', border: '1px solid rgba(201,168,76,0.35)' }}>Course</Link>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/919999999999?text=Hi!%20I%20want%20a%20free%20audit"
          target="_blank"
          rel="noopener"
          className="hidden sm:flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Get Free Strategy Call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-white"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-4 py-6" style={{ background: 'rgba(7,16,31,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium text-base py-2 border-b border-white/[0.08]">Services</a>
            <a href="#results" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium text-base py-2 border-b border-white/[0.08]">Results</a>
            <a href="#process" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium text-base py-2 border-b border-white/[0.08]">Process</a>
            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-white/80 font-medium text-base py-2">Testimonials</a>
            <a href="https://wa.me/919999999999" className="mt-2 bg-brand hover:bg-brand-dark text-white font-semibold text-center py-3 rounded-full">Chat on WhatsApp</a>
          </div>
        </div>
      )}
    </nav>
  )
}
