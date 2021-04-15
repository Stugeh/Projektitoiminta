import React from 'react';

import MobileOverlay from './components/MobileOverlay';

import Map from './components/Map';
// import PictureCard from './components/PictureCard';
// import InfoCard from './components/InfoCard';

const MobileView = () => (
  <div className='mobile-container'>
    <Map />
    <MobileOverlay/>
  </div>
);

export default MobileView;
