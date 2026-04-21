import { Brain, CurlyBraces } from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'
import { ExpertiseCard } from './expertise-card'

export async function Expertise() {
  const t = await getTranslations('Skills.Expertise')

  return (
    <Section title={t('title')} icon={<Brain />}>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <ExpertiseCard
            key={i}
            title='Développer des API REST'
            icon={<CurlyBraces />}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, natus!'
            }
          />
        ))}
      </div>
    </Section>
  )
}
