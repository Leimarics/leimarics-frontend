import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'About Us - Leimarics',
  description: 'Learn about Leimarics: Strength, Vision, and Wisdom. We architect world-class digital solutions for global brands.',
}

export default function AboutPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* About Header Section */}
      <section className="pt-32 pb-20 bg-brand-bg-secondary border-b border-brand-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-brand-text">
              About Leimarics
            </h1>
            <p className="text-body-lg">
              For What&apos;s Next. Where Ambition Meets Execution.
            </p>
          </div>
        </div>
      </section>
      
      <About />
      <Contact />
    </div>
  )
}