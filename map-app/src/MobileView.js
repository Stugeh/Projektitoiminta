import React from 'react';

import MobileOverlay from './components/MobileOverlay';
import Map from './components/Map';

const MobileView = () => (
  <div className='mobile-container'>
    <Map />
    <MobileOverlay/>
  </div>
);

export default MobileView;
