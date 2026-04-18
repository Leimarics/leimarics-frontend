'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Newsletter state 
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterLoading(true)
    setNewsletterError('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      })

      const data = await response.json()

      if (data.success) {
        setNewsletterSuccess(true)
        setNewsletterEmail('')
        setTimeout(() => setNewsletterSuccess(false), 5000)
      } else {
        setNewsletterError(data.error || 'Failed to subscribe')
      }
    } catch (err) {
      setNewsletterError('Network error')
    } finally {
      setNewsletterLoading(false)
    }
  }

  // Social media links
  const socialLinks = {
    facebook: 'https://www.facebook.com/leimarics',
    twitter: 'https://www.twitter.com/leimarics',
    instagram: 'https://www.instagram.com/leimarics',
    linkedin: 'https://www.linkedin.com/company/leimarics',
  }

  return (
    <footer className="bg-brand-bg-secondary border-t border-brand-border text-brand-text">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="mb-6">
              <Logo variant="wordmark" className="h-8" />
            </div>
            <p className="text-brand-text-muted mb-4 leading-relaxed font-mono text-sm">
              For What&apos;s Next.
            </p>
            <p className="text-brand-text-muted mb-6 leading-relaxed text-sm">
              Where Ambition Meets Execution. We architect world-class digital solutions for brands that are ready to lead.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-text">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-brand-text-muted hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-brand-text-muted hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-brand-text-muted hover:text-brand-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-brand-text-muted hover:text-brand-accent transition-colors">About</Link></li>
              <li><Link href="/#contact" className="text-brand-text-muted hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-text">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/website-development" className="text-brand-text-muted hover:text-brand-accent transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-brand-text-muted hover:text-brand-accent transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-brand-text-muted hover:text-brand-accent transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-brand-text-muted hover:text-brand-accent transition-colors">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-brand-text-muted hover:text-brand-accent transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-text">Contact Us</h4>
            <ul className="space-y-4 text-brand-text-muted">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+917499216988" className="hover:text-brand-accent transition-colors">
                    +91 7499216988
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contact@leimarics.com" className="hover:text-brand-accent transition-colors break-all">
                    contact@leimarics.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>Seraulim, Goa 403708, India</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border mt-12 pt-8 text-center text-brand-text-muted">
          <p>&copy; {currentYear} Leimarics. All rights reserved.</p>
          <p className="mt-2 text-sm font-mono">For What&apos;s Next. | Where Ambition Meets Execution.</p>
        </div>
      </div>
    </footer>
  )
}