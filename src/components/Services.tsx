const CheckIcon = ({ size = 4 }: { size?: number }) => (
  <svg className={`w-${size} h-${size} text-green-400 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
  </svg>
)

export default function Services() {
  return (
    <section id="services" className="py-16 dark-section-mid relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="section-label inline-block bg-brand/10 border border-brand/25 text-blue-400 px-4 py-2 rounded-full mb-4">What We Do</span>
          <h2 className="font-display t-heading font-bold text-white mb-4">
            Every Tool You Need to <span className="text-blue-400">Dominate Online</span>
          </h2>
          <p className="text-blue-200/75 text-lg max-w-2xl mx-auto">
            From paid ads to organic growth, we handle every channel — so your brand is impossible to ignore.
          </p>
        </div>

        {/* Bento: 4 cols on lg, 2 on sm */}
        <div className="pg-grid pg-grid-4">

          {/* Service 1 — featured 2×2 */}
          <div className="reveal delay-1 card card-3d card-featured p-8 cursor-default pg-span-2">
            <div className="bento-content h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(37,99,235,0.2)' }}>
                  <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <h3 className="font-bold text-2xl text-white mb-3">Meta Ads (Facebook &amp; Instagram)</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed mb-6">High-ROAS campaigns built around your audience&apos;s behavior. We test, optimize, and scale what works — fast.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-blue-200/70"><CheckIcon />Custom audience targeting</li>
                  <li className="flex items-center gap-2 text-sm text-blue-200/70"><CheckIcon />Creative design &amp; copywriting</li>
                  <li className="flex items-center gap-2 text-sm text-blue-200/70"><CheckIcon />Weekly performance reports</li>
                </ul>
              </div>
              <div className="mt-6 text-blue-400 text-sm font-semibold flex items-center gap-2">
                <span>Avg. 3.8x ROAS for clients</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="reveal delay-2 card card-3d card-dark p-7 cursor-default">
            <div className="bento-content">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(37,99,235,0.15)' }}>
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Google Ads</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-4">Intent-based targeting that drives ready-to-buy leads the moment they search.</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Keyword research &amp; bidding</li>
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Retargeting campaigns</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="reveal delay-3 card card-3d card-dark p-7 cursor-default">
            <div className="bento-content">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(37,99,235,0.15)' }}>
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>
              </div>
              <h3 className="font-bold text-lg text-white mb-2">SEO &amp; Content</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-4">Rank higher, build authority, attract organic traffic that converts.</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Technical SEO audit</li>
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Link building strategy</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="reveal delay-4 card card-3d card-dark p-7 cursor-default">
            <div className="bento-content">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(37,99,235,0.15)' }}>
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Social Media</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-4">Consistent content that builds community and keeps your brand top-of-mind.</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Reels &amp; graphic design</li>
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Community engagement</li>
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div className="reveal delay-5 card card-3d card-dark p-7 cursor-default">
            <div className="bento-content">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(37,99,235,0.15)' }}>
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Web Design</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-4">Sites that turn visitors into leads — built for speed and conversion.</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />Mobile-first &amp; fast</li>
                <li className="flex items-center gap-2 text-xs text-blue-200/80"><CheckIcon size={3} />CRO &amp; conversion focus</li>
              </ul>
            </div>
          </div>

          {/* Service 6 — Full-Stack featured 2×1 */}
          <div className="card card-3d card-featured p-8 cursor-default pg-span-2">
            <div className="bento-content flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(37,99,235,0.3)' }}>
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Full-Stack Digital Growth</h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">Let us handle strategy, ads, content, social &amp; website — while you focus on your product.</p>
              </div>
              <a
                href="https://wa.me/919999999999?text=I'm%20interested%20in%20the%20full-stack%20growth%20package"
                target="_blank"
                rel="noopener"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
              >
                Get Custom Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
