import './App.css';
import React from 'react';
import {Card} from 'react-bootstrap';
// Component that renders the map.
import Map from './components/Map';
import PictureCard from './components/PictureCard';
import InfoCard from './components/InfoCard';

// Main application. Calls all the components.
const App = () => {
  return (
    <div className="container-xl">
      <Card className='Card'>

        <Card.Header className="head">
          <h1>Working title map app</h1>
        </Card.Header>

        <Card.Body class='grid-container'>
          <Map />
          <PictureCard />
          <div className="info"></div>
          <InfoCard/>
        </Card.Body>

      </Card>
    </div>
  );
};
export default App;
