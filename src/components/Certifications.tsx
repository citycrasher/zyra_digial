'use client'

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#1C0D34', letterSpacing: '0.15em' }}>Certified &amp; Trusted Expertise</p>
          <h2 className="font-display font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)' }}>Why Businesses Trust Zyra Digital</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Certified, proven, and committed — these aren&apos;t just badges, they&apos;re promises we keep every day.</p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="reveal cert-grid" style={{ display: 'grid', gap: '20px' }}>
          {/* Google Ads */}
          <div className="cert-card cursor-pointer" style={{ border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', transition: 'border-color 0.2s,box-shadow 0.2s,transform 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#DDB5F4'; el.style.boxShadow = '0 12px 40px rgba(28,13,52,0.1)'; el.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#e5e7eb'; el.style.boxShadow = ''; el.style.transform = '' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#f0f4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px' }} aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>Google Ads</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#1C0D34', background: '#f0f4ff', padding: '3px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '8px' }}>Certified Partner</div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>Verified expertise in Search, Display &amp; Shopping campaigns for measurable ROI.</p>
            </div>
          </div>

          {/* Meta Blueprint */}
          <div className="cert-card cursor-pointer" style={{ border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', transition: 'border-color 0.2s,box-shadow 0.2s,transform 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#DDB5F4'; el.style.boxShadow = '0 12px 40px rgba(28,13,52,0.1)'; el.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#e5e7eb'; el.style.boxShadow = ''; el.style.transform = '' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px' }} fill="#1877F2" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>Meta Blueprint</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#1877F2', background: '#e8f0fe', padding: '3px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '8px' }}>Certified Advertiser</div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>Qualified in advanced Facebook &amp; Instagram ad strategies for lead gen and e-commerce.</p>
            </div>
          </div>

          {/* Years in Business */}
          <div className="cert-card cursor-pointer" style={{ border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', transition: 'border-color 0.2s,box-shadow 0.2s,transform 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#DDB5F4'; el.style.boxShadow = '0 12px 40px rgba(28,13,52,0.1)'; el.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#e5e7eb'; el.style.boxShadow = ''; el.style.transform = '' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#1C0D34', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#DDB5F4', fontWeight: 900, fontSize: '18px' }}>4+</span>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>Years in Business</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#7c3aed', background: '#f5f3ff', padding: '3px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '8px' }}>Consistently Delivering</div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>4+ years of helping brands grow across India — from early-stage startups to established businesses.</p>
            </div>
          </div>
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="reveal delay-2 cert-grid-2" style={{ display: 'grid', gap: '20px', maxWidth: '760px', margin: '20px auto 0' }}>
          {/* Retention Rate */}
          <div className="cert-card cursor-pointer" style={{ border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', transition: 'border-color 0.2s,box-shadow 0.2s,transform 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#DDB5F4'; el.style.boxShadow = '0 12px 40px rgba(28,13,52,0.1)'; el.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#e5e7eb'; el.style.boxShadow = ''; el.style.transform = '' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg style={{ width: '30px', height: '30px', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>94% Retention Rate</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#16a34a', background: '#dcfce7', padding: '3px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '8px' }}>Clients Stay Because It Works</div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>9 out of 10 clients renew every month. The results speak, so we don&apos;t have to push for renewals.</p>
            </div>
          </div>

          {/* No Lock-in */}
          <div className="cert-card cursor-pointer" style={{ border: '1.5px solid #e5e7eb', borderRadius: '20px', padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', transition: 'border-color 0.2s,box-shadow 0.2s,transform 0.2s' }} onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = '#DDB5F4'; el.style.boxShadow = '0 12px 40px rgba(28,13,52,0.1)'; el.style.transform = 'translateY(-3px)' }} onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = '#e5e7eb'; el.style.boxShadow = ''; el.style.transform = '' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg style={{ width: '30px', height: '30px', color: '#9333ea' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>No Lock-in Contracts</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#9333ea', background: '#f3e8ff', padding: '3px 10px', borderRadius: '999px', display: 'inline-block', marginBottom: '8px' }}>Month-to-Month · Cancel Anytime</div>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6' }}>We earn your trust every single month. No 6-month contracts, no hidden exit fees — ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
