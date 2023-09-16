import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiArrowLeftDownLine, RiArrowUpLine } from 'react-icons/ri';
 // eslint-disable-next-line
import { DoughnutChart, LineChart } from './Chart';
import customCursorImage from '../../../assets/images/cursor.png';

// Add this CSS class to your component
const customCursorStyle = {
  cursor: `url(${customCursorImage}), auto`,
};

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    mt={'40px'}
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />

    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />

      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine fontWeight={'bold'} color="green" />
        ) : (
          <RiArrowLeftDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children={'Since Last month'} opacity={'0.5'} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={'4'} px={['0', '20']}>
    <Heading size={'sm'} children={title} mb={'2'} />

    <HStack w={'full'} alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />
      <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? '100' : value}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      style={customCursorStyle}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      mt={'10px'}
    >
      <Box
        boxSizing="border-box"
        py={'16'}
        px={['4', '0']} // py:padding vertical & px: padding vertical
      >
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />

        <Heading
         className='btn-glow'
          children={'📊 Dashboard 📈 '}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          w={'fit-content'}
          p={'20px'}
          bg={'rgb(26,32,44)'}
          color={'white'}
          borderRadius={'30px'}
          ml={['90', '16']}
          mt={'5'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH="24"
          justifyContent={'space-evenly'}
        >
          <Databox title="Views" qty={123} qtyPercentage={30} profit={true} />
          <Databox title="Users" qty={23} qtyPercentage={30} profit={true} />
          <Databox
            title="Subscription"
            qty={12}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children={'Views Graph'}
            pt={['8', '0']}
            ml={['0', '16']}
            mb={'-20px'}
          />

          {/* Line Graph here  */}
          <LineChart />
        </Box>


      </Box>

      <Sidebar />

      
      <Grid templateColumns={['1fr', '2fr', '1fr']}>
        <Box
         mb={'80px'}
          p={'4'}
          // boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
       
         
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children={'Progress Bar'}
            pt={['8', '0']}
            ml={['0', '16']}
           
          />
          <Box>
            <Bar profit={true} title="Views : " value={30} />
            <Bar profit={true} title="Users : " value={70} />
            <Bar profit={true} title="Subscriptions : " value={20} />
          </Box>

          {/* Doughnut Graph  */}
          {/* <Box p={['0', '16']} boxSize={'border-box'} py={'4'}>
            <Heading
              textAlign={'center'}
              size={'lg'}
              mb={'4'}
              children="Users"
            />

            

            <Box
              w={'50%'}
              h={'max-content'}
              ml={['90px', '220px']}
              boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
              p={'20px'}
            >
              <DoughnutChart />
            </Box>
           
          </Box> */}
         
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
