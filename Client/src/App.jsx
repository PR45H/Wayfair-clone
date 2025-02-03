import { useState } from 'react'
import './App.css'
import { HStack, Button, VStack } from '@chakra-ui/react'
import { RiMailLine, RiArrowRightLine } from 'react-icons/ri'
import { ColorModeButton } from './components/ui/color-mode' //for dark mode 
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <>
      <ColorModeButton />
        <Header />
      <Outlet />
      <Footer />
      <Toaster/>
    </>
  )
}

export default App