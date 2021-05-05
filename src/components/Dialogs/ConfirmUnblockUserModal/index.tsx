import {
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogFooter
} from '@chakra-ui/react'
import { useRef } from 'react'

interface ConfirmUnblockUserModalProps {
  isOpen: boolean
  onClose(): void
}

const ConfirmUnblockUserModal: React.FC<ConfirmUnblockUserModalProps> = ({
  isOpen,
  onClose
}) => {
  const cancelRef = useRef()

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Desbloquear usuário
          </AlertDialogHeader>

          <AlertDialogBody>
            Tem certeza que deseja debloquear Kazap Developer?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export { ConfirmUnblockUserModal }
