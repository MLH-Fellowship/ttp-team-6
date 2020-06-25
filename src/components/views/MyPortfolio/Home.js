import React from "react";
import "../styles/MyPortfolioView.css";
import { Link } from "react-router-dom";

const Home = ({ name, description }) => {
  return (
    <div id="home" className="jumbotron">
      <div class="container">
        <h1 class="home-title" class="load-hidden">
          Hi, I'm <span class="name-text-color">{name}</span>
        </h1>
        <h4 className="home-description">{description}</h4>
        <Link to="/" className="btn btn-outline-success mt-2">
          <strong>Know More</strong>
        </Link>
      </div>
    </div>
  );
};

export default Home;
