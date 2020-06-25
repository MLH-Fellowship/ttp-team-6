import React from "react";
import NavBar from "./MyPortfolio/Navbar";
import Home from "./MyPortfolio/Home";
import About from "./MyPortfolio/About";
import Projects from "./MyPortfolio/Projects";
import Contact from "./MyPortfolio/Contact";
import Info from "./MyPortfolio/ChangeYourInfoHere";

const MyPortfolioView = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default MyPortfolioView;
