import "./App.css";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";
import ExampleFour from "./components/ExampleFour";
import ExampleFive from "./components/ExampleFive";
import ExampleSix from "./components/ExampleSix";
import { QueryClient, QueryClientProvider } from "react-query";

/*
  HOW TO NAVIGATE:
  - Review each 'Example...' component in components directory
  - Then uncomment each individually in App.jsx for review while running locally

  (*Note* - Sometimes this API provides url paths that no longer exist - if this happens refresh page)
*/

function App() {
  // Client for React Query (Example 5)
  const queryClient = new QueryClient();

  return (
    // Query Client Provider is the wrapper to use React Query (Example 5)
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Data Fetching In React</h1>

        <h2>Example API: Random Dog Image</h2>

        {/* Fetch API w/ .then() syntax */}
        <ExampleOne />

        {/* Axios Example w/ .then() syntax */}
        {/* <ExampleTwo /> */}

        {/* Axios Example w/ async/await syntax */}
        {/* <ExampleThree /> */}

        {/* Component that uses custom React useFetch hook */}
        {/* <ExampleFour /> */}

        {/* Component that uses React Query library */}
        {/* <ExampleFive /> */}

        {/* Component that uses React Redux RTK Query library */}
        {/* <ExampleSix /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
