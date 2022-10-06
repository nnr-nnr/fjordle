import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
// import Map from "./components/Map";
import { GuessProvider } from "./utils/Context";
import MyGlobe from "./components/Globe";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import * as ReactDOM from "react-dom/client";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("all years");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // const root = ReactDOM.createRoot(document.getElementById("root")); //getElementById("root")
  // root.render(
  return (
    <>
      <GuessProvider>
        <div className="App">
          <Navbar togglePopup={togglePopup} />

          <MyGlobe />

          {/* <Map /> */}
          <Grid />

          <Keyboard />
          {isOpen && <Popup handleClose={togglePopup} />}
        </div>
      </GuessProvider>
    </>
  );
}

export default App;
