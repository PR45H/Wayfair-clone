import { useState } from 'react'
import './App.css'
import { HStack, Button, VStack } from '@chakra-ui/react'
import { RiMailLine, RiArrowRightLine } from 'react-icons/ri'
import { ColorModeButton } from './components/ui/color-mode' //for dark mode 
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <ColorModeButton>
        
      </ColorModeButton>
    </>
  )
}

export default App