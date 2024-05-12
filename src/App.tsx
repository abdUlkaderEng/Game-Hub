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

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NaveBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NaveBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenreID={gameQuery.genreID}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreID: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformID={gameQuery.platformID}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformID: platform.id })
                }
              />
            </Box>
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
