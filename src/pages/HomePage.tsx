import { Grid, GridItem } from "@chakra-ui/react";
import NewsGrid from "../components/NewsCard/NewsGrid";
import TopicsSelector from "../components/HeadPage/TopicsSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main1"`,
        md: `"main1 main1"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr 400px",
      }}
    >
      <GridItem area="main1">
        <TopicsSelector />
        <NewsGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
