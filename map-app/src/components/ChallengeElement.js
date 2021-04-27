import React from 'react';
import {
  ListItem, ListItemIcon,
  ListItemText, Checkbox} from '@material-ui/core';

const ChallengeElement = ({challenge, setPlaces, activePlace, places}) => {
  const handleToggle = (value) => () => {
    const updatedChallenge = {...value, isDone: !value.isDone};
    const updatedChallenges = activePlace.challenges.map((challenge)=>(
        challenge.text === value.text ? updatedChallenge : challenge
    ));
    const newPlace = {...activePlace, challenges: updatedChallenges};
    const newPlaces = places.map((place) => (
        place.name === newPlace.name ? newPlace : place
    ));
    setPlaces(newPlaces);
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
