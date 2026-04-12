import { Button } from '../../ui/button'
import { ArrowDown, BadgeCheck, FileText, Mail } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { portfolioData } from '@/portfolio-data'
import { getTranslations } from 'next-intl/server'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip'
import { Badge } from '../../ui/badge'
import { ToggleThemeButton } from '../toggle-theme-button'
import { Logo } from '../../logo'
import { Typewriter } from '../../typewriter'
import { HeroBackground } from './hero-background'
import { LuGithub } from 'react-icons/lu'
import { TbBrandLinkedin } from 'react-icons/tb'
import { IconBelgium } from 'nucleo-flags'
import { HeroTitle } from './hero-title'
import { differenceInYears } from 'date-fns'
import ScrollDownButton from '@/components/scroll-down-button'

export async function Hero() {
  const t = await getTranslations('Hero')

  const animateIn = `animate-in fade-in slide-in-from-bottom-16 duration-700 ease-out will-change-transform`

  const iconLinks = [
    {
      name: 'linkedin', // allow to get the hint [name]-hint, and label [name]-label
      url: portfolioData.linkedinUrl,
      icon: <TbBrandLinkedin className='size-9' />,
    },
    {
      name: 'github',
      url: portfolioData.githubUrl,
      icon: <LuGithub className='size-8' />,
    },
    {
      name: 'mail',
      url: `mailto:${portfolioData.email}`,
      icon: <Mail className='size-9' />,
    },
    {
      name: 'cv',
      url: '/cv.pdf',
      icon: <FileText className='size-7.5' />,
    },
  ]

  return (
    <div className='relative grid min-h-svh w-full grid-rows-[1fr_auto_1fr] place-items-center justify-center px-4'>
      <HeroBackground />
      <ToggleThemeButton className='absolute top-2 right-2' />
      <Link
        href={t('logo-link')}
        target='_blank'
        rel='noopener noreferrer'
        className={`${animateIn} -ml-4 h-fit w-fit`}
        aria-label={t('logo-label')}
      >
        <Logo className='my-auto w-40 transition hover:scale-120' />
      </Link>
      <div
        className={`${animateIn} flex w-full max-w-3xl flex-col items-center`}
      >
        <HeroTitle />
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
        <p className='mt-8 px-4 text-justify sm:text-center'>
          {t.rich('description', {
            age: differenceInYears(new Date(), portfolioData.birthDate),
            strong: (chunks) => <strong className='font-bold'>{chunks}</strong>,
            belgium: () => (
              <span className='inline-flex align-middle'>
                <IconBelgium className='h-[1em] w-fit -translate-y-[0.1em]' />
              </span>
            ),
            location: (chunks) => (
              <Button variant={'inlineLink'} asChild>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href={'https://www.google.com/maps/place/Li%C3%A8ge'}
                >
                  {chunks}
                </Link>
              </Button>
            ),
          })}
        </p>
        <Badge variant={'secondary'} className='text-muted-foreground my-4'>
          <BadgeCheck data-icon='inline-start' />
          {t('updated-at', { updatedAt: new Date() })}
        </Badge>
        <div className='flex items-center gap-2'>
          {iconLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Button size={'icon-xl'} variant={'ghost'} asChild>
                  <span>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={t(`${link.name}-label`)}
                      href={link.url}
                    >
                      {link.icon}
                    </Link>
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t(`${link.name}-hint`)}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <Button
        size={'icon-xl'}
        className='mb-4 animate-bounce self-end rounded-full'
        aria-label={t('scroll-down-button-label')}
        asChild
      >
        <ScrollDownButton fragment='content'>
          <ArrowDown className='size-6' />
        </ScrollDownButton>
      </Button>
    </div>
  )
}
