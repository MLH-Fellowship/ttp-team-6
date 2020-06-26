import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavbarView = ({ name }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        {/* Top left corner button that displays text */}
        <Navbar.Brand href="#home">{name}</Navbar.Brand>

        {/* Top left corner button that displays an image */}
        {/* <Navbar.Brand href="#home">
        <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Navbar.Brand> */}

        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarView;
