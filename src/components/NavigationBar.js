import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const menuItems = [
  {
    to: "Home",
    title: "Inicio",
  },
  {
    to: "About",
    title: "Sobre mí",
  },
  {
    to: "Contact",
    title: "Contacto",
  },
];

const Styles = styled.div`
  .navbar {
    background-color: #fff;
  }

  .navbar-nav .nav-link {
    color: #000;

    &:hover {
      border-bottom: 1px solid #333;
    }
  }

  .active {
    border-bottom: 1px solid #333;
    color: #000;
  }
`;

export default class NavigationBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <Styles>
        <Navbar expand="lg" fixed="top">
          <Navbar.Brand onClick={this.scrollToTop} href="#">
            IT.IS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuItems.map((item, index) => {
                return (
                  <Nav.Item>
                    <Link
                      activeClass="active"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="nav-link"
                      href="#"
                    >
                      {item.title}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}
