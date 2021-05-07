import '../App.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';

const images = require.context('../../public/Pictures', true);


const PictureCard = ({activePlace}) => {
  if (!activePlace.images) {
    return null;
  }
  return (
    <div className="image">
      <Carousel>
        {activePlace.images.map((image)=>(
          <Carousel.Item key={image}>
            <img
              className='imageaa'
              src={images(image).default}
              alt="failed to load image"
              width='100%'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PictureCard;
