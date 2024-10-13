import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { API_KEY } from "../services/constants";
import APIClient from "../services/api-client";

export interface Article {
  title: string;
  image: string;
  publishedAt: string;
}

export interface NewsResponse<T> {
  totalArticles: number;
  articles: T[];
}

const useNews = (category: string = "general", searchQuery?: string) => {
  const endpoint = searchQuery
    ? `/search?q=${searchQuery}&apikey=${API_KEY}`
    : `/top-headlines?category=${category}&country=us&apikey=${API_KEY}`;

  const apiClient = new APIClient<Article>(endpoint);

  return useQuery({
    queryKey: ["news", category, searchQuery],
    queryFn: apiClient.getAll,
    staleTime: 5 * 60 * 1000, //5m
  });
};

export default useNews;
