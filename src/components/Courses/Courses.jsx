import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']} mt={5}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size={'md'}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator : '}
        />
        <Text noOfLines={2} children={creator} />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />

      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="purple">Watch Now</Button>
        </Link>
        <Button
          onClick={() => addToPlaylistHandler(id)}
          variant={'outline'}
          colorScheme="purple"
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  // eslint-disable-next-line
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('added to playlist');
  };
  const categories = [
    'DSA',
    'Web Developement',
    'App Development',
    'Artificial Intellegence',
    'Machine Learning',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'5'} mt={'5'}>
      <Heading
        boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        p={'5'}
        borderBottom={'1px'}
        borderTop={'1px'}
        borderRadius={'30px'}
        textAlign={'center'}
        children="All Courses 🧩"
        m={'8'}
      />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course ...."
        type="text"
        focusBorderColor="purple.500"
      />
      <HStack overflowX={'auto'} paddingY={'8'}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          views={23}
          title={'Sample'}
          imageSrc={
            'https://media.istockphoto.com/id/1442403741/photo/another-side-capture-of-a-code-editor-with-jsx-code.jpg?s=1024x1024&w=is&k=20&c=_XNanfsHoy4HipBO8DkAvKVAJmsjzFC687PjlOgQ7Xc='
          }
          id={'Sample'}
          addToPlaylistHandler={addToPlaylistHandler}
          creator={'Sample Boy'}
          description={'Abc'}
          lectureCount={'2'}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
