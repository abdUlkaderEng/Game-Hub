import { Grid, GridItem, Show } from '@chakra-ui/react'
function App() {
  return(
  <Grid templateAreas={{base : `"nav" "main"`,
                        lg : `"nav nav" "aside main"` } }>
    <GridItem area={"nav"} bg={'black'}>nav bar</GridItem>
    <Show above='lg'>
    <GridItem area={"aside"} bg={'red'}>Aside</GridItem>
    </Show>
    <GridItem area={"main"} bg={'orange'}>main</GridItem>
  </Grid>
  )
}

export default App
