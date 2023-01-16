import { useEffect, useState } from "react";

const ExampleOne = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://random.dog/woof.json";

  useEffect(() => {
    fetch(URL)
      // syntax for handling promises
      .then((res) => {
        // check to see if response is okay
        if (res.ok) {
          // if okay, take JSON and parse to JavaScript object
          return res.json();
        }
        throw res;
      })
      //  .json() returns a promise as well
      .then((data) => {
        console.log(data);
        // setting response as the data state
        setData(data);
      })
      // if res is not okay the res is thrown here for error
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

export default ExampleOne;
