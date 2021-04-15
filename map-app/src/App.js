import './App.css';
import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';

import MobileView from './MobileView';
import DesktopView from './DesktopView';

import {places} from './places';

// Main application. Calls all the components.
const App = () => {
  // State variable for tracking which place should be displayed
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
  // useEffect hooks are functions that run under certain conditions.
  // the anonymous function that's the first argument runs when the attributes
  // defined inside the [] that's passed as the second argument change or
  // when the page is reloaded. When the array is empty it only runs on refresh.
  //
  // * THE ARRAY FUNCTION 'filter' *
  // The filter function uses an anonymous function () => {}
  // on each object (place) in the list places and every time
  // place.name === 'Oulu' it appends that object to a new list.
  // as theres only one Object with the name attribute oulu we then
  // select [0]. And set the first object of that list to be the
  // value of activePlace by utilizing the setActivePlace. Function
  // defined with const [activePlace, setActivePlace] = useState({});.
  // There are a bunch of other array methods that utilize anonymous functions
  // in a similar manner.
  // oh and (atrribute) => (attribute.x) is shorthand for
  //
  //        (attribute) => {
  //           return attribute.x
  //        }
  //
  // Thank you for coming to my Ted talk
  useEffect(()=>{
    setActivePlace(places.filter((place) => (place.name==='Oulu'))[0]);
  }, []);

  return (
    <div>
      {isDesktop ?
        <DesktopView
          activePlace={activePlace}
          setActivePlace={setActivePlace}
        /> : <></>
      }

      {isMobile ?
        <MobileView/> : <></>
      }

    </div>
  );
};

export default App;
