import { Container, Heading, Textarea, VStack } from '@chakra-ui/react';

import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container h={'92vh'} mt={'100px'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'0'} mt={''}>
        <Heading
          my={'16'}
          borderBottom={'1px'}
          borderTop={'1px'}
          borderRadius={'30px'}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          p={'8'}
          textTransform={'uppercase'}
          textAlign={['center', 'center']}
          children={'CONTACT US  ☎️ '}
        />
        <form style={{ width: '100%' }} />

        {/* <Heading  children={'Contact Us'} /> */}
        <form style={{ width: '100%', marginBottom: '200px' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              type={'text'}
              focusBorderColor="purple.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              type={'email'}
              focusBorderColor="purple.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message.."
              focusBorderColor="purple.500"
            />
          </Box>

          <Button
            alignSelf={'center'}
            my={'4'}
            width={'100%'}
            colorScheme="purple"
            type="submit"
          >
            Send Mail
          </Button>
          <Box alignItems={'center'} my={'4'}>
            Request for a course ?
            <Link to={'/request'}>
              <Button
                colorScheme="purple"
                marginLeft={'10px'}
                mr={'10px'}
                variant={'outline'}
              >
                {' '}
                Click{' '}
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
