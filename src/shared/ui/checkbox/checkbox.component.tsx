import clsx from 'clsx'
import type { ChangeEvent, ReactNode } from 'react'
import { memo } from 'react'

import { IconComponent } from '../icon'

interface ICheckboxProperties {
  checked: boolean
  label?: ReactNode
  onChange: (value: boolean) => void
}

const defaultClassNames =
  'w-[1.04167rem] min-w-[1.04167rem] h-[1.04167rem] rounded-[0.28rem] border-basic border-gray shadow-basic overflow-hidden mt-[0.4rem]'

export const Checkbox = memo((props: ICheckboxProperties) => {
  const { checked, label, onChange } = props

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked: nativeChecked } = e.target

    onChange(nativeChecked)
  }

  return (
    <label className="flex w-fit cursor-pointer select-none gap-[0.83rem]">
      {checked ? (
        <div
          className={clsx(
            defaultClassNames,
            'flex items-center justify-center bg-primary',
          )}
        >
          <IconComponent name="check" className="w-[0.83333rem]" />
        </div>
      ) : (
        <div className={clsx(defaultClassNames)} />
      )}
      {label}

      <input type="checkbox" className="hidden" onChange={changeHandler} />
    </label>
  )
})
