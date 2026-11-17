export default function About() {
  const credentials = [
    { icon: <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>, title: 'Google Ads Certified', sub: 'Search & Display' },
    { icon: <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>, title: 'Meta Blueprint', sub: 'Certified Advertiser' },
    { icon: <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, title: '50+ Clients Served', sub: 'Across 8 industries' },
    { icon: <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, title: 'India & International', sub: 'UAE, US, UK clients' },
  ]

  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Founder visual */}
          <div className="reveal-left flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl relative overflow-hidden" style={{ background: '#0F172A' }}>
                {/* Founder photo */}
                <img
                  src="/images/founder.webp"
                  alt="Founder & CEO of Zyra Digital"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                {/* Bottom overlay with name/badge */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 16px 16px', background: 'linear-gradient(to top,rgba(15,23,42,0.92) 0%,transparent 100%)' }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', lineHeight: 1.3 }}>Founder &amp; CEO</div>
                  <div style={{ color: 'rgba(147,197,253,0.8)', fontSize: '12px', marginTop: '2px', marginBottom: '8px' }}>Zyra Digital</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, padding: '5px 10px', borderRadius: '999px', background: 'rgba(201,168,76,0.2)', color: '#F0D070', border: '1px solid rgba(201,168,76,0.35)' }}>
                    <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    Google &amp; Meta Certified
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold">
                Founder &amp; CEO
              </div>
              {/* Years badge */}
              <div className="absolute -top-4 -left-4 bg-white border-2 border-brand-100 text-brand-navy px-3 py-2 rounded-xl shadow-md text-xs font-bold text-center">
                <div className="text-lg font-extrabold text-brand">4+</div>
                Years in<br />Marketing
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="reveal-right">
            <span className="section-label inline-block bg-brand-50 text-brand px-4 py-2 rounded-full mb-6">The Team Behind Your Growth</span>
            <h2 className="font-display t-heading font-bold text-gray-900 mb-4">
              Real People. <span className="text-brand">Real Accountability.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Zyra Digital was founded with one mission — to give small businesses and entrepreneurs access to the same quality of digital marketing that big brands pay agencies lakhs for.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We&apos;ve managed over ₹2Cr in ad spend, run campaigns for 50+ businesses across India and abroad, and built a team that treats your money like it&apos;s our own. No juniors running your ads. No outsourcing. Just a dedicated team that shows up every day.
            </p>
            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3 premium-card rounded-xl p-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{c.title}</div>
                    <div className="text-gray-500 text-xs">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              See Client Results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
