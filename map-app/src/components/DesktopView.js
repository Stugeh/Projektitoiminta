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
    <Map toggleShowHelp={toggleShowHelp} showHelp={showHelp} places={places}
      setActivePlace = {setActivePlace}/>
    <PictureCard activePlace={activePlace} />
    <InfoCard activePlace={activePlace}
      setPlaces={setPlaces}
      places={places}/>
  </div>
);

export default DesktopView;
