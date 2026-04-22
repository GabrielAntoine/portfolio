import { Brain } from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'
import { ExpertiseCard } from './expertise-card'
import { portfolioData } from '@/portfolio-data'
import { tags } from '../tags'

export async function Expertise() {
  const t = await getTranslations('Skills.Expertise')
  const d = await getTranslations('data.expertise')

  return (
    <Section title={t('title')} icon={<Brain />}>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
        {portfolioData.expertise.map((id) => (
          <ExpertiseCard
            key={id}
            title={d(`${id}.title`)}
            icon={tags[id].icon}
            description={d(`${id}.description`)}
          />
        ))}
      </div>
    </Section>
  )
}
