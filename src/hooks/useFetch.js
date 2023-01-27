import { useEffect, useState } from "react";
import axios from "axios";

// create our own custom hook (alternatively can use 'react-fetch-hook' which is essentially same)
// pass in url as arg to add more reusability
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // create async function b/c cannot use asyc in useEffect arg cb
    const fetchData = async () => {
      //   with async/await use the try catch block syntax for handling
      try {
        // using await to make async code look sync and shorten
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.error(`Error: ${err}`);
        // setting the error state
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
