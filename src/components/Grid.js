import React from "react";
import "../style/Grid.css";
import Row from "./Row";

export default function Grid() {
  const rows = [...Array(5).keys()].map((i) => <Row rowNum={i} key={i} />);
  return (
    <div>
      <div className="gridHolder">{rows}</div>
    </div>
  );
}

// export default function Grid() {
//   const cells = [...Array(60).keys()].map((i) => <Cell id={i} key={i} />);
//   return (
//     <div>
//       {/* <div className="guideHolder">
//         <span className="guide">L A T</span>
//         <span className="guide">,</span>
//         <span className="guide">L O N G</span>
//       </div> */}
//       <div className="gridHolder">{cells}</div>
//     </div>
//   );
// }
