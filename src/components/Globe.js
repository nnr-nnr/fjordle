import React from "react";
import Globe from "react-globe.gl";
import "../style/Geo.css";

export default function MyGlobe() {
  const testFunc = ({ hex, prevHex }) => {
    console.log(hex);
  };

  return (
    <div className="globeHolder">
      <Globe
        backgroundColor="white"
        showGraticules={true}
        height={300}
        width={300}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        hexBinPointsData={[
          { lat: 0, lng: 0, value: 20 },
          // { lat: 0, lng: 0, value: 10 },
          { lat: 30, lng: 0, value: 20 },
          { lat: -30, lng: -10, value: 20 },
        ]}
        hexTopColor={() => "#ff0000"}
        hexSideColor={() => "#ff0000"}
        hexBinPointWeight={"value"}
        hexLabel={(d) => `(${d.points[0].lat}, ${d.points[0].lng})`}
      />
    </div>
  );
}
