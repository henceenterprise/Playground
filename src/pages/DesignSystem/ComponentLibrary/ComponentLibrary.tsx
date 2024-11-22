// @ts-check

import React from "react";

import styles from "./ComponentLibrary.module.scss";

import { Container } from "../../../components";

const ComponentLibrary: React.FC = () => {
  return (
    <>
      <section className={styles.componentLibrary}>
        <Container>Component Library</Container>
      </section>
    </>
  );
};

export default ComponentLibrary;
