import React from "react";
import "../style/Geo.css";
import { useHasSolvedContext, useAnswer } from "../utils/Context";

import { Loader } from "@googlemaps/js-api-loader";

// GOOGLE-supported node package
function Map() {
  // console.log("map component called");
  const ansData = useAnswer();
  const hasSolved = useHasSolvedContext();

  // wait until we get today's coords from db api
  if (ansData) {
    console.log("pssst!... today's coordinates are ", ansData.strCoords);
  }

  const loader = new Loader({
    apiKey: "key", //process.env.MAPS_INFO, //"key",
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
