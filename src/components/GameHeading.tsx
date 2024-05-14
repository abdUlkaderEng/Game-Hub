import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../Store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";



const GameHeading = () => {
  const genreID = useGameQueryStore(s => s.gameQuery.genreID);
  const genre = useGenre(genreID)
  
  const platformID = useGameQueryStore(s => s.gameQuery.platformID);
  const platform = usePlatform(platformID)

  
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
