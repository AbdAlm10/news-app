import { useParams } from "react-router-dom";
import {
  Text,
  Heading,
  Image,
  SimpleGrid,
  GridItem,
  Spinner,
  Link,
  HStack,
  Center,
  VStack,
  Box,
} from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import { FiExternalLink } from "react-icons/fi";
import ArticleTimeAgo from "../components/NewsCard/ArticleTimeAgo";

const NewsDetailPage = () => {
  const { publishAt } = useParams();
  const { data: news, error, isLoading } = useNews();

  // Find the article based on the publishedAt parameter
  const article = news?.find((article) => article.publishedAt === publishAt);

  if (isLoading) return <Spinner />;
  if (!article) throw error;

  const truncatedContent =
    article.content.length > 250
      ? `${article.content.slice(0, 250)}...`
      : article.content;

  return (
    <SimpleGrid p={5} columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Center>
          <Image
            h={{ base: "300px", md: "500px" }}
            w="600px"
            objectFit={"cover"}
            src={article.image}
            alt={article.title}
          />
        </Center>
      </GridItem>

      <GridItem>
        <Heading fontSize="2xl" mb={3}>
          {article.title}
        </Heading>
        <Text mb={3}>{article?.description}</Text>
        <Text>{truncatedContent}</Text>

        <Link href={article.url} isExternal>
          <HStack mt={5} color="gray.300">
            <Text fontWeight="bold">Read All Article</Text>
            <FiExternalLink size={20} />
          </HStack>
        </Link>

        <Box mt={10}>
          <Text>{article.source.name}</Text>
          <ArticleTimeAgo article={article} />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default NewsDetailPage;
