import { useState, useEffect } from 'react';
import axios from 'axios';
import {IProductType} from "../../pages/subcom/types/IProductType";
export const API_HOSTNAME = import.meta.env.VITE_API_HOSTNAME;

export const fetchData = async (request: string, method: 'GET' | 'POST' | 'DELETE') => {
  const API_URL = "http://" + API_HOSTNAME + ":8000"
  console.warn("API_URL: " + API_URL)
  try {
    const response = await axios({ method, url: API_URL + request });
    if (response.data.type !== 'error') {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export function useApiData(request: string, method: 'GET' | 'POST') {
  const [resource, setResource] = useState<IProductType[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchDataAsync = async () => {
      const data = await fetchData(request, method);
      if (isMounted) {
        setResource(data);
      }
    };

    fetchDataAsync();

    return () => {
      isMounted = false;
    };
  }, [request, method]);

  return resource;
}
