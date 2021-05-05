import { Flex } from '@chakra-ui/layout'
import { EditBlockedUserModal } from '../components/Dialogs/EditBlockedUserModal'
import { ConfirmUnblockUserModal } from '../components/Dialogs/ConfirmUnblockUserModal'
import { SideBar } from '../components/SideBar'
import { CustomTable } from '../components/Table'
import { useDisclosure } from '@chakra-ui/react'

export default function Home() {
  const editBlockedUserModalController = useDisclosure()
  const unlockBlockedUserModalController = useDisclosure()

  return (
    <>
      <Flex>
        <SideBar />

        <Flex
          px={3}
          flex={1}
          bgColor="#f3f9f5"
          justifyContent="center"
          alignItems="center"
        >
          <CustomTable
            editModalOnOpen={editBlockedUserModalController.onOpen}
            unblockModalOnOpen={unlockBlockedUserModalController.onOpen}
          />

          <EditBlockedUserModal
            isOpen={editBlockedUserModalController.isOpen}
            onClose={editBlockedUserModalController.onClose}
          />

          <ConfirmUnblockUserModal
            isOpen={unlockBlockedUserModalController.isOpen}
            onClose={unlockBlockedUserModalController.onClose}
          />
        </Flex>
      </Flex>
    </>
  )
}
