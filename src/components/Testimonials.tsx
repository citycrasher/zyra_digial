const Stars = () => (
  <div className="flex items-center gap-0.5 mb-3" aria-label="5 out of 5 stars">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="w-4 h-4" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="section-label inline-block bg-brand-50 text-brand px-4 py-2 rounded-full mb-4">Client Success</span>
          <h2 className="font-display t-heading font-bold text-gray-900 mb-4">
            Don&apos;t Take Our Word for It
          </h2>
          <p className="text-gray-500 text-lg">Real clients. Real results. Real growth.</p>
        </div>

        <div className="pg-grid pg-grid-4">

          {/* Testimonial 1 */}
          <div className="reveal delay-1 card card-light p-7 cursor-default flex flex-col">
            <Stars />
            <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              ROAS: 1.2x → 4.1x
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 flex-1 italic">&ldquo;Zyra transformed our Meta ads in just 6 weeks. Lead cost dropped 60%. Best marketing decision we&apos;ve made.&rdquo;</blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-9 h-9 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" aria-hidden="true">RK</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Rahul K.</div>
                <div className="text-gray-400 text-xs">Founder · D2C Skincare · Mumbai</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 — dark featured */}
          <div className="reveal delay-2 card card-3d card-featured p-7 cursor-default flex flex-col">
            <div className="bento-content flex flex-col h-full">
              <Stars />
              <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                CPL: ₹900 → ₹180
              </div>
              <blockquote className="text-blue-100 text-sm leading-relaxed mb-5 flex-1 italic">&ldquo;Google Ads were burning money before Zyra. After they took over, leads tripled and cost per lead dropped from ₹900 to ₹180. Transparent and accountable team.&rdquo;</blockquote>
              <div className="my-4 rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-3xl font-extrabold text-white mb-0.5">5x</div>
                <div className="text-blue-300 text-xs">More leads, same budget</div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">PS</div>
                <div>
                  <div className="font-semibold text-white text-sm">Priya S.</div>
                  <div className="text-blue-300 text-xs">Director · Interior Design Studio · Bangalore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="reveal delay-3 card card-light p-7 cursor-default flex flex-col">
            <Stars />
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              Organic traffic +240%
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 flex-1 italic">&ldquo;Within 3 months we ranked page 1 for 8 keywords. Organic traffic is up 240%. Zyra made SEO simple and profitable.&rdquo;</blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" aria-hidden="true">AM</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Arjun M.</div>
                <div className="text-gray-400 text-xs">CEO · B2B SaaS · Hyderabad</div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="reveal delay-4 card card-light p-7 cursor-default flex flex-col">
            <Stars />
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              Revenue +180% in 60 days
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 flex-1 italic">&ldquo;We went from posting randomly to having a full content strategy. Followers grew, but more importantly, our DMs started converting into paying clients.&rdquo;</blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" aria-hidden="true">NK</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Neha K.</div>
                <div className="text-gray-400 text-xs">Founder · Wellness Coach · Delhi</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
