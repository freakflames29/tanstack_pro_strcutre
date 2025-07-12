import { useQuery } from '@tanstack/react-query';
import axios, {type AxiosRequestConfig } from 'axios';
import axiosInstace from '../axios/axiosInstance';

export const useMyQuery = <T = any>(
  endpoint: string,
  config?: {
    enabled?: boolean;
    headers?: AxiosRequestConfig['headers'];
    queryKey?: unknown[];
  
  }
) => {
  const queryKey = config?.queryKey || [endpoint];

  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const res = await axiosInstace.get(endpoint, {
        headers: config?.headers,
      });
      return res.data;
    },
    enabled: config?.enabled ?? true,
  });
};
