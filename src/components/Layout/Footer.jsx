import { Box, Button, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';


const Footer = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Box
        padding={'4'}
        bg={'rgb(26,32,44)'}
        boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}
        minH={'20vh'}
        minW={'50%'}
        // borderRight={'0.5px solid '}
        alignItems={['center', 'center']}
        justifyContent={'center'}
      >
        <Stack direction={['column', 'row']}>
        
          <VStack alignItems={['center', 'center']} width={'full'}>
           

            <VStack color={'purple.200'}>
              <HStack
                //  boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                 p={'20px'}
                spacing={['1', '10']}
                justifyContent={'center'}
                className="social-icons"
                color={'purple.200'}
                fontSize={'50'}
              >
                <a
                  className="youtube"
                  href="https://youtube.com"
                  target="blank"
                  rel="noreferrer"
                >
                  <TiSocialYoutubeCircular />
                </a>
                <a
                  className="github"
                  href="https://github.com/Adityalad-25"
                  target="_blank"
                  rel="noreferrer"

                >
                  <DiGithub />
                </a>
                <a
                  className="linkdein"
                  href="https://www.linkedin.com/in/adityalad2003/"
                  target="blank"
                  rel="noreferrer"
                  
                >
                  <TiSocialLinkedinCircular />
                </a>
                <a
                  className="insta"
                  href="https://www.instagram.com/_adi_ty_a/"
                  target="blank"
                  rel="noreferrer"
                >
                  <TiSocialInstagramCircular />
                </a>
               
              </HStack>
              <Heading
              className="footer-heading"
              fontSize={'md'}
              children=" © 2023 Learnify All Rights Reserved"
              color={'white'}
              size="lg"
            />
            </VStack>
            <HStack my={''} p={'0'}>
              <RiSecurePaymentFill color={'white'} size={['40px']} />
              <Heading
                size={['sm', 'sm']}
                borderBottom={'2px'}
                fontFamily={'sans-serif'}
                textTransform={'uppercase'}
                color={'white'}
                children={'Payment is Secured By Razorpay'}
              />
            </HStack>
          </VStack>
        </Stack>
      </Box>
      <Box
        padding={'4'}
        bg={'rgb(26,32,44)'}
        boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}
        minH={'15vh'}
        minW={'50%'}
        alignItems={['center', 'center']}
        justifyContent={'center'}
      >
        <Stack direction={['column', 'row']}>
          <VStack alignItems={['center', 'center']} width={'full'}>
            <Heading
                // boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                p={'5px'}
              className="footer-heading"
              children="Quick Links 👇"
              color={'white'}
              size="lg"
            />
            <Stack direction={['column', 'row']} 
              //  boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
               p={'15px'}
            spacing={'5'} color={'white'}>
              <Link to={'/'}
              target="_blank"
              rel="noreferrer"
              >
                <Button> Home 🏡 </Button>
              </Link>
              <Link   target="_blank"
              rel="noreferrer" to={'/about'}>
                <Button children={'About 👨‍💻'} />
              </Link>
              <Link   target="_blank"
              rel="noreferrer" to={'/courses'}>
                <Button children={'Courses 🎓'} />
              </Link>
              <Link   target="_blank"
              rel="noreferrer" to={'/subscribe'}>
                <Button children={ '  Buy Course 📚'} />
              </Link>
              <Link to={'/contact'}
              target="_blank"
              rel="noreferrer"
              >
                <Button children={'Contact Us 📲'} />
              </Link>
            </Stack>
            <Link
             target="_blank"
              rel="noreferrer"
             to={'https://adityalad-25.github.io/portfoliowebsite/'}>
              <Heading
                mt={'10px'}
                cursor={'pointer'}
                fontFamily={'cursive'}
                children="Founder & Developer @ Aditya Lad "
                color={'purple.200'}
                size={'md'}
                borderBottom={'2px'}
                rel="noreferrer"
              />
            </Link>
          </VStack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Footer;
