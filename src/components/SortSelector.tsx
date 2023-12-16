import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
import GenreListSkelton from './GenreListSkelton';

const SortSelector = () => {
    return (
        <Menu>
    
          <MenuButton as={Button} rightIcon={<BiChevronDown />}>
           Order by : Revelance 
           </MenuButton>
          <MenuList>
          <MenuItem>Revelance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>Average Raring</MenuItem>
          </MenuList>
        </Menu>
      );
}

export default SortSelector