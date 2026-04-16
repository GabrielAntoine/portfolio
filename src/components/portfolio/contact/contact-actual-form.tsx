'use client'

import { Button } from '@/components/ui/button'
import { FieldGroup } from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Mail, Send, Tag, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from '@tanstack/react-form'
import z from 'zod'
import { BasicFormField } from '@/components/form/basic-field'
import { contactFormConstraints as constraints } from '@/constants'
import { Spinner } from '@/components/ui/spinner'

const makeFormSchema = (t: ReturnType<typeof useTranslations>) => {
  const length = <N extends keyof typeof constraints>(
    name: N,
    type: keyof (typeof constraints)[N] & string,
  ) => {
    const count = constraints[name][type]
    return [
      count,
      t(`fields.${name as string}.errors.${type as string}`, {
        [type as string]: count as number,
      }),
    ] as const
  }

  return z.object({
    name: z
      .string()
      .trim()
      .min(...length('name', 'min'))
      .max(...length('name', 'max')),
    email: z
      .email(t('fields.email.errors.email'))
      .trim()
      .max(...length('email', 'max')),
    subject: z
      .string()
      .trim()
      .min(...length('subject', 'min'))
      .max(...length('subject', 'max')),
    message: z
      .string()
      .trim()
      .min(...length('message', 'min'))
      .max(...length('message', 'max')),
  })
}

type Props = {
  onSuccess: (values: {
    name: string
    email: string
    subject: string
    message: string
  }) => void
  onFail: (error: Error) => void
}

export function ContactActualForm({ onFail, onSuccess }: Props) {
  const t = useTranslations('ContactForm')

  const formSchema = makeFormSchema(t)
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validators: {
      onChange: formSchema,
      onSubmit: formSchema,
      onMount: formSchema,
    },
    onSubmit: async ({ value }) => {
      // TODO: backend logic to send email
      onSuccess(value)
      onFail(new Error())
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <FieldGroup>
        <FieldGroup className='sm:flex-row sm:gap-2'>
          <BasicFormField
            form={form}
            name='name'
            label={{
              children: t('fields.name.label'),
            }}
          >
            {(props) => (
              <InputGroup withBackground>
                <InputGroupInput
                  {...props}
                  autoComplete='name'
                  placeholder='John Doe'
                />
                <InputGroupAddon align={'inline-start'}>
                  <User />
                </InputGroupAddon>
              </InputGroup>
            )}
          </BasicFormField>
          <BasicFormField
            form={form}
            name='email'
            label={{ children: t('fields.email.label') }}
          >
            {(props) => (
              <InputGroup withBackground>
                <InputGroupInput
                  {...props}
                  autoComplete='email'
                  type='email'
                  placeholder={t('fields.email.placeholder')}
                />
                <InputGroupAddon align={'inline-start'}>
                  <Mail />
                </InputGroupAddon>
              </InputGroup>
            )}
          </BasicFormField>
          <BasicFormField
            form={form}
            name='subject'
            label={{ children: t('fields.subject.label') }}
          >
            {(props) => (
              <InputGroup withBackground>
                <InputGroupInput {...props} />
                <InputGroupAddon align={'inline-start'}>
                  <Tag />
                </InputGroupAddon>
              </InputGroup>
            )}
          </BasicFormField>
        </FieldGroup>
        <BasicFormField
          form={form}
          name='message'
          label={{ children: t('fields.message.label') }}
        >
          {(props) => (
            <InputGroup withBackground>
              <InputGroupTextarea {...props} className='min-h-48' />
            </InputGroup>
          )}
        </BasicFormField>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              className='sm:ml-auto sm:w-fit sm:px-32'
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  {t('submitting')}
                </>
              ) : (
                <>
                  <Send />
                  {t('submit-button')}
                </>
              )}
            </Button>
          )}
        </form.Subscribe>
      </FieldGroup>
    </form>
  )
}
