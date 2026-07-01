export default function Hero() {
  return (
    <section className="gradient-hero hero-grain hero-mesh min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration + animated blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-700 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Trust badge */}
            <div className="hero-line-1 inline-flex items-center gap-2 bg-blue-500/10 border px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ borderColor: 'rgba(201,168,76,0.5)', color: '#F0D070' }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trusted by 50+ Growing Businesses
            </div>

            <h1 className="hero-line-2 font-display t-display font-extrabold text-white leading-tight mb-6">
              Your Business<br />
              <span className="gradient-text">Deserves More</span><br />
              Than Invisible.
            </h1>
            <span className="sr-only">Digital Marketing Agency — Meta Ads, Google Ads, SEO &amp; Web Design</span>

            <p className="hero-line-3 text-blue-100/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Stop burning money on ads that flop and content nobody sees. Zyra Digital turns your online presence into a revenue machine — with proven strategy and zero fluff.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="https://wa.me/919999999999?text=Hi!%20I%20want%20a%20free%20strategy%20call"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                Get Free Strategy Call
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                See Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
            </div>

            {/* Urgency line */}
            <p className="hero-cta text-blue-200/70 text-sm mb-10 flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              We onboard only <strong className="text-white font-semibold">3 new clients per month</strong> — spots are limited.
            </p>

            {/* Social proof strip */}
            <div className="hero-stats flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-extrabold text-white stat-number">50+</div>
                <div className="text-blue-300 text-sm">Clients Grown</div>
              </div>
              <div className="w-px bg-white/40 self-stretch"></div>
              <div>
                <div className="text-3xl font-extrabold text-white stat-number">3.8x</div>
                <div className="text-blue-300 text-sm">Avg. ROAS</div>
              </div>
              <div className="w-px bg-white/40 self-stretch"></div>
              <div>
                <div className="text-3xl font-extrabold text-white stat-number">₹2Cr+</div>
                <div className="text-blue-300 text-sm">Ad Spend Managed</div>
              </div>
            </div>
          </div>

          {/* Hero right: bento mini-grid */}
          <div className="hero-cards hidden md:block">
            <div className="pg-grid" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto' }}>
              {/* Big stat card — spans 2 cols */}
              <div className="card card-3d card-featured p-7 col-span-2 cursor-default">
                <div className="bento-content flex items-center justify-between gap-6">
                  <div>
                    <div className="text-4xl font-extrabold text-white mb-1">₹4.2L/mo</div>
                    <div className="text-blue-300 text-sm font-medium">Revenue generated for a D2C client</div>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                        +425% in 90 days
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="w-16 h-16 bg-brand/30 rounded-2xl flex items-center justify-center border border-brand/40">
                      <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROAS card */}
              <div className="card card-3d card-dark p-6 cursor-default">
                <div className="bento-content">
                  <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                  </div>
                  <div className="text-3xl font-extrabold text-white">3.8x</div>
                  <div className="text-blue-300/70 text-sm mt-1">Avg. ROAS</div>
                </div>
              </div>

              {/* Retention card */}
              <div className="card card-3d card-dark p-6 cursor-default">
                <div className="bento-content">
                  <div className="w-10 h-10 bg-green-500/15 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div className="text-3xl font-extrabold text-white">94%</div>
                  <div className="text-blue-300/70 text-sm mt-1">Client retention</div>
                </div>
              </div>

              {/* Trust pill — spans 2 cols */}
              <div className="card card-dark p-4 cursor-default col-span-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
                    <span className="text-white/80 text-sm font-medium">50+ businesses growing with Zyra Digital</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-brand-navy border-2 border-brand flex items-center justify-center text-white text-xs font-bold">R</div>
                    <div className="w-7 h-7 rounded-full bg-purple-700 border-2 border-brand flex items-center justify-center text-white text-xs font-bold">P</div>
                    <div className="w-7 h-7 rounded-full bg-teal-700 border-2 border-brand flex items-center justify-center text-white text-xs font-bold">A</div>
                    <div className="w-7 h-7 rounded-full bg-brand border-2 border-brand flex items-center justify-center text-white text-xs font-bold">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
