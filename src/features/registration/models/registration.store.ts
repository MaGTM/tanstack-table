import { create } from 'zustand'

import type { StateSchema } from './registration.types'
import { UserType } from './registration.types'

export const useRegistrationStore = create<StateSchema>((setState) => ({
  type: UserType.Specialist,
  setType: (type) => {
    setState({ type })
  },
}))
