import React from 'react';

import MobileOverlay from './MobileOverlay';
import Map from './Map';

const MobileView = () => (
  <div className='mobile-container'>
    <Map />
    <MobileOverlay/>
  </div>
);

export default MobileView;
