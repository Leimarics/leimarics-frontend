import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="bg-brand-bg min-h-screen flex flex-col">
      <Hero />
      <Services />
      {/* Show only 3 projects on home page with "View All" button */}
      <Portfolio limit={3} showViewAll={true} />
      <About />
      <Process />
      <Testimonials limit={3} />
      <Newsletter />  
      <FAQ />
      <Contact />
    </div>
  )
}