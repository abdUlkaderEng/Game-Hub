import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";
import GenreListSkelton from "./GenreListSkelton";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformID?: number;
}
const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformID
  
}: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const textSkeleton = [1, 2, 3, 4];
  const platform = data?.results.find((p) => p.id === selectedPlatformID);

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
