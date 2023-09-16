import { Box, Button, HStack, Stack, VStack } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
// import imageone from "../../assets/images/imageone.png"
// import imagetwo from "../../assets/images/degreehat.png"
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { DiAws } from 'react-icons/di';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import video from '../../assets/videos/LEANIFYABOUT.mp4';
import React, { useEffect, useRef } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
     // Play the video when the component is mounted
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="home">
      <div className="container">
        <Stack
          mt={'40px'}
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '26']}
        >
          <VStack
            width={'full'}
            alignItems={['center']}
            spacing={'7'}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
            p={'50px'}
            ml={['0', '50px']}
          >
            <Heading
              // className="animate-charcter"
              className="main-title"
              textAlign={['center']}
              borderBottom={'1px'}
              boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
              borderTop={'1px'}
              p={'20px'}
              borderRadius={'10px'}
              children="Learn from Industry Gurus 🎓 "
              size={'xl'}
              fontSize="30px"
            />
            <Text
              className=""
              textAlign={['center', 'left']}
              borderBottom={'1px'}
              borderBottomRadius={'10px'}
              p={'10px'}

              children="Quality Content at Wallet-Friendly Prices"
              fontFamily={''}
              fontSize="20px"
            />
            <Link to="/courses">
              <Button className='btn-glow' size={'lg'} colorScheme="purple">
                Explore Now 🚀
              </Button>
            </Link>
            <Link to={'/subscribe'}>
              <Button   colorScheme="purple">
                Checkout our plans{' '}
                <FiLogIn style={{ marginLeft: '4px', fontsize: '20px' }} />{' '}
              </Button>
            </Link>
          </VStack>
          <div className="container2">
            <video
             className='btn-glow'
              autoPlay
              controls
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              loop
              ref={videoRef}
              src={video}
              muted
            ></video>
          </div>
        </Stack>
      </div>


      <div className="container3">
        {/* <Image
          className="logo loginimg"
          boxSize={['sm', 'sm']}
          src={logo}
          objectFit={'contain'}
          margin-top={0}
        /> */}

        <Heading
          className="learnify animate-charcter"
          children="Learnify"
          size={['4xl', '6xl']}
          fontSize="100px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        />
      </div>

      <Box
        boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        padding={'5'}
        bg={'rgb(26,32,44)'}
      >
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'purple.300'}
          children="OUR SPONSORS"
        />

        <HStack
          className="sponsor-icons"
          justifyContent={'space-evenly'}
          marginTop={'4'}
          p={'10px'}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
    </section>
  );
};

export default Home;
