import { Container, Heading, Textarea, VStack } from '@chakra-ui/react';

import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  return (
    <Container h={'92vh'} mt={'10px'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'0'}>
        <Heading
          my={'16'}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          p={'8'}
          borderBottom={'1px'}
        borderTop={'1px'}
        borderRadius={'30px'}
          textTransform={'uppercase'}
          textAlign={['center', 'center']}
          children={'Request New Course '}
        />
        <form style={{ width: '100%' }}>
          {/* <Heading
        boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
          children="REQUEST A NEW COURSE ! "
         
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'center']}
        /> */}

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
            <FormLabel htmlFor="Course" children="Course" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Enter Course  details you want to enroll in .."
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
            Send Request
          </Button>
          <Box alignItems={'center'} my={'4'}>
            See Available Courses !
            <Link to={'/courses'}>
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

export default Request;
