import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Article {
  title: string;
  image: string;
  publishedAt: string;
}

interface NewsResponse {
  totalArticles: number;
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
      ? `/search?q=${searchQuery}&apikey=3e752557304a4f7a03b7e55d5f4b0ac5`
      : `/top-headlines?category=${category}&lang=en&country=${country}&max=10&apikey=3e752557304a4f7a03b7e55d5f4b0ac5`;

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
