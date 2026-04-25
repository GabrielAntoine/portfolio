import { routing } from '@/i18n/routing'
import { portfolioData } from '@/portfolio-data'
import { MetadataRoute } from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: portfolioData.name,
    short_name: portfolioData.name,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#fc5c7d',
    background_color: '#000000',
    display: 'standalone',
    lang: routing.defaultLocale,
    start_url: '/',
  }
}
