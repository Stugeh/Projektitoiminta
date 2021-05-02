import React from 'react';

import HelpButton from './HelpButton';
import Help from './Help';
import Map from './Map';
import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const DesktopView = ({showHelp, toggleShowHelp,
  activePlace, setPlaces, places}) => {
  return (
    <div className="grid-container">
      <HelpButton onButton={toggleShowHelp} />
      <Help showHelp={showHelp} />
      <div className="placeHeader">
        <h1>Name of the place</h1>
      </div>
      <Map toggleShowHelp={toggleShowHelp} showHelp={showHelp} />
      <PictureCard />
      <InfoCard activePlace={activePlace}
        setPlaces={setPlaces}
        places={places}/>
    </div>
  );
};
export default DesktopView;
