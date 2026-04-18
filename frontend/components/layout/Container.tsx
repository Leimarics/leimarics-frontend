import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    // Replaced manual Tailwind classes with your new global CSS utility
    <div className={cn("container-custom", className)}>
      {children}
    </div>
  )
}