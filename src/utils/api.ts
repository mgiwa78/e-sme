import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { errorHandler } from "./errorHandler";
import { error } from "console";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://e-sme-api.vercel.app/api/client/",
});

export const get = async <T>(url: string, token?: string): Promise<any> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error: any) {
    errorHandler(error);
  }
};

export const post = async <T>(
  url: string,
  data?: any,
  token: string | null = null,
  isPrompt: boolean = false,
  prompt: string = ""
): Promise<any> => {
  try {
    const response: AxiosResponse<T> = await api.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error: any) {
    errorHandler(error);
  }
};

export const put = async <T>(
  url: string,
  data?: any,
  token: string | null = null,
  isPrompt: boolean = false,
  prompt: string = ""
): Promise<any> => {
  try {
    const response: AxiosResponse<T> = await api.put(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    errorHandler(error);
  }
};
export const patch = async <T>(
  url: string,
  data?: any,
  token: string | null = null,
  isPrompt: boolean = false,
  prompt: string = ""
): Promise<any> => {
  try {
    const response: AxiosResponse<T> = await api.patch(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    errorHandler(error);
  }
};

export const del = async <T>(
  url: string,
  token: string | null = null,
  isPrompt: boolean = false,
  prompt: string = ""
): Promise<any> => {
  try {
    const response: AxiosResponse<T> = await api.delete(url);
    return response.data;
  } catch (error: any) {
    errorHandler(error);
  }
};

export const fetchProductsByStore = (storeSlug: string) =>
  api.get(`stores/products/${storeSlug}`);
export const fetchStoreDetails = (storeSlug: string) =>
  api.get(`stores/${storeSlug}`);
