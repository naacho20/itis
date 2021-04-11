import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #fff;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/#/">IT.IS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">Sobre mí</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
