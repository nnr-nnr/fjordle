import React from "react";
import "../style/Keyboard.css";

import { useAllGuess } from "../utils/Context";

export default function Key({ letter }) {
  const guesses = useAllGuess();

  const handlePress = (event) => {
    const key = event.key;
    console.log("key letter", letter);
    console.log(guesses);
  };

  return (
    <button
      className={`kybrdKey ${
        guesses.green.includes(letter)
          ? "green"
          : guesses.yellow.includes(letter)
          ? "yellow"
          : guesses.grey.includes(letter)
          ? "grey"
          : ""
      }`}
      type="button"
      key={letter}
      onClick={handlePress}
    >
      {letter}
    </button>
  );
}
