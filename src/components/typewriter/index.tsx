import { VisuallyHidden } from 'radix-ui'
import { ComponentProps, ComponentPropsWithoutRef, ElementType } from 'react'
import { TypewriterClient } from './typewriter-client'
import { cn } from '@/lib/utils'

type Props<Tag extends ElementType> = {
  as?: Tag
  config: Omit<ComponentProps<typeof TypewriterClient>, 'durations'> & {
    durations?: Partial<ComponentProps<typeof TypewriterClient>['durations']>
  }
  container?: ComponentProps<'div'>
} & ComponentPropsWithoutRef<Tag>

export function Typewriter<Tag extends ElementType>({
  as,
  config,
  container = {},
  ...props
}: Props<Tag>) {
  const Comp = (as || 'span') as ElementType
  const { className, ...containerProps } = container

  config.durations ??= {}
  config.durations.complete ??= 2000
  config.durations.empty ??= 1000
  config.durations.write ??= 75
  config.durations.erase ??= 25

  return (
    <div className={cn('flex h-[1em]', className)} {...containerProps}>
      {/* Visual effect */}
      <Comp aria-hidden {...props}>
        <TypewriterClient
          {...(config as ComponentProps<typeof TypewriterClient>)}
        />
      </Comp>
      {/* Accessibility/SEO */}
      <VisuallyHidden.Root>
        <ul>
          {config.strings.map((string) => (
            <li key={string}>
              <p>{string}</p>
            </li>
          ))}
        </ul>
      </VisuallyHidden.Root>
      {/* Cursor */}
      <div className='bg-foreground ml-2 h-full w-px animate-[caret-blink_1s_infinite_linear]' />
    </div>
  )
}
