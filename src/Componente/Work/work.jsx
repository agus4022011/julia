import React, { Component } from 'react';
import Example from './ColapseWork/colapseWork';
import './work.css'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lsw:[]
         }
    }
    
  componentDidMount(){
    fetch("http://localhost/Julia/Work.php")
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({lsw:resp});
      });
  }

    render() { 
        return(
            <div className='Work w-100'>
                {this.state.lsw.map(item=> { 
                    return(
                    <Example
                        Titulo={item.Titulo}
                        SubTitulo1={item.SubTitulo1}
                        SubTitulo2={item.SubTitulo2}
                        SubTitulo3={item.SubTitulo3}
                        Año={item.Año}
                        Descripcion1={item.Descripcion1}
                        Descripcion2={item.Descripcion2}

                        lsImg={item.ImgUrls}
                        lsImgDos={item.ImgUrls.splice(5)}

                    
                    />
                        

                   )
                })}

            </div>
        )
            
        
    }
}
 
export default Work;