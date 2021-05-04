import { Flex } from '@chakra-ui/layout'
import { SideBar } from '../components/SideBar'
import { CustomTable } from '../components/Table'

export default function Home() {
  return (
    <div>
      <Flex>
        <SideBar />

        <Flex
          px={3}
          flex={1}
          bgColor="#f3f9f5"
          justifyContent="center"
          alignItems="center"
        >
          <CustomTable />
        </Flex>
      </Flex>
    </div>
  )
}
