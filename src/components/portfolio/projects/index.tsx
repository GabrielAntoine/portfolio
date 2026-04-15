import { portfolioData } from '@/portfolio-data'
import { Project } from './project'
import { getTranslations } from 'next-intl/server'
import { Tag, tags } from './project-tags'
import { MustSeeRibbon } from './must-see-ribbon'
import { Section } from '../section'
import { Folders } from 'lucide-react'

export async function Projects() {
  const t = await getTranslations('Projects')
  const d = await getTranslations('data.projects')

  return (
    <Section title={t('title')} icon={<Folders />}>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
        {portfolioData.projects.map((project) => {
          const g = (id: string) => d(`${project.id}.${id}`)
          return (
            <div key={project.id} className='relative mx-auto h-full w-full'>
              {project.mustSee && <MustSeeRibbon />}

              <Project
                tags={project.tags.map((tagId: Tag) => {
                  const tag = tags[tagId]

                  return {
                    icon: tag.icon,
                    label: tag.localized ? d(`tags.${tagId}`) : tag.label,
                  }
                })}
                website={project.websiteUrl}
                repository={project.githubRepositoryUrl}
                title={g('name')}
                description={g('description')}
                thumbnail={{
                  src: project.image,
                  alt: g('thumbnailAlt'),
                }}
              />
            </div>
          )
        })}
      </div>
    </Section>
  )
}
