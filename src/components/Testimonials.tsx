'use client'

const Stars = () => (
  <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="w-4 h-4" style={{ color: '#F59E0B' }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

const QuoteIcon = ({ opacity = '0.4' }: { opacity?: string }) => (
  <svg style={{ width: '36px', height: '28px', color: '#DDB5F4', opacity, marginBottom: '16px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 36 28" aria-hidden="true">
    <path d="M0 28V17.5C0 7.833 5.667 2.167 17 0l1.75 3.5C13.167 5.167 10.167 8.167 9.5 12.5H16V28H0zm20 0V17.5C20 7.833 25.667 2.167 37 0l1.75 3.5C33.167 5.167 30.167 8.167 29.5 12.5H36V28H20z"/>
  </svg>
)

const TrendIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'linear-gradient(135deg,#1C0D34 0%,#0f0820 60%,#1a0b30 100%)', padding: '80px 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#DDB5F4', letterSpacing: '0.15em' }}>★ Client Success Stories ★</span>
          <h2 className="font-display font-extrabold text-white mb-4" style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', lineHeight: '1.15' }}>
            Don&apos;t Take Our Word for It
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>Real clients. Real results. Real growth. Here&apos;s what businesses say after working with Zyra Digital.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="testimonials-grid">

          {/* Card 1 — Rahul K. */}
          <div className="reveal delay-1 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(249,115,22,0.15)', color: '#fb923c', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />ROAS: 1.2x → 4.1x
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;Zyra transformed our Meta ads in just 6 weeks. Lead cost dropped 60%. Best marketing decision we&apos;ve ever made.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>RK</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Rahul K.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>Founder · D2C Skincare · Mumbai</div>
              </div>
            </div>
          </div>

          {/* Card 2 — Priya S. (featured) */}
          <div className="reveal delay-2 cursor-pointer" style={{ background: 'linear-gradient(135deg,rgba(221,181,244,0.12),rgba(221,181,244,0.04))', border: '1px solid rgba(221,181,244,0.5)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 24px 70px rgba(221,181,244,0.15)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(221,181,244,0.08)', pointerEvents: 'none' }} />
            <QuoteIcon opacity="0.7" />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(34,197,94,0.15)', color: '#4ade80', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />CPL: ₹900 → ₹180
            </span>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;Google Ads were burning money before Zyra. After they took over, leads tripled and cost per lead dropped from ₹900 to ₹180. Transparent, accountable, and results-driven team.&rdquo;</p>
            <div style={{ background: 'rgba(221,181,244,0.08)', border: '1px solid rgba(221,181,244,0.2)', borderRadius: '12px', padding: '16px', margin: '16px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: '#DDB5F4', lineHeight: 1 }}>5x</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px' }}>More leads, same budget</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(221,181,244,0.2)' }} />
              <div>
                <div style={{ fontSize: '28px', fontWeight: 900, color: '#4ade80', lineHeight: 1 }}>80%</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px' }}>Cost reduction</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(221,181,244,0.15)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#DDB5F4,#9333ea)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#1C0D34', flexShrink: 0 }}>PS</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Priya S.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>Director · Interior Design Studio · Bangalore</div>
              </div>
            </div>
          </div>

          {/* Card 3 — Arjun M. */}
          <div className="reveal delay-3 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.2)', color: '#a5b4fc', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />Organic traffic +240%
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;Within 3 months we ranked page 1 for 8 keywords. Organic traffic is up 240%. Zyra made SEO simple and profitable.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#9333ea,#c026d3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>AM</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Arjun M.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>CEO · B2B SaaS · Hyderabad</div>
              </div>
            </div>
          </div>

          {/* Card 4 — Neha K. */}
          <div className="reveal delay-4 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(20,184,166,0.15)', color: '#2dd4bf', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />Revenue +180% in 60 days
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;We went from posting randomly to having a full content strategy. Followers grew, but more importantly, our DMs started converting into paying clients.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#0d9488,#0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>NK</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Neha K.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>Founder · Wellness Coach · Delhi</div>
              </div>
            </div>
          </div>

          {/* Card 5 — Vikram N. */}
          <div className="reveal delay-1 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.15)', color: '#f87171', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />Amazon ROAS 28x
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;₹4.37 crore in revenue from Amazon ads — these numbers speak for themselves. Zyra&apos;s Amazon strategy completely transformed how we sell online.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#b91c1c,#c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>VN</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Vikram N.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>Founder · Electronics Brand · Chennai</div>
              </div>
            </div>
          </div>

          {/* Card 6 — Sanjay R. */}
          <div className="reveal delay-2 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(234,179,8,0.15)', color: '#fde047', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />8,010 leads · ₹300 CPL
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;534,000 clicks and 8,010 quality leads from Google Ads. The team at Zyra knows exactly how to squeeze performance out of every rupee we spend.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#b45309,#d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>SR</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Sanjay R.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>Director · Real Estate · Pune</div>
              </div>
            </div>
          </div>

          {/* Card 7 — Meera T. */}
          <div className="reveal delay-3 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.2)', color: '#c4b5fd', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />Website redesign → 3x enquiries
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;They rebuilt our entire website and paired it with a solid SEO strategy. Our enquiries literally tripled in the first two months. Worth every rupee.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#4f46e5,#2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>MT</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Meera T.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>Owner · Jewellery Brand · Ahmedabad</div>
              </div>
            </div>
          </div>

          {/* Card 8 — Kavita P. */}
          <div className="reveal delay-4 cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(221,181,244,0.15)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(221,181,244,0.4)'; el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.borderColor = 'rgba(221,181,244,0.15)'; el.style.boxShadow = '' }}>
            <QuoteIcon />
            <Stars />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(34,197,94,0.15)', color: '#4ade80', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', marginBottom: '14px', width: 'fit-content' }}>
              <TrendIcon />Retained 2+ years
            </span>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.75', flex: 1, fontStyle: 'italic' }}>&ldquo;Two years in and they still feel like part of our in-house team. The monthly reports are detailed, the strategy evolves with our business, and the results keep improving.&rdquo;</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#047857,#065f46)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', color: '#fff', flexShrink: 0 }}>KP</div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>Kavita P.</div>
                <div style={{ color: 'rgba(221,181,244,0.6)', fontSize: '12px' }}>CEO · EdTech Platform · Bengaluru</div>
              </div>
            </div>
          </div>

        </div>

        <div className="reveal text-center mt-14">
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '20px' }}>Join 50+ businesses already growing with Zyra Digital</p>
          <a href="https://wa.me/919999999999?text=Hi!%20I%20want%20a%20free%20strategy%20call" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#DDB5F4', color: '#1C0D34', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '999px', textDecoration: 'none', transition: 'transform 0.2s,box-shadow 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'scale(1.04)'; el.style.boxShadow = '0 10px 40px rgba(221,181,244,0.35)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            Get Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  )
}
