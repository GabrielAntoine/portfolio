import { Contact } from '@/components/portfolio/contact'
import { Education } from '@/components/portfolio/education'
import { WorkExperience } from '@/components/portfolio/experience'
import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'
import { getPathname } from '@/i18n/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
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

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <>
      <main className='flex flex-col items-center'>
        <Hero />
        <div
          id='content'
          className='flex w-full max-w-7xl flex-col gap-32 px-8 py-32'
        >
          <Projects />
          <Skills />
          <Education />
          <WorkExperience />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
