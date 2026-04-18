import { Brain } from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'

export async function Expertise() {
  const t = await getTranslations('Skills.Expertise')

  return <Section title={t('title')} icon={<Brain />}></Section>
}
