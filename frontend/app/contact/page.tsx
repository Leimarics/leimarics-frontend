import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'

export const metadata = {
  title: 'Contact Us - Leimarics',
  description: 'Get in touch with Leimarics for your web development needs. We reply within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Contact Header Section */}
      <div className="pt-32 pb-20 bg-brand-bg-secondary border-b border-brand-border">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-6 text-brand-text">Get In Touch</h1>
          <p className="text-body-lg max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s talk! Fill out the form below and we&apos;ll 
            get back to you within 24 hours.
          </p>
        </div>
      </div>
      
      {/* Upgraded Sections */}
      <Contact />
      <FAQ />
    </div>
  )
}