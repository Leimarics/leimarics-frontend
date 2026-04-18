import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

// Font configurations mapped to CSS variables
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

// Merged Metadata: New DevOps messaging + Your original rich SEO/OpenGraph structure
export const metadata: Metadata = {
  metadataBase: new URL('https://leimarics.com'),
  title: 'Leimarics - Cloud-Native Web & Infrastructure Agency',
  description: 'DevOps-native web development. Production-grade infrastructure for modern businesses in Goa, India.',
  keywords: 'DevOps, Cloud Infrastructure, Web Development, AWS, Next.js, Goa, Leimarics',
  
  icons: {
    // Point this to your new logo in the public/logos folder
    icon: '/logos/Leimarics-logo-favico-dark.png',
    apple: '/apple-icon.png', // You can leave this as the old one for now,
  },
  
  openGraph: {
    title: 'Leimarics - Cloud-Native Agency',
    description: 'Where Ambition Meets Execution. Production-grade infrastructure.',
    url: 'https://leimarics.com',
    siteName: 'Leimarics',
    images: [
      {
        url: '/Leimarics-og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Leimarics - Cloud-Native Agency',
    description: 'Where Ambition Meets Execution.',
    images: ['/Leimarics-og-image.png'], // Make sure to use the correct image path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning prevents next-themes from throwing errors on initial load
    // Added your original scroll-smooth class here
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} scroll-smooth`}>
      {/* Added your original antialiased class here for crisper font rendering */}
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}