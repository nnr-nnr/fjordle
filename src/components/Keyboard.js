import React from "react";
import "../style/Keyboard.css";
import Key from "./Key";
import { useIsMobile } from "../utils/hooks";
import { useRowIndexUpdate } from "./Grid";

export default function Keyboard() {
  const isMobile = useIsMobile();
  const rowArr = isMobile
    ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "0", "+", "ENTER"]
    : ["ENTER", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+"];
  const row = rowArr.map((letter, index) => (
    <Key
      letter={letter}
      id={letter === "ENTER" ? "Enter" : letter}
      key={index}
    />
  ));

  const backspace = (
    <Key
      id={"Backspace"}
      key={13}
      letter={
        <i className="fa fa-angle-double-left icon" aria-hidden="true"></i>
      }
    />
  );

  return (
    <div className="board">
      {isMobile ? (
        <>
          <div className="kybrdRow">{row.slice(0, -1)}</div>
          <div className="kybrdRowMobile">
            {row[row.length - 1]} {backspace}
          </div>
        </>
      ) : (
        <>
          <div className="kybrdRow">
            {row} {backspace}
          </div>
        </>
      )}
    </div>
  );
}
