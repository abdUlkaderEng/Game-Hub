import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandebleText from "../components/ExpandebleText";
import useGame from "../hooks/useGame";
import GameAttribute from "../components/GameAttribute";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if(isLoading) return <Spinner />
  if (error || !game)
    throw  error
    return (
      <>
        <Heading>{game.name}</Heading>
        <ExpandebleText>{game.description_raw}</ExpandebleText>
        <GameAttribute game={game} />
      </>
    );
};

export default GameDetailPage;
