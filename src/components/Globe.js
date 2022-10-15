import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import "../style/Geo.css";
import { useIsMobile } from "../utils/hooks";
import { useAnswer } from "../utils/Context";
// import * as ReactDOM from "react-dom/client";

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

  const ansCoords = useAnswer().strCoords;
  const isMobile = useIsMobile();
  useEffect(() => {
    if (attempts.length > 0) {
      const newCoord = numerifyCoords(
        attempts[attempts.length - 1],
        attempts.length,
        ansCoords
      );
      setMarkers(markers.concat(newCoord));
    }
  }, [attempts]);
  // console.log("attempts", attempts);
  return (
    <div className={`globeHolder ${isMobile ? "mobile" : ""}`}>
      <Globe
        globeImageUrl="./earth-blue-marble.jpeg"
        backgroundColor="#FFFFFF"
        pointsData={markers}
        pointAltitude="size"
        pointColor="color"
        height={200}
        width={200}
        pointLabel={(d) =>
          ` <b>Attempt ${d["index"]}:</b> <br>(${d["lat"]}, ${d["lng"]})`
        }
      />
    </div>
  );
}
