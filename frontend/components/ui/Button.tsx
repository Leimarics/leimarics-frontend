import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          
          // Variants mapped to Signal Mark Branding
          {
            // Primary: Signal Teal
            'bg-brand-accent text-white shadow-lg shadow-brand-accent/20': variant === 'primary',
            'hover:bg-brand-accent-hover hover:shadow-xl hover:-translate-y-0.5': variant === 'primary' && !disabled,
            
            // Secondary: Subtle Background matching theme
            'bg-brand-bg-secondary text-brand-text border border-brand-border': variant === 'secondary',
            'hover:border-brand-accent hover:text-brand-accent hover:-translate-y-0.5': variant === 'secondary' && !disabled,
            
            // Outline: Transparent with brand borders
            'border-2 border-brand-border text-brand-text bg-transparent': variant === 'outline',
            'hover:border-brand-accent hover:text-brand-accent': variant === 'outline' && !disabled,
            
            // Ghost: Transparent, hover effect only
            'text-brand-text bg-transparent': variant === 'ghost',
            'hover:bg-brand-bg-secondary': variant === 'ghost' && !disabled,
          },
          
          // Sizes
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Loading...</span>
          </>
        ) : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }