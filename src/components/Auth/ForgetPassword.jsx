import { Heading, Container, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  return (
    <Container
      py={'16'}
      height={'85vh'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <form>
        <Heading
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          p={'8'}
          borderBottom={'1px'}
          borderTop={'1px'}
          borderRadius={'30px'}
          children="Forget Password ! "
          color={'red.600'}
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'center']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            type={'email'}
            focusBorderColor="red.300"
          />
          <Button type="submit" width={'full'} colorScheme="red">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
