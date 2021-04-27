import React, {useState} from 'react';
import {
  ListItem, ListItemIcon,
  ListItemText, Checkbox} from '@material-ui/core';

const ChallengeElement = ({challenge}) => {
  const [checked, setChecked]=useState(challenge.isDone);
  const handleToggle = (value) => () => {
    console.log(`checked, value`, checked, value);
    setChecked(true);
  };
  return (
    <ListItem onClick={handleToggle(challenge)}>
      <ListItemIcon>
        <Checkbox
          checked={challenge.isDone}
          tabIndex={-1}
        />
      </ListItemIcon>
      <ListItemText id={challenge.text} primary={challenge.text} />
    </ListItem>
  );
};

export default ChallengeElement;
