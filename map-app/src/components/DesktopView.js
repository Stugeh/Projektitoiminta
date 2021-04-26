import React from 'react';

import HelpButton from './HelpButton';
import Help from './Help';
import Map from './Map';
import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const DesktopView = () => (
  <div className="grid-container">
    <HelpButton />
    <Help />
    <div className="placeHeader">
      <h1>Name of the place</h1>
    </div>
    <Map />
    <PictureCard />
    <InfoCard/>
  </div>
);

export default DesktopView;
