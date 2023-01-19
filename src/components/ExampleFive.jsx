import { useQuery } from "react-query";

const ExampleFive = () => {
  const URL = "https://random.dog/woof.json";

  const { isLoading, error, data } = useQuery("repoData", () => fetch(URL).then((res) => res.json()));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
  return <img src={data.url} alt="random dog" width="500px" height="500px" />;
};

export default ExampleFive;
