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

type Props = {
  tags: { label: string; icon: ReactNode }[]
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  repository?: string
  website?: string
} & ComponentProps<typeof Card>

export async function Project({
  website,
  repository,
  tags,
  title,
  description,
  image,
  className,
  ...props
}: Props) {
  const t = await getTranslations('Project')

  return (
    <Card
      variant='brand'
      size='sm'
      className={cn('h-full w-full', className)}
      {...props}
    >
      <CardHeader>
        <div className='relative w-full rounded-xl border'>
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={500}
            className='w-full rounded-[inherit]'
          />
          <div className='absolute inset-0 rounded-[inherit] bg-linear-8 from-black from-10% to-transparent to-45% dark:via-[#000000dd] dark:via-30%'>
            <CardTitle className='absolute bottom-1 left-2 text-white'>
              {title}
            </CardTitle>
          </div>
        </div>
        <div className='flex flex-wrap gap-1'>
          {tags.map((tag) => (
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
          <Button>
            <SiGithub />
            {t('repository')}
          </Button>
        )}
        {website && (
          <Button>
            <ExternalLink />
            {t('visit')}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
