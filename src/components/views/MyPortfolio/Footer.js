import React from "react";
import "../styles/MyPortfolioView.css";

const Footer = ({ linkedIn, github, twitter, facebook }) => {
  return (
    <div id="footer">
      <div className="container">
        <a href="#home" class="back-to-top">
          <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div class="social-links">
          <a href={linkedIn} target="_blank">
            <i class="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href={github} target="_blank">
            <i class="fa fa-github fa-inverse"></i>
          </a>
          <a href={twitter} target="_blank">
            <i class="fa fa-twitter fa-inverse"></i>
          </a>
          <a href={facebook} target="_blank">
            <i class="fa fa-facebook fa-inverse"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
