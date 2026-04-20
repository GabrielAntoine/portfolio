import { ErrorBackground } from '@/components/error-background'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  const t = await getTranslations('NotFound')

  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center px-2'>
      <ErrorBackground code={404} />
      <h1 className='row-2 text-center text-[clamp(10rem,25vw,20rem)] leading-none font-extrabold'>
        <span className='from-brand-primary to-brand-secondary bg-linear-to-r bg-clip-text text-transparent'>
          404
        </span>
      </h1>
      <h2 className='bg-accent mb-4 rounded-sm px-2 py-1 text-center font-mono'>
        {t('not-found')}
      </h2>
      <Button className='w-full sm:max-w-64' asChild>
        <Link href={'/'}>{t('home-button')}</Link>
      </Button>
    </div>
  )
}
