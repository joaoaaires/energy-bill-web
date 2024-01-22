import { Container, Flex, VStack, useColorModeValue } from '@chakra-ui/react'
import { Header } from './Components/Header'
import { Outlet } from 'react-router-dom'

export function Root() {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]}>
        <VStack
          w="full"
          h="full"
          align="flex-start"
          p={8}
          bg={bgColor}
          borderRadius={{ base: 0, xl: 10 }}
        >
          <Header />
          <Outlet />
        </VStack>
      </Flex>
    </Container>
  )
}
