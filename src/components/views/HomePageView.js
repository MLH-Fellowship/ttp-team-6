import React from "react";
import "./styles/HomePageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const HomePageView = () => {
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
              <Link to="/portfolios" className="nav-link ml-4">
                Portfolios
              </Link>
            </div>
          </div>
        </div>

        <div className="overview mt-5">
          <h1>Overview</h1>
          <p className="lead mt-4">
            Nowadays, having an online portfolio and presence is really
            important. More importantly, each person has their own preferences
            towards look and design. The purpose of this app is to gather a
            multitude of reusable portfolio templates for you to choose from.
            Three portfolios will be made by us, and the rest are free to
            download portfolios made by other people online.
          </p>
          <Link to="/portfolios" className="btn btn-lg btn-light mt-4">
            Choose A Portfolio!
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageView;