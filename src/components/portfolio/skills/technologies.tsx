import { Code } from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'

export async function Technologies() {
  const t = await getTranslations('Skills.Technologies')

  return <Section title={t('title')} icon={<Code />}></Section>
}
