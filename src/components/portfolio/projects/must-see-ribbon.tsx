import { Star } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export async function MustSeeRibbon() {
  const t = await getTranslations('MustSeeRibbon')

  return (
    <div className='absolute z-1 origin-bottom-right -translate-x-[calc(100%-100%/sqrt(2)+--spacing(4))] -translate-y-[calc(100%+--spacing(4))] rotate-315'>
      <div className='flex h-8 items-center justify-center truncate bg-red-900 px-12 text-white [clip-path:polygon(0_100%,--spacing(8)_0,calc(100%---spacing(8))_0,100%_100%)]'>
        <Star className='mr-2' />
        {t('must-see')}
      </div>
      <div className='absolute bottom-0 left-0 aspect-square h-4 origin-top-left translate-y-full rotate-315 bg-red-950 [clip-path:polygon(0_0,0_100%,100%_100%)]' />
      <div className='absolute right-0 bottom-0 aspect-square h-4 origin-top-right translate-y-full rotate-45 bg-red-950 [clip-path:polygon(0_100%,100%_100%,100%_0)]' />
    </div>
  )
}
