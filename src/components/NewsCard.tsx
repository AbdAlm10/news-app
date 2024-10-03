import { Article } from "../hooks/useNews";
import { Card, CardBody, Heading, Image, Box, Text } from "@chakra-ui/react";
import ArticleTimeAgo from "./ArticleTimeAgo";

interface Props {
  article: Article;
}

const NewsCard = ({ article }: Props) => {
  // Truncate the title if it's longer than 75 characters
  const truncatedTitle =
    article.title.length > 75
      ? `${article.title.slice(0, 75)}...`
      : article.title;

  return (
    <>
      {article.urlToImage && (
        <Box>
          <Card boxShadow="none">
            <Image
              w="auto"
              h="200px"
              objectFit={"cover"}
              src={article.urlToImage}
              alt={article.title}
            />
            <CardBody p={0} my={2}>
              <Heading
                fontFamily={"Libre Caslon Text serif"}
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              >
                {truncatedTitle}
              </Heading>
              <ArticleTimeAgo article={article} />
            </CardBody>
          </Card>
        </Box>
      )}
    </>
  );
};

export default NewsCard;
