import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { TiSocialInstagram, TiSocialLinkedinCircular } from 'react-icons/ti';

import { FiLogIn } from 'react-icons/fi';
import { DiGithub } from 'react-icons/di';
import { Link } from 'react-router-dom';
import video from '../../assets/videos/LEARNIFYINTRO.mp4';
import { FaUserCircle } from 'react-icons/fa';
// creating founder compenent
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar

       className='aditya-img  btn-glow'
        // boxShadow="0px 0px 50px rgba(107, 70, 193, 0.5)"
      
        border={['3px solid ']}
        borderColor={'purple.200'}
        src="https://avatars.githubusercontent.com/u/97255480?v=4"
        boxSize={['40', '48']}
      />
      <Text fontWeight={'10'} children="Founder" />
      <HStack
        spacing={['1', '5']}
        justifyContent={'center'}
        className="social-icons"
        fontSize={'40'}
      >
        <a
          className="youtube portfolio"
          href="https://adityalad-25.github.io/portfoliowebsite/"
          target="blank"
        >
          <FaUserCircle />
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
        >
          <TiSocialLinkedinCircular />
        </a>
        <a
          className="insta"
          href="https://www.instagram.com/_adi_ty_a/"
          target="blank"
        >
          <TiSocialInstagram />
        </a>
      </HStack>
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading className="aditya" children="Aditya Lad" size={['md', 'xl']} />

      <Text
        className="learnify-about"
        fontFamily={'cursive'}
        textAlign={['center', 'left']}
        children={
          " Hi, I'm a Full-Stack Web Developer and the Founder of Learnify, an online platform dedicated to tech education. With a passion for coding and learning, I'm committed to empowering individuals to excel in the digital world. Join me on this exciting journey of tech exploration at Learnify! At Learnify, we believe that technology has the power to transform lives, and we're here to help you unlock your full potential in the ever-evolving tech landscape"
        }
      />
    </VStack>
  </Stack>
);

// creating VideoPlayerComponent
const VideoPlayer = () => (
  <Box alignSelf={'center'} justifyContent={'center'} alignItems={'center'}>
    <video
      autoPlay
      
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      loop
      src={video}
     
    ></video>
  </Box>
);

// creating TandC component

const About = () => {
  return (
    <Container
      maxW={'container.lg'}
      padding={'16'}
      boxShadow={'lg'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      alignContent={'center'}
    >
      <Heading
        boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        // fontFamily={'cursive'}
        p={'20px'}
        borderBottom={'1px'}
        borderTop={'1px'}
        borderRadius={'30px'}
        children={'🤔 About Learnify'}
        textAlign={['center', 'center']}
      />

      <Founder />
      <Stack
        m={'8'}
        direction={['column', 'row']}
        alignItems={'center'}
        p={['10px', '20px']}
        boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      >
        <Text
          className="learnify-about"
          // fontFamily={'cursive'}
          m={'8'}
          textAlign={['center', 'center']}
        >
          Learnify is a cutting-edge video streaming platform designed to
          revolutionize your learning experience. With an extensive library of
          courses spanning diverse tech-related topics like web development, app
          development, machine learning, data science, and more, we provide the
          ools you need to succeed in today's digital landscape.
          {/* tOur
          user-friendly interface and interactive content make learning engaging
          and accessible to learners of all levels. Join Learnify, where
          knowledge meets innovation, and unlock your full potential in the tech
          world. */}
        </Text>
        <Link to={'/subscribe'}>
          <Button
           className='btn-glow'
            colorScheme="purple"
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          >
            Checkout our plan{' '}
            <FiLogIn style={{ marginLeft: '4px', fontsize: '20px' }} />{' '}
          </Button>
        </Link>
      </Stack>

      <VStack>
        <VideoPlayer />

        <VStack mt={'20px'} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
          <Heading
            fontSize={['lg']}
            align
            children={'Terms & Conditions'}
            mt={'5px'}
          />
          <Text
            className="learnify-about"
            m={'8'}
            textAlign={['center', 'center']}
          >
            "All users must agree to abide by our platform's code of conduct and
            community guidelines." 'Payment for subscriptions is non-refundable
            after 7 days from the date of purchase.' 'Users are responsible for
            maintaining the confidentiality of their login credentials.' 'Any
            unauthorized access to the platform is strictly prohibited.',
            'Content available on the platform is for educational purposes only
            and should not be considered professional advice.' 'Users are
            prohibited from sharing, copying, or distributing course materials
            without permission.' 'We reserve the right to suspend or terminate
            user accounts for violating our policies.' 'Instructors are
            responsible for the accuracy and quality of their course content.'
            'Users may report inappropriate content or behavior for review by
            our team.' 'We may update these terms and conditions periodically,
            and users are responsible for staying informed about changes.'
            
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default About;
