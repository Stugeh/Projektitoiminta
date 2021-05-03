import React from 'react';

import MobileOverlay from './MobileOverlay';
import Map from './Map';

const MobileView = ({activePlace, setPlaces, places, setActivePlace}) => (
  <div className='mobile-container'>
    <Map places={places} setActivePlace = {setActivePlace}/>
    <MobileOverlay
      activePlace={activePlace}
      setPlaces={setPlaces}
      places={places}
    />
  </div>
);

export default MobileView;
