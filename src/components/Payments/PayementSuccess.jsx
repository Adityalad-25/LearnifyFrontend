import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PayementSuccess = () => {
  return (
    <Container mt={'5px'} h={'90vh'} p={'16'}>
      <Heading my={'8'} fontSize={['md', '3xl']} textAlign={'center'}>
        You have Pro Pack Now ! 
      </Heading>
      <VStack
        textAlign={'center'}
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          w={'full'}
          bg={'green.300'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text fontSize={'lg'} fontWeight={'600'} color={'black'}>
            Payement Successfull ✅
          </Text>
        </Box>
        <Box p={'4'}>
          <VStack
          textAlign={'center'}
          px={'8'} mt={'4'} spacing={'8'}
          >
          <Text>
          🥳 Congratulations you are a pro member you have access to Premiun Content 
          </Text>
          <Heading
           color={'green.300'}
           size={'2xl'}
          >
         <RiCheckboxCircleFill/>
          </Heading>

          </VStack>
        </Box>
        <Link to={'/profile'} >
         <Button colorScheme='purple'>
         Go to Profile ↗️
         </Button>
        </Link>
        <Heading mt={'7px'} fontSize={'sm'}> 
         Reference : dfhgghkghjkkkjhggjktrhgkljrt
        </Heading>
      </VStack>
    </Container>
  );
};

export default PayementSuccess;
