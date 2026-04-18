import { Typography } from '@/components/ui/typography'
import { ComponentProps, ReactNode } from 'react'

type Props = ComponentProps<'section'> & {
  icon: ReactNode
  title: string
}

export function Section({ icon, children, title, ...props }: Props) {
  return (
    <section {...props}>
      <Typography type={'subtitle'} as='h3'>
        {icon}
        {title}
      </Typography>
      {children}
    </section>
  )
}
