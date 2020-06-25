import React from "react";
import "../styles/MyPortfolioView.css";

const Contact = ({ email }) => {
  return (
    <div id="contact">
      <div className="container">
        <h2 className="contact-title">Contact</h2>
        <a
          target="_blank"
          className="btn btn-lg btn-outline-light mt-3"
          href={email}
        >
          <strong>Email Me</strong>
        </a>
      </div>
    </div>
  );
};

export default Contact;
