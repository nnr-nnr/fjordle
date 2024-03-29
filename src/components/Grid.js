import React, { useState, useContext } from "react";
import "../style/Grid.css";
import Row from "./Row";

// GUESS INDEX
const GuessIndexContext = React.createContext();
const GuessIndexUpdateContext = React.createContext();
export function useGuessIndex() {
  return useContext(GuessIndexContext);
}
export function useGuessIndexUpdate() {
  return useContext(GuessIndexUpdateContext);
}

// ROW INDEX
const RowIndexContext = React.createContext();
const RowIndexUpdateContext = React.createContext();
export function useRowIndex() {
  return useContext(RowIndexContext);
}
export function useRowIndexUpdate() {
  return useContext(RowIndexUpdateContext);
}

export default function Grid({ addAttempt, numRows = 5, attempts }) {
  // console.log("grid");
  // GUESS INDEX
  const [guessIndex, setGuessIndex] = useState(0);
  function updateGuessIndex(i) {
    setGuessIndex(i);
  }

  // ROW INDEX
  const [rowIndex, setRowIndex] = useState(0); //MOVE TO GRID PROPERTY
  function updateRowIndex(i) {
    setRowIndex(i);
  }

  const rows = [...Array(numRows).keys()].map((i) => (
    <Row rowNum={i} key={i} addAttempt={addAttempt} />
  ));
  return (
    <GuessIndexContext.Provider value={guessIndex}>
      <GuessIndexUpdateContext.Provider value={updateGuessIndex}>
        <RowIndexContext.Provider value={rowIndex}>
          <RowIndexUpdateContext.Provider value={updateRowIndex}>
            <div className="gridAreaHolder">
              <div className="gridGuidesHolder">
                <div className="gridGuide">
                  <p>L A T I T U D E</p>
                </div>
                <div className="gridGuide">
                  <p>L O N G I T U D E</p>
                </div>
              </div>

              <div className="gridHolder">{rows}</div>
            </div>
          </RowIndexUpdateContext.Provider>
        </RowIndexContext.Provider>
      </GuessIndexUpdateContext.Provider>
    </GuessIndexContext.Provider>
  );
}
