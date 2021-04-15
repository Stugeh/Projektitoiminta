import '../App.css';
import React from 'react';
import {Carousel} from 'react-bootstrap';
import yo1 from '../Pictures/Yliopisto.png';
import yo2 from '../Pictures/yliopisto2.jpg';

const PictureCard = () => (
  <div className="image">
    <Carousel>
      <Carousel.Item >
        <img src={yo1} alt="" width='100%'/>
      </Carousel.Item>
      <Carousel.Item >
        <img src={yo2} alt="" width='100%'/>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default PictureCard;
