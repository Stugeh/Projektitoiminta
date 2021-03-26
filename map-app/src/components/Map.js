const config = require('../utils/config');
import React from 'react';

import {GoogleMap, LoadScript} from '@react-google-maps/api';

// temporary css style for the div that contains the map.
const containerStyle = {
  width: '100%',
  height: '100%',
};
// Coordinates for oulu
const center = {
  lat: 65.022615,
  lng: 25.471453,
};

// Map component
const Map = () => (
  <div className="map">
    <LoadScript googleMapsApiKey={config.MAP_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  </div>
);


export default Map;

