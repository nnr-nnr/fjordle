import React from "react";
import "../style/Keyboard.css";
import Key from "./Key";

export default function Keyboard() {
  const row = [
    "ENTER",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "+",
  ].map((letter, index) => <Key letter={letter} key={index} />);
  const backspace = (
    <Key
      letter={
        <i className="fa fa-angle-double-left icon" aria-hidden="true"></i>
      }
    />
  );
  return (
    <div className="board">
      <div className="kybrdRow">
        {row} {backspace}{" "}
      </div>
    </div>
  );
}
