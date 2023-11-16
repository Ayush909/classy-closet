import { useEffect, useState } from "react";
import { makeRequest } from "../utils/makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchProducts();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
