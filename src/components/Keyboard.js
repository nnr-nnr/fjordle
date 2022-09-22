import React from "react";
import "../style/Keyboard.css";
import Key from "./Key";

export default function Keyboard() {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
    (letter, index) => <Key letter={letter} key={index} />
  );
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map(
    (letter, index) => <Key letter={letter} key={index + row1.length} />
  );
  const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M"].map(
    (letter, index) => (
      <Key letter={letter} key={index + row1.length + row2.length} />
    )
  );
  const backspace = (
    <Key
      letter={
        <i className="fa fa-angle-double-left icon" aria-hidden="true"></i>
      }
    />
  );
  return (
    <div className="board">
      <div className="kybrdRow">{row1}</div>
      <div className="kybrdRow">{row2}</div>
      <div className="kybrdRow">
        {row3} {backspace}{" "}
      </div>
    </div>
  );
}
