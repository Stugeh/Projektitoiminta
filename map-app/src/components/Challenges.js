/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Checkbox,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const Challenges = ({activePlace}) => {
  const [checked, setChecked] = useState([1]);
  const classes = useStyles();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (!activePlace) return null;

  return (
    <div className={classes.root}>
      <List>
        {activePlace.challenges.map((challenge) =>(
          <ListItem key={challenge.text} onClick={handleToggle(challenge)}>
            <ListItemIcon>
              <Checkbox
                checked={checked.indexOf(challenge) !== -1}
                tabIndex={-1}
              />
            </ListItemIcon>
            <ListItemText id={challenge.text} primary={challenge.text} />
          </ListItem>
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
