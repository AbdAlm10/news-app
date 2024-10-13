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
  newsQuery: {},
  setSearchText: (searchText) => set(() => ({ newsQuery: { searchText } })),
  setSelectedTopic: (topic) =>
    set((selectedTopic) => ({
      newsQuery: { ...selectedTopic.newsQuery, topic },
    })),
}));

export default useNewsQueryStore;
