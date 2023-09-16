import { Heading, Container, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {

  const [password, setPassword] = useState('');

//params for reset password token 
  const params = useParams();

  console.log(params.token)
  return (
    <Container py={'16'} height={'85vh'}>
      <form>
        <Heading
        boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
          children="Reset Password ! "
          color={'blue.600'}
          my={'16'}
          borderBottom={'1px'}
        borderTop={'1px'}
        borderRadius={'30px'}
          textTransform={'uppercase'}
          textAlign={['center', 'center']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter new password"
            type={'password'}
            focusBorderColor="blue.200"
          />
          <Button type='submit' width={"full"} colorScheme='blue'>Reset Password</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
