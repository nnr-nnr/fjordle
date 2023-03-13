import React from "react";
import "../../style/Popup.css";
import { useIsMobile } from "../../utils/hooks";

export default function Popup({ handleClose, title, icon, children }) {
  const isMobile = useIsMobile();
  return (
    <div className="popup-box" onClick={handleClose}>
      <div className="content-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={handleClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="subtitle-holder">
          <span className="subtitle">
            <i className={`fa fa-${icon}`} aria-hidden="true"></i> {title}
          </span>
        </div>
        <div className="popup-main-content non-border-content-box">
          {children}
        </div>
      </div>
    </div>
  );
}
