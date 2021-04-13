import './App.css';
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import MobileView from './MobileView';
import DesktopView from './DesktopView';


// Main application. Calls all the components.
const App = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 980px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 980px)',
  });

  return (
    <div>
      {isDesktop ?
        <DesktopView /> : <></>
      }

      {isMobile ?
        <MobileView/> : <></>
      }

    </div>
  );
};
export default App;
