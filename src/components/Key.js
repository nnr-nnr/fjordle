import React from "react";
import "../style/Keyboard.css";

import { useAllGuess } from "../utils/Context";

export default function Key({ letter, id }) {
  const guesses = useAllGuess();

  const handlePress = (event) => {
    const keyboardClick = new KeyboardEvent("keydown", {
      key: id,
    });
    document.dispatchEvent(keyboardClick);
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
      } ${id === "Enter" || id === "Backspace" ? "value-key" : "big-key"}`}
      type="button"
      key={letter}
      onClick={handlePress}
    >
      {letter}
    </button>
  );
}
