import React, { Component } from 'react';
import './menu.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidUpdate(){
      localStorage.getItem("filtro")
    }

    render(props) {
        let im = require('../imgEstilo/signopreguntas.png'); 
        return (
            
          <Navbar className={'menu ' + (this.props.location.pathname== '/Pregunta' ? 'Pregunta':' ') } >
            {localStorage.getItem("filtro") && 
            <div className="d-flex filtro">
              <span id="filtro1" className="">Filtro:</span>
              <span className="filtroOpcion">{ localStorage.getItem("filtro") }</span>
              <span className="filtroAtras">view all</span>
            </div>
            }
            <Link className={'nombre ' + (this.props.location.pathname== '/' ? 'activo':' ')} to='/'>Julia Miceli Pitta</Link>
            <Link className={'nombre ' + (this.props.location.pathname== '/Work' ? 'activo':' ')} to='/Work'>Work</Link>
            <Link className={'nombre ' + (this.props.location.pathname== '/Laboratory' ? 'activo':' ')} to='/Laboratory'>Laboratory</Link>
            <Link className={'nombre ' + (this.props.location.pathname== '/Info' ? 'activo':' ')} to='/Info'>Info</Link>
            <Link className={'nombre ' + (this.props.location.pathname== '/Shop' ? 'activo':' ')} to='/Shop'>Shop</Link>
            <Link  className='signo' to='/Pregunta'>
              <img src={im.default} className='imgSigno' alt=""/>
            </Link>

             
        </Navbar>
      
        
        );
    }
}
 
export default withRouter (Menu);