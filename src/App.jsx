import "./App.css";
import ExampleOne from "./components/ExampleOne";
import ExampleTwo from "./components/ExampleTwo";
import ExampleThree from "./components/ExampleThree";

function App() {

  return (
    <div className="App">

      <h1>Data Fetching In React</h1>

      <h2>Example API: Random Dog Image</h2>

      {/* Fetch API w/ .then() syntax */}
      {/* <ExampleOne /> */}

      {/* Axios Example w/ .then() syntax */}
      {/* <ExampleTwo /> */}

      {/* Axios Example w/ async/await syntax */}
      <ExampleThree />

    </div>
  );
}

export default App;
