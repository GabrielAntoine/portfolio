import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
  const siteName = 'Gabriel Antoine'

  // * In every pages:
  // *
  // * <meta>
  // * basic: title, description,
  // * og: og:url, og:title, og:description,
  // * twitter: twitter:title, twitter:description
  // *
  // * <link>
  // * canonical, alternate

  return {
    title: {
      template: `%s — ${siteName}`,
      default: siteName,
    },
    openGraph: {
      siteName,
      type: 'website',
      determiner: 'the',
      // TODO: Add preview image
      // TODO: Add locale
    },
    twitter: {
      card: 'summary_large_image',
      // TODO: Add preview image (see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif)
    },
    generator: 'Next.js',
    // TODO: Add sitemap.xml
    // TODO: Add robots.txt;
    manifest: '/site.webmanifest', // TODO: May be generated
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
