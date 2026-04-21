import {
  Workflow,
  Database,
  Monitor,
  HardDrive,
  CodeXml,
  Cpu,
  PlugZap,
} from 'lucide-react'
import { Section } from './section'
import { getTranslations } from 'next-intl/server'
import { TechnologyCard } from './technology-card'
import { portfolioData } from '@/portfolio-data'
import { tags } from '../tags'

export async function Technologies() {
  const t = await getTranslations('Skills.Technologies')
  const tTag = await getTranslations('data.tags')

  const technologies = [
    {
      id: 'backend',
      icon: <HardDrive />,
    },
    {
      id: 'frontend',
      icon: <Monitor />,
    },
    {
      id: 'databases',
      icon: <Database />,
    },
    {
      id: 'workflow',
      icon: <Workflow />,
    },
    {
      id: 'integrations',
      icon: <PlugZap />,
    },
    {
      id: 'languages',
      icon: <CodeXml />,
    },
  ] as const

  return (
    <Section title={t('title')} icon={<Cpu />}>
      <div className='flex flex-wrap items-stretch justify-center gap-10 *:h-auto *:w-full md:*:w-[calc((100%---spacing(10))/2)] xl:*:w-[calc((100%---spacing(10)*2)/3)]'>
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            title={t(`sections.${tech.id}`)}
            icon={tech.icon}
            technologies={portfolioData.technologies[tech.id].map((tagId) => {
              const tag = tags[tagId]

              return {
                icon: tag.icon,
                url: tag.url,
                label: tag.localized ? tTag(tagId) : tag.label,
              }
            })}
          />
        ))}
      </div>
    </Section>
  )
}
