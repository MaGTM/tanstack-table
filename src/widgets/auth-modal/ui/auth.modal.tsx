import { LoginForm } from '@features/login'
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

  const closeHandler = () => {
    onModalClose()
    setScreen(AuthScreens.Login)
  }

  return (
    <Modal isOpen={isOpen} onModalClose={closeHandler}>
      {screen === AuthScreens.Registration && (
        <RegistrationForm goLogin={() => setScreen(AuthScreens.Login)} />
      )}
      {screen === AuthScreens.Login && (
        <LoginForm goRegistration={() => setScreen(AuthScreens.Registration)} />
      )}
    </Modal>
  )
}
