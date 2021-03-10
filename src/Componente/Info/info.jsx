import React, { Component } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './info.css'

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let img1 = require('./IMG/AwardsPublications01.jpg'); 
        let img2 = require('./IMG/AwardsPublications02.jpg'); 
        let img3 = require('./IMG/AwardsPublications03.jpg'); 
        let img4 = require('./IMG/AwardsPublications04.jpg'); 
        let img5 = require('./IMG/AwardsPublications05.jpg'); 
        let img6 = require('./IMG/AwardsPublications06.jpg'); 
        let img7 = require('./IMG/AwardsPublications07.jpg'); 
        let img8 = require('./IMG/AwardsPublications08.jpg'); 

        return (
        <Row className='p-0 m-0 info'>
            <Col sm={6} className=' p-0 m-0 '>
                <Row  className='p-0 m-0 rowInfo sticky-top'>
                    <Col className='p-0 m-0 colInfo'>
                    <label className=' labelInfo'>
                        Julia Miceli Pitta is an Argentine graphic designer based
                        between Buenos Aires and London. Her practice is always under
                        construction. It sits in between conceptual thinking and exploration, 
                        with an unorthodox flavour. She specializes in visual identity, 
                        editorial design and creative direction.
                    </label>

                    <label className=' labelInfo'>
                        She studied at the University of Buenos Aires, where she also
                        taught Design as a teaching professor. Her aim is to encourage
                        students to think critically, develop their own voice and experiment fearlessly.
                    </label>

                    <label className=' labelInfo'>
                        Her practice is not attached to any particular style. She thinks
                        each project as an adventure that opens a question, without
                        recurring to any well-worn paths to diminish risks. Indeed, she
                        embraces the possibility to break down the boundaries of
                        graphic design and build an original language, questioning
                        things instead of being certain of them. Working primarily for
                        clients in the world of culture, she understands her exercise as a
                        design laboratory. For her, to learn and understand rules is
                        essential, but daring to break them is equally important. 
                    </label>

                    <label className=' labelInfo'>
                        Her work has been recognized all over the world. She had the
                        honor of being part of multiple exhibitions, publications and
                        contests. Moreover, in 2019 Julia won first place in two different
                        categories in The Biennale of Design in Argentina and in 2020
                        she was selected to participate in the “Object Book Festival” in
                        Milan with a book collection project.
                    </label>

                    <h3 className='h3'>Selected Clients</h3>

                    <label className=' labelInfo'>
                        <label className='subrayado'>Oscar Riera Ojeda Publishers</label> (Book Publisher), <label className='subrayado'>REMY
                        Architects</label> (Architectural Studio), <label className='subrayado'>Zurich University of the Arts</label>
                        (University), <label className='subrayado'>Buenos Aires City Government, Estudio Ramos</label>
                        (Architectural Studio), <label className='subrayado'>Emilia Naistat</label> (Visual Artist), <label className='subrayado'>Artron Art
                        Center</label> (Art Center), <label className='subrayado'>Richard Schulman</label> (Photographer), <label className='subrayado'>Thames
                        & Hudson</label> (Book Publisher), <label className='subrayado'>Phaidon</label> (Book Publisher), <label className='subrayado'>Taschen</label>
                        (Book Publisher), <label className='subrayado'>Rizzoli New York</label> (Book Publisher), <label className='subrayado'>Betina
                        González</label> (writer), <label className='subrayado'>Mariana Bendersky</label> (Architect), <label className='subrayado'>Paula Speier</label>
                        (Fashion Designer), <label className='subrayado'>Daniel Dewar & Natasha Fox</label> (Writers), <label className='subrayado'>
                        Giovanni Presutti</label> (Photographer), <label className='subrayado'>Alberto Campo Baeza</label>
                         (Architectural Studio), <label className='subrayado'>Nic Lehoux</label> (Photographer).
                    </label>

                    <h3 className='h3'>Services</h3>

                    <Row className='p-0 m-0 labelInfo'>
                        <Col className='p-0 m-0 '>
                              <div>+ Creative Direction</div>
                              <div>+ Art Direction</div>
                              <div>+ Visual Identity</div>
                              <div>+ Editorial Design</div>
                        </Col>
                        <Col className='p-0 m-0 '>
                              <div>+ Illustration</div>
                              <div>+ Web Design</div>
                              <div>+ Animation</div>
                              <div>+ Posters/Prints</div>
                        </Col>
                        <Col className='p-0 m-0 ml-2 '>
                              <div>+ Type Design</div>
                              <div>+ Singage</div>
                              <div>+ Photography</div>
                              <div>+ Installation</div>
                        </Col>
                    </Row>
                    
                    <label  className=' labelInfo'>
                        Say Hi anytime, I’m always open for new work collaborations,
                        joining teams and freelance work: <label className='subrayado'>hello@juliamicelipitta.com</label> <br/>
                        Web: <label className='subrayado'> Instagram, Behance, Linkedin</label>
                    </label>

                    </Col>

                    <Col className='p-0 m-0 colInfo'>

                    <h3 className='h3'>Honors & Awards</h3>

                    <div>— Selected to participate: Ladies, Wine & Design / Host: Jessica
                            Walsh, NYC, United States (Apr 2020)</div>
                    <div>— Contest winner: "Graphic Illustration" 4th Biennale of Design,
                            Buenos Aires, Argentina (Aug 2019)</div>
                    <div  className=' labelInfo'>— Contest winner: "Institutional Identity" 4th Biennale of Design,
                            Buenos Aires, Argentina (Aug 2019)</div>

                    <h3 className='h3'>Selected Publications</h3>        

                    <h6 className='subrayado'>Press Publications</h6>        

                    <div>— Grid System in Different Media: Preface Author (700 words),
                        HIGHTONE Publishing company (Feb 2020)</div>
                    <div>— Grid System in Different Media: Project Publication,
                        HIGHTONE Publishing company (Feb 2020)</div>
                    <div>— The Argentine Biennale Catalogue: Project Publication,
                        4th Biennale of Design (Jul 2019)</div>
                    <div>— LAYOUT NOW The proportion: Project Publication,
                        SendPoints Publishing Co., Ltd (Feb 2018)</div>
                    <div>— Code of Color: Branding & Identity: Project Publication,
                        Sandu Publishing (Jan 2016)</div>
                    <div  className=' labelInfo'>— Stand Out: Design a Personal Brand: Project Publication,
                        Denise Anderson (Jan 2016)</div>

                    <h6 className='subrayado'>Web Publications</h6>  

                    <div>— Stefan Sagmeister: Project Publication (Aug 2020)</div>
                    <div>— Femme Type: Project Publication (Jun 2020)</div>
                    <div>— 13 of the best creative resumés: Creative Bloq (Oct 2019)</div>
                    <div>— ProactiveCreative: Project Publication (Mar 2019)</div>
                    <div>— 10 of the best creative cvs: Primary Technologies (2018)</div>
                    <div className=' labelInfo'>— Design Taxi: Project Publication (Mar 2016)</div>

                    <h3 className='h3'>Selected Exhibitions</h3> 

                    <div>— Object Book Festival: Book Collection, Milan, Italy (Dec 2020)</div>
                    <div>— BID Madrid: DOXA Film Festival, Madrid, Spain (Nov 2019)</div>
                    <div>— International UBA Poster Festival: The Mud Boy, Buenos
                            Aires, Argentina (Aug 2019)</div>
                    <div>— Centro Cultural Recoleta (CCR): The Mud Boy Book, Buenos
                            Aires, Argentina (Nov 2018)</div>
                    <div>— Trimarchi (TMDG): Experimental Posters, Buenos Aires,
                            Argentina (Nov 2018)</div>
                    <div>— EUDEBA Publishing, 60 Years / 1958-2018: Social Poster,
                            Buenos Aires, Argentina (Sep 2018)</div>
                    <div>— Fragments: Typography Deconstructed, POCKO Gallery:
                            Experimental Poster, London, England (Aug 2016)</div>
                    
                    </Col> 

                 <Row className='m-0 p-0 w-100'> 
                    <Col  sm={6} className='m-0 p-0 colInfo'> 
                    <label className=' labelInfo'>
                    All rights reserved - Copyright © 2021 Julia Miceli Pitta
                    </label>
                    </Col>

                    <Col  sm={6} className='m-0 p-0 colInfo'>
                    <label className=' labelInfo'>
                    Full CV available upon request.
                    </label>
                    </Col>
                </Row>
                </Row>
             
            </Col>

            <Col sm={6} className='p-0 m-0'>
            <Image className='imgInfo ' src={img1.default}/>
            <Image className='imgInfo' src={img2.default}/>
            <Image className='imgInfo' src={img3.default}/>
            <Image className='imgInfo' src={img4.default}/>
            <Image className='imgInfo' src={img5.default}/>
            <Image className='imgInfo' src={img6.default}/>
            <Image className='imgInfo' src={img7.default}/>
            <Image className='imgInfo' src={img8.default}/>
            </Col>
        </Row> );
    }
}
 
export default Info;