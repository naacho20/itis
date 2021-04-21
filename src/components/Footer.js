import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
import { menuItems } from "../assets/info/data";

const Styles = styles.div`
    h5 {
        font-size: 1.8rem !important;
        color: white;
    }

    ul>li>a {
        color:#fff;
    }

    .icon {
      height: 2.3rem;
      width: 2.3rem;
      color: #fff;
      margin-right: 15px;
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
                      <li key={index} className="mt-3">
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
                    <AiFillGithub className="icon" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/ignacio-sanmartino-li"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin className="icon" />
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
