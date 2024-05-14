import axios, { AxiosResponse } from "axios";

const fetchImages = async (searchInput: string, page: number): Promise<ImageData[]> => {
  const apiKey = "soIIhOVxblDhlozBu-t3ph783hav1g27jQlrq9LvcmI";
  const perPage = 10;
  const url = `https://api.unsplash.com/search/photos?query=${searchInput}&client_id=${apiKey}&per_page=${perPage}&page=${page}`;

  const response: AxiosResponse<{ results: ImageData[] }> = await axios.get<{ results: ImageData[] }>(url);

  return response.data.results;
};

export { fetchImages };


