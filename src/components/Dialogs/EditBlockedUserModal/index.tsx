import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
  FormControl,
  FormLabel,
  Box,
  VStack,
  HStack
} from '@chakra-ui/react'

interface EditBlockedUserModalProps {
  isOpen: boolean
  onClose(): void
}

const EditBlockedUserModal: React.FC<EditBlockedUserModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar usuário bloqueado</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Kazap Developer" size="sm" />
              </Box>
              <Box mt={4}>
                <FormLabel>CPF</FormLabel>
                <Input placeholder="123.123.123-12" size="sm" />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { EditBlockedUserModal }
