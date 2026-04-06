import { makeCanonicalUrl } from '@/i18n/navigation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ namespace: 'Metadata./', locale })

  const title = t('title')
  const canonical = makeCanonicalUrl({ locale, href: '/' })

  return {
    title,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title,
    },
    twitter: { title },
  }
}

export default function Home() {
  return 'Hello World!'
}
