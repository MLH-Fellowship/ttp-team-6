import React from "react";
import "../styles/MyPortfolioView.css";
import { Link } from "react-router-dom";

const Home = ({ name, description, resume }) => {
  return (
    <div id="home">
      <div class="container">
        <h1 class="home-title" class="load-hidden">
          Hi, I'm <span class="text-info">{name}</span>
        </h1>
        <h4 className="home-description">{description}</h4>
        <div className="row mt-3">
          <a href="#about" className="btn btn-lg btn-outline-info ml-3">
            <strong>Learn More</strong>
          </a>
          <a
            href={resume}
            target="_blank"
            className="btn btn-lg btn-outline-info ml-2"
          >
            <strong>View Resume</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
