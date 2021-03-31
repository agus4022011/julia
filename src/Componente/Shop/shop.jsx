import React, { Component } from 'react';
import './shop.css'
import { Col, Row } from 'react-bootstrap';
import ControlledCarousel from './CarruselShop/carruselShop';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        let z1 = require ('./img/ShopZ1.jpg');
        let z2 = require ('./img/ShopZ2.jpg');

        let Poster = require ('./img/ShopInthemood1.jpg');
        let Poster2 = require ('./img/ShopInthemood2.jpg');

        let mud1 = require ('./img/ShopMud1.jpg');
        let mud2 = require ('./img/ShopMud2.jpg');
        let mud3 = require ('./img/ShopMud3.jpg');

        let precion1 = require ('./img/ShopPresion1.jpg');
        let precion2 = require ('./img/ShopPresion2.jpg');

        let geo1 = require ('./img/ShopGeo1.jpg');
        let geo2 = require ('./img/ShopGeo2.jpg');
        let geo3 = require ('./img/Geo3.jpg');
        let geo4 = require ('./img/Geo4.jpg');

        let numb1 = require ('./img/ShopNumb1.jpg');
        let numb2 = require ('./img/ShopNumb2.jpg');
        let numb3 = require ('./img/ShopNumb3.jpg');

        let mujer1 = require ('./img/Mujer1.jpg');
        let mujer2 = require ('./img/ShopMujer2.jpg');

        let mus1 = require ('./img/ShopMusique1.jpg');
        let mus2 = require ('./img/ShopMusique2.jpg');






        return (

            <Row className='p-0 m-0 RowShop'>
                <Col sm={6} className=' p-0 m-0 colShop1'>

                <ControlledCarousel
                Titulo={'Z Poster, Print, 50 x 70 cm'}
                Precio={'30'}
                Link={'shop Now'}
                img1={z1.default}
                img2={z2.default}
                img3={null}
                img4={null}
                cantidad={1}
                />

                <ControlledCarousel
                Titulo={'In the mood for love, Poster, 21 x 28,8 cm'}
                Precio={'22'}
                Link={'shop Now'}
                img1={Poster.default}
                img2={Poster2.default}
                img3={null}
                img4={null}
                cantidad={1}
                />

                <ControlledCarousel
                Titulo={'The Mud Boy, Set of 6 Postards, 13,5 x 10,5 cm'}
                Precio={'25'}
                Link={'Coming Soon'}
                img1={mud1.default}
                img2={mud2.default}
                img3={mud3.default}
                img4={null}
                cantidad={2}
                />

                <ControlledCarousel
                Titulo={'Presión, Poster, 50 x 70 cm'}
                Precio={'25'}
                Link={'Coming Soon'}
                img1={precion1.default}
                img2={precion1.default}
                img3={null}
                img4={null}
                cantidad={1}
                />
            
                </Col>

                <Col sm={6} className=' p-0 m-0 colShop2'>
             
                <ControlledCarousel
                Titulo={'Geometrical Posters, 4 Prints, 21 x 29,7 cm'}
                Precio={'25'}
                Link={'shop Now'}
                img1={geo1.default}
                img2={geo2.default}
                img3={geo3.default}
                img4={geo4.default}
                cantidad={3}
                />

                <ControlledCarousel
                Titulo={'Numbers, Publication, 12 x 19,5 cm'}
                Precio={'12'}
                Link={'Coming Soon'}
                img1={numb1.default}
                img2={numb2.default}
                img3={numb3.default}
                img4={null}
                cantidad={2}
                />

                <ControlledCarousel
                Titulo={'Woman, Poster, 29,7 x 42 cm'}
                Precio={'25'}
                Link={'shop Now'}
                img1={mujer1.default}
                img2={mujer2.default}
                img3={null}
                img4={null}
                cantidad={1}
                />

                <ControlledCarousel
                Titulo={'Musique, Poster, 16 x 22 cm'}
                Precio={'12'}
                Link={'shop Now'}
                img1={mus1.default}
                img2={mus2.default}
                img3={null}
                img4={null}
                cantidad={1}
                />
                </Col>
               
            </Row>
        );
    }
}
 
export default Shop;

