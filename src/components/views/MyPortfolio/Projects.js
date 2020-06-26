import React from "react";
import { Card, Button } from "react-bootstrap";

const Projects = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectLink,
  projectImageII,
  projectTitleII,
  projectDescriptionII,
  projectLinkII,
  projectImageIII,
  projectTitleIII,
  projectDescriptionIII,
  projectLinkIII,
}) => {
  return (
    <div id="projects">
      <h2 className="projects-title pt-4">Projects</h2>
      <div className="container mt-4 pt-2">
        <Card style={{ width: "18rem" }} className="mr-5">
          {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
          <Card.Img variant="top" src={projectImage} />
          <Card.Body>
            <Card.Title>{projectTitle}</Card.Title>
            <Card.Text>{projectDescription}</Card.Text>
            {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
            <Button variant="info" href={projectLink} target="_blank">
              Checkout the project
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="mr-5">
          {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
          <Card.Img variant="top" src={projectImageII} />
          <Card.Body>
            <Card.Title>{projectTitleII}</Card.Title>
            <Card.Text>{projectDescriptionII}</Card.Text>
            {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
            <Button variant="info" href={projectLinkII} target="_blank">
              Checkout the project
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
          <Card.Img variant="top" src={projectImageIII} />
          <Card.Body>
            <Card.Title>{projectTitleIII}</Card.Title>
            <Card.Text>{projectDescriptionIII}</Card.Text>
            {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
            <Button variant="info" href={projectLinkIII} target="_blank">
              Checkout the project
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
