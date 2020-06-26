import React from "react";
import "../styles/MyPortfolioView.css";

const About = ({ about, aboutTwo, profilePicture }) => {
  return (
    <div id="about">
      <br />
      <br />
      <h2 className="about-title pt-4">About Me</h2>
      <div className="container">
        <div className="row about-description mt-4 pt-2">
          <div className="col-7">
            <p>{about}</p>
            <p>{aboutTwo}</p>
          </div>
          <div className="col-5">
            <div className="card">
              <img
                className="card-img-top about-image"
                alt="Profile Picture"
                src={profilePicture}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
