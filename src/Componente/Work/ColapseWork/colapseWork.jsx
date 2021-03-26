import React, { useState, useEffect } from "react";
import { Col, Collapse, Image, Row } from "react-bootstrap";
import ModalImg from "../ModalImg/modalImg";
import "./colapse.css";

function Example(props) {
  const [open, setOpen] = useState(false);
  const [lsWork, setLsWork] = useState([]);


  return (
    <div>
     
          <>
            <div className="p-0 m-0 w-100 colapWork">
              <div className="p-0 m-0 div1 ">
                <label className="labelBold mb-0">{props.Titulo}</label>
                <label className="itemsWork mb-0">/</label>
                <label className="subWork mb-0">{props.SubTitulo1}</label>
                <label className="subWork mb-0">{props.SubTitulo2}</label>
                <label className="subWork mb-0">{props.SubTitulo3}</label>
                <label className="itemsWork mb-0">/</label>

                <label
                  className="subWork mb-0"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  More & Information
                </label>

                <label className="itemsWork mb-0">+</label>

                <Collapse in={open} >
                  <div id="example-collapse-text" className="año1">
                  {props.Año}
                  </div>
                </Collapse>
              </div>

              <div className="p-0 m-0 div2 ">
                <Collapse in={open}>
                  <div id="example-collapse-text">
                  {props.Descripcion1}
                  </div>
                </Collapse>
              </div>
              <div className="p-0 m-0 div3 ">
                <Collapse in={open} >
                  <div id="example-collapse-text" className="año2">
                  {props.Año}
                  </div>
                </Collapse>
                <Collapse in={open}>
                  <div id="example-collapse-text">{props.Descripcion2}</div>
                </Collapse>
              </div>
            </div>

            <div>
              {props.lsImg.map(it=>{
                var UrlImg = require("../img/" + it.ImgUrl);
                return(<ModalImg imgPrin={UrlImg.default} />)
              })}
            </div>

            <div className="p-0 m-0  ">
              <Collapse in={open}>
                <div id="example-collapse-text">
                    {props.lsImgDos.map(it2=>{
                    var UrlImg2 = require("../img/" + it2.ImgUrl);
                    return(<ModalImg imgPrin={UrlImg2.default} />)
                    })}
                </div>
              </Collapse>
            </div>
          </>
        
     
    </div>
  );
}

export default Example;
