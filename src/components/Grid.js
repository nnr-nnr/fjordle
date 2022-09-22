import React from "react";
import "../style/Grid.css";
import Cell from "./Cell";

export default function Grid() {
  const cells = [...Array(30).keys()].map((i) => <Cell id={i} key={i} />);
  return <div className="gridHolder">{cells}</div>;
}
