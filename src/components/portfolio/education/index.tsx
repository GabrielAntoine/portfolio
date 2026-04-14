import {
  Timeline,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/ui/timeline'
import { portfolioData } from '@/portfolio-data'
import { GraduationCap } from 'lucide-react'
import { EducationCard } from './education-card'
import { getTranslations } from 'next-intl/server'

export async function Education() {
  const t = await getTranslations('data.education')

  return (
    <Timeline alternate className='w-full'>
      {portfolioData.education.map((educ) => {
        const g = (id: string) => t(`${educ.id}.${id}`)

        return (
          <TimelineItem
            key={educ.id}
            className='w-full max-sm:group-data-[alternate=true]:grid-cols-[auto_1fr]'
          >
            <TimelineIndicator>
              <div className='bg-background flex h-full w-full items-center justify-center rounded-full p-1'>
                <GraduationCap className='h-full' />
              </div>
            </TimelineIndicator>
            <TimelineSeparator />
            <TimelineContent className='max-sm:group-data-[alternate=true]:group-odd/item:col-2'>
              <EducationCard
                title={g('title')}
                start={educ.start}
                end={educ.end}
                institution={educ.institution}
                logo={educ.logo}
                location={educ.location}
                locationUrl={educ.locationUrl}
                website={educ.website}
                description={g('description')}
              />
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
