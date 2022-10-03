import React, { useState, useEffect } from "react";
import "../style/Grid.css";
import { useRowIndex } from "../utils/Context";
import Cell from "./Cell";

export default function Row({ rowNum }) {
  const [invalidGuess, toggleInvalidGuess] = useState(false);
  //   const [classes, setClasses] = useState("");

  //   const currRowIndex = useRowIndex();
  //   useEffect(() => {
  //     if (invalidGuess) {
  //       setClasses("invalid");
  //     }
  //     return setClasses("");
  //   }, [currRowIndex]);

  const cells = [...Array(12).keys()].map((i) => (
    <Cell
      id={i + rowNum * 12}
      decimalIndex={i > 10 ? i - 3 : i > 5 ? i - 2 : i > 3 ? i - 1 : i}
      key={i}
      rowNum={rowNum}
      toggleInvalidGuess={toggleInvalidGuess}
    />
  ));
  return (
    <div>
      <div className={`row ${invalidGuess ? " invalid " : ""} `}>{cells}</div>
    </div>
  );
}
