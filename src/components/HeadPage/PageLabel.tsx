import { NewsQuery } from "../../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  newsQuery: NewsQuery;
}

const PageLabel = ({ newsQuery }: Props) => {
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
