import useFetch from "../hooks/useFetch";

const URL = "https://random.dog/woof.json";

const ExampleFour = () => {
  const { data, loading, error } = useFetch(URL);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return <img src={data.url} alt="random dog" width="500px" height="500px" />;
};

export default ExampleFour;
