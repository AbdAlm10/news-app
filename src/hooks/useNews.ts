import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface ArticleSource {
  id: string | null;
  name: string;
}

export interface Article {
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

const useNews = (
  country: string = "us",
  category: string = "general",
  searchQuery?: string
) => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const endpoint = searchQuery
      ? `/everything?q=${searchQuery}&apiKey=c6c6837bd42d4bbe8c84d1b477dbdeb7`
      : `/top-headlines?country=${country}&category=${category}&apiKey=c6c6837bd42d4bbe8c84d1b477dbdeb7`;

    setLoading(true);
    setError(null);

    apiClient
      .get<NewsResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        setNews(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [country, category, searchQuery]);

  return { news, error, isLoading };
};

export default useNews;
