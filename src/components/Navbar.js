import React, { useState, useEffect } from "react";
import SolvePopup from "./Popups/SolvePopup";
import InfoPopup from "./Popups/InfoPopup";
import GlobePopup from "./Popups/GlobePopup";
import { useHasSolvedContext } from "../utils/Context";

export default function Navbar({ attempts }) {
  // console.log("navbar");
  const hasSolved = useHasSolvedContext();
  const [infoIsOpen, setInfoIsOpen] = useState(true); //useState(false);
  const [solveIsOpen, setSolveIsOpen] = useState(false);
  const [globeIsOpen, setGlobeIsOpen] = useState(false);

  const toggleGlobePopup = () => {
    setGlobeIsOpen(!globeIsOpen);
  };
  const toggleInfoPopup = () => {
    setInfoIsOpen(!infoIsOpen);
  };
  const toggleSolvePopup = () => {
    setSolveIsOpen(!solveIsOpen);
  };

  // When fjordle first solved, Solve popup appears
  useEffect(() => {
    setSolveIsOpen(true);
  }, [hasSolved]);

  return (
    <>
      <nav>
        <div className="icons">
          <button type="button" title="Info" onClick={toggleInfoPopup}>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </button>
          <button type="button" title="Show globe" onClick={toggleGlobePopup}>
            <i className="fa fa-solid fa-globe" aria-hidden="true"></i>
          </button>
          {/* <button type="button" title="Help" onClick={null}>
            <i class="fa fa-question-circle" aria-hidden="true"></i>
          </button> */}
          <button
            type="button"
            title="Revealed on game end"
            onClick={hasSolved ? toggleSolvePopup : null}
            style={{ cursor: hasSolved ? "pointer" : "auto" }}
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
            numAttempts={attempts.length}
          />
        )}
        {infoIsOpen && <InfoPopup handleClose={toggleInfoPopup} />}
        {globeIsOpen && (
          <GlobePopup handleClose={toggleGlobePopup} attempts={attempts} />
        )}
      </div>
    </>
  );
}
