import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const AboutPageView = () => {
  return (
    <>
      <ParticlesBg type="circle" bg={true} />
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

        <div className="overview mt-5">
          <br />
          <br />
          <h1>Overview</h1>
          <p className="lead mt-4">
            This will be the about page
          </p>
          <Link to="/portfolios" className="btn btn-lg btn-light mt-4">
            Choose A Portfolio!
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPageView;
