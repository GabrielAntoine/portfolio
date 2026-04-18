import { getTranslations } from 'next-intl/server'
import { Section } from '../section'
import { Goal } from 'lucide-react'
import { Languages } from './languages'
import { Expertise } from './expertise'
import { Workflow } from './workflow'
import { Technologies } from './technologies'

export async function Skills() {
  const t = await getTranslations('Skills')

  return (
    <Section title={t('title')} icon={<Goal />}>
      <Expertise />
      <Technologies />
      <Workflow />
      <Languages />
    </Section>
  )
}
