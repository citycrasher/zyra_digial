export default function LogoStrip() {
  const ltr = [5,4,1,14,10,3,12,8,13,7,11,6,15,9,2]
  const rtl = [2,9,15,6,11,7,13,8,12,3,10,14,1,4,5]

  return (
    <section className="py-14 bg-white border-y border-gray-100" aria-label="Trusted by businesses across industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">Trusted by growing businesses across industries</p>
        <div className="overflow-hidden" aria-hidden="true">
          <div className="marquee-track">
            {[...ltr, ...ltr].map((n, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-28 px-6">
                <img src={`/images/clients/image${n}.png`} alt="Client logo" className="w-auto object-contain" style={{ height: n === 15 ? '64px' : '80px', maxWidth: n === 15 ? '200px' : '180px' }} />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-4" aria-hidden="true">
          <div className="marquee-track-rtl">
            {[...rtl, ...rtl].map((n, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-28 px-6">
                <img src={`/images/clients/image${n}.png`} alt="Client logo" className="w-auto object-contain" style={{ height: n === 15 ? '64px' : '80px', maxWidth: n === 15 ? '200px' : '180px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
