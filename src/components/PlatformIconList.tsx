import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
