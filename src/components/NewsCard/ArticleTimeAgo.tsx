import { Text, useColorMode } from "@chakra-ui/react";
import { Article } from "../../hooks/useNews";

interface Props {
  article: Article;
}

const ArticleTimeAgo = ({ article }: Props) => {
  const { colorMode } = useColorMode();
  const fullArticleTime: string = article.publishedAt;

  // Parse the article's full time into a Date object
  const articleDate: Date = new Date(fullArticleTime);

  // Get the current date and time
  const currentDate: Date = new Date();

  // Calculate the difference in milliseconds between the current time and the article's publish time
  const timeDifferenceMs: number =
    currentDate.getTime() - articleDate.getTime(); // Using getTime() for clarity

  // Convert the time difference to seconds, minutes, hours, and days
  const timeDifferenceMinutes: number = Math.floor(
    timeDifferenceMs / (1000 * 60)
  );
  const timeDifferenceHours: number = Math.floor(timeDifferenceMinutes / 60);
  const timeDifferenceDays: number = Math.floor(timeDifferenceHours / 24);
  const timeDifferenceMonths: number = Math.floor(timeDifferenceDays / 30); // Approximation of months

  // Determine the appropriate format to display
  const timeAgo: string =
    timeDifferenceMinutes < 60
      ? `${timeDifferenceMinutes} M ago`
      : timeDifferenceHours < 24
      ? `${timeDifferenceHours} H ago`
      : timeDifferenceDays < 30
      ? `${timeDifferenceDays} D ago`
      : `${timeDifferenceMonths} M ago`;

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
