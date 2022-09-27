import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { GuessProvider } from "./utils/Context";
import Navbar from "./components/Navbar";

function App() {
  return (
    <GuessProvider>
      <div className="App">
        <Navbar />
        <Grid />
        <Keyboard />
      </div>
    </GuessProvider>
  );
}

export default App;
