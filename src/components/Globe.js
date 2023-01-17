import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import "../style/Geo.css";
import { useIsMobile } from "../utils/hooks";
import { useAnswer } from "../utils/Context";

const numerifyCoords = (strCoords, index, ansCoords) => {
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
};

export default function MyGlobe({ attempts }) {
  const [markers, setMarkers] = useState([]);

  const [scrollMsg, setScrollMsg] = useState(false);

  const ansCoords = useAnswer().strCoords;
  const guess = attempts[attempts.length - 1];
  const isMobile = useIsMobile();
  useEffect(() => {
    if (attempts.length > 0) {
      const newCoord = numerifyCoords(guess, attempts.length, ansCoords);
      // add actual coord
      if (attempts.length === 5 && ansCoords !== guess) {
        const answerCoord = numerifyCoords(ansCoords, -1, ansCoords);
        setMarkers(markers.concat(newCoord, answerCoord));
      } else {
        setMarkers(markers.concat(newCoord));
      }
    }
  }, [attempts]);
  return (
    <div
      className={`globeHolder ${isMobile ? "mobile" : ""}`}
      onMouseEnter={() => setScrollMsg(true)}
      onMouseLeave={() => setScrollMsg(false)}
    >
      <Globe
        globeImageUrl="./earth-blue-marble.jpeg"
        backgroundColor="#FFFFFF"
        pointsData={markers}
        pointAltitude="size"
        pointColor="color"
        height={200}
        width={200}
        pointLabel={(d) =>
          ` <b>${
            d["index"] < 0 ? "Answer" : `Attempt ${d["index"]}`
          }:</b> <br>(${d["lat"]}, ${d["lng"]})`
        }
      />
      {scrollMsg && (
        <p className="globe-msg">
          Drag and zoom to see your guesses on the globe 📍.
        </p>
      )}
    </div>
  );
}
