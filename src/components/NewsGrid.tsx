import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import NewsCard from "./NewsCard";

const NewsGrid = () => {
  const { news, error } = useNews();

  return (
    <>
      {error && (
        <Text textAlign="center" color="tomato">
          {error}
        </Text>
      )}
      <SimpleGrid spacing={5} p={5} columns={{ base: 1, md: 2, lg: 3 }}>
        {news.map((news) => (
          <NewsCard key={news.title} article={news} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
