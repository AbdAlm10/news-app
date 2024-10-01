import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main1"`,
        md: `"nav nav" "main1 main2" `,
      }}
      templateColumns={{
        base: "1fr",
        md: " 1fr 400px",
      }}
    >
      <GridItem area="nav" bg="tomato">
        nav
      </GridItem>
      <GridItem area="main1" bg="skyblue">
        main1
      </GridItem>

      <Show above="md">
        <GridItem area="main2" bg="green">
          main2
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
