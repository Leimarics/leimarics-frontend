'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    // RESTORED: Your debug logs
    console.log('Submitting form data:', formData)
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      // RESTORED: Your response debug logs
      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(data.error || 'Failed to send message')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Network error. Please check if backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section bg-brand-bg-secondary border-t border-brand-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Get In Touch</Badge>
          <h2 className="heading-section">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Get in touch and let&apos;s discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-brand-text mb-6">Contact Information</h3>
              <p className="text-brand-text-muted leading-relaxed mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-brand-text mb-1">Phone</div>
                  <a href="tel:+917499216988" className="text-brand-text-muted hover:text-brand-accent transition-colors text-lg">
                    +91 7499216988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-brand-text mb-1">Email</div>
                  <a href="mailto:leofrancis6988@gmail.com" className="text-brand-text-muted hover:text-brand-accent transition-colors break-all">
                    leofrancis6988@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-brand-text mb-1">Location</div>
                  <p className="text-brand-text-muted">
                    Sukubhat, Fatona, Seraulim<br />
                    Goa 403708, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-semibold text-brand-text mb-1">Business Hours</div>
                  <p className="text-brand-text-muted">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-brand-bg border border-brand-border rounded-2xl">
              <p className="text-sm text-brand-text-muted">
                ⚡ <span className="font-semibold text-brand-text">Quick Response:</span> We respond to all inquiries 
                within 4 hours during business days.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-brand-bg rounded-2xl p-8 border border-brand-border shadow-card">
              <div className="space-y-6">
                <Input
                  label="Your Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />

                <Select
                  label="Project Type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="basic">Basic Website</option>
                  <option value="business">Business Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </Select>

                <Textarea
                  label="Tell Us About Your Project"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements, goals, and any specific features you need..."
                  rows={5}
                  required
                />

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent text-sm font-medium">
                    ✓ Thank you! We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full border-0"
                  disabled={loading}
                >
                  {loading ? (
                    'Sending...'
                  ) : success ? (
                    '✓ Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}