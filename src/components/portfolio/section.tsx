import { ComponentProps, ReactNode } from 'react'

export function Section({
  title,
  icon,
  children,
  ...props
}: ComponentProps<'section'> & { title: string; icon: ReactNode }) {
  return (
    <section {...props}>
      <div className='mb-16 w-fit'>
        <div className='mb-3 flex items-start gap-2 text-4xl *:first:size-[1em]'>
          {icon}
          <h2 className='w-fit leading-none font-semibold'>{title}</h2>
        </div>
        <div className='from-brand-primary to-brand-secondary h-1 w-auto rounded-full bg-linear-to-r' />
      </div>
      {children}
    </section>
  )
}
