import '../App.css';
import React from 'react';
// import {Carousel} from 'react-bootstrap';
import Carousel from 'react-material-ui-carousel';

const images = require.context('../../public/Pictures', true);


const PictureCard = ({activePlace}) => {
  if (!activePlace.images) {
    return null;
  }
  return (
    <Carousel className="image" animation='slide'>
      {activePlace.images.map((image)=>(
        <img
          key={image}
          src={images(image).default}
          alt="failed to load image"
        />
      ))}
    </Carousel>
  );
};

export default PictureCard;
