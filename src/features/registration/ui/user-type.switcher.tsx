import clsx from 'clsx'
import { memo } from 'react'

import { registrationStore } from '../models/registration.store'
import { UserType } from '../models/registration.types'

const types = [
  {
    title: 'Специалист',
    value: UserType.Specialist,
  },
  {
    title: 'Ищу специалиста',
    value: UserType.User,
  },
]

export const UserTypeSwitcher = memo(() => {
  const { setType, type } = registrationStore()

  return (
    <div className="relative  mt-[2.08rem] h-[2.84722rem]  w-[20.13889rem] rounded-[1.25rem] shadow-basic">
      <div className="relative z-10 grid h-full w-full grid-cols-2 place-items-center font-medium">
        {types.map((item) => (
          <button
            className={clsx(
              type === item.value && 'text-white',
              'h-full w-full duration-300',
            )}
            onClick={() => setType(item.value)}
            type="button"
            key={item.value}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        className={clsx(
          'absolute top-0 z-0 h-full w-1/2 rounded-[1.25rem] bg-primary duration-300',
          type === UserType.Specialist ? 'left-0' : 'left-1/2',
        )}
      />
    </div>
  )
})
