import { useState, useEffect } from 'react';
import axios from 'axios';
export const API_URL = "http://46.17.104.8:8000"; // import.meta.env.VITE_API_HOSTNAME;

const promiseWrapper: any = (promise: Promise<any>) => {
  let status = 'pending';
  let result: any;

  const s = promise.then(
    (value: string) => {
      status = 'success';
      result = value;
    },
    (error: string) => {
      status = 'error';
      result = error;
    }
  );

  return () => {
    switch (status) {
    case 'pending':
      throw s;
    case 'success':
      return result;
    case 'error':
      return null;
    default:
      throw result;
    }
  };
};

export const fetchData = async (request: string, method: 'GET' | 'POST' | 'DELETE') => {
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
  const [resource, setResource] = useState<any>(null);

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
