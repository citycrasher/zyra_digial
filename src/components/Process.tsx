export default function Process() {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="section-label inline-block bg-brand-50 text-brand px-4 py-2 rounded-full mb-4">Simple Process</span>
          <h2 className="font-display t-heading font-bold text-gray-900 mb-4">
            From Zero to Growth in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">No complicated onboarding. No months of waiting. We move fast.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-0.5 bg-brand-100 z-0" aria-hidden="true"></div>

          {/* Step 1 */}
          <div className="reveal delay-1 relative premium-card rounded-2xl p-8 text-center cursor-default z-10">
            <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold text-blue-300">01</div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Free Audit &amp; Strategy Call</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We analyze your current marketing, competitors, and goals. You get a custom growth roadmap — completely free, no pressure.</p>
            <div className="mt-5 inline-flex items-center gap-2 text-brand text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              30-minute call
            </div>
          </div>

          {/* Step 2 */}
          <div className="reveal delay-3 relative premium-card rounded-2xl p-8 text-center cursor-default z-10">
            <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold text-blue-300">02</div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Custom Plan &amp; Onboarding</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We build your tailored marketing plan — ad creatives, content strategy, SEO roadmap — and get you set up within 7 days.</p>
            <div className="mt-5 inline-flex items-center gap-2 text-brand text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Live in 7 days
            </div>
          </div>

          {/* Step 3 */}
          <div className="reveal delay-5 relative premium-card rounded-2xl p-8 text-center cursor-default z-10">
            <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold text-white">03</div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Launch, Grow &amp; Scale</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We launch, monitor, and optimize every week. You get a dedicated manager, real reports, and a growing business.</p>
            <div className="mt-5 inline-flex items-center gap-2 text-green-600 text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              Ongoing growth
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
