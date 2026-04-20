'use client'

import { ErrorBackground } from '@/components/error-background'
import { useTranslations } from 'next-intl'

export default function Error() {
  const t = useTranslations('Error')
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center px-2'>
      <ErrorBackground code={500} />
      <h1 className='row-2 text-center text-[clamp(4rem,15vw,12rem)] leading-none font-extrabold'>
        <span className='from-brand-primary to-brand-secondary bg-linear-to-r bg-clip-text text-transparent'>
          {t('title')}
        </span>
      </h1>
      <h2 className='bg-accent mt-4 mb-4 rounded-sm px-2 py-1 text-center font-mono'>
        {t('subtitle')}
      </h2>
    </div>
  )
}
