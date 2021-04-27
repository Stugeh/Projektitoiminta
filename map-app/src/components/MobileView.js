import React from 'react';

import MobileOverlay from './MobileOverlay';
import Map from './Map';

const MobileView = ({activePlace}) => (
  <div className='mobile-container'>
    <Map />
    <MobileOverlay activePlace={activePlace}/>
  </div>
);

export default MobileView;
