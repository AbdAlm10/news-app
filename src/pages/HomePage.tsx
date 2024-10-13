import { Grid, GridItem } from "@chakra-ui/react";
import NewsGrid from "../components/NewsCard/NewsGrid";

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
        <NewsGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
