import { getTranslations } from 'next-intl/server'
import { Section } from '../section'
import { UserPen } from 'lucide-react'
import { Link } from '@/components/ui/link'
import { portfolioData } from '@/portfolio-data'
import { ContactForm } from './contact-form'

export async function Contact() {
  const t = await getTranslations('Contact')

  return (
    <Section title={t('title')} icon={<UserPen />}>
      <h3 className='text-2xl font-semibold'>{t('subtitle')}</h3>
      <p>
        {t.rich('description', {
          email: () => (
            <Link href={`mailto:${portfolioData.email}`}>
              {portfolioData.email}
            </Link>
          ),
        })}
      </p>
      <ContactForm className='mt-4' />
    </Section>
  )
}
