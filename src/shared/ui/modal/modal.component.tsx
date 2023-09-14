import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IModalProperties {
  onModalClose: VoidFunction
  isOpen: boolean
  children: ReactNode
}

const Modal = (props: IModalProperties) => {
  const { onModalClose, isOpen, children } = props

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 2,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 flex items-center justify-center bg-modal-overlay"
          onClick={onModalClose}
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            className="overflow-hidden rounded-[0.69444rem] bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Modal
