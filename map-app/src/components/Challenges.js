import React, {useState, useEffect} from 'react';
import places from '../places';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(()=> {
    setChallenges(places);
  }, []);
  return (
    <div></div>
  );
};

export default Challenges;
