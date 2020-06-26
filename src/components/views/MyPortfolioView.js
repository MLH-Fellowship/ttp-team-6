import React from "react";
import NavBar from "./MyPortfolio/NavBar";
import Home from "./MyPortfolio/Home";
import About from "./MyPortfolio/About";
import Projects from "./MyPortfolio/Projects";
import Contact from "./MyPortfolio/Contact";
import Footer from "./MyPortfolio/Footer";
import info from "./MyPortfolio/ChangeYourInfoHere";

const MyPortfolioView = () => {
  return (
    <div>
      <NavBar name={info.yourName} />
      <Home
        name={info.yourName}
        description={info.yourDescription}
        resume={info.yourResume}
      />
      <Contact email={info.yourEmail} />
      <Footer
        linkedIn={info.yourLinkedIn}
        github={info.yourGitHub}
        twitter={info.yourTwitter}
        facebook={info.yourFacebook}
      />
    </div>
  );
};

export default MyPortfolioView;
