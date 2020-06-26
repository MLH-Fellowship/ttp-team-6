import React from "react";
import "./styles/PageView.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

const ExtraPageView = () => {
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
            <h1>Free Online Resources</h1>
            <p className="lead">
              As portfolio designs are highly dependent on user preference, we
              decided to add links to free online portfolios. If you aren't
              satisfied with our design, or you don't have the time to research
              some, feel free to check out some of the portfolios below.
            </p>
          </div>

          <div className="row mt-4 popup">
            <div className="col">
              <div className="card">
                <a
                  href="https://react-resume-template.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/o8wy1mY.png"
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
                <a href="https://developerfolio.js.org/" target="_blank">
                  <img
                    className="card-img-top portfolio-image"
                    alt="Image"
                    src="https://i.imgur.com/RLQhjLG.png"
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
