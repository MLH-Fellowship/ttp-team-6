import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
const AboutPageView = () => {
  return (
    
    <>
      <ParticlesBg type="circle" bg={true} />
      <div className="text-center">
        <div className="navbar-width d-flex h-100 p-3 mx-auto flex-column">
          <div className="header mb-5">
            <h3 className="float-left">Online Portfolios</h3>
            <div className="nav float-right justify-content-center">
              <Link to="/" className="nav-link ml-4">
                Home
              </Link>
              <Link to="/about" className="nav-link active">
                About
              </Link>
              <Link to="/portfolios" className="nav-link ml-4">
                Portfolios
              </Link>
              <Link to="/extras" className="nav-link ml-4">
                Extras
              </Link>
            </div>
          </div>
        </div>

 
      </div>
      <Container> 
    <Row>
    <Col className="d-flex align-items-start" >your picture</Col>
    <Col  className="d-flex align-items-end" xs={4}>About Me</Col>

  </Row></Container> 
  
  
  <Container className="d-flex justify-content-start"> 
  <Row>
    <Col>
    <Image
    src="https://placehold.it/216"
    alt="Example js"
  />
  
    
    </Col>
    <Col> This is where you should describe yourself including intrest, hobbiest, techonology you use(use place holder images below to show icons of these technologies)</Col>
    </Row>
    </Container>
    

 


  <Container >
    
    <Row>
      <Col xs={2} >  space</Col>
    </Row>
  <Row>
    <Col xs={1}>       </Col>
    <Col>
    <Media>
  <Image
     width={128}
     height={128}
     className="mr-3"
    src="https://placehold.it/150x80?text=IMAGE/128x128"
    alt="Example js"
  />

</Media>
<h5> Example js</h5>
</Col>
    <Col>
    <Media>
  <Image
     width={128}
     height={128}
     className="mr-3"
    src="https://placehold.it/150x80?text=IMAGE/128x128"
    alt="Example js"
  />

</Media>
<h5> Example js</h5>
</Col>
    <Col>
    <Media>
  <Image
     width={128}
     height={128}
     className="mr-3"
    src="https://placehold.it/150x80?text=IMAGE/128x128"
    alt="Example js"
  />

</Media>
<h5> Example js</h5>
</Col>
    <Col xs={1}>      </Col>
  </Row>
</Container>

    </>
  );
};

export default AboutPageView;
