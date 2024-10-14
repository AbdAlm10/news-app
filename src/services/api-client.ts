import axios from "axios";
import { NewsResponse } from "../hooks/useNews";

const axiosInstance = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: {
    apikey: "3e752557304a4f7a03b7e55d5f4b0ac5",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<NewsResponse<T>>(this.endpoint)
      .then((res) => res.data.articles);
  };
}

export default APIClient;
