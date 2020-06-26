import React from "react";
import NavBar from "./MyPortfolio/Navbar";
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
      <About
        about={info.yourAbout}
        aboutTwo={info.yourAboutTwo}
        profilePicture={info.yourProfilePicture}
      />
      <Projects
        projectImage={info.yourProjectImage}
        projectTitle={info.yourProjectTitle}
        projectDescription={info.yourProjectDescription}
        projectLink={info.yourProjectLink}
        projectImageII={info.yourProjectImageII}
        projectTitleII={info.yourProjectTitleII}
        projectDescriptionII={info.yourProjectDescriptionII}
        projectLinkII={info.yourProjectLinkII}
        projectImageIII={info.yourProjectImageIII}
        projectTitleIII={info.yourProjectTitleIII}
        projectDescriptionIII={info.yourProjectDescriptionIII}
        projectLinkIII={info.yourProjectLinkIII}
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
