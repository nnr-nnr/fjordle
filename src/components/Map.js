import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../style/Geo.css";

import { useHasSolvedContext, useAnswer } from "../utils/Context";

import MAPS_API_KEY from "../utils/keys";

const containerStyle = {
  width: "450px",
  height: "250px",
};

export default function Map() {
  const ansData = useAnswer();
  const hasSolved = useHasSolvedContext();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "MAPS_API_KEY",
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState({
    lat: ansData ? ansData.lat : null,
    lng: ansData ? ansData.lng : null,
  });

  const zoom = 18;

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log("map");

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
            ? null
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
