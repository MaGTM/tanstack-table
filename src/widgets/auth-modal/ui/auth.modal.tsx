import { RegistrationForm } from '@features/registration'
import { Modal } from '@shared/ui/modal'

interface IAuthModalProperties {
  isOpen: boolean
  onModalClose: VoidFunction
}

export const AuthModal = (props: IAuthModalProperties) => {
  const { isOpen, onModalClose } = props

  return (
    <Modal isOpen={isOpen} onModalClose={onModalClose}>
      <RegistrationForm />
    </Modal>
  )
}
