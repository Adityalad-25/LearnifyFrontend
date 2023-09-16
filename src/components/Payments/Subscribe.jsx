import {
  Box,
  Button,
  Container,
  
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p={'16'}>
      <Heading 
         boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
         p={'10px'}
       children={'Welcome'} m={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
        textAlign={'center'}
      >
        <Box bg={'purple.200'} p={'4'} css={{ borderRadius: '8px 8px 8 0' }}>
          <Heading
            fontSize={'md'}
            color={'black'}
            children={'Pro Pack - ₹399.00'}
          />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text
              children={' 🎯 Join Pro Pack and get Access to all content 🚀'}
            />
            <Heading size={'md'} children={'₹399 Only '} />
          </VStack>

          {/* my:-margin vertical y-axis */}
          <Button my={'8'} w={'full'} colorScheme={'purple'}>
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'purple.200'}
          p={'4'}
          spacing={'6'}
          color={'black'}
          css={{ borderRadius: '0 0 8px 8 px' }}
        >
          <Heading size={'sm'} 
          textTransform={'uppercase'}
          children={'100% refund at cancellation'} />
         <Text mt={'2'} borderBottom={'1px'} fontSize={'sm'}  children={'Terms & Conditions Apply*'}/>
         
        </Box>
      </VStack>

    </Container>
  );
};

export default Subscribe;
