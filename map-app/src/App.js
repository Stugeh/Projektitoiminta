import './App.css';
import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';

import MobileView from './components/MobileView';
import DesktopView from './components/DesktopView';

import {initialPlaces} from './initialPlaces';


// Main application. Calls all the components.
const App = () => {
  // State variable for tracking which place should be displayed
  // These are used because state should be kept immutable.
  // Instead of changing the attributes value ve replace it
  // with a new attribute entirely. These State hooks make
  // doing that very easy.
  // Doing this also triggers a rerender of the component, Which is why
  // state variables that should trigger the entire app to re-render
  // are stored here, in the topmost component that contains the entire app.
  const [activePlace, setActivePlace] = useState({});
  const [places, setPlaces] = useState([]);

  // State for showing help window. We should save the state to prevent
  // help showing every page refresh after first visit.
  const [showHelp, setShowHelp] = useState(true);


  // Media queries that are used to display the correct view
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 980px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 980px)',
  });

  // Effect hook that sets the current place to the object with name attribute
  // 'Oulu' on the firs time the page is rendered.
  //
  // The syntax is a bit weird to understand at first so i'll try to
  // Explain it.
  //
  // * THE EFFECT HOOK *
  // useEffect hooks run functions under certain conditions.
  // the anonymous function that's the first argument runs when the attributes
  // defined inside the [] that's passed as the second argument change or
  // when the page is reloaded. When the array is empty it only runs on refresh.
  // If you put activePlace inside the array every time you'd set it's state
  // to something else it would run the hook and reset back to Oulu.
  //
  // * THE ARRAY FUNCTION 'find' *
  // The filter function uses an anonymous function () => {}
  // on each object (place) in the list initialPlaces and every time
  // place.name === 'Oulu' it appends that object to a new list.
  // as theres only one Object with the name attribute oulu
  // And set the first object of that list to be the
  // value of activePlace by utilizing the setActivePlace function
  // defined with const [activePlace, setActivePlace] = useState({});.
  // There are a bunch of other array methods that utilize anonymous functions
  // in a similar manner.

  useEffect(()=>{
    const placesString = window.localStorage.getItem('localStoragePlaces');
    const parsedObject = JSON.parse(placesString);
    if (placesString && placesString!=='[]') {
      setPlaces(parsedObject);
      setActivePlace(parsedObject.find((place) => (
        place.name==='Oulun Yliopisto')));
    } else {
      setPlaces(initialPlaces);
      console.log('initialPlaces :>> ', initialPlaces);
      setActivePlace(initialPlaces.find((place) => (
        place.name==='Oulun Yliopisto')));
      window.localStorage.setItem('localStoragePlaces', JSON.stringify(places));
    }
  }, []);

  // {x===y ? z : a} is shorthand for:
  // if x equals y return z else return a
  // super handy inside jsx

  return (
    <div>
      {isDesktop ?
        <DesktopView
          showHelp = {showHelp}
          toggleShowHelp = {() => setShowHelp(!showHelp)}
          activePlace={activePlace}
          setActivePlace={setActivePlace}
          setPlaces={setPlaces}
          places={places}
        /> : null
      }

      {isMobile ?
        <MobileView
          setActivePlace={setActivePlace}
          activePlace={activePlace}
          setPlaces={setPlaces}
          places={places}
        /> : null
      }

    </div>
  );
};

export default App;
