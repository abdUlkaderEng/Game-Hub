import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useGameQueryStore from "../Store";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import GenreListSkelton from "./GenreListSkelton";


const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  
  const textSkeleton = [1, 2, 3, 4];
  
  const setSelectedPlatformID = useGameQueryStore(s => s.setPlatformID)
  const selectedPlatformID = useGameQueryStore(s => s.gameQuery.platformID)
  
  const platform = usePlatform(selectedPlatformID);

  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {isLoading &&
          textSkeleton.map((skeleton) => <GenreListSkelton key={skeleton} />)}

        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformID(platform.id)}
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
