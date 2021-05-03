import React from 'react';

import Map from './Map';
import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const DesktopView = ({activePlace, setActivePlace, setPlaces, places}) => (
  <div className="grid-container">
    <div className="placeHeader">
      <h1>{activePlace.name}</h1>
    </div>
    <Map places={places} setActivePlace = {setActivePlace}/>
    <PictureCard />
    <InfoCard activePlace={activePlace} setPlaces={setPlaces} places={places}/>
  </div>
);

export default DesktopView;
