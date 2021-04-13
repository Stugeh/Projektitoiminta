import React from 'react';


import Map from './components/Map';
import PictureCard from './components/PictureCard';
import InfoCard from './components/InfoCard';

const DesktopView = () => (
  <div className="grid-container">
    <div className="placeHeader">
      <h1>Name of the place</h1>
    </div>
    <Map />
    <PictureCard />
    <InfoCard/>
  </div>


);

export default DesktopView;
