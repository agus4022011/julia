import React, { Component } from 'react';
import './shop.css'
import { Col, Row } from 'react-bootstrap';
import EstructuraImg from './EstructuraImg/estructuraImg';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <Row className='p-0 m-0 RowShop'>
                <Col sm={6} className=' p-0 m-0 colShop1'>
                <EstructuraImg />
                </Col>

                <Col sm={6} className=' p-0 m-0 colShop2'>
                <EstructuraImg />
                </Col>
            </Row>
        );
    }
}
 
export default Shop;

