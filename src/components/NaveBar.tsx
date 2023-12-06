import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
const NaveBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Nave Bar</Text>
    </HStack>
  )
}

export default NaveBar