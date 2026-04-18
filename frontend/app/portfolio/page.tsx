import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Our Portfolio - Leimarics',
  description: 'Explore our portfolio of successful web development projects across different industries.',
}

export default function PortfolioPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Portfolio Header Section */}
      <div className="pt-32 pb-20 bg-brand-bg-secondary border-b border-brand-border">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-6 text-brand-text">Our Work</h1>
          <p className="text-body-lg max-w-3xl mx-auto">
            Explore our portfolio of successful projects. Each website is crafted 
            with attention to detail and optimized for results.
          </p>
        </div>
      </div>
      
      {/* Show ALL projects (no limit) */}
      <Portfolio />
      <Testimonials limit={3} />
      <Contact />
    </div>
  )
}