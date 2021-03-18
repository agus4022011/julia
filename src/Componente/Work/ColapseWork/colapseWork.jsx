import React, { useState } from 'react'
import {Col, Collapse, Image, Row } from 'react-bootstrap';
import ModalImg from '../ModalImg/modalImg';
import './colapse.css'

function Example() {
    const [open, setOpen] = useState(false);

    let work1 = require('../img/France/1France.jpg'); 
    let work2 = require('../img/France/1France.jpg'); 
    let work3 = require('../img/France/1France.jpg'); 
    let work4 = require('../img/France/1France.jpg'); 
    let work5 = require('../img/France/1France.jpg'); 

  
    return (
 <>
        <div className='p-0 m-0 w-100 d-inline-flex  justify-content-center'>
            <div  className='p-0 m-0 col1 '>
                 <label className='labelBold mb-0'>Survival Kit</label>
                 <label className='itemsWork mb-0'>/</label>
                 <label className='subWork mb-0'>Visual Identity,</label>
                 <label className='subWork mb-0'>Editorial Design,</label>
                 <label className='subWork mb-0'>Self-Initiated Project</label>
                 <label className='itemsWork mb-0'>/</label>

                 <label className='subWork mb-0' 
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  >More & Information</label>

                 <label className='itemsWork mb-0'>+</label>
            </div>

            <div  className='p-0 m-0 col2 '>
                <Collapse in={open}  >
                <div  id="example-collapse-text" >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil eos ratione quae voluptatum obcaecati officiis, incidunt praesentium eligendi impedit? Officiis neque laudantium et repudiandae facere aliquid earum necessitatibus. Ad?
                </div>
                </Collapse>
            </div>
            <div className='p-0 m-0 col3 '>
                <Collapse in={open}  >
                <div  id="example-collapse-text" >
                hola 
                </div>
                </Collapse>
            </div>
        </div>

        <div>
        <ModalImg imgPrin={work1.default} /> 
        <ModalImg imgPrin={work2.default} /> 
        <ModalImg imgPrin={work3.default} /> 
        <ModalImg imgPrin={work4.default} /> 
        <ModalImg imgPrin={work5.default} /> 
        </div>

        <div className='p-0 m-0  '>
            <Collapse in={open}  >
                <div  id="example-collapse-text" >
                <ModalImg imgPrin={work1.default} /> 
                <ModalImg imgPrin={work2.default} /> 
                <ModalImg imgPrin={work3.default} /> 
                <ModalImg imgPrin={work4.default} /> 
                <ModalImg imgPrin={work5.default} /> 
                </div>
            </Collapse>
        </div>
        
</>
    );
  }

 
export default Example;