import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { API_KEY } from "../services/constants";

export interface Article {
  title: string;
  image: string;
  publishedAt: string;
}

interface NewsResponse {
  totalArticles: number;
  articles: Article[];
}

const useNews = (category: string = "general", searchQuery?: string) => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const endpoint = searchQuery
      ? `/search?q=${searchQuery}&apikey=${API_KEY}`
      : `/top-headlines?category=${category}&country=us&apikey=${API_KEY}`;

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
  }, [category, searchQuery]);

  return { news, error, isLoading };
};

export default useNews;
