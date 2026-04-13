import { ComponentProps, ReactNode } from 'react'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { BookOpen, ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { getTranslations } from 'next-intl/server'
import { cn } from '@/lib/utils'
import { Link } from '@/i18n/navigation'

type Props = {
  tags: { label: string; icon: ReactNode }[]
  title: string
  description: string
  thumbnail: ComponentProps<typeof Image>
  repository?: string
  website?: string
} & ComponentProps<typeof Card>

export async function Project({
  website,
  repository,
  tags,
  title,
  description,
  thumbnail: { className: thumbnailCn, ...thumbnail },
  className,
  ...props
}: Props) {
  const t = await getTranslations('Project')

  const [mainTag, ...otherTags] = tags

  return (
    <Card
      variant='brand'
      size='sm'
      className={cn('h-full w-full', className)}
      {...props}
    >
      <CardHeader>
        <div className='relative w-full rounded-xl border'>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            placeholder='blur'
            className={cn(
              'aspect-12/5 w-full rounded-[inherit] object-cover',
              thumbnailCn,
            )}
            {...thumbnail}
          />
          <div className='absolute inset-0 rounded-[inherit] bg-linear-8 from-black from-10% to-transparent to-45%'>
            <CardTitle className='absolute bottom-1 left-2 max-w-full overflow-hidden text-white'>
              <h3 className='truncate'>{title}</h3>
            </CardTitle>
            <Badge className='border-secondary/30 absolute top-1 right-1!'>
              <span data-icon='inline-start' className='[&>svg]:size-3!'>
                {mainTag.icon}
              </span>
              {mainTag.label}
            </Badge>
          </div>
        </div>
        <div className='flex flex-wrap gap-1'>
          {otherTags.map((tag) => (
            <Badge key={tag.label} variant={'secondary'}>
              <span data-icon='inline-start' className='[&>svg]:size-3!'>
                {tag.icon}
              </span>
              {tag.label}
            </Badge>
          ))}
        </div>
        <CardDescription className='text-justify'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-auto flex flex-wrap justify-stretch gap-1 *:flex-1 *:px-8'>
        <Button>
          <BookOpen />
          <span>
            README<span className='text-muted-foreground'>.md</span>
          </span>
        </Button>

        {repository && (
          <Button asChild>
            <Link href={repository} target='_blank' rel='noopener noreferrer'>
              <SiGithub />
              {t('repository')}
            </Link>
          </Button>
        )}
        {website && (
          <Button asChild>
            <Link href={website} target='_blank' rel='noopener noreferrer'>
              <ExternalLink />
              {t('visit')}
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
