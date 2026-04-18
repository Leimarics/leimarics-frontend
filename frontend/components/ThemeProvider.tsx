// THEME PROVIDER COMPONENT

'use client'
 
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'
 
interface ThemeProviderProps {
  children: ReactNode
}
 
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      // Attribute to set on <html> tag (class="dark" or class="light")
      attribute="class"
      
      // Default theme on first visit
      defaultTheme="light"
      
      // Enable system theme detection (follows OS dark mode setting)
      enableSystem={true}
      
      // Don't change theme on color scheme change (user controls it)
      disableTransitionOnChange={false}
      
      // Storage key in localStorage
      storageKey="leimarics-theme"
    >
      {children}
    </NextThemesProvider>
  )
}