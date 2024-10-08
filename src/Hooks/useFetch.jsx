import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, customParams = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url,
    params: {
      api_key: "742d5a8f6d825856e9f0e6860a185669",

      ...customParams,
    },
  };

  const { page ,query} = customParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios(options);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [page,query,url]);

  return [data, loading, error];
};
