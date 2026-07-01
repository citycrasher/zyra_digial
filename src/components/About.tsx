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
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E2A4A 60%,#1E3A8A 100%)' }}>
                {/* Mesh grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.1) 1px,transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black 40%,transparent 100%)' }}></div>
                {/* Glow blobs */}
                <div className="absolute top-6 right-6 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: '#2563EB' }}></div>
                <div className="absolute bottom-8 left-4 w-24 h-24 rounded-full opacity-15 blur-2xl" style={{ background: '#C9A84C' }}></div>
                {/* Monogram */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-extrabold text-white" style={{ background: 'rgba(37,99,235,0.25)', border: '1px solid rgba(37,99,235,0.4)', letterSpacing: '-0.05em' }}>ZD</div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg leading-tight">Founder &amp; CEO</div>
                    <div className="text-blue-300/70 text-sm mt-1">Zyra Digital</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#F0D070', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
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
