import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import { memo } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface IButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string

  variant?: ButtonVariant
  className?: string
}

const defaultClasses = 'w-full py-[0.76rem] rounded-[1.11rem] disabled:opacity-50'

export const Button = memo((props: IButtonProperties) => {
  const { variant = 'primary', text, className, ...nativeProperties } = props

  const buttonClassNames = () => {
    switch (variant) {
      case 'primary': {
        return 'bg-primary text-white'
      }
      case 'secondary': {
        return 'bg-white border-basic border-primary text-primary'
      }
      default:
    }
  }

  return (
    <button
      type="button"
      {...nativeProperties}
      className={clsx(defaultClasses, buttonClassNames(), className)}
    >
      {text}
    </button>
  )
})
