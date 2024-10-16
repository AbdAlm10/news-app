import { useParams } from "react-router-dom";
import { Box, Text, Heading, Image } from "@chakra-ui/react";
import useNews from "../hooks/useNews";

const NewsDetailPage = () => {
  const { publishAt } = useParams();
  const { data: news } = useNews();

  // Find the article based on the publishedAt parameter
  const article = news?.find((article) => article.publishedAt === publishAt);

  if (!article) {
    return <Text textAlign="center">Article not found</Text>;
  }

  return (
    <Box p={5}>
      <Heading fontSize="2xl" mb={3}>
        {article.title}
      </Heading>
      <Image src={article.image} alt={article.title} mb={3} />
      <Text mb={3}>{article?.description}</Text>
      <Text>{article?.content}</Text>
    </Box>
  );
};

export default NewsDetailPage;
