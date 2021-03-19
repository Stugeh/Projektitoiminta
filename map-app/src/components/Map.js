const config = require('../utils/config');
import React from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 65.012615,
  lng: 25.471453,
};

const Map = (props) => (
  <LoadScript googleMapsApiKey={config.MAP_KEY}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  </LoadScript>
);

export default Map;

