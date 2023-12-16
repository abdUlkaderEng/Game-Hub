import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface props{
  onSearch:(searchText:string) => void
}
const NaveBar = ({onSearch}:props) => {
  return (
    <HStack  padding={"10px"}>
      <Image src={logo} boxSize="60px" />
       <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NaveBar;
