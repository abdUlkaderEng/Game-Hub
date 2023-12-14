import { Grid, GridItem, Show } from "@chakra-ui/react";
import NaveBar from "./components/NaveBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NaveBar></NaveBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} >
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"} >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
