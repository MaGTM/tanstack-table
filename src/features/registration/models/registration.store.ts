import { create } from 'zustand'

import type { StateSchema } from './registration.types'
import { UserType } from './registration.types'

export const registrationStore = create<StateSchema>((setState) => ({
  type: UserType.Specialist,
  setType: (type) => {
    setState({ type })
  },
}))
