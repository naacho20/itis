import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Layout } from "../components/Layout";

export const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Layout>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          ipsum odio? Perferendis quisquam maiores numquam ab inventore ipsam,
          facere fugit corporis sunt tempora doloribus vitae minus fugiat
          sapiente esse quod, atque saepe, nisi sed quia iste! Delectus, ducimus
          obcaecati nulla cum ab eius earum, deleniti sequi ullam deserunt
          placeat magni?
        </p>
      </Layout>
    </div>
  );
};
