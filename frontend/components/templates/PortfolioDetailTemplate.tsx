'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, ExternalLink, Calendar, TrendingUp, Clock, Check, Quote } from 'lucide-react'

interface PortfolioDetailProps {
  project: {
    title: string
    category: string
    client: string
    description: string
    challenge: string
    solution: string
    features: string[]
    technologies: string[]
    results: {
      metric: string
      value: string
      icon?: React.ReactNode
    }[]
    images: {
      hero: string
      gallery: string[]
    }
    testimonial?: {
      quote: string
      author: string
      role: string
      company: string
    }
    timeline: string
    liveUrl?: string
  }
}

export default function PortfolioDetailTemplate({ project }: PortfolioDetailProps) {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-64 bg-brand-bg-secondary border-b border-brand-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-brand-accent transition-colors mb-6 group text-sm font-medium"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="mb-6">
              <Badge>{project.category}</Badge>
            </div>
            
            <h1 className="heading-hero mb-6">
              {project.title}
            </h1>
            
            <p className="text-body-lg max-w-3xl mb-10">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm border-t border-brand-border pt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-accent" />
                <span className="text-brand-text-muted">Timeline: <strong className="text-brand-text font-medium">{project.timeline}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-text-muted">Client:</span>
                <span className="text-brand-text font-medium">{project.client}</span>
              </div>
              {project.liveUrl && (
               <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-accent hover:text-brand-accent-hover font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative -mt-48 mb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-brand-border bg-brand-bg-secondary"
          >
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section bg-brand-bg">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">Project Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-brand-bg-secondary border border-brand-border rounded-2xl p-8 text-center shadow-card"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-6 text-brand-accent">
                    {result.icon || <TrendingUp className="w-8 h-8" />}
                  </div>
                  <div className="text-4xl font-bold font-mono text-brand-text mb-2">{result.value}</div>
                  <div className="text-brand-text-muted font-medium">{result.metric}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-sm bg-brand-bg-secondary border-y border-brand-border">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="heading-card text-brand-accent mb-6">The Challenge</h2>
                <p className="text-body leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="heading-card text-brand-accent mb-6">Our Solution</h2>
                <p className="text-body leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-brand-bg">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-section mb-12 text-center">Key Features Implemented</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-brand-bg-secondary border border-brand-border p-6 rounded-xl shadow-sm"
                >
                  <div className="bg-brand-accent/10 p-1.5 rounded-full text-brand-accent flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-brand-text leading-relaxed font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-sm bg-brand-bg-secondary border-y border-brand-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag text-base px-4 py-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.gallery.length > 0 && (
        <section className="section bg-brand-bg">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-section mb-12 text-center">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative h-80 rounded-2xl overflow-hidden shadow-card border border-brand-border group"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-sm bg-brand-bg-secondary border-t border-brand-border">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-bg border border-brand-border rounded-2xl p-12 relative shadow-card"
              >
                <Quote className="w-16 h-16 text-brand-accent/20 absolute top-8 left-8" />
                <div className="relative z-10 pl-8">
                  <p className="text-xl md:text-2xl text-brand-text leading-relaxed mb-8 italic font-serif">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent text-xl font-bold font-display">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-brand-text text-lg font-display">
                        {project.testimonial.author}
                      </div>
                      <div className="text-brand-text-muted text-sm font-medium">
                        {project.testimonial.role}, {project.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-brand-bg border-t border-brand-border">
        <div className="container-custom text-center">
          <h2 className="heading-hero mb-6 text-3xl md:text-4xl">Ready to Start Your Project?</h2>
          <p className="text-body-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Get in touch for a free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact">
              <Button variant="primary" size="lg">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}