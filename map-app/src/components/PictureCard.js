import '../App.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';

const images = require.context('../../public/Pictures', true);


const PictureCard = ({activePlace}) => {
  if (!activePlace.images) {
    return null;
  }
  return (
    <Carousel className="image">
      {activePlace.images.map((image)=>(
        <Carousel.Item key={image}>
          <img
            src={images(image).default}
            alt="failed to load image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PictureCard;
