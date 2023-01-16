import "./App.css";
import ExampleOne from "./components/ExampleOne";

function App() {

  return (
    <div className="App">

      <h1>Data Fetching In React</h1>

      <h2>Example API: Random Dog Image</h2>

      {/* Fetch API w/ .then() syntax */}
      <ExampleOne />

    </div>
  );
}

export default App;
