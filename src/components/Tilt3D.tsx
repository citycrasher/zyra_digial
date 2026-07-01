'use client'
import { useEffect } from 'react'

export default function Tilt3D() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.card-3d')

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []

    cards.forEach(card => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        const tiltX = y * -10
        const tiltY = x * 10
        card.style.transition = 'transform 0.08s ease'
        card.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) scale(1.01)`
      }
      const onLeave = () => {
        card.style.transition = 'transform 0.5s cubic-bezier(.22,1,.36,1)'
        card.style.transform = ''
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      handlers.push({ el: card, move: onMove, leave: onLeave })
    })

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return null
}
