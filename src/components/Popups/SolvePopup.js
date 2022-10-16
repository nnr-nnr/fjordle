import React from "react";
import "../../style/Popup.css";

import { useAnswer, useHasSolvedContext } from "../../utils/Context";

const formatLocation = (ans) => {
  return (
    (ans.name ? " near " + ans.name + " in " : ans.city ? " near " : " in ") +
    (ans.city ? ans.city + ", " : "") +
    (ans.prov ? ans.prov + ", " : "") +
    (ans.state ? ans.state + "." : ".")
  );
};

const solveStatusMsg = (solveStatus = 0, numAttempts) => {
  if (solveStatus === 2) {
    return "Nice try!";
  } else if (solveStatus === 1) {
    //check attempts length for # guesses
    return `Great job! You solved the FJORDLE in ${numAttempts} attempt${
      numAttempts > 1 ? "s" : ""
    }.`;
  } else {
    return "Great effort!";
  }
};

export default function SolvePopup({ handleClose, numAttempts }) {
  const ansData = useAnswer();
  const solveStatus = useHasSolvedContext();
  const loc = formatLocation(ansData);
  return (
    <div className="popup-box">
      <div className="content-box solve">
        <button type="button" onClick={handleClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="subtitle-holder">
          <span className="subtitle">SUMMARY</span>
        </div>
        <div className="stats">
          <p>{solveStatusMsg(solveStatus, numAttempts)}</p>
        </div>
        <div className="location">
          {/* <h5></h5> */}
          <p>
            ({Math.round(ansData.lat * 10) / 10},{" "}
            {Math.round(ansData.lng * 10) / 10}) is {loc}
          </p>
        </div>
        {/* <div className="share">
          <h5>Share results</h5>
          <p> </p>
        </div> */}
        <h4 className="endtext">
          Come back again tomorrow!{" "}
          {["🌎", "🌍", "🌏", "🗺"][Math.floor(Math.random() * 4)]}
        </h4>
      </div>
    </div>
  );
}
