import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
//   const [name,setName] = useState();


  return <Container   textAlign={'center'} py={'16'} minH={'90vh'} >
  <form>
   <Heading 
   boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
   textTransform={'uppercase'} children={'Update Profile 🖌️ '}
       my={'16'}
       textAlign={['center','center']}
   />
   <VStack
   spacing={'8'}
   >
     <Input
             required
             id="name"
             value={name}
             onChange={e => setName(e.target.value)}
             placeholder="Enter your name"
             type={'text'}
             focusBorderColor="purple.200"
           />
    <Input
             required
            
             value={email}
             onChange={e => setEmail(e.target.value)}
             placeholder="Enter your email"
             type={'email'}
             focusBorderColor="purple.200"
           />
  
    <Button w={'full'}  type={'submit'}  colorScheme='purple' children={'UPDATE'} />

   </VStack>
  </form>
 </Container>
}

export default UpdateProfile;
