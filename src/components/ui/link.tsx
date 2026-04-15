import { Link as NextLink } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Link({
  className,
  target,
  rel,
  ...props
}: ComponentProps<typeof NextLink>) {
  rel ??= target === '_blank' ? 'noopener noreferrer' : ''

  return (
    <NextLink
      target={target}
      rel={rel}
      className={cn(
        'text-brand-primary underline-offset-4 hover:underline',
        className,
      )}
      {...props}
    />
  )
}
