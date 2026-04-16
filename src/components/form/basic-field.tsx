import { fieldToInputProps, isFieldInvalid, withErrors } from '@/lib/form-utils'
import { AnyFieldApi } from '@tanstack/react-form'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { ComponentProps, ComponentType, ReactNode } from 'react'

type FormLimitedApi = {
  Field: ComponentType<{
    name: string
    children: (field: AnyFieldApi) => ReactNode
  }>
}

type Props<Form extends FormLimitedApi> = {
  form: Form
  name: ComponentProps<Form['Field']>['name']
  label: Omit<ComponentProps<typeof FieldLabel>, 'htmlFor'>
  children: (props: ReturnType<typeof fieldToInputProps>) => ReactNode
} & Omit<ComponentProps<typeof Field>, 'children'>

/**
 * A basic field component to avoid tanstack form verbosity.
 * It adds a label above and errors below.
 */
export function BasicFormField<Form extends FormLimitedApi>({
  label,
  children,
  form,
  name,
  ...props
}: Props<Form>) {
  return (
    <form.Field name={name}>
      {(field) => (
        <Field data-invalid={isFieldInvalid(field)} {...props}>
          <FieldLabel htmlFor={field.name} {...label} />
          {children(fieldToInputProps(field))}
          {withErrors(field, (errors) => (
            <FieldError errors={errors} />
          ))}
        </Field>
      )}
    </form.Field>
  )
}
