import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
// import Map from "./components/Map";
import { GuessProvider } from "./utils/Context";
import MyGlobe from "./components/Globe";
import Navbar from "./components/Navbar";

function App() {
  return (
    <GuessProvider>
      <div className="App">
        <Navbar />

        {/* <Map /> */}
        <Grid />
        <MyGlobe />
        <Keyboard />
      </div>
    </GuessProvider>
  );
}

export default App;
