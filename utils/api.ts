import { ApiEndpoints } from '@/constants/api';

export const get = async <T>(endpoint: ApiEndpoints): Promise<T> => {
  const response = await fetch(endpoint);
  if (response.ok) {
    const data: T = await response.json();
    return data;
  }
  throw new Error(`Failed to fetch data from ${endpoint}`);
};
