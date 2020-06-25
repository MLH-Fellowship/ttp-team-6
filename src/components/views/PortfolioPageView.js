import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const PortfolioPageView = () => {
  return (
    <>
      <ParticlesBg type="circle" bg={true} />
      <div className="text-center">
        <div className="navbar-width d-flex h-100 p-3 mx-auto flex-column">
          <div className="header mb-5">
            <h3 className="float-left">Online Portfolios</h3>
            <div className="nav float-right justify-content-center">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link ml-4">
                About
              </Link>
              <Link to="/portfolios" className="nav-link active ml-4">
                Portfolios
              </Link>
              <Link to="/extras" className="nav-link ml-4">
                Extras
              </Link>
            </div>
          </div>                                              
        </div>

        <div className="overview">
          <h1>Portfolio Page</h1>
          <p className="lead">
            This is PortfolioPageView! This page should have a collection of
            different portfolios, styled using cards from bootstrap.
          </p>
        </div>

        <div className="row mt-4 popup">
          <div className="col" onClick="">
            <div className="card">
            <Link to="/portfolio-1" className="nav-link active ml-4">
                Portfolio-1 
              </Link>
              <img
                className="card-img-top portfolio-image"
                alt="Image"
                src=""
              />
            </div>
          </div>
          <div className="col" onClick="">
            <div className="card">
              <img
                className="card-img-top portfolio-image"
                alt="Image"
                src=""
              />
            </div>
          </div>
          <div className="col" onClick="">
            <div className="card">
              <img
                className="card-img-top portfolio-image"
                alt="Image"
                src=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPageView;
