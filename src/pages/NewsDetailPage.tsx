import useNewsQueryStore from "../store";
import { Text } from "@chakra-ui/react";

const NewsDetailPage = () => {
  const newsQuery = useNewsQueryStore((s) => s.newsQuery.searchText);

  return <Text>s</Text>;
};

export default NewsDetailPage;
