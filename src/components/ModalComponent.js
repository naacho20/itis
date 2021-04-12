import React from "react";
import { Modal } from "react-bootstrap";
export const ModalComponent = (props) => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.body}</p>
      </Modal.Body>
    </Modal.Dialog>
  );
};
