import React from "react";
import "../styles/MyPortfolioView.css";

const About = ({ about, aboutTwo, profilePicture }) => {
  return (
    <div id="about">
      <h2 className="about-title pt-5">About Me</h2>
      <div className="container">
        <div className="row about-description mt-5 pt-2">
          <div className="col-6">
            <p>{about}</p>
            <p>{aboutTwo}</p>
          </div>
          <div className="col-6">
            <img
              className="about-image"
              alt="Profile Picture"
              src={profilePicture}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
