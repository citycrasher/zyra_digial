export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Partner Badges Row */}
        <div className="reveal text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">Certified &amp; Trusted Expertise</p>
          <div className="flex flex-wrap justify-center gap-4">

            {/* Google Ads Partner */}
            <div className="flex items-center gap-3 premium-card rounded-2xl px-6 py-4">
              <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">Google Ads</div>
                <div className="text-gray-500 text-xs">Certified Partner</div>
              </div>
            </div>

            {/* Meta Business Partner */}
            <div className="flex items-center gap-3 premium-card rounded-2xl px-6 py-4">
              <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" fill="#1877F2" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">Meta Blueprint</div>
                <div className="text-gray-500 text-xs">Certified Advertiser</div>
              </div>
            </div>

            {/* Years in Business */}
            <div className="flex items-center gap-3 premium-card rounded-2xl px-6 py-4">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-extrabold text-sm">4+</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">Years in Business</div>
                <div className="text-gray-500 text-xs">Consistently delivering</div>
              </div>
            </div>

            {/* Client Retention */}
            <div className="flex items-center gap-3 premium-card rounded-2xl px-6 py-4">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">94% Retention Rate</div>
                <div className="text-gray-500 text-xs">Clients stay because it works</div>
              </div>
            </div>

            {/* No Lock-in */}
            <div className="flex items-center gap-3 premium-card rounded-2xl px-6 py-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">No Lock-in Contracts</div>
                <div className="text-gray-500 text-xs">Month-to-month, cancel anytime</div>
              </div>
            </div>

          </div>
        </div>

        {/* Case Study Card */}
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full opacity-10 blur-3xl" aria-hidden="true"></div>
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                Case Study — E-Commerce Brand
              </div>
              <h3 className="font-display t-heading font-bold text-white mb-4">
                From ₹80K/month to <span className="gradient-text">₹4.2L/month</span> in 90 Days
              </h3>
              <p className="text-blue-200/80 leading-relaxed mb-6">
                A D2C skincare brand came to us spending ₹80,000/month on Meta Ads with a 1.1x ROAS and zero clarity on what was working. We rebuilt their entire funnel — new creatives, audience segmentation, retargeting, and a landing page rewrite.
              </p>
              <a
                href="https://wa.me/919999999999?text=I%20want%20to%20see%20more%20case%20studies%20from%20Zyra%20Digital"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
              >
                Get Similar Results
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                <div className="text-3xl font-extrabold text-white mb-1">1.1x</div>
                <div className="text-blue-300 text-xs font-medium">ROAS Before</div>
              </div>
              <div className="bg-brand/30 border border-brand/50 rounded-2xl p-5 text-center">
                <div className="text-3xl font-extrabold gradient-text mb-1">4.8x</div>
                <div className="text-blue-300 text-xs font-medium">ROAS After</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                <div className="text-3xl font-extrabold text-white mb-1">₹780</div>
                <div className="text-blue-300 text-xs font-medium">Cost/Lead Before</div>
              </div>
              <div className="bg-brand/30 border border-brand/50 rounded-2xl p-5 text-center">
                <div className="text-3xl font-extrabold gradient-text mb-1">₹165</div>
                <div className="text-blue-300 text-xs font-medium">Cost/Lead After</div>
              </div>
              <div className="col-span-2 bg-green-500/20 border border-green-500/30 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-green-400 mb-1">+425%</div>
                <div className="text-green-300 text-xs font-medium">Revenue Growth in 90 Days</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
