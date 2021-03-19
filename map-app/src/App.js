import './App.css';
import React from 'react';
// Component that renders the map.
import Map from './components/Map';

// Main application. Calls all the components.
const App = () => {
  return (
    <div className="container">
      <Map/>
    </div>
  );
};

export default App;
