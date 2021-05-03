import React, {useState, useEffect} from 'react';

import {LinearProgress} from '@material-ui/core';

const ProgressBar = ({places}) => {
  const [progress, setProgress] = useState(0);

  useEffect(()=> {
    setProgress(getProgress(places));
  }, [places]);

  return (
    <LinearProgress
      className='map'
      variant='determinate'
      color='secondary'
      value={progress}
      style={{height: '8px'}}
    />
  );
};

const getProgress = (places) => {
  let totalChallenges = 0;
  let completedChallenges = 0;
  places.forEach((place) => {
    place.challenges.forEach((challenge) => {
      totalChallenges= totalChallenges + 1;
      if (challenge.isDone) completedChallenges = completedChallenges+1;
    });
  });
  return completedChallenges/totalChallenges * 100;
};

export default ProgressBar;


