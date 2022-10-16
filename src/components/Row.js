import React, { useState, useContext } from "react";
import "../style/Grid.css";
// import { useRowIndex } from "../utils/Context";
import Cell from "./Cell";

import { useHasSolvedContext } from "../utils/Context";

import { useRowIndex } from "../components/Grid";

// CURR GUESSS
const CurrGuessContext = React.createContext();
const CurrGuessUpdateContext = React.createContext();
export function useCurrGuess() {
  return useContext(CurrGuessContext);
}
export function useCurrGuessUpdate() {
  return useContext(CurrGuessUpdateContext);
}

export default function Row({ rowNum, addAttempt }) {
  const hasSolved = useHasSolvedContext();
  const rowIndex = useRowIndex();
  // CURR GUESSS
  const [currGuess, setCurrGuess] = useState("");
  function updateCurrGuess(i) {
    setCurrGuess(i);
  }
  const [invalidGuess, toggleInvalidGuess] = useState(false);

  // function invalidator() {
  //   document.querySelector(`.row.${rowNum}`).className = "row";
  //   requestAnimationFrame((time) => {
  //     requestAnimationFrame((time) => {
  //       document.querySelector(
  //         `.row.${rowNum}`
  //       ).className = `row ${rowNum} invalid`;
  //     });
  //   });
  // }
  const cells = [...Array(12).keys()].map((i) => (
    <Cell
      id={i + rowNum * 12}
      decimalIndex={i > 10 ? i - 3 : i > 5 ? i - 2 : i > 3 ? i - 1 : i}
      key={i}
      rowNum={rowNum}
      invalidGuess={invalidGuess}
      toggleInvalidGuess={toggleInvalidGuess}
      addAttempt={addAttempt}
    />
  ));
  return (
    <CurrGuessContext.Provider value={currGuess}>
      <CurrGuessUpdateContext.Provider value={updateCurrGuess}>
        <div>
          {/* check for hassolved */}
          <div
            className={`row ${invalidGuess ? " invalid " : ""} ${
              hasSolved === 1 && rowIndex === rowNum + 1 ? "solved-row" : ""
            } `}
          >
            {cells}
          </div>
        </div>
      </CurrGuessUpdateContext.Provider>
    </CurrGuessContext.Provider>
  );
}

// rowNum,
// currGuess,
// updateCurrGuess,
// guessIndex,
// setGuessIndex,
// rowIndex,
// setRowIndex,

// <Cell
//   id={i + rowNum * 12}
//   decimalIndex={i > 10 ? i - 3 : i > 5 ? i - 2 : i > 3 ? i - 1 : i}
//   key={i}
//   rowNum={rowNum}
//   toggleInvalidGuess={toggleInvalidGuess}
//   currGuess={currGuess}
//   updateCurrGuess={updateCurrGuess}
//   guessIndex={guessIndex}
//   setGuessIndex={setGuessIndex}
//   rowIndex={rowIndex}
//   setRowIndex={setRowIndex}
// />
