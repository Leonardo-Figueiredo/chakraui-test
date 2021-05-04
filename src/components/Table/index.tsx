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
  Center
} from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'

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

const CustomTable: React.FC = () => {
  return (
    <Flex
      bgColor="#fff"
      shadow="md"
      flex={1}
      maxWidth="800px"
      justifyContent="center"
      p={5}
    >
      <Table bgColor="#FFF" maxWidth="600px" variant="simple">
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
            <Th>Ação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>{user.name}</Td>
              <Td>{user.cpf}</Td>
              <Td>
                <FiAlertCircle color="#3e7650" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}

export { CustomTable }
