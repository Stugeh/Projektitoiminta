import './App.css';
import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';

import MobileView from './MobileView';
import DesktopView from './DesktopView';

import {places} from './places';

// Main application. Calls all the components.
const App = () => {
  // State variable for tracking which place should be displayed
  // These are used because state should be kept immutable.
  // Instead of changing the attributes value ve replace it
  // with a new attribute entirely. These State hooks make
  // doing that very easy.
  // the first argument is always the state variable we need
  // and the second one is the update function used by passing it a new
  // parameter like setActivePlace({data: "asfda", data2: 2}) for example.
  //
  // Doing this also triggers a rerender of the component, Which is why
  // state variables that should trigger the entire app to re-render
  // are stored here, in the topmost component that contains the entire app.
  const [activePlace, setActivePlace] = useState({});

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
  useEffect(()=>{
    setActivePlace(findPlaceObjectByName(places, 'Oulu'));
  }, []);

  // {x===y ? z : a} is shorthand for:
  // if x equals y return z else return a
  // super handy inside jsx
  return (
    <div>
      {isDesktop ?
        <DesktopView
          activePlace={activePlace}
          setActivePlace={setActivePlace}
        /> : null
      }

      {isMobile ?
        <MobileView/> : null
      }
    </div>
  );
};

// * THE ARRAY FUNCTION 'filter' *
// The filter function uses an anonymous function () => {} on each object
// (place) in the list places and every time place.name === 'Oulu' it appends
// that object to a new list. As theres only one Object with the name attribute
// oulu we then select [0]. And return the first object of that list There are
// other array methods that utilize anonymous functions in a similar manner.
const findPlaceObjectByName = (places, nameFilter) => {
  return places.filter((place) => (place.name===nameFilter))[0];
};

export default App;
