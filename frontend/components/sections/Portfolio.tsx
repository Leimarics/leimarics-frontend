'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight, TrendingUp, Clock } from 'lucide-react'

const projects = [
  {
    id: 1,
    slug: 'coastal-cafe',
    title: 'Coastal Café Website',
    category: 'Restaurant',
    description: 'Modern restaurant website with online reservations and dynamic menu system.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    client: 'Coastal Café',
    metrics: [
      { label: 'Increased Bookings', value: '+45%', icon: TrendingUp },
      { label: 'Development Time', value: '2 weeks', icon: Clock },
    ],
    badge: '🍽️ Restaurant',
  },
  {
    id: 2,
    slug: 'adventure-tours',
    title: 'Adventure Tours Platform',
    category: 'Travel',
    description: 'Comprehensive tour operator website with booking system and package management.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    client: 'Adventure Tours Co.',
    metrics: [
      { label: 'Increased Inquiries', value: '+120%', icon: TrendingUp },
      { label: 'Development Time', value: '3 weeks', icon: Clock },
    ],
    badge: '✈️ Travel',
  },
  {
    id: 3,
    slug: 'sunset-villa',
    title: 'Sunset Villa Resort',
    category: 'Hotel',
    description: 'Elegant boutique hotel website with direct booking integration and virtual tours.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    client: 'Sunset Villa Resort',
    metrics: [
      { label: 'Direct Bookings', value: '+60%', icon: TrendingUp },
      { label: 'Development Time', value: '3 weeks', icon: Clock },
    ],
    badge: '🏨 Hotel',
  },
  {
    id: 4,
    slug: 'fitzone-gym',
    title: 'FitZone Gym',
    category: 'Fitness',
    description: 'Modern fitness center website with class schedules and membership management.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    client: 'FitZone Gym',
    metrics: [
      { label: 'New Memberships', value: '+85%', icon: TrendingUp },
      { label: 'Development Time', value: '2 weeks', icon: Clock },
    ],
    badge: '💪 Fitness',
  },
  {
    id: 5,
    slug: 'techbazaar',
    title: 'TechBazaar E-Store',
    category: 'E-commerce',
    description: 'Full-featured electronics e-commerce platform with payment gateway and inventory.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    client: 'TechBazaar',
    metrics: [
      { label: 'Online Sales', value: '+200%', icon: TrendingUp },
      { label: 'Development Time', value: '4 weeks', icon: Clock },
    ],
    badge: '🛒 E-commerce',
  },
  {
    id: 6,
    slug: 'homescape-realty',
    title: 'HomeScape Realty',
    category: 'Real Estate',
    description: 'Property listings platform with advanced search and virtual property tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    client: 'HomeScape Realty',
    metrics: [
      { label: 'Property Inquiries', value: '+150%', icon: TrendingUp },
      { label: 'Development Time', value: '3 weeks', icon: Clock },
    ],
    badge: '🏡 Real Estate',
  },
  {
    id: 7,
    slug: 'drcare-clinic',
    title: 'Dr. Care Clinic',
    category: 'Healthcare',
    description: 'Medical clinic website with online appointment booking and patient portal.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    client: 'Dr. Care Clinic',
    metrics: [
      { label: 'Online Bookings', value: '+95%', icon: TrendingUp },
      { label: 'Development Time', value: '3 weeks', icon: Clock },
    ],
    badge: '⚕️ Healthcare',
  },
]

interface PortfolioProps {
  limit?: number
  showViewAll?: boolean
}

export default function Portfolio({ limit, showViewAll = false }: PortfolioProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section id="portfolio" className="section bg-brand-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Our Work</Badge>
          <h2 className="heading-section">
            Recent Projects
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across different industries. 
            Each website is crafted with attention to detail and optimized for results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-brand-bg-secondary rounded-2xl overflow-hidden shadow-card border border-brand-border hover:shadow-card-hover hover:border-brand-accent/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden flex-shrink-0 border-b border-brand-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-brand-bg/90 backdrop-blur-sm border border-brand-border text-brand-text px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {project.badge}
                  </div>
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="text-white flex items-center gap-2 font-semibold hover:gap-4 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 font-display text-brand-text group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-text-muted text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Client */}
                <div className="text-sm text-brand-text-muted mb-6 pb-4 border-b border-brand-border">
                  Client: <span className="font-semibold text-brand-text">{project.client}</span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <metric.icon className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold font-mono text-brand-text">{metric.value}</div>
                        <div className="text-xs text-brand-text-muted">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Project Button */}
                <Link href={`/portfolio/${project.slug}`} tabIndex={-1}>
                  <Button variant="outline" className="w-full group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && limit && projects.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio" tabIndex={-1}>
              <Button variant="primary" size="lg" className="group border-0">
                View All Projects ({projects.length})
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}