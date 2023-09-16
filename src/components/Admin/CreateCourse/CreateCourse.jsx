import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';

const categories = [
  'DSA',
  'Web Developement',
  'App Development',
  'Artificial Intellegence',
  'Machine Learning',
  'Data Science',
  'Game Development',
];

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  
 // eslint-disable-next-line
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'} textAlign={'center'}>
        <form>
          <Heading
            children={'CREATE COURSE 📝'}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
            w={'fit-content'}
            p={'20px'}
            bg={'rgb(26,32,44)'}
            color={'white'}
            borderRadius={'30px'}
            ml={['70', '120']}
            mt={'5'}
            textAlign={['center', 'center']}
          />

          <VStack m={'auto'} mt={'15px'} spacing={'8'}>
            <Input
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type={'text'}
              focusBorderColor="purple.200"
            />
            <Input
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Write Description"
              type={'text'}
              focusBorderColor="purple.200"
            />

            <Input
              required
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type={'text'}
              focusBorderColor="purple.200"
            />

            <Select
              focusBorderColor="purple.200"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>

              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type={'file'}
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                },
              }}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            <Button w={'full'} colorScheme="purple" type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
