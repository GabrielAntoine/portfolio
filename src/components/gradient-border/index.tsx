import { ComponentProps } from 'react'
import './style.css'
import { cn } from '@/lib/utils'

export function GradientBorder({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative z-0 rounded-(--gb-rounded) p-(--gb-width)',
        className,
      )}
      {...props}
    >
      <div className='absolute -inset-1 -z-2 opacity-85 blur-sm'>
        <div className='from-brand-primary to-brand-primary via-brand-secondary h-full w-full animate-[spin-angle_6s_linear_infinite] rounded-[calc(--spacing(1)+var(--gb-rounded))] bg-conic-[from_var(--angle)] mask-exclude! p-[calc(--spacing(2)+var(--gb-width))] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]' />
      </div>
      <div className='from-brand-primary via-brand-secondary to-brand-primary absolute inset-0 -z-1 animate-[spin-angle_6s_linear_infinite] rounded-(--gb-rounded) bg-conic-[from_var(--angle)] mask-exclude! p-(--gb-width) [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]' />
      <div className='h-full w-full rounded-[inherit]'>{children}</div>
    </div>
  )
}
