import { Button, Container, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import image from '../../assets/images/notfound.jpg';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <Container
      h={'55vh'}
      mt={'80px'}
      mb={'90px'}
      padding={'16'}
      boxShadow={'lg'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      alignContent={'center'}
    >
      {/* <Heading children={'Oops ! Something you are looking is not available'} /> */}
    <VStack>
    <Image mb={'20px'} ml={['0px','30px']} alignSelf={'center'} src={image} />
      <Link to={'/'} >
      <Button colorScheme='purple'
      >Go to Home 🏡 </Button>
      </Link>
     
    </VStack>
     
    </Container>
  );
};

export default NotFound;
