import React from "react";
import { Modal } from "react-bootstrap";
export const ModalComponent = (props) => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.ok ? "Exito" : "Error"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          {props.ok ? "La consulta fue enviada" : "Error al enviar la consulta"}
        </p>
      </Modal.Body>
    </Modal.Dialog>
  );
};
