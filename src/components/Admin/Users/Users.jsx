import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';


const Users = () => {
  //creating temp users array
  const users = [
    {
      _id: 'vfhdkjdfjkghhljlkh',
      name: 'Aditya lad',
      email: 'adi@gmail.com',
      role: 'admin',
      subscription: {
        status: 'active',
      },
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} mt={['100px', '30px']} overflow={'auto'} mb={'25px'}>
        <Heading
          children={' ALL USERS'}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          w={'fit-content'}
          p={'20px'}
          bg={'rgb(26,32,44)'}
          color={'white'}
          borderRadius={'30px'}
          ml={['125', '300']}
          mt={'5'}
          textAlign={['center', 'center']}
        />
        <TableContainer mt={'15px'} w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row
                  updateHandler={updateHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        #
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={() => updateHandler(item._id)} colorScheme="purple">
            Change Role
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            colorScheme="purple"
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
