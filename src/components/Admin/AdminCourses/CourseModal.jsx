import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';
const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  //   const courseTitle = 'React-Course';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    // Perform the necessary actions to add a lecture, e.g., make an API request.
    console.log('Add Lecture Handler called');
  };

  //to clear the previouslt selected video for upload ..so that next time it does not appear.//

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <Button
          w={['80px', '80px']}
          p={'5px'}
          mb={'-50px'}
          mr={['0', '30px']}
          size={'lg'}
          alignSelf={['center', 'flex-end']}
          onClick={handleClose}
        >
          {' '}
          Close ❌{' '}
        </Button>

        <ModalBody p={'16'}>
          <Grid templateCloumns={['1fr', '2fr 1fr']} gap={'6'}>
            <Stack direction={['column', 'row']}>
              <Box>
                <form
                  onSubmit={e =>
                    addLectureHandler(e, id, title, description, video)
                  }
                >
                  <VStack spacing={'4'} w={'100%'} alignSelf={'center'}>
                    <Heading
                      textTransform={'uppercase'}
                      size={'md'}
                      children={'Add Lecture'}
                    />
                    <Input
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      placeholder="Title"
                      type={'text'}
                      focusBorderColor="purple.500"
                    />
                    <Input
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="Description"
                      type={'text'}
                      focusBorderColor="purple.500"
                    />

                    <Input
                      accept="video/mp4"
                      required
                      type={'file'}
                      focusBorderColor="purple.300"
                      css={{
                        '&::file-selector-button': {
                          ...fileUploadCss,
                        },
                      }}
                      onChange={changeVideoHandler}
                    />
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        controls
                        src={videoPrev}
                      ></video>
                    )}
                    <Button w={'full'} colorScheme="purple" type="submit">
                      Upload
                    </Button>
                  </VStack>
                </form>
              </Box>
              <Box px={['0', '16']}>
                <Box my={'5'}>
                  <Heading
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    size={'md'}
                    mb={'10px'}
                    p={'10px'}
                    borderBottom={'1px'}
                    borderTop={'1px'}
                    children={'Available Lectures'}
                  />
                  <Heading children={courseTitle} />
                  <Heading children={`#${id}`} size={'sm'} opacity={'0.4'} />
                </Box>
                <Heading children={'Lectures'} size={'lg'} />

                {/* loop over lectures array  */}
                {lectures.map((item, i) => (
                  <VideoCard
                    key={i}
                    title="React Intro"
                    description=" This is a react intro where you will learn about basics of react"
                    num={i + 1}
                    lectureId="chdlecturehkvjfbjfgbk"
                    courseId={id}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
              </Box>
            </Stack>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

//creating video card component
function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.500'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        Delete {'   '}
        <RiDeleteBin7Fill />{' '}
      </Button>
    </Stack>
  );
}
