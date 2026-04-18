'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Check, ArrowRight } from 'lucide-react'
import Contact from '@/components/sections/Contact'

interface ServiceTemplateProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  benefits: string[]
  pricing: {
    basic: { price: string; features: string[] }
    business: { price: string; features: string[] }
  }
  icon: React.ReactNode
}

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  pricing,
  icon,
}: ServiceTemplateProps) {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-brand-bg-secondary border-b border-brand-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 mb-8 text-brand-accent">
              {icon}
            </div>
            <h1 className="heading-hero mb-6 text-brand-text">{title}</h1>
            <p className="text-body-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
            <Link href="/#contact" tabIndex={-1}>
              <Button variant="primary" size="lg" className="group border-0">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="section bg-brand-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section mb-6">What We Offer</h2>
            <p className="text-body-lg leading-relaxed mb-12">{description}</p>

            <h3 className="font-display font-bold text-2xl text-brand-text mb-6">Key Features</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-brand-accent/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-accent" />
                  </div>
                  <span className="text-brand-text font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-sm bg-brand-bg-secondary border-y border-brand-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12 text-center">Why Choose This Service?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-brand-bg border border-brand-border p-8 rounded-2xl shadow-sm hover:border-brand-accent/30 transition-colors">
                  <Check className="w-8 h-8 text-brand-accent mb-4" />
                  <p className="text-brand-text-muted leading-relaxed font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section (Formerly Pricing) */}
      <section className="section bg-brand-bg">
        <div className="container-custom">
          {/* Changed Title to reflect feature packages rather than pricing */}
          <h2 className="heading-section mb-16 text-center">Service Packages</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Basic Package */}
            <div className="bg-brand-bg-secondary border border-brand-border rounded-2xl p-8 flex flex-col hover:shadow-card-hover transition-shadow">
              <h3 className="font-display font-bold text-2xl text-brand-text mb-4">Basic Package</h3>
              
              {/* PRICING HIDDEN: Uncomment the line below to restore public pricing */}
              {/* <div className="font-mono text-3xl font-bold text-brand-accent mb-8">{pricing.basic.price}</div> */}
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pricing.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-brand-text-muted">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/#contact" tabIndex={-1} className="mt-auto">
                <Button variant="outline" className="w-full hover:border-brand-accent hover:text-brand-accent">
                  Inquire About Basic
                </Button>
              </Link>
            </div>

            {/* Business Package */}
            <div className="bg-brand-bg-secondary border-2 border-brand-accent rounded-2xl p-8 relative flex flex-col shadow-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-brand-accent text-white border-0 shadow-sm px-6 py-1.5">
                  Most Popular
                </Badge>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-brand-text mb-4">Business Package</h3>
              
              {/* PRICING HIDDEN: Uncomment the line below to restore public pricing */}
              {/* <div className="font-mono text-3xl font-bold text-brand-accent mb-8">{pricing.business.price}</div> */}
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pricing.business.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-brand-text">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/#contact" tabIndex={-1} className="mt-auto">
                <Button variant="primary" className="w-full border-0 shadow-md shadow-brand-accent/20">
                  Inquire About Business
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </div>
  )
}