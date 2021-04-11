import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link } from "react-scroll";

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

const Styles = styles.div`
    h5 {
        font-size: 1.8rem !important;
        color: white;
    }

    ul>li>a {
        color:white;
    }

    .icon {

    }
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <Container fluid className="footer mt-auto p-5 bg-dark">
          <Container>
            <Row>
              <Col sm={12} md={6} className="justify-content-start">
                <h5 className="display-4 light">LINKS DEL SITIO</h5>
                <ul class="list-unstyled">
                  {menuItems.map((item, index) => {
                    return (
                      <li key={index} style={{ marginTop: 10 }}>
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          href="#"
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col sm={12} md={6} className="justify-content-start">
                <h5 className="display-4 light">REDES SOCIALES</h5>
                <span>
                  <a
                    href="https://github.com/naacho20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub
                      style={{
                        height: "2.3rem",
                        width: "2.3rem",
                        color: "white",
                        marginRight: 15,
                      }}
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/ignacio-sanmartino-li"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin
                      style={{
                        height: "2.3rem",
                        width: "2.3rem",
                        color: "white",
                        marginRight: 15,
                      }}
                    />
                  </a>
                </span>
              </Col>
            </Row>
          </Container>
        </Container>
      </Styles>
    );
  }
}
