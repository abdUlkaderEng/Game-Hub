import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import  { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import GenreListSkelton from "./GenreListSkelton";
interface Props {
  onSelectPlatform: (platform:Platform ) => void;
  selectedPlatform : Platform | null
}
const PlatformSelector = ({ onSelectPlatform , selectedPlatform }: Props) => {
  const { data, error,isloading } = usePlatforms();
  const textSkeleton = [1,2,3,4]

  if (error) return null;
  return (
    <Menu>

      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform?.name || 'Platform'}
      </MenuButton>
      <MenuList>
      {isloading && textSkeleton.map(skeleton => <GenreListSkelton key={skeleton} />)}
      
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
