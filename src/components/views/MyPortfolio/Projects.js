import React from "react";
import { Card, Button } from "react-bootstrap";

const Projects = ({
  /* It's all hard-coded. Rip. */

  projectImage,
  projectImageII,
  projectImageIII,
  projectImageIV,
  projectImageV,
  projectImageVI,

  projectTitle,
  projectTitleII,
  projectTitleIII,
  projectTitleIV,
  projectTitleV,
  projectTitleVI,

  projectDescription,
  projectDescriptionII,
  projectDescriptionIII,
  projectDescriptionIV,
  projectDescriptionV,
  projectDescriptionVI,

  projectLink,
  projectLinkII,
  projectLinkIII,
  projectLinkIV,
  projectLinkV,
  projectLinkVI,
}) => {
  return (
    <div id="projects">
      <br />
      <br />
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

      <div className="container mt-4 pt-2">
        <Card style={{ width: "18rem" }} className="mr-5">
          {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
          <Card.Img variant="top" src={projectImageIV} />
          <Card.Body>
            <Card.Title>{projectTitleIV}</Card.Title>
            <Card.Text>{projectDescriptionIV}</Card.Text>
            {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
            <Button variant="info" href={projectLinkIV} target="_blank">
              Checkout the project
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="mr-5">
          {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
          <Card.Img variant="top" src={projectImageV} />
          <Card.Body>
            <Card.Title>{projectTitleV}</Card.Title>
            <Card.Text>{projectDescriptionV}</Card.Text>
            {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
            <Button variant="info" href={projectLinkV} target="_blank">
              Checkout the project
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          {/* The line below displays an image in the card, to change it, simple change the link in "src" */}
          <Card.Img variant="top" src={projectImageVI} />
          <Card.Body>
            <Card.Title>{projectTitleVI}</Card.Title>
            <Card.Text>{projectDescriptionVI}</Card.Text>
            {/* "variant" determines what color the button will have courtesy of React Bootstrap, checkout examples here: https://react-bootstrap.netlify.app/components/buttons/#buttons */}
            <Button variant="info" href={projectLinkVI} target="_blank">
              Checkout the project
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
