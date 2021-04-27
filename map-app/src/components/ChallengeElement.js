import React, {useState} from 'react';
import {
  ListItem, ListItemIcon,
  ListItemText, Checkbox} from '@material-ui/core';

const ChallengeElement = ({challenge, setPlaces, activePlace, places}) => {
  const [checked, setChecked] = useState(challenge.isDone);

  const handleToggle = (value) => () => {
    value.isDone = !value.isDone;
    const updatedChallenges = updateChallenges(value, activePlace);
    const newPlaces = updatePlaces(updatedChallenges, activePlace, places);
    window.localStorage.setItem(
        'localStoragePlaces', JSON.stringify(newPlaces),
    );
    setPlaces(newPlaces);
    setChecked(!checked);
  };

  return (
    <ListItem onClick={handleToggle(challenge)}>
      <ListItemIcon>
        <Checkbox
          checked={checked}
        />
      </ListItemIcon>
      <ListItemText id={challenge.text} primary={challenge.text} />
    </ListItem>
  );
};


const updateChallenges= (value, activePlace)=> {
  const updatedChallenge = {...value, isDone: value.isDone};
  return activePlace.challenges.map((challenge)=>(
            challenge.text === value.text ? updatedChallenge : challenge
  ));
};


const updatePlaces= (updatedChallenges, activePlace, places)=> {
  const newPlace = {...activePlace, challenges: updatedChallenges};
  return places.map((place) => (
            place.name === newPlace.name ? newPlace : place
  ));
};

export default ChallengeElement;
