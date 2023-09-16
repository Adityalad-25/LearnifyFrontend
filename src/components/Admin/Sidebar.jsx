import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { DoughnutChart } from './Dashboard/Chart';

// separate component for links
function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'2xl'}
        variant={'ghost'}
        colorScheme={active ? 'cyan' : ''}
        borderBottom={'1px'}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={'7'}
      p={'12'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      mt={['','-70px']}
      w={['','400px']}
      borderRadius={'60px'}
      bg={'rgb(26,32,44)'}
      mr={['0', '70px']}
      color={'white'}
      h={'max-content'}
    >
         
          <Box   p={['0', '16']} boxSize={'border-box'} py={'4'}>
            <Heading
              textAlign={'center'}
              size={'lg'}
              mb={'4'}
              children="Subscribers Stats"
            />

            {/* Doughnut Graph  */}

            <Box
            
              w={'300px'}
              h={'300px'}
              
              boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
              p={'20px'}
            >
              <DoughnutChart />
            </Box>
           
          </Box>
     
      <LinkButton
      
        Icon={RiDashboardFill}
        text={'Dashboard'}
        url={'dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        Icon={RiAddCircleFill}
        text={'Create Course'}
        url={'createcourse'}
        active={location.pathname === '/admin/createcourse'}
      />
      <LinkButton
        Icon={RiEyeFill}
        text={'Courses'}
        url={'courses'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        Icon={RiUser3Fill}
        text={'Users'}
        url={'users'}
        active={location.pathname === '/admin/users'}
      />

      {/* 
 <Box p={['0', '16']} boxSize={'border-box'} py={'4'}>
            <Heading
              textAlign={'center'}
              size={'md'}
              mb={'4'}
              children="Users"
            />

         
            <Box
              w={'max-content'}
              h={'max-content'}
             
              boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
              p={'20px'}
            >
              <DoughnutChart />
            </Box>
          </Box>
       */}
    </VStack>
  );
};

export default Sidebar;
