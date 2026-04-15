import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Mail, Send, Tag, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'

export function ContactForm(props: ComponentProps<'form'>) {
  const t = useTranslations('ContactForm')

  return (
    <form {...props}>
      <FieldGroup>
        <FieldGroup className='sm:flex-row sm:gap-2'>
          <Field>
            <FieldLabel>{t('name-field-label')}</FieldLabel>
            <InputGroup withBackground>
              <InputGroupInput autoComplete='name' placeholder='John Doe' />
              <InputGroupAddon align={'inline-start'}>
                <User />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel>{t('email-field-label')}</FieldLabel>
            <InputGroup withBackground>
              <InputGroupInput
                autoComplete='email'
                type='email'
                placeholder={t('email-field-placeholder')}
              />
              <InputGroupAddon align={'inline-start'}>
                <Mail />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel>{t('subject-field-label')}</FieldLabel>
            <InputGroup withBackground>
              <InputGroupInput />
              <InputGroupAddon align={'inline-start'}>
                <Tag />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
        <Field>
          <FieldLabel>{t('message-field-label')}</FieldLabel>
          <InputGroup withBackground>
            <InputGroupTextarea className='min-h-48' />
          </InputGroup>
        </Field>
        <Button className='sm:ml-auto sm:w-fit sm:px-32'>
          <Send />
          {t('submit-button')}
        </Button>
      </FieldGroup>
    </form>
  )
}
