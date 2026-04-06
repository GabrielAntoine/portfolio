import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing, Locale } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  const siteName = 'Gabriel Antoine'

  // * In every page:
  // *
  // * <title>
  // *
  // * <meta>
  // * og:url
  // *
  // * <link>
  // * canonical

  return {
    title: {
      template: `%s — ${siteName}`,
      default: siteName,
    },
    description: t('description'),
    openGraph: {
      siteName,
      type: 'website',
      determiner: 'the',
      locale,
      description: t('description'),
      title: {
        template: `%s — ${siteName}`,
        default: siteName,
      },
      // TODO: Add preview image
    },
    twitter: {
      card: 'summary_large_image',
      description: t('description'),
      title: {
        template: `%s — ${siteName}`,
        default: siteName,
      },
      // TODO: Add preview image (see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif)
    },
    generator: 'Next.js',
    // TODO: Add sitemap.xml
    // TODO: Add robots.txt;
    manifest: '/site.webmanifest', // TODO: May be generated
    robots: { index: true, follow: true },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
