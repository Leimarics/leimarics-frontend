'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  sys: { id: string; createdAt: string }
  fields: {
    clientName: string
    clientRole: string
    clientCompany: string
    rating: number
    testimonialText: string
  }
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  limit?: number
}

export default function Testimonials({ testimonials = [], limit }: TestimonialsProps) {
  const mockTestimonials: Testimonial[] = [
    {
      sys: { id: '1', createdAt: '2024-01-01' },
      fields: {
        clientName: 'Priya Reddy',
        clientRole: 'Owner',
        clientCompany: 'Spice Garden Restaurant',
        rating: 5,
        testimonialText: "Working with Leimarics was a game-changer for our restaurant. Our online bookings increased by 40% within the first month. The website is beautiful, fast, and exactly what we needed!"
      }
    },
    {
      sys: { id: '2', createdAt: '2024-01-02' },
      fields: {
        clientName: 'Arun Sharma',
        clientRole: 'CEO',
        clientCompany: 'Coastal Adventures Tours',
        rating: 5,
        testimonialText: "Professional, responsive, and delivered exactly what was promised. Our new website has helped us attract more customers and stand out from competitors. Highly recommended!"
      }
    },
    {
      sys: { id: '3', createdAt: '2024-01-03' },
      fields: {
        clientName: 'Maria Silva',
        clientRole: 'Manager',
        clientCompany: 'Sunset Beach Resort',
        rating: 5,
        testimonialText: "The team understood our vision perfectly and delivered a stunning website that our guests love. The training session made it easy for us to manage updates ourselves. Worth every rupee!"
      }
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : mockTestimonials
  const limitedTestimonials = limit ? displayTestimonials.slice(0, limit) : displayTestimonials

  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase()

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-brand-accent text-brand-accent' : 'fill-brand-border text-brand-border'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section bg-brand-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="heading-section">What Our Clients Say</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with Leimarics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full relative flex flex-col">
                <div className="absolute top-8 right-8 opacity-20">
                  <Quote className="w-12 h-12 text-brand-text-muted" />
                </div>

                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {renderStars(testimonial.fields.rating)}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-grow flex flex-col">
                  <p className="text-brand-text leading-relaxed italic relative z-10 flex-grow">
                    &quot;{testimonial.fields.testimonialText}&quot;
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-brand-border mt-auto">
                    <div className="w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-text font-bold text-sm flex-shrink-0">
                      {getInitials(testimonial.fields.clientName)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-brand-text truncate">
                        {testimonial.fields.clientName}
                      </h4>
                      <p className="text-xs text-brand-text-muted truncate">
                        {testimonial.fields.clientRole}
                      </p>
                      <p className="text-xs text-brand-text-muted truncate">
                        {testimonial.fields.clientCompany}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 px-8 py-6 bg-brand-bg-secondary border border-brand-border rounded-2xl shadow-sm">
            <div>
              <div className="text-3xl font-bold font-display text-brand-text">50+</div>
              <div className="text-sm text-brand-text-muted">Happy Clients</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-border"></div>
            <div>
              <div className="text-3xl font-bold font-display text-brand-text">98%</div>
              <div className="text-sm text-brand-text-muted">Satisfaction Rate</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-brand-border"></div>
            <div>
              <div className="text-3xl font-bold font-display text-brand-text">4.9/5</div>
              <div className="text-sm text-brand-text-muted">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}