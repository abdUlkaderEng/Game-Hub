import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandebleText from "../components/ExpandebleText";
import useGame from "../hooks/useGame";
import GameAttribute from "../components/GameAttribute";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if(isLoading) return <Spinner />
  if (error || !game)
    throw  error
  return (
    <>
      <SimpleGrid columns={{base:1 , md:2}} spacing={1}>
        <Box>
        <Heading>{game.name}</Heading>
        <ExpandebleText>{game.description_raw}</ExpandebleText>
        <GameAttribute game={game} />
        </Box>
        <Box>

        <GameTrailer gameID={game.id} />
        <GameScreenshots gameId={game.id} />
        </Box>
      
      </SimpleGrid>
      </>
    );
};

export default GameDetailPage;
