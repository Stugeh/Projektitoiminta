import React from 'react';

import MobileOverlay from './MobileOverlay';
import Map from './Map';

const MobileView = ({
  activePlace, setPlaces, places, setActivePlace, showHelp, toggleShowHelp,
}) => (
  <div className='mobile-container'>
    <Map places={places} setActivePlace = {setActivePlace}/>
    <MobileOverlay
      showHelp={showHelp}
      toggleShowHelp={toggleShowHelp}
      activePlace={activePlace}
      setPlaces={setPlaces}
      places={places}
    />
  </div>
);

export default MobileView;
