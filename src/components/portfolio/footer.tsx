import { Link } from '@/i18n/navigation'
import { localeNames, routing } from '@/i18n/routing'
import { portfolioData } from '@/portfolio-data'
import { ComponentProps } from 'react'
import { SocialLinks } from './social-links'
import { getTranslations } from 'next-intl/server'

export async function Footer(props: ComponentProps<'footer'>) {
  const t = await getTranslations('Footer')

  return (
    <footer className='bg-background w-full border-t pt-12 pb-4' {...props}>
      <div className='mx-auto w-full max-w-7xl px-8'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-secondary-foreground mb-2'>{t('languages')}</h2>
            <ul className='text-muted-foreground'>
              {routing.locales.map((locale) => (
                <li key={locale}>
                  {/* The href must change if I add another page */}
                  <Link
                    locale={locale}
                    href={'/'}
                    className='text-sm hover:underline'
                  >
                    {localeNames[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-wrap justify-end'>
            <SocialLinks />
          </div>
        </div>

        <div className='text-muted-foreground mt-4 border-t pt-4 text-center'>
          © {portfolioData.name}
        </div>
      </div>
    </footer>
  )
}
