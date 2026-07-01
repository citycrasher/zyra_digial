export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <svg width="40" height="32" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 4L18 4L2 20H18" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 4H36C40.4183 4 44 7.58172 44 12V12C44 16.4183 40.4183 20 36 20H24V4Z" fill="#1E2A4A"/>
                <path d="M28 10V14M32 8V16M36 11V13" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 14L38 8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="ml-2">
                <div className="text-lg font-bold leading-none text-white"><span className="text-brand">zyra</span> digital</div>
                <div className="text-xs tracking-widest text-gray-500">Elevate Your Presence</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-5">We help entrepreneurs and business owners grow their revenue through data-driven digital marketing. Real strategy. Real results.</p>
            <div className="space-y-2 mb-5">
              <a href="mailto:hello@zyradigital.in" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                hello@zyradigital.in
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                India · UAE · UK · US
              </div>
            </div>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
              Chat on WhatsApp
            </a>
            {/* Social media links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Follow Zyra Digital on Instagram" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand flex items-center justify-center transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="Follow Zyra Digital on LinkedIn" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand flex items-center justify-center transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Follow Zyra Digital on Facebook" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand flex items-center justify-center transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener" aria-label="Chat with Zyra Digital on WhatsApp" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-200 cursor-pointer">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer">Meta Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer">Google Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer">SEO &amp; Content</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer">Social Media</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200 cursor-pointer">Web Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#results" className="hover:text-white transition-colors duration-200 cursor-pointer">Results</a></li>
              <li><a href="#process" className="hover:text-white transition-colors duration-200 cursor-pointer">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors duration-200 cursor-pointer">Testimonials</a></li>
              <li><a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="hover:text-white transition-colors duration-200 cursor-pointer">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2025 Zyra Digital. All rights reserved.</p>
          <p className="text-gray-600">Elevate Your Presence</p>
        </div>
      </div>
    </footer>
  )
}
