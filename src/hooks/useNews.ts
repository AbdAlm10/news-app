import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { API_KEY } from "../services/constants";

export interface Article {
  title: string;
  image: string;
  publishedAt: string;
}

interface NewsResponse<T> {
  totalArticles: number;
  articles: T[];
}

const useNews = (category: string = "general", searchQuery?: string) => {
  const endpoint = searchQuery
    ? `/search?q=${searchQuery}&apikey=${API_KEY}`
    : `/top-headlines?category=${category}&country=us&apikey=${API_KEY}`;

  return useQuery({
    queryKey: ["news", category, searchQuery],
    queryFn: async () => {
      const response = await apiClient.get<NewsResponse<Article>>(endpoint);
      return response.data.articles; // Return articles directly
    },
    staleTime: 5 * 60 * 1000, //5m
  });
};

export default useNews;
