import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType } from 'react'

const variants = cva(
  '[&_svg]:size-[1em] has-[svg]:flex has-[svg]:items-start has-[svg]:gap-x-2',
  {
    variants: {
      type: {
        paragraph: '',
        title:
          'after:from-brand-primary after:to-brand-secondary relative mb-16 w-fit pb-4 text-4xl leading-none font-semibold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-linear-to-r ',
        subtitle: 'text-2xl font-medium mb-8 leading-none',
        subsubtitle: 'text-xl font-medium leading-none mb-2',
      },
    },
    defaultVariants: {
      type: 'paragraph',
    },
  },
)

const className = 'has-[svg]:inline-flex'

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Props<T extends TextTag> = {
  as?: T
} & VariantProps<typeof variants> &
  ComponentProps<T>

export function Typography<T extends TextTag>({
  type,
  as,
  className,
  ...props
}: Props<T>) {
  const Comp = (as ?? 'span') as ElementType

  return <Comp className={cn(variants({ type, className }))} {...props} />
}
