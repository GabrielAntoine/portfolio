import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

function Timeline({
  className,
  alternate = false,
  ...props
}: ComponentProps<'div'> & { alternate?: boolean }) {
  return (
    <div
      data-slot='timeline'
      data-alternate={alternate}
      className={cn('group flex w-fit flex-col', className)}
      {...props}
    />
  )
}

function TimelineItem({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='timeline-item'
      className={cn(
        'group/item grid w-fit grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 group-data-[alternate=true]:grid-cols-[1fr_auto_1fr]',
        className,
      )}
      {...props}
    />
  )
}

function TimelineSeparator({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='timeline-separator'
      className={cn(
        'bg-brand-primary from-brand-primary to-brand-secondary after:from-brand-primary after:to-brand-secondary relative -col-3 row-2 h-[calc(100%---spacing(6)*2)] w-1 self-center justify-self-center rounded-full bg-linear-to-b group-last/item:hidden after:absolute after:-inset-1 after:-z-1 after:rounded-[inherit] after:bg-linear-to-b after:opacity-85 after:blur-sm',
        className,
      )}
      {...props}
    />
  )
}

function TimelineIndicator({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='timeline-indicator'
      className={cn(
        'after:from-brand-primary after:to-brand-secondary from-brand-primary to-brand-secondary relative -col-3 row-1 h-8 w-8 rounded-full bg-linear-to-b p-1 after:absolute after:-inset-1 after:-z-1 after:rounded-[inherit] after:bg-linear-to-b after:opacity-85 after:blur-sm',
        className,
      )}
      {...props}
    />
  )
}

function TimelineContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='timeline-content'
      className={cn(
        '-col-2 row-span-full pb-12 group-last/item:pb-0 group-data-[alternate=true]:group-odd/item:col-1',
        className,
      )}
      {...props}
    />
  )
}

export {
  Timeline,
  TimelineContent,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
}
