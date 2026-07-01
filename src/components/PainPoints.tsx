export default function PainPoints() {
  return (
    <section className="py-16 dark-section relative overflow-hidden">
      {/* subtle red glow top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.07) 0%, transparent 70%)' }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="section-label inline-block bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-full mb-4">Sound Familiar?</span>
          <h2 className="font-display t-heading font-bold text-white mb-4">
            The Struggle Is <span className="text-red-400">Real</span>
          </h2>
          <p className="text-blue-200/75 text-lg max-w-2xl mx-auto">
            Every business owner we talk to shares the same frustrations. You&apos;re not alone — and there&apos;s a fix.
          </p>
        </div>

        {/* Bento grid: 4 cols on lg, 2 on sm */}
        <div className="pg-grid pg-grid-4">

          {/* Pain 1 — featured 2×2 (top-left) */}
          <div className="reveal delay-1 card card-3d card-accent p-8 cursor-default pg-span-2">
            <div className="bento-content h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(239,68,68,0.15)' }}>
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-bold text-white text-xl mb-3">&ldquo;I&apos;m spending on ads but getting nothing back&rdquo;</h3>
                <p className="text-blue-200/80 leading-relaxed">You&apos;ve tried Meta and Google ads, spent thousands, and have almost nothing to show for it. The agency just kept billing while your budget bled out.</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-red-400 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>
                Wasted ad spend
              </div>
            </div>
          </div>

          {/* Pain 2 */}
          <div className="reveal delay-2 card card-3d card-accent p-6 cursor-default">
            <div className="bento-content">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">&ldquo;No idea if my marketing is working&rdquo;</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed">Reports full of vanity metrics. Likes, reach — but sales aren&apos;t moving.</p>
            </div>
          </div>

          {/* Pain 3 */}
          <div className="reveal delay-3 card card-3d card-accent p-6 cursor-default">
            <div className="bento-content">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">&ldquo;Website outdated, doesn&apos;t convert&rdquo;</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed">People land and leave in seconds. No trust signals, no clear message.</p>
            </div>
          </div>

          {/* Pain 4 */}
          <div className="reveal delay-1 card card-3d card-accent p-6 cursor-default">
            <div className="bento-content">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">&ldquo;Competitors everywhere, I&apos;m invisible&rdquo;</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed">They&apos;re on Google, Instagram, YouTube — you&apos;re relying on word-of-mouth.</p>
            </div>
          </div>

          {/* Pain 5 */}
          <div className="reveal delay-2 card card-3d card-accent p-6 cursor-default">
            <div className="bento-content">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">&ldquo;Too busy to manage marketing&rdquo;</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed">You need a team that handles it all while you focus on growth.</p>
            </div>
          </div>

          {/* Pain 6 — 2×1 wide */}
          <div className="reveal delay-3 card card-3d card-accent p-6 cursor-default pg-span-2">
            <div className="bento-content flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">&ldquo;Past agencies overpromised and underdelivered&rdquo;</h3>
                <p className="text-blue-200/75 text-sm">Big promises, no results, no communication. We get it — and we operate differently.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Transition bridge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bridge-dark rounded-2xl px-8 py-5">
            <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <p className="text-white font-semibold text-lg">There&apos;s a better way — and it starts with Zyra Digital.</p>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20fix%20my%20marketing%20with%20Zyra%20Digital"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold text-base px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
              Get Free Strategy Call
            </a>
            <p className="text-blue-300/50 text-sm mt-3">No commitment. 30-minute call. Real answers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
