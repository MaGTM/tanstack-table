import { create } from 'zustand'

import type { StateSchema } from './auth-modal.types'
import { AuthScreens } from './auth-modal.types'

export const useAuthModalStore = create<StateSchema>((setState) => ({
  screen: AuthScreens.Login,
  setScreen: (screen) => {
    setState({ screen })
  },
}))
