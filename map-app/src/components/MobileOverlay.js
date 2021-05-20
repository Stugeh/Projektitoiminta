import React, {useState, useEffect} from 'react';

import {Drawer, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const MobileOverlay = ({activePlace, setPlaces, places}) => {
  // drawerState is false when drawer isn't visible and true when it is.
  const [drawerState, setDrawerState] = useState(false);

  // opens overlay when active place changes.
  useEffect(()=> {
    setDrawerState(true);
  }, [activePlace]);

  return (
    <div className='mobile-overlay'>
      <Button
        style={buttonStyle}
        onClick={() => setDrawerState(true)}
        variant='contained'
        color='primary'
      >
        <ExpandLessIcon style={dragIconStyle}/>
      </Button>

      <Drawer
        anchor='bottom'
        open={drawerState}
        touchStart={(e)=> e.muiHandled = true}
      >
        <div className='overlayContent'>
          <Button
            style={{width: '16%', height: '40px', marginLeft: '42%'}}
            onClick={() => setDrawerState(false)}
            variant='contained'
            color='primary'
          >
            <ExpandMoreIcon style={dragIconStyle}/>
          </Button>
          <PictureCard activePlace={activePlace}/>
          <InfoCard
            activePlace={activePlace}
            setPlaces={setPlaces}
            places={places}
          />

        </div>
      </Drawer>
    </div>
  );
};

const buttonStyle = {
  position: 'absolute',
  height: '40px',
  bottom: '3px',
  width: '16%',
  marginLeft: '42%',
};

const dragIconStyle = {
  fontSize: '50px',
  marginTop: '-20px',
  marginBottom: '-20px',
};

export default MobileOverlay;
