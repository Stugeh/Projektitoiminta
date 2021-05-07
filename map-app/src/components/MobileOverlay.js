import React, {useState, useEffect} from 'react';

import {SwipeableDrawer, Button} from '@material-ui/core';
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';

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
        <DragHandleRoundedIcon />
      </Button>

      <SwipeableDrawer
        anchor='bottom'
        open={drawerState}
        onClose={() => {
          setDrawerState(false);
        }}
        onOpen={() => {
          setDrawerState(true);
        }}
      >
        <div className='overlayContent'>
          <DragHandleRoundedIcon style={dragIconStyle} />
          <h2>{activePlace.name}</h2>
          <PictureCard activePlace={activePlace}/>
          <InfoCard
            activePlace={activePlace}
            setPlaces={setPlaces}
            places={places}
          />

        </div>
      </SwipeableDrawer>
    </div>
  );
};

const buttonStyle = {
  position: 'absolute',
  bottom: '3px',
  width: '50%',
  marginLeft: '25%',
  marginRight: '25%',
};

const dragIconStyle = {
  fontSize: '50px',
  width: '10%',
  marginLeft: '45%',
  marginTop: '-20px',
  marginBottom: '-30px',
};

export default MobileOverlay;
