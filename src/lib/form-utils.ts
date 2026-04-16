import { AnyFieldApi } from '@tanstack/react-form'
import { ReactNode } from 'react'

export function isFieldInvalid(field: AnyFieldApi) {
  const { isTouched, isBlurred, isValid } = field.state.meta

  return isTouched && isBlurred && !isValid
}

export function fieldToInputProps(field: AnyFieldApi) {
  return {
    id: field.name,
    name: field.name,
    value: field.state.value,
    onBlur: field.handleBlur,
    onChange: (e: { target: { value: string } }) =>
      field.handleChange(e.target.value),
    ['aria-invalid']: isFieldInvalid(field),
  }
}

export function withErrors<T extends AnyFieldApi>(
  field: AnyFieldApi,
  comp: (errors: T['state']['meta']['errors']) => ReactNode,
) {
  return isFieldInvalid(field) && comp(field.state.meta.errors)
}
