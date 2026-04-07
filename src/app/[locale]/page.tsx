import { getPathname } from '@/i18n/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  { params }: PageProps<'/[locale]'>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params
  const { openGraph, twitter } = await parent

  const t = await getTranslations({ namespace: 'Metadata./', locale })
  const title = t('title')
  const canonical = getPathname({ locale, href: '/' })

  return {
    title,
    alternates: {
      canonical,
    },
    openGraph: {
      ...openGraph,
      url: canonical,
      title,
    },
    twitter: {
      ...twitter,
      title,
    },
  }
}

export default function Home() {
  return 'Hello World!'
}
