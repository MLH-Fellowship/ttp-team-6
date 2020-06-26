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
      <ParticlesBg type="square" bg={true} />
      <div className="text-center">
        <div className="navbar-width d-flex h-100 p-3 mx-auto flex-column">
          <div className="header mb-5">
            <h3 className="float-left">Online Portfolios</h3>
            <div className="nav float-right justify-content-center">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-link ml-4">
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
    <Col  md={{ span: 4, offset: 4 }}>
    
    <h3> About me</h3>
    <div class="fakeimg">
    <Image
     width={128}
     height={128}
     className="mr-3"
    src="https://placehold.it/150x80?text=IMAGE/128x128"
    alt="Example js"
  />
    </div>
    </Col>
  </Row>
  <Row>
    <p>Lorem ipsum dolor sit amet, erat justo voluptua per at. Tollit tempor rationibus nam eu, mel ut esse munere albucius, ne qui erat option. Wisi nostrud cum ea, eu tale denique duo. Ei menandri platonem mel, ius prima placerat deseruisse ad. Ad qui petentium signiferumque, ei sale ludus feugait has.</p>
  </Row>
    <Row>
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
    rounded
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
    roundedCircle 
  />

</Media>
<h5> Example js</h5>
</Col>
  </Row>
</Container>
    </>
  );
};

export default AboutPageView;
