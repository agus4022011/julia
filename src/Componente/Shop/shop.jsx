import React, { Component } from 'react';
import './shop.css'
import { Col, Row } from 'react-bootstrap';
import EstructuraImg from './EstructuraImg/estructuraImg';
import ControlledCarousel from './CarruselShop/carruselShop';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        let z1 = require ('./img/ShopZ1.jpg');
        let z2 = require ('./img/ShopZ2.jpg');

        let Poster = require ('./img/ShopInthemood1.jpg');
        let Poster2 = require ('./img/ShopInthemood2.jpg');

        return (

            <Row className='p-0 m-0 RowShop'>
                <Col sm={6} className=' p-0 m-0 colShop1'>

                <EstructuraImg
                Titulo={'Z Poster, Print, 50 x 70 cm'}
                Precio={'30'}
                /> 
                <ControlledCarousel
                img1={z1.default}
                img2={z2.default}
                img3={null}
                img4={null}
                />

                <EstructuraImg
                Titulo={'In the mood for love, Poster, 21 x 28,8 cm'}
                Precio={'22'}
                /> 
                <ControlledCarousel
                img1={Poster.default}
                img2={Poster2.default}
                img3={null}
                img4={null}
                />
            
                </Col>

                <Col sm={6} className=' p-0 m-0 colShop2'>
             
                </Col>
               
            </Row>
        );
    }
}
 
export default Shop;

