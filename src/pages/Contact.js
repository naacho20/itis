import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import styles from "styled-components";

const Styles = styles.div`
  h3, p {
    color: #7e7e7e;
  },
`;
export const Contact = (props) => {
  return (
    <Styles>
      <Container id={props.id} style={{ paddingBottom: 90, paddingTop: 90 }}>
        <Row className="justify-content-md-center">
          <Col md={6} style={{ textAlign: "center" }}>
            <h3>CONTACTATE CONMIGO</h3>
            <Dropdown.Divider style={{ borderTop: "3px solid #e9ecef" }} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur odit cupiditate excepturi nesciunt consequuntur
              reprehenderit.
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
