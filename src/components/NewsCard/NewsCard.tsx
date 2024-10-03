import { Article } from "../../hooks/useNews";
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
        //news card whithout images
        <NewsContainer src={noImage} alt={""} article={article} />
      )}
    </>
  );
};

export default NewsCard;
