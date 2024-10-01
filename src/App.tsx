import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NewsGrid from "./components/NewsGrid";

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
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main1">
        <NewsGrid />
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
