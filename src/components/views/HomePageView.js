import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const HomePageView = () => {
  return (
    <>
      <div className="page-body">
        <ParticlesBg num={200} type="circle" bg={true} />
        <div className="text-center">
          <div className="navbar-width d-flex p-3 mx-auto flex-column">
            <div className="header mb-5">
              <h3 className="float-left">Online Portfolios</h3>
              <div className="nav float-right justify-content-center">
                <Link to="/" className="nav-link active">
                  Home
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
              Nowadays, having an online portfolio and presence is really
              important. More importantly, each person has their own preferences
              towards look and design. The purpose of this app is to gather a
              multitude of reusable portfolio templates for you to choose from.
              Three portfolios will be made by us, and the rest are free to
              download portfolios made by other people online.
            </p>
            <Link
              to="/portfolios"
              className="btn btn-lg btn-outline-light mt-4 mr-2"
            >
              Choose A Portfolio
            </Link>
            <a
              href="https://github.com/MLH-Fellowship/ttp-team-6"
              target="_blank"
              className="btn btn-lg btn-outline-light mt-4 ml-2"
            >
              View The Repository
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageView;
