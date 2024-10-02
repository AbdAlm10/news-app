import { Article } from "../hooks/useNews";
import { Card, CardBody, Heading, Image, Box, Text } from "@chakra-ui/react";
import ArticleTimeAgo from "./ArticleTimeAgo";

interface Props {
  article: Article;
}

const NewsCard = ({ article }: Props) => {
  // Truncate the title if it's longer than 50 characters
  const truncatedTitle =
    article.title.length > 50
      ? `${article.title.slice(0, 50)}...`
      : article.title;

  return (
    <>
      {article.urlToImage && (
        <Box>
          <Card boxShadow="none">
            <Image src={article.urlToImage} alt={article.title} />
            <CardBody p={0} my={2}>
              <Heading fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
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
