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
  Box,
} from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import { FiExternalLink } from "react-icons/fi";
import ArticleTimeAgo from "../components/NewsCard/ArticleTimeAgo";
import fonts from "../assets/fonts/fonts";

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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
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
        <Heading fontFamily={fonts.mainFont} fontSize="2xl" mb={3}>
          {article.title}
        </Heading>

        <Box fontFamily={fonts.secondaryFont} fontWeight="500">
          <Text mb={3}>{article?.description}</Text>
          <Text>{truncatedContent}</Text>
        </Box>

        <Link href={article.url} isExternal>
          <HStack mt={5} color="gray.500">
            <Text fontFamily={fonts.secondaryFont} fontWeight="bold">
              Read All Article
            </Text>
            <FiExternalLink size={20} />
          </HStack>
        </Link>

        <Box mt={10}>
          <Text fontFamily={fonts.secondaryFont}>{article.source.name}</Text>
          <ArticleTimeAgo article={article} />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default NewsDetailPage;
