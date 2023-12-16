import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
interface props{
    onSearch:(searchText:string) => void
}
const SearchInput = ({onSearch}:props) => {
    const ref = useRef<HTMLInputElement>(null)
  return ( 
    <form onSubmit={(event) => {
        event.preventDefault()
        if(ref.current)onSearch(ref.current.value);
        
        }}>
        <InputGroup>
        <InputLeftElement><BsSearch /></InputLeftElement>
          <Input ref={ref} borderRadius={20} variant='filled' placeholder='Search games...' />
          </InputGroup>
    </form>
  )
}

export default SearchInput