import React, {useState} from 'react';

import HelpButton from './HelpButton';
import Help from './Help';
import Map from './Map';
import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const DesktopView = () => {
  const [showHelp, setShowHelp] = useState(true);
  return (
    <div className="grid-container">
      <HelpButton onButton={() => setShowHelp(!showHelp)} />
      <Help showHelp={showHelp} />
      <div className="placeHeader">
        <h1>Name of the place</h1>
      </div>
      <Map activateMap={() => setShowHelp(showHelp && !showHelp)} />
      <PictureCard />
      <InfoCard/>
    </div>
  );
};

export default DesktopView;
