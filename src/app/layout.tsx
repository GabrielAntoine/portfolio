import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { env } from './env'

const siteName = 'Gabriel Antoine'

export const metadata: Metadata = {
  metadataBase: env.BASE_URL,
  title: {
    template: `%s — ${siteName}`,
    default: siteName,
  },
  openGraph: {
    title: {
      template: `%s — ${siteName}`,
      default: siteName,
    },
    siteName,
    type: 'website',
    determiner: 'the',
  },
  twitter: {
    title: {
      template: `%s — ${siteName}`,
      default: siteName,
    },
    card: 'summary_large_image',
  },
  generator: 'Next.js',
  manifest: '/site.webmanifest', // TODO: May be generated
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return children
}
