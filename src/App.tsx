import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NaveBar from "./components/NaveBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameQueryStore from "./Store";


function App() {

  const gamequeryStore = useGameQueryStore();
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NaveBar></NaveBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={5}>
          <GameHeading />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector/>
            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
