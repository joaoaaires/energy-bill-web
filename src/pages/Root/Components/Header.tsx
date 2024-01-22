import { HStack, Image, Link } from '@chakra-ui/react'
import { Scroll, PresentationChart, PencilSimpleLine } from 'phosphor-react'

import logoReact from '../../../assets/react.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HStack w="full" h={12} justifyContent="space-between">
      <Image src={logoReact} alt="logo" />
      <HStack spacing={5} alignItems="center" alignContent="center">
        <Link as={NavLink} to="/" _activeLink={{ color: 'cyan.400' }}>
          <PresentationChart size={24} />
        </Link>
        <Link as={NavLink} to="/bill" _activeLink={{ color: 'cyan.400' }}>
          <Scroll size={24} />
        </Link>
        <Link as={NavLink} to="/form" _activeLink={{ color: 'cyan.400' }}>
          <PencilSimpleLine size={24} />
        </Link>
      </HStack>
    </HStack>
  )
}
