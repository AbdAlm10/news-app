import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import ArticleTimeAgo from "./ArticleTimeAgo";
import { Article } from "../../hooks/useNews";
import { Link } from "react-router-dom";
import fonts from "../../assets/fonts/fonts";

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
      <Link to={"/news/" + article.publishedAt}>
        <Card
          _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s  ease-in",
          }}
          boxShadow="none"
          bg="none"
        >
          <Image w="auto" h="200px" objectFit={"cover"} src={src} alt={alt} />
          <CardBody p={0} my={2}>
            <Heading
              fontFamily={fonts.mainFont}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            >
              {truncatedTitle}
            </Heading>
            <ArticleTimeAgo article={article} />
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};

export default NewsContainer;
