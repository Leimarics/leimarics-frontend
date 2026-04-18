'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Search, FileText, Code, Rocket, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience to create the perfect strategy.',
    duration: '1-2 days',
  },
  {
    icon: FileText,
    title: 'Proposal',
    description: 'Receive a detailed project proposal with timeline, pricing, and deliverables.',
    duration: '1 day',
  },
  {
    icon: Code,
    title: 'Design & Development',
    description: 'We create your website with regular updates and opportunities for feedback.',
    duration: '1-3 weeks',
  },
  {
    icon: Rocket,
    title: 'Launch & Training',
    description: 'Your website goes live! We provide training so you can manage it confidently.',
    duration: '1 day',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing support and maintenance to keep your website running smoothly.',
    duration: 'Ongoing',
  }
]

export default function Process() {
  return (
    <section id="process" className="section bg-brand-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Our Process</Badge>
          <h2 className="heading-section">
            How We Work
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            A simple, transparent process designed to deliver exceptional results. 
            Here is what you can expect when working with Leimarics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-brand-border to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative flex-shrink-0">
                  {/* Standardized Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shadow-sm">
                    <step.icon className="w-8 h-8" />
                  </div>
                  {/* Number Bubble */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-bg border border-brand-border text-brand-accent flex items-center justify-center text-sm font-bold shadow-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 bg-brand-bg-secondary border border-brand-border rounded-2xl p-8 shadow-sm hover:border-brand-accent/50 transition-colors">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-brand-text">{step.title}</h3>
                    <Badge variant="outline">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-brand-text-muted leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-brand-bg-secondary border border-brand-border rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-brand-text-muted mb-6 max-w-2xl">
              <span className="font-bold text-brand-text">Ready to get started?</span> The first step is always free. 
              Let us discuss your project and see how we can help.
            </p>
            <Link href="#contact" tabIndex={-1}>
              <Button variant="primary" size="lg">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}