import React from "react";
import { Container, Row, Col, Dropdown, Form, Button } from "react-bootstrap";
import styles from "styled-components";
import { GoLocation } from "react-icons/go";
import { AiTwotonePhone } from "react-icons/ai";
import { BsEnvelopeOpen } from "react-icons/bs";
const Styles = styles.div`
  h3, h6, p, .icon {
    color: #7e7e7e;
  },

  h6 {
    margin-top: 1rem;
  }
  .contenedor {
    padding-bottom: 90px;
    padding-top: 90px;
  }

  .divisor {
    border-top: 3px solid #e9ecef;
  }

  .fila {
    margin-top: 3rem;
  }

  .icon {
    height: 3rem;
    width: 3rem;
  }

  .w100 {
    width: 100%;
  }
`;
export const Contact = (props) => {
  return (
    <Styles>
      <Container id={props.id} className="contenedor">
        <Row className="justify-content-md-center">
          <Col md={6} className="text-center">
            <h3>CONTACTATE CONMIGO</h3>
            <Dropdown.Divider className="divisor" />
            <p>
              No dudes en contactarte conmigo, abajo encontraras mis canales de
              comunicación y un formulario para enviarme un email.
            </p>
          </Col>
        </Row>
        <Row className="fila text-center">
          {/* <Col sm={12} md={4}>
            <GoLocation
              className="icon"
              style={{ height: "3rem", width: "3rem" }}
            />
            <h6 style={{ marginTop: "1rem" }}>UBICACIÓN</h6>
            <p>Av. Siempre Viva 123 | Rafaela, Santa Fe</p>
          </Col> */}
          <Col sm={12} md={6}>
            <AiTwotonePhone className="icon" />
            <h6>TELEFONO</h6>
            <p>3492 - 692276</p>
          </Col>
          <Col sm={12} md={6}>
            <BsEnvelopeOpen className="icon" />
            <h6>EMAIL</h6>
            <p>nachosanmartino@gmail.com</p>
          </Col>
        </Row>
        <Dropdown.Divider className="mt-4" />
        <Form>
          <Row className="fila">
            <Col sm={12} md={6}>
              <Form.Group controlId="formNombreContacto">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
              </Form.Group>
              <Form.Group controlId="formEmailContacto">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su email" />
                <Form.Text className="text-muted">
                  No compartiremos su email con nadie.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formAsuntoContacto">
                <Form.Label>Asunto</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el asunto" />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group controlId="formMensajeContacto">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  placeholder="Ingrese su mensaje"
                />
              </Form.Group>
              <Button className="w100" variant="dark" type="submit">
                ENVIAR
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Styles>
  );
};
