'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    revealEls.forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.bottom < 0) {
        el.classList.add('visible')
      } else {
        obs.observe(el)
      }
    })
    return () => obs.disconnect()
  }, [])

  return null
}
