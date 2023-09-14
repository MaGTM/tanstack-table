import { useModal } from '@shared/lib/hooks'
import { AuthModal } from '@widgets/auth-modal'

export const HomePage = () => {
  const { isOpen, toggleHandler } = useModal()

  return (
    <div>
      <button onClick={toggleHandler}>modal</button>

      <AuthModal onModalClose={toggleHandler} isOpen={isOpen} />
    </div>
  )
}
