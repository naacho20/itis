import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import imgPersona from "../assets/img/person2.jpg";
import styles from "styled-components";

const Styles = styles.div`
  h3, p {
    color: #7e7e7e;
  },

  .mt35 {
    margin-top: 35px;
  }  
`;
export const About = (props) => {
  return (
    <Styles>
      <Container id={props.id} style={{ paddingBottom: 90, paddingTop: 90 }}>
        <Row>
          <Col
            sm={12}
            md={6}
            style={{ paddingLeft: 30, paddingRight: 30, marginTop: 15 }}
          >
            <Image fluid src={imgPersona} rounded />
          </Col>
          <Col
            sm={12}
            md={6}
            style={{ paddingLeft: 30, paddingRight: 30, marginTop: 15 }}
          >
            <h3>BIENVENIDO A MI SITIO</h3>
            <Dropdown.Divider style={{ marginBottom: 35, marginTop: 25 }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, delectus non saepe consequuntur inventore iusto nisi
              ratione totam eum quaerat deleniti illo pariatur id nemo officiis
              libero esse doloremque porro temporibus? Fuga mollitia iure ipsa,
              error placeat voluptatem officia amet, magni, velit molestiae vel
              dicta saepe nihil adipisci aliquid voluptate ratione consectetur?
              Iste, libero? Dicta amet distinctio deleniti velit impedit, qui
              harum nisi! Magnam, ipsam sunt eos atque quo cupiditate vero iure
              sed eaque aspernatur culpa quod debitis, deserunt excepturi
              dolorem! Sit dicta ratione quidem adipisci a facilis culpa quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              fugiat quisquam aut, porro, nihil tempora quod recusandae
              obcaecati, cupiditate dignissimos officia tenetur. Quia, totam.
              Animi cupiditate praesentium adipisci illum ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              aliquid culpa! In ut veniam nulla.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: 55 }}>
          <Col style={{ paddingLeft: 30, paddingRight: 30 }}>
            <h3>MIS SKILLS</h3>
            <Dropdown.Divider style={{ marginBottom: 35, marginTop: 25 }} />
            <div>
              <ProgressBar variant="dark" label="C#" now={80} />
            </div>
            <div className="mt35">
              <ProgressBar variant="dark" label="ASP.NET MVC" now={60} />
            </div>
            <div className="mt35">
              <ProgressBar
                variant="dark"
                label="HTML / CSS / JQUERY"
                now={60}
              />
            </div>
            <div className="mt35">
              <ProgressBar variant="dark" label="SQL SERVER" now={80} />
            </div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
