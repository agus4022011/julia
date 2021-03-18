import React, { useState } from 'react'
import {Button, Image, Modal} from 'react-bootstrap';

import './modal.css'


function ModalImg(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Image className='workImg' src={props.imgPrin} onClick={handleShow}/>

        <Modal  className='modalImg'  centered show={show} onHide={handleClose} animation={false}>
          <Image src={props.imgPrin} onClick={handleShow}/>
        </Modal>
      </>
    );
  }
  
  export default ModalImg;