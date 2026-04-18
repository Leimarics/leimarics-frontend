'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  variant?: 'icon' | 'wordmark'
  className?: string
}

export function Logo({ variant = 'wordmark', className = '' }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  
  // Use dark variant as default during SSR to prevent flash
  const isDark = mounted ? theme === 'dark' : true

  if (variant === 'icon') {
    return (
      <img
        src={isDark ? '/logos/Leimarics-logo-icon-dark.svg' : '/logos/Leimarics-logo-icon-light.svg'}
        alt="Leimarics"
        className={className}
      />
    )
  }

  return (
    <img
      src={isDark ? '/logos/Leimarics-logo-wordmark-dark.svg' : '/logos/Leimarics-logo-wordmark-light.svg'}
      alt="Leimarics - Cloud · DevOps · AI"
      className={className}
    />
  )
}