import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 50.450001, // Географічна широта (latitude)
  lng: 30.523333, // Географічна довгота (longitude)
};

const MapShow: React.FC = () => {
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (markers.length < 3) {
      const newMarker = {
        lat: event.latLng?.lat() || 0,
        lng: event.latLng?.lng() || 0,
      };
      setMarkers((current) => [...current, newMarker]);
    }
  };

  const DeleteMarkersAll = () => {
    setMarkers([]);
  };
  const HandleRemoveLastMarker = () => {
    setMarkers((current) => current.slice(0, -1));
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC57S37JBwqYp9gwD9AG7erL_1940qTL9s">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        <MarkerClusterer
          options={{
            imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          }}
        >
          {(clusterer) => (
            <>
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker}
                  draggable={true}
                />
              ))}
            </>
          )}
        </MarkerClusterer>
      </GoogleMap>
      <button onClick={DeleteMarkersAll}>Delete All Markers</button>
      <button onClick={HandleRemoveLastMarker}>Delete Last Marker</button>
    </LoadScript>
  );
};

export default MapShow;
