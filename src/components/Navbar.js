import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="icons">
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        {/* <i class="fa fa-github" aria-hidden="true"></i> */}
      </div>
      <div>
        <span className="title">Fjordle</span>
      </div>
    </nav>
  );
}
