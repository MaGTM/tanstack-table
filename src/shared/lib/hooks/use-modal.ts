import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openHandler = () => {
    setIsOpen(true)
  }

  const closeHandler = () => {
    setIsOpen(false)
  }

  const toggleHandler = () => {
    setIsOpen((previousState) => !previousState)
  }

  return {
    toggleHandler,
    openHandler,
    closeHandler,
    isOpen,
  }
}
