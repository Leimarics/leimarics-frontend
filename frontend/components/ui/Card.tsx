import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // Updated to Signal Mark theme variables
        'rounded-2xl bg-brand-bg-secondary p-8 shadow-card border border-brand-border',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 hover:border-brand-accent/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-2', className)} {...props} />
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  // Updated text color
  return <h3 className={cn('text-2xl font-bold font-display text-brand-text', className)} {...props} />
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  // Updated text color
  return <p className={cn('text-brand-text-muted leading-relaxed', className)} {...props} />
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('pt-6', className)} {...props} />
}