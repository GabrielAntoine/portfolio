import { ComponentProps, ReactNode } from 'react'
import { Typography } from '../ui/typography'

export function Section({
  title,
  icon,
  children,
  ...props
}: ComponentProps<'section'> & { title: string; icon: ReactNode }) {
  return (
    <section {...props}>
      <Typography type={'title'} as='h2'>
        {icon}
        {title}
      </Typography>
      {children}
    </section>
  )
}
