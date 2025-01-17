import axios from "axios";

const api = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
  const response = await axios.get(api);
  return response.data;
};
