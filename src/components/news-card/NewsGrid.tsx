import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsGrid = () => {
  const { news, error, isLoding } = useNews();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && (
        <Text textAlign="center" color="tomato">
          {error}
        </Text>
      )}

      <SimpleGrid spacing={10} p={5} columns={{ base: 1, md: 2, lg: 3 }}>
        {isLoding &&
          skeletons.map((skeleton) => <NewsCardSkeleton key={skeleton} />)}

        {news.map((news) => (
          <NewsCard key={news.title} article={news} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
