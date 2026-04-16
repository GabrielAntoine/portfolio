import type { Metadata, ResolvingMetadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { Graph } from 'schema-dts'
import { portfolioData } from '@/portfolio-data'
import { env } from '../env'
import { Toaster } from 'sonner'

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
  }
}

const schemaJsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': new URL('#person', env.BASE_URL).href,
      name: portfolioData.name,
      alternateName: portfolioData.githubUsername,
      description:
        'Full Stack developer specialized in React, Next.js and SQL databases',
      url: env.BASE_URL.origin,
      sameAs: [portfolioData.githubUrl, portfolioData.linkedinUrl],
      jobTitle: 'Full Stack Developer',
      knowsAbout: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
      image: new URL('me.webp', env.BASE_URL).href,
    },

    {
      '@type': 'WebSite',
      '@id': new URL('#website', env.BASE_URL).href,
      url: env.BASE_URL.origin,
      name: `${portfolioData.name} Portfolio`,
      publisher: {
        '@id': new URL('#person', env.BASE_URL).href,
      },
    },
  ],
} as const

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
      className={`selection:bg-brand-primary/60 h-full overflow-x-hidden scroll-smooth antialiased ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaJsonLd),
          }}
        />
      </head>
      <body className='h-full overflow-x-hidden scroll-smooth'>
        <Toaster />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          forcedTheme={undefined}
        >
          <TooltipProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
