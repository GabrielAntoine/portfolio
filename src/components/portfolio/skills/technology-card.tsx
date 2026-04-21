import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Link } from '@/i18n/navigation'
import { ComponentProps, ReactNode } from 'react'

type Props = {
  title: string
  icon: ReactNode
  technologies: { label: string; icon: ReactNode; url?: string }[]
} & ComponentProps<typeof Card>

export function TechnologyCard({ title, icon, technologies, ...props }: Props) {
  return (
    <Card variant='brand' {...props}>
      <CardContent>
        <Typography type={'subsubtitle'} as='h4'>
          {icon}
          {title}
        </Typography>
        <div className='flex flex-wrap gap-1'>
          {technologies.map((tech) => {
            const innerBadge = (
              <>
                <span data-icon='inline-start' className='[&>svg]:size-3!'>
                  {tech.icon}
                </span>
                {tech.label}
              </>
            )

            return (
              <Badge
                key={tech.label}
                asChild={tech.url !== undefined}
                data-hoverable={tech.url !== undefined}
                variant={'default'}
                className='data-[hoverable=true]:hover:bg-brand-primary data-[hoverable=true]:hover:text-brand-primary-foreground data-[hoverable=true]:cursor-pointer data-[hoverable=true]:hover:-translate-y-0.5'
              >
                {tech.url === undefined ? (
                  innerBadge
                ) : (
                  <Link
                    href={tech.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {innerBadge}
                  </Link>
                )}
              </Badge>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
