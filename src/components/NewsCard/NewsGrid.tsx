import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../../hooks/useNews";
import NewsCardSkeleton from "./NewsCardSkeleton";
import NewsCard from "./NewsCard";
import useNewsQueryStore from "../../store";

const NewsGrid = () => {
  const searchText = useNewsQueryStore((s) => s.newsQuery.searchText);
  const selectedTopic = useNewsQueryStore((s) => s.newsQuery.topic);
  const { data: news, error, isLoading } = useNews(selectedTopic, searchText); // Use the selected topic
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && (
        <Text textAlign="center" color="tomato">
          {(error as Error).message}
        </Text>
      )}

      <SimpleGrid spacing={10} p={5} columns={{ base: 1, md: 2, lg: 3 }}>
        {isLoading &&
          skeletons.map((skeleton) => <NewsCardSkeleton key={skeleton} />)}

        {news?.map((news, index) => (
          <NewsCard key={index} article={news} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
