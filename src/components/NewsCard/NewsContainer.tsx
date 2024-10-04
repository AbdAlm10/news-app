import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import ArticleTimeAgo from "./ArticleTimeAgo";
import { Article } from "../../hooks/useNews";

interface Props {
  src: string;
  alt?: string;
  article: Article;
}

const NewsContainer = ({ src, alt, article }: Props) => {
  const truncatedTitle =
    article.title.length > 75
      ? `${article.title.slice(0, 75)}...`
      : article.title;
  return (
    <Box>
      <Card boxShadow="none" bg="none">
        <Image w="auto" h="200px" objectFit={"cover"} src={src} alt={alt} />
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
  );
};

export default NewsContainer;
