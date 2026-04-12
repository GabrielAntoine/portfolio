'use client'

import { ComponentProps } from 'react'
import { Button } from './ui/button'

export default function ScrollDownButton({
  fragment,
  ...props
}: ComponentProps<typeof Button> & { fragment: string }) {
  return (
    <Button
      onClick={() => {
        document.getElementById(fragment)?.scrollIntoView({
          behavior: 'smooth',
        })
      }}
      {...props}
    />
  )
}
