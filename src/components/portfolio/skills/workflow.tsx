import { WorkflowIcon } from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'

export async function Workflow() {
  const t = await getTranslations('Skills.Workflow')

  return <Section title={t('title')} icon={<WorkflowIcon />}></Section>
}
