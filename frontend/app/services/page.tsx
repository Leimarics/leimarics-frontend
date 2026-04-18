import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Our Services - Leimarics',
  description: 'Professional web development services including website design, e-commerce, and maintenance.',
}

export default function ServicesPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Services Header Section */}
      <div className="pt-32 pb-20 bg-brand-bg-secondary border-b border-brand-border">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-6 text-brand-text">Our Services</h1>
          <p className="text-body-lg max-w-3xl mx-auto">
            From simple websites to complex e-commerce platforms, we offer 
            comprehensive web development services tailored to your needs.
          </p>
        </div>
      </div>
      
      {/* All your original sections, fully upgraded! */}
      <Services />
      <Process />
      <Testimonials limit={3} />
      <FAQ />
      <Contact />
    </div>
  )
}