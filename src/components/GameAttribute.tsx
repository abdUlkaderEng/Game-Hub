import React from "react";
import  Game  from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefintionItem from "./DefintionItem";
import platforms from "../data/platforms";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2} fontSize='lg'>
      <DefintionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefintionItem>
      <DefintionItem term="Meta score">
        <CriticScore score={game.metacritic} />
      </DefintionItem>
      <DefintionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefintionItem>
      <DefintionItem term="Puplishers">
        {game.publishers?.map((puplisher) => (
          <Text key={puplisher.id}>{puplisher.name}</Text>
        ))}
      </DefintionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
