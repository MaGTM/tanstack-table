import { genericMemo } from '@shared/lib/utils'
import type { InputHTMLAttributes } from 'react'
import type { FieldValues, UseControllerProps } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { Input } from './input.component'

interface IControlledInputProperties<T extends FieldValues>
  extends UseControllerProps<T>,
    Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'readOnly'> {
  label?: string
}

export const ControlledInput = genericMemo(
  <T extends FieldValues>(props: IControlledInputProperties<T>) => {
    const { control, name, ...nativeInputProperties } = props

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <Input {...nativeInputProperties} onChange={onChange} error={error?.message} />
        )}
      />
    )
  },
)
