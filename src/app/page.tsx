import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import EarlySocialProof from '@/components/EarlySocialProof'
import PainPoints from '@/components/PainPoints'
import Services from '@/components/Services'
import Results from '@/components/Results'
import ClientResults from '@/components/ClientResults'
import Partners from '@/components/Partners'
import OldVsZyra from '@/components/OldVsZyra'
import About from '@/components/About'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Certifications from '@/components/Certifications'
import CaseStudies from '@/components/CaseStudies'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Tilt3D from '@/components/Tilt3D'

export default function Home() {
  return (
    <main>
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <hr className="section-divider" />
      <LogoStrip />
      <hr className="section-divider" />
      <EarlySocialProof />
      <PainPoints />
      <hr className="section-divider" />
      <Services />
      <hr className="section-divider" />
      <Results />
      <hr className="section-divider" />
      <ClientResults />
      <Partners />
      <hr className="section-divider" />
      <OldVsZyra />
      <About />
      <hr className="section-divider" />
      <Process />
      <hr className="section-divider" />
      <Testimonials />
      <hr className="section-divider" />
      <Certifications />
      <hr className="section-divider" />
      <CaseStudies />
      <hr className="section-divider" />
      <FAQ />
      <CTASection />
      <Footer />
      <ScrollReveal />
      <Tilt3D />
    </main>
  )
}
