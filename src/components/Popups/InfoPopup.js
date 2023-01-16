import React from "react";
import "../../style/Popup.css";
import { useIsMobile } from "../../utils/hooks";

const EgGrid = ({ example, exInd, color }) => {
  const cells = [...Array(12).keys()].map((i) => (
    <div
      className={`example-grid-cell ${i === 3 || i === 10 ? "decimal" : ""} ${
        i === 5 ? "comma" : ""
      } ${i === exInd ? color : ""}`}
      key={i}
    >
      <span>{example[i]}</span>
    </div>
  ));
  return (
    <div className="example-grid-holder">
      <div className="example-grid-row">{cells}</div>
    </div>
  );
};

export default function Popup({ handleClose }) {
  const isMobile = useIsMobile();
  return (
    <div className="popup-box" onClick={handleClose}>
      <div className="content-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={handleClose}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="subtitle-holder">
          <span className="subtitle">HOW TO PLAY</span>
        </div>
        <div className="instructions">
          <p>
            Guess the <b>FJORDLE</b> location shown on the Google Map in 5
            tries.
          </p>

          <p>
            Each guess must be a valid latitude-longitude coordinate in decimal
            degree notation, <b>including plus-minus (+/-) signage</b>. Hit the
            enter button to submit.
          </p>

          <p>
            After each guess, the color of the tiles will change to indicate how
            close your guess was to the coordinate.{" "}
            {!isMobile
              ? `Your guess will also be
            displayed on the globe on the right.`
              : ``}
          </p>
        </div>

        <div className="examples">
          <h4>Examples</h4>
          <EgGrid example={"+36.9,+007.7"} exInd={4} color={"green"} />
          <p>
            The number <b>9</b> is in the coordinate pair and in the correct
            spot.
          </p>
          {isMobile ? `` : <br></br>}
          <EgGrid example={"-19.2,-061.1"} exInd={8} color={"yellow"} />
          <p>
            The number <b>6</b> is in the coordinate pair but in the wrong spot.
          </p>
          {isMobile ? `` : <br></br>}
          <EgGrid example={"+52.1,+130.8"} exInd={1} color={"grey"} />
          <p>
            The number <b>5</b> is not in the coordinate pair in any spot.
          </p>
          {isMobile ? `` : <br></br>}
        </div>

        <div className="contact">
          <p>
            Found a 🪳? Reach out:{" "}
            <a href="mailto:contact.fjordle@gmail.com">
              contact.fjordle@gmail.com
            </a>{" "}
          </p>
        </div>

        <h4 className="endtext">
          {/* style={{ fontSize: ".6rem" }}> */}A new FJORDLE will be available
          each day!
        </h4>
      </div>
    </div>
  );
}
