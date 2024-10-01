import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NewsGrid from "./components/NewsGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main1"`,
        md: `"nav nav" "main1 main1 `,
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
    </Grid>
  );
}

export default App;
