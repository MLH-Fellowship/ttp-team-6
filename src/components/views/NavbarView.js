import React from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';

const NavbarView = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
            {/* Top left corner button that displays text */}
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>

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
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
        </>
    );
};

export default NavbarView;