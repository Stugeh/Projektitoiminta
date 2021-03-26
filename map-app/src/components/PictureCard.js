import '../App.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';
import image from './Image-placeholder.jpg';
import brainl from './brainlet-microwaved-brain.jpg';

const PictureCard = () => (
  <div className="picture">
    <Carousel>
      <Carousel.Item >
        <img src={image} alt="" />
      </Carousel.Item>
      <Carousel.Item >
        <img src={brainl} alt="" />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default PictureCard;
