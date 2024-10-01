import { Article } from "../hooks/useNews";
import { Card, CardBody, Heading, HStack, Image, Show } from "@chakra-ui/react";

interface Props {
  article: Article;
}

const NewsCard = ({ article }: Props) => {
  const titleLong =
    article.title.length >= 50
      ? `${article.title.padEnd(100, article.title)}... `
      : article.title;

  return (
    <HStack>
      <Card shadow={0}>
        <Image src={article.urlToImage} />
        <CardBody p={0} my={2}>
          <Heading fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
            {titleLong}
          </Heading>
        </CardBody>
      </Card>
    </HStack>
  );
};

export default NewsCard;
