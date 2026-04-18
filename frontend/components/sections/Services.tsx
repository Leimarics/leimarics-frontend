'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    category: "Web & E-Commerce",
    link: "/services/website-development", 
    items: [
      { name: "Basic Website (Static, up to 5 pages)", price: "₹15,000–₹18,000", tech: ["Next.js", "Tailwind", "Vercel"] },
      { name: "Business Website (Dynamic CMS, 8-10 pages)", price: "₹30,000–₹45,000", tech: ["Next.js", "Sanity CMS", "Resend"] },
      { name: "E-commerce Store", price: "₹60,000–₹80,000", tech: ["Next.js", "Razorpay", "Supabase"] },
      { name: "Custom Web App / SaaS", price: "₹1,00,000+", tech: ["Next.js", "Node.js", "Postgres"] },
    ]
  },
  {
    category: "DevOps & Cloud",
    link: "/contact", 
    description: "The only Goa agency with a DevOps engineer building your infrastructure",
    items: [
      { name: "CI/CD Pipeline Setup", price: "₹20,000–₹35,000", tech: ["GitHub Actions", "Vercel", "Docker"] },
      { name: "Docker Containerization", price: "₹15,000–₹25,000", tech: ["Docker", "Compose", "ECR"] },
      { name: "AWS Setup & Migration", price: "₹30,000–₹60,000", tech: ["AWS", "Terraform", "EC2", "RDS"] },
      { name: "Server Monitoring Setup", price: "₹20,000–₹30,000", tech: ["Prometheus", "Grafana", "CloudWatch"] },
      { name: "DevOps Retainer", price: "₹25,000–₹40,000/mo", tech: ["Full managed support"] },
    ]
  },
  {
    category: "Design & Brand",
    link: "/services/ui-ux-design", 
    items: [
      { name: "UI/UX Design (Figma)", price: "₹20,000–₹40,000", tech: ["Figma", "Prototypes"] },
      { name: "Brand Identity Package", price: "₹15,000–₹25,000", tech: ["Logo", "Guidelines"] },
    ]
  },
  {
    category: "AI & Automation",
    link: "/contact",
    items: [
      { name: "AI Chatbot Integration", price: "₹25,000–₹50,000", tech: ["Claude API", "OpenAI", "WhatsApp"] },
      { name: "Workflow Automation", price: "₹15,000–₹30,000", tech: ["n8n", "Zapier", "Custom APIs"] },
    ]
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-brand-bg">
      <div className="container-custom">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-section">Our Services</h2>
          <p className="text-body-lg max-w-2xl">
            Production-grade solutions engineered for scalability, security, and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((section, index) => (
            /* Animated Cards */
            <motion.div 
              key={section.category} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card flex flex-col h-full"
            >
              <div className="flex-grow">
                <h3 className="heading-card text-brand-accent">{section.category}</h3>
                
                {section.description && (
                  <p className="text-sm text-brand-text-muted mb-4 italic border-l-2 border-brand-accent pl-3">
                    {section.description}
                  </p>
                )}
                
                <ul className="space-y-4 mb-8">
                  {section.items.map((item) => (
                    <li key={item.name} className="border-b border-brand-border-muted pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-sm">{item.name}</span>
                        
                        {/* PRICING HIDDEN: 
                          Uncomment the span below to restore public pricing in the future.
                          Data remains in the array above.
                        */}
                        {/* <span className="font-mono text-sm text-brand-accent ml-2 flex-shrink-0">
                          {item.price}
                        </span> 
                        */}

                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tech.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button mapped to your old routing */}
              <div className="mt-auto pt-4 border-t border-brand-border">
                <Link href={section.link} className="w-full block">
                  <button className="btn-secondary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}