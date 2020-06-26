import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const PortfolioPageView = () => {
  return (
    <>
      <div className="page-body">
        <ParticlesBg num={200} type="circle" bg={true} />
        <div className="text-center">
          <div className="navbar-width d-flex p-3 mx-auto flex-column">
            <div className="header mb-4">
              <h3 className="float-left">Online Portfolios</h3>
              <div className="nav float-right justify-content-center">
                <Link to="/" className="nav-link">
                  Home
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
            <h1>Our Custom Portfolios</h1>
            <p className="lead">
              Due to limited time constraints, we were only able to design one
              portfolio (inspired by cobidev) that is easy to download and
              change to meet your needs. View the README in the repository for
              this project to get started. All the links down below will lead to
              the same portfolio.
            </p>
          </div>

          <div className="row mt-4 popup">
            <div className="col">
              <div className="card">
                <Link to="/myPortfolio">
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/r5Etjcw.png"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/myPortfolio">
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/r5Etjcw.png"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <Link to="/myPortfolio">
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/r5Etjcw.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPageView;
