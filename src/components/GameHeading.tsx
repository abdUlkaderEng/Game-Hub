import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreID);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformID);
  
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
