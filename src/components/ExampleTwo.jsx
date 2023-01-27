import { useEffect, useState } from "react";
import axios from "axios";

const ExampleTwo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://random.dog/woof.json";

  useEffect(() => {
    axios.get(URL)
      // syntax for handling promises
      .then((res) => {
        console.log(res.data);
        // axios converts json to object for us (shortens our code)
        setData(res.data);
      })
      // axios takes care of error handling for us instead of checking manually
      .catch((err) => {
        console.error(`Error: ${err}`);
        // setting the error state
        setError(err);
      })
      //  regardless if promise resolves successfully or not we remove loading state
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return <img src={data.url} alt="random dog" width="500px" height="500px" />;
};

export default ExampleTwo;
