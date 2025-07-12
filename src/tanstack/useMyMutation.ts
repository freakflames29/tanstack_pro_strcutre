import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosRequestConfig } from "axios";
import axiosInstace from "../axios/axiosInstance";
type Method = "post" | "put" | "patch" | "delete";

export const useMyMutation = <T = any, V = any>(
  endpoint: string,
  payload?: V,
  config?: {
    mutaionKey?: string[];
    method?: Method;
    headers?: AxiosRequestConfig["headers"];
    onSuccess?: (data: T) => void;
    onError?: (err: any) => void;
  }
) => {
  const method = config?.method || "post";

  return useMutation({
    mutationKey: config?.mutaionKey,
    mutationFn: async () => {
      const res = await axiosInstace.request<T>({
        url: endpoint,
        method,
        data: payload,
        headers: config?.headers,
      });
      return res.data;
    },
    onSuccess: config?.onSuccess,
    onError: config?.onError,
  });
};
