'use client'

import { ComponentProps } from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

type Props = ComponentProps<typeof Button>

export function ThemeToggleButton(props: Props) {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant={'ghost'}
      size={'icon-lg'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      <Sun className='size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='absolute size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
    </Button>
  )
}
