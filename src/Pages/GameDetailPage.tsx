import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { useState } from "react";
import ExpandebleText from "../components/ExpandebleText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const {data : game , error , isLoading } = useGame(slug!);
  if(isLoading) return <Spinner />
  if (error || !game)
    throw  error
    return (
      <>
        <Heading>{game.name}</Heading>
        <ExpandebleText>{ game.description_raw}</ExpandebleText>
        <Text></Text>
      </>
    );
};

export default GameDetailPage;
