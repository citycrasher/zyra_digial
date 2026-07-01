export default function OldVsZyra() {
  const oldItems = [
    'Run ads without strategy and hope for the best',
    'Post random content with no plan or brand voice',
    'Get reports full of likes and impressions, no ROI',
    'Agency goes silent after onboarding',
    'Website built once, never optimized again',
  ]
  const zyraItems = [
    'Data-backed strategy with clear KPIs from day one',
    'Consistent brand content planned weeks in advance',
    'Weekly reports showing leads, conversions, and real ROI',
    'Dedicated manager, always reachable on WhatsApp',
    'Ongoing A/B testing and conversion optimization',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <h2 className="font-display t-heading font-bold text-gray-900 mb-4">
            The Old Way vs <span className="text-brand">The Zyra Way</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Old Way */}
          <div className="premium-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </div>
              <h3 className="font-bold text-xl text-gray-700">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {oldItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Zyra Way */}
          <div className="card-light rounded-2xl p-8" style={{ border: '2px solid #2563EB', boxShadow: '0 4px 24px rgba(37,99,235,0.12)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="font-bold text-xl text-brand-navy">The Zyra Way</h3>
            </div>
            <ul className="space-y-4">
              {zyraItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
