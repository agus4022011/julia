import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import ControlledCarousel from '../CarruselShop/carruselShop';
import'./estructuraImg.css'

class EstructuraImg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(props) { 

        var imgMas = require('../../imgEstilo/signomas.png');
        var imgMenos = require('../../imgEstilo/signomenos.png');

        return ( 
        <div className='w-100 d-flex'>
                <label className='labelShop m-0'>
                    <label className='labelShopBold'>{this.props.Titulo}</label> 
                    <label className='labelItems' > <Image className='itemsMenos' src={imgMenos.default}/> </label> 
                    <label className=' subShop' >Previous </label> 
                    <label className='labelItems'> / </label> 
                    <label className=' subShop'>Next image </label>
                    <label className=' imgShop'> (1 of 2) </label>
                </label>
 
                <label className='labelShop2 m-0'>
                    <label className='precio'>U$S {this.props.Precio}</label>
                </label>    
        </div>

     
       
    );
    }
}
 
export default EstructuraImg;