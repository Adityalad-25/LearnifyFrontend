import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
//   import logo from '../../assets/images/brandlogo.png';
  import { Link } from 'react-router-dom';
  
 
  // css for choose profile/avatar image button
 export const fileUploadCss = {
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"purple",
    backgroundColor:"lavender"
  }
  const fileUploadStyle =  {
     "&::file-selector-button" : fileUploadCss,
   }
  


  const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('');
     // eslint-disable-next-line
 const [image, setImage] = useState('');

    const changeImageHandler = (e) => {
        const file  = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    return (
      <Container h={'95vh'} mt={'150px'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'10'}>
        {/* <Link to="/">
            <Image
             mt={'100px'}
              className="loginimg"
              boxSize={'50px'}
              src={logo}
              objectFit={'contain'}
            />
          </Link> */}
  
          <Heading  className='animate-charcter'  children={' "Sign Up to Learnify" '} />
          <form style={{ width: '100%', marginBottom: '200px' }}>
          <Box my={'4'} display={'flex'} justifyContent={"center"}>
          <Avatar src={imagePrev}  size={'xl'}/>

          </Box>
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
            <Box my={'4'}>
              <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
              <Input
               
                accept='image/*'
                id="chooseAvatar"
                placeholder="choose your profile image"
                type={'file'}
                focusBorderColor="purple.500"
                css={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </Box>
           
            <Button
              alignSelf={'center'}
              my={'4'} //my : margin vertical
              width={'100%'}
              colorScheme="purple"
              type="submit"
            >
             Sign Up
            </Button>
            <Box alignItems={'center'} my={'4'}>
              Already a User ?
              <Link to={'/login'}>
                <Button colorScheme='purple' marginLeft={'10px'} mr={'10px'} variant={'outline'}> Login </Button>
                  {' '} here 
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Register;
  