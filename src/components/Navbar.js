import React from "react";

export default function Navbar({ togglePopup }) {
  return (
    <nav>
      <div className="icons">
        <button type="button" onClick={togglePopup}>
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </button>
      </div>
      <div>
        <span className="title">Fjordle</span>
      </div>
    </nav>
  );
}
