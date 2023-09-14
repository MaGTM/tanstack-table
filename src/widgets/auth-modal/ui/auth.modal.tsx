import { RegistrationForm } from '@features/registration'
import { Modal } from '@shared/ui/modal'

import { useAuthModalStore } from '../models/auth-modal.store'
import { AuthScreens } from '../models/auth-modal.types'

interface IAuthModalProperties {
  isOpen: boolean
  onModalClose: VoidFunction
}

export const AuthModal = (props: IAuthModalProperties) => {
  const { isOpen, onModalClose } = props

  const { screen, setScreen } = useAuthModalStore()

  return (
    <Modal isOpen={isOpen} onModalClose={onModalClose}>
      {screen === AuthScreens.Registration && (
        <RegistrationForm goLogin={() => setScreen(AuthScreens.Login)} />
      )}
      {screen === AuthScreens.Login && <div />}
    </Modal>
  )
}
