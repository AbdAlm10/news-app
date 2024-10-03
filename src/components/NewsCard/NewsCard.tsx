import { Article } from "../../hooks/useNews";
import { Card, CardBody, Heading, Image, Box, Text } from "@chakra-ui/react";
import ArticleTimeAgo from "./ArticleTimeAgo";
import noImage from "../../assets/no-image-placeholder.webp";
import NewsContainer from "./NewsContainer";

interface Props {
  article: Article;
}

const NewsCard = ({ article }: Props) => {
  return (
    <>
      {article.urlToImage ? (
        <NewsContainer
          src={article.urlToImage}
          alt={article.title}
          article={article}
        />
      ) : (
        <NewsContainer src={noImage} alt={""} article={article} />
      )}
    </>
  );
};

export default NewsCard;
