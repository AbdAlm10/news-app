import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

const useNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const contoller = new AbortController();

    apiClient
      .get<NewsResponse>(
        "/top-headlines?country=us&apiKey=c6c6837bd42d4bbe8c84d1b477dbdeb7",
        { signal: contoller.signal }
      )
      .then((res) => setNews(res.data.articles))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => contoller.abort();
  }, []);

  return { news, error };
};

export default useNews;
