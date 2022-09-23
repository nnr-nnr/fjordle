import React from "react";
import "../style/Grid.css";
import Cell from "./Cell";

export default function Grid() {
  const cells = [...Array(30).keys()].map((i) => <Cell id={i} key={i} />);
  return (
    <div>
      {/* <div className="guideHolder">
        <span className="guide">L A T</span>
        <span className="guide">,</span>
        <span className="guide">L O N G</span>
      </div> */}
      <div className="gridHolder">{cells}</div>
    </div>
  );
}
