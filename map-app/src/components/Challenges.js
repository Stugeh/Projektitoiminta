import React from 'react';
import {List} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ChallengeElement from './ChallengeElement';

const Challenges = ({activePlace}) => {
  const classes = useStyles();
  if (!activePlace) return null;
  return (
    <div className={classes.root}>
      <List>
        {activePlace.challenges.map((challenge) =>(
          <ChallengeElement key={challenge.text} challenge={challenge}/>
        ))}
      </List>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


export default Challenges;
