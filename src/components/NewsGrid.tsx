import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import NewsCard from "./NewsCard";

const NewsGrid = () => {
  const { news, error } = useNews();

  const customNews = news.splice(0, 2);
  return (
    <>
      {error && (
        <Text textAlign="center" color="tomato">
          {error}
        </Text>
      )}
      <SimpleGrid spacing={5} p={5} columns={{ base: 1, md: 2, lg: 3 }}>
        {customNews.map((news) => (
          <NewsCard key={news.source.id} article={news} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
