import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Constants from "expo-constants";
const apiKey = Constants.expoConfig.extra.apiKey;

const useFetchHook = (endPoint, query, pageNo) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.co/${endPoint}`,
    params: { ...query, page: pageNo.toString() },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      setHasError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { isLoading, hasError, data, reFetch };
};

export default useFetchHook;
