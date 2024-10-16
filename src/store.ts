import { create } from "zustand";

export interface NewsQuery {
  topic?: string | "genre";
  searchText?: string;
}

interface NewsQueryStore {
  newsQuery: NewsQuery;
  setSearchText: (searchText: string) => void;
  setSelectedTopic: (selectedTopic: string) => void;
}

const useNewsQueryStore = create<NewsQueryStore>((set) => ({
  newsQuery: { topic: "general", searchText: "" }, // Default topic set
  setSearchText: (searchText) =>
    set((state) => ({
      newsQuery: { ...state.newsQuery, searchText },
    })),
  setSelectedTopic: (topic) =>
    set((state) => ({
      newsQuery: { ...state.newsQuery, topic, searchText: "" }, // Reset search text on topic change
    })),
}));
export default useNewsQueryStore;
