import { Heading } from "@chakra-ui/react";
import useNewsQueryStore from "../../store";

const PageLabel = () => {
  const newsQuery = useNewsQueryStore((s) => s.newsQuery);

  const heading = newsQuery.searchText
    ? `search: ${newsQuery.searchText}`
    : "Top headlines";

  return (
    <Heading
      fontFamily={"Montserrat"}
      mr={{ base: 5, md: 4, lg: 5 }}
      size={{ base: "md", md: "lg" }}
    >
      {heading}
    </Heading>
  );
};

export default PageLabel;
