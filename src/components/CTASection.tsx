export default function CTASection() {
  return (
    <section className="py-16 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-700 rounded-full opacity-10 blur-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Limited spots available this month
        </div>
        <h2 className="font-display t-heading font-extrabold text-white mb-6">
          Ready to <span className="gradient-text">Elevate</span><br />
          Your Presence?
        </h2>
        <p className="text-blue-100/80 text-xl mb-10 max-w-2xl mx-auto">
          Get a free strategy audit, a custom growth roadmap, and find out exactly how we&apos;d grow your business — no pitch, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20want%20my%20free%20growth%20audit%20from%20Zyra%20Digital"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            Get Free Strategy Call
          </a>
        </div>
        <p className="text-blue-300/60 text-sm mt-6">No credit card. No commitment. Just clarity.</p>
        {/* Risk reversal badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            No lock-in contracts
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            Dedicated WhatsApp support
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Weekly performance reports
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            30-day KPI review guarantee
          </div>
        </div>
      </div>
    </section>
  )
}
