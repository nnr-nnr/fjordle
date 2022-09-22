import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
// import Map from "./components/Map";
import { GuessProvider } from "./utils/Context";
import MyGlobe from "./components/Globe";

function App() {
  return (
    <GuessProvider>
      <div className="App">
        <div>
          <h1>Fjordle</h1>
        </div>

        <Grid />
        <MyGlobe />

        <Keyboard />
        {/* <Map /> */}
      </div>
    </GuessProvider>
  );
}

export default App;
