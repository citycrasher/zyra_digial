const Star = () => (
  <svg className="w-4 h-4" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
)

export default function EarlySocialProof() {
  return (
    <section className="py-10 dark-section-mid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl px-8 py-6 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(201,168,76,0.2)' }}>
          <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-lg flex-shrink-0" aria-hidden="true">RK</div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start gap-0.5 mb-2" aria-label="5 stars">
              {[1,2,3,4,5].map(i => <Star key={i} />)}
            </div>
            <p className="text-blue-100/80 text-sm italic">&ldquo;Zyra Digital took our Meta ROAS from <strong className="text-white">1.2x to 4.1x in 6 weeks</strong>. Our lead cost dropped 60%. Best marketing decision we&apos;ve made.&rdquo;</p>
            <p className="text-blue-300/60 text-xs mt-2 font-medium">— Rahul K., E-Commerce Founder · Mumbai</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-xs font-bold flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            4.1x ROAS
          </div>
        </div>
      </div>
    </section>
  )
}
