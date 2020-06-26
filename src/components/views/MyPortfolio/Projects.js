import React from "react";
import { Card, Button } from "react-bootstrap";

const Projects = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectLink,
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

        <Card style={{ width: "18rem" }}>
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
      </div>
    </div>
  );
};

export default Projects;
