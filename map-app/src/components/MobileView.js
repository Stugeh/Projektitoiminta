import React from 'react';

import MobileOverlay from './MobileOverlay';
import Map from './Map';

const MobileView = ({activePlace, setPlaces, places}) => (
  <div className='mobile-container'>
    <Map />
    <MobileOverlay
      activePlace={activePlace}
      setPlaces={setPlaces}
      places={places}
    />
  </div>
);

export default MobileView;
