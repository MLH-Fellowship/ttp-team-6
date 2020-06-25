import React from "react";
import "../styles/MyPortfolioView.css";
import { Link } from "react-router-dom";

const Home = ({ name, description }) => {
  return (
    <div id="home">
      <div class="container">
        <h1 class="home-title" class="load-hidden">
          Hi, I'm <span class="text-info">{name}</span>
        </h1>
        <h4 className="home-description">{description}</h4>
        <Link to="/" className="btn btn-lg btn-outline-info mt-2">
          <strong>Learn More</strong>
        </Link>
      </div>
    </div>
  );
};

export default Home;
