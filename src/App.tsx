import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import NewsGrid from "./components/news-card/NewsGrid";
import TopicsSelector from "./components/TopicsSelector";
import SearchNews from "./components/SearchNews";

function App() {
  // State to track the selected topic
  const [selectedTopic, setSelectedTopic] = useState("general");
  const [newsBySearch, setNewsBySearch] = useState("");

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
      {/* Navbar and Topic Selector */}
      <GridItem area="nav">
        <NavBar />
        <SearchNews onSearch={(searchText) => setNewsBySearch(searchText)} />
        <TopicsSelector
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
        />
      </GridItem>

      {/* News Grid */}
      <GridItem area="main1">
        {/* Pass selectedTopic to NewsGrid */}
        <NewsGrid searchText={newsBySearch} selectedTopic={selectedTopic} />
      </GridItem>
    </Grid>
  );
}

export default App;
