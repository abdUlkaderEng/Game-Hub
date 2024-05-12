import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const genre = useGenre(gameQuery.genreID)
  const platform = usePlatform(gameQuery.platformID)
  
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={5} fontSize="5xl" as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
