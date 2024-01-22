import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />

      <GlobalStyle />
    </ChakraProvider>
  )
}
