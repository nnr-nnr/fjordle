import React from "react";
import "../../style/Popup.css";
import MyGlobe from "../Globe";

export default function GlobePopup({ handleClose, attempts }) {
  return (
    <div className="popup-box" onClick={handleClose}>
      <div className="content-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={handleClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="subtitle-holder">
          <span className="subtitle">
            <i className={`fa fa-solid fa-globe`} aria-hidden="true"></i> Globe
          </span>
        </div>
        <div className="popup-main-content non-border-content-box">
          <MyGlobe attempts={attempts} />
        </div>
      </div>
    </div>
  );
}
