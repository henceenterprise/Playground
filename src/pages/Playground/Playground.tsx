// @ts-check

import React from "react";

import { Container } from "../../components";

import styles from "./Playground.module.scss";

const Playground: React.FC = () => {
  return (
    <>
      <section className={styles.playground}>
        <Container>Playground</Container>
      </section>
    </>
  );
};

export default Playground;
