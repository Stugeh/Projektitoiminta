import '../App.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';
const images = require.context('../../public/Pictures', true);

const PictureCard = () => (
  <div className="image">
    <Carousel>
      <Carousel.Item >
        <img
          src={images('./yliopisto1.png').default}
          alt="failed to load image"
          width='100%'
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default PictureCard;
