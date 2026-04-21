import { Card, CardContent } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { IconFrance, IconUnitedKingdom } from 'nucleo-flags'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'
import { LanguagesIcon } from 'lucide-react'

const languages = [
  { lang: 'french', icon: <IconFrance /> },
  { lang: 'english', icon: <IconUnitedKingdom /> },
]

export async function Languages() {
  const t = await getTranslations('Skills.Languages')

  return (
    <Section title={t('title')} icon={<LanguagesIcon />}>
      <div className='flex w-full justify-center *:flex-1'>
        <Card variant='brand'>
          <CardContent className='flex flex-wrap justify-center gap-10'>
            {languages.map((lang) => (
              <div key={lang.lang}>
                <Typography type={'subsubtitle'} as='h4'>
                  {lang.icon}
                  {t(`${lang.lang}.label`)}
                </Typography>
                {t(`${lang.lang}.level`)}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
