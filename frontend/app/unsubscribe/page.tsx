'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { X, Check } from 'lucide-react'

// 1. Move the logic into a separate component
function UnsubscribeForm() {
  const searchParams = useSearchParams()
  const emailFromUrl = searchParams.get('email')
  
  const [email, setEmail] = useState(emailFromUrl || '')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
      } else {
        setError(data.error || 'Failed to unsubscribe')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Success State
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg px-4 py-20">
        <div className="max-w-md w-full bg-brand-bg-secondary border border-brand-border rounded-2xl shadow-card p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-6">
             <Check className="w-10 h-10 text-brand-accent" />
          </div>
          <h1 className="font-display text-2xl font-bold text-brand-text mb-4">Unsubscribed Successfully</h1>
          <p className="text-brand-text-muted mb-8 leading-relaxed">
            You&apos;ve been removed from our newsletter. We&apos;re sorry to see you go!
          </p>
          <p className="text-sm text-brand-text-muted">
            Changed your mind?{' '}
            <Link href="/" className="text-brand-accent hover:text-brand-accent-hover font-medium transition-colors">
              Visit our homepage
            </Link>
          </p>
        </div>
      </div>
    )
  }

  // Form State
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg px-4 py-20">
      <div className="max-w-md w-full bg-brand-bg-secondary border border-brand-border rounded-2xl shadow-card p-8">
        <h1 className="font-display text-2xl font-bold text-brand-text mb-2">Unsubscribe</h1>
        <p className="text-brand-text-muted mb-8">
          We&apos;re sorry to see you go. Enter your email to unsubscribe from the newsletter.
        </p>

        <form onSubmit={handleUnsubscribe} className="space-y-6">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
          />

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm font-medium">
              <X className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full border-0"
            disabled={loading}
          >
            {loading ? 'Unsubscribing...' : 'Unsubscribe'}
          </Button>
        </form>
      </div>
    </div>
  )
}

// 2. The main page component exports the form wrapped in Suspense
export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <p className="text-brand-text-muted font-medium">Loading...</p>
      </div>
    }>
      <UnsubscribeForm />
    </Suspense>
  )
}