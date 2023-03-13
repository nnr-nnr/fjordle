import React, { useState } from "react";
import Globe from "react-globe.gl";
import "../style/Geo.css";
import { useAnswer } from "../utils/Context";
import { generateLongitudes, generateLatitudes } from "../utils/GlobeFuncs";

function numerifyCoords(strCoords, index, ansCoords) {
  const lat = parseFloat(strCoords.substring(0, 4)) / 10;
  const lng = parseFloat(strCoords.substring(4, 9)) / 10;
  return {
    lat: lat,
    lng: lng,
    size: 0.3,
    color:
      ansCoords === strCoords ? "rgb(121, 167, 107)" : "rgb(198, 179, 102)",
    index: index,
  };
}

function checkMark(show) {
  return show ? (
    <span role="img" className="emoji" aria-label="check">
      ✅
    </span>
  ) : (
    <span role="img" className="emoji" aria-label="unchecked box">
      ⬜️
    </span>
  );
}

export default function MyGlobe({ attempts }) {
  // NOTE: changed method from keeping MyGlobe in DOM to adding it to DOM whenever
  // GlobePopup is opened and updated attempts are passed down. So, state for attempts
  // (markers) and the useEffect() is not needed
  // const [markers, setMarkers] = useState([]);
  const [showLat, setShowLat] = useState(true);
  const [showLng, setShowLng] = useState(true);

  function toggleLines(lat) {
    if (lat) {
      setShowLat(!showLat);
    } else {
      setShowLng(!showLng);
    }
  }

  const ansCoords = useAnswer().strCoords;

  const newMarkers = attempts
    .map((attempt, ind) => numerifyCoords(attempt, ind + 1, ansCoords))
    .concat(
      // add correct coordinate if not in guesses and game is over
      attempts.length === 5 && ansCoords !== attempts[attempts.length - 1]
        ? numerifyCoords(ansCoords, -1, ansCoords)
        : []
    );

  // useEffect(() => {
  //   console.log("attempts", attempts);
  //   if (attempts.length > 0) {
  //     const newCoord = numerifyCoords(guess, attempts.length, ansCoords);
  //     // add actual coord
  //     if (attempts.length === 5 && ansCoords !== guess) {
  //       const answerCoord = numerifyCoords(ansCoords, -1, ansCoords);
  //       setMarkers(markers.concat(newCoord, answerCoord));
  //     } else {
  //       setMarkers(markers.concat(newCoord));
  //     }
  //   }
  // }, [attempts]);

  // granularity of lat-long
  const g = 2;

  const lngArcsData = [...Array((12 * 2) / g).keys()].map((i) =>
    generateLongitudes(i, g)
  );

  const latArcsData = [...Array(12 * 13).keys()].map((i) =>
    generateLatitudes(i)
  );

  return (
    <div
      className="newGlobeHolder"
      key={attempts}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <br></br>
      <Globe
        globeImageUrl="./earth-blue-marble.jpeg"
        backgroundColor="#FFFFFF"
        arcsData={[].concat(
          showLat ? latArcsData : [],
          showLng ? lngArcsData : []
        )}
        arcLabel={"name"}
        arcColor={"color"}
        arcAltitude={"altitude"}
        arcStroke={"stroke"}
        arcDashAnimateTime={() => 10000}
        pointsData={newMarkers}
        pointAltitude="size"
        pointColor="color"
        height={320} //{200}
        width={320} //{200}
        pointLabel={(d) =>
          ` <b>${
            d["index"] < 0 ? "Answer" : `Attempt ${d["index"]}`
          }:</b> <br>(${d["lat"]}, ${d["lng"]})`
        }
      />
      {/* {scrollMsg && ( */}
      <div className="globe-msg">
        <br></br>
        <button
          type="button"
          title="toggle latitude lines"
          onClick={() => toggleLines(true)}
        >
          {checkMark(showLat)} Latitude
        </button>
        <button
          type="button"
          title="toggle longitude lines"
          onClick={() => toggleLines(false)}
        >
          {checkMark(showLng)} Longitude
        </button>
        <p>
          Drag and zoom to see your guesses on the globe{" "}
          <span role="img" className="emoji" aria-label="red pin">
            📍
          </span>
          . <br></br>
          <br></br>Remember,{" "}
          <b>
            latitude lines (in red) run east-west with values between (-90,
            +90).
          </b>{" "}
          Zero (0) is the equator, and latidues north of this have positive
          values, while southern latitudes have negative values. Conversely,{" "}
          <b>
            longitude lines (in white) run north-south with values between
            (-180, +180).
          </b>{" "}
          Zero (0) and one hundred eighty (180) are the prime meridian in this
          case. Longitudes east of the prime meridian have positive values,
          while western logitudes have negative values.
          <br></br>
          <br></br>
          <a
            href="https://gisgeography.com/latitude-longitude-coordinates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info.
          </a>
        </p>
      </div>
      {/* )} */}
    </div>
  );
}
