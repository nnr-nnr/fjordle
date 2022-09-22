import React from "react";
import Globe from "react-globe.gl";
import "../style/Geo.css";

export default function MyGlobe() {
  return (
    <div className="globeHolder">
      <Globe
        backgroundColor="white"
        height="200"
        width="200"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      />
    </div>
  );
}
