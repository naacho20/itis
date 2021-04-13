import React from "react";
import { Container, Row, Col, Dropdown, Form, Button } from "react-bootstrap";
import styles from "styled-components";
import { AiTwotonePhone } from "react-icons/ai";
import { BsEnvelopeOpen } from "react-icons/bs";
import axios from "axios";
import { Toast } from "react-bootstrap";

const Styles = styles.div`
  h3, h6, p, .icon {
    color: #7e7e7e;
  }

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
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      showModal: false,
      succesSend: true,
      showToast: false,
    };
  }
  render() {
    return (
      <Styles>
        <Container
          id={this.props.id}
          className="contenedor"
          style={{ position: "relative", minHeight: 100 }}
        >
          <Row className="justify-content-md-center">
            <Col md={6} className="text-center">
              <h3>CONTACTATE CONMIGO</h3>
              <Dropdown.Divider className="divisor" />
              <p>
                No dudes en contactarte conmigo, abajo encontraras mis canales
                de comunicación y un formulario para enviarme un email.
              </p>
            </Col>
          </Row>
          <Row className="fila text-center">
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
          <Form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <Row className="fila">
              <Toast
                show={this.state.showToast}
                delay={2500}
                autohide
                onClose={() => {
                  this.setState({ showToast: false });
                }}
                className={this.state.succesSend ? "bg-success" : "bg-danger"}
                style={{
                  position: "absolute",
                  right: 0,
                  color: "white",
                  zIndex: 50,
                }}
              >
                <Toast.Header closeButton="false">
                  {this.state.succesSend ? "ÉXITO" : "ERROR"}
                </Toast.Header>
                <Toast.Body>
                  {this.state.succesSend
                    ? "La consulta se envió con éxito"
                    : "Hubo un error al enviar la consulta"}
                </Toast.Body>
              </Toast>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label htmlFor="name">Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="exampleInputEmail1">Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Ingrese su email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="subject">Asunto</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    aria-describedby="subjectHelp"
                    placeholder="Ingrese el asunto"
                    value={this.state.subject}
                    onChange={this.onSubjectChange.bind(this)}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label htmlFor="message">Mensaje</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={7}
                    placeholder="Ingrese su mensaje"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-dark btn-block">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Styles>
    );
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "", subject: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://itis-mailer.herokuapp.com/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        this.setState({
          showToast: true,
          succesSend: true,
        });
        this.resetForm();
      } else if (response.data.status === "fail") {
        this.setState({
          showToast: true,
          succesSend: false,
        });
      }
    });
  }
}

export default Contact;
