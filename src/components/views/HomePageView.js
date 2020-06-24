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
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link ml-4" href="#">
                Portfolios
              </a>
            </div>
          </div>
        </div>

        <div className="overview mt-5">
          <h1>Overview</h1>
          <p className="lead">
            Nowadays, having an online portfolio and presence is really
            important. More importantly, each person has their own preferences
            towards look and design. The purpose of this app is to gather a
            multitude of reusable portfolio templates for you to choose from.
            Three portfolios will be made by us, and the rest are free to
            download portfolios made by other people online.
          </p>
          <button className="btn btn-lg btn-light">Choose A Portfolio!</button>
        </div>
      </div>
    </>
  );
};

export default HomePageView;
