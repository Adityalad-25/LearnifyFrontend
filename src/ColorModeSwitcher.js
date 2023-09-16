import React, { useState } from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './components/Home/Home'

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  // eslint-disable-next-line
  const [isSunIcon, setIsSunIcon] = useState(true);
    // eslint-disable-next-line
const [isMoonIcon, setIsMoonIcon] = useState(true);

  const handleToggleIcon = () => {
    setIsSunIcon(prevState => !prevState);
    toggleColorMode(); // Toggle the color mode when the button is clicked
  };

  return (
    <>
      <IconButton
        size="lg"
        position={'fixed'}
        fontSize="3xl"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        zIndex={'overlay'}

        color="current"
        top={'4'}
        right={'4'}
        onClick={handleToggleIcon}
        icon={isMoonIcon ? <FaSun className="rotate" /> : <FaMoon />} 
        {...props}
      />
    </>
  );
};

export default ColorModeSwitcher;
