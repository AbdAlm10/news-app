import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import NewsGrid from "./components/news-card/NewsGrid";
import TopicsSelector from "./components/TopicsSelector";

function App() {
  // State to track the selected topic
  const [selectedTopic, setSelectedTopic] = useState("general");

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
        {/* Pass setSelectedTopic to TopicsSelector */}
        <TopicsSelector onSelectedTopic={setSelectedTopic} />
      </GridItem>

      {/* News Grid */}
      <GridItem area="main1">
        {/* Pass selectedTopic to NewsGrid */}
        <NewsGrid selectedTopic={selectedTopic} />
      </GridItem>
    </Grid>
  );
}

export default App;
