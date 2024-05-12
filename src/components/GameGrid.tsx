import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
interface props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding={5}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loding..." : "load more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
