import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return ( 
    <InputGroup>
    <InputLeftElement><BsSearch /></InputLeftElement>
  <Input borderRadius={20} variant='filled' placeholder='Search games...' />
  </InputGroup>
  )
}

export default SearchInput