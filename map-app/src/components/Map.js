const config = require('../utils/config');
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

// Map component
const Map = ({places, setActivePlace, toggleShowHelp, showHelp}) => (
  <div className="map" onMouseDown={showHelp ? toggleShowHelp : undefined}>
    <LoadScript googleMapsApiKey={config.MAP_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center()}
        zoom={12}
        options={{disableDefaultUI: true}}
      >
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

// return the map center based on if the user is on mobile or
// desktop
const center = () => {
  if (useMediaQuery({query: '(min-device-width: 822px)'})) {
    return {lat: 65.022615, lng: 25.589453};
  }
  return {lat: 65.022615, lng: 25.471453};
};

// css style for the div that contains the map.
const containerStyle = {
  width: '100%',
  height: '100%',
};


export default Map;

