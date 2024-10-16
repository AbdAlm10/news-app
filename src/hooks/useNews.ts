import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import useNewsQueryStore from "../store";

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: { name: string };
}

export interface NewsResponse<T> {
  totalArticles: number;
  articles: T[];
}

const useNews = () => {
  const { topic, searchText } = useNewsQueryStore((s) => s.newsQuery);
  const endpoint = searchText
    ? `/search?q=${searchText}`
    : `/top-headlines?category=${topic}&lang=en`;

  const apiClient = new APIClient<Article>(endpoint);

  return useQuery({
    queryKey: ["news", topic, searchText],
    queryFn: apiClient.getAll,
    staleTime: ms("5m"),
  });
};

export default useNews;
