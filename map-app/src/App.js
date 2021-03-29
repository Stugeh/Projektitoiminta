import './App.css';
import React from 'react';
// import {Card} from 'react-bootstrap';

// Component that renders the map.
import Map from './components/Map';
import PictureCard from './components/PictureCard';
import InfoCard from './components/InfoCard';

// Main application. Calls all the components.
const App = () => {
  return (
    <div className="grid-container">
      <div className="header">
        <h1>Working title</h1>
      </div>
      <div className="place">
        <h1>Name of the place</h1>
      </div>
      <div className="map">
        <Map />
      </div>
      <div className="image">
        <PictureCard />
      </div>
      <div className="info">
        <InfoCard/>
      </div>
    </div>

  );
};
export default App;
