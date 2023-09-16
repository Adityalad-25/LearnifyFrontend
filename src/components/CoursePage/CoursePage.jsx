import { Box, Button, Grid, Heading, Text, VStack} from '@chakra-ui/react';
import React, { useState } from 'react';
import video from '../../assets/videos/LEARNIFYINTRO.mp4';
const CoursePage = () => {
    // eslint-disable-next-line
const lectureTitle = 'LectureTitle';
  const [lectureNumber,setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sdfdjksljkl ',
      title: 'Sample',
      description: 'welcome to full stack developement course',
      video: {
        url: 'sadjhf ',
      },
    },
    {
      _id: 'sdfdjksljkl 2',
      title: 'Sample 2',
      description: 'welcome to full stack developement course',
      video: {
        url: 'sadjhf 2',
      },
    },
    {
      _id: 'sdfdjksljkl 3',
      title: 'Sample 3',
      description: 'welcome to full stack developement course',
      video: {
        url: 'sadjhf 3',
      },
    },
  
  ];
  return (
    <Grid minH={'95vh'} templateColumns={['1fr', '3fr 2fr']}>
      <Box  >
        <video
          width={['100%', '100%']}
          controls
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={video}
        ></video>
        <Heading
          m={'4'}
          children={` # ${lectureNumber + 1}${lectures[lectureNumber].title} `}
        />
        <Heading m={'4'} children={'Description'} />
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>
      <VStack mt={['-150px','70px']} ml={'10px'}    >
        {lectures.map((element, index) => (
          <Button key={element._id}
           onClick={()=>setLectureNumber(index)}

          style={
            {
                width:"100%",
                padding:"1rem",
                textAlign:"center",
                margin:0,
                borderBottom:'1px solid'
               
                
              
            }
          }
           >
            <Text noOfLines={1} >
              #{index + 1} {element.title}
            </Text>
          </Button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
