import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/images/brandlogo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container h={'100vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'10'}>
        <Link to="/">
          <Image
           mt={'100px'}
            className="loginimg"
            boxSize={'150px'}
            src={logo}
            objectFit={'contain'}
          />
        </Link>

        <Heading className='animate-charcter' children={' "Welcome to Learnify" '} />
        <form style={{ width: '100%', marginBottom: '200px' }}>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your Password"
              type={'password'}
              focusBorderColor="purple.500"
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button borderBottom={'2px'} fontSize={'sm'}>
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button
            alignSelf={'center'}
            my={'4'}
            width={'100%'}
            colorScheme="purple"
            type="submit"
          >
            Login
          </Button>
          <Box alignItems={'center'} my={'4'}>
            New User ?
            <Link to={'/register'}>
              <Button colorScheme='purple' marginLeft={'10px'} mr={'10px'} variant={'outline'}> Sign Up</Button>
                {' '} here 
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
