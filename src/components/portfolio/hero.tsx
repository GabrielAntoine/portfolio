import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Button } from '../ui/button'
import { ArrowDown, BadgeCheck, FileText, Mail } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { RxLinkedinLogo } from 'react-icons/rx'
import { Link } from '@/i18n/navigation'
import { portfolioData } from '@/portfolio-data'
import { getTranslations } from 'next-intl/server'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Badge } from '../ui/badge'
import { ThemeToggleButton } from './theme-toggle-button'
import { Logo } from '../logo'
import { Typewriter } from '../typewriter'

export async function Hero() {
  const t = await getTranslations('Hero')

  const animateIn = `animate-in fade-in slide-in-from-bottom-16 duration-700 ease-out will-change-transform`

  return (
    <div className='relative z-0 grid min-h-svh w-full grid-rows-[1fr_auto_1fr] place-items-center justify-center px-4'>
      <Background />
      <ThemeToggleButton className='absolute top-2 right-2' />
      <Link
        href={t('logo-link')}
        target='_blank'
        className={`${animateIn} -ml-4 h-fit w-fit`}
      >
        <Logo className='my-auto w-40 transition hover:scale-120' />
      </Link>
      <div
        className={`${animateIn} flex w-full max-w-3xl flex-col items-center`}
      >
        <h1 className='max-w-full text-center text-[clamp(var(--text-5xl),5vw,var(--text-7xl))] leading-[1em] font-bold'>
          Gabriel Antoine
        </h1>
        <Typewriter
          config={{
            strings: Array.from({ length: +t('typewriter.length') }).map(
              (_, i) => t(`typewriter.${i + 1}`),
            ),
            startMode: 'erase',
            startDelay: 500,
          }}
          as={'p'}
          container={{
            className:
              'mb-2 text-[clamp(var(--text-2xl),3vw,var(--text-4xl))] leading-[1em]',
          }}
        />
        <p className='mt-8 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          dolores, facere eum corrupti aperiam quam quidem qui quia placeat at!
        </p>
        <Badge variant={'secondary'} className='text-muted-foreground my-4'>
          <BadgeCheck data-icon='inline-start' />
          {t('updated-at', { updatedAt: new Date() })}
        </Badge>
        <div className='flex items-center gap-2'>
          <Tooltip>
            <TooltipTrigger>
              <Button size={'icon-xl'} variant={'ghost'} asChild>
                <Link href={portfolioData.linkedinUrl}>
                  <RxLinkedinLogo className='size-8.5' />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('linkedin-hint')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button size={'icon-xl'} variant={'ghost'} asChild>
                <Link href={portfolioData.githubUrl}>
                  <SiGithub className='size-8' />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('github-hint')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button size={'icon-xl'} variant={'ghost'} asChild>
                <Link href={`mailto:${portfolioData.email}`}>
                  <Mail className='size-9' />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('mail-hint')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button size={'icon-xl'} variant={'ghost'} asChild>
                <Link href={'/cv.pdf'}>
                  <FileText className='size-7.5' />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('cv-hint')}</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Button
        size={'icon-xl'}
        className='mb-4 animate-bounce self-end rounded-full'
      >
        <ArrowDown className='size-6' />
      </Button>
    </div>
  )
}

function Background() {
  return (
    <div className='absolute inset-0 -z-1 max-h-full max-w-full'>
      {/* Small */}
      <Bubble
        color={'responsivePrimary'}
        size={'small'}
        className='sm:left-64'
      />
      <Bubble
        color={'responsiveSecondary'}
        size={'small'}
        className='right-0 bottom-0 sm:right-64'
      />
      <Bubble color='secondary' size={'small'} className='bottom-0' />
      <Bubble color='primary' size={'small'} className='right-0' />

      {/* Medium */}
      <Bubble
        color={'secondary'}
        size={'medium'}
        className='bottom-1/2 -translate-x-1/2 sm:right-1/2 sm:bottom-8 sm:translate-x-0'
      />
      <Bubble
        color={'primary'}
        size={'medium'}
        className='top-1/2 right-0 translate-x-1/2 sm:top-8 sm:right-auto sm:left-1/2 sm:translate-x-0'
      />

      {/* Large */}
      <Bubble color='primary' size='large' className='-bottom-32 -left-32' />
      <Bubble
        color='secondary'
        size='large'
        className='-top-32 right-0 translate-x-32'
      />
      <div className='from-brand-primary to-brand-secondary absolute inset-0 -z-2 bg-linear-to-tl opacity-5 blur' />
    </div>
  )
}

const bubbleVariants = cva(
  'absolute aspect-square rounded-[100%] bg-radial to-transparent dark:to-75% dark:opacity-45 blur-sm',
  {
    variants: {
      color: {
        primary: 'from-brand-primary ',
        secondary: 'from-brand-secondary',
        responsivePrimary: 'from-brand-primary sm:from-brand-secondary',
        responsiveSecondary: 'from-brand-secondary sm:from-brand-primary',
      },
      size: {
        small: 'w-48',
        medium: 'w-76',
        large: 'w-128 sm:w-196',
      },
    },
  },
)

function Bubble({
  color,
  size,
  className,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof bubbleVariants>) {
  return (
    <div
      className={cn(bubbleVariants({ color, size, className }))}
      {...props}
    />
  )
}
