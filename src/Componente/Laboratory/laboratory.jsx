import React, { Component } from 'react';
import './laboratory.css'
import { Image } from 'react-bootstrap';


class Laboratory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let lab1 = require('./IMG/Lab1.jpg'); 
        let lab2 = require('./IMG/Lab2.gif'); 
        let lab3 = require('./IMG/Lab3.jpg'); 
        let lab4 = require('./IMG/Lab4.jpg'); 
        let lab5 = require('./IMG/Lab5.jpg'); 
        let lab6 = require('./IMG/Lab6.jpg'); 
        let lab7 = require('./IMG/Lab7.jpg'); 
        let lab8 = require('./IMG/Lab8.jpg'); 
        let lab9 = require('./IMG/Lab9.jpg'); 
        let lab10 = require('./IMG/Lab10.gif'); 
        let lab11 = require('./IMG/Lab11.jpg'); 
        let lab12 = require('./IMG/Lab12.jpg'); 
        let lab13 = require('./IMG/Lab13.jpg'); 
        let lab14 = require('./IMG/Lab14.jpg'); 
        let lab15 = require('./IMG/Lab15.jpg'); 
        let lab16 = require('./IMG/Lab16.jpg'); 
        let lab17 = require('./IMG/Lab17.jpg'); 
        let lab18 = require('./IMG/Lab18.jpg'); 
        let lab19 = require('./IMG/Lab19.gif'); 
        let lab20 = require('./IMG/Lab20.jpg'); 
        let lab21 = require('./IMG/Lab21.jpg'); 
        let lab22 = require('./IMG/Lab22.jpg'); 
        let lab23 = require('./IMG/Lab23.gif'); 
        let lab24 = require('./IMG/Lab24.jpg'); 
        let lab25 = require('./IMG/Lab25.jpg'); 
        let lab26 = require('./IMG/Lab26.jpg'); 
        let lab27 = require('./IMG/Lab27.jpg'); 
        let lab28 = require('./IMG/Lab28.jpg'); 
        let lab29 = require('./IMG/Lab29.gif'); 
        let lab30 = require('./IMG/Lab30.jpg'); 
        

        return ( <div className='w-100 m-0 p-0 labDiv'>
            <Image className='labImg' src={lab1.default}/>
            <Image className='labImg' src={lab2.default}/>
            <Image className='labImg' src={lab3.default}/>
            <Image className='labImg' src={lab4.default}/>
            <Image className='labImg w-50' src={lab5.default}/>
            <Image className='labImg' src={lab6.default}/>
            <Image className='labImg' src={lab7.default}/>
            <Image className='labImg' src={lab8.default}/>
            <Image className='labImg' src={lab9.default}/>
            <Image className='labImg' src={lab10.default}/>
            <Image className='labImg' src={lab11.default}/>
            <Image className='labImg' src={lab12.default}/>
            <Image className='labImg' src={lab13.default}/>
            <Image className='labImg' src={lab14.default}/>
            <Image className='labImg' src={lab15.default}/>
            <Image className='labImg' src={lab16.default}/>
            <Image className='labImg' src={lab17.default}/>
            <Image className='labImg' src={lab18.default}/>
            <Image className='labImg' src={lab19.default}/>
            <Image className='labImg' src={lab20.default}/>
            <Image className='labImg' src={lab21.default}/>
            <Image className='labImg w-50' src={lab22.default}/>
            <Image className='labImg' src={lab23.default}/>
            <Image className='labImg' src={lab24.default}/>
            <Image className='labImg' src={lab25.default}/>
            <Image className='labImg' src={lab26.default}/>
            <Image className='labImg' src={lab27.default}/>
            <Image className='labImg' src={lab28.default}/>
            <Image className='labImg' src={lab29.default}/>
            <Image className='labImg' src={lab30.default}/>

        </div> );
    }
}
 
export default Laboratory;