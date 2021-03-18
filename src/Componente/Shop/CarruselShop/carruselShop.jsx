import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import './carruselShop.css'


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel indicators={false} keyboard={true} interval={null} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img4}
            alt="Third slide"
          />
        </Carousel.Item>
        
      </Carousel>
    );
  }
  

  export default ControlledCarousel;