import React from "react";
import { ProgressBar } from "react-bootstrap";
import { dataSkills } from "../assets/info/data";
import styles from "styled-components";
const Styles = styles.div`
  .mt35 {
    margin-top: 35px;
  }  
`;
const ProgressBarComponent = () => {
  return (
    <Styles>
      {dataSkills.map((data, index) => (
        <div className="mt35" key={index}>
          <ProgressBar variant="dark" label={data.label} now={data.now} />
        </div>
      ))}
    </Styles>
  );
};

export default ProgressBarComponent;
