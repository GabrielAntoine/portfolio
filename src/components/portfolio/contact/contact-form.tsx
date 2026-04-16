'use client'

import { useState } from 'react'
import { ContactActualForm } from './contact-actual-form'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')
  const t = useTranslations('ContactForm')

  if (formStatus === 'success') {
    return (
      <div className='border-success text-success flex w-full flex-col items-center justify-center gap-4 rounded-4xl border-4 p-4 py-16'>
        <div className='flex gap-1'>
          <Check />
          {t('success')}
        </div>
        <Button size={'lg'} onClick={() => setFormStatus('idle')}>
          {t('resend')}
        </Button>
      </div>
    )
  }

  return (
    <ContactActualForm
      onSuccess={() => setFormStatus('success')}
      onFail={(error: Error) => {
        toast.error(t('error'), {
          position: 'top-center',
          richColors: true,
        })
        console.error(error)
      }}
    />
  )
}
