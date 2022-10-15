import React, { useState } from "react";
import SolvePopup from "./Popups/SolvePopup";
import Popup from "./Popups/InfoPopup";

import { useHasSolvedContext } from "../utils/Context";

export default function Navbar({ attemptsLen }) {
  const hasSolved = useHasSolvedContext();
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [solveIsOpen, setSolveIsOpen] = useState(false);
  const toggleInfoPopup = () => {
    setInfoIsOpen(!infoIsOpen);
  };
  const toggleSolvePopup = () => {
    setSolveIsOpen(!solveIsOpen);
  };
  return (
    <>
      <nav>
        <div className="icons">
          <button type="button" title="Info" onClick={toggleInfoPopup}>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            title="Revealed on game end"
            onClick={toggleSolvePopup}
          >
            <i
              className={`fa fa-check-circle ${hasSolved ? "revealed" : ""}`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <div>
          <span className="title">Fjordle</span>
        </div>
      </nav>
      <div className="popups">
        {hasSolved > 0 && solveIsOpen && (
          <SolvePopup
            className="solve-popup"
            handleClose={toggleSolvePopup}
            numAttempts={attemptsLen}
          />
        )}
        {infoIsOpen && <Popup handleClose={toggleInfoPopup} />}
      </div>
    </>
  );
}
