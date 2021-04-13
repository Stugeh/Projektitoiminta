import React from 'react';


import Map from './components/Map';
import PictureCard from './components/PictureCard';
import InfoCard from './components/InfoCard';

// const Lorem = () => (
//   <div>
//     <br/>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Fusce placerat pulvinar quam id suscipit. Nunc erat sem,
//           mattis in massa ut, posuere consectetur sapien.
//           Aliquam pharetra odio eu bibendum dapibus.
//           Fusce sapien nisl, facilisis non rhoncus eget,
//           tempus nec eros. Donec hendrerit bibendum felis,
//           quis condimentum mi bibendum vitae.
//           Nam interdum mauris et laoreet vulputate.
//           Sed gravida ut odio luctus fringilla.
//   </div>
// );

const DesktopView = () => (
  <div className="grid-container">
    <div className="placeHeader">
      <h1>Name of the place</h1>
    </div>
    <Map />
    <PictureCard />
    <InfoCard/>
  </div>


);

export default DesktopView;
