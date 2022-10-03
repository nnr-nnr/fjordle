import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
// import Map from "./components/Map";
import { GuessProvider } from "./utils/Context";
// import MyGlobe from "./components/Globe";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GuessProvider>
        <div className="App">
          <Navbar togglePopup={togglePopup} />

          {/* <Map /> */}
          <Grid />
          {/* <MyGlobe /> */}
          <Keyboard />
          {isOpen && <Popup handleClose={togglePopup} />}
        </div>
      </GuessProvider>
    </>
  );
}

export default App;
