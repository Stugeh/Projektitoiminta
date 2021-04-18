const config = require('../utils/config');
import React from 'react';

import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

// css style for the div that contains the map.
const containerStyle = {
  width: '100%',
  height: '100%',
};
// Coordinates for the center of the map
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
        options={{disableDefaultUI: true}}
      >
        <Marker position={center}/>
        <></>
      </GoogleMap>
    </LoadScript>
  </div>
);


export default Map;

