import '../App.css';
import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Challenges from './Challenges';


const InfoCard = ({activePlace, setPlaces, places}) => (
  <div className="info">
    <Tabs defaultActiveKey="Info" className="tabs">
      <Tab eventKey="Info" title="Info">
        <p>{activePlace.text}</p>
      </Tab>
      <Tab eventKey="haasteet" title="haasteet">
        {JSON.stringify(activePlace)!=='{}' ?
         <Challenges
           activePlace={activePlace}
           setPlaces={setPlaces}
           places={places}
         /> : null}
      </Tab>
    </Tabs>
  </div>
);


export default InfoCard;
