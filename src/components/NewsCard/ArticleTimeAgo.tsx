import { Text, useColorMode } from "@chakra-ui/react";
import { Article } from "../../hooks/useNews";
import useTimeAgo from "../../hooks/useTimeAgo";

interface Props {
  article: Article;
}

const ArticleTimeAgo = ({ article }: Props) => {
  const { colorMode } = useColorMode();
  const timeAgo = useTimeAgo(article.publishedAt);

  return (
    <Text
      fontFamily={"Montserrat"}
      fontWeight="400"
      fontSize={15}
      mt={1}
      color={colorMode === "dark" ? "gray.400" : "gray.600"}
    >
      {timeAgo}
    </Text>
  );
};

export default ArticleTimeAgo;
