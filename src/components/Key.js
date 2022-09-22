import React, { useEffect } from "react";
import "../style/Keyboard.css";

import { useAllGuess } from "../utils/Context";

export default function Key({ letter }) {
  // useEffect(() => {
  //   // if it's not in the word
  //   // if it's in the word but wrong placement
  //   // if it was guessed correctly
  // });
  const guesses = useAllGuess();

  return (
    <button
      className={`kybrdKey ${guesses.includes(letter) ? "green" : ""}`}
      type="button"
      key={letter}
    >
      {letter}
    </button>
  );
}
