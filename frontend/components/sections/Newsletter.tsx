'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Send, Check, X } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setEmail('')
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(data.error || 'Failed to subscribe')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="newsletter" className="section bg-brand-bg-secondary border-y border-brand-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-4">Stay Updated</Badge>
          
          <h2 className="heading-section">
            Join Our Newsletter
          </h2>
          
          <p className="text-body-lg max-w-2xl mx-auto mb-12">
            Get weekly tips on web development, digital marketing strategies, and exclusive 
            offers delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full h-14 px-6 rounded-xl border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all shadow-sm"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={loading || success}
                className="whitespace-nowrap h-14 border-0"
              >
                {loading ? (
                  'Subscribing...'
                ) : success ? (
                  <>
                    <Check className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center gap-3 text-red-500 font-medium text-sm"
              >
                <X className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center gap-3 text-brand-accent font-medium text-sm"
              >
                <Check className="w-5 h-5 flex-shrink-0" />
                <p>Thanks for subscribing! Check your email for confirmation.</p>
              </motion.div>
            )}

            <p className="text-sm text-brand-text-muted mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-brand-border">
            {[
              { icon: '💡', title: 'Web Tips', description: 'Practical insights weekly' },
              { icon: '📊', title: 'Industry Trends', description: 'Stay ahead of competitors' },
              { icon: '🎁', title: 'Exclusive Offers', description: 'Subscriber-only discounts' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold font-display text-brand-text mb-2">{benefit.title}</h3>
                <p className="text-brand-text-muted text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}