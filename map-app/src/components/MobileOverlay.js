import React, {useState} from 'react';

import {SwipeableDrawer, Button} from '@material-ui/core';
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';

import PictureCard from './PictureCard';
import InfoCard from './InfoCard';

const MobileOverlay = () => {
  const [drawerState, setDrawerState] = useState(false);

  const buttonStyle = {
    fontSize: 'large',
    position: 'absolute',
    bottom: '3px',
    width: '50%',
    marginLeft: '25%',
    marginRight: '25%',
  };

  return (
    <div className='mobile-overlay'>
      <Button
        onClick={() => setDrawerState(true)}
        variant='contained'
        color='primary'
        style={buttonStyle}
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
          <PictureCard />
          <InfoCard />

        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default MobileOverlay;
