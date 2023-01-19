import { useGetDogQuery } from "../redux/rtkQueryService";

const ExampleSix = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetDogQuery();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <img src={data.url} alt="random dog" width="500px" height="500px" />;
};

export default ExampleSix;
