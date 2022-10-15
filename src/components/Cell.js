import React, { useState, useEffect } from "react";
import "../style/Grid.css";

import {
  // useGuessIndex,
  // useGuessIndexUpdate,
  // useCurrGuess,
  // useCurrGuessUpdate,
  useAnswer,
  // useAllGuess,
  useAllGuessUpdate,
  useHasSolvedContext,
  useHasSolvedUpdateContext,
  // useRowIndex,
  // useRowIndexUpdate,
} from "../utils/Context";

import {
  useGuessIndex,
  useGuessIndexUpdate,
  useRowIndex,
  useRowIndexUpdate,
} from "../components/Grid";

import { useCurrGuess, useCurrGuessUpdate } from "../components/Row";

export default function Cell({
  id,
  decimalIndex,
  toggleInvalidGuess,
  rowNum,
  addAttempt,
}) {
  const hasSolved = useHasSolvedContext();
  const setHasSolved = useHasSolvedUpdateContext();
  const currGuess = useCurrGuess();
  const updateCurrGuess = useCurrGuessUpdate();
  const updateAllGuess = useAllGuessUpdate();
  // const allGuesses = useAllGuess();
  const guessIndex = useGuessIndex();
  const updateGuessIndex = useGuessIndexUpdate();
  const ansData = useAnswer();
  const ans = ansData.strCoords;
  const currRowIndex = useRowIndex();
  const updatecurrRowIndex = useRowIndexUpdate();

  const isSignedCell = () => {
    return (
      (id % 12 === 0 || id % 12 === 6) &&
      rowNum === currRowIndex &&
      (value === "" || value === "+/-")
    );
  };
  const isComma = () => {
    return id % 12 === 5;
  };
  const isDecimalCell = () => {
    return id % 12 === 3 || id % 12 === 10;
  };
  const skipNextCell = () => {
    return id % 12 === 4 || id % 12 === 2 || id % 12 === 9;
  };
  const skipPrevCell = () => {
    return id % 12 === 4 || id % 12 === 6 || id % 12 === 11;
  };
  const [value, setValue] = useState(
    isDecimalCell() ? "." : isComma() ? "," : isSignedCell() ? "+/-" : ""
  );

  const isValidGuess = () => {
    const latGuess = parseFloat(currGuess.substring(0, 4)) / 10.0;
    const lngGuess = parseFloat(currGuess.substring(4, 12)) / 10.0;
    return (
      -90.0 <= latGuess &&
      latGuess <= 90.0 &&
      -180.0 <= lngGuess &&
      lngGuess <= 180.0
    );
  };

  const checkGuess = () => {
    const classes = "Ind" + (id % 12).toString();
    // console.log("\n\nans", ans);
    // console.log("value", value);
    // console.log("ans.indexOf(value)", ans.indexOf(value));
    // console.log("id % 12", id % 12);
    if (!isDecimalCell() && !isComma()) {
      if (value === "") {
        return classes;
      } else if (ans[decimalIndex] === value) {
        return classes + " green";
      } else if (ans.indexOf(value) > -1) {
        return classes + " yellow";
      } else {
        return classes + " grey";
      }
    }
  };

  const flipped = () => {
    return rowNum < currRowIndex;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      // console.log("\n\nKEYDOWN", key);

      // check backspace
      if (key === "Backspace") {
        if (id % 12 === 0) {
          // console.log("Backspace1");
          setValue("+/-");
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1));
        } else if (value === "" || value === "+/") {
          // console.log("BackspaceR");
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1) + "R");
          skipPrevCell()
            ? updateGuessIndex(guessIndex - 2)
            : updateGuessIndex(guessIndex - 1);
        } else {
          // console.log("Backspace3");
          setValue(isSignedCell() ? "+/-" : "");
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1));
        }
      } else if (isSignedCell()) {
        if (key.match(/\+|-/) && key.length === 1) {
          // console.log("+/-");
          setValue(key);
          updateCurrGuess(currGuess + key);
          skipNextCell()
            ? updateGuessIndex(guessIndex + 2)
            : updateGuessIndex(guessIndex + 1);
        }
      } else if (key.match(/[0-9]/) && key.length === 1) {
        // check last in row
        if (id % 12 === 11 && value === "") {
          // console.log("0-9 ( last)");
          setValue(key);
          updateCurrGuess(currGuess + key);
        } else if (id % 12 < 11) {
          // console.log("0-9");
          setValue(key);
          updateCurrGuess(currGuess + key);
          skipNextCell()
            ? updateGuessIndex(guessIndex + 2)
            : updateGuessIndex(guessIndex + 1);
        }
      } else if (key === "Enter" && id % 12 === 11 && value !== "") {
        if (isValidGuess()) {
          // console.log("Enter (valid)");
          updatecurrRowIndex(currRowIndex + 1);
          updateGuessIndex(guessIndex + 1);
          [...currGuess].forEach((letter, index) => {
            updateAllGuess(letter, index, decimalIndex);
          });
          addAttempt(currGuess);
          if (currGuess === ans) {
            console.log("solved");
            setHasSolved(1);
          } else {
            if (id >= 59) {
              setHasSolved(2);
            }
            console.log("not solved");
          }
          updateCurrGuess("");
        } else {
          console.log("INVALID");
          toggleInvalidGuess(true);
        }
      }
      // console.log("id", id);
      // console.log("guessIndex", guessIndex);
      // console.log("currGuess", currGuess);
      // console.log("ans", ans);
      // console.log("currRowIndex", currRowIndex);
      // console.log("allGuesses", allGuesses);
    };

    if (guessIndex === id && hasSolved < 1) {
      if (currGuess.indexOf("R") > -1) {
        updateCurrGuess(currGuess.substring(0, currGuess.length - 1));

        setValue("");
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  });

  return (
    <div
      className={`cell ${
        guessIndex === id && rowNum === currRowIndex ? "curr" : ""
      } ${value !== "" && value !== "+/-" ? "guessed" : ""} ${
        flipped() ? checkGuess() : ""
      } ${isSignedCell() ? "signedCell" : ""} ${
        isDecimalCell() ? "decimalCell" : ""
      } ${isComma() ? "commaCell" : ""} `}
    >
      <span>{isSignedCell() ? "+/-" : value}</span>
    </div>
  );
}
