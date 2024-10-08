import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/HeadPage/NavBar";
import NewsGrid from "./components/NewsCard/NewsGrid";
import TopicsSelector from "./components/HeadPage/TopicsSelector";
import SearchNews from "./components/HeadPage/SearchNews";
import PageLabel from "./components/HeadPage/PageLabel";

export interface NewsQuery {
  topic: string | "genre";
  searchText: string;
}

function App() {
  const [newsQuery, setNewsQuery] = useState<NewsQuery>({} as NewsQuery);

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
        <SearchNews
          onSearch={(searchText) => setNewsQuery({ ...newsQuery, searchText })}
        />
        <HStack justifyContent="space-between">
          <TopicsSelector
            selectedTopic={newsQuery.topic}
            onSelectTopic={(topic) => setNewsQuery({ ...newsQuery, topic })}
          />
          <PageLabel newsQuery={newsQuery} />
        </HStack>
      </GridItem>

      <GridItem area="main1">
        <NewsGrid
          searchText={newsQuery.searchText}
          selectedTopic={newsQuery.topic}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
