import { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info' | 'coral'
}

export function Badge({ className = '', variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-brand-bg-secondary text-brand-text border border-brand-border',
    secondary: 'bg-brand-bg text-brand-text-muted border border-brand-border-muted',
    destructive: 'bg-red-500/10 text-red-500 border border-red-500/20',
    outline: 'border border-brand-border text-brand-text',
    success: 'bg-green-500/10 text-green-500 border border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
    info: 'bg-blue-500/10 text-blue-500 border border-blue-500/20',
    // Mapped 'coral' to the new Signal Teal so old code doesn't break
    coral: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20'
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}