import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import "../style/Geo.css";
import * as ReactDOM from "react-dom/client";

export default function MyGlobe() {
  const N = 13;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 0.2,
    color: "rgb(198, 179, 102)",
  }));
  return (
    <div className="globeHolder">
      <Globe
        globeImageUrl="./earth-blue-marble.jpeg"
        backgroundColor="#FFFFFF"
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
        height={200}
        width={200}
        pointLabel={(d) => ` <b>Attempt 1:</b> <br>(${d["lat"]}, ${d["lng"]})`}
      />
    </div>
  );
}
