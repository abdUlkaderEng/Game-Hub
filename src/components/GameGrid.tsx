import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const fetchedGamescount =
    data?.pages.reduce((total, page) => page.results.length + total, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamescount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner marginX={475} marginY={5} size={"xl"} speed="0.7s" />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding={5}>
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
    </InfiniteScroll>
  );
};

export default GameGrid;
