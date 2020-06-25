import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <Col md={4}>
    <h1> About me</h1>
    </Col>
    <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
  </Row>
  <Row>
    <p>Here is some test about me..</p>
  </Row>
  <Row>
    <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
  </Row>
</Container>
    </>
  );
};

export default AboutPageView;
