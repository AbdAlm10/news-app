import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../../hooks/useNews";
import NewsCardSkeleton from "./NewsCardSkeleton";
import NewsCard from "./NewsCard";

const NewsGrid = () => {
  const { data: news, error, isLoading } = useNews(); // Ensure this line matches the useNews definition

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

        {news?.map((article) => (
          <NewsCard key={article.publishedAt} article={article} /> // Use a unique key
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
