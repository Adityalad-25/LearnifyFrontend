import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container mt={'5px'} h={'90vh'} p={'16'}>
      <Heading my={'8'}
         boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
         p={'10px'}
       fontSize={['md', '3xl']} textAlign={'center'}>
       Sorry your Payment is not processed Properly!
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
          bg={'red.200'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text fontSize={'lg'} fontWeight={'600'} color={'black'}>
            Payement Unsuccessfull ❌
          </Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text>
             Try again later or Contact us if you are not  able to Purchase the plan 
            </Text>
          </VStack>
        </Box>
        <Link to={'/subscribe'}>
          <Button colorScheme="purple">Try Again 🔄</Button>
        </Link>
       
      </VStack>
    </Container>
  );
};

export default PaymentFail;
