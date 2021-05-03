import React from 'react';

import HelpButton from './HelpButton';
import Help from './Help';
import Map from './Map';
import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const DesktopView = ({showHelp, toggleShowHelp,
  activePlace, setActivePlace, setPlaces, places}) => (
  <div className="grid-container">
    <HelpButton onButton={toggleShowHelp} />
    <Help showHelp={showHelp} />
    <div className="placeHeader">
      <h1>{activePlace.name}</h1>
    </div>
    <Map toggleShowHelp={toggleShowHelp} showHelp={showHelp} places={places}
      setActivePlace = {setActivePlace}/>
    <PictureCard />
    <InfoCard activePlace={activePlace}
      setPlaces={setPlaces}
      places={places}/>
  </div>
);

export default DesktopView;
