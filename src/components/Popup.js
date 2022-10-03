import React from "react";
import "../style/Popup.css";

export default function Popup({ handleClose }) {
  console.log("Popup");
  return (
    <div className="popup-box">
      <div className="email-box">
        <button type="button" onClick={handleClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <h4>HOW TO PLAY</h4>

        <div className="instructions">
          <p>
            Guess the <b>FJORDLE</b> in 5 tries.
          </p>

          <p>
            Each guess must be a valid latitude-longitude coordinate in decimal
            degree notation. Hit the enter button to submit.
          </p>

          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </div>

        <div className="examples">
          <h5>Examples</h5>
          <p>The number 5 is in the coordinate pair and in the correct spot.</p>
          <p>The letter 2 is in the coordinate pair but in the wrong spot.</p>
          <p>The 8 is not in the coordinate pair in any spot.</p>
        </div>

        <div className="contact">
          <p>Found a 🪳? Contact us: </p>
        </div>

        <h5>A new FJORDLE will be available each day!</h5>
      </div>
    </div>
  );
}
