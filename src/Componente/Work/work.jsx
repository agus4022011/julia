import React, { Component } from 'react';
import EstructuraWork from './EstructuraWork/estructuraWork';
import './work.css'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='work w-100'>
                <EstructuraWork/>
            </div>
            );
    }
}
 
export default Work;