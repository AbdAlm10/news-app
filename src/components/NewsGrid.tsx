import { Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";

const NewsGrid = () => {
  const { news, error } = useNews();

  return (
    <>
      {error && (
        <Text textAlign="center" color="tomato">
          {error}
        </Text>
      )}
      <ul>
        {news.map((news) => (
          <li key={news.source.id}>{news.title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewsGrid;
