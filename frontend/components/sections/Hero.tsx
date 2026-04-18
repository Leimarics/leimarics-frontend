'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
      
      {/* Animated Background Elements - Updated to Signal Teal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Top Badge - Restored using your Badge component */}
            <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-bg-secondary border border-brand-border mb-8 shadow-sm text-brand-text hover:bg-brand-bg-secondary">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span className="text-sm font-medium font-mono">For What&apos;s Next</span>
            </Badge>

            {/* Headline - Restored with new typography */}
            <h1 className="heading-hero mb-8">
              Where Ambition Meets{' '}
              <span className="block mt-2 text-gradient">
                Execution
              </span>
            </h1>

            {/* Subheadline - Claude's DevOps Messaging */}
            <p className="text-body-lg mb-12 max-w-3xl mx-auto">
              We don&apos;t just build websites. We engineer scalable digital infrastructure
              — backed by the same DevOps practices that power enterprise-grade production systems.
            </p>

            {/* CTA Buttons - Restored using your Button component */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link href="#contact" tabIndex={-1}>
                <Button className="btn-primary w-full sm:w-auto group flex items-center justify-center gap-2 border-0">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio" tabIndex={-1}>
                <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Trust Indicators - Adapted to dark/light mode */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-brand-border pt-12">
              {[
                { icon: CheckCircle, label: '50+ Projects Delivered' },
                { icon: CheckCircle, label: 'Global Standards' },
                { icon: CheckCircle, label: '98% Client Satisfaction' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 text-brand-text-muted"
                >
                  <item.icon className="w-5 h-5 text-brand-accent" />
                  <span className="font-medium text-sm md:text-base text-brand-text">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Restored and adapted to dark/light mode */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-brand-border rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-text-muted rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}