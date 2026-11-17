export default function CaseStudies() {
  return (
    <section className="py-16 bg-gray-50" id="casestudies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <span className="section-label inline-block bg-brand-50 text-brand px-4 py-2 rounded-full mb-4">Case Studies</span>
          <h2 className="font-display t-heading font-bold text-gray-900 mb-4">
            Real Businesses. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Here&apos;s what happens when strategy, execution, and accountability come together.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Case Study 1 */}
          <div className="reveal delay-1 bg-brand-navy rounded-3xl p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#DDB5F4' }} aria-hidden="true" />
            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 self-start">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                D2C Brand · Meta Ads
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">₹45 Lakhs+ Revenue With <span className="gradient-text">26.91 ROAS</span></h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-6">Built a full acquisition system through market analysis, creative testing, website optimisation, and scaling winning creatives on Meta Ads.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">26.91x</div>
                  <div className="text-blue-300 text-xs mt-0.5">ROAS</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold gradient-text">6,170</div>
                  <div className="text-blue-300 text-xs mt-0.5">Total Orders</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">₹45.9L</div>
                  <div className="text-blue-300 text-xs mt-0.5">Revenue</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">₹1.7L</div>
                  <div className="text-blue-300 text-xs mt-0.5">Ad Spend</div>
                </div>
              </div>
              <a href="/casestudies" className="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200 cursor-pointer mt-auto self-start">
                Read Full Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="reveal delay-2 bg-brand-navy rounded-3xl p-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#C9A84C' }} aria-hidden="true" />
            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 self-start">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                EdTech Academy · Multi-Channel
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">0 to <span className="gradient-text">₹10 Lakhs+</span> Revenue in 3 Months</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-6">Built a complete multi-channel funnel — Meta Ads, Webinar, LinkedIn, Email &amp; WhatsApp — for a Playwright automation academy launched from scratch.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">53</div>
                  <div className="text-blue-300 text-xs mt-0.5">Enrollments</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold gradient-text">600+</div>
                  <div className="text-blue-300 text-xs mt-0.5">Leads Generated</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">₹100</div>
                  <div className="text-blue-300 text-xs mt-0.5">Avg CPL</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">2K+</div>
                  <div className="text-blue-300 text-xs mt-0.5">LinkedIn Followers</div>
                </div>
              </div>
              <a href="/casestudies" className="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200 cursor-pointer mt-auto self-start">
                Read Full Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="reveal delay-3 bg-brand-navy rounded-3xl p-8 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#DDB5F4' }} aria-hidden="true" />
            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 self-start">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                Women&apos;s Clothing Brand · Meta Ads
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">1 ROAS → <span className="gradient-text">7+ ROAS</span> With Influencer Strategy</h3>
              <p className="text-blue-200/75 text-sm leading-relaxed mb-6">Identified the trust gap, partnered with the right influencers, and used authentic creator content as Meta Ads to achieve 7.14 ROAS in just 1 month.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">7.14x</div>
                  <div className="text-blue-300 text-xs mt-0.5">ROAS Achieved</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold gradient-text">₹14.5L</div>
                  <div className="text-blue-300 text-xs mt-0.5">Purchase Value</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">₹20.66</div>
                  <div className="text-blue-300 text-xs mt-0.5">Cost Per Action</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-extrabold text-white">1 mo</div>
                  <div className="text-blue-300 text-xs mt-0.5">Time to Result</div>
                </div>
              </div>
              <a href="/casestudies" className="inline-flex items-center gap-2 bg-white text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200 cursor-pointer mt-auto self-start">
                Read Full Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="text-center mt-10">
          <a href="/casestudies" className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer">
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
