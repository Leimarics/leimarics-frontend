import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Leimarics',
    short_name: 'Leimarics',
    description: 'Cloud-Native Web & Infrastructure Agency',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a', // Matches your new dark brand-bg
    theme_color: '#00f0ff', // Matches your brand-accent
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}