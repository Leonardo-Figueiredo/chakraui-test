import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  HStack,
  Button
} from '@chakra-ui/react'
import { FiEdit, FiUnlock } from 'react-icons/fi'

const users = [
  {
    name: 'Kazap Developer',
    cpf: '123.123.123-12'
  },
  {
    name: 'Kazap Developer',
    cpf: '123.123.123-12'
  },
  {
    name: 'Kazap Developer',
    cpf: '123.123.123-12'
  },
  {
    name: 'Kazap Developer',
    cpf: '123.123.123-12'
  },
  {
    name: 'Kazap Developer',
    cpf: '123.123.123-12'
  }
]

interface CustomTableProps {
  editModalOnOpen(): void
  unblockModalOnOpen(): void
}

const CustomTable: React.FC<CustomTableProps> = ({
  editModalOnOpen,
  unblockModalOnOpen
}) => {
  return (
    <Flex
      bgColor="#fff"
      shadow="md"
      flex={1}
      maxWidth="1200px"
      justifyContent="center"
      p={5}
    >
      <Table bgColor="#FFF" variant="simple">
        <TableCaption
          textAlign="left"
          fontSize="larger"
          fontWeight="bold"
          placement="top"
        >
          Bloqueados
        </TableCaption>

        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th textAlign="center">Ação</Th>
          </Tr>
        </Thead>

        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td maxWidth="300px">{user.name}</Td>
              <Td width="200px">{user.cpf}</Td>
              <Td width="80px" textAlign="end">
                <HStack>
                  <Button
                    p={1}
                    variant="outline"
                    size="sm"
                    onClick={editModalOnOpen}
                  >
                    <FiEdit color="#3e7650" />
                  </Button>
                  <Button
                    p={1}
                    variant="outline"
                    size="sm"
                    onClick={unblockModalOnOpen}
                  >
                    <FiUnlock color="#3e7650" />
                  </Button>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>

        <Tfoot></Tfoot>
      </Table>
    </Flex>
  )
}

export { CustomTable }
