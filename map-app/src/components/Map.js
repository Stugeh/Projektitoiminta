const config = require('../utils/config');
import React from 'react';

import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

// Map component
const Map = ({places, setActivePlace}) => (
  <div className="map">
    <LoadScript googleMapsApiKey={config.MAP_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{disableDefaultUI: true}}
      >
        {/* .map() is another default array function,
         that iterates through an array. the property key
         is always required when you're rendering a list of
        components iteratively. It needs to be unique.*/}
        {places.map((place) => (
          <Marker
            key={place.name}
            position={place.coordinates}
            onClick={() => setActivePlace(place)}
          />
        ))}
        <></>
      </GoogleMap>
    </LoadScript>
  </div>
);

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


export default Map;

