import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
  Image,
  Flex
} from '@chakra-ui/react'
import { useRef } from 'react'

import { FiSidebar, FiLogOut, FiActivity, FiLock } from 'react-icons/fi'
import logo from '../../../public/assets/kakau_logo.svg'

const SideBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex background="#FFFFFF" height="100vh" padding="2">
      <Button ref={btnRef} color="#2e633f" onClick={onOpen}>
        <FiSidebar />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        colorScheme="green"
      >
        <DrawerContent>
          <DrawerHeader pt="10">
            <Image width="150px" src={logo} />
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody mt={2}>
            <Flex flexDirection="column">
              <Button
                mb={2}
                variant="outline"
                size="sm"
                leftIcon={<FiActivity />}
              >
                Dashboard
              </Button>
              <Button size="sm" leftIcon={<FiLock />}>
                Bloqueados
              </Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="center">
            <Button
              width="100%"
              variant="outline"
              color="#b23b3b"
              mr={3}
              onClick={onClose}
              borderColor="#b23b3b"
              leftIcon={<FiLogOut />}
              fontWeight="medium"
              fontSize="sm"
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export { SideBar }
