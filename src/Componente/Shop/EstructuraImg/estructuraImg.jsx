import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import'./estructuraImg.css'

class EstructuraImg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        var imgMas = require('../../imgEstilo/signomas.png');
        var imgMenos = require('../../imgEstilo/signomenos.png');

        return ( <>
        <div className='w-100 d-flex'>
                <label className='labelShop m-0'>
                    <label className='labelShopBold'>Z Poster, Print, 50 x 70 cm</label> 
                    <label className='labelItems' > - </label> 
                    <label className=' subShop' >Previous </label> 
                    <label className='labelItems'> / </label> 
                    <label className=' subShop'>Next image </label>
                    <label className=' imgShop'> (1 of 2) </label>
                </label>
 
                <label className='labelShop2 m-0'>
                    <label className='precio'>U$S 30</label>
                    <input className='inputShop ' type="number" placeholder="Add to Cart"/>
                    <label className=''>
                        <Image className='itemsMas' src={imgMas.default}/>
                    </label>
                    <label className=''>
                        <Image className='itemsMenos' src={imgMenos.default}/>
                    </label>
                </label>
                
               
        </div>
        <Image className='imgSHOP' src="https://www.timeoutdubai.com/public/images/2020/07/13/IMG-Dubai-UAE.jpg" />
        </>
    );
    }
}
 
export default EstructuraImg;