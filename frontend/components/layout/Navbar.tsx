'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Fully restored navigation links
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/#process' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Newsletter', href: '/#newsletter' },
    { name: 'FAQ', href: '/#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-glass border-b border-brand-border bg-brand-bg/80">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Clickable to Home */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            
            {/* NEW: SVG Logo with Theme Support */}
            <Logo variant="wordmark" className="h-8" />

            {/* Option 1: Use actual logo image (Restored as fallback) */}
            {/* <div className="relative w-48 h-12">
              <Image
                src="/Leimarics-log.png"
                alt="Leimarics - For What's Next"
                fill
                className="object-contain"
                priority
              />
            </div> 
            */}

            {/* Option 2: If you don't have logo yet, use styled text (Restored as fallback) */}
            {/* <div className="text-2xl font-bold">
              <span className="text-navy-900">Ser</span>
              <span className="bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">Webz</span>
            </div> 
            */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6 font-sans text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? 'text-brand-accent'
                      : 'text-brand-text hover:text-brand-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 border-l border-brand-border pl-6">
              <ThemeToggle />
              <Link href="/#contact" className="btn-primary py-2 px-4 text-sm">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text hover:text-brand-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-brand-border bg-brand-bg">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-brand-accent'
                        : 'text-brand-text hover:text-brand-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full block text-center"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}