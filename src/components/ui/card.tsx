import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import './card.css'
import { Reveal } from '../reveal'

const cardVariants = cva(
  'group/card flex h-full w-full flex-col has-[>img:first-child]:pt-0 text-sm *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
  {
    variants: {
      variant: {
        default:
          'bg-card text-card-foreground ring-foreground/15 rounded-3xl shadow-xs ring-1',
        brand: cn(
          ' relative z-0 rounded-4xl border-4 border-transparent hover:-translate-y-2 transition',
          // Border
          'after:from-brand-primary after:via-brand-secondary after:to-brand-primary after:paused hover:after:running after:absolute after:animate-[spin-angle_3s_linear_infinite] after:-inset-[4px] after:-z-1 after:rounded-4xl after:bg-conic-[from_var(--angle)_in_oklab] after:mask-exclude! after:p-[4px] after:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        ),
      },
      size: {
        default: 'gap-6 py-6',
        sm: 'gap-4 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function CardGlow() {
  return (
    <div
      className={cn(
        // Blur effect
        'absolute -inset-2 -z-2 hidden opacity-85 blur-sm transition-all group-hover/card:-inset-4 group-data-[variant=brand]/card:block',
        // Border
        'after:from-brand-primary after:to-brand-primary after:via-brand-secondary after:paused group-hover/card:after:running after:absolute after:inset-0 after:animate-[spin-angle_3s_linear_infinite] after:rounded-[calc(--spacing(1)+var(--radius-4xl))] after:bg-conic-[from_var(--angle)_in_oklab] after:mask-exclude! after:p-3 after:transition-all after:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] group-hover/card:after:p-5',
      )}
    />
  )
}

function Card({
  className,
  size,
  variant,
  children,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <Reveal>
      <div
        data-slot='card'
        data-size={size}
        data-variant={variant}
        className={cn(cardVariants({ size, variant, className }))}
        {...props}
      >
        <CardGlow />
        {children}
      </div>
    </Reveal>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-header'
      className={cn(
        'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-title'
      className={cn(
        'font-heading text-base leading-normal font-medium group-data-[size=sm]/card:text-2xl',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-content'
      className={cn('px-6 group-data-[size=sm]/card:px-4', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-footer'
      className={cn(
        'flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4',
        className,
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
