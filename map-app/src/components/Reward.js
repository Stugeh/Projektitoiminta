import React from 'react';
import Confetti from 'react-confetti';

import {Paper, IconButton} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const Reward = ({setShowReward}) => {
  return (
    <Paper className="reward">
      <IconButton onClick={() => setShowReward(false)}>
        <CloseRoundedIcon/>
      </IconButton>
      <h1>Onneksi Olkoon tuhlasit aikaa!!!</h1>
      <Confetti/>
    </Paper>
  );
};

export default Reward;
