'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How soon can we start seeing results?',
    a: 'Paid ads typically show measurable results within 2–4 weeks. SEO takes 2–3 months to build momentum. Social media engagement improves within the first month. We set clear expectations upfront.',
    borderClass: 'border-gray-100',
  },
  {
    q: "What's the minimum budget for ads?",
    a: 'We recommend a minimum ad spend of ₹15,000–₹20,000/month for meaningful data and results. Our management fee is separate. We\'ll work with your budget and recommend what makes sense for your goals.',
    borderClass: 'border-gray-100',
  },
  {
    q: 'Do you lock clients into long-term contracts?',
    a: 'No long-term lock-ins. We operate on a month-to-month basis. We earn your business every month with results. That said, most of our clients stay with us for 12+ months because it works.',
    borderClass: 'border-gray-100',
  },
  {
    q: 'How do you communicate and report?',
    a: "You'll have a dedicated account manager reachable on WhatsApp. We send weekly performance reports and do a monthly strategy review call. You're never left guessing.",
    borderClass: 'border-gray-100',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes! We work with businesses across India, UAE, US, UK, and Southeast Asia. Digital marketing has no borders — and neither do we.',
    borderClass: 'border-gray-100',
  },
  {
    q: "What if I don't see results?",
    a: "We provide a 30-day progress review against agreed KPIs. If we're not hitting targets, we revise the strategy at no extra charge — and we tell you why, not make excuses. We don't disappear when things get hard. That's our commitment to you.",
    borderClass: 'border-green-100',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="font-display t-heading font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know before we talk.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl overflow-hidden border ${faq.borderClass}`}>
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200${open === i ? ' rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-7 pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
