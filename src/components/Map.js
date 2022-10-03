import React, { useRef, useEffect } from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import MAPS_API_KEY from "../utils/keys";

const containerStyle = {
  width: "350px",
  height: "250px",
};

const center = {
  lat: 42.035773,
  lng: -97.62444,
};
const zoom = 18;
export default function Map() {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "MAPS_API_KEY",
  // });

  const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  const hasSolved = false;

  return <div className="mapHolder"></div>;
  // isLoaded ? (
  //   <div className="mapHolder">
  {
    /* <GoogleMap
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
      /> */
  }
  // </div>

  // ) :
}

{
  /* <GoogleMap
mapContainerStyle={containerStyle}
center={center}
onLoad={onLoad}
onUnmount={onUnmount}
mapTypeId={"satellite"}
> */
}
