import React, { Component } from 'react'
import Example from '../ColapseWork/colapseWork';
import './estructuraWork.css'

class EstructuraWork extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    
    render() { 
        return (
             <div className='labelWork w-100'>
                <Example/>
             </div> 
             

             );
    }
}
 
export default EstructuraWork;