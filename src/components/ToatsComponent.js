import React, { useState } from "react";
import { Toast } from "react-bootstrap";

export const ToatsComponent = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Toast
      show={show}
      delay={2000}
      autohide
      onClose={() => setShow(false)}
      className={props.ok ? "bg-success" : "bg-danger"}
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      <Toast.Header>{props.ok ? "Exito" : "Error"}</Toast.Header>
      <Toast.Body>
        {props.ok ? "La consulta fue enviada" : "Error al enviar la consulta"}
      </Toast.Body>
    </Toast>
  );
};
