import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "BahAL1U6qGzxg3cR9jdqD-OUW2Qhf7o1TXo_LVS3rJc";

const fetchImages = async (query, page = 1) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;
