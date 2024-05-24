import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://e-sme-api.vercel.app/api/client/",
});

export const fetchProductsByStore = (storeSlug: string) =>
  api.get(`stores/products/${storeSlug}`);
export const fetchStoreDetails = (storeSlug: string) =>
  api.get(`stores/${storeSlug}`);
