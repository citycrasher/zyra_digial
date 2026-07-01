'use client'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Zyra%20Digital%2C%20I%27d%20like%20to%20grow%20my%20business!"
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-brand hover:bg-brand-dark text-white px-5 py-3.5 rounded-full shadow-2xl floating-wa cursor-pointer transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-blue-400"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.534 5.862L.057 23.571a.75.75 0 00.918.919l5.85-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-5.031-1.4l-.36-.216-3.732.961.991-3.632-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
      </svg>
      <span className="font-semibold text-sm hidden sm:block">Chat With Us</span>
    </a>
  )
}
