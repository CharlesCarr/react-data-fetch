import { useEffect, useState } from "react";
import axios from "axios";

const ExampleThree = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://random.dog/woof.json";

  useEffect(() => {
    // create async function b/c cannot use async in useEffect arg cb
    const fetchData = async () => {
    //   with async/await use the try catch block syntax for handling
      try {
        // using await to make async code look sync and shorten 
        const res = await axios.get(URL);
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

  if (loading) return "Loading...";
  if (error) return "Error!";

  return <img src={data.url} alt="random dog" width="500px" height="500px" />;
};

export default ExampleThree;
