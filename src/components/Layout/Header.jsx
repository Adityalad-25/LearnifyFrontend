// import React, { useEffect, useState } from 'react';
import ColorModeSwitcher from '../../ColorModeSwitcher';
import logo from '../../assets/images/brandlogo.png';

import { HStack, Heading, Image, Stack, VStack } from '@chakra-ui/react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button colorScheme="purple">{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;
  const user = {
    role: 'admin',
  };

  // logout button function
  const logoutHandler = () => {
    console.log('Logout');
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
       className='btn-glow'
        onClick={onOpen}
        size={'50px'}
        colorScheme={'purple'}
        width="12"
        height={'12'}
        rounded="full"
        zIndex={'overlay'}
        position={'fixed'}
        top="6"
        left="6"
        fontWeight={'bold'}
        //  bgColor={currentColor}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader alignContent={'center'}>
            {' '}
            <Stack direction={['row','row']} >
            <Link to={'/'}>
             <Image
          className="logo loginimg"
          boxSize={['', 'xsm']}
          src={logo}
          objectFit={'contain'}
          margin-top={0}
        />
        </Link>
        <Link to={'/'}>
              <Heading
                className="learnify animate-charcter"
                cursor={'pointer'}
                children="Learnify" //content of the heading
                textAlign={'Center'}
                alignContent={'center'}
                size={['xl', 'xl']}
                fontSize="100px"
                mt={['35px']}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                borderBottomColor={'purple.200'}
                borderBottomWidth={'2px'}
              />{' '}
            </Link>
            </Stack>
         
    
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'8'}>
              <LinkButton onClose={onClose} url="/" title="Home 🏡" />
              <LinkButton onClose={onClose} url="/about" title="About 👨‍💻" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses 🔎"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a Course 🪬"
              />
              <LinkButton
                onClose={onClose}
                url="/contact"
                title="Contact Us 📱"
              />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button colorScheme={'blue'}>Profile 👨🏻‍🏫</Button>
                        </Link>
                        <Button onClick={logoutHandler} colorScheme={'red'}>
                          <RiLogoutBoxLine />
                          Logout 📴
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme="whatsapp">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'blue'}>Login 🚀</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={'green'}>Sign Up ↗️</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
