import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import banner from "../assets/img/banner.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 100vh;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .jumboTitle {
    color: white;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .jumboTitle > h1 {
    font-size: 5rem;
  }
`;

export const Jumbotron = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container className="jumboTitle">
          <h1>IT.IS</h1>
          <h5>Bienvenidos a mi sitio web!</h5>
          <p>En este voy a comentarles un poco sobre mí y mis proyectos.</p>
        </Container>
      </Jumbo>
    </Styles>
  );
};
