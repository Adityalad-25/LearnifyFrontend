import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <Container textAlign={'center'} py={'16'} minH={'90vh'}>
      <form>
        <Heading
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          p={'8'}
          textTransform={'uppercase'}
          children={'Change Password 🔐'}
          my={'16'}
          textAlign={['center', 'center']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Enter Old Password"
            type={'password'}
            focusBorderColor="purple.200"
          />
          <Input
            required
            id="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
            type={'password'}
            focusBorderColor="purple.200"
          />

          <Button
            w={'full'}
            type={'submit'}
            colorScheme="purple"
            children={'Change'}
          />
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
