import clsx from 'clsx'
import type { ChangeEvent, InputHTMLAttributes } from 'react'
import { memo, useState } from 'react'

interface IInputProperties
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string) => void
  error?: string

  label?: string
}

export const Input = memo((props: IInputProperties) => {
  const { onChange, label, error, ...nativeProperties } = props

  const [isFocus, setIsFocus] = useState(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    onChange(value)
  }

  return (
    <div>
      {label && <p>{label}</p>}
      <div
        className={clsx(
          'rounded-[0.69rem] border-basic p-[0.76rem] shadow-basic transition-[border] duration-300',
          error && 'border-error',
          isFocus && 'border-primary',
        )}
      >
        <input
          {...nativeProperties}
          onChange={changeHandler}
          className="w-full outline-none placeholder:text-placeholder"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
      {error && <p className="mt-[0.21rem] text-xs text-error">{error}</p>}
    </div>
  )
})
