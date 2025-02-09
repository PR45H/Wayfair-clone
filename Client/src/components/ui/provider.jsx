'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { Toaster } from '../ui/toaster'

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
      {/* Importing Toast here to solve the toaster functionality 
          was not working outside the app.jsx.
          so using it in hogher component tree
    */}
      <Toaster />         
    </ChakraProvider>
  )
}
