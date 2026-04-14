import {
  Timeline,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/ui/timeline'
import { portfolioData } from '@/portfolio-data'
import { BriefcaseBusiness } from 'lucide-react'
import { ExperienceCard } from './experience-card'
import { getTranslations } from 'next-intl/server'

export async function WorkExperience() {
  const t = await getTranslations('data.work-experience')

  return (
    <Timeline alternate className='w-full'>
      {portfolioData.experience.map((work) => {
        const g = (id: string) => t(`${work.id}.${id}`)

        return (
          <TimelineItem
            key={work.id}
            className='w-full max-sm:group-data-[alternate=true]:grid-cols-[auto_1fr]'
          >
            <TimelineIndicator>
              <div className='bg-background flex h-full w-full items-center justify-center rounded-full p-1'>
                <BriefcaseBusiness className='h-full' />
              </div>
            </TimelineIndicator>
            <TimelineSeparator />
            <TimelineContent className='max-sm:group-data-[alternate=true]:group-odd/item:col-2'>
              <ExperienceCard
                title={g('title')}
                start={work.start}
                end={work.end}
                company={work.company}
                logo={work.logo}
                location={work.location}
                locationUrl={work.locationUrl}
                website={work.website}
                description={g('description')}
              />
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
