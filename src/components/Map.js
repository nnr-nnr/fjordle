import React from "react";
import "../style/Geo.css";
import { useHasSolvedContext, useAnswer } from "../utils/Context";

import { Loader } from "@googlemaps/js-api-loader";

// GOOGLE-supported node package
function Map() {
  const ansData = useAnswer();
  const hasSolved = useHasSolvedContext();

  const loader = new Loader({
    apiKey: process.env.MAPS_INFO, //"key",
    version: "weekly",
    libraries: ["places", "marker"],
  });

  const center = {
    lat: ansData ? ansData.lat : null,
    lng: ansData ? ansData.lng : null,
  };

  const mapOptions = {
    center: center,
    zoom: 18,
    mapTypeId: "satellite",
    streetViewControl: false,
    mapTypeControl: hasSolved !== 0,
    scaleControl: true,
    restriction:
      hasSolved !== 0
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
  };

  console.log("pssst!... today's coords are ", ansData.strCoords);

  // Promise
  loader
    .load()
    .then((google) => {
      // console.log("google", google);
      const myMap = new google.maps.Map(
        document.getElementById("mapHolder"),
        mapOptions
      );
      // console.log("myMap", myMap);
      new google.maps.Marker({
        position: center,
        map: myMap,
      });
    })
    .catch((e) => {
      console.log("ERROR:", e);
    });
}

// prevent unnecessary reloads of map (and API calls)
export default React.memo(Map);
