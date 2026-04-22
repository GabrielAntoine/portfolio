import { Button } from '../../ui/button'
import { ArrowDown, BadgeCheck } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { portfolioData } from '@/portfolio-data'
import { getTranslations } from 'next-intl/server'
import { Badge } from '../../ui/badge'
import { ToggleThemeButton } from '../toggle-theme-button'
import { Logo } from '../../logo'
import { Typewriter } from '@/components/typewriter'
import { HeroBackground } from './hero-background'
import { IconBelgium } from 'nucleo-flags'
import { HeroTitle } from './hero-title'
import { differenceInYears } from 'date-fns'
import ScrollDownButton from '@/components/scroll-down-button'
import { SocialLinks } from '../social-links'
import { Reveal } from '@/components/reveal'

export async function Hero() {
  const t = await getTranslations('Hero')

  return (
    <div className='relative grid min-h-svh w-full grid-rows-[1fr_auto_1fr] place-items-center justify-center px-4'>
      <HeroBackground />
      <ToggleThemeButton className='absolute top-2 right-2' />
      <Reveal transition={{ duration: 0.8 }}>
        <Link
          href={t('logo-link')}
          target='_blank'
          rel='noopener noreferrer'
          className={`-ml-4 h-fit w-fit`}
          aria-label={t('logo-label')}
        >
          <Logo className='my-auto w-40 transition hover:scale-120' />
        </Link>
      </Reveal>

      <Reveal transition={{ duration: 0.8 }}>
        <div className={`flex w-full max-w-3xl flex-col items-center`}>
          <HeroTitle />
          <Typewriter
            config={{
              strings: Array.from({ length: +t('typewriter.length') }).map(
                (_, i) => t(`typewriter.${i + 1}`),
              ),
              startMode: 'erase',
              startDelay: 1200,
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
              strong: (chunks) => (
                <strong className='font-bold'>{chunks}</strong>
              ),
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
            <SocialLinks />
          </div>
        </div>
      </Reveal>

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
