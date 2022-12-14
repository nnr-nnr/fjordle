import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "../style/Geo.css";
import { useIsMobile } from "../../utils/hooks";
import { useHasSolvedContext, useAnswer } from "../../utils/Context";

function Map() {
  const ansData = useAnswer();
  const hasSolved = useHasSolvedContext();
  const isMobile = useIsMobile();

  const containerStyle = {
    width: isMobile ? "70vw" : "450px",
    height: isMobile ? "20vh" : "250px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "key",
  });

  const [map, setMap] = React.useState(null);
  const center = {
    lat: ansData ? ansData.lat : null,
    lng: ansData ? ansData.lng : null,
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log("map");

  return isLoaded ? (
    <div className="mapHolder">
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          center: center,
          zoom: 18,
          mapTypeId: "satellite",
          streetViewControl: false,
          mapTypeControl: hasSolved,
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
          fullscreenControl: true,
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <div className="mapHolder"></div>
  );
}

export default React.memo(Map);
