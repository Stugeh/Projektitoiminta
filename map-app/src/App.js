import './App.css';
import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';


// Component that renders the map.
import Map from './components/Map';
import PictureCard from './components/PictureCard';
import InfoCard from './components/InfoCard';
import Nav from './components/NavBar';

const Lorem = () => (
  <div>
    <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce placerat pulvinar quam id suscipit. Nunc erat sem,
        mattis in massa ut, posuere consectetur sapien.
        Aliquam pharetra odio eu bibendum dapibus.
        Fusce sapien nisl, facilisis non rhoncus eget,
        tempus nec eros. Donec hendrerit bibendum felis,
        quis condimentum mi bibendum vitae.
        Nam interdum mauris et laoreet vulputate.
        Sed gravida ut odio luctus fringilla.
  </div>
);

// Main application. Calls all the components.
const App = () => {
  const [page, setPage] = useState('landing');
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 980px)',
  });
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 980px)'});

  if (isDesktopOrLaptop) {
    return (
      <div className="grid-container">
        <Nav setPage={setPage}/>
        {page === 'app' ? (
        <>
          <div className="placeHead">
            <h1>Name of the place</h1>
          </div>
          <Map />
          <PictureCard />
          <InfoCard/>
        </>
        ): <></>
        }

        {page === 'landing' ? (
        <div className='introduction'>
          <h1>This is a landing page</h1>
          <Lorem />
        </div>
        ):<></>
        }
      </div>
    );
  } else if (isTabletOrMobile) {
    return (
      <div>
        mobile view
      </div>
    );
  }
  return <></>;
};
export default App;
