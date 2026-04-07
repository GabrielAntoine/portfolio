import type { Metadata, ResolvingMetadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
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

export async function generateMetadata(
  { params }: LayoutProps<'/[locale]'>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params
  const { openGraph, twitter } = await parent

  const t = await getTranslations({ locale, namespace: 'Metadata' })
  const description = t('description')

  return {
    description,
    openGraph: {
      ...openGraph,
      locale,
      description,
      // TODO: Add preview image
    },
    twitter: {
      ...twitter,
      description,
      // TODO: Add preview image (see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif)
    },
    // TODO: Add sitemap.xml
    // TODO: Add robots.txt;
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
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
      <body className='flex min-h-full flex-col'>
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
