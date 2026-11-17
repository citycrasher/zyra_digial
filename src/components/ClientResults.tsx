const results = [
  { img: 'image6.png', channel: 'Meta Ads', channelColor: '#1C0D34', stat: '5,918 purchases · ROAS 28.24 · ₹4.37Cr revenue', alt: 'Meta Ads result — 5,918 purchases, ROAS 28.24, ₹4.37Cr revenue' },
  { img: 'image1.png', channel: 'Meta Ads', channelColor: '#1C0D34', stat: 'ROAS 7.14 · ₹14.5L revenue · ₹2.03L spent', alt: 'Meta Ads result — ROAS 7.14, ₹14.5L revenue' },
  { img: 'image2.png', channel: 'Google Ads', channelColor: '#16a34a', stat: '534K clicks · 8,010 leads · ₹300 cost/lead', alt: 'Google Ads result — 534K clicks, 8.01K leads, ₹300 cost/lead' },
  { img: 'image3.png', channel: 'Amazon', channelColor: '#ea580c', stat: '₹10.24L sales · 2,272 orders · TACOS 20.64%', alt: 'Amazon Sales — ₹10.24L sales, 2,272 orders' },
  { img: 'image4.png', channel: 'Meta Ads', channelColor: '#1C0D34', stat: 'ROAS 12.01 · ₹80K revenue · ₹6,675 spent', alt: 'Meta Ads result — ROAS 12.01, ₹80K revenue' },
  { img: 'image5.png', channel: 'Meta Ads', channelColor: '#1C0D34', stat: 'ROAS 6.85 · ₹46,883 revenue · ₹6,847 spent', alt: 'Meta Ads result — ROAS 6.85, ₹46K revenue' },
]

export default function ClientResults() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#1C0D34' }}>Real Numbers. Real Growth.</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Client Results That Speak for Themselves</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">These are real screenshots from real client accounts — no fluff, no made-up numbers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <div key={i} className="reveal rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <img src={`/images/results/${r.img}`} alt={r.alt} className="w-full h-auto object-cover" loading="lazy" />
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: r.channelColor }}>{r.channel}</p>
                <p className="text-sm text-gray-700 font-medium mt-0.5">{r.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
