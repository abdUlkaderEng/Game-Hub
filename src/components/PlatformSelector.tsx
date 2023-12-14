import { Button, ListItem, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
    const {data} = usePlatforms()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />} >Platforms</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector