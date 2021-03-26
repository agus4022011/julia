import './inicio.css'
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';


function CarouselInicio(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    let c1 = require ('./img/1C.jpg');
    let c2 = require ('./img/2C.jpg');
    let c3 = require ('./img/3C.jpg');
    let c4 = require ('./img/4C.jpg');
    let c5 = require ('./img/5C.jpg');
    let c6 = require ('./img/6C.jpg');
    let c7 = require ('./img/7C.jpg');
    let c8 = require ('./img/8C.jpg');
    let c9 = require ('./img/9C.jpg');
    let c10 = require ('./img/10.mp4');
    let c11 = require ('./img/11C.jpg');
    let c12 = require ('./img/12C.jpg');
    let c13 = require ('./img/13C.jpg');
    let c14 = require ('./img/14C.jpg');
    let c15 = require ('./img/15C.jpg');
    let c16 = require ('./img/16C.jpg');
    let c17 = require ('./img/17.mp4');
    let c18 = require ('./img/18C.jpg');
    let c19 = require ('./img/19C.jpg');
    let c20 = require ('./img/20C.jpg');
    let c21 = require ('./img/21C.jpg');
    let c22 = require ('./img/22C.jpg');
    let c23 = require ('./img/23C.jpg');
    let c24 = require ('./img/24C.jpg');
    let c25 = require ('./img/25C.mp4');
    let c26 = require ('./img/26C.jpg');
    let c27 = require ('./img/27C.jpg');

  
    return (
      <Carousel indicators={false}  keyboard={true} interval={null} activeIndex={index} onSelect={handleSelect} className='h-100'>
        <Carousel.Item classNameÇ='inicio'>
          <img
            className="d-block w-100"
            src={c1.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c2.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c3.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c4.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c5.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c6.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c7.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c8.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c9.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c10.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c11.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c12.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c13.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c14.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c15.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c16.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c17.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c18.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c19.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c21.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c22.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c23.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c24.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c25.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c26.default}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c27.default}
            alt="First slide"
          />
        </Carousel.Item>
    
      </Carousel>
    );
  }
  

  export default CarouselInicio;