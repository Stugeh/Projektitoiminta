import React, {useState, useEffect} from 'react';
import places from '../places';

const Challenges = ({activePlace}) => {
  const [challenges, setChallenges] = useState([]);

  useEffect(()=> {
    const place = places.find((place) => {
      place.name===activePlace.name;
    });
    setChallenges(place.challenges);
  }, []);

  return (
    <div>
      {challenges.map((challenge) =>(
        <div key={challenge.text}>
          {challenge.text}
        </div>
      ))}
    </div>
  );
};

export default Challenges;
