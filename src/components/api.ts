import axios from "axios";

const fetchImages = async (searchInput: string) => {
  const apiKey = "soIIhOVxblDhlozBu-t3ph783hav1g27jQlrq9LvcmI";
  const perPage = 10;
  const url = `https://api.unsplash.com/search/photos?query=${searchInput}&client_id=${apiKey}&per_page=${perPage}`;

  const response = await axios.get(url);

  return response.data.results;
};

export { fetchImages };
