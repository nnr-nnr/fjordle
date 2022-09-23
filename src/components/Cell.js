import React, { useState, useEffect } from "react";
import "../style/Grid.css";

import {
  useGuessIndex,
  useGuessIndexUpdate,
  useCurrGuess,
  useCurrGuessUpdate,
  useAnswer,
  useAllGuess,
  useAllGuessUpdate,
} from "../utils/Context";

export default function Cell({ id }) {
  const [value, setValue] = useState("");
  const currGuess = useCurrGuess();
  const updateCurrGuess = useCurrGuessUpdate();
  const updateAllGuess = useAllGuessUpdate();
  const allGuesses = useAllGuess();
  const guessIndex = useGuessIndex();
  const updateGuessIndex = useGuessIndexUpdate();
  const ans = useAnswer();

  const checkGuess = () => {
    const classes = "rowInd" + (id % 5).toString();
    const val = value.toUpperCase();
    if (val === "") {
      return classes;
    } else if (val === ans[id % 5]) {
      return classes + " green";
    } else if (ans.includes(val)) {
      return classes + " yellow";
    } else {
      return classes + " grey";
    }
  };

  const flipped = () => {
    return Math.floor(id / 5) < Math.floor(guessIndex / 5);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(allGuesses);
      const key = event.key;
      // check backspace
      if (key === "Backspace") {
        // check first guess, not first in row
        if (guessIndex > 0 && guessIndex % 5 !== 0) {
          setValue("");
          updateGuessIndex(guessIndex - 1);
          updateCurrGuess(currGuess.substring(0, currGuess.length - 1));
        } else {
          setValue("");
        }
      } // check alphabetical
      else if (key.length === 1 && key.match(/[a-zA-Z]/)) {
        // check last in row
        if (guessIndex % 5 === 4) {
          if (value === "") {
            setValue(key);
            updateCurrGuess(currGuess + key);
          }
        } else if (guessIndex < 29) {
          setValue(key);
          updateCurrGuess(currGuess + key);
          updateGuessIndex(guessIndex + 1);
        }
      } else if (key === "Enter" && guessIndex % 5 === 4 && value !== "") {
        updateGuessIndex(guessIndex + 1);
        [...currGuess].forEach((letter, index) =>
          updateAllGuess(letter.toUpperCase(), index)
        );
        // updateAllGuess(currGuess);
        updateCurrGuess("");
        // updateGuesses(value);
      }
    };

    if (guessIndex === id) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  });

  return (
    <div
      className={`cell  ${guessIndex === id ? "curr" : ""} ${
        value !== "" ? "guessed" : ""
      } ${flipped() ? checkGuess() : ""} `}
    >
      <span>{value}</span>
    </div>
  );
}
