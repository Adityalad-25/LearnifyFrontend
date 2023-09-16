import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <Modal
      alignItems={'center'}
      justifyContent={'center'}
      isOpen={isOpen}
      onClose={closeHandler}
    >
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader textAlign={'center'}>Choose Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  type={'file'}
                  onChange={changeImage}
                  css={{
                    '&::file-selector-button': fileUploadCss,
                  }}
                />
                <Button w={'full'} colorScheme="blue" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <VStack w={'100'}>
          <ModalFooter>
            <Button w={'100%'} mr="3" colorScheme="red" onClick={closeHandler}>
              Cancel
            </Button>
          </ModalFooter>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

const Profile = () => {
  const user = {
    name: 'Aditya Lad',
    email: 'adityalad2003@gmail.com',
    createdBy: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'web devp course',
        poster:
          'https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1.com',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };
  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container
      textAlign={['center', 'center']}
      minH={'95vh'}
      maxW={'container.lg'}
      py={'8'}
    >
      <Heading
        mt={['10', '10']}
        mb={'12px'}
        ml={['5rem','0']}
        size={['2xl', '2xl']}
        borderBottom={'1px'}
        borderTop={'1px'}
        borderRadius={'30px'}
        w={'max-content'}
        p={'20px'}
       
        // borderBottom={'2px'}
        className="learnify "
        children={'PROFILE 🧑🏻‍🏫'}
       
        // boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}
      />
      <Stack
        direction={['column', 'row']}
        justifyContent={'flex-start'}
        alignItems={'center'}
        spacing={['8', '16']}
        p={'8'}
      >
        <VStack
          mt={['-30px', '0px']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          p={'8'}
        >
          <Avatar
            border={'4px'}
            boxSize={['40', '48']}
            mb={'15px'}
            cursor={'pointer'}
          />
          <Button onClick={onOpen} colorScheme="purple">
            Change Profile picture
          </Button>
          <HStack>
            <Link to={'/updateprofile'}>
              <Button colorScheme="blue">Update Profile</Button>
            </Link>
            <Link to={'/logout'}>
              <Button colorScheme="red">Log Out</Button>
            </Link>
          </HStack>
          <Link to={'/changepassword'}>
            <Button colorScheme="yellow">Change Password</Button>
          </Link>
        </VStack>

        <VStack
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          p={'8'}
          spacing={['0', '4']}
          mt={['0', '1px']}
          alignItems={['center', 'flex-start']}
        >
          <HStack>
            <Text
              children={'🔸 Name : '}
              fontWeight={'bold'}
              fontSize={['xl', '2xl']}
            />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text
              children={'🔹Email : '}
              fontWeight={'bold'}
              fontSize={['xl', '2xl']}
            />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text
              children={'🔸 Joined : '}
              fontWeight={'bold'}
              fontSize={['xl', '2xl']}
            />
            <Text children={user.createdBy.split('T')[0]} />
          </HStack>

          <Stack p={'5px'}>
            {user.role !== 'admin' && (
              <HStack>
                <Text
                  fontWeight={'bold'}
                  fontSize={['mg', '2xl']}
                  children={'🔹 Subscription :'}
                />
                {user.subscription.status === 'active' ? (
                  <Button size={['sm', 'lg']} colorScheme="red">
                    Cancel Subscription
                  </Button>
                ) : (
                  <Link to={'/subscribe'}>
                    <Button colorScheme="purple">Subscribe</Button>
                  </Link>
                )}
              </HStack>
            )}
          </Stack>

          <Stack direction={['column', 'row']} alignItems={'center'}></Stack>
        </VStack>
      </Stack>

      <Heading size={'md'} children={'Playlist'} my={'8'} />

      <Stack boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} p={'8'}>
        {user.playlist.length > 0 && (
          <Stack
            direction={['column', 'row']}
            alignItems={'center'}
            flexWrap={'wrap'}
            p={'4'}
          >
            {user.playlist.map(element => (
              <VStack w={'48'} m={'2'} key={element.course}>
                <Link to={`/course/${element.course}`} cursor={'pointer'}>
                  <Image
                    boxSize={'full'}
                    objectFit="contain"
                    src={element.poster}
                  />
                </Link>

                <HStack>
                  <Link to={`/course/${element.course}`}>
                    <Button colorScheme="pink">Watch Now</Button>
                  </Link>
                  <Button
                    onClick={() => removeFromPlaylistHandler(element.course)}
                    colorScheme="purple"
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            ))}
          </Stack>
        )}
      </Stack>

      <ChangePhotoBox
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};
export default Profile;
