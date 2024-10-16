import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Article {
  title: string;
  image: string;
  publishedAt: string;
  description: string;
  content: string;
}

export interface NewsResponse<T> {
  totalArticles: number;
  articles: T[];
}

const useNews = (category: string = "general", searchQuery?: string) => {
  const endpoint = searchQuery
    ? `/search?q=${searchQuery}`
    : `/top-headlines?category=${category}&lang=en`;

  const apiClient = new APIClient<Article>(endpoint);

  return useQuery({
    queryKey: ["news", category, searchQuery],
    queryFn: apiClient.getAll,
    staleTime: ms("5m"),
  });
};

export default useNews;
