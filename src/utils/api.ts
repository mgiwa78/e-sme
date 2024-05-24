import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9001/api/client/",
});

export const fetchProductsByStore = (storeSlug: string) =>
  api.get(`stores/products/${storeSlug}`);
export const fetchStoreDetails = (storeSlug: string) =>
  api.get(`stores/${storeSlug}`);
