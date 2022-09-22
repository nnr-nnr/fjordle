import React from "react";
import "../style/Keyboard.css";

export default function Key({ letter }) {
  return (
    <button className="key" type="button" data-key={letter}>
      {letter}
    </button>
  );
}
