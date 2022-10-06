import React, { useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../style/Geo.css";

import { useAnswer } from "../utils/Context";

import MAPS_API_KEY from "../utils/keys";

const containerStyle = {
  width: "350px",
  height: "250px",
};

// const center = {
//   lat: 42.035773,
//   lng: -97.62444,
// };
// const zoom = 18;

export default function Map() {
  const ans = useAnswer();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "MAPS_API_KEY",
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState({ lat: 0, lng: 0 });

  // const processAns = () => {
  //   const lat = parseFloat(ans.substring(0, 4)) / 10.0;
  //   const lng = parseFloat(ans.substring(4, 12)) / 10.0;
  //   console.log("center", { lat: lat, lng: lng });
  //   return { lat: lat, lng: lng };
  // };
  // const center = processAns();

  // useEffect(() => {
  //   fetch("http://localhost:3000/users")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       if (res && res.data) {
  //         console.log("fetched");
  //         const latt = Math.round(res.data[0]["lat"] * 10) / 10;
  //         const lngt = Math.round(res.data[0]["lng"] * 10) / 10;
  //         setCenter({ lat: latt, lng: lngt });
  //       }
  //     });
  // }, []);

  const zoom = 18;

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const hasSolved = false;

  return isLoaded ? ( //false
    <div className="mapHolder">
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          center: center,
          zoom: zoom,
          mapTypeId: "satellite",
          streetViewControl: false,
          mapTypeControl: false,
          scaleControl: true,
          restriction: hasSolved
            ? {}
            : {
                latLngBounds: {
                  north: center.lat + 0.03,
                  south: center.lat - 0.03,
                  east: center.lng + 0.03,
                  west: center.lng - 0.03,
                },
              },
        }}
      >
        <Marker
          // onLoad={onLoad}
          position={center}
        />
      </GoogleMap>
    </div>
  ) : (
    <div className="mapHolder"></div>
  );
}
