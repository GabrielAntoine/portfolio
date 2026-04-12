import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { getPathname } from '@/i18n/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ComponentProps } from 'react'

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

export default async function Home() {
  const t = await getTranslations('Pages./')

  return (
    <div>
      <main className='flex flex-col items-center'>
        <Hero />
        <div
          id='content'
          className='flex w-full max-w-7xl flex-col gap-16 px-8 *:first:mt-16'
        >
          <Section title={t('sections.projects')}>
            <Projects />
          </Section>
          <Section title={t('sections.experience')} />
          <Section title={t('sections.education')} />
          <Section title={t('sections.contact')} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Section({
  title,
  children,
  ...props
}: ComponentProps<'section'> & { title: string }) {
  return (
    <section {...props}>
      <div className='mb-8 w-fit'>
        <h2 className='font-semibol mb-2 w-fit text-4xl'>{title}</h2>
        <div className='from-brand-primary to-brand-secondary h-1 w-auto rounded-full bg-linear-to-r' />
      </div>
      {children}
    </section>
  )
}
