import React from "react";
import { Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import imgPersona from "../assets/img/person2.jpg";
import styles from "styled-components";
import TimelineComponent from "../components/Timeline";
import ProgressBarComponent from "../components/ProgressBarComponent";

const Styles = styles.div`
  h3, p {
    color: #7e7e7e;
  }, 

  .contenedor {
    padding-bottom: 90px;
    padding-top: 90px;
  }

  .columna {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 15px;
  }

  .divisor {
    margin-bottom: 35px;
    margin-top: 25px;
  }

  .fila {
    margin-top: 55px;
  }
`;

const myAge = () => {
  var diff = Date.now() - new Date(1995, 8, 20).getTime();
  var age = new Date(diff);
  return String(Math.abs(age.getUTCFullYear() - 1970));
};

export const About = (props) => {
  return (
    <Styles>
      <Container id={props.id} className="contenedor">
        <Row>
          <Col sm={12} md={6} className="columna">
            <Image fluid src={imgPersona} rounded />
          </Col>
          <Col sm={12} md={6} className="columna">
            <h3>SOBRE MÍ</h3>
            <Dropdown.Divider className="divisor" />
            <p>
              Mi nombre es Ignacio Sanmartino, tengo {myAge()} años y soy de
              Rafaela, Santa Fe.
            </p>
            <p>
              Actualmente estoy desempeñandome como desarrollador Full Stack en
              la empresa BZA Group, y estoy estudiando la carrera Ingenieria en
              Informática.
            </p>
            <p>
              En mi día a día, trabajo especialmente como desarrollador Backend,
              desarrollando APIs REST en C# con el framework .NET. Para el
              desarrollador Frontend usamos ASP.NET WebForms y ASP.NET MVC. Con
              respecto al manejo de datos, utilizamos SQL SERVER, con el ORM
              Entity Framework.
            </p>
            <p>
              En este momento me estoy capacitando en ReactJS, Node y MongoDB.
              Para esta capacitación estoy desarrollando un e-commerce con el
              stack MERN.
            </p>
          </Col>
        </Row>
        <Row className="fila">
          <Col className="columna">
            <h3>MIS SKILLS</h3>
            <Dropdown.Divider className="divisor" />
            <ProgressBarComponent />
          </Col>
        </Row>
        <Row className="fila" style={{ justifyContent: "center" }}>
          <Col className="columna" xs={12}>
            <h3>TIMELINE</h3>
            <Dropdown.Divider className="divisor" />
          </Col>
          <TimelineComponent />
        </Row>
      </Container>
    </Styles>
  );
};
