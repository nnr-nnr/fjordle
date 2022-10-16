import React, { useContext, useState } from "react";

import { coordValues } from "../utils/Values";

// HAS SOLVED
const HasSolvedContext = React.createContext();
const HasSolvedUpdateContext = React.createContext();
export function useHasSolvedContext() {
  return useContext(HasSolvedContext);
}
export function useHasSolvedUpdateContext() {
  return useContext(HasSolvedUpdateContext);
}
// Solved codes:
// 0 = has not solved, game not over
// 1 = has solved, game over
// 2 = has not solved, game over

// ALL GUESSES
const AllGuessContext = React.createContext();
const AllGuessUpdateContext = React.createContext();
export function useAllGuess() {
  return useContext(AllGuessContext);
}
export function useAllGuessUpdate() {
  return useContext(AllGuessUpdateContext);
}

// ANS
const AnswerContext = React.createContext();
export function useAnswer() {
  return useContext(AnswerContext);
}

const preFixCoordStrs = (coord, isLng) => {
  const absCoord = Math.abs(coord);
  let coordStrd = coord > 0 ? "+" : "-";
  const len = isLng ? 5 : 4;
  if (absCoord < 1) {
    coordStrd = coordStrd
      .concat("000", Math.round(absCoord * 10) / 10.0)
      .replace(".", "");
  } else if (absCoord < 10) {
    coordStrd = coordStrd
      .concat("00", Math.round(absCoord * 10) / 10.0)
      .replace(".", "");
  } else if (isLng && absCoord < 100) {
    coordStrd = coordStrd
      .concat("0", Math.round(absCoord * 10) / 10.0)
      .replace(".", "");
  } else {
    coordStrd = coordStrd
      .concat(Math.round(absCoord * 10) / 10.0)
      .replace(".", "");
  }

  while (coordStrd.length < len) {
    coordStrd = coordStrd.concat("0");
  }

  return coordStrd;
};

const strAnswer = (lat, lng) => {
  let latStr = preFixCoordStrs(lat, false);
  let lngStr = preFixCoordStrs(lng, true);
  const ans = latStr.concat(lngStr);
  console.log(ans);
  return ans;
};

const todayCoords = () => {
  const start = new Date("October 10, 2022 00:00:00").getTime();
  const now = Date.now();
  const nDays = Math.floor((now - start) / (60 * 60 * 1000 * 24));
  const data = coordValues[coordValues.length % nDays];
  data.strCoords = strAnswer(data.lat, data.lng);
  // console.log("ans", data);
  return data;
};

export function GuessProvider({ children }) {
  // ALL GUESSES
  const [allGuess, setAllGuess] = useState({ green: [], yellow: [], grey: [] }); //check where this is used

  // HAS SOLVED
  const [hasSolved, setHasSolved] = useState(0);

  // ANS
  const ans = todayCoords(); //useState("+192-1732");

  function updateAllGuess(letter, index, decimalIndex) {
    // console.log(letter);
    // console.log("\n\nans", ans);
    // console.log("letter", letter);
    // console.log("ans.indexOf(letter)", ans.indexOf(letter));
    // console.log("ans[decimalIndex]", ans[decimalIndex]);
    // console.log("index of letter in guess", index);

    const strCoords = ans.strCoords;
    if (strCoords[index] === letter) {
      // console.log("green");
      setAllGuess((prevState) => ({
        green:
          prevState.green.indexOf(letter) < 0
            ? prevState.green.concat(letter)
            : prevState.green,
        yellow: prevState.yellow,
        grey: prevState.grey,
      }));
    } else if (strCoords.includes(letter)) {
      // console.log("yellow");
      setAllGuess((prevState) => ({
        green: prevState.green,
        yellow:
          prevState.yellow.indexOf(letter) < 0
            ? prevState.yellow.concat(letter)
            : prevState.yellow,
        grey: prevState.grey,
      }));
    } else {
      // console.log("grey");
      setAllGuess((prevState) => ({
        green: prevState.green,
        yellow: prevState.yellow,
        grey:
          prevState.grey.indexOf(letter) < 0
            ? prevState.grey.concat(letter)
            : prevState.grey,
      }));
    }

    // console.log("allGuess in context: ", allGuess);
  }

  return (
    <HasSolvedContext.Provider value={hasSolved}>
      <HasSolvedUpdateContext.Provider value={setHasSolved}>
        <AnswerContext.Provider value={ans}>
          <AllGuessContext.Provider value={allGuess}>
            <AllGuessUpdateContext.Provider value={updateAllGuess}>
              {children}
            </AllGuessUpdateContext.Provider>
          </AllGuessContext.Provider>
        </AnswerContext.Provider>
      </HasSolvedUpdateContext.Provider>
    </HasSolvedContext.Provider>
  );
}
