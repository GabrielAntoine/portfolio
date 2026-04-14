import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@/i18n/navigation'
import { differenceInYears } from 'date-fns'
import { getLocale } from 'next-intl/server'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof Card> & {
  title: string
  start: Date
  end?: Date
  company: string
  logo: StaticImageData
  location: string
  locationUrl: string
  website: string
  description: string
}

export async function ExperienceCard({
  title,
  start,
  end,
  company,
  logo,
  location,
  locationUrl,
  website,
  description,
  ...props
}: Props) {
  const locale = await getLocale()

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
      // Display the month if the job lasted less than two years
      month:
        differenceInYears(end ?? new Date(), start) < 2 ? 'long' : undefined,
      year: 'numeric',
    }).format(date)
  }

  return (
    <Card variant='brand' {...props}>
      <CardHeader>
        <div className='flex items-end justify-between gap-2'>
          <p className='text-muted-foreground text-nowrap'>
            {formatDate(start)}
            {end && ` - ${formatDate(end)}`}
          </p>
          <Link target='_blank' rel='noopener noreferrer' href={website}>
            <Image
              src={logo}
              alt={`${company} logo`}
              className='h-[4em] w-auto object-contain object-bottom'
            />
          </Link>
        </div>
        <CardTitle className='text-2xl'>
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-brand-primary underline-offset-4 hover:underline'
            href={website}
          >
            {company}
          </Link>
          {', '}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='text-brand-primary underline-offset-4 hover:underline'
            href={locationUrl}
          >
            {location}
          </Link>
        </p>
        <p className='mt-4'>{description}</p>
      </CardContent>
    </Card>
  )
}
