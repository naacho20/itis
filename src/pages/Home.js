import React from "react";
import { Jumbotron } from "../components/Jumbotron";

export const Home = (props) => {
  return (
    <div id={props.id} style={{ paddingBottom: 90 }}>
      <Jumbotron />
    </div>
  );
};
