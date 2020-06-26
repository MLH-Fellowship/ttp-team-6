import React from "react";
import NavbarView from "./MyPortfolio/NavbarView";
import Home from "./MyPortfolio/Home";
import About from "./MyPortfolio/About";
import Projects from "./MyPortfolio/Projects";
import Contact from "./MyPortfolio/Contact";
import Footer from "./MyPortfolio/Footer";
import info from "./MyPortfolio/ChangeYourInfoHere";

const MyPortfolioView = () => {
  return (
    <div>
      <NavbarView name={info.yourName} />
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
        projectImageII={info.yourProjectImageII}
        projectImageIII={info.yourProjectImageIII}
        projectImageIV={info.yourProjectImageIV}
        projectImageV={info.yourProjectImageV}
        projectImageVI={info.yourProjectImageVI}
        projectTitle={info.yourProjectTitle}
        projectTitleII={info.yourProjectTitleII}
        projectTitleIII={info.yourProjectTitleIII}
        projectTitleIV={info.yourProjectTitleIV}
        projectTitleV={info.yourProjectTitleV}
        projectTitleVI={info.yourProjectTitleVI}
        projectDescription={info.yourProjectDescription}
        projectDescriptionII={info.yourProjectDescriptionII}
        projectDescriptionIII={info.yourProjectDescriptionIII}
        projectDescriptionIV={info.yourProjectDescriptionIV}
        projectDescriptionV={info.yourProjectDescriptionV}
        projectDescriptionVI={info.yourProjectDescriptionVI}
        projectLink={info.yourProjectLink}
        projectLinkII={info.yourProjectLinkII}
        projectLinkIII={info.yourProjectLinkIII}
        projectLinkIV={info.yourProjectLinkIV}
        projectLinkV={info.yourProjectLinkV}
        projectLinkVI={info.yourProjectLinkVI}
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
