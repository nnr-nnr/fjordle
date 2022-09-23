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
        height={200}
        width={200}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        hexBinPointsData={[
          { lat: 0.92, lng: 5.84, value: 15, guess: 2 },
          // { lat: 0, lng: 0, value: 10 },
          { lat: 30.55, lng: 1.32, value: 15, guess: 1 },
          { lat: -43.6, lng: -10.86, value: 15, guess: 3 },
        ]}
        hexTopColor={() => "red"}
        hexSideColor={() => "red"}
        hexBinPointWeight={"value"}
        hexLabel={(d) => `
        <b>Attempt ${d.points[0]["guess"]}:</b> <br>(${d.points[0]["lat"]}, ${d.points[0]["lng"]})
      `}
      />
    </div>
  );
}
// "rgb(198,179,102)"
