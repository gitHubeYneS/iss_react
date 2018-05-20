import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = ({ lat, lng }) => (
  <GoogleMap
    defaultZoom={3}
    center={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
  >
    <Marker 
        position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
    />
  </GoogleMap>
)

export default withGoogleMap(Map);
