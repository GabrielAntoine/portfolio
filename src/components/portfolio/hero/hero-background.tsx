import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

export function HeroBackground() {
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
