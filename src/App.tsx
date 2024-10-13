import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/HeadPage/NavBar";
import NewsGrid from "./components/NewsCard/NewsGrid";
import TopicsSelector from "./components/HeadPage/TopicsSelector";
import SearchNews from "./components/HeadPage/SearchNews";
import PageLabel from "./components/HeadPage/PageLabel";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main1"`,
        md: `"nav nav" "main1 main1"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr 400px",
      }}
    >
      <GridItem area="nav">
        <NavBar />
        <SearchNews />
        <HStack justifyContent="space-between">
          <TopicsSelector />
          <PageLabel />
        </HStack>
      </GridItem>

      <GridItem area="main1">
        <NewsGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
