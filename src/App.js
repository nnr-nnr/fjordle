import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import Map from "./components/Map";
import { GuessProvider } from "./utils/Context";
import MyGlobe from "./components/Globe";
import Navbar from "./components/Navbar";
require("dotenv").config();

function App() {
  const [attempts, setAttempts] = useState([]);
  const addAttempt = (strCoords) => {
    setAttempts(attempts.concat(strCoords));
  };
  return (
    <>
      <GuessProvider>
        <div className="App">
          <Navbar attemptsLen={attempts.length} />

          <MyGlobe attempts={attempts} />

          <Map />
          <Grid addAttempt={addAttempt} attempts={attempts} />

          <Keyboard />
        </div>
      </GuessProvider>
    </>
  );
}

export default App;
