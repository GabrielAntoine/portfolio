import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@/i18n/navigation'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof Card> & {
  title: string
  start: Date
  end: Date
  institution: string
  logo: StaticImageData
  location: string
  locationUrl: string
  website: string
  description: string
}

export function EducationCard({
  title,
  start,
  end,
  institution,
  logo,
  location,
  locationUrl,
  website,
  description,
  ...props
}: Props) {
  return (
    <Card variant='brand' {...props}>
      <CardHeader>
        <div className='flex items-end justify-between gap-2'>
          <p className='text-muted-foreground text-nowrap'>
            {start.getFullYear()} - {end.getFullYear()}
          </p>
          <Link target='_blank' rel='noopener noreferrer' href={website}>
            <Image
              src={logo}
              alt={`${institution} logo`}
              className='h-full max-h-[4em] w-auto rounded-sm'
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
            {institution}
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
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
