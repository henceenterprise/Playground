// @ts-check

import React from "react";

import styles from "./DesignKit.module.scss";

import { Container } from "../../../components";

const DesignKit: React.FC = () => {
  return (
    <>
      <section className={styles.designKit}>
        <Container>Design Kit</Container>
      </section>
    </>
  );
};

export default DesignKit;
