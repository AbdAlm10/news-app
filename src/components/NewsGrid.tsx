import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface ArticleSource {
  id: string | null;
  name: string;
}

interface Article {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const NewsGrid = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<NewsResponse>(
        "/xtop-headlines?country=us&apiKey=c6c6837bd42d4bbe8c84d1b477dbdeb7"
      )
      .then((res) => setNews(res.data.articles))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && (
        <Text textAlign="center" color="tomato">
          {error}
        </Text>
      )}
      <ul>
        {news.map((news) => (
          <li key={news.source.id}>{news.title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewsGrid;
