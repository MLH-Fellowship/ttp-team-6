import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const ExtraPageView = () => {
  return (
    <>
      <div className="page-body">
        <ParticlesBg type="circle" bg={true} />
        <div className="text-center">
          <div className="navbar-width d-flex p-3 mx-auto flex-column">
            <div className="header mb-5">
              <h3 className="float-left">Online Portfolios</h3>
              <div className="nav float-right justify-content-center">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/portfolios" className="nav-link ml-4">
                  Portfolios
                </Link>
                <Link to="/extras" className="nav-link active ml-4">
                  Extras
                </Link>
              </div>
            </div>
          </div>

          <div className="overview">
            <h1>Extra Page</h1>
            <p className="lead">
              This is ExtraPageView! This page should have a collection of
              different online portfolios that are downloadable and editable.
            </p>
          </div>

          <div className="row mt-4 popup">
            <div className="col">
              <div className="card">
                <a
                  href="https://ryanfitzgerald.github.io/devblog/"
                  target="_blank"
                >
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/YzR8nov.png"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a
                  href="https://nordicgiant2.github.io/react-nice-resume-page/index.html#about"
                  target="_blank"
                >
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/XIM0We6.png"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a
                  href="https://bootstrapmade.com/demo/MyResume/"
                  target="_blank"
                >
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/dTXStBB.png"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-4 popup">
            <div className="col">
              <div className="card">
                <a href="https://bootstrapmade.com/demo/Kelly/" target="_blank">
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/ry2QiS4.png"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a
                  href="https://bootstrapmade.com/demo/iPortfolio/"
                  target="_blank"
                >
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/hYTqPea.png"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a
                  href="https://bootstrapmade.com/demo/Lonely/"
                  target="_blank"
                >
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/YWjipZV.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraPageView;
